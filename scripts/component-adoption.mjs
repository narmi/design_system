/**
 * Reads relevant files from <TARGET_DIR>, counts up NDS component imports,
 * and prints the results in the console.
 */
import { readFileSync } from "fs";
import { resolve } from "path";
import glob from "glob";
import Table from "cli-table";
import toAst from "./util/toAst.mjs";
import getComponentNames from "./util/getComponentNames.mjs";
import ignore from "./util/ignore-patterns.mjs";

if (!process.argv[2]) {
  throw new Error(
    "Missing target path. Example: `npm run stats:components <TARGET_DIR>`"
  );
}

const PACKAGE_NAME = "@narmi/design_system";
const TARGET_DIR = process.argv[2];

/**
 * Formats and prints import stats
 * @param {Object} componentCounts map of component names to import counts
 * @param {Array} unusedComponents list of component names that are not imported in consumer
 */
const printResults = (componentCounts, unusedComponents) => {
  const ansi = { bold: "\x1b[1m", reset: "\x1b[0m" };
  const totalImports = Object.values(componentCounts).reduce(
    (acc, curr) => acc + curr
  );
  const countTable = new Table({
    head: ["#", "Component Name"],
    style: { "padding-left": 1, "padding-right": 1, compact: true },
  });
  Object.entries(componentCounts).forEach(([k, v]) => {
    countTable.push([v, k]);
  });

  console.log(`\n${ansi.bold}Component usage in ${TARGET_DIR}:${ansi.reset}`);
  console.log(countTable.toString());
  console.log(`TOTAL NDS IMPORTS: ${totalImports}`);

  console.log(
    `\n${ansi.bold}${unusedComponents.length} components are NOT used in ${TARGET_DIR}:${ansi.reset}`
  );
  console.log(`${unusedComponents.join(", ")}\n`);
};

/**
 * @param {String} fileContent
 * @returns {Array} list of NDS components being imported in the file
 */
const _toImportedComponentsList = (fileContent) =>
  toAst(fileContent)
    .program.body.filter((o) => o.type === "ImportDeclaration") // only import statements
    .filter((o) => o.source.value.includes(PACKAGE_NAME)) // only NDS imports
    .flatMap((o) => o.specifiers.map((s) => s.imported.name)); // return a flat array of component names in NDS imports

glob(`${resolve(TARGET_DIR)}/**/*.+(js|jsx)`, { ignore }, (error, files) => {
  if (error) {
    throw new Error(error);
  }

  // initialize a totals object so that unused components are included
  // in our importCountMap as "0"
  const totals = getComponentNames().reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  // @returns { ComponentName: <importCount>, ... }
  const importCountMap = files
    .map((path) => readFileSync(path).toString()) // map filepaths to file content strings
    .filter((fileContent) => fileContent.includes(PACKAGE_NAME)) // only include files with an NDS import
    .flatMap(_toImportedComponentsList) // return an array of every NDS component import instance
    .reduce((acc, curr) => {
      // tally imports into our totals obj and return the resulting count map
      acc[curr] = acc[curr] + 1;
      return acc;
    }, totals);

  // sorted object of adopted components and their counts
  const adoptedComponentCounts = Object.entries(importCountMap)
    .filter(([key, value]) => value >= 1)
    .sort(([aKey, aValue], [bKey, bValue]) => bValue - aValue)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  // list of component names that are not used
  const unadoptedComponentNames = Object.entries(importCountMap)
    .filter(([key, value]) => value === 0)
    .flatMap(([key]) => key);

  printResults(adoptedComponentCounts, unadoptedComponentNames);
});
