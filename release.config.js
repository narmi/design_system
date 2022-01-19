/**
 * @module `semantic-release` config
 * @see https://semantic-release.gitbook.io/semantic-release/
 *
 * `semantic-release` runs with the following configuration via the `release.yml` github action.
 */
const config = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          // commits triggering a major version release
          { breaking: true, release: "major" },

          // commits triggering a minor version release
          { type: "feat", release: "minor" },

          // commits triggering a patch version release
          { type: "fix", release: "patch" },
          { type: "style", release: "patch" },
          { type: "perf", release: "patch" },
          { revert: true, release: "patch" },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/changelog",
      {
        preset: "conventionalcommits",
        changelogTitle:
          "# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.",
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
