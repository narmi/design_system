import React, { useContext } from "react";
import PropTypes from "prop-types";
import TabsContext from "./context";

const noop = () => {};

const TabsList = ({ children }) => {
  const { tabIds, setTabIds, handleKeyDown, hasPanels } =
    useContext(TabsContext);
  const childArray = React.Children.toArray(children);

  // populate tabIds state variable in root component
  // with tabId props from `Tabs.Tab` children passed into `Tabs.List`
  if (tabIds.length !== childArray.length) {
    setTabIds(childArray.map((t) => t.props.tabId));
  }

  return (
    <ul
      role={hasPanels ? "tablist" : undefined}
      className="list--reset nds-tabs-tabsList"
      onKeyDown={hasPanels ? handleKeyDown : noop}
    >
      {children}
    </ul>
  );
};

TabsList.propTypes = {
  /** Children must be of type `Tabs.Tab` */
  children: PropTypes.node.isRequired,
};

TabsList.displayName = "Tabs.List";

export default TabsList;
