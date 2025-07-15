# Copilot Instructions

## About this project
This repository is the home of Narmi Design System, containing:
- Design tokens
- Base CSS
- Helper/utility CSS classes
- React Components
- React Hooks

This design system is used by engineers within Narmi _and_ third party developers to build applications using the Narmi API.
This project is often referred to as "NDS" and is published to the public NPM registry as `@narmi/design-system`.

## Engineering Principles
1. This is not a general purpose UI framework. This design system is tailored to the needs of Narmi and its applications.
2. Use composition for flexibility. This project follows the philosophy of "small, sharp tools". NDS components are not intended to manage or transform data. NDS components should be as "dumb" and purely presentational as possible.
3. Prioritize accessibility. Use semantic HTML DOM elements where possible, and ensure components are accessible to all users.
4. Create explicit contracts. Component props interfaces are designed to be simple and explicit. No behavior should be undocumented. We do not allow consumers to arbitrarily change behavior or appearance of components.
5. Make behavior predictable. Components should not create or rely on side effects. Components should behave the same way no matter where they may appear in the rendered DOM.
6. BUILD FOR CHANGE. This project is designed to evolve as the Narmi products and design language evolve. The best measure of quality in this repository is our ability to delete or change code.

## Naming Conventions

### Size
Use these abstractions instead of allowing hardcoded units:
`xxs, xs, s, m, l, xl, xxl`

### Components
- Use `PascalCase` for component names.
- Use a `kind` prop to create variants of a component (avoid creating multiple components where possible).

 ### Props
 - Event handlers must always be named `on<EventName>`, e.g. `onClick`, `onChange`.
 - Use auxillary verb prefixes for boolean props, e.g. `isDisabled`, `hasPortal`

## CSS
We use a BEM-like naming convention in our CSS. Single hyphens refer to a parent-child relationship. Double hyphens refer to a variant/modifier.

```css
/* <base> */
.dialog {
}

/* <parent>-<child> */
.dialog-content {
}

/* <base>--<modifier> */
.dialog--extraWide {
}

/* <base>--<modifier>--<modifier> */
.alignChild--left--center {
}
```

## Component props interfaces
- Prefer props over `children` for passing data or labels to components.
- Styling customization should be done via the `kind` prop only. NDS should retain full control over the appearance and behavior of components.
- Use "additive" CSS classes. For example, `.message` would be an ever-present base className, with optional modifiers like `.message--error` applied
- We use "prop collector" style subcomponents in NDS to create a cleaner interface for consumers. E.g. `Tabs.Tab`
- We use "render<Thing>" props to customize rendering of certain parts of a component. This provides flexibility without introducing new props for content slots or variation.
- Avoid complex data structures in props. Use simple types like `string`, `number`, `boolean`, or arrays of these types.
- Use `ReactNode` for props that accept React elements, e.g. `children`, `label`, `icon`.
- Never accept `classNames` or `style` props. NDS must maintain full rendering control (with `render<Thing>` props as the only exception).
- Prefer helper classes when possible, e.g. `className="alignChild--left"` instead of adding new scss where possible.
- Do NOT allow spread props in any component interface. Only a few exceptions to this rule exist, and no new components should allow this.
- Components MUST NOT accept `ref` props. Use `forwardRef` to create a ref forwarding component if necessary.
- Components MUST NOT cause layout side effects, e.g. projecting `margin` from the root element.

## Storybook
- Use existing stories as a guide for creating new components.
- Add any additional documentation for a story to story parameter `docs.description`.

## NPM
- Do not install new libraries or dependencies. A human engineer must do this.
- Do not run any `npm` commands in this repo. A human engineer must do this.
