import cc from "classcat";
import PropTypes from "prop-types";
import React from "react";
import Row from "../Row";

interface SidebarProps {
  /** Accepts any content as children */
  children: React.ReactNode;
  /**
   * Kind of Sidebar to render
   *
   * `nav`: navigation sidebar
   *
   */
  kind?: string;
}

/**
 * Narmi Sidebar component
 */
const Sidebar: React.FC<SidebarProps> = ({ kind = "nav", children }) => {
  const sidebarItems = React.Children.toArray(children);
  const mappedSidebarItems = sidebarItems.map((item: React.ReactElement) => (
    <li className="margin--bottom--s" key={item.props.label}>
      <button
        onClick={item.props.onClick}
        className={cc([
          "button--reset",
          "sidebar-item",
          {
            "sidebar-item--active": item.props.isActive,
          },
        ])}
      >
        <Row gapSize="xs">
          {item.props.startIcon && (
            <Row.Item shrink>
              <span
                className={`narmi-icon-${item.props.startIcon} sidebar-icon`}
              />
            </Row.Item>
          )}
          <Row.Item shrink>{item.props.label}</Row.Item>
          {item.props.endIcon && (
            <Row.Item shrink>
              <span
                className={`narmi-icon-${item.props.endIcon} .sidebar-icon`}
              />
            </Row.Item>
          )}
        </Row>
      </button>
    </li>
  ));

  return (
    <nav className={`sidebar--${kind}`}>
      <ul className="list--reset">{mappedSidebarItems}</ul>
    </nav>
  );
};

Sidebar.propTypes = {
  /** Accepts any content as children */
  // @ts-expect-error ts v5 doesn't recognize this as ReactNodeLike
  children: PropTypes.arrayOf(PropTypes.node),
  /**
   * Kind of Sidebar to render
   *
   * `nav`: navigation sidebar
   *
   */
  kind: PropTypes.oneOf(["nav"]),
};

export default Sidebar;
