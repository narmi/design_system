[![npm](https://img.shields.io/npm/v/@narmi/design_system.svg?style=flat&color=blue)](http://www.npmjs.com/package/@narmi/design_system)
[![Check Build](https://github.com/narmi/design_system/actions/workflows/build.yaml/badge.svg)](https://github.com/narmi/design_system/actions/workflows/build.yaml)

# Narmi Design System (NDS)

⚡ Build your own experiences on the [Narmi platform](https://www.narmi.com/developers/developer-portal)!

This design system provides low level utilities and UI components for building
custom experiences in combination with the [Narmi API](https://www.narmi.com/developers/developer-portal#api).

## Getting started

### Installation
Narmi Design System is published as a single NPM package.

```
npm install @narmi/design_system --save
```

#### Peer dependencies
Your project must provide the following packages as peer dependencies:

- React (>=16.9, supports Hooks)

### Documentation

- 📖 [Storybook (latest)](https://narmi.github.io/design_system/)
- 🎨 [Design Guidelines](https://zeroheight.com/8ac87d4ba/p/446c38-narmi-design-system-nds)


## Usage

### Components
Components can be imported from package root:

```
import { Button, Tooltip } from '@narmi/design_system';
```

### Style Helpers
NDS provides a set of global CSS helper classes to make it easy to tweak
styling in your markup with standard Narmi design values. For example:

```
<div className="padding--all">
  <p className="fontWeight--semibold fontSize--l">
    Semibold large text in a box padded with a standard gutter
  </p>
</div>
```

For full documentation of available classes, see [storybook docs](https://narmi.github.io/design_system/).

### Design tokens
All available distributions of design tokens can be found in `dist/tokens`.
All CSS custom properites from design tokens are already included in the base
stylesheet, `dist/style.css`.

To request a new distribution, please [file an issue](https://github.com/narmi/design_system/issues/new/choose).

### Versioning
This project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
Refer to the [**Changelog**](https://github.com/narmi/design_system/blob/master/CHANGELOG.md) for details.

### Browser Support
See [`.browserslistrc`](https://github.com/narmi/design_system/blob/master/.editorconfig) for officially supported browsers or
run `npx browserslist` in this project locally to see a full list of targeted browsers.

This project does not support any version of Internet Explorer.


## Contributing

### Local development
To run storybook locally:

```
git clone git@github.com:narmi/design_system.git
cd design_system
npm install && npm run build && npm run storybook
```

### NPM scripts

`npm run` command    | Description
-------------------- | ---------------------------------------
`build:jsdoc`        | builds jsDoc documentation to `dist/`
`build:tokens`       | builds all distributions of design tokens to `dist/`
`build:components`   | builds all components and base stylesheet to `dist/`
`build`              | builds everytyhing
`test`               | runs all jest tests
`storybook`          | starts storybook in dev server mode on `:6006`
`watch`              | watches `src` dir, triggering `build` on changes

### Releases
This project uses [`semantic-release`](https://semantic-release.gitbook.io/semantic-release/),
 configured to use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Any time new commits are added to the `master` branch, the GitHub Action "release" will run `semantic-release`. The job will
parse recent git tags and commit messages to determine the new version number, tag the release, publish to NPM, and update the changelog.

#### Major releases
All PRs target `master` unless it contains breaking changes. Any branch continaing breaking change commits should target the open major release branch.
For example, if NDS is on major version `1`, breaking changes should target the branch `major/v2`.

Branches containing breaking change commits should follow the naming convention `breaking/<branch name>`.

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
feat(Button): add secondary button variant
```

Breaking change within the Button component scope:
```
refactor(Button)!: remove variant `disabled`. The `disabled` boolean prop is now used to disable a button.
```

#### What is a "Breaking Change?"

Any modification to the design system that requires consumers to update their usage of NDS is considered a breaking change. For example:

- removing or renaming a component
- changing a public className
- interface changes in public methods
- renamed or retyped component props

If you are making a breaking change, please [note it in your commit message](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer) appropriately.

## License

Source code is under a custom license based on MIT. The license restricts `@narmi/design_system` usage to applications that integrate or interoperate with Narmi software or services, with additional restrictions for external, stand-alone applications. Please see LICENSE.md for full details.

