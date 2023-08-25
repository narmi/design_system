import React from "react";
import { getFlexDirection } from "./index";

describe("ResponsiveFlex: getFlexDirection", () => {
  describe("Handles direction change correcly", () => {
    const props = {
      direction: "column",
      toColumnAt: undefined,
      toRowAt: "l",
      reverseAt: undefined,
    };

    it("Does NOT change direction styles when no viewport sizes match", () => {
      const actual = getFlexDirection({
        viewportMatches: { s: false, m: false, l: false, xl: false },
        ...props,
      });
      const expected = "column";
      expect(actual).toEqual(expected);
    });

    it("Does NOT change direction styles when all sizes below 'l' are true", () => {
      const actual = getFlexDirection({
        viewportMatches: { s: true, m: true, l: false, xl: false },
        ...props,
      });
      const expected = "column";
      expect(actual).toEqual(expected);
    });

    it("Changes direction styles when the given viewport matches", () => {
      const actual = getFlexDirection({
        viewportMatches: { s: true, m: true, l: true, xl: false },
        ...props,
      });
      const expected = "row";
      expect(actual).toEqual(expected);
    });
  });

  describe("Handles reverse changes", () => {
    const props = {
      direction: "column",
      toColumnAt: undefined,
      toRowAt: undefined,
      reverseAt: "m",
    };

    it("Does not reverse at 's'", () => {
      const actual = getFlexDirection({
        viewportMatches: { s: true, m: false, l: false, xl: false },
        ...props,
      });
      const expected = "column";
      expect(actual).toEqual(expected);
    });

    it("Reverses order of flex items at 'l'", () => {
      const actual = getFlexDirection({
        viewportMatches: { s: true, m: true, l: true, xl: false },
        ...props,
      });
      const expected = "column-reverse";
      expect(actual).toEqual(expected);
    });
  });

  describe("Handles reverse and direction changes", () => {
    const props = {
      direction: "column",
      toColumnAt: undefined,
      toRowAt: "m",
      reverseAt: "l",
    };

    it("Changes to row at 'm' breakpoint", () => {
      const actual = getFlexDirection({
        viewportMatches: { s: true, m: true, l: false, xl: false },
        ...props,
      });
      const expected = "row";
      expect(actual).toEqual(expected);
    });

    it("Reverses direction of row at 'l' breakpoint", () => {
      const actual = getFlexDirection({
        viewportMatches: { s: true, m: true, l: true, xl: false },
        ...props,
      });
      const expected = "row-reverse";
      expect(actual).toEqual(expected);
    });
  });
});
