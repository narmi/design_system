import React from "react";
import PropTypes from "prop-types";

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

const TokenTable = ({ rows, headers = ["CSS Var", "Value"] }) => (
  <table className="docs-tokenTable">
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th key={i} scope="coloumn">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map(({ name, value }, i) => (
        <tr key={i}>
          <td style={{ width: "60%" }}>
            <code className="color--azul500">{name}</code>
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
  headers: PropTypes.array,
};

export default TokenTable;
