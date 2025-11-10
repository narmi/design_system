/**
 * Sync Figma variables to design tokens
 * Based on: https://github.com/figma/variables-github-action-example
 *
 * Usage:
 *   FIGMA_TOKEN=<token> node ./scripts/figma-variables.mjs [FILE_KEY]
 *
 * If FILE_KEY is not provided, defaults to: vQRSHiaJMtSapS8O2hZSso
 *
 * @see https://developers.figma.com/docs/rest-api/variables-endpoints/
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import FigmaApi from "./figma/FigmaApi.mjs";
import { tokenFilesFromLocalVariables } from "./figma/tokenExport.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const token = process.env.FIGMA_TOKEN;
const [fileKey, outputDir = "tokens_figma"] = process.argv.slice(2);

const fallbackFileKey = "vQRSHiaJMtSapS8O2hZSso";

if (!token) {
  console.error("Error: FIGMA_TOKEN environment variable is required");
  console.error(
    "Usage: FIGMA_TOKEN=<token> node figma-variables.mjs [FILE_KEY] [OUTPUT_DIR]",
  );
  console.error(`FILE_KEY defaults to: ${fallbackFileKey}`);
  console.error(`OUTPUT_DIR defaults to: tokens_figma`);
  process.exit(1);
}

const actualFileKey = fileKey && fileKey.trim() ? fileKey : fallbackFileKey;

async function main() {
  try {
    console.log(`\nFetching variables from Figma file: ${actualFileKey}...\n`);

    const api = new FigmaApi(token);
    const localVariables = await api.getLocalVariables(actualFileKey);

    console.log("✓ Successfully fetched variables from Figma");

    const tokenFiles = tokenFilesFromLocalVariables(localVariables);

    // Create output directory if it doesn't exist
    const outputPath = path.resolve(__dirname, "..", outputDir);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    // Write each token file
    Object.entries(tokenFiles).forEach(([fileName, fileContent]) => {
      const filePath = path.join(outputPath, fileName);
      fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
      console.log(`✓ Wrote ${fileName}`);
    });

    console.log(
      `\n✅ Token files have been written to the ${outputDir} directory\n`,
    );
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    if (error.status === 403) {
      console.error(
        "\nMake sure your FIGMA_TOKEN has the 'File content' read scope",
      );
    }
    process.exit(1);
  }
}

main();
