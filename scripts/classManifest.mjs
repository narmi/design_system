import { writeFileSync, existsSync } from "fs";
import { resolve } from "path";
import getHelperClassNames from "./util/getHelperClassNames.mjs";

// assumes this is run from project root
const DIST_DIR = resolve(process.cwd(), "dist");
const TARGET_DIR = resolve(DIST_DIR, "docs");

// ensure `dist/docs` is created
if (!existsSync(TARGET_DIR)) {
  mkdirSync(TARGET_DIR);
}

/**
 * takes a list of helper class names and creates a manifest for docs
 */
const result = getHelperClassNames()
  .map((className) => {
    // map each className to a class info object
    const [base, variant1, variant2] = className.split("--");
    const classInfo = {
      className,
      base,
    };
    if (variant1) {
      classInfo.variant1 = variant1;
    }
    if (variant2) {
      classInfo.variant2 = variant2;
    }
    return classInfo;
  })
  .reduce((categorizedClasses, classInfo) => {
    // categorize classes by "base" name
    // `{ bgColor: [...bgClasses], color: [...colorClasses], ...}`
    const { base } = classInfo;
    if (!categorizedClasses[base]) {
      categorizedClasses[base] = [];
    }
    categorizedClasses[base].push(classInfo);
    return categorizedClasses;
  }, {});

writeFileSync(
  `${TARGET_DIR}/classManifest.json`,
  JSON.stringify(result, null, 2)
);
