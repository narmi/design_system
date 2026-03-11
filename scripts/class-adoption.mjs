import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import { resolve, join } from "path";
import Table from "cli-table";
import getHelperClassNames from "./util/getHelperClassNames.mjs";

if (!process.argv[2]) {
  throw new Error(
    "Missing target path. Example: `npm run stats:classes <TARGET_DIR>`",
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
    (acc, curr) => acc + curr,
  );
  const classTable = new Table({
    head: ["#", "Class Name"],
    style: { "padding-left": 1, "padding-right": 1, compact: true },
  });
  Object.entries(countMap).forEach(([k, v]) => {
    classTable.push([v, k]);
  });
  console.log(
    `\n${ansi.bold}Helper class usage in ${TARGET_DIR}:${ansi.reset}`,
  );
  console.log(classTable.toString());
  console.log(`TOTAL CLASSES USED: ${totalClasses}\n`);
};

/**
 * @param {String} content file content
 * @param {String} className class name to match
 * @returns {Number} number of matches for the given file and class
 */
const getNumMatches = (content, regex) => {
  return (content.match(regex) || []).length;
};

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

  // initialize an object with a count of 0 for every helper class
  const totals = CLASSES.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  // Pre-compile regexes with word boundaries to avoid false positives
  const classRegexes = CLASSES.reduce((acc, className) => {
    acc[className] = new RegExp(`\\b${className}\\b`, "g");
    return acc;
  }, {});

  // Read all files concurrently for better performance
  const fileContents = await Promise.allSettled(
    files.map((path) => readFile(path, "utf-8")),
  );

  const classCountMap = fileContents
    .filter((result) => result.status === "fulfilled") // only successful reads
    .map((result) => result.value)
    .filter((fileContent) =>
      CLASSES.some((className) => fileContent.includes(className)),
    ) // skip files without any class names
    .reduce((acc, curr) => {
      // check each file for matches on every available helper class
      // if matches exist, increment totals key by occurrence count
      CLASSES.forEach((className) => {
        acc[className] =
          acc[className] + getNumMatches(curr, classRegexes[className]);
      });
      return acc;
    }, totals);

  // don't report on classes that are not found
  const filteredCountMap = Object.entries(classCountMap).reduce(
    (acc, [k, v]) => {
      if (v > 0) acc[k] = v;
      return acc;
    },
    {},
  );

  printResults(filteredCountMap);
})();
