import React from "react";

export default {
  title: "Style/Typography",
};

export const SettingContext = () => (
  <>
    <div className="nds-typography">
      <h2>Heading inside typography context</h2>
      <p>Paragraph inside of typography context</p>
    </div>

    <h2>Heading outside of typography context</h2>
    <p>Paragraph outside of typography context</p>
  </>
);

export const StyleElements = () => (
  <div className="nds-typography">
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    <h5>Heading level 5</h5>
    <h6>Heading level 6</h6>
    <p>Paragraph</p>
  </div>
);

export const HelperClassesList = () => (
  <>
    <div className="nds-typography">
      <h3 className="fontColor--azul">
        Heading level 3 inside context with "azul" color override
      </h3>

      <p className="fontSize--xs fontWeight--semibold">
        Paragraph with "xs" size override and "semibold" weight override
      </p>
    </div>

    <h1 className="fontFamily--heading fontSize--xl fontWeight--bold fontColor--heading">
      Heading outside of typography context; styled with helpers only
    </h1>
  </>
);
