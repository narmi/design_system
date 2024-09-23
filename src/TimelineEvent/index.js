import React from "react";
import PropTypes from "prop-types";
import iconSelection from "src/icons/selection.json";
import cc from "classcat";
import ToolTip from "../Tooltip"

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
);

const TimelineEvent = ({ kind = "node", icon, imgUrl, initial, tooltip, children }) => {
  const useInitial = !icon && !imgUrl && initial;
  return (
    <div
      className={cc([
        "nds-timeline-event",
        {
          "nds-timeline-event--pending": kind === "pending",
        },
      ])}
    >
      <div className="nds-timeline-track">
        <div
          className={cc([
            "nds-timeline-node",
            {
              "nds-timeline-node--hasAvatar": Boolean(imgUrl),
            },
          ])}
          style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : "none" }}
        >
          {useInitial && (tooltip ? <ToolTip text={tooltip}><span>{initial}</span></ToolTip> : <span>{initial}</span>)}
          {icon && (tooltip ? <ToolTip text={tooltip}><span className={`narmi-icon-${icon}`} /></ToolTip> : <span className={`narmi-icon-${icon}`} />)}
        </div>
        {kind !== "start" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="nds-timeline-line"
          >
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              stroke="var(--theme-primary)"
              strokeWidth="1"
              strokeDashoffset={3}
            />
          </svg>
        )}
      </div>
      <div className="nds-timeline-content">{children}</div>
    </div>
  );
};

TimelineEvent.propTypes = {
  /**
   * Timeline node variant.
   */
  kind: PropTypes.oneOf(["node", "start", "pending"]),
  /**
   * Name of NDS icon to render inside the timeline node
   */
  icon: PropTypes.oneOf(VALID_ICON_NAMES),
  /**
   * Pass an image url to render the timeline node
   * as an avatar
   */
  imgUrl: PropTypes.string,
  /**
   * Initial to render in the timeline node
   * Overridden by:
   * - icon
   * - imgUrl
   */
  initial: PropTypes.string,
  /**
   * Timeline event content (any JSX)
   */
  tooltip: PropTypes.string,
  /**
   * Hover tooltip content for the icon
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default TimelineEvent;
