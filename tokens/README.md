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
├── config.js             # style-dictionary v4 build configuration
└── README.md
```

## Modes

Modes are managed as additive CSS overrides appended to `tokens.css`:

- **Light/Dark** (future): will use `color-scheme` and `light-dark()` CSS functions
- **High contrast**: uses `@media (prefers-contrast: more)` and `[data-prefers-contrast="more"]` selector

To activate high contrast programmatically, set `data-prefers-contrast="more"` on any ancestor element.
Users with OS-level high contrast preferences will get it automatically via the media query.

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

1. Create a new folder under `tokens/semantic/` (e.g. `dark/`, `dark-contrast-more/`)
2. Add only the tokens that differ from the base `light/` mode
3. Update `config.js` to add the new mode source and format output

### Adding a new distribution

The `tokens/config.js` contains build configs for each distribution.

See [`style-dictionary` documentation](https://styledictionary.com)
for more information on platforms, formats, and transforms.
