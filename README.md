# Narmi Design System (NDS)

Suggested repo name: Ocean (blue)
An Ocean of components :)

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

## Dev Guide

### Theming

Styled-components exposes a ThemeProvider context if you wish to grab the styled-components Theme in a Big Component: https://styled-components.com/docs/advanced#getting-the-theme-without-styled-components

### Live Editing

(ie, adding custom HTML to a component to see how renders) This plugin may be useful: https://storybook.js.org/addons/storybook-addon-react-live-edit

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

### Developing

- `npm run storybook` to run Storybook
- `npm run watch` to regenerate the dist file for committing/consumption into other apps (Sky Azul etc)

Storybook will run on :6006
dist will be built on each change for the external apps to consume
Install any new packages required for Stories.js files (ie, in-context examples) as devDependenies as well as peerDeps

- eg: React, Styled-Components, react-feather Icons
- these will be expected to be installed by the consumer
- but DesignSystem will not package them up itself
- this thins package size but most imptly helps avoid https://reactjs.org/warnings/invalid-hook-call-warning.html by decoupling dependency versions.
  - let the consumer use whichever compatible version of React/xyz they like
