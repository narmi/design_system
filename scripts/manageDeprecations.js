/**
 * This files stores and manages deprecated version ranges.
 * Whenever critical regressions are found, the `DEPRECATIONS`
 * list below may be updated with the range of affected versions.
 *
 * The release workflow will update the NPM registry with any new
 * deprecations via `semantic-release`.
 */
const semver = require("semver");

/** Current Major version is the only one with "support" */
const LTS_MAJOR = 4;

/**
 * List of NDS package versions that are deprecated.
 * The start/end ranges are _inclusive_.
 */
const DEPRECATIONS = [
  {
    versionStart: "4.18.0",
    versionEnd: "4.19.0",
    message:
      "Contains Button component style regression. Please use version 4.19.1 or higher.",
  },
  {
    versionStart: "4.10.4",
    versionEnd: "4.10.5",
    message: "Contains stacking context regressions. Use 4.10.6 or higher.",
  },
];

const checkVersion = (
  version,
  ltsMajor = LTS_MAJOR,
  deprecations = DEPRECATIONS,
) => {
  const versionStr = `${version.major}.${version.minor}.${version.patch}`;
  let action = "support";
  let reason = "Automatically deprecated by semantic-release";

  if (version.major < ltsMajor) {
    action = "deprecate";
    reason =
      "Only the latest Major version of Narmi Design System is supported.";
  }

  deprecations.forEach(({ versionStart, versionEnd, message }) => {
    if (
      semver.gte(versionStr, versionStart) &&
      semver.lte(versionStr, versionEnd)
    ) {
      action = "deprecate";
      reason = message;
    }
  });

  return { action, reason };
};

module.exports = checkVersion;
