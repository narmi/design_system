import{r as m,e}from"./iframe-Dhoj1syY.js";import{T as a}from"./index-SYWgFuOB.js";import{B as c}from"./index-CMrIKgvu.js";import{T as u}from"./index-B_U6vFT4.js";import{M as p}from"./index-B_cO0Yhg.js";import{I as d}from"./index-DqsWTG0R.js";import"./preload-helper-PPVm8Dsz.js";import"./dom-D84zkVTT.js";import"./index-Ct1-n8Bn.js";import"./index-BXeYVKsq.js";import"./index-RvS1aOr8.js";import"./AsElement-CzX8gQNo.js";import"./index-BVQ3SiQ5.js";import"./index-CPCq37cu.js";import"./index-BXDOeHJT.js";import"./selection-CAkQuomx.js";import"./Dialog-CbNW0aWq.js";import"./context-CGJums4x.js";import"./useFocusRing-s1aTppna.js";import"./index-B3jV7CD-.js";const T=n=>e.createElement("div",{style:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.createElement(a,n)),s=T.bind({});s.args={text:"I am a tooltip, which is a tool for tips",children:e.createElement(c,null,"Button with a tooltip")};const t=()=>e.createElement(u,{label:"Account Number",endContent:e.createElement(a,{text:"If you don't have an account number, enter your customer ID"},e.createElement("span",{className:"narmi-icon-info"}))});t.parameters={docs:{description:{story:"Tooltip can be used in a TextInput by passing it as the endContent prop."}}};const i=()=>{const[n,r]=m.useState(!1);return e.createElement(p,{label:"Menu button",side:"top",renderTrigger:l=>e.createElement(a,{isOpen:n&&!l,text:"i am a tip"},e.createElement(d,{kind:"action",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),name:"sparkle"}))},e.createElement(p.Item,{label:"Do something!"}),e.createElement(p.Item,{label:"Do something else"}),e.createElement(p.Item,{label:"Do another thing"}))},o=()=>{const[n,r]=m.useState(!1);return e.createElement("div",{onMouseLeave:()=>{r(!1)}},e.createElement(a,{isOpen:n,text:"Hover over anywhere else to close the tooltip."},"Tooltip should be over me"),e.createElement(c,{style:{marginLeft:8},onClick:()=>{r(l=>!l)}},"Click Me."))};o.parameters={docs:{description:{story:"Tooltip can controlled to be open or closed by passing an optional isOpen property"}}};const W={title:"Components/Tooltip",component:a};t.__docgenInfo={description:"",methods:[],displayName:"WithTextInput"};i.__docgenInfo={description:"",methods:[],displayName:"WithTooltipAsMenuButtonTrigger"};o.__docgenInfo={description:"",methods:[],displayName:"ControlledTooltip"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}>
    <Tooltip {...args} />
  </div>`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <TextInput label="Account Number" endContent={<Tooltip text="If you don't have an account number, enter your customer ID">
        <span className="narmi-icon-info"></span>
      </Tooltip>} />`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const A=["Overview","WithTextInput","WithTooltipAsMenuButtonTrigger","ControlledTooltip"];export{o as ControlledTooltip,s as Overview,t as WithTextInput,i as WithTooltipAsMenuButtonTrigger,A as __namedExportsOrder,W as default};
