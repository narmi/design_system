import{e,r as p}from"./iframe-BBMgbPSV.js";import{V as u,M as t}from"./index-_uHEE5OI.js";import{D as h}from"./index-3Nwaz-N2.js";import{I}from"./index-Czgsdsp3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Sb7vjpsS.js";import"./index-RvS1aOr8.js";import"./dom-D1QlgNSL.js";import"./index-OfYZ9Rdb.js";import"./index-DxviwFbK.js";import"./Dialog-owgeHSys.js";import"./context-Bh0lWQ04.js";import"./useFocusRing-BcU126ks.js";import"./selection-CAkQuomx.js";import"./index-DD9-6ILY.js";import"./AsElement-BJzXnSbu.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-DwC7xviL.js";import"./Combination-wYkH_19D.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";import"./CSSTransition-DanaH3KC.js";const m=a=>e.createElement(t,a),n=m.bind({});n.args={label:"Overview example",children:[e.createElement(t.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),e.createElement(t.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),e.createElement(t.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}})]};const o=m.bind({});o.args={...n.args,showDropdownIndicator:!0,renderTrigger:a=>e.createElement("span",{className:"button--reset fontColor--azul fontWeight--semibold"},"More options..."," ",e.createElement("span",{className:`padding--right narmi-icon-corner-${a?"right-up":"left-down"}`}))};o.parameters={docs:{description:{story:"You may use the `renderTrigger` render prop as an alternative to passing in a `triggerIcon`. In this example, we use the `isOpen` argument to conditionally set an icon in the render function."}}};const r=()=>e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",outline:"1px dotted hotpink"}},e.createElement(t,{label:"Menu button on right side of viewport"},e.createElement(t.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),e.createElement(t.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),e.createElement(t.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}})));r.parameters={docs:{description:{story:"We often render a MenuButton on the right hand of the viewport. The popover menu will reposition itself so it it always visible."}}};const l=()=>{const[a,c]=p.useState();return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>{c(d=>!d)}},"Open Dialog"),e.createElement(h,{isOpen:a,title:"Dialog with a MenuButton",onUserDismiss:()=>{c(!1)}},e.createElement("p",null,"Check out this menubutton"),e.createElement(t,{label:"In a dialog menubutton"},e.createElement(t.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),e.createElement(t.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),e.createElement(t.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}}))))},s=()=>e.createElement(t,{label:"Menu button on right side of viewport"},e.createElement(t.Item,{key:"edit",endIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),e.createElement(t.Item,{key:"screenshot",endIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),e.createElement(t.Item,{key:"deposit",endIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}})),i=()=>e.createElement(t,{side:"right",renderTrigger:()=>e.createElement(I,{kind:"action",name:"sparkle"}),footerItem:e.createElement(t.Item,{label:"Help me write",onSelect:()=>alert("Footer!")})},e.createElement(t.Item,{label:"Polish",onSelect:()=>alert("Polish!")}),e.createElement(t.Item,{label:"Formalize",onSelect:()=>alert("Formalize!")}),e.createElement(t.Item,{label:"Elaborate",onSelect:()=>alert("Elaborate!")}),e.createElement(t.Item,{label:"Shorten",onSelect:()=>alert("Shorten!")})),j={title:"Components/MenuButton",component:t,argTypes:{triggerIcon:{options:["",...u]}}};r.__docgenInfo={description:"",methods:[],displayName:"AutomaticPositioning"};l.__docgenInfo={description:"",methods:[],displayName:"InADialog"};s.__docgenInfo={description:"",methods:[],displayName:"WithEndIcons"};i.__docgenInfo={description:"",methods:[],displayName:"WithFooterContent"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <MenuButton {...args} />",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MenuButton {...args} />",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  justifyContent: "flex-end",
  outline: "1px dotted hotpink"
}}>
    <MenuButton label="Menu button on right side of viewport">
      <MenuButton.Item key="edit" startIcon="edit-2" label="Edit" onSelect={() => {
      alert("edit handler");
    }} />
      <MenuButton.Item key="screenshot" startIcon="camera" label="Screenshot" onSelect={() => {
      alert("screenshot handler");
    }} />
      <MenuButton.Item key="deposit" startIcon="bank" label="Deposit" onSelect={() => {
      alert("deposit handler");
    }} />
    </MenuButton>
  </div>`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState();
  return <>
      <button onClick={() => {
      setIsOpen(open => !open);
    }}>
        Open Dialog
      </button>
      <Dialog isOpen={isOpen} title="Dialog with a MenuButton" onUserDismiss={() => {
      setIsOpen(false);
    }}>
        <p>Check out this menubutton</p>
        <MenuButton label="In a dialog menubutton">
          <MenuButton.Item key="edit" startIcon="edit-2" label="Edit" onSelect={() => {
          alert("edit handler");
        }} />
          <MenuButton.Item key="screenshot" startIcon="camera" label="Screenshot" onSelect={() => {
          alert("screenshot handler");
        }} />
          <MenuButton.Item key="deposit" startIcon="bank" label="Deposit" onSelect={() => {
          alert("deposit handler");
        }} />
        </MenuButton>
      </Dialog>
    </>;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <MenuButton label="Menu button on right side of viewport">
    <MenuButton.Item key="edit" endIcon="edit-2" label="Edit" onSelect={() => {
    alert("edit handler");
  }} />
    <MenuButton.Item key="screenshot" endIcon="camera" label="Screenshot" onSelect={() => {
    alert("screenshot handler");
  }} />
    <MenuButton.Item key="deposit" endIcon="bank" label="Deposit" onSelect={() => {
    alert("deposit handler");
  }} />
  </MenuButton>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <MenuButton side="right" renderTrigger={() => <IconButton kind="action" name="sparkle" />} footerItem={<MenuButton.Item label="Help me write" onSelect={() => alert("Footer!")} />}>
      <MenuButton.Item label="Polish" onSelect={() => alert("Polish!")} />
      <MenuButton.Item label="Formalize" onSelect={() => alert("Formalize!")} />
      <MenuButton.Item label="Elaborate" onSelect={() => alert("Elaborate!")} />
      <MenuButton.Item label="Shorten" onSelect={() => alert("Shorten!")} />
    </MenuButton>;
}`,...i.parameters?.docs?.source}}};const H=["Overview","CustomTrigger","AutomaticPositioning","InADialog","WithEndIcons","WithFooterContent"];export{r as AutomaticPositioning,o as CustomTrigger,l as InADialog,n as Overview,s as WithEndIcons,i as WithFooterContent,H as __namedExportsOrder,j as default};
