/**
 * Runs every story through the Storybook Vitest project (`storybook` in
 * `vitest.config.js`) and gates the result on an accessibility baseline.
 *
 * Each story renders in headless Chromium, runs its `play` function, then runs
 * axe via `@storybook/addon-a11y`. A story with axe violations fails. To let
 * the check block new violations without first fixing every existing one,
 * known failures are listed in `.storybook/a11y-baseline.json` and tolerated.
 * The baseline is a ratchet:
 *
 *  - a story with violations that is NOT in the baseline fails the run
 *  - a baseline story that now passes fails the run until its entry is removed
 *  - a baseline entry whose story no longer exists fails the run
 *  - any non-a11y failure (play function, render error) always fails the run
 *
 * Run with `pnpm run test:storybook`. Extra arguments go to Vitest, so a
 * single file can be checked with `pnpm run test:storybook src/Select`.
 * Pass `--update` to rewrite the baseline from the current results (only for
 * the files that ran). See contributing/accessibility-tests.md.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASELINE_PATH = path.join(ROOT, ".storybook", "a11y-baseline.json");
const BASELINE_REL = path.relative(ROOT, BASELINE_PATH);

const args = process.argv.slice(2);
const update = args.includes("--update");
const vitestArgs = args.filter((arg) => arg !== "--update");

// ---------------------------------------------------------------------------
// Run Vitest with the JSON reporter and collect per-story results.
// ---------------------------------------------------------------------------
const outFile = path.join(
  mkdtempSync(path.join(tmpdir(), "story-a11y-")),
  "results.json",
);
console.log("Running stories in Chromium...");
const run = spawnSync(
  "pnpm",
  [
    "exec",
    "vitest",
    "run",
    "--project=storybook",
    "--reporter=json",
    `--outputFile.json=${outFile}`,
    ...vitestArgs,
  ],
  // The JSON reporter prints nothing, and the browser's console output is
  // too noisy to be useful here. Capture stderr and show it only on a crash;
  // run Vitest directly for the full output.
  { cwd: ROOT, stdio: ["inherit", "ignore", "pipe"], encoding: "utf8" },
);

if (!existsSync(outFile)) {
  if (run.error) console.error(`Failed to start Vitest: ${run.error.message}`);
  if (run.stderr) console.error(run.stderr);
  console.error("Vitest did not produce a results file; see output above.");
  process.exit(run.status || 1);
}

const results = JSON.parse(readFileSync(outFile, "utf8"));
const baseline = existsSync(BASELINE_PATH)
  ? JSON.parse(readFileSync(BASELINE_PATH, "utf8"))
  : {};

// eslint-disable-next-line no-control-regex -- matching the ESC byte is the point
const stripAnsi = (s) => s.replace(/\x1b\[[0-9;]*m/g, "");
const isA11yMessage = (m) => /toHaveNoViolations/.test(m);
const rulesIn = (m) =>
  [...new Set([...m.matchAll(/\(([a-z0-9-]+)\)"/g)].map((x) => x[1]))].sort();
const fileOf = (key) => key.slice(0, key.indexOf(" > "));
const baselineFileExists = (key) => existsSync(path.join(ROOT, fileOf(key)));

const ranFiles = new Set();
const stories = new Map(); // "file > story" -> { status, a11y, rules, message }
const fileErrors = [];

for (const file of results.testResults) {
  const rel = path.relative(ROOT, file.name);
  ranFiles.add(rel);
  const assertionFailures = file.assertionResults.filter(
    (test) => test.status === "failed",
  );
  const message = stripAnsi(file.message || "").trim();
  if (
    file.status === "failed" &&
    (message || assertionFailures.length === 0)
  ) {
    fileErrors.push({ rel, message });
  }
  for (const test of file.assertionResults) {
    const messages = (test.failureMessages || []).map(stripAnsi);
    const failed = test.status === "failed";
    const a11y = failed && messages.length > 0 && messages.every(isA11yMessage);
    stories.set(`${rel} > ${test.fullName}`, {
      status: test.status,
      a11y,
      rules: a11y ? rulesIn(messages.join("\n")) : [],
      message: messages.join("\n\n"),
    });
  }
}

// ---------------------------------------------------------------------------
// --update: rewrite baseline entries for the files that ran.
// ---------------------------------------------------------------------------
if (update) {
  const next = Object.fromEntries(
    Object.entries(baseline).filter(
      ([key]) => !ranFiles.has(fileOf(key)) && baselineFileExists(key),
    ),
  );
  for (const [key, story] of stories) {
    if (story.a11y) next[key] = story.rules;
  }
  const sorted = Object.fromEntries(
    Object.entries(next).sort(([a], [b]) => a.localeCompare(b)),
  );
  writeFileSync(BASELINE_PATH, `${JSON.stringify(sorted, null, 2)}\n`);
  console.log(
    `Wrote ${Object.keys(sorted).length} known a11y violations to ${BASELINE_REL}.`,
  );
}

// ---------------------------------------------------------------------------
// Compare against the baseline.
// ---------------------------------------------------------------------------
const current = update
  ? JSON.parse(readFileSync(BASELINE_PATH, "utf8"))
  : baseline;

const newViolations = [...stories].filter(
  ([key, s]) =>
    s.a11y &&
    (!(key in current) || s.rules.some((rule) => !current[key].includes(rule))),
);
const otherFailures = [...stories].filter(
  ([, s]) => s.status === "failed" && !s.a11y,
);
const fixed = Object.keys(current).filter(
  (key) => stories.get(key)?.status === "passed",
);
const stale = Object.keys(current).filter(
  (key) =>
    !stories.has(key) &&
    (ranFiles.has(fileOf(key)) || !baselineFileExists(key)),
);
const failedAssertions = [...stories].filter(
  ([, story]) => story.status === "failed",
);
const onlyToleratedA11yFailures =
  results.success === false &&
  failedAssertions.length > 0 &&
  failedAssertions.every(
    ([key, story]) =>
      story.a11y &&
      key in current &&
      story.rules.length > 0 &&
      story.rules.every((rule) => current[key].includes(rule)),
  ) &&
  fileErrors.length === 0;
const runnerErrors = [];
if (run.error) runnerErrors.push(`Failed to start Vitest: ${run.error.message}`);
if (
  (run.status !== 0 || results.success === false) &&
  !onlyToleratedA11yFailures
) {
  const status =
    run.status === null
      ? `terminated by ${run.signal || "an unknown signal"}`
      : `exited with status ${run.status}`;
  runnerErrors.push(
    [
      `Vitest ${status}${results.success === false ? " and reported unsuccessful results" : ""}.`,
      run.stderr?.trim(),
    ]
      .filter(Boolean)
      .join("\n"),
  );
}
const known = [...stories].filter(
  ([key, s]) => s.a11y && key in current,
).length;
const passed = [...stories].filter(([, s]) => s.status === "passed").length;

// Drop stack frames from a failure message; keep axe's explanation.
const trimMessage = (m) =>
  m
    .split("\n")
    .filter((line) => !/^\s+(at |❯ )/.test(line))
    .join("\n")
    .trim();

const section = (title, items, render) => {
  if (items.length === 0) return;
  console.log(`\n${title}\n${"-".repeat(title.length)}`);
  for (const item of items) console.log(render(item));
};

section(
  "Stories with NEW accessibility violations",
  newViolations,
  ([key, s]) =>
    `\n✖ ${key}\n  rules: ${s.rules.join(", ")}\n\n${trimMessage(s.message).replace(/^/gm, "    ")}\n`,
);
section(
  "Stories that failed for other reasons",
  otherFailures,
  ([key, s]) =>
    `\n✖ ${key}\n\n${trimMessage(s.message).replace(/^/gm, "    ")}\n`,
);
section(
  "Story files that failed to run",
  fileErrors,
  ({ rel, message }) =>
    `\n✖ ${rel}\n\n${trimMessage(message).replace(/^/gm, "    ")}\n`,
);
section("Vitest runner errors", runnerErrors, (message) => `\n✖ ${message}\n`);
section(
  `Baseline stories that now pass (remove them from ${BASELINE_REL}, or run with --update)`,
  fixed,
  (key) => `✔ ${key}`,
);
section(
  `Baseline entries that no longer match a story (remove them from ${BASELINE_REL}, or run with --update)`,
  stale,
  (key) => `? ${key}`,
);

const problems =
  newViolations.length +
  otherFailures.length +
  fileErrors.length +
  runnerErrors.length +
  fixed.length +
  stale.length;

console.log(
  `\n${passed} stories passed, ${known} known a11y violations tolerated by ${BASELINE_REL}.`,
);
if (problems > 0) {
  console.log(
    `${problems} problem(s). See contributing/accessibility-tests.md.`,
  );
  process.exit(1);
}
