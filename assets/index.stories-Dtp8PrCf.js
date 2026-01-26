import{e}from"./iframe-CTHFVwiB.js";import{V as s,I as t}from"./index-DdYFg9QH.js";import{R as n}from"./index-DZf7ozVt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./selection-CAkQuomx.js";import"./AsElement-BZSYqSPH.js";const c=l=>e.createElement(t,l),o=c.bind({});o.args={label:"Edit",kind:"plain",name:"info"};o.parameters={docs:{description:{story:'An Icon Button of `kind="plain"` is a button styled to look like a plain icon.'}}};const a=()=>e.createElement(n,{alignItems:"center"},e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"action",label:"Default Action Button",name:"info"})),e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"plain",label:"Default Plain Button",name:"info"}))),i=()=>e.createElement(n,{alignItems:"center"},e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"action",label:"X-Small Button",textSize:"xs",name:"info"})),e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"action",label:"Small Button",textSize:"s",name:"info"})),e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"action",label:"Medium Button",textSize:"m",name:"info"})),e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"action",label:"Large Button",textSize:"l",name:"info"}))),r=()=>e.createElement(e.Fragment,null,e.createElement(n,{alignItems:"center"},e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"plain",label:"X-Small Button",textSize:"xs",name:"info"})),e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"plain",label:"Small Button",textSize:"s",name:"info"})),e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"plain",label:"Medium Button",textSize:"m",name:"info"})),e.createElement(n.Item,{shrink:!0},e.createElement(t,{kind:"plain",label:"Large Button",textSize:"l",name:"info"})))),m=()=>e.createElement(e.Fragment,null,e.createElement(t,{as:"a",kind:"plain",label:"Link button",textSize:"xs",name:"info",href:"/"})),f={title:"Components/IconButton",component:t,argTypes:{name:{options:["",...s]},textSize:{options:["xs","s","m","l"]},kind:{options:["plain","action","themed"]}}};a.__docgenInfo={description:"",methods:[],displayName:"DefaultIconButtonSizes"};i.__docgenInfo={description:"",methods:[],displayName:"ActionIconButtonSizes"};r.__docgenInfo={description:"",methods:[],displayName:"PlainIconButtonSizes"};m.__docgenInfo={description:"",methods:[],displayName:"IconButtonAsAnchor"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <IconButton {...args} />",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Row alignItems="center">
    <Row.Item shrink>
      <IconButton kind="action" label="Default Action Button" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="plain" label="Default Plain Button" name="info" />
    </Row.Item>
  </Row>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Row alignItems="center">
    <Row.Item shrink>
      <IconButton kind="action" label="X-Small Button" textSize="xs" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="action" label="Small Button" textSize="s" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="action" label="Medium Button" textSize="m" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="action" label="Large Button" textSize="l" name="info" />
    </Row.Item>
  </Row>`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <>
    <Row alignItems="center">
      <Row.Item shrink>
        <IconButton kind="plain" label="X-Small Button" textSize="xs" name="info" />
      </Row.Item>
      <Row.Item shrink>
        <IconButton kind="plain" label="Small Button" textSize="s" name="info" />
      </Row.Item>
      <Row.Item shrink>
        <IconButton kind="plain" label="Medium Button" textSize="m" name="info" />
      </Row.Item>
      <Row.Item shrink>
        <IconButton kind="plain" label="Large Button" textSize="l" name="info" />
      </Row.Item>
    </Row>
  </>`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <>
    <IconButton as="a" kind="plain" label="Link button" textSize="xs" name="info" href="/" />
  </>`,...m.parameters?.docs?.source}}};const h=["PlainIconButton","DefaultIconButtonSizes","ActionIconButtonSizes","PlainIconButtonSizes","IconButtonAsAnchor"];export{i as ActionIconButtonSizes,a as DefaultIconButtonSizes,m as IconButtonAsAnchor,o as PlainIconButton,r as PlainIconButtonSizes,h as __namedExportsOrder,f as default};
