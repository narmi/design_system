import formatNumber from "./formatNumber";

describe("formatNumber", () => {
  it("formats as currecny by default", () => {
    const actual = formatNumber("0");
    const expected = "$0";
    expect(actual).toEqual(expected);
  });

  it("accepts a Number as input", () => {
    const actual = formatNumber(0);
    const expected = "$0";
    expect(actual).toEqual(expected);
  });

  describe("currency", () => {
    const style = "currency";

    it("formats absolute 0 correctly", () => {
      const actual = formatNumber("0", style);
      const expected = "$0";
      expect(actual).toEqual(expected);
    });

    it("formats between 0 and 1 correctly", () => {
      const actual = formatNumber("0.5", style);
      const expected = "$0.50";
      expect(actual).toEqual(expected);
    });

    it("formats 999 correctly", () => {
      const actual = formatNumber("999", style);
      const expected = "$999";
      expect(actual).toEqual(expected);
    });

    it("shows thousands separators", () => {
      const actual = formatNumber("1200", style);
      const expected = "$1,200";
      expect(actual).toEqual(expected);
    });

    it("shows negative sign for < 0 string", () => {
      const actual = formatNumber("-1500", style);
      const expected = "-$1,500";
      expect(actual).toEqual(expected);
    });
    it("shows negative sign for < 0 number", () => {
      const actual = formatNumber(-12, style);
      const expected = "-$12";
      expect(actual).toEqual(expected);
    });
  });

  describe("percent", () => {
    const style = "percent";

    it("formats absolute 0 correctly", () => {
      const actual = formatNumber("0", style);
      const expected = "0%";
      expect(actual).toEqual(expected);
    });

    it("formats less than 1% as expected", () => {
      const actual = formatNumber("0.0023", style);
      const expected = "0.23%";
      expect(actual).toEqual(expected);
    });

    it("formats to two decimal places correctly", () => {
      const actual = formatNumber("0.12", style);
      const expected = "12%";
      expect(actual).toEqual(expected);
    });

    it("handles empty tens place correctly", () => {
      const actual = formatNumber("0.0342", style);
      const expected = "3.42%";
      expect(actual).toEqual(expected);
    });

    it("returns decimal precision of 2, rounding up tens place", () => {
      const actual = formatNumber("0.21555", style);
      const expected = "21.56%";
      expect(actual).toEqual(expected);
    });
  });
});
