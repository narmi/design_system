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
