# Narmi Design System (NDS)

An Ocean of components :)

## Installing

- currently: install from Github, as in:

```
# package.json
# see banking/package.json for an example
...
  "design_system": "git+ssh://git@github.com:narmi/design_system.git"
...
```

You will need an accepted SSH key or valid Github access token with access to the Narmi repos to do this.

- via NPM: TBD (pending 1st publishable release)


## Developing

From `banking`:

```
cd ..
git clone git@github.com:narmi/design_system.git
cd banking    (or banking/sky, or wherever you want to consume DS)
npm link ../design_system
cd ../design_system
npm install
npm run storybook
npm run watch
```

Storybook will now run on :6006.

Your local `design_system` will be [symlinked](https://docs.npmjs.com/cli/v7/commands/npm-link) into banking/design_system for local dev.

A `dist/index.js` file will also be built on each change for the external apps to consume.
- The entry point to `design_system` is `dist/index.js`, so this is important.


### In Banking

- Global Styles: make sure global CSS styles (colors, etc.) are set by placing a `<GlobalStyles />` component on each page of your application.
  - See sky/src/App.js for example
  - Could also be placed in base_consumer.html
  - CSSvars are namespaced with `--nds-` to not collide
  - Classnames are scoped locally to the component via styled-components, so will not collide with existing classes
- Theming: make sure theme colors are set by wrapping the GlobalStyles in a ThemeProvider:
  - theme attrs can be loaded from API (see sky/App.js for example)
  - no other components should need access to `props.theme`
  - all other components should read theme vars from the CSS (via `color: var(--nds-primary-color)`)
  - this is to allow server-side apps/non-SPAs to use DS without wrapping their entire app in a theme provider

```
# App.js or base_consumer.html
<ThemeProvider
  theme={{...this.state.theme}}
>
  <GlobalStyles />
</ThemeProvider>

...rest of app...
```

### Storybook

[Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/) is used as a live environment to develop and test components faster.

We typically add a `Story` for each view or distinct state of each component.

These distinct views or states are controlled by Storybook `args` (similar to props).

You can view and add components using the steps below.


### Dependencies

Please install any new packages required for Stories.js files (ie, in-context examples) as devDependenies as well as peerDeps

- eg: React, Styled-Components, react-feather Icons
- these will be expected to be installed by the consumer
- but DesignSystem will not package them up itself
- this thins package size but most imptly helps avoid https://reactjs.org/warnings/invalid-hook-call-warning.html by decoupling dependency versions.
  - let the consumer use whichever compatible version of React/xyz they like

### Theming

Styled-components exposes a ThemeProvider context if you wish to grab the styled-components Theme in a Big Component: https://styled-components.com/docs/advanced#getting-the-theme-without-styled-components

### Live Editing

(ie, adding custom HTML to a component to see how renders) This plugin may be useful: https://storybook.js.org/addons/storybook-addon-react-live-edit


## Contributing

We accept PRs! We've striven to make the NDS as minimal and composable as possible, so please try and adhere to these guidelines when making PRs. We will comment on any PRs to uphold these guidelines:

### Maintain the HTML interface

We've attempted to keep the component interface as close to the native HTML as possible to allow the user a familiar development experience while maximizing customization. This means:

For instance, when faced with the decision to add a custom onClick handler, or pass `props.onClick` through to the underlying HTML, prefer passing through the native handler.

Almost all of our components pass `...props` all the way through to their children.

This allows us to keep the power of HTML, while minimizing complexity on our end.

### Allow for props.children over custom subcomponents

We want to allow the maximum flexibility to our users, so we've preferred allowing the user to pass their own `children` in, vs specifying specific child props in our components.

For instance, if faced with the decision to provide a `headerIcon` prop, or simply allow passing an full <span>...</span> as the `header`, prefer allowing the user to pass HTML through.

This allows for both increased customization by the user, while decreasing complexity on our end.
- your header can now be spaced any way you want it to, and include Images as well as Icons if desired;
- our component doesn't have to know or manage this - spacing and sizing is left up to the user to get Just Right.

This way, we allow the user maximum customization, while keeping our components thin and manageable.

### Use native CSS solutions

CSS has become quite powerful, and styled-components lets us modify CSS based on our `props`. 

The combination of these two tools means we can often accomplish in only CSS what we used to need Javascript to do.

For example:
- prefer changing `flex-direction: row` to `flex-direction: row-reverse` via CSS, rather than using a `reversed` React prop
- let the user pass through `props.style` rather than providing `padding` props
- prefer CSS transforms and animations to JS/jQuery manipulations
- ...


### In short

- Keep components as small as possible
- Ask, "Can this prop be removed?"
- Prefer CSS to JS

Feel free to ask us for CSS suggestions - we're happy to help!

---------------------------------------------------------------------------------


## Design Philosophy

NDS is:

1. Independent of any project
1. A dependency of all projects

> You can think of a design system as another component library, but instead of servicing one app, it serves an entire organization. A design system focuses on UI primitives while project-specific component libraries can contain anything from composite components to screens.
>
> As such, our design system must be **independent of any project** and also **a dependency of all projects**. Changes propagate throughout the organization via a versioned package distributed by a package manager. Projects can reuse design system components and further customize if needed. These constraints give us the blueprint for organizing our frontend projects.
>
> \- via [Storybook Design](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/architecture/)

Our design system must be specific enough to be consumed by all projects, but not so specific that it becomes coupled to a particular implementation.

What does this mean in practice?

```
We aim to provide composable components that expose extendable hooks, that can be subclassed or customized to achieve a more specific desired functionality.
```

## Goals and Anti-Goals

The design system does provide a consistent visual style and look-and-feel and extensible interface to interact with a component.

The design system does _not_ provide implementation details for every possible use case out-of-the-box.

Ex.:

| Does                                                                                         | Does Not                                                             |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| provide the `onClick` handler for \<Button /\>                                               | specify what that `onClick` handler does                             |
| provide a consistent look and feel for Button                                                | specify what color buttons have to be                                |
| provide a \<List /\> component to provide guidance on how groups of items should be laid out | specify what can go in a List, or exclude items from being in a List |

Some assembly is required.


## Roadmap

The following components have been identified by Design as necessary for the Design System. This list may add or change over time. Items with a (?) are questionable at this time:

- [ ] Buttons
- [ ] ButtonGroups (vertical and horizontal)A
- [ ] Text
- [ ] Headers
- [ ] FormFields + Labels
- [ ] Dropdowns + Labels
- [ ] Dropdown with more than 10 items + Labels
- [ ] Checkbox
- [ ] CheckboxGroup
- [ ] RadioGroup
- [ ] Tags
- [ ] Toasts
- [ ] PaginationLinks
- [ ] Links
- [ ] Tabs
- [ ] Cards - title + content, adornments (icons/buttons)
- [ ] Modals - header, buttons, closeBtn, overlays, backgrounds
- [ ] Lists - header + subheader, items
- [ ] Forms - clearAll (?)
- [ ] Dropshadows
- [ ] Tooltips - small, multiline, up/down/l/r
- [ ] Popovers - w icon, w selected text, w list, w checkbox
- [ ] NavigationBar - logo, Lmenu, Rmenu
- [ ] DropdownMenus - single item, list of items, multiple horizontally separated lists of items, '...' "more" option
- [ ] Loading states - Skeleton, Skeleton multiple rows, Skeleton w header, spinner/3dots
- [ ] Tables - Title, colHeaders, rowTitle, rowSubtitle, support for Tabs of tables, clickable/selectable Rows, Icons/Actions within Rows
- [ ] Spacers
- [ ] Spaced page layouts
- [ ] Grids (?)
- [ ] Colors (black/grey/ignore/warning/success/error/...)
- [ ] Color Modifications (--color-primary--Accessible)
- [ ] Global base styles (fontFamily, letterSpacing, --color-primary)
- [ ] Graph?
- [ ] Statistic?
- [ ] Map?
- [ ] Datepicker/Calendar
- [ ] Banner? (section with background color)
- [ ] Card - toggleable (default visible section, "view more" section)
- [ ] Icon? we can provide these and make the src configurable? or just have users provide their own. Would say it depends on if we reuse a certain icon often
- [ ] Accordion (visible/hidden)

Each of these will need add'l work for phone/tablet/laptop/desktop sizes

### By redesigned page:

Accounts + transfers:

- Button, ButtonGroup (horizontal, vertical)
- Header
- Tabs
- Table, TabbedTable, Table with Actions, row hover
- Card, ToggleableCard
- List, listitem w Icon, selected listitem (checkbox icon)
- Link, Links
- Pagination
- Modal, Modal w List, Modal Small, Modal w Overlay/BG
- FormFields + Labels
- Loading (spinner)
- Textarea
- Tags
- Map?
- Colors
- Font, FontWeight, Globals
- Dropdown
- Text
- Toasts - Success Warning Error
- Form - submit, clearall?
- Datepicker
- TopNav, NavigationMenu?
- Banner?
- Icon?

Support Center/Messages:

- Banner
- Card, Card w Icon, Card w List
- Links, w Label
- Accordion
- Search, Menu + searchbar (can be unstyled, style by consumer), search cancel (clear) btn, selected hovered item
- Button - square
- MessageList? - this is probably not an NDS-supported component
- Toasts
- Icon (paperclip, paperplane, dollarbill, gears, ...)
- Dropdown
- Dropdown - search

### Browser Support Notes

Minimum version supported by the following:

- https://caniuse.com/?search=focus-within

## License

Source code is under a custom license based on MIT. The license restricts design_system usage to applications that integrate or interoperate with Narmi software or services, with additional restrictions for external, stand-alone applications.
