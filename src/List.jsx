import React from "react";
import PropTypes from "prop-types";

function renderItem(props, item, idx) {
  return (
    <div className={"nds-list-item"}
      key={"ListItem" + idx}
      hoverable={props.hoverable}
      divided={props.divideItems}
    >
      {props.renderItem(item)}
    </div>
  );
}

function renderCategoryList(props, category, categoryIdx) {
  return (
    <div className={"nds-list"}
      divided={props.divideCategories}
      horizontal={props.categoriesHorizontal}
      key={"List" + category + categoryIdx}
    >
      {props.renderCategory(category)}
      {props.items[category].map((item, idx) => renderItem(props, item, idx))}
    </div>
  );
}

const List = ({
                hoverable,
                divided,
                horizontal,
                ...rest
              }) => {
  let els = Array.isArray(props.items) ? (
    <div className={"nds-list"}
      divided={props.divideCategories}
      horizontal={props.categoriesHorizontal}
    >
      {props.items.map((item, idx) => renderItem(props, item, idx))}
    </div>
  ) : (
    Object.keys(props.items).map((category, categoryIdx) =>
      renderCategoryList(props, category, categoryIdx)
    )
  );

  return <div className={"nds-list-container"} horizontal={horizontal}>{els}</div>;
};

const renderDefaultItem = (item) => {
  return <React.Fragment>{item}</React.Fragment>;
};

List.propTypes = {
  hoverable: PropTypes.bool,
  divided: PropTypes.bool,
  horizontal: PropTypes.bool,
  renderItem: PropTypes.func,
  renderCategory: PropTypes.func,
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]),
  renderListWrapper: PropTypes.func,
};

List.defaultProps = {
  hoverable: true,
  divided: false,
  horizontal: false,
  renderItem: renderDefaultItem,
  renderCategory: renderDefaultItem,
  items: [],
  renderListWrapper: null,
};

export default List;
