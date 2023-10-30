import React, { useContext } from "react";
import { Source, DocsContext } from "@storybook/addon-docs";
import { name as packageName } from "../../package.json";

// TODO: remove or replace
const ImportCopy = () => {
  const { kind } = useContext(DocsContext);
  const componentName = kind.split("/")[1];
  const path = `import { ${componentName} } from "${packageName}";`;

  return <Source language="js" code={path} />;
};

export default ImportCopy;
