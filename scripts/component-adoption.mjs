/**
 * Reads relevant files from <TARGET_DIR>, counts up NDS component imports,
 * and prints the results in the console.
 */
import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import { resolve, join } from "path";
import Table from "cli-table";
import toAst from "./util/toAst.mjs";
import getComponentNames from "./util/getComponentNames.mjs";

if (!process.argv[2]) {
  throw new Error(
    "Missing target path. Example: `npm run stats:components <TARGET_DIR>`",
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
    (acc, curr) => acc + curr,
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
    `\n${ansi.bold}${unusedComponents.length} components are NOT used in ${TARGET_DIR}:${ansi.reset}`,
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
    .flatMap((o) =>
      o.specifiers
        .filter((s) => s.imported) // only named imports
        .map((s) => s.imported.name),
    ); // return a flat array of component names in NDS imports

/**
 * Recursively finds all files matching given extensions in a directory
 * @param {String} dir directory to search
 * @param {Array} extensions file extensions to match (e.g., ['.js', '.ts'])
 * @returns {Array} list of file paths
 */
const findFiles = (dir, extensions) => {
  const results = [];

  try {
    const entries = readdirSync(dir, { recursive: true, withFileTypes: true });
    entries.forEach((entry) => {
      if (
        entry.isFile() &&
        extensions.some((ext) => entry.name.endsWith(ext))
      ) {
        const fullPath = join(entry.parentPath || dir, entry.name);
        results.push(fullPath);
      }
    });
  } catch (err) {
    // Silently skip directories we can't read
  }

  return results;
};

(async () => {
  // Find all matching files
  const targetPath = resolve(TARGET_DIR);
  const extensions = [".js", ".jsx", ".ts", ".tsx"];
  const files = findFiles(targetPath, extensions);

  // initialize a totals object so that unused components are included
  // in our importCountMap as "0"
  const totals = getComponentNames().reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  // Read all files concurrently for better performance
  const fileContents = await Promise.allSettled(
    files.map((path) => readFile(path, "utf-8")),
  );

  // @returns { ComponentName: <importCount>, ... }
  const importCountMap = fileContents
    .filter((result) => result.status === "fulfilled") // only successful reads
    .map((result) => result.value)
    .filter((fileContent) => fileContent.includes(PACKAGE_NAME)) // only include files with an NDS import
    .flatMap((fileContent) => {
      try {
        return _toImportedComponentsList(fileContent);
      } catch (err) {
        // silently skip files with parse errors
        return [];
      }
    })
    .reduce((acc, curr) => {
      // tally imports into our totals obj and return the resulting count map
      acc[curr] = acc[curr] + 1;
      return acc;
    }, totals);

  // sorted object of adopted components and their counts
  /* eslint-disable no-unused-vars */
  const adoptedComponentCounts = Object.entries(importCountMap)
    .filter(([key, value]) => value >= 1)
    .sort(([aKey, aValue], [bKey, bValue]) => bValue - aValue)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  /* eslint-enable no-unused-vars */

  // list of component names that are not used
  /* eslint-disable no-unused-vars */
  const unadoptedComponentNames = Object.entries(importCountMap)
    .filter(([key, value]) => value === 0)
    .flatMap(([key]) => key);
  /* eslint-enable no-unused-vars */

  printResults(adoptedComponentCounts, unadoptedComponentNames);
})();
