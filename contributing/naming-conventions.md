# Naming Conventions

## Size

Abstractions for specifying a size in components or styles should use shirt sizes:

```
xxs, xs, s, m, l, xl
```

## Components

Use `PascalCase` for component names.

```diff
-<CheckBox>
-<Separatorlist>
+<Checkbox>
+<SeparatorList>
```

Prefer using a `kind` prop to support multiple variants of a component instead of providing separate components:

```diff
-<PlainButton>
-<Button>
+<Button kind="plain">
```

## Props

Props for event handlers should always include an `on` prefix:

```diff
-select
+onSelect
```

Use auxillary verb prefixes for boolean props:

```diff
-selected
-portal
+isSelected
+hasPortal
```

Props that accept more than one thing should be pluralized:

```diff
-list: PropTypes.arrayOf(PropTypes.node),
+listItems: PropTypes.arrayOf(PropTypes.node),
```

## CSS

We use BEM-like naming conventions in Narmi Design System. Single hyphens refere to a parent-child relationship. Double hyphens refer to a variant/modifier.

```css
/* <base> */
.dialog {
}

/* <parent>-<child> */
.dialog-content {
}

/* <base>--<modifer> */
.dialog--extraWide {
}

/* <base>--<modifer>--<modifier> */
.alignChild--left--center {
}
```
