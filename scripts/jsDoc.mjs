/**
 * Build script to generate markdown files from JSDoc comments in source
 */
import { resolve } from "path";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import j2m from "jsdoc-to-markdown";

// assumes this is run from project root
const DIST_DIR = resolve(process.cwd(), "dist");
const TARGET_DIR = resolve(DIST_DIR, "docs");

// ensure `dist/docs` is created
if (!existsSync(TARGET_DIR)) {
  mkdirSync(TARGET_DIR);
}

// Formatters
const formatterDocs = j2m.renderSync({ files: "src/formatters/*.js" });
writeFileSync(`${TARGET_DIR}/Formatters.md`, formatterDocs);
