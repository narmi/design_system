import{e,r as m}from"./iframe-Y1x1tuQU.js";import{P as i}from"./index-gIYx2mZ_.js";import{B as c}from"./index-BH8RECTJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./index-BDnsBicE.js";import"./dom-CXEH85xy.js";import"./index-BJ8t9xp5.js";import"./index-g5bFziFv.js";import"./Combination-BnqkYntk.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";import"./AsElement-rDk3pDkz.js";import"./index-DBAl-tlK.js";import"./index-DHVZvVhI.js";const p=a=>e.createElement("div",{style:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.createElement(i,a)),t=p.bind({});t.args={content:e.createElement("div",{className:"padding--all--m"},"📦 Any content"),renderTrigger:()=>e.createElement(c,{type:"button",kind:"secondary"},"Open Popover")};t.argTypes={content:{control:!1}};const n=()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"margin--top--m"},e.createElement(i,{content:e.createElement("div",{className:"padding--all--m"},"📦 Any content")},e.createElement("div",null,"Trigger as children"))));n.parameters={docs:{description:{story:"Popover supports accepting children to use as the trigger element. **This feature will be removed in a feature release;** use `renderTrigger` instead."}}};const r=p.bind({});r.args={content:e.createElement("div",{className:"padding--all--m"},"Use ",e.createElement("code",null,"side")," and ",e.createElement("code",null,"alignment")," to set your preferred positioning"),renderTrigger:()=>e.createElement(c,{type:"button",kind:"secondary"},"Top / Start positioned Popover"),side:"top",alignment:"start"};r.argTypes={content:{control:!1}};const s=p.bind({});s.args={renderTrigger:()=>e.createElement(c,{type:"button",kind:"secondary"},"Click to show Popover"),content:e.createElement("div",{className:"padding--all"},"Focus will be trapped to"," ",e.createElement("a",{target:"blank",href:"http://narmi.com",className:"fontWeight--bold"},"focusable")," ",e.createElement("a",{target:"blank",href:"http://narmi.com",className:"fontWeight--bold"},"elements")," ","within the Popover while it is open.")};const o=()=>{const[a,l]=m.useState(!1);return e.createElement(e.Fragment,null,e.createElement(c,{kind:"secondary",size:"s",label:"show popover",onClick:()=>l(!a)}),e.createElement("div",{className:"margin--top--m"},e.createElement(i,{content:e.createElement("div",{className:"padding--all--m"},"📦 Any content"),isOpen:a,onUserDismiss:()=>l(!1),onUserEnable:()=>l(!0),renderTrigger:()=>e.createElement("div",null,"Popover trigger and positioning reference")})))};o.parameters={docs:{description:{story:"In this example, the user may click on either the button, or the text below to open the Popover. The `children` (trigger element) of Popover will always be the positioning reference. The `onUserEnable` prop can be used to subscribe to user interactions on the trigger, and `onUserDismiss` is used to subscribe to user events that dismiss the popover."}}};const w={title:"Components/Popover",component:i};n.__docgenInfo={description:"",methods:[],displayName:"LegacyTrigger"};o.__docgenInfo={description:"",methods:[],displayName:"Controlled"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <>
      <div className="margin--top--m">
        <Popover content={<div className="padding--all--m">📦 Any content</div>}>
          <div>Trigger as children</div>
        </Popover>
      </div>
    </>;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button kind="secondary" size="s" label="show popover" onClick={() => setIsOpen(!isOpen)} />
      <div className="margin--top--m">
        <Popover content={<div className="padding--all--m">📦 Any content</div>} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} onUserEnable={() => setIsOpen(true)} renderTrigger={() => <div>Popover trigger and positioning reference</div>} />
      </div>
    </>;
}`,...o.parameters?.docs?.source}}};const I=["Overview","LegacyTrigger","Positioning","FocusManagement","Controlled"];export{o as Controlled,s as FocusManagement,n as LegacyTrigger,t as Overview,r as Positioning,I as __namedExportsOrder,w as default};
