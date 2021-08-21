import React from "react";
import PropTypes from "prop-types";

const Popover = ({
                   label,
                   hoverable,
                   shiftX,
                   shiftY,
                   alignRight,
                   highlightOnOpen,
                   children,
                   ...rest
                 }) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    if (hoverable) return;
    setOpen(!open);
  };

  const chevron = () => {
    if (open) {
      return <span className={"nds-close-icon narmi-icons-chevron-up"} highlightonopen={highlightOnOpen}> </span>;
    }

    return <span className={"nds-open-icon narmi-icons-chevron-down"}> </span>;
  };

  return (
    <span className={"nds-popover"} hoverable={hoverable} highlightOnOpen={highlightOnOpen}>
      <div className={"nds-popover-trigger"} onClick={toggleOpen}>
        <a
          className={"nds-popover-label"}
          data-text={label}
          open={open}
        >
          {label}
        </a>
        {chevron()}
      </div>
      {open || hoverable ? (
        <div className={"nds-overlay"}
             style={{transform: `${shiftX ? `translateX(${shiftX})` : ""} ${shiftY ? `translateY(${shiftY})` : ""} `}}
             alignRight={alignRight}
             {...rest}
        >
          {children}
        </div>
      ) : null}
    </span>
  );
};

// TODO:
// - open/close transition/animation
// - custom Triggers (needs both triggerOpen and triggerClosed)

Popover.propTypes = {
  hoverable: PropTypes.bool,
  label: PropTypes.node,
// popover position; eg "50%" or "-10px"
  shiftX: PropTypes.string,
  shiftY: PropTypes.string,
// accept either a list of nodes or object categories:[nodes]
// or accept children directly
  highlightOnOpen: PropTypes.bool,
  alignRight: PropTypes.bool,
  children: PropTypes.node,
};

Popover.defaultProps = {
  hoverable: false,
  highlightOnOpen: false,
  label: null,
  alignRight: false,
  shiftX: "0%",
  shiftY: "0%",
};

export default Popover;
