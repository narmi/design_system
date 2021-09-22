import React from "react";
import PropTypes from "prop-types";

const Toast = (props) => {
  const [open, setOpen] = React.useState(props.open);
  const toastIcons = {"success": "check", "error": "error", "info": "info"}
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    if (props.open) {
      setOpen(props.open);
      setSeconds(props.seconds);
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

  return (
    <div
      style={props.style}
      className={`nds-toast-${props.type || ""} nds-toast-${
        open ? "" : "hidden"
      }`}
    >
      <span className={`narmi-icon-${toastIcons[props.type] || ""}`} />
      <span> {props.message} </span>
    </div>
  );
};

Toast.defaultProps = {
  type: false,
  seconds: 4,
};
Toast.propTypes = {
  type: PropTypes.string.isRequired,
  seconds: PropTypes.int,
  message: PropTypes.string.isRequired,
};

export default Toast;
