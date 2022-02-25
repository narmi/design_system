import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import TabsContext from "./context";

const noop = () => {};

const TabsList = ({ children }) => {
  const { tabIds, setTabIds, changeTabs, currentIndex, hasPanels } =
    useContext(TabsContext);
  const childArray = React.Children.toArray(children);

  // populate tabIds state variable in root component
  // with tabId props from `Tabs.Tab` children passed into `Tabs.List`
  useEffect(() => {
    if (tabIds.length !== childArray.length) {
      setTabIds(childArray.map((t) => t.props.tabId));
    }
  }, [tabIds, setTabIds, childArray]);

  const handleKeyDown = ({ key }) => {
    let newIndex;
    switch (key) {
      case "ArrowLeft":
        newIndex = currentIndex - 1;
        if (newIndex >= 0) {
          changeTabs(tabIds[newIndex]);
        }
        break;
      case "ArrowRight":
        newIndex = currentIndex + 1;
        if (newIndex <= tabIds.length - 1) {
          changeTabs(tabIds[newIndex]);
        }
        break;
    }
  };

  return (
    <ul
      role={hasPanels ? "tablist" : undefined}
      className="list--reset nds-tabs-tabsList"
      onKeyDown={hasPanels ? handleKeyDown : noop}
      tabIndex={hasPanels ? "0" : undefined}
      data-testid="nds-tablist"
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
