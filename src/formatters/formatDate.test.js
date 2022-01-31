import formatDate from "./formatDate";

const MOCK_DATES = {
  july4: new Date("July 4, 2022"),
  wallaceShawnBirthday: new Date("November 12, 2022"),
};

describe("formatDate", () => {
  it("formats with 'short' style by default", () => {
    const actual = formatDate(MOCK_DATES.wallaceShawnBirthday);
    const expected = "11/12/22";
    expect(actual).toEqual(expected);
  });

  describe("short", () => {
    const style = "short";

    it("no leading zeroes on month or day", () => {
      const actual = formatDate(MOCK_DATES.july4, style);
      const expected = "7/4/22";
      expect(actual).toEqual(expected);
    });

    it("no leading zero on day", () => {
      const actual = formatDate(new Date("2021-10-4"), style);
      const expected = "10/4/21";
      expect(actual).toEqual(expected);
    });

    it("all digits for MM DD dates", () => {
      const actual = formatDate(MOCK_DATES.wallaceShawnBirthday, style);
      const expected = "11/12/22";
      expect(actual).toEqual(expected);
    });
  });

  describe("long", () => {
    const style = "long";

    it("no leading zero on day", () => {
      const actual = formatDate(MOCK_DATES.july4, style);
      const expected = "July 4, 2022";
      expect(actual).toEqual(expected);
    });

    it("both digits for DD day", () => {
      const actual = formatDate(MOCK_DATES.wallaceShawnBirthday, style);
      const expected = "November 12, 2022";
      expect(actual).toEqual(expected);
    });
  });
});
