import { readFileSync } from "fs";
import { resolve } from "path";
import glob from "glob";
import sass from "sass";
import { parse } from "css";

/**
 * @returns {Array} full list of helper class strings from NDS
 */
const getHelperClassNames = () => {
  // join all scss files in `helper-classes` insto a single scss string
  const sassString = glob
    .sync(`${resolve(process.cwd(), "src/helper-classes")}/*.scss`)
    .map((file) => readFileSync(file).toString())
    .join("\n");

  // convert sass to CSS
  const compiledCSS = sass.compileString(sassString).css;

  // parse CSS into AST and get a list of all classNames and return result
  return parse(compiledCSS)
    .stylesheet.rules.filter((rule) => rule.type === "rule") // no comments
    .flatMap((rule) => rule.selectors) // take only the selector from each rule
    .map((selector) => selector.replace(".", "")); // return classes as they'red used in DOM attributes
};

export default getHelperClassNames;
