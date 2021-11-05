import React from "react";
import PropTypes from "prop-types";

/**
 * rendereers responsible for showing token previews
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
 * @returns {Array} rows to pass into tokens table
 */
export const toTokenRows = (category, typeKey) =>
  Object.values(category[typeKey]).map(({ name, value }) => ({
    name: `--${name}`,
    value,
  }));

/**
 * Displays token doucumentation table
 */
const TokenTable = ({ rows, previewType }) => (
  <table className="docs-tokenTable">
    <thead>
      <tr>
        {Boolean(previewType) && <th>Preview</th>}
        <th scope="coloumn">CSS</th>
        <th scope="coloumn">Value</th>
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
          <td>
            <code className="color--azul500">var({name})</code>
          </td>
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
    })
  ).isRequired,
  previewType: PropTypes.oneOf(Object.keys(previewRenderers)),
};

export default TokenTable;
