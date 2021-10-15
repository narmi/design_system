# Narmi Design System (design_system)

⚡ A consistent look-and-feel and extensible interface for Narmi experiences 🔥

Build your own experiences on top of the Narmi platform!

This design system is intended to provide primitive "building blocks" for custom experiences. It aims to adhere as closely to the HTML spec as possible, while providing simple interfaces for complex components.

Please follow the below steps to install, consume, or contribute to the design_system.

# Getting Started

## Installation

Narmi Design System is currently published as a single NPM package.

```
npm add @narmi/design_system --save
```

### Peer dependencies
Your project must provide the following packages as peer dependencies:

- React (>=16.9, supports Hooks)
- styled-components (>=5)

### Documentation

- [Storybook (latest)](https://master--60620d422ffdf100216415b2.chromatic.com/).

### Versioning

This project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
Refer to the [**Changelog**](https://github.com/narmi/design_system/blob/master/CHANGELOG.md) for details.


### Browser Support

Please check the following chart to see the minimum browser versions supported by design_system:

- https://caniuse.com/?search=focus-within

----

# Developing

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

## Releases

This project uses [`semantic-release`](https://semantic-release.gitbook.io/semantic-release/),
 configured to use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Any time new commits are added to the `master` branch, the GitHub Action "release" will run `semantic-release`. The job will
parse recent git tags and commit messages to determine the new version number, tag the release, publish to NPM, and update the changelog.

### Commit Guidelines

This project requires structured commit messages in the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:

```
<type>(<optional scope>): <short description>
```

Allowed types are `[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] `.
The `build`, `chore`, and `ci` commit types will skip CI and do not trigger a release.
Adding a bang (`!`) to the commit type denotes a breaking change ([see docs](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer) for more details).

#### Examples

Making a fix without scope specified:
```
fix: update global `text-rendering` value
```

Adding a feature within the scope of the Button component:
```
feat(Button): Add secondary button variant
```

Breaking change within the Button component scope:
```
refactor(Button)!: Remove variant `disabled`. The `disabled` boolean prop is now used to disable a button.
```

#### What is a "Breaking Change?"

Any modification to the design system that requires consumers to update their usage of NDS is considered a breaking change. For example:

- removing or renaming a component
- changing a public className
- interface changes in public methods
- renamed or retyped component props

If you are making a breaking change, please [note it in your commit message](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer) appropriately.

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

