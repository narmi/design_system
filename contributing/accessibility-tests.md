# Resolving Failing Storybook Accessibility Tests

The workflow that runs accessibility testing is **"Storybook Accessibility"** / `run-storybook-a11y`. It renders every story in headless Chromium through the [Storybook Vitest addon](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon), runs the story's `play` function if it has one, and then runs [axe](https://github.com/dequelabs/axe-core) through `@storybook/addon-a11y`. Any axe violation fails the story, and a failing story blocks the PR.

This is the same check you see in the **Accessibility** panel when running Storybook locally. The CI job just makes it blocking.

## Running it locally

Chromium is downloaded once:

```sh
pnpm exec playwright install chromium
```

Then run every story:

```sh
pnpm run test:storybook
```

Or a single component (extra arguments are passed to Vitest):

```sh
pnpm run test:storybook src/Select
```

For Vitest's full per-story output, including stack traces, call it directly:

```sh
pnpm exec vitest run --project=storybook src/Select/index.stories.jsx
```

If you cannot download Playwright's Chromium, point it at your installed Chrome instead:

```sh
PLAYWRIGHT_CHANNEL=chrome pnpm run test:storybook
```

## Reading a failure

Each failing story prints the axe rule that failed, the offending element, and a Deque University link that explains the rule and how to fix it:

```
FAIL  src/Select/index.stories.jsx > In A Form
Expected the HTML found at $('select') to have no violations:
Received: "Form elements must have labels (label)"
https://dequeuniversity.com/rules/axe/4.12/label
```

The fastest way to debug is to open the story in Storybook (`pnpm run storybook`) and look at the **Accessibility** panel, which highlights the failing element.

## Fixing it

Prefer fixing the component or the story over suppressing the check:

- If the violation is in the component, fix the component. That is the point of the check.
- If the violation is only in the story's scaffolding (an unlabeled demo `<select>`, a table built for layout), fix the story.

## Existing violations: the baseline

When this check was introduced, a number of stories already had violations. Rather than fix them all at once, they are listed in `.storybook/a11y-baseline.json`, keyed by story, with the axe rules each one fails. Stories in the baseline are tolerated. The baseline is a ratchet, so it can only shrink:

- A story **not** in the baseline that has a violation fails the run.
- A baseline story that **now passes** fails the run until its entry is removed. Fixing a component means deleting its lines from the baseline in the same PR.
- A baseline entry whose story was renamed or deleted fails the run.
- A failing `play` function or render error always fails, baseline or not.

To regenerate entries from the current results, for the files that ran:

```sh
pnpm run test:storybook --update
pnpm run test:storybook src/Select --update
```

Review the resulting diff before committing it. `--update` is for removing fixed entries or renaming stories, not for adding new violations. New entries in the baseline should be rare and need a reason in the PR.

## Adjusting a single story

Prefer the baseline for anything temporary. Two Storybook parameters exist for cases that are not temporary:

A rule that is a known false positive for one story can be turned off there. Unlike the baseline, a disabled rule is no longer reported anywhere, so use this sparingly:

```js
parameters: {
  a11y: {
    config: {
      rules: [{ id: "color-contrast", enabled: false }],
    },
  },
},
```

A story that cannot run under the Vitest addon at all can be excluded with a tag. Chromatic still snapshots it and still runs its `play` function:

```js
export const Overview = {
  tags: ["!test"],
};
```
