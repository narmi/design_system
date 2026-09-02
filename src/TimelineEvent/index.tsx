import React from "react";
import PropTypes from "prop-types";
import { VALID_ICON_NAMES } from "../icons/iconNames";
import cc from "classcat";
import ToolTip from "../Tooltip";
import { Callout } from "../Callout";
import type { Detail } from "../Callout";
import type { IconName } from "../types/Icon.types";

export { VALID_ICON_NAMES };

export type TimelineEventKind = "node" | "start" | "pending" | "divided";

export interface TimelineEventProps {
  /**
   * Timeline node variant.
   */
  kind?: TimelineEventKind;
  /**
   * Name of NDS icon to render inside the timeline node
   */
  icon?: IconName;
  /**
   * Pass an image url to render the timeline node
   * as an avatar
   */
  imgUrl?: string;
  /**
   * Initial to render in the timeline node
   * Overridden by:
   * - icon
   * - imgUrl
   */
  initial?: string;
  /**
   * Timeline event content (any JSX)
   */
  children?: React.ReactNode;
  /**
   * Detail list rendered in a composed `Callout`
   * below the event content
   */
  detailList?: Detail[];
  /**
   * Hover tooltip content for the icon
   */
  tooltip?: string;
  /** Render a custom circle node on the line */
  renderNode?: () => React.ReactNode;
}

const TimelineEvent = ({
  kind = "node",
  icon,
  imgUrl,
  initial,
  tooltip,
  children,
  detailList,
  renderNode,
}: TimelineEventProps) => {
  const useInitial = !icon && !imgUrl && initial;
  return (
    <div
      className={cc([
        "nds-timeline-event",
        {
          "nds-timeline-event--pending": kind === "pending",
          "nds-timeline-event--divided": kind === "divided",
        },
      ])}
    >
      <div className="nds-timeline-track">
        {typeof renderNode === "function" ? (
          <div className="nds-timeline-node--custom">{renderNode()}</div>
        ) : (
          <div
            className={cc([
              "nds-timeline-node",
              {
                "nds-timeline-node--hasAvatar": Boolean(imgUrl),
              },
            ])}
            style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : "none" }}
          >
            {useInitial &&
              (tooltip ? (
                <ToolTip text={tooltip}>
                  <span>{initial}</span>
                </ToolTip>
              ) : (
                <span>{initial}</span>
              ))}
            {icon &&
              (tooltip ? (
                <ToolTip text={tooltip}>
                  <span className={`narmi-icon-${icon}`} />
                </ToolTip>
              ) : (
                <span className={`narmi-icon-${icon}`} />
              ))}
          </div>
        )}
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
      <div className="nds-timeline-content">
        {children}
        {detailList?.length ? <Callout detailList={detailList} /> : null}
      </div>
    </div>
  );
};

TimelineEvent.propTypes = {
  /**
   * Timeline node variant.
   */
  kind: PropTypes.oneOf(["node", "start", "pending", "divided"]),
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Detail list rendered in a composed `Callout`
   * below the event content
   */
  detailList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ),
  /**
   * Hover tooltip content for the icon
   */
  tooltip: PropTypes.string,
  /** Render a custom circle node on the line */
  renderNode: PropTypes.func,
};

export default TimelineEvent;
