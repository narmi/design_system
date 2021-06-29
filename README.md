# Narmi Design System (design_system)

⚡ A consistent look-and-feel and extensible interface for Narmi experiences 🔥

This design system is intended to provide primitive "building blocks" for custom experiences. It aims to adhere as closely to the HTML spec as possible, while providing simple interfaces for complex components.

Please follow the below steps to install, consume, or contribute to the design_system.

## Consuming Design System

Please follow all steps below to set up your copy of design_system.

### 1. Install DesignSystem

Install from Github, as in:

```
# package.json
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

Set up a `<GlobalStyles />` and a `<ThemeProvider />` component at each of your application's entry points to provide the necessary CSS variables to design_system components:

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
# no other design_system components should need access to `theme`
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

### 5. Using design_system

Additional config and tips.

#### Consuming design_system Themes in Your App

`styled-components` exposes a [ThemeProvider context](https://styled-components.com/docs/advanced#getting-the-theme-without-styled-components) if you wish to grab the design_system Theme for use in your own components or Pages.


## Browser Support Notes

Please check the following chart to see the minimum browser versions supported by design_system:

- https://caniuse.com/?search=focus-within

## Developing

We need to set up your copy of `design_system` for local development. 

The following command will install design_system as a local dependency and start your Storybook.

From `<your-repo>`:

```
cd ..
git clone git@github.com:narmi/design_system.git
cd <your-repo>
npm link ../design_system
cd ../design_system
npm install
npm run storybook
npm run watch
```

Results:

- Storybook will now run on :6006.
- Your local `design_system` will be [symlinked](https://docs.npmjs.com/cli/v7/commands/npm-link) into <your-repo>/design_system for local dev.
- On each change to files in design_system, the `dist/index.js` file will be rebuilt - 
  - This allows local changes to design_system to be live-updated in your consuming repo.

### Ergonomics

#### Live Editing

If you'd like to live-edit HTML in your components (i.e., passing custom `props.children`), this plugin may be useful: https://storybook.js.org/addons/storybook-addon-react-live-edit.


## Contributing

We accept PRs! We strive to make the design_system simple as well as powerful, which usually means being [open for extension](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle#:~:text=In%20object%2Doriented%20programming%2C%20the,without%20modifying%20its%20source%20code.), [but closed for modification](https://blog.cleancoder.com/uncle-bob/2014/05/12/TheOpenClosedPrinciple.html). 

We try to uphold these principles in our code review. Below please find some helpful guidelines for getting your PRs accepted:

### Design Guidelines

#### 1. Maintain the HTML interface

Native HTML provides most of the attributes we want to customize in the design_system. For this reason, we've allowed passing `{...props}` through to almost any component. 

This allows you, the user, to achieve any desired behavior, by simply treating the design_system component as if it was native HTML.

This allows for the design_system to be opinionated about behavior specific to the component, while allowing unlimited customization.

##### Example - Button:
```
# Say you want to customize the border of your <Button> - 
# simply pass a `style` into the button as you would in HTML:

<Button style={{borderRadius: "8px"}}>
  Click here
</Button>

=> <a style="borderRadius: 8px">Click here</a>
```

##### Example - Input:
```
# Say you want to pass an `id` or `onChange` prop to an <Input> -
# simply pass these native props, and they will be passed through to the underlying HTML:

<Input id="my-id" onChange={myFunc} />

=> <input id="my-id" onchange="myFunc" />
```

Even if an attribute is not listed in the `propTypes` for the component, you can assume it will be passed through to the underlying via `{...props}`. This goes for `data-*` attributes and other native HTML functionality as well!


#### 2. Prefer props.children over custom subcomponents

Because we want to provide components that provide visual style while remaining flexible to your use case, we avoid specifying a specific interface for most child components.

We do this by allowing `props.children` to pass through in most of our components. This allows you to  have full control over your component's content, while still letting the design_system do most of the heavy lifting.

For example, our `<Modal>` provides a background scrim and a `<ModalHead>` and `<ModalBody>`, but you can insert any `children` you like into that Head and Body:

##### Example - Modal:
```
# We accept customizable HTML in both the title and body of the Modal.

<Modal
  title={<div style={titleStyles}>My Title <MyCustomIcon /></div>}
  style={myModalStyles}
>
  <MyCustomContent />
</Modal>

=> # This content passes through to the appropriate location in the Modal:
<div style={myModalStyles}>
  <div style={titleStyles}>My Title <MyCustomIcon /></div>
  <div style={myModalStyles}>
    <MyCustomContent />
  </div>
</div>
```

This gives the user full control over the appearance of the Modal, while still allowing the Modal to behave as expected out-of-box.


#### 3. Prefer native CSS over custom Javascript props

Using CSS to solve problems allows us to provide control back to you, the user. 

For instance, when designing a `<Card>` component, one might be tempted to add a `padding` prop. 

Instead, we prefer the already-existing `style` prop, since this allows the user full control over the style.

Instead of attempting to anticipate all the user's needs, we simply expose the native interface, and allow the user to customize it.

##### Example - Reversing
```
# One could add a `reversed` prop to a <Row> component:
if (props.reversed) return children.reverse()

# Instead, allow the user to reverse them when s/he specifies:
return props.children		// assume the user will reverse the children when s/he wants to
```

##### Example - Padding
```
# One could add a `padding` prop to allow the user to customize a `<Card>`
<Card padding={8}>...</Card>

# Instead, rely on the native `style` prop. 
# This lets us keep the interface small, while allowing maximum control to the user.
<Card style={{padding: "8px"}}...</Card>
```

##### Example - Transforms
```
# One could be tempted to animate a component via jQuery - and this is still possible with design_system:
$('.myComponent').animate({ opacity: 0.25 }, 3000)

# When designing a component, we can simply rely on CSS animations:
<MyComponent
  style={{transition: "opacity 3s linear"}}
/>
```

`styled-components` allows us to support [`keyframes`](https://styled-components.com/docs/basics#animations) as well.

##### Example - Custom Styles

We can also [wrap components using `styled-components`](https://styled-components.com/docs/basics#extending-styles) to add our own custom styles:

```
const MyCustomButton = styled(Button)`
  backgroundColor: var(--my-background-color);
  
  &:hover {
    backgroundColor: var(--my-custom-hover-color);
  }
`;
```

We default to using CSS to solve problems where some might reach for Javascript. 

Other useful links:

- [Adapting based on props](https://styled-components.com/docs/basics#adapting-based-on-props)
- [Styling nested components via styled-components](https://styled-components.com/docs/advanced#referring-to-other-components)


#### 4. In Short:

- Keep components as small as possible
- Ask, "Can this prop be removed?"
- Prefer CSS to JS

We'd love for this library to be as usable as possible for all our partners. 

Feel free to ask us for suggestions or feedback - we're happy to help!

## License

Source code is under a custom license based on MIT. The license restricts design_system usage to applications that integrate or interoperate with Narmi software or services, with additional restrictions for external, stand-alone applications. Please see LICENSE.md for full details.
