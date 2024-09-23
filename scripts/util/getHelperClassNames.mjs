import { readFileSync } from "fs";
import { resolve } from "path";
import glob from "glob";
import sass from "sass";
import { parse } from "css";

/**
 * @returns {Array} full list of helper class strings from NDS
 */
const getHelperClassNames = () => {
  // join all scss files in `helper-classes` into a single scss string
  const sassString = glob
    .sync(`${resolve(process.cwd(), "src/helper-classes")}/*.scss`)
    .map((file) => readFileSync(file).toString())
    .join("\n");

  // convert sass to CSS
  const compiledCSS = sass.compileString(sassString).css;

  // parse CSS into AST and get a list of all classNames and return result
  const result = parse(compiledCSS)
    .stylesheet.rules.filter((rule) => rule.type === "rule") // no comments
    .flatMap((rule) => rule.selectors) // take only the selector from each rule
    .filter((selector) => !selector.includes("[")) // no attribute selectors
    .filter((selector) => !selector.includes(" ")) // no ancestry selectors
    .filter((selector) => selector.includes("--")) // must have `base--variant` pattern
    .map((selector) => selector.replace(".", "")); // return classes as they're used in DOM attributes

  return [...new Set(result)];
};

export default getHelperClassNames;
