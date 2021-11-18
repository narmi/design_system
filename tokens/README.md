# Design Tokens

This directory contains all definitions and supporting code for NDS **design tokens**.

**Design tokens** are base values for spacing, colors, typography and more. These values
are used internally in NDS and are also available to use directly in consuming applications.

## Usage

Tokens are defined as JSON in `src/tokens`. These tokens are transformed into
distributions for multiple platforms by [`style-dictionary`](https://amzn.github.io/style-dictionary).

Currently, NDS builds tokens to the following formats in `dist/tokens/`:
- CSS Custom properties for all tokens
- CSS Custom properties for color tokens in RGB format
- JS manifest of all tokens

**All CSS custom properties are included in the NDS base stylesheet**
See [storybook documentation](https://master--60620d422ffdf100216415b2.chromatic.com/?path=/story/design-tokens-color--base)
for a full list of CSS custom properties.

## Development

### Adding or updating a token

1. Modify a JSON file in `tokens/src/`.
2. Run `npm run build:tokens` in repo root
3. Check `dist/tokens/` output to verify your change
4. Commit changes to `tokens/src/`

### Adding a new distribution

The `tokens/config.js` contains build configs for each distribution.

See [`style-dictionary` documentation](https://amzn.github.io/style-dictionary)
for more information on platforms, formats, and transforms.
