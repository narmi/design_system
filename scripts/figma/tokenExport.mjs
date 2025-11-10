/**
 * Convert Figma variables to design tokens format
 * Based on: https://github.com/figma/variables-github-action-example
 */

function rgbToHex({ r, g, b }) {
  const toHex = (value) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function tokenTypeFromVariable(variable) {
  switch (variable.resolvedType) {
    case "COLOR":
      return "color";
    case "FLOAT":
      return "number";
    case "STRING":
      return "string";
    case "BOOLEAN":
      return "boolean";
    default:
      throw new Error(`Unknown variable type: ${variable.resolvedType}`);
  }
}

function tokenValueFromVariable(variable, modeId, localVariables) {
  const value = variable.valuesByMode[modeId];

  // Handle variable aliases
  if (typeof value === "object" && value.type === "VARIABLE_ALIAS") {
    const aliasedVariable = localVariables[value.id];
    if (aliasedVariable) {
      // Convert variable name to alias format: spacing/sm -> {spacing.sm}
      return `{${aliasedVariable.name.replace(/\//g, ".")}}`;
    }
  }

  // Handle color values
  if (typeof value === "object" && "r" in value) {
    return rgbToHex(value);
  }

  return value;
}

/**
 * Convert Figma local variables to design tokens files
 * Returns an object where keys are filenames and values are token objects
 */
export function tokenFilesFromLocalVariables(localVariablesResponse) {
  const tokenFiles = {};
  const localVariableCollections =
    localVariablesResponse.meta.variableCollections;
  const localVariables = localVariablesResponse.meta.variables;

  Object.values(localVariables).forEach((variable) => {
    // Skip remote variables - only export local ones
    if (variable.remote) {
      return;
    }

    const collection = localVariableCollections[variable.variableCollectionId];

    collection.modes.forEach((mode) => {
      const fileName = `${collection.name}.${mode.name}.json`;

      if (!tokenFiles[fileName]) {
        tokenFiles[fileName] = {};
      }

      // Build nested object structure from variable name
      // e.g., "spacing/sm" becomes { spacing: { sm: {...} } }
      let obj = tokenFiles[fileName];
      const nameParts = variable.name.split("/");

      nameParts.forEach((part, index) => {
        if (index === nameParts.length - 1) {
          // Last part - set the token value
          obj[part] = {
            $type: tokenTypeFromVariable(variable),
            $value: tokenValueFromVariable(
              variable,
              mode.modeId,
              localVariables,
            ),
            $description: variable.description,
            $extensions: {
              "com.figma": {
                hiddenFromPublishing: variable.hiddenFromPublishing,
                scopes: variable.scopes,
                codeSyntax: variable.codeSyntax,
              },
            },
          };
        } else {
          // Intermediate part - create nested object
          obj[part] = obj[part] || {};
          obj = obj[part];
        }
      });
    });
  });

  return tokenFiles;
}
