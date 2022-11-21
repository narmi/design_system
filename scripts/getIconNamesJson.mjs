/**
 * Takes current `selection.json` from icons source and prints
 * a JSON list of every icon name.
 *
 * Used as an ad-hoc script to list icons included in any given release when
 * we need to audit icon usage.
 */

import { readFileSync } from "fs";

const { icons } = JSON.parse(readFileSync("../src/icons/selection.json").toString());

const compatIconsJson = `
{
  "icons": [
    ${icons.map(({ properties }) => `"${properties.name}"`).join(",\n")}
  ]
}
`;

console.log(compatIconsJson);