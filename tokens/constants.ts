export interface ColorMode {
  mediaQuery: string;
  selector: string;
  attribute: string;
  value: string;
}

export const COLOR_MODES = {
  highContrast: {
    mediaQuery: "(prefers-contrast: more)",
    selector: '[data-prefers-contrast="more"]',
    attribute: "data-prefers-contrast",
    value: "more",
  },
} as const satisfies Record<string, ColorMode>;
