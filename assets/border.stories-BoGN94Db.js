import{e as a}from"./iframe-Ci3LgRk2.js";import{C as s,a as d,r as o}from"./ClassExample-CwBCagLN.js";const t={title:"Style/Helper Classes/Border"},e={render:()=>a.createElement(s,{signature:"border--<side>",classCategory:d,hideBorder:!0},a.createElement("div",null,"Element with a border helper applied"))},r={render:()=>a.createElement(s,{signature:"rounded--<side>(--<amount>)",classCategory:o,hideBorder:!0},a.createElement("div",{className:"padding--all--xs bgColor--cloudGrey"},"Element with a border helper applied"))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <ClassExample signature="border--<side>" classCategory={borderHelpers} hideBorder>
      <div>Element with a border helper applied</div>
    </ClassExample>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ClassExample signature="rounded--<side>(--<amount>)" classCategory={rounded} hideBorder>
      <div className="padding--all--xs bgColor--cloudGrey">
        Element with a border helper applied
      </div>
    </ClassExample>
}`,...r.parameters?.docs?.source}}};const l=["Border","BorderRadius"],p=Object.freeze(Object.defineProperty({__proto__:null,Border:e,BorderRadius:r,__namedExportsOrder:l,default:t},Symbol.toStringTag,{value:"Module"}));export{p as B,e as a,r as b};
