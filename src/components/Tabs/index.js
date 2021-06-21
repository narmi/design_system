import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "components/Typography";
import { deviceBreakpoints } from "../../globalStyles";

const StyledTableLabelDiv = styled.div`
  display: flex;
  flew-direction: row;
`;

const StyledTable = styled.div`
  box-shadow: var(--nds-dropshadow-light);
`;

const Tabs = (props) => {
  const [selectedTab, setSelectedTab] = useState("");
  const StyledTabButton = styled.button`
    border: none;
    border-bottom: ${(props) =>
      props.selected === selectedTab
        ? "1px solid var(--nds-narmi-purple)"
        : "none"};
    color: ${(props) =>
      props.selected === selectedTab ? "var(--nds-narmi-purple)" : "none"};
    background-color: white;
    padding: 4px 12px;
    margin-right: 20px;
    :hover {
      color: var(--nds-narmi-purple);
    }
  `;
  function selectTab(key) {
    setSelectedTab(key);
    console.log(key);
  }
  return (
    <div {...props}>
      <StyledTableLabelDiv>
        <div style={{ "border-bottom": "1px solid grey" }}>
          {props.items.map((x, key) => (
            <StyledTabButton
              key={key}
              selected={key}
              onClick={() => {
                selectTab(key);
              }}
              selectedTab={selectedTab}
            >
              <p>{x}</p>
            </StyledTabButton>
          ))}
        </div>
      </StyledTableLabelDiv>
    </div>
  );
};

Tabs.propTypes = {
  iremts: PropTypes.array,
};

Tabs.defaultProps = {
  items: [],
};

export default Tabs;
