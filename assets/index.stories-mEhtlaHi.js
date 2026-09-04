import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-CmAoFXIH.js";import{n as r,t as i}from"./Button-C9FWrYaS.js";import{n as a,t as o}from"./Popover-CHJFyEtT.js";import{n as s,t as c}from"./IconButton-B71NYl_F.js";import{n as l,t as u}from"./TextInput-_kLB3k5D.js";import{n as d,t as f}from"./Tooltip-BTrbucHe.js";import{n as p,t as m}from"./Dialog-BYbHb8BU.js";import{n as h,t as g}from"./Drawer-BAgUyX53.js";import{n as _,t as v}from"./MenuButton-C5c6yIF8.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{y=e(n()),d(),r(),l(),_(),s(),p(),a(),h(),{expect:b,screen:x,waitFor:S}=__STORYBOOK_MODULE_TEST__,C=e=>y.createElement(`div`,{style:{height:`200px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`}},y.createElement(f,e)),w=C.bind({}),w.args={text:`I am a tooltip, which is a tool for tips`,children:y.createElement(i,null,`Button with a tooltip`)},T={name:`Interaction: Opens on hover`,render:()=>y.createElement(f,{text:`I am a tooltip, which is a tool for tips`},y.createElement(i,null,`Hover me`)),play:async({canvas:e,userEvent:t})=>{await t.hover(e.getByRole(`button`,{name:/hover me/i})),await S(()=>b(x.getByText(/tool for tips/i)).toBeVisible(),{timeout:2e3})}},E=()=>y.createElement(u,{label:`Account Number`,endContent:y.createElement(f,{text:`If you don't have an account number, enter your customer ID`},y.createElement(`span`,{className:`narmi-icon-info`}))}),E.parameters={docs:{description:{story:`Tooltip can be used in a TextInput by passing it as the endContent prop.`}}},D=()=>{let[e,t]=(0,y.useState)(!1);return y.createElement(y.Fragment,null,y.createElement(i,{onClick:()=>t(!0)},`Open Dialog`),y.createElement(m,{title:`Tooltip in a Dialog`,isOpen:e,onUserDismiss:()=>t(!1)},y.createElement(u,{label:`Account Number`,endContent:y.createElement(f,{text:`If you don't have an account number, enter your customer ID`},y.createElement(`span`,{className:`narmi-icon-info`}))})))},O=()=>y.createElement(o,{renderTrigger:()=>y.createElement(i,null,`Open Popover`),content:y.createElement(`div`,{className:`padding--all--m`,style:{width:`300px`}},y.createElement(u,{label:`Account Number`,endContent:y.createElement(f,{text:`If you don't have an account number, enter your customer ID`},y.createElement(`span`,{className:`narmi-icon-info`}))}))}),k=()=>{let[e,t]=(0,y.useState)(!1);return y.createElement(y.Fragment,null,y.createElement(i,{onClick:()=>t(!0)},`Open Drawer`),y.createElement(g,{isOpen:e,onUserDismiss:()=>t(!1)},y.createElement(u,{label:`Account Number`,endContent:y.createElement(f,{text:`If you don't have an account number, enter your customer ID`},y.createElement(`span`,{className:`narmi-icon-info`}))})))},A=()=>{let[e,t]=(0,y.useState)(!1);return y.createElement(v,{label:`Menu button`,side:`top`,renderTrigger:n=>y.createElement(f,{isOpen:e&&!n,text:`i am a tip`},y.createElement(c,{kind:`action`,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),name:`sparkle`}))},y.createElement(v.Item,{label:`Do something!`}),y.createElement(v.Item,{label:`Do something else`}),y.createElement(v.Item,{label:`Do another thing`}))},j=()=>{let[e,t]=(0,y.useState)(!1);return y.createElement(`div`,{onMouseLeave:()=>{t(!1)}},y.createElement(f,{isOpen:e,text:`Hover over anywhere else to close the tooltip.`},`Tooltip should be over me`),y.createElement(i,{style:{marginLeft:8},onClick:()=>{t(e=>!e)}},`Click Me.`))},j.parameters={docs:{description:{story:`Tooltip can controlled to be open or closed by passing an optional isOpen property`}}},M=()=>y.createElement(`div`,{style:{height:`300vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,paddingTop:`120vh`}},y.createElement(f,{isOpen:!0,text:`This tooltip flips when scrolled to the top of the viewport`},y.createElement(i,null,`Scroll down to see me flip`))),M.parameters={docs:{description:{story:`(Must be viewed as a standalone page) Scroll the page so the trigger is near the top of the viewport. The tooltip will flip from top to bottom when there isn't enough space above.`}}},N=()=>y.createElement(`div`,{style:{resize:`horizontal`,overflow:`hidden`,display:`flex`,justifyContent:`flex-end`,alignItems:`center`,outline:`1px dashed hotpink`,padding:`var(--space-l)`,width:`100%`,minWidth:`200px`,height:`200px`}},y.createElement(f,{isOpen:!0,text:`This tooltip has enough text to cause a collision with the right edge of the viewport`},y.createElement(i,null,`Trigger`))),N.parameters={docs:{description:{story:`Demonstrates arrow tracking behavior near viewport edges. Drag the bottom-right resize handle to move the trigger away from the right edge and observe how the arrow does (or does not) stay aligned with the anchor.`}}},P=()=>y.createElement(`div`,{style:{height:`400px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`,gap:`var(--space-xl)`}},y.createElement(`div`,{style:{display:`flex`,gap:`var(--space-l)`}},y.createElement(f,{text:`Tooltip on top`,side:`top`},y.createElement(i,null,`Top`)),y.createElement(f,{text:`Tooltip on the right`,side:`right`},y.createElement(i,null,`Right`)),y.createElement(f,{text:`Tooltip on the bottom`,side:`bottom`},y.createElement(i,null,`Bottom`)),y.createElement(f,{text:`Tooltip on the left`,side:`left`},y.createElement(i,null,`Left`))),y.createElement(`div`,{style:{display:`flex`,gap:`var(--space-l)`,alignItems:`center`}},y.createElement(f,{text:`Icon button tooltip`},y.createElement(c,{kind:`action`,name:`info`})),y.createElement(f,{text:`This tooltip has a longer message to demonstrate text wrapping behavior within the tooltip container`},y.createElement(i,{kind:`secondary`},`Long text`)),y.createElement(f,{text:`Inline tooltip`},y.createElement(`span`,{style:{textDecoration:`underline dotted`,cursor:`help`}},`hover this text`)))),P.parameters={docs:{description:{story:`Multiple tooltips can coexist on the same page. Each tooltip operates independently, showing on hover/focus of its own trigger element.`}}},F={title:`Components/Tooltip`,component:f},E.__docgenInfo={description:``,methods:[],displayName:`WithTextInput`},D.__docgenInfo={description:"Tooltip rendered as `endContent` of a `TextInput` inside a `Dialog`.",methods:[],displayName:`InADialog`},O.__docgenInfo={description:"Tooltip rendered as `endContent` of a `TextInput` inside a `Popover`.",methods:[],displayName:`InAPopover`},k.__docgenInfo={description:"Tooltip rendered as `endContent` of a `TextInput` inside a `Drawer`.",methods:[],displayName:`InADrawer`},A.__docgenInfo={description:``,methods:[],displayName:`WithTooltipAsMenuButtonTrigger`},j.__docgenInfo={description:``,methods:[],displayName:`ControlledTooltip`},M.__docgenInfo={description:``,methods:[],displayName:`ScrollingBehavior`},N.__docgenInfo={description:``,methods:[],displayName:`ArrowTracking`},P.__docgenInfo={description:``,methods:[],displayName:`MultipleTooltips`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Tooltip {...args} />
  </div>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on hover",
  render: () => <Tooltip text="I am a tooltip, which is a tool for tips">
      <Button>Hover me</Button>
    </Tooltip>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.hover(canvas.getByRole("button", {
      name: /hover me/i
    }));
    await waitFor(() => expect(screen.getByText(/tool for tips/i)).toBeVisible(), {
      timeout: 2000
    });
  }
}`,...T.parameters?.docs?.source},description:{story:`Interaction test that hovers the trigger so Chromatic can snapshot
the tooltip's placement.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => <TextInput label="Account Number" endContent={<Tooltip text="If you don't have an account number, enter your customer ID">
        <span className="narmi-icon-info"></span>
      </Tooltip>} />`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog title="Tooltip in a Dialog" isOpen={isOpen} onUserDismiss={() => setIsOpen(false)}>
        <TextInput label="Account Number" endContent={<Tooltip text="If you don't have an account number, enter your customer ID">
              <span className="narmi-icon-info"></span>
            </Tooltip>} />
      </Dialog>
    </>;
}`,...D.parameters?.docs?.source},description:{story:"Tooltip rendered as `endContent` of a `TextInput` inside a `Dialog`.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <Popover renderTrigger={() => <Button>Open Popover</Button>} content={<div className="padding--all--m" style={{
  width: "300px"
}}>
        <TextInput label="Account Number" endContent={<Tooltip text="If you don't have an account number, enter your customer ID">
              <span className="narmi-icon-info"></span>
            </Tooltip>} />
      </div>} />`,...O.parameters?.docs?.source},description:{story:"Tooltip rendered as `endContent` of a `TextInput` inside a `Popover`.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer isOpen={isOpen} onUserDismiss={() => setIsOpen(false)}>
        <TextInput label="Account Number" endContent={<Tooltip text="If you don't have an account number, enter your customer ID">
              <span className="narmi-icon-info"></span>
            </Tooltip>} />
      </Drawer>
    </>;
}`,...k.parameters?.docs?.source},description:{story:"Tooltip rendered as `endContent` of a `TextInput` inside a `Drawer`.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  return <MenuButton label="Menu button" side="top"
  // renderTrigger provides its open state.
  // The Tooltip now knows when to show or hide.
  renderTrigger={isMenuOpen => <Tooltip isOpen={isTooltipOpen && !isMenuOpen} text="i am a tip">
          <IconButton kind="action" onMouseEnter={() => setIsTooltipOpen(true)} onMouseLeave={() => setIsTooltipOpen(false)} name="sparkle" />
        </Tooltip>}>
      <MenuButton.Item label="Do something!" />
      <MenuButton.Item label="Do something else" />
      <MenuButton.Item label="Do another thing" />
    </MenuButton>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <div onMouseLeave={() => {
    setIsOpen(false);
  }}>
      <Tooltip isOpen={isOpen} text="Hover over anywhere else to close the tooltip.">
        Tooltip should be over me
      </Tooltip>
      <Button style={{
      marginLeft: 8
    }} onClick={() => {
      setIsOpen(newIsOpen => !newIsOpen);
    }}>
        Click Me.
      </Button>
    </div>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <div style={{
  height: "300vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "120vh"
}}>
    <Tooltip isOpen={true} text="This tooltip flips when scrolled to the top of the viewport">
      <Button>Scroll down to see me flip</Button>
    </Tooltip>
  </div>`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => <div style={{
  resize: "horizontal",
  overflow: "hidden",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  outline: "1px dashed hotpink",
  padding: "var(--space-l)",
  width: "100%",
  minWidth: "200px",
  height: "200px"
}}>
    <Tooltip isOpen={true} text="This tooltip has enough text to cause a collision with the right edge of the viewport">
      <Button>Trigger</Button>
    </Tooltip>
  </div>`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => <div style={{
  height: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "var(--space-xl)"
}}>
    <div style={{
    display: "flex",
    gap: "var(--space-l)"
  }}>
      <Tooltip text="Tooltip on top" side="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip text="Tooltip on the right" side="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip text="Tooltip on the bottom" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip text="Tooltip on the left" side="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
    <div style={{
    display: "flex",
    gap: "var(--space-l)",
    alignItems: "center"
  }}>
      <Tooltip text="Icon button tooltip">
        <IconButton kind="action" name="info" />
      </Tooltip>
      <Tooltip text="This tooltip has a longer message to demonstrate text wrapping behavior within the tooltip container">
        <Button kind="secondary">Long text</Button>
      </Tooltip>
      <Tooltip text="Inline tooltip">
        <span style={{
        textDecoration: "underline dotted",
        cursor: "help"
      }}>
          hover this text
        </span>
      </Tooltip>
    </div>
  </div>`,...P.parameters?.docs?.source}}},I=[`Overview`,`Open`,`WithTextInput`,`InADialog`,`InAPopover`,`InADrawer`,`WithTooltipAsMenuButtonTrigger`,`ControlledTooltip`,`ScrollingBehavior`,`ArrowTracking`,`MultipleTooltips`]}))();export{N as ArrowTracking,j as ControlledTooltip,D as InADialog,k as InADrawer,O as InAPopover,P as MultipleTooltips,T as Open,w as Overview,M as ScrollingBehavior,E as WithTextInput,A as WithTooltipAsMenuButtonTrigger,I as __namedExportsOrder,F as default};