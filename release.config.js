/**
 * @module `semantic-release` config
 * @see https://semantic-release.gitbook.io/semantic-release/
 *
 * `semantic-release` runs with the following configuration via the `release.yml` github action.
 */
const config = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
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
        },
      },
    ],
    [
      "@semantic-release/npm",
      {
        tarballDir: "pack",
      },
    ],
    [
      "@semantic-release/github",
      {
        tarballDir: "pack/*.tgz",
      },
    ],
    [
      "@semantic-release/git",
      {
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

module.exports = config;
