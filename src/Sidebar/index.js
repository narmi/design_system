import cc from "classcat";
import PropTypes from "prop-types";
import React from "react";
import Row from "../Row";

/**
 * Narmi Sidebar component
 */
const Sidebar = ({
  kind = "nav",
  children,
}) => {
  const sidebarItems = React.Children.toArray(children)
  const mappedSidebarItems = sidebarItems.map((item) => (
    <li
      className={cc([
        "margin--bottom--s",
        "sidebar-item",
        {
          "sidebar-item--active": item.props.isActive,
        },

      ])}
      onClick={item.props.onClick}
    >
      <Row gapSize="xs">
        {item.props.startIcon &&
          <Row.Item shrink>
            <span className={`narmi-icon-${item.props.startIcon} sidebar-icon`} />
          </Row.Item>
        }
        <Row.Item shrink>{item.props.label}</Row.Item>
        {item.props.endIcon &&
          <Row.Item shrink>
            <span className={`narmi-icon-${item.props.endIcon} .sidebar-icon`} />
          </Row.Item>
        }
      </Row>
    </li>
  ))

  return (
    <nav>
      <ul className="list--reset">
        {mappedSidebarItems}
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  /** Accepts any content as children */
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