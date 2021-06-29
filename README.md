# Narmi Design System (NDS)

⚡ A consistent look-and-feel and extensible interface for Narmi experiences 🔥

This design system is intended to provide primitive "building blocks" for custom experiences. It aims to adhere as closely to the HTML spec as possible, while providing simple interfaces for complex components.

Please follow the below steps to install, consume, or contribute to the NDS.

## Consuming Design System

Please follow all steps below to set up your copy of design_system.

### 1. Install DesignSystem

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

### 2. Install PeerDependencies

design_system doesn't package 2 key dependencies, because we want to let users configure their own versions of these deps, and avoid [forcing multiple copies](https://reactjs.org/warnings/invalid-hook-call-warning.html).

You will need to install in your repo:

- React (>=16.9, supports Hooks)
- styled-components (>=5)

```
# in the repo where you are consuming design_system
npm install react@16.9 styled-components@5 -S
```

These are included as peerDependencies in package.json.

### 3. Configure Your Theme

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

### 4. View Available Components

```
# from design_system/
npm run storybook
```

You can use [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/) to see what components are available.

We typically add a `Story` for each view or distinct state of each component.

These distinct views or states are controlled by Storybook `args` (similar to props).

If contributing a change, please test your components out in Storybook before making a PR.

### 5. Using NDS

Additional config and tips.

#### Consuming NDS Themes in Your App

`styled-components` exposes a [ThemeProvider context](https://styled-components.com/docs/advanced#getting-the-theme-without-styled-components) if you wish to grab the NDS Theme for use in your own components or Pages.


## Browser Support Notes

Please check the following chart to see the minimum browser versions supported by NDS:

- https://caniuse.com/?search=focus-within

## Developing

We need to set up your copy of `design_system` for local development. 

The following command will install NDS as a local dependency and start your Storybook.

From `banking`:

```
cd ..
git clone git@github.com:narmi/design_system.git
cd <your-consuming_repo>
npm link ../design_system
cd ../design_system
npm install
npm run storybook
npm run watch
```

Results:

- Storybook will now run on :6006.
- Your local `design_system` will be [symlinked](https://docs.npmjs.com/cli/v7/commands/npm-link) into banking/design_system for local dev.
- On each change to files in design_system, the `dist/index.js` file will be rebuilt - 
  - This allows local changes to design_system to be live-updated in your consuming repo.

### Ergonomics

#### Live Editing

If you'd like to live-edit HTML in your components (i.e., passing custom `props.children`), this plugin may be useful: https://storybook.js.org/addons/storybook-addon-react-live-edit.


## Contributing

We accept PRs! We strive to make the NDS simple as well as powerful, which usually means being [open for extension](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle#:~:text=In%20object%2Doriented%20programming%2C%20the,without%20modifying%20its%20source%20code.), [but closed for modification](https://blog.cleancoder.com/uncle-bob/2014/05/12/TheOpenClosedPrinciple.html). 

We try to uphold these principles in our code review. Below please find some helpful guidelines for getting your PRs accepted:

### Design Guidelines

#### 1. Maintain the HTML interface

We've attempted to keep the component interface as close to the native HTML as possible to allow the user a familiar development experience while maximizing customization. This means:

For instance, when faced with the decision to add a custom onClick handler, or pass `props.onClick` through to the underlying HTML, prefer passing through the native handler.

Almost all of our components pass `...props` all the way through to their children.

This allows us to keep the power of HTML, while minimizing complexity on our end.

#### 2. Allow for props.children over custom subcomponents

We want to allow the maximum flexibility to our users, so we've preferred allowing the user to pass their own `children` in, vs specifying specific child props in our components.

For instance, if faced with the decision to provide a `headerIcon` prop, or simply allow passing an full <span>...</span> as the `header`, prefer allowing the user to pass HTML through.

This allows for both increased customization by the user, while decreasing complexity on our end.

- your header can now be spaced any way you want it to, and include Images as well as Icons if desired;
- our component doesn't have to know or manage this - spacing and sizing is left up to the user to get Just Right.

This way, we allow the user maximum customization, while keeping our components thin and manageable.

#### 3. Use native CSS solutions

CSS has become quite powerful, and styled-components lets us modify CSS based on our `props`.

The combination of these two tools means we can often accomplish in only CSS what we used to need Javascript to do.

For example:

- prefer changing `flex-direction: row` to `flex-direction: row-reverse` via CSS, rather than using a `reversed` React prop
- let the user pass through `props.style` rather than providing `padding` props
- prefer CSS transforms and animations to JS/jQuery manipulations
- etc.

#### 4. In Short:

- Keep components as small as possible
- Ask, "Can this prop be removed?"
- Prefer CSS to JS

We'd love for this library to be as usable as possible for all our partners. 

Feel free to ask us for suggestions or feedback - we're happy to help!

## License

Source code is under a custom license based on MIT. The license restricts design_system usage to applications that integrate or interoperate with Narmi software or services, with additional restrictions for external, stand-alone applications. Please see LICENSE.md for full details.
