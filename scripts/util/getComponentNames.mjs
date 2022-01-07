/**
 * helper that returns a list of components currently exported by NDS
 */
import { readFileSync } from "fs";
import { resolve } from "path";
import toAst from "./toAst.mjs";

const PATH_SRC = resolve(process.cwd(), "src");

/**
 * Reads index.js file from source to find all component names
 * @returns {Array} list of all component names from NDS distribution
 */
const getComponentNames = () => {
  const ast = toAst(readFileSync(resolve(PATH_SRC, "index.js")).toString());
  const result = ast.program.body
    .filter((o) => o.type === "ExportNamedDeclaration") // take only the final export statement
    .flatMap((o) => o.specifiers) // convert to list of individual export specifiers
    .map((specifier) => specifier.exported.name); // take the names components are exported as

  return result;
};

export default getComponentNames;
