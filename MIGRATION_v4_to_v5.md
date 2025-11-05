# Migration Guide v4 -> v5

## Breaking changes

#### Legacy CSS vars prefixed with `nds-` (e.g. `nds-black`) removed

If your code still relies on these variables, please map them to standard variables documented in design tokens.

#### Deprecated `Dropdown` component removed

Use `Select`, `Multiselect`, `Combobox`, or `Popover` instead.

### Deprecated `Button` kind `menu` removed

Use `kind="plain"` instead.

### Removed deprecations.json

This file is unmaintained.

### Remove `.nds-plain-button` legacy class

Use the `kind` prop on Button instead to pick a pre-defined style. In this case, `kind="plain"`.

### Remove `ContentCard` `kind="interactive"`

Moving forward, use `kind="toggle"` or `kind="button"`
according to the interactive behavior required.

## Non-breaking changes

### Deprecate `Tag`

You may continue to use `Tag` but it will be removed in v6 of NDS. Use `Chip` moving forward.

### Storybook v9

Storybook has been upgraded to latest

### Remove webpack builds

Vite is the only build tool this project uses now.
