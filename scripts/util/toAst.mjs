import { parse } from "@babel/parser";

const options = {
  sourceType: "module",
  plugins: ["jsx", "classProperties"],
};

/**
 * @param {String} fileContent
 * @returns AST of file
 */
const toAst = (fileContent) => parse(fileContent, options);

export default toAst;
