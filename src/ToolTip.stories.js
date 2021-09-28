import React, { useState } from "react";
import { NdsStyles } from "./decorators/decorators";
// import { DateInput, TextInput } from 'design_system';

export default {
  title: "Components/ToolTip",
  decorators: [NdsStyles],
};

export const ToolTip = () => {
  return (
    <>
      <style>
        {`
/* Tooltip container */
.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted #ccc;
    color: #006080;
}

.tooltip-right {
    top: -5px;
    left: 125%;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #333333;
  box-shadow: 0px 6px 12px 0px #00000033;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  font-size: 16px;
  border-radius: 8px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

.tooltip .tooltiptext {
    visibility: hidden;
    position: absolute;
    width: 120px;
    background-color: #333333;
    color: #FFFFFF;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    z-index: 1;
    opacity: 0;
    transition: opacity .6s;
}

.tooltip-top::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333333 transparent transparent transparent;
}
.tooltip-top {
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
}
.tooltip-right::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #333333 transparent transparent;
}

.tooltip-bottom {
    top: 135%;
    left: 50%;
    margin-left: -60px;
}

.tooltip-bottom::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333333 transparent;
}

.tooltip-left {
    top: -5px;
    bottom: auto;
    right: 128%;
}

.tooltip-left::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #333333;
}
`}
      </style>

<div style={{display:"flex", justifyContent:"space-between"}}>
      <div class="tooltip">Top
    <span class="nds-typography tooltiptext tooltip-top">Tooltip text</span>
  </div>


  <div class="tooltip">right
  <span class="nds-typography tooltiptext tooltip-right">Tooltip text</span>
  </div>

  <div class="tooltip">bottom
  <span class="nds-typography tooltiptext tooltip-bottom">Tooltip text</span>
  </div>

  <div class="tooltip">left
  <span class="nds-typography tooltiptext tooltip-left">Tooltip text</span>
  </div>
  </div>
    </>
  );
};
