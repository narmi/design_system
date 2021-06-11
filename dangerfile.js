/* global fail, warn */
import { danger } from "danger";

const { pr } = danger.github;
const bodyAndTitle = (pr.body + pr.title).toLowerCase();
const lineChanges = pr.additions + pr.deletions;
const titleRegex = /^\[.+\] (H|M|L):.+/;
let isHighRisk = undefined;

// No PR is too small to warrant a sentence or two of summary
if (pr.body.length === 0) {
  fail("Please add a description to your PR.");
}

if (!titleRegex.test(pr.title)) {
  warn(
    `Format your PR title as follows: ${titleRegex}\nFor Example: "[indigo] M: this is a medium risk change to indigo"`
  );
} else {
  isHighRisk = pr.title.match(titleRegex)[1] === "H";
}

// for High-risk PRs, we follow additional procedure
if (isHighRisk) {
  warn(`
This is a HIGH RISK PR
 - [ ] Please approach this in a team with at least 2 other people
 - [ ] Establish clear intended results ahead of testing
 - [ ] Perform manual QA on any affected apps
 - [ ] 2 people must approve this PR`);
}

const narmiGithubPattern =
  /https?:\/\/github.com\/narmi\/[^\\\n]+\/(issues|pull)\/[0-9]+/;
// https://sentry.io/organizations/narmi/issues/996270778
// https://sentry.io/narmi/banking-production/issues/608585037
const narmiSentryPattern =
  /https?:\/\/sentry.io(\/organizations)?\/narmi(\/[^\\\n]+)?\/issues\/[0-9]+/;
const noIssueLinks =
  !bodyAndTitle.match(/#[0-9]+/) &&
  !bodyAndTitle.match(narmiGithubPattern) &&
  !bodyAndTitle.match(narmiSentryPattern);
if (noIssueLinks && lineChanges > 25) {
  fail("Please reference at least one issue when making a nontrivial change.");
}

// Check dist was compiled if src/ is changed
const srcChanged = danger.git.modified_files.filter((f) => f.match(/^src\//));
const distChanged = danger.git.modified_files.filter((f) =>
  f.match("dist/index.js")
);
if (srcChanged.length > 0 && distChanged.length === 0) {
  fail(
    "Looks like files in src/ changed! Please rebuild the dist via 'npm run build'."
  );
}

// Lint rules for modified JS templates
const templateFilesChanged = danger.git.modified_files.filter((f) =>
  f.match(/.+\.(vue|jsx)$/)
);
const templateFilesCreated = danger.git.created_files.filter((f) =>
  f.match(/.+\.(vue|jsx)$/)
);
const templateFiles = templateFilesChanged.concat(templateFilesCreated);
(async function checkTemplateContents(files) {
  const contents = await Promise.all(
    files.map((file) =>
      danger.github.utils
        .fileContents(file, pr.head.repo.full_name, pr.head.sha)
        .then((content) => ({ file, content }))
    )
  );

  contents.forEach(({ file, content }) => {
    if (content.length === 0) return;

    const matches = content.match(/type="number"/i);

    if (!matches) return;

    fail(`${file} contains a form input with type="number", which can cause unexpected stepping. Use type="text" \
with inputmode="numeric" or inputmode="decimal" for numeric fields instead.`);
  });
})(templateFiles);
