# Migration Guide v4 -> v5

## Breaking changes

### Removed legacy CSS vars prefixed with `nds-` (e.g. `nds-black`)

All legacy CSS variables prefixed with `nds-` have been removed. Use the standard design token variables instead.

#### Migration Table

| Legacy var                  | Standard var                 | Value                           |
| --------------------------- | ---------------------------- | ------------------------------- |
| `var(--nds-black)`          | `var(--rgb-black)`           | `#333333`                       |
| `var(--nds-grey)`           | `var(--rgb-grey)`            | `#4C4C4C`                       |
| `var(--nds-medium-grey)`    | `var(--rgb-mediumGrey)`      | `#8C8C8C`                       |
| `var(--nds-lightest-grey)`  | `var(--rgb-lightGrey)`       | `#D9D9D9`                       |
| `var(--nds-smoke-grey)`     | `var(--rgb-smokeGrey)`       | `#F3F3F3`                       |
| `var(--nds-red)`            | `var(--rgb-errorDark)`       | `#D93B3B`                       |
| `var(--nds-white)`          | `var(--rgb-white)`           | `#FFFFFF`                       |
| `var(--nds-font-family)`    | `var(--font-family-body)`    | `Mulish, Helvetica, sans-serif` |
| `var(--nds-header-font)`    | `var(--font-family-heading)` | `'Narmi Matiere', serif`        |
| `var(--subdued-20-opacity)` | `var(--alpha-20)`            | `0.2`                           |
| `var(--subdued-10-opacity)` | `var(--alpha-10)`            | `0.1`                           |
| `var(--subdued-5-opacity)`  | `var(--alpha-5)`             | `0.05`                          |

#### Example

**Before (v4):**

```css
.my-component {
  color: var(--nds-black);
  border-color: rgba(0, 0, 0, var(--subdued-20-opacity));
}
```

**After (v5):**

```css
.my-component {
  color: var(--rgb-black);
  border-color: rgba(0, 0, 0, var(--alpha-20));
}
```

### Deprecated `Dropdown` component removed

The `Dropdown` component has been removed. Use one of the following replacements based on your use case:

#### Migration Guide

| Use Case                                          | Replacement Component |
| ------------------------------------------------- | --------------------- |
| Single selection from a list                      | `Select`              |
| Multiple selections from a list                   | `MultiSelect`         |
| Single selection with search/filtering            | `Combobox`            |
| Custom popover content (tooltips, overflow menus) | `Popover`             |

### Deprecated `Button` kind `menu` removed

The `kind="menu"` variant has been removed from Button. Use `kind="plain"` instead.

#### Example

**Before (v4):**

```jsx
<Button kind="menu" label="Menu action" onClick={handleClick} />
```

**After (v5):**

```jsx
<Button kind="plain" label="Menu action" onClick={handleClick} />
```

### Removed deprecations.json

This file is unmaintained and has been removed from the published `dist/`.

### Removed `.nds-plain-button` legacy class

The `.nds-plain-button` CSS class has been removed. Use the Button component with the `kind` prop instead.

#### Example

**Before (v4):**

```jsx
<button className="nds-plain-button" onClick={handleClick}>
  Click me
</button>
```

**After (v5):**

```jsx
import { Button } from "@narmi/design_system";

<Button kind="plain" label="Click me" onClick={handleClick} />;
```

### Removed `ContentCard` `kind="interactive"`

The `kind="interactive"` variant has been removed.
Moving forward, use the `kind="button"` variant when the interactive card
takes an action on user press. Use `kind="toggle"` when the interactive card is stateful and checkbox-like.

### Dropped support for React v16 and v17

NDS v5 requires React v18 or v19. You must upgrade your React version to use this release.

---

## Non-breaking changes

### Deprecate `Tag`

The `Tag` component is deprecated and will be removed in v6 of NDS. Use `Chip` instead.

#### Migration Guide

`Chip` is a direct replacement for `Tag`.
Behaviors like dismissibility are decoupled from style variant in `Chip`.

| `Tag` Prop  | `Chip` Equivalent | Notes                                                                                   |
| ----------- | ----------------- | --------------------------------------------------------------------------------------- |
| `label`     | `label`           | Same usage                                                                              |
| `kind`      | `kind`            | `Chip` supports: `"info"`, `"success"`, `"warn"`, `"error"`, `"primary"`, `"secondary"` |
| `onDismiss` | `onDismiss`       | Same usage - renders close button                                                       |
| `onClick`   | `onClick`         | Same usage - makes entire chip clickable                                                |
| -           | `startIcon`       | NEW: Add icon at start of label                                                         |
| -           | `endIcon`         | NEW: Add icon at end of label                                                           |
| -           | `count`           | NEW: Display a count badge                                                              |

#### Examples

**Simple Tag → Chip:**

```jsx
// Before (v4)
<Tag label="Status" kind="success" />

// After (v5)
<Chip label="Status" kind="success" />
```

**Dismissible Tag → Chip:**

```jsx
// Before (v4)
<Tag
  label="Filter"
  kind="primary"
  onDismiss={() => removeFilter()}
/>

// After (v5)
<Chip
  label="Filter"
  kind="primary"
  onDismiss={() => removeFilter()}
/>
```

### Storybook v9

Storybook has been upgraded to v9. This upgrade includes improved performance, updated UI, and better developer experience.

#### What Changed

- Better build tooling for a faster startup
- Improved documentation rendering
- Enhanced component preview features
- Better accessibility testing tools

#### No Action Required

No action required for consumers. This change only affects the NDS build process and does not impact how you import or use NDS components.

---

### Removed webpack builds

NDS v5 no longer uses webpack for builds. Vite is now the only build tool used by this project.

#### What Changed

- All webpack configuration has been removed
- Modern ESM is prioritized

#### No Action Required

No action required for consumers. This change only affects the NDS build process and does not impact how you import or use NDS components.
