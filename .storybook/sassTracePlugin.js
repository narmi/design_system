import fs from "node:fs";
import path from "node:path";

const COMPONENT_MODULE = /^index\.(tsx|ts|jsx|js)$/;

const walk = (dir, visit) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, visit);
    else visit(full, entry.name);
  }
};

/**
 * Makes Sass sources visible to Chromatic TurboSnap.
 *
 * Every stylesheet reaches Storybook through `src/index.scss`, and the Sass
 * compiler inlines the files it imports. Only that entry file shows up in the
 * module graph TurboSnap traces, so a change to any other stylesheet traced to
 * no stories and was never snapshotted.
 *
 * This records the dependency our folder convention already implies: a
 * stylesheet styles the component modules (`index.{ts,tsx,js,jsx}`) in its
 * folder and the folders below it. A stylesheet with no component module at
 * or below its folder is shared, so it is attached to `sharedOwner`, which
 * every story depends on.
 *
 * The stylesheets are imported as `?raw` strings that are never used, so no
 * CSS is compiled or emitted a second time. Only the stats file changes.
 */
export const sassTracePlugin = ({ srcDir, sharedOwner }) => {
  /** owner module path -> stylesheet paths */
  const stylesheetsByOwner = new Map();

  return {
    name: "nds:sass-trace",
    apply: "build",
    enforce: "pre",

    buildStart() {
      stylesheetsByOwner.clear();
      const stylesheets = [];
      const componentModules = [];
      walk(srcDir, (file, name) => {
        if (name.endsWith(".scss")) stylesheets.push(file);
        else if (COMPONENT_MODULE.test(name)) componentModules.push(file);
      });

      const entryStylesheet = path.join(srcDir, "index.scss");
      for (const stylesheet of stylesheets) {
        if (stylesheet === entryStylesheet) continue; // imported for real
        const folder = path.dirname(stylesheet) + path.sep;
        const owners =
          folder === srcDir + path.sep
            ? []
            : componentModules.filter((module) => module.startsWith(folder));
        for (const owner of owners.length ? owners : [sharedOwner]) {
          const list = stylesheetsByOwner.get(owner) ?? [];
          list.push(stylesheet);
          stylesheetsByOwner.set(owner, list);
        }
      }
    },

    transform(code, id) {
      const stylesheets = stylesheetsByOwner.get(id.split("?")[0]);
      if (!stylesheets) return null;
      const imports = stylesheets
        .map((file) => `import ${JSON.stringify(`${file}?raw`)};`)
        .join("\n");
      return { code: `${code}\n${imports}\n`, map: null };
    },
  };
};
