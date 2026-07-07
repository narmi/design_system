import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BfKIDLek.js";import{n as r,t as i}from"./Button-EbTbPm3n.js";import{n as a,t as o}from"./Popover-27CAHmrD.js";var s,c,l,u,d,f,p,m,h;e((()=>{s=t(n()),a(),r(),c=e=>s.createElement(`div`,{style:{height:`200px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`}},s.createElement(o,e)),l=c.bind({}),l.args={content:s.createElement(`div`,{className:`padding--all--m`},`📦 Any content`),renderTrigger:()=>s.createElement(i,{type:`button`,kind:`secondary`},`Open Popover`)},l.argTypes={content:{control:!1}},u=()=>s.createElement(s.Fragment,null,s.createElement(`div`,{className:`margin--top--m`},s.createElement(o,{content:s.createElement(`div`,{className:`padding--all--m`},`📦 Any content`)},s.createElement(`div`,null,`Trigger as children`)))),u.parameters={docs:{description:{story:"Popover supports accepting children to use as the trigger element. **This feature will be removed in a feature release;** use `renderTrigger` instead."}}},d=c.bind({}),d.args={content:s.createElement(`div`,{className:`padding--all--m`},`Use `,s.createElement(`code`,null,`side`),` to set your preferred positioning`),renderTrigger:()=>s.createElement(i,{type:`button`,kind:`secondary`},`Top positioned Popover`),side:`top`},d.argTypes={content:{control:!1}},f=c.bind({}),f.args={renderTrigger:()=>s.createElement(i,{type:`button`,kind:`secondary`},`Click to show Popover`),content:s.createElement(`div`,{className:`padding--all`},`Focus will be trapped to`,` `,s.createElement(`a`,{target:`blank`,href:`http://narmi.com`,className:`fontWeight--bold`},`focusable`),` `,s.createElement(`a`,{target:`blank`,href:`http://narmi.com`,className:`fontWeight--bold`},`elements`),` `,`within the Popover while it is open.`)},p=()=>{let[e,t]=(0,s.useState)(!1);return s.createElement(s.Fragment,null,s.createElement(i,{kind:`secondary`,size:`s`,label:`show popover`,onClick:()=>t(!e)}),s.createElement(`div`,{className:`margin--top--m`},s.createElement(o,{content:s.createElement(`div`,{className:`padding--all--m`},`📦 Any content`),isOpen:e,onUserDismiss:()=>t(!1),onUserEnable:()=>t(!0),renderTrigger:()=>s.createElement(`div`,null,`Popover trigger and positioning reference`)})))},p.parameters={docs:{description:{story:"In this example, the user may click on either the button, or the text below to open the Popover. The `children` (trigger element) of Popover will always be the positioning reference. The `onUserEnable` prop can be used to subscribe to user interactions on the trigger, and `onUserDismiss` is used to subscribe to user events that dismiss the popover."}}},m={title:`Components/Popover`,component:o,argTypes:{alignment:{table:{disable:!0}},disableAutoPlacement:{table:{disable:!0}}}},u.__docgenInfo={description:``,methods:[],displayName:`LegacyTrigger`},p.__docgenInfo={description:``,methods:[],displayName:`Controlled`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <>
      <div className="margin--top--m">
        <Popover content={<div className="padding--all--m">📦 Any content</div>}>
          <div>Trigger as children</div>
        </Popover>
      </div>
    </>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button kind="secondary" size="s" label="show popover" onClick={() => setIsOpen(!isOpen)} />
      <div className="margin--top--m">
        <Popover content={<div className="padding--all--m">📦 Any content</div>} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} onUserEnable={() => setIsOpen(true)} renderTrigger={() => <div>Popover trigger and positioning reference</div>} />
      </div>
    </>;
}`,...p.parameters?.docs?.source}}},h=[`Overview`,`LegacyTrigger`,`Positioning`,`FocusManagement`,`Controlled`]}))();export{p as Controlled,f as FocusManagement,u as LegacyTrigger,l as Overview,d as Positioning,h as __namedExportsOrder,m as default};