import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DQMr4rIs.js";import{n as r,r as i}from"./Button-BqXI5TAC.js";import{n as a,t as o}from"./Checkbox-CBBMooNE.js";import{n as s,t as c}from"./Popover-sPt5T-tW.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{l=e(n()),s(),i(),a(),{expect:u,screen:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p=e=>l.createElement(`div`,{style:{height:`200px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`}},l.createElement(c,e)),m=p.bind({}),m.args={content:l.createElement(`div`,{className:`padding--all--m`},`📦 Any content`),renderTrigger:()=>l.createElement(r,{type:`button`,kind:`secondary`},`Open Popover`)},m.argTypes={content:{control:!1}},h={name:`Interaction: Opens on click`,render:()=>l.createElement(c,{renderTrigger:()=>l.createElement(r,{type:`button`,kind:`secondary`},`Open Popover`),content:l.createElement(`div`,{className:`padding--all--m`},`📦 Any content`)}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`nds-popover-trigger`)),await f(()=>u(d.getByText(/any content/i)).toBeVisible())}},g=()=>l.createElement(l.Fragment,null,l.createElement(`div`,{className:`margin--top--m`},l.createElement(c,{content:l.createElement(`div`,{className:`padding--all--m`},`📦 Any content`)},l.createElement(`div`,null,`Trigger as children`)))),g.parameters={docs:{description:{story:"Popover supports accepting children to use as the trigger element. **This feature will be removed in a feature release;** use `renderTrigger` instead."}}},_=p.bind({}),_.args={content:l.createElement(`div`,{className:`padding--all--m`},`Use `,l.createElement(`code`,null,`side`),` to set your preferred positioning`),renderTrigger:()=>l.createElement(r,{type:`button`,kind:`secondary`},`Top positioned Popover`),side:`top`},_.argTypes={content:{control:!1}},v=p.bind({}),v.args={renderTrigger:()=>l.createElement(r,{type:`button`,kind:`secondary`},`Click to show Popover`),content:l.createElement(`div`,{className:`padding--all`},`Focus will be trapped to`,` `,l.createElement(`a`,{target:`blank`,href:`http://narmi.com`,className:`fontWeight--bold`},`focusable`),` `,l.createElement(`a`,{target:`blank`,href:`http://narmi.com`,className:`fontWeight--bold`},`elements`),` `,`within the Popover while it is open.`)},y=[`See statements and documents`,`Make deposits`,`Make withdrawals`,`Transfer funds`,`Pay bills`,`Manage beneficiaries`,`View transaction history`,`Download statements`,`Set up alerts`,`Manage cards`,`Update profile information`,`Enable notifications`],b={name:`Interaction: Scrollable content`,render:()=>l.createElement(p,{renderTrigger:()=>l.createElement(r,{type:`button`,kind:`secondary`},`Select Permissions`),content:l.createElement(`div`,{"data-testid":`scroll-container`,style:{maxHeight:`200px`,overflowY:`auto`},className:`padding--all--s`},y.map(e=>l.createElement(o,{key:e,label:e,kind:`condensed`})))}),parameters:{docs:{description:{story:`A Popover containing a scrollable list of condensed checkboxes. Items that are only reachable by scrolling the content remain clickable, and the scroll position is preserved after interacting with them.`}}},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`nds-popover-trigger`));let n=await d.findByTestId(`scroll-container`);n.scrollTop=n.scrollHeight;let r=n.scrollTop;await u(r).toBeGreaterThan(0);let i=d.getByLabelText(`Enable notifications`);await t.click(i),await u(i).toBeChecked(),await u(n.scrollTop).toBe(r)}},x=()=>{let[e,t]=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(r,{kind:`secondary`,size:`s`,label:`show popover`,onClick:()=>t(!e)}),l.createElement(`div`,{className:`margin--top--m`},l.createElement(c,{content:l.createElement(`div`,{className:`padding--all--m`},`📦 Any content`),isOpen:e,onUserDismiss:()=>t(!1),onUserEnable:()=>t(!0),renderTrigger:()=>l.createElement(`div`,null,`Popover trigger and positioning reference`)})))},x.parameters={docs:{description:{story:"In this example, the user may click on either the button, or the text below to open the Popover. The `children` (trigger element) of Popover will always be the positioning reference. The `onUserEnable` prop can be used to subscribe to user interactions on the trigger, and `onUserDismiss` is used to subscribe to user events that dismiss the popover."}}},S={title:`Components/Popover`,component:c,argTypes:{alignment:{table:{disable:!0}},disableAutoPlacement:{table:{disable:!0}}}},g.__docgenInfo={description:``,methods:[],displayName:`LegacyTrigger`},x.__docgenInfo={description:``,methods:[],displayName:`Controlled`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Interaction test that opens the Popover so Chromatic can snapshot
the layer's placement.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <>
      <div className="margin--top--m">
        <Popover content={<div className="padding--all--m">📦 Any content</div>}>
          <div>Trigger as children</div>
        </Popover>
      </div>
    </>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Popover {...args} />
  </div>`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Scrollable content",
  render: () => <Template renderTrigger={() => <Button type="button" kind="secondary">
          Select Permissions
        </Button>} content={<div data-testid="scroll-container" style={{
    maxHeight: "200px",
    overflowY: "auto"
  }} className="padding--all--s">
          {PERMISSIONS.map(label => <Checkbox key={label} label={label} kind="condensed" />)}
        </div>} />,
  parameters: {
    docs: {
      description: {
        story: "A Popover containing a scrollable list of condensed checkboxes. Items that are only reachable by scrolling the content remain clickable, and the scroll position is preserved after interacting with them."
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("nds-popover-trigger"));
    const scroller = await screen.findByTestId("scroll-container");
    scroller.scrollTop = scroller.scrollHeight;
    const scrolledTo = scroller.scrollTop;
    await expect(scrolledTo).toBeGreaterThan(0);
    const lastCheckbox = screen.getByLabelText("Enable notifications");
    await userEvent.click(lastCheckbox);
    await expect(lastCheckbox).toBeChecked();
    await expect(scroller.scrollTop).toBe(scrolledTo);
  }
}`,...b.parameters?.docs?.source},description:{story:`Regression test for NDS-3122: clicking an item after scrolling the
popover content must register the click and keep the scroll position.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button kind="secondary" size="s" label="show popover" onClick={() => setIsOpen(!isOpen)} />
      <div className="margin--top--m">
        <Popover content={<div className="padding--all--m">📦 Any content</div>} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} onUserEnable={() => setIsOpen(true)} renderTrigger={() => <div>Popover trigger and positioning reference</div>} />
      </div>
    </>;
}`,...x.parameters?.docs?.source}}},C=[`Overview`,`Open`,`LegacyTrigger`,`Positioning`,`FocusManagement`,`ScrollableCheckboxList`,`Controlled`]}))();export{x as Controlled,v as FocusManagement,g as LegacyTrigger,h as Open,m as Overview,_ as Positioning,b as ScrollableCheckboxList,C as __namedExportsOrder,S as default};