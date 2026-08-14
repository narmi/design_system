/**
 * @module `semantic-release` config
 * @see https://semantic-release.gitbook.io/semantic-release/
 *
 * `semantic-release` runs with the following configuration via the `release.yml` github action.
 */
const config = {
  branches: [
    // Maintenance branches shaped `N.N.x` (e.g. `6.21.x`). semantic-release
    // infers `range` from the branch name (`N.N.x`, patch-only enforced via
    // `EINVALIDNEXTVERSION`). We pin `channel: "patch"` so every maintenance
    // line publishes under the shared `patch` npm dist-tag; the latest patch
    // release across any active line owns the tag. Git tags remain
    // `v${version}` per `tagFormat` default.
    { name: "+([0-9]).+([0-9]).x", channel: "patch" },
    "main",
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "feat", release: "minor" },
          { type: "feature", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { breaking: true, release: "major" },
          { type: "docs", release: false },
          { type: "style", release: false },
          { type: "chore", release: false },
          { type: "refactor", release: false },
          { type: "test", release: false },
          { type: "build", release: false },
          { type: "ci", release: false },
          { type: "revert", release: "patch" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "Features", hidden: false },
            { type: "feature", section: "Features", hidden: false },
            { type: "fix", section: "Bug Fixes", hidden: false },
            { type: "perf", section: "Performance Improvements", hidden: true },
            { type: "revert", section: "Reverts", hidden: true },
            { type: "docs", section: "Documentation", hidden: true },
            { type: "style", section: "Styling", hidden: true },
            { type: "chore", section: "Miscellaneous Chores", hidden: true },
            { type: "refactor", section: "Code Refactoring", hidden: true },
            { type: "test", section: "Tests", hidden: true },
            { type: "build", section: "Build System", hidden: true },
            { type: "ci", section: "Continuous Integration", hidden: true },
          ],
        },
        writerOpts: {
          groupBy: "type",
          commitGroupsSort: "title",
          commitsSort: ["subject", "scope"],
          transform: (commit) => {
            // Filter out merge commits and commits without proper types
            if (!commit.type) {
              return null;
            }
            // Omit noisy commit types from release notes
            if (["chore", "build"].includes(commit.type)) {
              return null;
            }
            // Set shortHash for commit link text in changelog
            if (commit.hash) {
              return { ...commit, shortHash: commit.hash.substring(0, 7) };
            }
            return commit;
          },
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        preset: "conventionalcommits",
        changelogTitle:
          "# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.",
        presetConfig: {
          types: [
            { type: "feat", section: "Features", hidden: false },
            { type: "feature", section: "Features", hidden: false },
            { type: "fix", section: "Bug Fixes", hidden: false },
            { type: "perf", section: "Performance Improvements", hidden: true },
            { type: "revert", section: "Reverts", hidden: true },
            { type: "docs", section: "Documentation", hidden: true },
            { type: "style", section: "Styling", hidden: true },
            { type: "chore", section: "Miscellaneous Chores", hidden: true },
            { type: "refactor", section: "Code Refactoring", hidden: true },
            { type: "test", section: "Tests", hidden: true },
            { type: "build", section: "Build System", hidden: true },
            { type: "ci", section: "Continuous Integration", hidden: true },
          ],
        },
        writerOpts: {
          groupBy: "type",
          commitGroupsSort: "title",
          commitsSort: ["subject", "scope"],
          transform: (commit) => {
            // Filter out merge commits and commits without proper types
            if (commit.merge || !commit.type) {
              return null;
            }

            // Only include commits that match our defined types
            const validTypes = ["feat", "feature", "fix", "perf", "revert"];
            if (!validTypes.includes(commit.type)) {
              return null;
            }

            // Set shortHash for commit link text in changelog
            if (commit.hash) {
              return { ...commit, shortHash: commit.hash.substring(0, 7) };
            }

            return commit;
          },
        },
      },
    ],
    [
      "@semantic-release/npm",
      {
        pkgRoot: ".",
        provenance: true,
      },
    ],
    ["@semantic-release/github", {}],
    [
      "@semantic-release/git",
      {
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
  // Skip the `addChannel` step entirely. semantic-release invokes it when it
  // finds an in-range tag whose git-note channels don't include the current
  // branch's channel; `@semantic-release/npm`'s implementation shells to
  // `npm dist-tag add`, which the OIDC-provisioned publish token cannot
  // authorize (401). We don't rely on dist-tag re-targeting for older tags
  // -- the fresh `publish` for the next release still lands under the
  // branch's channel via the normal `--tag` argument, which is all we need.
  addChannel: [],
};

module.exports = config;
