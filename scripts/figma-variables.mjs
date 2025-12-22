/**
 * Reads published variables from Figma using the Variables REST API.
 *
 * Usage:
 *   FIGMA_TOKEN=<token> node ./scripts/figma-variables.mjs [FILE_KEY]
 *
 * If FILE_KEY is not provided, defaults to: nCjdO761StnkwNZHFmcrUu
 *
 * @see https://developers.figma.com/docs/rest-api/variables-endpoints/
 */

const token = process.env.FIGMA_TOKEN;
const [fileKey] = process.argv.slice(2);

// This is NOT a secret. This is a url segment that represents a file id.
// Without the rest of the url, it's useless, and even with the whole url,
// you still need a token or manual auth to see the figma file.
const fallbackFileKey = "nCjdO761StnkwNZHFmcrUu";

if (!token) {
  console.error("Error: FIGMA_TOKEN environment variable is required");
  console.error(
    "Usage: FIGMA_TOKEN=<token> node figma-variables.mjs [FILE_KEY]",
  );
  console.error(`FILE_KEY defaults to: ${fallbackFileKey}`);
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
