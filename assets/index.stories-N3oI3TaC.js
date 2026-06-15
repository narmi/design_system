import{e,r as h}from"./iframe-CuD767K0.js";import{T as t}from"./index-CL6ixlxv.js";import{B as o}from"./index-BBcAW4Jt.js";import{T}from"./index-BFgmnifD.js";import{M as d}from"./index-CX0Y3NOA.js";import{I as g}from"./index-DlS7MmsH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BjuUWp_w.js";import"./index-RvS1aOr8.js";import"./AsElement-BRyn09UT.js";import"./index-Dsdo07ND.js";import"./index-B1MJ00nh.js";import"./index-DGDozYXS.js";import"./selection-CLgilsmn.js";import"./downshift.esm-DrXIPh6h.js";import"./tslib.es6-Dem0CNzv.js";import"./index-CnUgegKT.js";const f=a=>e.createElement("div",{style:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.createElement(t,a)),c=f.bind({});c.args={text:"I am a tooltip, which is a tool for tips",children:e.createElement(o,null,"Button with a tooltip")};const n=()=>e.createElement(T,{label:"Account Number",endContent:e.createElement(t,{text:"If you don't have an account number, enter your customer ID"},e.createElement("span",{className:"narmi-icon-info"}))});n.parameters={docs:{description:{story:"Tooltip can be used in a TextInput by passing it as the endContent prop."}}};const m=()=>{const[a,p]=h.useState(!1);return e.createElement(d,{label:"Menu button",side:"top",renderTrigger:u=>e.createElement(t,{isOpen:a&&!u,text:"i am a tip"},e.createElement(g,{kind:"action",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),name:"sparkle"}))},e.createElement(d.Item,{label:"Do something!"}),e.createElement(d.Item,{label:"Do something else"}),e.createElement(d.Item,{label:"Do another thing"}))},i=()=>{const[a,p]=h.useState(!1);return e.createElement("div",{onMouseLeave:()=>{p(!1)}},e.createElement(t,{isOpen:a,text:"Hover over anywhere else to close the tooltip."},"Tooltip should be over me"),e.createElement(o,{style:{marginLeft:8},onClick:()=>{p(u=>!u)}},"Click Me."))};i.parameters={docs:{description:{story:"Tooltip can controlled to be open or closed by passing an optional isOpen property"}}};const r=()=>e.createElement("div",{style:{height:"300vh",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"120vh"}},e.createElement(t,{isOpen:!0,text:"This tooltip flips when scrolled to the top of the viewport"},e.createElement(o,null,"Scroll down to see me flip")));r.parameters={docs:{description:{story:"(Must be viewed as a standalone page) Scroll the page so the trigger is near the top of the viewport. The tooltip will flip from top to bottom when there isn't enough space above."}}};const s=()=>e.createElement("div",{style:{resize:"horizontal",overflow:"hidden",display:"flex",justifyContent:"flex-end",alignItems:"center",outline:"1px dashed hotpink",padding:"var(--space-l)",width:"100%",minWidth:"200px",height:"200px"}},e.createElement(t,{isOpen:!0,text:"This tooltip has enough text to cause a collision with the right edge of the viewport"},e.createElement(o,null,"Trigger")));s.parameters={docs:{description:{story:"Demonstrates arrow tracking behavior near viewport edges. Drag the bottom-right resize handle to move the trigger away from the right edge and observe how the arrow does (or does not) stay aligned with the anchor."}}};const l=()=>e.createElement("div",{style:{height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"var(--space-xl)"}},e.createElement("div",{style:{display:"flex",gap:"var(--space-l)"}},e.createElement(t,{text:"Tooltip on top",side:"top"},e.createElement(o,null,"Top")),e.createElement(t,{text:"Tooltip on the right",side:"right"},e.createElement(o,null,"Right")),e.createElement(t,{text:"Tooltip on the bottom",side:"bottom"},e.createElement(o,null,"Bottom")),e.createElement(t,{text:"Tooltip on the left",side:"left"},e.createElement(o,null,"Left"))),e.createElement("div",{style:{display:"flex",gap:"var(--space-l)",alignItems:"center"}},e.createElement(t,{text:"Icon button tooltip"},e.createElement(g,{kind:"action",name:"info"})),e.createElement(t,{text:"This tooltip has a longer message to demonstrate text wrapping behavior within the tooltip container"},e.createElement(o,{kind:"secondary"},"Long text")),e.createElement(t,{text:"Inline tooltip"},e.createElement("span",{style:{textDecoration:"underline dotted",cursor:"help"}},"hover this text"))));l.parameters={docs:{description:{story:"Multiple tooltips can coexist on the same page. Each tooltip operates independently, showing on hover/focus of its own trigger element."}}};const A={title:"Components/Tooltip",component:t};n.__docgenInfo={description:"",methods:[],displayName:"WithTextInput"};m.__docgenInfo={description:"",methods:[],displayName:"WithTooltipAsMenuButtonTrigger"};i.__docgenInfo={description:"",methods:[],displayName:"ControlledTooltip"};r.__docgenInfo={description:"",methods:[],displayName:"ScrollingBehavior"};s.__docgenInfo={description:"",methods:[],displayName:"ArrowTracking"};l.__docgenInfo={description:"",methods:[],displayName:"MultipleTooltips"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Tooltip {...args} />
  </div>`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <TextInput label="Account Number" endContent={<Tooltip text="If you don't have an account number, enter your customer ID">
        <span className="narmi-icon-info"></span>
      </Tooltip>} />`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  height: "300vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "120vh"
}}>
    <Tooltip isOpen={true} text="This tooltip flips when scrolled to the top of the viewport">
      <Button>Scroll down to see me flip</Button>
    </Tooltip>
  </div>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...l.parameters?.docs?.source}}};const W=["Overview","WithTextInput","WithTooltipAsMenuButtonTrigger","ControlledTooltip","ScrollingBehavior","ArrowTracking","MultipleTooltips"];export{s as ArrowTracking,i as ControlledTooltip,l as MultipleTooltips,c as Overview,r as ScrollingBehavior,n as WithTextInput,m as WithTooltipAsMenuButtonTrigger,W as __namedExportsOrder,A as default};
