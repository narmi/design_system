/**
 * Guards Storybook's react-docgen-typescript output.
 *
 * `@joshwooding/vite-plugin-react-docgen-typescript` (used by
 * `@storybook/react-vite` when `typescript.reactDocgen` is
 * `"react-docgen-typescript"`) skips any file that is not a root file of the
 * resolved TypeScript project. When that happens it emits a `warn` and returns
 * the source untouched: the Storybook build still succeeds, but every
 * TypeScript component loses its controls and prop descriptions.
 *
 * That exact failure shipped once already, so this script runs the real plugin
 * with the real options from `.storybook/main.ts` over a few representative
 * components and fails if the docgen output is missing or has no props.
 *
 * Run with `npm run check:docgen`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import reactDocgenTypescript from "@joshwooding/vite-plugin-react-docgen-typescript";
import mainConfig from "../.storybook/main.ts";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Representative components covering the shapes we care about: a plain
 * function component, one with a compound subcomponent, and one whose props
 * come from a shared interface.
 */
const SAMPLE_COMPONENTS = [
  "src/Toggle/index.tsx",
  "src/Row/index.tsx",
  "src/Sidebar/index.tsx",
];

/** Extracts every `__docgenInfo = {...};` payload the plugin appended. */
const parseDocgenInfo = (code) =>
  [...code.matchAll(/__docgenInfo = (\{.*\});$/gm)].flatMap(([, json]) => {
    try {
      return [JSON.parse(json)];
    } catch {
      return [];
    }
  });

const main = async () => {
  // Depending on module interop, the default export may arrive wrapped.
  const config = mainConfig.default ?? mainConfig;
  const { reactDocgen, reactDocgenTypescriptOptions } = config.typescript ?? {};

  if (reactDocgen !== "react-docgen-typescript") {
    console.error(
      `.storybook/main.ts sets typescript.reactDocgen to "${reactDocgen}".\n` +
        "This check only covers the react-docgen-typescript pipeline; update " +
        "or remove it if that was intentional.",
    );
    process.exit(1);
  }

  const warnings = [];
  // Matches how @storybook/react-vite instantiates the plugin.
  const plugin = reactDocgenTypescript({
    ...reactDocgenTypescriptOptions,
    savePropValueAsString: true,
  });
  const pluginContext = {
    warn: (message) => warnings.push(String(message)),
    error: (message) => {
      const err = new Error(String(message));
      warnings.push(err.message);
      throw err;
    },
    getModuleInfo: () => null,
    meta: {},
  };

  const configResolved = plugin.configResolved.handler ?? plugin.configResolved;
  await configResolved.call(pluginContext, {
    root: ROOT_DIR,
    command: "build",
    mode: "production",
    build: {},
  });

  const transform = (plugin.transform.handler ?? plugin.transform).bind(
    pluginContext,
  );

  const failures = [];
  for (const relativePath of SAMPLE_COMPONENTS) {
    const id = path.join(ROOT_DIR, relativePath);
    const result = await transform(fs.readFileSync(id, "utf8"), id);
    const code = String(result?.code ?? result ?? "");
    const docs = parseDocgenInfo(code);

    if (docs.length === 0) {
      failures.push(`${relativePath}: no __docgenInfo was emitted`);
      continue;
    }

    const undocumented = docs.filter(
      (doc) => Object.keys(doc.props ?? {}).length === 0,
    );
    if (undocumented.length > 0) {
      failures.push(
        `${relativePath}: __docgenInfo has no props for ` +
          undocumented.map((doc) => doc.displayName).join(", "),
      );
    }
  }

  if (failures.length > 0) {
    console.error("Storybook docgen is broken. Affected components:\n");
    for (const failure of failures) {
      console.error(`  - ${failure}`);
    }
    if (warnings.length > 0) {
      console.error("\nPlugin warnings:\n");
      for (const warning of warnings) {
        console.error(`  - ${warning}`);
      }
    }
    console.error(
      "\nWithout docgen, these components render in Storybook with no " +
        "controls and no prop descriptions.\nCheck " +
        "`typescript.reactDocgenTypescriptOptions` in .storybook/main.ts — the " +
        "configured\ntsconfig must include the component files.",
    );
    process.exit(1);
  }

  console.log(
    `Storybook docgen OK (${SAMPLE_COMPONENTS.length} components checked).`,
  );
};

await main();
