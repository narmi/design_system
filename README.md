[![npm](https://img.shields.io/npm/v/@narmi/design_system.svg?style=flat&color=blue)](http://www.npmjs.com/package/@narmi/design_system)

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

- `react` (`^18 || ^19`)
- `react-dom` (`^18 || ^19`)

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

#### Version support policy

- The latest minor release (`@latest`) is the actively developed version and
  always contains every fix.
- Older minor versions receive patches **only on demand** — not every published
  version is maintained.
- Backports target a single Major.Minor (e.g. `6.15`). They are **not**
  forwarded to other minor versions. If `6.16` and `6.18` also need the fix,
  each must be backported separately.
- Fixes always land on `main` first and are selectively applied to older
  versions — never the reverse.
- If you are on an intermediate minor that does not have the fix,
  [request a backport](../../issues/new?template=backport-request.md) or
  upgrade to `@latest`.

**For consumers:**

Most consumers should pin a semver range in `package.json` and let `npm install`
resolve to the newest patch on that line. The `release-*` dist-tags are a
convenience for installing the current patch of a line by name.

| Goal                                        | How                            | Example                                                  |
| ------------------------------------------- | ------------------------------ | -------------------------------------------------------- |
| Track latest within your major              | Semver range in `package.json` | `"@narmi/design_system": "^6"` — newest `6.x.x`          |
| Stay pinned to a specific minor             | Semver range in `package.json` | `"@narmi/design_system": "~6.15.0"` — patches for `6.15` |
| Install the current patch of a line by name | npm dist-tag                   | `npm install @narmi/design_system@release-6.15.x`        |

#### Releasing backports (maintainers)

When a fix that lands on `main` needs to be applied to older Major.Minor lines
still in production, backports are triggered by PR labels.

**Primary flow: label the PR before merging.**

1. On the fix PR against `main`, add a label of the form
   `backport-<MAJOR>.<MINOR>` for every line that needs the fix
   (e.g. `backport-6.15`, `backport-6.16`). Multiple labels are supported.
2. Merge the PR. The normal release runs against `main` and publishes on
   `@latest`. In parallel, the "Release Backport (on merge)" workflow reads
   the labels and, for each one:
   - Ensures the maintenance branch `<MAJOR>.<MINOR>.x` exists (creates it
     from the highest existing `v<MAJOR>.<MINOR>.z` tag if not).
   - Cherry-picks the PR's commits onto the branch, preserving Conventional
     Commit messages so `semantic-release` derives the correct patch bump.
   - Pushes; the resulting push triggers a release on the maintenance
     branch and publishes a new patch on the `release-<MAJOR>.<MINOR>.x`
     npm dist-tag.

**Fallback: manual dispatch.**

If a label was forgotten, or a port needs to be re-run after a conflict was
resolved:

1. Go to **Actions → Release Backport → Run workflow**.
2. Enter the merged **PR number** and the **target Major.Minor** (e.g. `6.15`).
3. The workflow does exactly what the label-driven path would have done.

**Conflicts.** If a cherry-pick can't apply cleanly, the workflow opens a
draft PR against the maintenance branch with resume instructions. Resolve
the conflicts locally — do not squash-merge and do not re-word the
cherry-picked commit messages, because `semantic-release` derives the next
patch version from those messages.

Consumers pinned to that Major.Minor via a semver range (e.g. `"~6.15.0"`)
will pick up the patch automatically on the next install. To install the
current patch of that line explicitly by tag:

```
npm install @narmi/design_system@release-6.15.x
```

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

#### 📸 Working with snapshot tests

The workflow that runs visual snapshot testing is "Chromatic PR Checks"/`run_chromatic`. All pull requests will block merging until this workflow passes.

On every push to a PR, this workflow will run snapshots and report results via a comment on the PR. Use the provided links to review diffs in the Chromatic build and/or view the Storybook preview build.

For a detailed step-by-step guide on resolving failing Chromatic checks, see the [Visual Regression Tests](//github.com/narmi/design_system/tree/main/contributing/visual-regression-tests.md) contributing guide.

**🔑 Authentication Required:**
While the Storybook preview is public, you must log into [Chromatic](chromatic.com/start) with Narmi engineering credentials to view details on the build and approve or deny snapshot changes.

### Manual publishing (Narmi only)

In rare circumstances, you may need to manually publish a version of NDS outside of the normal automated release process.

#### Publishing a beta version

1. Rebuild NDS (`npm run build`)
2. Update the `version` field of package.json to be a beta of the next minor.
   For example, you would change `2.35.2` to `2.36.0-beta.0`.
   DO NOT COMMIT THIS CHANGE.
3. Publish the package (`npm publish --tag beta`)
4. In your consuming application, you can point the `@narmi/design_system@2.36.0-beta`

If you need to make additional changes after the beta is published...

1. Rebuild NDS (`npm run build`)
2. Bump the beta version number in package.json (`2.36.0-beta.0` -> `2.36.0-beta.1`)
3. Install the new beta version in your consuming application.

### Testing unpublished changes in a consumer

**Development of Narmi Design System should be done in isolation within this repo.**
There are however, some rare circumstances where you may need to test NDS changes against some consuming application.

The best way to approach testing unpublished NDS changes in a consumer is to use
**beta versions**. See [Publishing a beta version](#publishing-a-beta-version) for instructions.

---

## License

Source code is under a custom license based on MIT. The license restricts `@narmi/design_system` usage to applications that integrate or interoperate with Narmi software or services, with additional restrictions for external, stand-alone applications. Please see LICENSE.md for full details.
