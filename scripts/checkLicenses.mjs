/**
 * Fails if any installed dependency (prod or dev) has a license outside the
 * allowlist below.
 *
 * This replaces `license-checker`, which walks `node_modules` the way npm lays
 * it out and only finds a fraction of the packages in pnpm's symlinked layout.
 * `pnpm licenses list` reads the lockfile, so it covers the full tree.
 *
 * SPDX expressions are evaluated rather than substring-matched: `A OR B`
 * passes if either side is allowed, `A AND B` only if both are.
 *
 * Run with `pnpm run check:licenses`.
 */
import { execFileSync } from "node:child_process";

const ALLOWED_LICENSES = new Set([
  "0BSD",
  "Apache-2.0",
  "Artistic-2.0",
  "BlueOak-1.0.0",
  "BSD-2-Clause",
  "BSD-3-Clause",
  "CC-BY-3.0",
  "CC-BY-4.0",
  "CC0-1.0",
  "ISC",
  "MIT",
  "MIT-0",
  "MPL-2.0",
  "ODC-By-1.0",
  "Python-2.0",
  "Unlicense",
  "WTFPL",
]);

/**
 * Evaluates an SPDX license expression against the allowlist. Parentheses are
 * handled by recursive descent; `AND` binds tighter than `OR`, per the spec.
 */
const isAllowed = (expression) => {
  const tokens = expression.match(/\(|\)|[^\s()]+/g) ?? [];
  let pos = 0;

  const parseTerm = () => {
    const token = tokens[pos++];
    if (token === "(") {
      const result = parseOr();
      pos++; // closing paren
      return result;
    }
    return ALLOWED_LICENSES.has(token);
  };
  const parseAnd = () => {
    let result = parseTerm();
    while (tokens[pos] === "AND") {
      pos++;
      result = parseTerm() && result;
    }
    return result;
  };
  const parseOr = () => {
    let result = parseAnd();
    while (tokens[pos] === "OR") {
      pos++;
      result = parseAnd() || result;
    }
    return result;
  };

  return tokens.length > 0 && parseOr() && pos === tokens.length;
};

const packagesByLicense = JSON.parse(
  execFileSync("pnpm", ["licenses", "list", "--json"], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  }),
);

const violations = Object.entries(packagesByLicense)
  .filter(([license]) => !isAllowed(license))
  .flatMap(([license, packages]) =>
    packages.map(
      ({ name, versions }) => `${name}@${versions.join(", ")}: ${license}`,
    ),
  );

const packageCount = Object.values(packagesByLicense).flat().length;

if (violations.length > 0) {
  console.error(
    `Found ${violations.length} package(s) with disallowed licenses:`,
  );
  violations.forEach((violation) => console.error(`  ${violation}`));
  process.exit(1);
}

console.log(`All ${packageCount} packages have allowed licenses.`);
