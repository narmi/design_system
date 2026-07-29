import cc from "classcat";
import React from "react";
import Row from "../Row";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

export type SidebarItemElement = React.ReactElement<SidebarItemProps>;

export interface SidebarProps {
  /**
   * Kind of Sidebar to render
   *
   * `nav`: navigation sidebar
   *
   */
  kind?: "nav";
  /** Children must be an array of `Sidebar.Item` components */
  children: SidebarItemElement[];
}

/**
 * Narmi Sidebar component
 */
const Sidebar = ({ kind = "nav", children }: SidebarProps) => {
  const sidebarItems = React.Children.toArray(
    children,
  ) as SidebarItemElement[];
  const mappedSidebarItems = sidebarItems.map((item) => (
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
                className={`narmi-icon-${item.props.endIcon} sidebar-icon`}
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

Sidebar.Item = SidebarItem;
export default Sidebar;
