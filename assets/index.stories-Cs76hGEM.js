import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-B6OWB0Yc.js";import{n as r,t as i}from"./Button-BmVkFczE.js";import{n as a,t as o}from"./Popover-BCMdSVKn.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;t((()=>{s=e(n()),a(),r(),{expect:c,screen:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d=e=>s.createElement(`div`,{style:{height:`200px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`}},s.createElement(o,e)),f=d.bind({}),f.args={content:s.createElement(`div`,{className:`padding--all--m`},`📦 Any content`),renderTrigger:()=>s.createElement(i,{type:`button`,kind:`secondary`},`Open Popover`)},f.argTypes={content:{control:!1}},p={name:`Interaction: Opens on click`,render:()=>s.createElement(o,{renderTrigger:()=>s.createElement(i,{type:`button`,kind:`secondary`},`Open Popover`),content:s.createElement(`div`,{className:`padding--all--m`},`📦 Any content`)}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`nds-popover-trigger`)),await u(()=>c(l.getByText(/any content/i)).toBeVisible())}},m=()=>s.createElement(s.Fragment,null,s.createElement(`div`,{className:`margin--top--m`},s.createElement(o,{content:s.createElement(`div`,{className:`padding--all--m`},`📦 Any content`)},s.createElement(`div`,null,`Trigger as children`)))),m.parameters={docs:{description:{story:"Popover supports accepting children to use as the trigger element. **This feature will be removed in a feature release;** use `renderTrigger` instead."}}},h=d.bind({}),h.args={content:s.createElement(`div`,{className:`padding--all--m`},`Use `,s.createElement(`code`,null,`side`),` to set your preferred positioning`),renderTrigger:()=>s.createElement(i,{type:`button`,kind:`secondary`},`Top positioned Popover`),side:`top`},h.argTypes={content:{control:!1}},g=d.bind({}),g.args={renderTrigger:()=>s.createElement(i,{type:`button`,kind:`secondary`},`Click to show Popover`),content:s.createElement(`div`,{className:`padding--all`},`Focus will be trapped to`,` `,s.createElement(`a`,{target:`blank`,href:`http://narmi.com`,className:`fontWeight--bold`},`focusable`),` `,s.createElement(`a`,{target:`blank`,href:`http://narmi.com`,className:`fontWeight--bold`},`elements`),` `,`within the Popover while it is open.`)},_=()=>{let[e,t]=(0,s.useState)(!1);return s.createElement(s.Fragment,null,s.createElement(i,{kind:`secondary`,size:`s`,label:`show popover`,onClick:()=>t(!e)}),s.createElement(`div`,{className:`margin--top--m`},s.createElement(o,{content:s.createElement(`div`,{className:`padding--all--m`},`📦 Any content`),isOpen:e,onUserDismiss:()=>t(!1),onUserEnable:()=>t(!0),renderTrigger:()=>s.createElement(`div`,null,`Popover trigger and positioning reference`)})))},_.parameters={docs:{description:{story:"In this example, the user may click on either the button, or the text below to open the Popover. The `children` (trigger element) of Popover will always be the positioning reference. The `onUserEnable` prop can be used to subscribe to user interactions on the trigger, and `onUserDismiss` is used to subscribe to user events that dismiss the popover."}}},v={title:`Components/Popover`,component:o,argTypes:{alignment:{table:{disable:!0}},disableAutoPlacement:{table:{disable:!0}}}},m.__docgenInfo={description:``,methods:[],displayName:`LegacyTrigger`},_.__docgenInfo={description:``,methods:[],displayName:`Controlled`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on click",
  render: () => <Popover renderTrigger={() => <Button type="button" kind="secondary">
          Open Popover
        </Button>} content={<div className="padding--all--m">📦 Any content</div>} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("nds-popover-trigger"));
    await waitFor(() => expect(screen.getByText(/any content/i)).toBeVisible());
  }
}`,...p.parameters?.docs?.source},description:{story:`Interaction test that opens the Popover so Chromatic can snapshot
the layer's placement.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <>
      <div className="margin--top--m">
        <Popover content={<div className="padding--all--m">📦 Any content</div>}>
          <div>Trigger as children</div>
        </Popover>
      </div>
    </>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button kind="secondary" size="s" label="show popover" onClick={() => setIsOpen(!isOpen)} />
      <div className="margin--top--m">
        <Popover content={<div className="padding--all--m">📦 Any content</div>} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} onUserEnable={() => setIsOpen(true)} renderTrigger={() => <div>Popover trigger and positioning reference</div>} />
      </div>
    </>;
}`,..._.parameters?.docs?.source}}},y=[`Overview`,`Open`,`LegacyTrigger`,`Positioning`,`FocusManagement`,`Controlled`]}))();export{_ as Controlled,g as FocusManagement,m as LegacyTrigger,p as Open,f as Overview,h as Positioning,y as __namedExportsOrder,v as default};