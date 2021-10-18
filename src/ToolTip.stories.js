import React, { useState } from "react";
import { NdsStyles } from "./decorators/decorators";
import { Tooltip, TextInput } from 'design_system';

export default {
  title: "Components/ToolTip",
  decorators: [NdsStyles],
};

// Tool Tip requires parent to have relative position

export const ToolTip = () => {
  return (
    <>
      <style>
        {`
          .nds-container-tooltip {
            
          }
        `}
        </style>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{display: "flex", position:"relative"}}>
          <span>Top</span>
          <Tooltip direction={"top"} targetWidth={"24px"} targetHeight={"18px"}>
            Tooltip text
          </Tooltip>
          </div>

          <div style={{display: "flex", position:"relative"}}>
          <span>Right</span>
          <Tooltip direction={"right"} targetWidth={"24px"} targetHeight={"18px"} left={"43px"}>
            Tooltip text
          </Tooltip>
          </div>

          <div style={{display: "flex", position:"relative"}}>
          <span>Left</span>
          <Tooltip direction={"left"} targetWidth={"24px"} targetHeight={"18px"}>
            Tooltip text
          </Tooltip>
          </div>

          <div style={{display: "flex", position:"relative"}}>
          <span>Bottom</span>
          <Tooltip direction={"bottom"} targetWidth={"48px"} targetHeight={"18px"}>
            Tooltip text
          </Tooltip>
          </div>
      </div>
      <br />
      <div style={{display: "flex", position: "relative"}}>
        <TextInput label={"Phone number"} defaultValue={"(555) 867-5309"} type={"tel"} />
                  <Tooltip top="19px" left="183px" direction={"top"} targetWidth={"22px"} targetHeight={"18px"}>
            Tooltip text
          </Tooltip>
      </div>
    </>
  );
};
