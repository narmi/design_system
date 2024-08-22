import { readFileSync } from "fs";
import { resolve } from "path";
import glob from "glob";
import Table from "cli-table";
import getHelperClassNames from "./util/getHelperClassNames.mjs";
import ignore from "./util/ignore-patterns.mjs";

if (!process.argv[2]) {
  throw new Error(
    "Missing target path. Example: `npm run stats:classes <TARGET_DIR>`"
  );
}

const TARGET_DIR = process.argv[2];
const CLASSES = getHelperClassNames();

/**
 * Prints a table of total classes found in target project and a count for each class
 * @param {Object} countMap className keys to occurrence count values
 */
const printResults = (countMap) => {
  const ansi = { bold: "\x1b[1m", reset: "\x1b[0m" };
  const totalClasses = Object.values(countMap).reduce(
    (acc, curr) => acc + curr
  );
  const classTable = new Table({
    head: ["#", "Class Name"],
    style: { "padding-left": 1, "padding-right": 1, compact: true },
  });
  Object.entries(countMap).forEach(([k, v]) => {
    classTable.push([v, k]);
  });
  console.log(
    `\n${ansi.bold}Helper class usage in ${TARGET_DIR}:${ansi.reset}`
  );
  console.log(classTable.toString());
  console.log(`TOTAL CLASSES USED: ${totalClasses}\n`);
};

/**
 * @param {String} content file content
 * @param {String} className class name to match
 * @returns {Number} number of matches for the given file and class
 */
const getNumMatches = (content, className) => {
  // look for any exact match for class name
  const rx = new RegExp(`${className}`, "g");
  return (content.match(rx) || []).length;
};

glob(`${resolve(TARGET_DIR)}/**/*.+(js|jsx)`, { ignore }, (error, files) => {
  if (error) {
    throw new Error(error);
  }

  // initialize an object with a count of 0 for every helper class
  const totals = CLASSES.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  const classCountMap = files
    .map((path) => readFileSync(path).toString())
    .reduce((acc, curr) => {
      // check each file for matches on every available helper class
      // if matches exist, increment totals key by occurrence count
      CLASSES.forEach((className) => {
        acc[className] = acc[className] + getNumMatches(curr, className);
      });
      return acc;
    }, totals);

  // don't report on classes that are not found
  const filteredCountMap = Object.entries(classCountMap).reduce(
    (acc, [k, v]) => {
      if (v > 0) acc[k] = v;
      return acc;
    },
    {}
  );

  printResults(filteredCountMap);
});
