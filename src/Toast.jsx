import React from "react";
import PropTypes from "prop-types";

const Toast = (props) => {
  const [open, setOpen] = React.useState(props.open);

  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    if (props.open) {
      setOpen(props.open);
      setSeconds(4);
    }
  }, [props.open]);

  React.useEffect(() => {
    if (open && seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
      setOpen(false);
    }
  }, [seconds]);

  const iconType =
    props.type === "success"
      ? "check"
      : props.type === "error"
      ? error
      : props.type === "info"
      ? "info"
      : "";

  return (
    <div
      style={props.style}
      className={`nds-toast-${props.type} nds-toast-${
        open ? "active" : "hidden"
      }`}
    >
      <span className={`narmi-icon-${iconType}`} />
      <span> {props.message} </span>
    </div>
  );
};

Toast.defaultProps = {
  type: false,
};
Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Toast;
