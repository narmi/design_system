import{e,r as u}from"./iframe-C7aKF5a4.js";import{T as t}from"./index-BdJtx2cH.js";import{B as m}from"./index-DWvHxPrp.js";import{T as h}from"./index-DXy48z0H.js";import{M as c}from"./index-CC__d90t.js";import{I as g}from"./index-kEcYavI8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dJ9uBgy4.js";import"./index-RvS1aOr8.js";import"./AsElement-CofLRk0I.js";import"./index-CdCFrfrQ.js";import"./index-B7YgzHoG.js";import"./index-Bsd30gtt.js";import"./selection-CAkQuomx.js";import"./Dialog-ZtwdFx8S.js";import"./context-CNvc33Uj.js";import"./index-BkGh_ndY.js";import"./index-D7DKuN_z.js";import"./useFocusRing-DypaRZXX.js";import"./index-DjYnzVvd.js";const T=s=>e.createElement("div",{style:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.createElement(t,s)),l=T.bind({});l.args={text:"I am a tooltip, which is a tool for tips",children:e.createElement(m,null,"Button with a tooltip")};const o=()=>e.createElement(h,{label:"Account Number",endContent:e.createElement(t,{text:"If you don't have an account number, enter your customer ID"},e.createElement("span",{className:"narmi-icon-info"}))});o.parameters={docs:{description:{story:"Tooltip can be used in a TextInput by passing it as the endContent prop."}}};const p=()=>{const[s,a]=u.useState(!1);return e.createElement(c,{label:"Menu button",side:"top",renderTrigger:d=>e.createElement(t,{isOpen:s&&!d,text:"i am a tip"},e.createElement(g,{kind:"action",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),name:"sparkle"}))},e.createElement(c.Item,{label:"Do something!"}),e.createElement(c.Item,{label:"Do something else"}),e.createElement(c.Item,{label:"Do another thing"}))},n=()=>{const[s,a]=u.useState(!1);return e.createElement("div",{onMouseLeave:()=>{a(!1)}},e.createElement(t,{isOpen:s,text:"Hover over anywhere else to close the tooltip."},"Tooltip should be over me"),e.createElement(m,{style:{marginLeft:8},onClick:()=>{a(d=>!d)}},"Click Me."))};n.parameters={docs:{description:{story:"Tooltip can controlled to be open or closed by passing an optional isOpen property"}}};const r=()=>e.createElement("div",{style:{height:"300vh",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"120vh"}},e.createElement(t,{isOpen:!0,text:"This tooltip flips when scrolled to the top of the viewport"},e.createElement(m,null,"Scroll down to see me flip")));r.parameters={docs:{description:{story:"(Must be viewed as a standalone page) Scroll the page so the trigger is near the top of the viewport. The tooltip will flip from top to bottom when there isn't enough space above."}}};const i=()=>e.createElement("div",{style:{resize:"horizontal",overflow:"hidden",display:"flex",justifyContent:"flex-end",alignItems:"center",outline:"1px dashed hotpink",padding:"var(--space-l)",width:"100%",minWidth:"200px",height:"200px"}},e.createElement(t,{isOpen:!0,text:"This tooltip has enough text to cause a collision with the right edge of the viewport"},e.createElement(m,null,"Trigger")));i.parameters={docs:{description:{story:"Demonstrates arrow tracking behavior near viewport edges. Drag the bottom-right resize handle to move the trigger away from the right edge and observe how the arrow does (or does not) stay aligned with the anchor."}}};const z={title:"Components/Tooltip",component:t};o.__docgenInfo={description:"",methods:[],displayName:"WithTextInput"};p.__docgenInfo={description:"",methods:[],displayName:"WithTooltipAsMenuButtonTrigger"};n.__docgenInfo={description:"",methods:[],displayName:"ControlledTooltip"};r.__docgenInfo={description:"",methods:[],displayName:"ScrollingBehavior"};i.__docgenInfo={description:"",methods:[],displayName:"ArrowTracking"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Tooltip {...args} />
  </div>`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <TextInput label="Account Number" endContent={<Tooltip text="If you don't have an account number, enter your customer ID">
        <span className="narmi-icon-info"></span>
      </Tooltip>} />`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  height: "300vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "120vh"
}}>
    <Tooltip isOpen={true} text="This tooltip flips when scrolled to the top of the viewport">
      <Button>Scroll down to see me flip</Button>
    </Tooltip>
  </div>`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...i.parameters?.docs?.source}}};const j=["Overview","WithTextInput","WithTooltipAsMenuButtonTrigger","ControlledTooltip","ScrollingBehavior","ArrowTracking"];export{i as ArrowTracking,n as ControlledTooltip,l as Overview,r as ScrollingBehavior,o as WithTextInput,p as WithTooltipAsMenuButtonTrigger,j as __namedExportsOrder,z as default};
