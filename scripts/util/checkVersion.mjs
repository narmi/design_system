import semver from "semver";

/**
 * Checks a parsed semantic version against
 *
 * @param {Object} version the version to check
 * @param {Array} deprecations
 * @returns {Object} { action: "support" | "depreacte", reason: string }
 */
const checkVersion = (
  version, // { major, minor, patch }
  deprecations = [],
) => {
  const versionStr = `${version.major}.${version.minor}.${version.patch}`;
  let action = "support";
  let reason;

  deprecations.forEach(({ start, end, message }) => {
    if (semver.gte(versionStr, start) && semver.lte(versionStr, end)) {
      action = "deprecate";
      reason = message;
    }
  });

  return { action, reason };
};

export default checkVersion;
