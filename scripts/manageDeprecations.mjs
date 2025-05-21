/**
 * This files stores and manages deprecated version ranges.
 * Whenever critical regressions are found, the `DEPRECATIONS`
 * list below may be updated with the range of affected versions.
 *
 * The release workflow will update the NPM registry with any new
 * deprecations via `semantic-release`.
 */
import { readFileSync } from "fs";
import { resolve } from "path";
import { exec } from "child_process";
import semver from "semver";
import checkVersion from "./util/checkVersion.mjs";

const { name: packageName } = JSON.parse(
  readFileSync(resolve(process.cwd(), "./package.json")),
);

const CLI_ARG = process?.argv[2];
let CONFIG = { versions: [] };
if (CLI_ARG) {
  CONFIG = JSON.parse(readFileSync(CLI_ARG));
}

const main = async () => {};

main();
