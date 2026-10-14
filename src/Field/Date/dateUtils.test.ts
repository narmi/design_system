import {
  clampIso,
  isSelectable,
  parseDisplay,
  toDate,
  toDisplay,
  toIso,
} from "./dateUtils";

describe("Field.Date dateUtils", () => {
  describe("toDate", () => {
    it("builds a local-midnight date from YYYY-MM-DD", () => {
      const date = toDate("2026-10-14")!;
      expect([date.getFullYear(), date.getMonth(), date.getDate()]).toEqual([
        2026, 9, 14,
      ]);
      expect(date.getHours()).toBe(0);
    });

    it.each(["", "2026-02-30", "2026-13-01", "10/14/2026", "2026-1-5"])(
      "rejects %j",
      (input) => {
        expect(toDate(input)).toBeUndefined();
      },
    );

    it("accepts Feb 29 only in leap years", () => {
      expect(toDate("2024-02-29")).toBeDefined();
      expect(toDate("2026-02-29")).toBeUndefined();
    });
  });

  describe("toIso / toDisplay", () => {
    it("round-trips through local calendar fields", () => {
      expect(toIso(new Date(2026, 0, 1))).toBe("2026-01-01");
      expect(toIso(toDate("1999-12-31")!)).toBe("1999-12-31");
    });

    it("formats for the masked input", () => {
      expect(toDisplay("2026-10-14")).toBe("10/14/2026");
      expect(toDisplay("")).toBe("");
      expect(toDisplay("nope")).toBe("");
    });
  });

  describe("parseDisplay", () => {
    it("parses complete MM/DD/YYYY text", () => {
      expect(parseDisplay("10/14/2026")).toBe("2026-10-14");
      expect(parseDisplay("02/29/2024")).toBe("2024-02-29");
    });

    it.each([
      "",
      "10/14",
      "10/14/202",
      "02/30/2026",
      "13/01/2026",
      "00/10/2026",
    ])("returns undefined for %j", (input) => {
      expect(parseDisplay(input)).toBeUndefined();
    });
  });

  describe("isSelectable", () => {
    it("checks the range inclusively", () => {
      const range = { minDate: "2026-01-01", maxDate: "2026-12-31" };
      expect(isSelectable("2026-01-01", range)).toBe(true);
      expect(isSelectable("2026-12-31", range)).toBe(true);
      expect(isSelectable("2025-12-31", range)).toBe(false);
      expect(isSelectable("2027-01-01", range)).toBe(false);
    });

    it("rejects unavailable and impossible dates", () => {
      const isDateUnavailable = (iso: string) => iso === "2026-07-04";
      expect(isSelectable("2026-07-04", { isDateUnavailable })).toBe(false);
      expect(isSelectable("2026-07-05", { isDateUnavailable })).toBe(true);
      expect(isSelectable("2026-02-30", {})).toBe(false);
    });
  });

  it("clamps into the range", () => {
    const range = { minDate: "2026-03-01", maxDate: "2026-03-31" };
    expect(clampIso("2026-01-15", range)).toBe("2026-03-01");
    expect(clampIso("2026-03-15", range)).toBe("2026-03-15");
    expect(clampIso("2026-06-15", range)).toBe("2026-03-31");
    expect(clampIso("2026-06-15", {})).toBe("2026-06-15");
  });
});
