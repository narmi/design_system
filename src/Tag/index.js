import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLayer } from "react-laag";
import cc from "classcat";
import AsElement from "../util/AsElement";

/**
 * Generic Popover component. Renders a floating element that can contain any content,
 * positioned relatively to its triggering element.
 *
 * This Popover only appears on "click" (focus + activate or mouse click) interactions.
 * The Escape key and clicking outside of the Popover will dismiss it.
 * For a hover-based informative popover, use `Tooltip`.
 *
 * The popover will position itself based on the `side` prop, but will
 * automatically reposition to avoid collisions with viewport edges.
 */

 const noop = () => {};

const Tag = ({
  kind = "subdued", // outline, subdued, x-tag (cactus400) #7fbc5b; #7FBC5B oneof
  onDismiss = noop,
  label = "my cool tag",
}) => {
  return (
    // <AsElement
    //   role={"div"}
    //   elementType={"div"}
    //   className={cc(["nds-typography", "nds-tag", `nds-tag--${kind}`])}
    //   data-testid="nds-tag"
    // >
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
