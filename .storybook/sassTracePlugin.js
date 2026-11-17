import fs from "node:fs";
import path from "node:path";

// `<Component>/index.tsx` or `<Component>/<Sub>/index.tsx`, relative to src
const COMPONENT_MODULE = /^([^./][^/]*)\/(?:.+\/)?index\.(?:tsx|ts|jsx|js)$/;

/**
 * Makes component Sass visible to Chromatic TurboSnap.
 *
 * Storybook loads every stylesheet through `src/index.scss`, so TurboSnap
 * cannot tell which stories a Sass change affects and skips them all. By
 * convention a component's styles live in `src/<Component>/`, so this adds
 * the stylesheets in that folder as dependencies of the component's modules.
 *
 * They are imported as unused `?raw` strings: no CSS is compiled or emitted
 * twice, only the stats file TurboSnap reads changes.
 */
export const sassTracePlugin = ({ srcDir }) => ({
  name: "nds:sass-trace",
  apply: "build",
  enforce: "pre",

  transform(code, id) {
    const file = path.relative(srcDir, id.split("?")[0]);
    const [, component] =
      file.split(path.sep).join("/").match(COMPONENT_MODULE) ?? [];
    if (!component) return null;

    const componentDir = path.join(srcDir, component);
    const imports = fs
      .readdirSync(componentDir, { recursive: true })
      .filter((name) => name.endsWith(".scss"))
      .map(
        (name) => `import ${JSON.stringify(`${componentDir}/${name}?raw`)};`,
      );
    if (!imports.length) return null;

    return { code: `${code}\n${imports.join("\n")}\n`, map: null };
  },
});
