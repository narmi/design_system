#!/usr/bin/env node

/*
Generates `src/icons/iconNames.ts` from `src/icons/selection.json`.

Components need only the list of valid icon names (for prop validation),
not the full IcoMoon selection data. Importing `selection.json` directly
pulls ~550K of SVG path data into the published bundle, so this script
extracts the names into a small generated module instead.

The generated file is checked in so tests and storybook work without a
build step. It is regenerated on every `npm run build`; rerun manually
via `npm run build:icon-names` after changing `selection.json`.
*/

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { format } from "prettier";

const __dirname = dirname(fileURLToPath(import.meta.url));

const selectionPath = resolve(__dirname, "../src/icons/selection.json");
const outPath = resolve(__dirname, "../src/icons/iconNames.ts");

const { icons } = JSON.parse(readFileSync(selectionPath, "utf-8"));
const names = icons.map((icon) => icon.properties.name);

const output = `// AUTO-GENERATED FILE — do not edit.
// Generated from src/icons/selection.json by scripts/buildIconNames.mjs
// Regenerate with: npm run build:icon-names

export const VALID_ICON_NAMES: string[] = ${JSON.stringify(names, null, 2)};

export default VALID_ICON_NAMES;
`;

writeFileSync(outPath, await format(output, { parser: "typescript" }));
console.log(`Wrote ${names.length} icon names to ${outPath}`);
