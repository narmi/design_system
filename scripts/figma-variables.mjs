/**
 * Reads local variables from Figma using the Variables REST API.
 *
 * Usage:
 *   FIGMA_TOKEN=<token> node ./scripts/figma-variables.mjs [FILE_KEY]
 *
 * If FILE_KEY is not provided, defaults to: vQRSHiaJMtSapS8O2hZSso
 *
 * @see https://developers.figma.com/docs/rest-api/variables-endpoints/
 */

const token = process.env.FIGMA_TOKEN;
const [fileKey] = process.argv.slice(2);

const fallbackFileKey = "nCjdO761StnkwNZHFmcrUu";

if (!token) {
  console.error("Error: FIGMA_TOKEN environment variable is required");
  console.error(
    "Usage: FIGMA_TOKEN=<token> node figma-variables.mjs [FILE_KEY]",
  );
  console.error(`FILE_KEY defaults to: ${fallbackFileKey}`);
  process.exit(1);
}

// Use fallback if fileKey is empty or not provided
const actualFileKey = fileKey && fileKey.trim() ? fileKey : fallbackFileKey;

const response = await fetch(
  `https://api.figma.com/v1/files/${actualFileKey}/variables/local`,
  {
    headers: { "X-Figma-Token": token },
  },
);

if (!response.ok) {
  console.error(`Error: ${response.status} ${response.statusText}`);
  console.error(`File key used: ${actualFileKey}`);
  if (response.status === 403) {
    console.error(
      "Check that the FIGMA_TOKEN has access to this file and has the required scopes",
    );
  }
  process.exit(1);
}

const data = await response.json();

console.log(`\nFetched local variables from Figma file: ${actualFileKey}\n`);
console.log("=== Local Variables ===");
console.log(JSON.stringify(data, null, 2));
