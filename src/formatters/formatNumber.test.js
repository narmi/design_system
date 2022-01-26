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

    it("formats between 0 and 1 correctly", () => {
      const actual = formatNumber("0.12", style);
      const expected = "0.12%";
      expect(actual).toEqual(expected);
    });

    it("only shows two decimal places", () => {
      const actual = formatNumber("9.12345", style);
      const expected = "9.12%";
      expect(actual).toEqual(expected);
    });

    it("does not add trailing zero if only one decimal", () => {
      const actual = formatNumber("4.9", style);
      const expected = "4.9%";
      expect(actual).toEqual(expected);
    });

    it("shows thousands separators (just in case)", () => {
      const actual = formatNumber("1200", style);
      const expected = "1,200%";
      expect(actual).toEqual(expected);
    });
  });
});
