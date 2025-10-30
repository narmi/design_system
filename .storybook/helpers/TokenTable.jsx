import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import { useClipboard } from "use-clipboard-copy";

/**
 * renderers responsible for showing token previews
 */
const previewRenderers = {
  color: (value) => (
    <div
      style={{
        width: "100%",
        height: "28px",
        backgroundColor: value,
      }}
    >
      &nbsp;
    </div>
  ),
  spacing: (value) => (
    <div style={{ backgroundColor: "hotpink", width: value }}>&nbsp;</div>
  ),
  fontWeight: (value) => <div style={{ fontWeight: value }}>Aa</div>,
  fontSize: (value) => <div style={{ fontSize: value }}>Aa</div>,
  fontFamily: (value) => (
    <div style={{ fontFamily: value }}>{value.split(",")[0]}</div>
  ),
  shadow: (value) => (
    <div
      style={{
        margin: "4px 8px",
        width: "60px",
        height: "24px",
        boxShadow: value,
      }}
    >
      &nbsp;
    </div>
  ),
};

/**
 *  Helper to transform a category object and type
 * into an array for the`TokenTable` rows prop
 *
 * @param {Object} category - category object from full tokens manifest
 * @param {String} typeKey - type key under the given category
 * @param {String} categoryName - category name to determine CSS variable naming
 * @returns {Array} rows to pass into tokens table
 */
export const toTokenRows = (category, typeKey, prefix) => {
  return Object.entries(category[typeKey]).map(([name, value]) => ({
    name: `--${prefix}-${name}`,
    value,
  }));
}; /**
 * component with clipboard functionality to render copyable cells
 */
const CopyableCell = ({ text }) => {
  const clipboard = useClipboard({
    copiedTimeout: 500,
  });
  return (
    <td className="color--azul500">
      <code
        className={cc([
          "docs-copyable",
          {
            "color--successDark": clipboard.copied,
            "color--azul500": !clipboard.copied,
          },
        ])}
        ref={clipboard.target}
        onClick={() => clipboard.copy(text)}
      >
        {clipboard.copied ? "Copied" : text}
      </code>
    </td>
  );
};

/**
 * Displays token documentation table
 */
const TokenTable = ({ rows, previewType }) => (
  <table className="docs-tokenTable">
    <thead>
      <tr>
        {Boolean(previewType) && <th>Preview</th>}
        <th scope="column">CSS</th>
        <th scope="column">Value</th>
      </tr>
    </thead>
    <tbody>
      {rows.map(({ name, value }, i) => (
        <tr key={i}>
          {Boolean(previewType) && (
            <td className="docs-tokenTable-preview">
              {previewRenderers[previewType](value)}
            </td>
          )}
          <CopyableCell text={`var(${name})`} />
          <td>
            <code>{value}</code>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

TokenTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  previewType: PropTypes.oneOf(Object.keys(previewRenderers)),
};

export { TokenTable, CopyableCell };

export default TokenTable;
