import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-DRqKOuY3.js";import{r,t as i}from"./IconButton-D8jY0sgV.js";import{n as a,t as o}from"./Dialog-DHp9SRe_.js";import{n as s,r as c,t as l}from"./MenuButton-Cz4UXtQl.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{u=t(n()),c(),a(),r(),d=e=>u.createElement(l,e),f=d.bind({}),f.args={label:`Overview example`,children:[u.createElement(l.Item,{key:`edit`,startIcon:`edit-2`,label:`Edit`,onSelect:()=>{alert(`edit handler`)}}),u.createElement(l.Item,{key:`screenshot`,startIcon:`camera`,label:`Screenshot`,onSelect:()=>{alert(`screenshot handler`)}}),u.createElement(l.Item,{key:`deposit`,startIcon:`bank`,label:`Deposit`,onSelect:()=>{alert(`deposit handler`)}})]},p=d.bind({}),p.args={...f.args,showDropdownIndicator:!0,renderTrigger:e=>u.createElement(`span`,{className:`button--reset fontColor--azul fontWeight--semibold`},`More options...`,` `,u.createElement(`span`,{className:`padding--right narmi-icon-corner-${e?`right-up`:`left-down`}`}))},p.parameters={docs:{description:{story:"You may use the `renderTrigger` render prop as an alternative to passing in a `triggerIcon`. In this example, we use the `isOpen` argument to conditionally set an icon in the render function."}}},m=()=>u.createElement(`div`,{style:{display:`flex`,justifyContent:`flex-end`,outline:`1px dotted hotpink`}},u.createElement(l,{label:`Menu button on right side of viewport`},u.createElement(l.Item,{key:`edit`,startIcon:`edit-2`,label:`Edit`,onSelect:()=>{alert(`edit handler`)}}),u.createElement(l.Item,{key:`screenshot`,startIcon:`camera`,label:`Screenshot`,onSelect:()=>{alert(`screenshot handler`)}}),u.createElement(l.Item,{key:`deposit`,startIcon:`bank`,label:`Deposit`,onSelect:()=>{alert(`deposit handler`)}}))),m.parameters={docs:{description:{story:`We often render a MenuButton on the right hand of the viewport. The popover menu will reposition itself so it it always visible.`}}},h=()=>{let[e,t]=(0,u.useState)();return u.createElement(u.Fragment,null,u.createElement(`button`,{onClick:()=>{t(e=>!e)}},`Open Dialog`),u.createElement(o,{isOpen:e,title:`Dialog with a MenuButton`,onUserDismiss:()=>{t(!1)}},u.createElement(`p`,null,`Check out this menubutton`),u.createElement(l,{label:`In a dialog menubutton`},u.createElement(l.Item,{key:`edit`,startIcon:`edit-2`,label:`Edit`,onSelect:()=>{alert(`edit handler`)}}),u.createElement(l.Item,{key:`screenshot`,startIcon:`camera`,label:`Screenshot`,onSelect:()=>{alert(`screenshot handler`)}}),u.createElement(l.Item,{key:`deposit`,startIcon:`bank`,label:`Deposit`,onSelect:()=>{alert(`deposit handler`)}}))))},g=()=>u.createElement(l,{label:`Menu button on right side of viewport`},u.createElement(l.Item,{key:`edit`,endIcon:`edit-2`,label:`Edit`,onSelect:()=>{alert(`edit handler`)}}),u.createElement(l.Item,{key:`screenshot`,endIcon:`camera`,label:`Screenshot`,onSelect:()=>{alert(`screenshot handler`)}}),u.createElement(l.Item,{key:`deposit`,endIcon:`bank`,label:`Deposit`,onSelect:()=>{alert(`deposit handler`)}})),_=()=>u.createElement(l,{side:`right`,renderTrigger:()=>u.createElement(i,{kind:`action`,name:`sparkle`}),footerItem:u.createElement(l.Item,{label:`Help me write`,onSelect:()=>alert(`Footer!`)})},u.createElement(l.Item,{label:`Polish`,onSelect:()=>alert(`Polish!`)}),u.createElement(l.Item,{label:`Formalize`,onSelect:()=>alert(`Formalize!`)}),u.createElement(l.Item,{label:`Elaborate`,onSelect:()=>alert(`Elaborate!`)}),u.createElement(l.Item,{label:`Shorten`,onSelect:()=>alert(`Shorten!`)})),v=()=>u.createElement(`div`,{className:`style-isolation-parent`},u.createElement(`style`,null,`
      .style-isolation-parent * {
        display: flex;
        font-size: 24px;
        font-weight: 900;
        color: purple;
      }
    `),u.createElement(l,{label:`Should render normally`},u.createElement(l.Item,{key:`edit`,startIcon:`edit-2`,label:`Edit`,onSelect:()=>alert(`edit`)}),u.createElement(l.Item,{key:`screenshot`,startIcon:`camera`,label:`Screenshot`,onSelect:()=>alert(`screenshot`)}),u.createElement(l.Item,{key:`deposit`,startIcon:`bank`,label:`Deposit`,onSelect:()=>alert(`deposit`)}))),v.parameters={docs:{description:{story:"Demonstrates that the dropdown menu is visually isolated from broad parent selectors (e.g. `.parent * { ... }`). Menu items should render with standard design system styles."}}},y={title:`Components/MenuButton`,component:l,argTypes:{triggerIcon:{options:[``,...s]}}},m.__docgenInfo={description:``,methods:[],displayName:`AutomaticPositioning`},h.__docgenInfo={description:``,methods:[],displayName:`InADialog`},g.__docgenInfo={description:``,methods:[],displayName:`WithEndIcons`},_.__docgenInfo={description:``,methods:[],displayName:`WithFooterContent`},v.__docgenInfo={description:``,methods:[],displayName:`StyleIsolation`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <MenuButton {...args} />`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <MenuButton {...args} />`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <MenuButton label="Menu button on right side of viewport">
    <MenuButton.Item key="edit" endIcon="edit-2" label="Edit" onSelect={() => {
    alert("edit handler");
  }} />
    <MenuButton.Item key="screenshot" endIcon="camera" label="Screenshot" onSelect={() => {
    alert("screenshot handler");
  }} />
    <MenuButton.Item key="deposit" endIcon="bank" label="Deposit" onSelect={() => {
    alert("deposit handler");
  }} />
  </MenuButton>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <MenuButton side="right" renderTrigger={() => <IconButton kind="action" name="sparkle" />} footerItem={<MenuButton.Item label="Help me write" onSelect={() => alert("Footer!")} />}>
      <MenuButton.Item label="Polish" onSelect={() => alert("Polish!")} />
      <MenuButton.Item label="Formalize" onSelect={() => alert("Formalize!")} />
      <MenuButton.Item label="Elaborate" onSelect={() => alert("Elaborate!")} />
      <MenuButton.Item label="Shorten" onSelect={() => alert("Shorten!")} />
    </MenuButton>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <div className="style-isolation-parent">
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
  </div>`,...v.parameters?.docs?.source}}},b=[`Overview`,`CustomTrigger`,`AutomaticPositioning`,`InADialog`,`WithEndIcons`,`WithFooterContent`,`StyleIsolation`]}))();export{m as AutomaticPositioning,p as CustomTrigger,h as InADialog,f as Overview,v as StyleIsolation,g as WithEndIcons,_ as WithFooterContent,b as __namedExportsOrder,y as default};