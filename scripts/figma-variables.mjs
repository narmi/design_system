/**
 * Reads published variables from Figma using the Variables REST API.
 *
 * Usage:
 *   node ./scripts/figma-variables.mjs <FIGMA_TOKEN> [FILE_KEY]
 *
 * @see https://developers.figma.com/docs/rest-api/variables-endpoints/
 */

const [token, fileKey] = process.argv.slice(2);

const fallbackFileKey = "nCjdO761StnkwNZHFmcrUu";

if (!token) {
  console.error("Usage: node figma-variables.mjs <FIGMA_TOKEN> [FILE_KEY]");
  process.exit(1);
}

const response = await fetch(
  `https://api.figma.com/v1/files/${fileKey || fallbackFileKey}/variables/published`,
  {
    headers: { "X-Figma-Token": token },
  },
);

if (!response.ok) {
  console.error(`Error: ${response.status} ${response.statusText}`);
  process.exit(1);
}

const data = await response.json();

console.log(`\nFetched published variables from Figma file: ${fileKey}\n`);
console.log("=== Published Variables ===");
console.log(JSON.stringify(data, null, 2));
