# Design Tokens

This directory contains all definitions and supporting code for NDS **design tokens**.

**Design tokens** are base values for spacing, colors, typography and more. These values
are used internally in NDS and are also available to use directly in consuming applications.

## Structure

```
tokens/
├── primitives/           # Raw values, mode-agnostic (grey scale, brand palette, spacing, etc.)
│   ├── color.json
│   ├── border.json
│   ├── space.json
│   ├── font.json
│   └── shadow.json
├── semantic/             # Role tokens, one folder per mode
│   ├── light/            # Base mode (scheme=light, contrast=normal)
│   │   └── color.json    # text/*, background/*, border/*, theme/*
│   ├── light-contrast-more/  # High contrast light mode overrides
│   │   └── color.json    # Only tokens that differ from light/
│   ├── *.stories.js      # Storybook stories
│   └── *.mdx             # Storybook docs
├── constants.ts          # Mode definitions (contrast + color-vision deficiency)
├── modes.ts              # buildModeCSS: emits mode override blocks
├── config.js             # style-dictionary v4 build configuration
└── README.md
```

## Modes

Modes are managed as additive CSS overrides appended to `tokens.css`:

- **Light/Dark** (future): will use `color-scheme` and `light-dark()` CSS functions
- **Contrast**: a three-state user preference model, driven by a `data-prefers-contrast`
  attribute on the `<html>` element:
  - _No attribute_ → follow the OS: `@media (prefers-contrast: more)` applies when the OS
    reports increased contrast.
  - `data-prefers-contrast="more"` → force high contrast regardless of OS setting.
  - `data-prefers-contrast="less"` → force the standard palette, suppressing the OS-driven
    media query. The emitted media-query rule is scoped to
    `:root:not([data-prefers-contrast="less"])` so this sentinel opts out cleanly.

To activate a specific contrast mode programmatically, set `data-prefers-contrast` on the
`<html>` element (or any ancestor, for the `"more"` case). Consumer apps typically wire this
to a stored user preference.

- **Color vision deficiency (CVD)**: status colors are re-based per deficiency so meaning
  rides the axis that survives. There is no OS media query for CVD, so these are
  attribute-only modes driven by `data-color-vision-deficiency` on the `<html>` element:
  - `data-color-vision-deficiency="red-green"` → shared **Protanopia / Deuteranopia**
    palette. The clinical names `"protanopia"` / `"deuteranopia"` are also accepted as
    aliases (emitted as extra selectors).
  - `data-color-vision-deficiency="tritanopia"` → blue–yellow deficiency palette.

  Unlike contrast, the CVD palettes are defined inline in `constants.ts`
  (`COLOR_VISION_DEFICIENCIES`) rather than as style-dictionary sources — they only
  override the primitive `--color-*Dark` / `--color-*Light` custom properties and don't
  feed any other distribution. Any consumer using those primitives picks up the CVD-safe
  value. Non-color cues (icon/label) must still accompany every status — color never
  carries the load alone.

## Usage

Tokens are defined as JSON in `primitives/` and `semantic/`. These tokens are transformed into
distributions for multiple platforms by [`style-dictionary`](https://styledictionary.com) v4.

Currently, NDS builds tokens to the following formats in `dist/tokens/`:

- CSS Custom properties for all tokens (with mode overrides appended)
- CSS Custom properties for color tokens in RGB format
- JS manifest of all tokens

**All CSS custom properties are included in the NDS base stylesheet**
See [storybook documentation](https://narmi.github.io/design_system/)
for a full list of CSS custom properties.

## Development

### Adding or updating a token

1. Modify a JSON file in `tokens/primitives/` or `tokens/semantic/light/`.
2. Run `npm run build:tokens` in repo root
3. Check `dist/tokens/` output to verify your change

### Adding a high contrast override

1. Add the token override to `tokens/semantic/light-contrast-more/color.json`
2. Run `npm run build:tokens`
3. Verify the override appears in the `@media (prefers-contrast: more)` block in `dist/tokens/css/tokens.css`

### Adding a new mode

There are two mode shapes, both emitted as additive CSS blocks appended to `tokens.css`:

**OS-preference modes** (e.g. contrast) pair a media query with an opt-in/opt-out attribute:

1. Create a new folder under `tokens/semantic/` (e.g. `dark/`, `dark-contrast-more/`)
2. Add only the tokens that differ from the base `light/` mode
3. Add an entry to `COLOR_MODES` in `tokens/constants.ts` (media query + selector)
4. Add a build pass in `tokens/build.ts` that calls `buildModeCSS` with the media query

**Attribute-only modes** (e.g. color vision deficiency) have no OS signal and, when they
only remap existing primitives, don't need a style-dictionary source at all:

1. Add an entry to `COLOR_VISION_DEFICIENCIES` in `tokens/constants.ts` with its collapsed
   `value`, any `aliases` (rendered as extra selectors), and the `overrides` map (CSS var
   name → value)
2. `tokens/build.ts` appends a block for each entry automatically — no per-mode wiring
3. Wire the toolbar toggle in `.storybook/preview.js` + `.storybook/decorators.js` to preview it

### Adding a new distribution

The `tokens/config.js` contains build configs for each distribution.

See [`style-dictionary` documentation](https://styledictionary.com)
for more information on platforms, formats, and transforms.
