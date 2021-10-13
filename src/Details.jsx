import React from "react";
import PropTypes from "prop-types";
import { ChevronUp, ChevronDown } from "react-feather";
import Modal, { modalZIndex } from "Modal";

const Chevron = ({ open, setOpen }) => {
  const style = { position: "absolute", top: "6px", right: "13px" };
  if (!open) {
    return <ChevronDown onClick={setOpen.bind(null, true)} style={style} />;
  }
  return (
    <ChevronUp
      onClick={setOpen.bind(null, false)}
      style={{ ...style, zIndex: modalZIndex + 1 }}
    />
  );
};
Chevron.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

const Details = ({ summary, children, React }) => {
  const [open, setOpen] = React.useState(false);

  return <div className="nds-details">
    <div
      className="nds-details-summary"
      onClick={() => {setOpen(!open)}}
    >
      {summary}
    </div>
    <Modal classes="details" open={open} setOpen={setOpen}>
      <div className="nds-details-container">
        {children}
      </div>
    </Modal>
    <Chevron open={open} setOpen={setOpen} />
  </div>;
};

Details.propTypes = {
  summary: PropTypes.node,
  children: PropTypes.node,
};

Details.defaultProps = {
  summary: null,
  React,
};

export default Details;
