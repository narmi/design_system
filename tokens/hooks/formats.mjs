/**
 * Custom formats for style-dictionary.
 * Keys are format names, values are format functions.
 */

function buildNestedObject(tokens) {
  return tokens.reduce((result, { attributes, value }) => {
    const { category, type, item } = attributes;
    if (!(category in result)) result[category] = {};
    if (!(type in result[category])) result[category][type] = {};
    result[category][type][item] = value;
    return result;
  }, {});
}

export const formats = {
  "custom/cjs-nested": ({ dictionary }) => {
    const nested = buildNestedObject(dictionary.allTokens);
    return [
      `const tokens = ${JSON.stringify(nested, null, 2)};`,
      "",
      "module.exports = tokens;",
      "",
    ].join("\n");
  },
  "custom/esm-nested": ({ dictionary }) => {
    const nested = buildNestedObject(dictionary.allTokens);
    return (
      Object.keys(nested)
        .map(
          (category) =>
            `export const ${category} = ${JSON.stringify(nested[category], null, 2)};`,
        )
        .join("\n\n") + "\n"
    );
  },
};
