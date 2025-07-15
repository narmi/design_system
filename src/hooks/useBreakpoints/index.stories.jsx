import React from "react";
import useBreakpoints from ".";

export const Overview = () => {
  const { s, m, l, xl, largestSatisfiedBreakpoint } = useBreakpoints();

  return (
    <>
      <h1 className="fontColor--heading fontFamily--heading margin--bottom--l">
        Resize your browser
      </h1>
      <ul className="list--reset padding--all rounded--all bgColor--blueGrey fontColor--azul fontSize--l">
        <li>
          <code>s or larger:&nbsp;</code>
          <code className={`fontColor--${s ? "success" : "error"}`}>
            {s.toString()}
          </code>
        </li>
        <li>
          <code>m or larger:&nbsp;</code>
          <code className={`fontColor--${m ? "success" : "error"}`}>
            {m.toString()}
          </code>
        </li>
        <li>
          <code>l or larger:&nbsp;</code>
          <code className={`fontColor--${l ? "success" : "error"}`}>
            {l.toString()}
          </code>
        </li>
        <li>
          <code>xl or larger:&nbsp;</code>
          <code className={`fontColor--${xl ? "success" : "error"}`}>
            {xl.toString()}
          </code>
        </li>
        <li>
          <code>largest satisfied bp:&nbsp;</code>
          <code className="fontColor--primary">
            {largestSatisfiedBreakpoint.toString()}
          </code>
        </li>
      </ul>
    </>
  );
};

export default {
  title: "Hooks/useBreakpoints", // Show doc page not individual stories
  tags: ["autodocs", "!dev"],
};
