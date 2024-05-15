import React from "react";
import cc from "classcat";
import PropTypes from "prop-types";

const DescriptionListRow = ({ label, value, allowWrap }) => (
  <>
    <dt>{label}</dt>
    <dd className={cc([{ allowWrap }])}>
      <span>{value}</span>
    </dd>
  </>
);

DescriptionListRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  allowWrap: PropTypes.bool,
};

DescriptionListRow.displayName = "DescriptionList.Row";

export default DescriptionListRow;
