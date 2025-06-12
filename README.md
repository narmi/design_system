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
- ✏️ [Contributing](https://github.com/narmi/design_system/blob/main/CONTRIBUTING.md)

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
All CSS custom properties from design tokens are already included in the base
stylesheet, `dist/style.css`.

To request a new distribution, please [file an issue](https://github.com/narmi/design_system/issues/new/choose).

### Versioning

This project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
Refer to the [**Changelog**](https://github.com/narmi/design_system/blob/main/CHANGELOG.md) for details.

### Browser Support

See [`.browserslistrc`](https://github.com/narmi/design_system/blob/main/.editorconfig) for officially supported browsers or
run `npx browserslist` in this project locally to see a full list of targeted browsers.

This project does not support any version of Internet Explorer.

## Contributing

### Local development

To run project locally:

```
git clone git@github.com:narmi/design_system.git
cd design_system
npm run dev
```

### NPM scripts

| `npm run` command  | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `build:jsdoc`      | builds jsDoc documentation to `dist/`                |
| `build:tokens`     | builds all distributions of design tokens to `dist/` |
| `build:components` | builds all components and base stylesheet to `dist/` |
| `build`            | builds everything                                    |
| `test`             | runs all jest tests                                  |
| `storybook`        | starts storybook in dev server mode on `:6006`       |
| `watch`            | watches `src` dir, triggering `build` on changes     |
| `dev`              | **Start storybook and watch for all `src` changes**  |
| `stats:components` | analyzes a given project and reports component usage |
| `stats:classes`    | analyzes a given project and reports class usage     |

### Releases

This project uses [`semantic-release`](https://semantic-release.gitbook.io/semantic-release/),
configured to use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Any time new commits are added to the `main` branch, the GitHub Action "release" will run `semantic-release`. The job will
parse recent git tags and commit messages to determine the new version number, tag the release, publish to NPM, and update the changelog.

#### Major releases

All PRs target `main` unless it contains breaking changes. Any branch containing breaking change commits should target the open major release branch.
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

### Pull Request guide

There are a number of github actions we run automatically for every PR.
In order for your PR to merge it must:

- Build without failures and/or typescript errors
- Pass all unit tests
- Pass Chromatic snapshot tests

#### 📸 Working with snapshot tests

The workflow that runs visual snapshot testing is "Chromatic PR Checks"/`run_chromatic`. All pull requests will block merging until this workflow passes.

Passing conditions for tests:

- No visual changes detected
- Visual changes detected, but approved (indicates an intentional change)
- Visual changes resolved by a code change to match baseline snapshots
- New stories added in the PR are approved in the Chromatic build

Failing conditions for tests:

- Chromatic build has unreviewed diffs
- Chromatic build has denied changes
- New stories haven't been explicitly approved in the Chromatic build

On every push to a PR, this workflow will run snapshots and report results via a
comment on the PR. Use the provided links to review diffs in the Chromatic build and/or view the Storybook preview build.

This workflow must be run again to confirm snapshots are passing, triggered by a new push to the PR or by manually running the job.

**🔑 Authentication Required:**
While the Storybook preview is public, you must log into [Chromatic](chromatic.com/start) with Narmi engineering credentials to view details on the build and approve or deny snapshot changes.

**Local Snapshots:**
When running Storybook locally, you'll see a floating button on the bottom left of the viewport labelled "Run Tests". If you're authenticated with chromatic, this will compare your current stories being served on `localhost:6006` against baseline snapshots in Chromatic. Results will appear in the addons panel.

**Baselines:**
Baselines are managed by Chromatic, using the latest _approved_ build (all green), regardless of the PR that triggered it. Once a build is approved, it immediately becomes the new baseline.
To keep `main` as the branch that should be tracked as the baseline in Chromatic, we run a workflow on
merges to `main` that creates an auto-accepted build, designating it as the new baseline.

### Testing unpublished changes in a consumer

**Development of Narmi Design System should be done in isolation within this repo.**
There are however, some rare circumstances where you may need to test NDS changes against some consuming application.

The best way to approach testing unpublished NDS changes in a consumer is to use
**beta versions**.

#### Publishing a beta version

⚠️ Only do this if absolutely necessary

1. Rebuild NDS (`npm run build`)
2. Update the `version` field of package.json to be a beta of the next minor.
   For example, you would change `2.35.2` to `2.36.0-beta.0`.
   DO NOT COMMIT THIS CHANGE.
3. Publish the package (`npm publish --tag beta`)
4. In your consuming application, you can point the `@narmi/design_system`
   version to the beta version you just published.

If you need to make additional changes after the beta is published...

1. Rebuild NDS (`npm run build`)
2. Bump the beta version number in package.json (`2.36.0-beta.0` -> `2.36.0-beta.1`)
3. Install the new beta version in your consuming application.

---

## License

Source code is under a custom license based on MIT. The license restricts `@narmi/design_system` usage to applications that integrate or interoperate with Narmi software or services, with additional restrictions for external, stand-alone applications. Please see LICENSE.md for full details.
