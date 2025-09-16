import React from "react";
import useSupportsAnchorPositioning from ".";

export const Overview = () => {
  const isSupported = useSupportsAnchorPositioning();

  return (
    <>
      <h1 className="fontColor--heading fontFamily--heading margin--bottom--l">
        CSS Anchor Positioning Support
      </h1>
      <div className="padding--all rounded--all bgColor--blueGrey fontColor--azul fontSize--l">
        <p>
          <code>Browser supports anchor positioning:&nbsp;</code>
          <code className={`fontColor--${isSupported ? "success" : "error"}`}>
            {isSupported.toString()}
          </code>
        </p>
        <p className="margin--top--s fontSize--s fontColor--body">
          This hook checks for comprehensive CSS anchor positioning support
          including:
        </p>
        <ul className="margin--top--xs fontSize--s fontColor--body">
          <li>
            <code>anchor-name</code> property
          </li>
          <li>
            <code>position-anchor</code> property
          </li>
          <li>
            <code>anchor()</code> function in positioning
          </li>
          <li>
            <code>position-area</code> property
          </li>
        </ul>
      </div>
    </>
  );
};

export default {
  title: "Hooks/useSupportsAnchorPositioning",
  tags: ["autodocs", "!dev"],
};
