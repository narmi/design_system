# Migration Guide to NDS v6

## v6.0.0 Breaking changes

### Removed legacy CSS vars prefixed with `nds-` (e.g. `nds-black`)

All legacy CSS variables prefixed with `nds-` have been removed from the design system. These variables were part of an older naming convention and have been superseded by the current design token system.

**Impact:** If your application uses any of these deprecated CSS variables directly in custom styles, you'll need to update them to use the standard design token variables instead.

**Why this change:** This removal standardizes the design token naming convention across NDS, making it easier to maintain and understand. The new token names follow a more consistent pattern that aligns with modern CSS practices.

#### Migration Table

| Legacy var                  | Standard var                 | Value                           |
| --------------------------- | ---------------------------- | ------------------------------- |
| `var(--nds-black)`          | `var(--color-black)`         | `#333333`                       |
| `var(--nds-grey)`           | `var(--color-grey)`          | `#4C4C4C`                       |
| `var(--nds-medium-grey)`    | `var(--color-mediumGrey)`    | `#8C8C8C`                       |
| `var(--nds-lightest-grey)`  | `var(--color-lightGrey)`     | `#D9D9D9`                       |
| `var(--nds-smoke-grey)`     | `var(--bgColor-smokeGrey)`   | `#F3F3F3`                       |
| `var(--nds-red)`            | `var(--color-errorDark)`     | `#D93B3B`                       |
| `var(--nds-white)`          | `var(--color-white)`         | `#FFFFFF`                       |
| `var(--nds-font-family)`    | `var(--font-family-body)`    | `Mulish, Helvetica, sans-serif` |
| `var(--nds-header-font)`    | `var(--font-family-heading)` | `'Narmi Matiere', serif`        |
| `var(--subdued-20-opacity)` | `var(--alpha-20)`            | `0.2`                           |
| `var(--subdued-10-opacity)` | `var(--alpha-10)`            | `0.1`                           |
| `var(--subdued-5-opacity)`  | `var(--alpha-5)`             | `0.05`                          |

#### Example

**Before:**

```css
.my-component {
  color: var(--nds-black);
  border-color: rgba(0, 0, 0, var(--subdued-20-opacity));
}
```

**After (v6):**

```css
.my-component {
  color: var(--rgb-black);
  border-color: rgba(0, 0, 0, var(--alpha-20));
}
```

### Deprecated `Dropdown` component removed

The `Dropdown` component has been completely removed from the library. This component was deprecated in v4 and has now been removed in v6.

**Impact:** Applications using `Dropdown` will need to migrate to one of the modern replacement components based on their specific use case.

**Why this change:** The `Dropdown` component was an early implementation that lacked proper accessibility features and had an unclear API. The modern replacement components (`Select`, `MultiSelect`, `Combobox`, `Popover`) provide better accessibility, clearer APIs, and more specialized functionality.

#### Migration Guide

| Use Case                                          | Replacement Component | Notes                                       |
| ------------------------------------------------- | --------------------- | ------------------------------------------- |
| Single selection from a list                      | `Select`              | Standard dropdown with single selection     |
| Multiple selections from a list                   | `MultiSelect`         | Dropdown with checkboxes for multiple items |
| Single selection with search/filtering            | `Combobox`            | Dropdown with built-in search/filter        |
| Custom popover content (tooltips, overflow menus) | `Popover`             | For custom content beyond simple list items |

#### Example

**Before:**

```jsx
import { Dropdown } from "@narmi/design_system";

<Dropdown
  triggerLabel="Select an option"
  onChange={(value) => handleChange(value)}
>
  <div>Option 1</div>
  <div>Option 2</div>
  <div>Option 3</div>
</Dropdown>;
```

**After (v6):**

```jsx
import { Select } from "@narmi/design_system";

<Select
  label="Select an option"
  value={selectedValue}
  onChange={(value) => handleChange(value)}
>
  <Select.Item value="option1" searchValue="Option 1">
    Option 1
  </Select.Item>
  <Select.Item value="option2" searchValue="Option 2">
    Option 2
  </Select.Item>
  <Select.Item value="option3" searchValue="Option 3">
    Option 3
  </Select.Item>
</Select>;
```

### Deprecated `Button` kind `menu` removed

The `kind="menu"` variant has been removed from the Button component.

**Impact:** Any buttons using `kind="menu"` will need to be updated to use `kind="plain"`.

**Why this change:** The `menu` kind was a specialized variant used in only one location (the OLB header) and had complex, legacy-specific styling rules. The `plain` kind of `Button` is the standard variant per design.

#### Example

**Before:**

```jsx
<Button kind="menu" label="Menu action" onClick={handleClick} />
```

**After (v6):**

```jsx
<Button kind="plain" label="Menu action" onClick={handleClick} />
```

### Removed deprecations.json

The `deprecations.json` file has been removed from the published `dist/` directory.

**Impact:** If your build process or tooling relied on this file, this may be breaking.

**Why this change:** This file was unmaintained and outdated. Deprecation warnings are now handled through TypeScript types, JSDoc comments, and proper semantic versioning practices.

### Removed `.nds-plain-button` legacy class

The `.nds-plain-button` CSS class has been removed from the design system.

**Impact:** If you have custom HTML elements using this class for styling, you'll need to migrate to the proper Button component.

**Why this change:** This has never been publicly exposed, but known to be in used in some consumers.

#### Example

**Before:**

```jsx
<button className="nds-plain-button" onClick={handleClick}>
  Click me
</button>
```

**After (v6):**

```jsx
import { Button } from "@narmi/design_system";

<Button kind="plain" label="Click me" onClick={handleClick} />;
```

### Removed `ContentCard` `kind="interactive"`

The `kind="interactive"` variant has been removed from ContentCard.

**Impact:** Cards using `kind="interactive"` need to be updated to use either `kind="button"` or `kind="toggle"` based on their behavior.

**Why this change:** The `interactive` kind was ambiguous about its purpose. The new approach uses more semantically correct variants that better communicate the card's behavior and improve accessibility.

#### Migration Guide

| Use Case                           | Replacement Kind | Notes                                         |
| ---------------------------------- | ---------------- | --------------------------------------------- |
| Card triggers an action on click   | `kind="button"`  | For actions that only need an `onClick`; renders as a `button`        |
| Card has selected/unselected state | `kind="toggle"`  | For toggling selected state; renders as a `checkbox` |

### Dropped support for React v16 and v17

NDS v6 requires React v18 or v19. You must upgrade your React version to use this release.

**Impact:** Applications using React v16 or v17 must upgrade to React v18 or v19 before adopting NDS v6.

**Why this change:** React 18 and 19 provide significant improvements in concurrent rendering, automatic batching, and modern APIs. Dropping support for older versions allows NDS to leverage these improvements and simplifies maintenance.

### Required `searchValue` prop on Select component items

The `searchValue` prop is now **required** on all item components for `Select`, `MultiSelect`, `Combobox`, and `AutocompleteModal`.

**Impact:** All usages of `.Item` components within these selection components must now explicitly provide a `searchValue` prop.

**Why this change:** Previously, the `searchValue` prop was optional and would fall back to using the item's children for search filtering. This caused issues when items had complex children (icons, formatted text, etc.) or when the visual display differed from the search term. Making it required ensures predictable search behavior and prevents runtime errors.

#### Components Affected

- `Select.Item`
- `MultiSelect.Item`
- `Combobox.Item`
- `AutocompleteModal.Item`

#### Example

**Before:**

```jsx
<Select label="Choose a state">
  <Select.Item value="ny">New York</Select.Item>
  <Select.Item value="ca">California</Select.Item>
</Select>
```

**After (v6):**

```jsx
<Select label="Choose a state">
  <Select.Item value="ny" searchValue="New York">
    New York
  </Select.Item>
  <Select.Item value="ca" searchValue="California">
    California
  </Select.Item>
</Select>
```

---

## Non-breaking changes

These changes are non-breaking but represent deprecations or improvements you should be aware of.

### Deprecate `Tag`

The `Tag` component is deprecated and will be removed in v6 of NDS. Use `Chip` instead.

**Impact:** The `Tag` component is being deprecated in favor of `Chip` with improved functionality.

**Why this change:** `Chip` provides a more modern API with better separation of concerns. Visual styling (kind) is independent of behavior (dismissibility, clickability), making it more flexible and easier to use. Most importantly, it aligns with the NDSv2 Figma library.

#### Migration Guide

`Chip` is a direct replacement for `Tag` with an enhanced API.
The key difference is that behaviors like dismissibility are now decoupled from the visual style variant in `Chip`, providing more flexibility.

| `Tag` Prop  | `Chip` Equivalent | Notes                                                                                   |
| ----------- | ----------------- | --------------------------------------------------------------------------------------- |
| `label`     | `label`           | Same usage                                                                              |
| `kind`      | `kind`            | `Chip` supports: `"info"`, `"success"`, `"warn"`, `"error"`, `"primary"`, `"secondary"` |
| `onDismiss` | `onDismiss`       | Same usage - renders close button                                                       |
| `onClick`   | `onClick`         | Same usage - makes entire chip clickable                                                |
| -           | `startIcon`       | 🆕 NEW: Add icon at start of label                                                         |
| -           | `endIcon`         | 🆕 NEW: Add icon at end of label                                                           |
| -           | `count`           | 🆕 NEW: Display a count badge                                                              |

#### Examples

**Simple Tag → Chip:**

```jsx
// Before
<Tag label="Status" kind="success" />

// After
<Chip label="Status" kind="success" />
```

**Clickable Tag → Chip:**

```jsx
// Before
<Tag
  label="View details"
  kind="info"
  onClick={() => showDetails()}
/>

// After
<Chip
  label="View details"
  kind="info"
  onClick={() => showDetails()}
/>
```

**Using new Chip features:**

```jsx
// Chip with icon and count
<Chip
  label="Notifications"
  kind="primary"
  startIcon={<Icon name="bell" />}
  count={5}
/>

// Chip with custom end icon
<Chip
  label="Important"
  kind="error"
  endIcon={<Icon name="warning" />}
/>
```

### Storybook v9

Storybook has been upgraded to v9. This upgrade includes improved performance, updated UI, and better developer experience.

#### What Changed

- Faster Storybook Startup
- New development features

#### No Action Required

No action required for consumers. This change only affects the NDS build process and does not impact how you import or use NDS components.

---

### Removed webpack builds

NDS v6 no longer uses webpack for builds. Vite is now the only build tool used by this project.

#### What Changed

- All webpack configuration has been removed
- Modern ESM modules
- FAST Builds
- Live refresh on CSS in storybook is now actually useful

#### No Action Required

No action required for consumers. This change only affects the NDS build process and does not impact how you import or use NDS components.
