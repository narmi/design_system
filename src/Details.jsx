import React from "react";
import PropTypes from "prop-types";
import { ChevronUp, ChevronDown } from "react-feather";
import { deviceBreakpoints } from "global";

const Details = ({ summary, children }) => {
  const [open, setOpen] = React.useState(false);

  return <div className="nds-details">
    <div
      className="nds-details-summary"
      onClick={() => {setOpen(!open)}}
    >
      {summary}
    </div>
    <div className="nds-details-container">
      {children}
    </div>
  </div>;
};

Details.propTypes = {
  summary: PropTypes.node,
  children: PropTypes.node,
};

Details.styles = `
`;

export default Details;
