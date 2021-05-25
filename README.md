# Narmi Design System (NDS)

⚡ A consistent look-and-feel and extensible interface for Narmi experiences 🔥

Please follow the below steps to install, consume, or contribute to the NDS.

## Consuming Design System

Please follow all steps below to set up your copy of design_system.

### Install DesignSystem

Install from Github, as in:

```
# package.json
# see banking/package.json for an example
...
  "design_system": "git+ssh://git@github.com:narmi/design_system.git"
...
```

You will need an accepted SSH key or valid Github access token with access to the Narmi repos to do this.

Installation via NPM: TBD (pending 1st publishable release)

### Install PeerDependencies

design_system doesn't package 2 key dependencies, because we want to let users configure their own versions of these deps, and avoid [forcing multiple copies](https://reactjs.org/warnings/invalid-hook-call-warning.html).

You will need to install in your repo:

- React (>=16.9, supports Hooks)
- styled-components (>=5)

```
# in the repo where you are consuming design_system
npm install react@16.9 styled-components@5 -S
```

These are included as peerDependencies in package.json.

### Configure Your Theme

Set up a `<GlobalStyles />` and a `<ThemeProvider />` component at each of your application's entry points to provide the necessary CSS variables to NDS components:

```
# In your top-level App.js or HTML page file
import {ThemeProvider} from "styled-components"
import {GlobalStyles} from "design_system"

<ThemeProvider
  theme={{
    primaryColor: "your-primary-color",
    secondaryColor: "your-secondary-color",
    tertiaryColor: "your-tertiary-color",
  }}
>
  <GlobalStyles />
</ThemeProvider>

...the rest of your app...
# no other NDS components should need access to `theme`
```

This will write a `<style>` tag to your page that contains the CSS variables the design system components depend on. Without this, you may see empty or colorless Buttons and pages.

All CSS variables are prefixed with --nds (e.g. `--nds-my-variable`), to avoid collision with any existing CSS variables that may be contained in your app.

### View Available Components

```
# from design_system/
npm run storybook
```

You can use [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/) to see what components are available.

We typically add a `Story` for each view or distinct state of each component.

These distinct views or states are controlled by Storybook `args` (similar to props).

If contributing a change, please test your components out in Storybook before making a PR.

### Consuming NDS Themes in Your App

`styled-components` exposes a [ThemeProvider context](https://styled-components.com/docs/advanced#getting-the-theme-without-styled-components) if you wish to grab the NDS Theme for use in your own components or Pages.

### Live Editing

(ie, adding custom HTML to a component to see how renders) This plugin may be useful: https://storybook.js.org/addons/storybook-addon-react-live-edit

## Browser Support Notes

Please check the following chart to see the minimum browser versions supported by NDS:

- https://caniuse.com/?search=focus-within

## Developing

We need to set up your copy of `design_system` for local development.

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

Results:

- Storybook will now run on :6006.
- Your local `design_system` will be [symlinked](https://docs.npmjs.com/cli/v7/commands/npm-link) into banking/design_system for local dev.
- On each change to files in design_system, the `dist/index.js` file will be rebuilt
  - This allows local changes to design_system to be reflected in your consumer (eg Azul)

## Contributing

We accept PRs! We've striven to make the NDS as minimal and composable as possible, so please try and adhere to these guidelines when making PRs. We will comment on any PRs to uphold these guidelines:

### Design Guidelines

#### Maintain the HTML interface

We've attempted to keep the component interface as close to the native HTML as possible to allow the user a familiar development experience while maximizing customization. This means:

For instance, when faced with the decision to add a custom onClick handler, or pass `props.onClick` through to the underlying HTML, prefer passing through the native handler.

Almost all of our components pass `...props` all the way through to their children.

This allows us to keep the power of HTML, while minimizing complexity on our end.

#### Allow for props.children over custom subcomponents

We want to allow the maximum flexibility to our users, so we've preferred allowing the user to pass their own `children` in, vs specifying specific child props in our components.

For instance, if faced with the decision to provide a `headerIcon` prop, or simply allow passing an full <span>...</span> as the `header`, prefer allowing the user to pass HTML through.

This allows for both increased customization by the user, while decreasing complexity on our end.

- your header can now be spaced any way you want it to, and include Images as well as Icons if desired;
- our component doesn't have to know or manage this - spacing and sizing is left up to the user to get Just Right.

This way, we allow the user maximum customization, while keeping our components thin and manageable.

#### Use native CSS solutions

CSS has become quite powerful, and styled-components lets us modify CSS based on our `props`.

The combination of these two tools means we can often accomplish in only CSS what we used to need Javascript to do.

For example:

- prefer changing `flex-direction: row` to `flex-direction: row-reverse` via CSS, rather than using a `reversed` React prop
- let the user pass through `props.style` rather than providing `padding` props
- prefer CSS transforms and animations to JS/jQuery manipulations
- ...

#### In Short

- Keep components as small as possible
- Ask, "Can this prop be removed?"
- Prefer CSS to JS

Feel free to ask us for CSS suggestions - we're happy to help!

---

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

