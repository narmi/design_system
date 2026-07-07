import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BfKIDLek.js";import{n as r,t as i}from"./Button-EbTbPm3n.js";import{r as a,t as o}from"./IconButton-Cjl3d8J7.js";import{r as s,t as c}from"./TextInput-H7ymQZAh.js";import{r as l,t as u}from"./MenuButton-B8mE62Ya.js";import{n as d,t as f}from"./Tooltip-C7RKmr9k.js";var p,m,h,g,_,v,y,b,x,S,C;e((()=>{p=t(n()),d(),r(),s(),l(),a(),m=e=>p.createElement(`div`,{style:{height:`200px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`}},p.createElement(f,e)),h=m.bind({}),h.args={text:`I am a tooltip, which is a tool for tips`,children:p.createElement(i,null,`Button with a tooltip`)},g=()=>p.createElement(c,{label:`Account Number`,endContent:p.createElement(f,{text:`If you don't have an account number, enter your customer ID`},p.createElement(`span`,{className:`narmi-icon-info`}))}),g.parameters={docs:{description:{story:`Tooltip can be used in a TextInput by passing it as the endContent prop.`}}},_=()=>{let[e,t]=(0,p.useState)(!1);return p.createElement(u,{label:`Menu button`,side:`top`,renderTrigger:n=>p.createElement(f,{isOpen:e&&!n,text:`i am a tip`},p.createElement(o,{kind:`action`,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),name:`sparkle`}))},p.createElement(u.Item,{label:`Do something!`}),p.createElement(u.Item,{label:`Do something else`}),p.createElement(u.Item,{label:`Do another thing`}))},v=()=>{let[e,t]=(0,p.useState)(!1);return p.createElement(`div`,{onMouseLeave:()=>{t(!1)}},p.createElement(f,{isOpen:e,text:`Hover over anywhere else to close the tooltip.`},`Tooltip should be over me`),p.createElement(i,{style:{marginLeft:8},onClick:()=>{t(e=>!e)}},`Click Me.`))},v.parameters={docs:{description:{story:`Tooltip can controlled to be open or closed by passing an optional isOpen property`}}},y=()=>p.createElement(`div`,{style:{height:`300vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,paddingTop:`120vh`}},p.createElement(f,{isOpen:!0,text:`This tooltip flips when scrolled to the top of the viewport`},p.createElement(i,null,`Scroll down to see me flip`))),y.parameters={docs:{description:{story:`(Must be viewed as a standalone page) Scroll the page so the trigger is near the top of the viewport. The tooltip will flip from top to bottom when there isn't enough space above.`}}},b=()=>p.createElement(`div`,{style:{resize:`horizontal`,overflow:`hidden`,display:`flex`,justifyContent:`flex-end`,alignItems:`center`,outline:`1px dashed hotpink`,padding:`var(--space-l)`,width:`100%`,minWidth:`200px`,height:`200px`}},p.createElement(f,{isOpen:!0,text:`This tooltip has enough text to cause a collision with the right edge of the viewport`},p.createElement(i,null,`Trigger`))),b.parameters={docs:{description:{story:`Demonstrates arrow tracking behavior near viewport edges. Drag the bottom-right resize handle to move the trigger away from the right edge and observe how the arrow does (or does not) stay aligned with the anchor.`}}},x=()=>p.createElement(`div`,{style:{height:`400px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`,gap:`var(--space-xl)`}},p.createElement(`div`,{style:{display:`flex`,gap:`var(--space-l)`}},p.createElement(f,{text:`Tooltip on top`,side:`top`},p.createElement(i,null,`Top`)),p.createElement(f,{text:`Tooltip on the right`,side:`right`},p.createElement(i,null,`Right`)),p.createElement(f,{text:`Tooltip on the bottom`,side:`bottom`},p.createElement(i,null,`Bottom`)),p.createElement(f,{text:`Tooltip on the left`,side:`left`},p.createElement(i,null,`Left`))),p.createElement(`div`,{style:{display:`flex`,gap:`var(--space-l)`,alignItems:`center`}},p.createElement(f,{text:`Icon button tooltip`},p.createElement(o,{kind:`action`,name:`info`})),p.createElement(f,{text:`This tooltip has a longer message to demonstrate text wrapping behavior within the tooltip container`},p.createElement(i,{kind:`secondary`},`Long text`)),p.createElement(f,{text:`Inline tooltip`},p.createElement(`span`,{style:{textDecoration:`underline dotted`,cursor:`help`}},`hover this text`)))),x.parameters={docs:{description:{story:`Multiple tooltips can coexist on the same page. Each tooltip operates independently, showing on hover/focus of its own trigger element.`}}},S={title:`Components/Tooltip`,component:f},g.__docgenInfo={description:``,methods:[],displayName:`WithTextInput`},_.__docgenInfo={description:``,methods:[],displayName:`WithTooltipAsMenuButtonTrigger`},v.__docgenInfo={description:``,methods:[],displayName:`ControlledTooltip`},y.__docgenInfo={description:``,methods:[],displayName:`ScrollingBehavior`},b.__docgenInfo={description:``,methods:[],displayName:`ArrowTracking`},x.__docgenInfo={description:``,methods:[],displayName:`MultipleTooltips`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Tooltip {...args} />
  </div>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <TextInput label="Account Number" endContent={<Tooltip text="If you don't have an account number, enter your customer ID">
        <span className="narmi-icon-info"></span>
      </Tooltip>} />`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <div style={{
  height: "300vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "120vh"
}}>
    <Tooltip isOpen={true} text="This tooltip flips when scrolled to the top of the viewport">
      <Button>Scroll down to see me flip</Button>
    </Tooltip>
  </div>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...x.parameters?.docs?.source}}},C=[`Overview`,`WithTextInput`,`WithTooltipAsMenuButtonTrigger`,`ControlledTooltip`,`ScrollingBehavior`,`ArrowTracking`,`MultipleTooltips`]}))();export{b as ArrowTracking,v as ControlledTooltip,x as MultipleTooltips,h as Overview,y as ScrollingBehavior,g as WithTextInput,_ as WithTooltipAsMenuButtonTrigger,C as __namedExportsOrder,S as default};