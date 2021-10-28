import React from "react";
import PropTypes from "prop-types";
import { ChevronUp, ChevronDown } from "react-feather";
import Modal from "Modal";

const Chevron = ({ open, setOpen }) => {
  const style = { position: "absolute", top: "6px", right: "13px" };
  if (!open) {
    return <ChevronDown onClick={setOpen.bind(null, true)} style={style} />;
  }
  return <ChevronUp onClick={setOpen.bind(null, false)} style={{ ...style }} />;
};
Chevron.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

const Details = ({ summary, children, React, type }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="nds-details">
      <div
        className="nds-details-summary"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {summary}
      </div>
      <Modal classes={type} open={open} setOpen={setOpen} React={React}>
        <div className="nds-details-container">{children}</div>
      </Modal>
      <Chevron open={open} setOpen={setOpen} />
    </div>
  );
};

Details.propTypes = {
  summary: PropTypes.node,
  children: PropTypes.node,
  type: PropTypes.oneOf(["details", "wide details"]),
};

Details.defaultProps = {
  summary: null,
  type: "details",
  React,
};

export default Details;
