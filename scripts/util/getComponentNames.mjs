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
  const ast = toAst(readFileSync(resolve(PATH_SRC, "index.ts")).toString());
  const result = ast.program.body
    .filter(
      (o) => o.type === "ExportNamedDeclaration" && o.exportKind !== "type",
    ) // value exports only
    .flatMap((o) => o.specifiers) // convert to list of individual export specifiers
    .filter((specifier) => specifier.exportKind !== "type") // drop inline `export { type Foo }`
    .map((specifier) => specifier.exported.name); // take the names components are exported as

  return result;
};

export default getComponentNames;
