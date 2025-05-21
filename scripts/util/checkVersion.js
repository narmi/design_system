const checkVersion = require("./manageDeprecations");

/**
 * Mocks an entry in the `versions[]`
 * defined in <root>/deprecations.json
 */
const MOCK_DEPRECATION = {
  start: "4.20.0",
  end: "4.28.2",
  message: "Contains regression that makes every div red",
};

describe("Manage deprecations during release (checkVersion)", () => {
  it("uses _inclusive_ version ranges", () => {
    expect(
      checkVersion(
        {
          major: 4,
          minor: 20,
          patch: 0,
        },
        [MOCK_DEPRECATION],
      ).action,
    ).toBe("deprecate");
    expect(
      checkVersion(
        {
          major: 4,
          minor: 28,
          patch: 2,
        },
        [MOCK_DEPRECATION],
      ).action,
    ).toBe("deprecate");
  });

  it("deprecates versions within range", () => {
    expect(
      checkVersion(
        {
          major: 4,
          minor: 24,
          patch: 16,
        },
        [MOCK_DEPRECATION],
      ).action,
    ).toBe("deprecate");
    expect(
      checkVersion(
        {
          major: 4,
          minor: 20,
          patch: 1,
        },
        [MOCK_DEPRECATION],
      ).action,
    ).toBe("deprecate");
  });
});
