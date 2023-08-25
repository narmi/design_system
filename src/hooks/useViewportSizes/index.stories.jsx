import React from "react";
import useViewportSizes from ".";

export const Overview = () => {
  const { s, m, l, xl } = useViewportSizes();

  return (
    <>
      <h1 className="fontColor--heading fontFamily--heading margin--bottom--l">
        Resize your browser
      </h1>
      <ul className="list--reset padding--all rounded--all bgColor--blueGrey fontColor--azul fontSize--l">
        <li>
          <code>"s" or larger:&nbsp;</code>
          <code className={`fontColor--${s ? "success" : "error"}`}>
            {s.toString()}
          </code>
        </li>
        <li>
          <code>"m" or larger:&nbsp;</code>
          <code className={`fontColor--${m ? "success" : "error"}`}>
            {m.toString()}
          </code>
        </li>
        <li>
          <code>"l" or larger:&nbsp;</code>
          <code className={`fontColor--${l ? "success" : "error"}`}>
            {l.toString()}
          </code>
        </li>
        <li>
          <code>"xl" or larger:&nbsp;</code>
          <code className={`fontColor--${xl ? "success" : "error"}`}>
            {xl.toString()}
          </code>
        </li>
      </ul>
    </>
  );
};

export default { title: "Hooks/useViewportSizes" };
