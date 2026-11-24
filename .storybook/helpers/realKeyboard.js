/**
 * Real keyboard input for story `play` functions.
 *
 * The `userEvent` passed to `play` (from `storybook/test`) simulates keys in
 * JavaScript. Its `tab()` picks the next element itself, so it cannot verify
 * what the browser's own sequential focus navigation does with `inert`,
 * `visibility`, or anything else it does not model.
 *
 * Under `pnpm run test:storybook` stories run in Vitest browser mode, where
 * `vitest/browser` exposes a Playwright-backed `userEvent` that presses real
 * keys. Outside of it (the Storybook UI) that module throws on import.
 *
 * Returns the real-key `userEvent`, or `null` when running in the Storybook UI.
 */
export const getRealKeyboard = async () => {
  try {
    const { userEvent } = await import("vitest/browser");
    return userEvent ?? null;
  } catch {
    return null;
  }
};
