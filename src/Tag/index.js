import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

const noop = () => {};

/**
 * A rounded rectangle inline label.
 * The user has the option of firing a callback for 'dismissible' Tags.  
 */
const Tag = ({
  kind = "subdued", // outline, subdued, x-tag (cactus400) #7fbc5b; #7FBC5B oneof
  onDismiss = noop,
  label,
}) => {
  return (
      <div className={cc(["nds-typography", "nds-tag", `nds-tag--${kind}`])}>
        <span className="nds-tag-content">{label}</span>
        {kind === 'dismissible' ? <span className="narmi-icon-x" role="button" tabIndex={0} onClick={onDismiss}/>  : '' }
      </div>
  );
};

Tag.propTypes = {
  disableAutoPlacement: PropTypes.bool,
  kind: PropTypes.oneOf(["subdued", "dismissible", "outline"]),
  onDismiss: PropTypes.func,
  label: PropTypes.string,
};

export default Tag;
