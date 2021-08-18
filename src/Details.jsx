import React from "react";
import PropTypes from "prop-types";
import { ChevronUp, ChevronDown } from "react-feather";
import { deviceBreakpoints } from "global";
import Modal, { modalZIndex } from "Modal";

const PADDING_X = "40px";

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
    <Modal type="details" open={open} setOpen={setOpen}>
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

Details.styles = `
  .nds-details {
    position: relative;
  }
  .nds-details-container {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .nds-details .nds-details-container .nds-button.menu {
    font-weight: normal;
    font-size: 16px;
  }

  @media ${`(min-width: ${deviceBreakpoints.desktop})`} {
    .nds-details > .nds-modal.open > .nds-modal-overlay {
      display: block;
      opacity: 0;
    }
    .nds-details > .nds-modal > .nds-modal-container {
      position: absolute;
      transform: translate(-${PADDING_X}, 5px);
    }
    .nds-details-container {
      margin: 0;
      padding: 20px ${PADDING_X};
      box-shadow: 0px 2px 12px rgba(80, 80, 80, 0.05);
      border-radius: 0px 0px 4px 4px;
    }
  }
`;

export default Details;
