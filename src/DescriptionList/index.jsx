import React from "react";
import PropTypes from "prop-types";
import DescriptionListRow from "./DescriptionListRow";

/**
 * Displays an HTML description list as a responsive table to display labels and
 * values of details about a user, product, account, application, etc.
 *
 * Uses media queries and container queries to stack the table when there's not
 * enough room to read values in row layout.
 */
const DescriptionList = ({ children, kind = "plain" }) => {
  return (
    <div className="nds-descriptionList">
      <dl className={`nds-descriptionList-list--${kind}`}>{children}</dl>
    </div>
  );
};

DescriptionList.propTypes = {
  /** DescriptionList.Row items to render */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /** Visual variant of DetailsTable */
  kind: PropTypes.oneOf(["plain", "bordered"]),
};

DescriptionList.Row = DescriptionListRow;

export default DescriptionList;
