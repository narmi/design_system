import{e,r as u}from"./iframe-DLQfBhti.js";import{V as h,M as t}from"./index-DwJ-Mje4.js";import{D as I}from"./index-LDwACfXM.js";import{I as b}from"./index-KzfTUW8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./downshift.esm-_jPeKYMC.js";import"./tslib.es6-Dem0CNzv.js";import"./index-DQ8AJaGN.js";import"./selection-CLgilsmn.js";import"./index-B1hTo1QF.js";import"./AsElement-0F8I9pB0.js";import"./index-BQnU-L5S.js";import"./index-B-echgC1.js";import"./index-35S7HnGr.js";import"./index-RVei2n80.js";import"./Combination-B5wAISBM.js";const m=l=>e.createElement(t,l),n=m.bind({});n.args={label:"Overview example",children:[e.createElement(t.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),e.createElement(t.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),e.createElement(t.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}})]};const o=m.bind({});o.args={...n.args,showDropdownIndicator:!0,renderTrigger:l=>e.createElement("span",{className:"button--reset fontColor--azul fontWeight--semibold"},"More options..."," ",e.createElement("span",{className:`padding--right narmi-icon-corner-${l?"right-up":"left-down"}`}))};o.parameters={docs:{description:{story:"You may use the `renderTrigger` render prop as an alternative to passing in a `triggerIcon`. In this example, we use the `isOpen` argument to conditionally set an icon in the render function."}}};const r=()=>e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",outline:"1px dotted hotpink"}},e.createElement(t,{label:"Menu button on right side of viewport"},e.createElement(t.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),e.createElement(t.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),e.createElement(t.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}})));r.parameters={docs:{description:{story:"We often render a MenuButton on the right hand of the viewport. The popover menu will reposition itself so it it always visible."}}};const s=()=>{const[l,d]=u.useState();return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>{d(p=>!p)}},"Open Dialog"),e.createElement(I,{isOpen:l,title:"Dialog with a MenuButton",onUserDismiss:()=>{d(!1)}},e.createElement("p",null,"Check out this menubutton"),e.createElement(t,{label:"In a dialog menubutton"},e.createElement(t.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),e.createElement(t.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),e.createElement(t.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}}))))},i=()=>e.createElement(t,{label:"Menu button on right side of viewport"},e.createElement(t.Item,{key:"edit",endIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),e.createElement(t.Item,{key:"screenshot",endIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),e.createElement(t.Item,{key:"deposit",endIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}})),c=()=>e.createElement(t,{side:"right",renderTrigger:()=>e.createElement(b,{kind:"action",name:"sparkle"}),footerItem:e.createElement(t.Item,{label:"Help me write",onSelect:()=>alert("Footer!")})},e.createElement(t.Item,{label:"Polish",onSelect:()=>alert("Polish!")}),e.createElement(t.Item,{label:"Formalize",onSelect:()=>alert("Formalize!")}),e.createElement(t.Item,{label:"Elaborate",onSelect:()=>alert("Elaborate!")}),e.createElement(t.Item,{label:"Shorten",onSelect:()=>alert("Shorten!")})),a=()=>e.createElement("div",{className:"style-isolation-parent"},e.createElement("style",null,`
      .style-isolation-parent * {
        display: flex;
        font-size: 24px;
        font-weight: 900;
        color: purple;
      }
    `),e.createElement(t,{label:"Should render normally"},e.createElement(t.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>alert("edit")}),e.createElement(t.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>alert("screenshot")}),e.createElement(t.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>alert("deposit")})));a.parameters={docs:{description:{story:"Demonstrates that the dropdown menu is visually isolated from broad parent selectors (e.g. `.parent * { ... }`). Menu items should render with standard design system styles."}}};const T={title:"Components/MenuButton",component:t,argTypes:{triggerIcon:{options:["",...h]}}};r.__docgenInfo={description:"",methods:[],displayName:"AutomaticPositioning"};s.__docgenInfo={description:"",methods:[],displayName:"InADialog"};i.__docgenInfo={description:"",methods:[],displayName:"WithEndIcons"};c.__docgenInfo={description:"",methods:[],displayName:"WithFooterContent"};a.__docgenInfo={description:"",methods:[],displayName:"StyleIsolation"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <MenuButton {...args} />",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MenuButton {...args} />",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <MenuButton label="Menu button on right side of viewport">
    <MenuButton.Item key="edit" endIcon="edit-2" label="Edit" onSelect={() => {
    alert("edit handler");
  }} />
    <MenuButton.Item key="screenshot" endIcon="camera" label="Screenshot" onSelect={() => {
    alert("screenshot handler");
  }} />
    <MenuButton.Item key="deposit" endIcon="bank" label="Deposit" onSelect={() => {
    alert("deposit handler");
  }} />
  </MenuButton>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <MenuButton side="right" renderTrigger={() => <IconButton kind="action" name="sparkle" />} footerItem={<MenuButton.Item label="Help me write" onSelect={() => alert("Footer!")} />}>
      <MenuButton.Item label="Polish" onSelect={() => alert("Polish!")} />
      <MenuButton.Item label="Formalize" onSelect={() => alert("Formalize!")} />
      <MenuButton.Item label="Elaborate" onSelect={() => alert("Elaborate!")} />
      <MenuButton.Item label="Shorten" onSelect={() => alert("Shorten!")} />
    </MenuButton>;
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <div className="style-isolation-parent">
    <style>{\`
      .style-isolation-parent * {
        display: flex;
        font-size: 24px;
        font-weight: 900;
        color: purple;
      }
    \`}</style>
    <MenuButton label="Should render normally">
      <MenuButton.Item key="edit" startIcon="edit-2" label="Edit" onSelect={() => alert("edit")} />
      <MenuButton.Item key="screenshot" startIcon="camera" label="Screenshot" onSelect={() => alert("screenshot")} />
      <MenuButton.Item key="deposit" startIcon="bank" label="Deposit" onSelect={() => alert("deposit")} />
    </MenuButton>
  </div>`,...a.parameters?.docs?.source}}};const A=["Overview","CustomTrigger","AutomaticPositioning","InADialog","WithEndIcons","WithFooterContent","StyleIsolation"];export{r as AutomaticPositioning,o as CustomTrigger,s as InADialog,n as Overview,a as StyleIsolation,i as WithEndIcons,c as WithFooterContent,A as __namedExportsOrder,T as default};
