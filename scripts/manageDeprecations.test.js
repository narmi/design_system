const checkVersion = require("./manageDeprecations");

const LTS_MAJOR = 4;
const MOCK_DEPRECATION = {
  versionStart: "4.20.0",
  versionEnd: "4.28.2",
  message: "Contains regression that makes every div red",
};

describe("Manage deprecations during release (checkVersion)", () => {
  it("deprecates major versions less than LTS", () => {
    expect(
      checkVersion(
        {
          major: LTS_MAJOR - 1,
          minor: 0,
          patch: 1,
        },
        LTS_MAJOR,
      ).action,
    ).toBe("deprecate");
    expect(
      checkVersion(
        {
          major: LTS_MAJOR - 1,
          minor: 0,
          patch: 1,
        },
        LTS_MAJOR,
      ).reason,
    ).toMatch("Only the latest Major");
  });

  it("does NOT deprecate versions above or equal to LTS major", () => {
    expect(
      checkVersion(
        {
          major: LTS_MAJOR,
          minor: 1,
          patch: 12,
        },
        LTS_MAJOR,
      ).action,
    ).toBe("support");
    expect(
      checkVersion({
        major: LTS_MAJOR,
        minor: 20,
        patch: 5,
      }).action,
    ).toBe("support");
  });

  it("uses _inclusive_ version ranges", () => {
    expect(
      checkVersion(
        {
          major: 4,
          minor: 20,
          patch: 0,
        },
        LTS_MAJOR,
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
        LTS_MAJOR,
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
        LTS_MAJOR,
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
        LTS_MAJOR,
        [MOCK_DEPRECATION],
      ).action,
    ).toBe("deprecate");
  });
});
