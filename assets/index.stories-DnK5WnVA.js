import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-qpe1Svy0.js";import{t as r}from"./iconNames-BuGAwI5s.js";import{n as i,t as a}from"./IconButton-DXXxsTAv.js";import{n as o,t as s}from"./Dialog-C9yQ1rkm.js";import{n as c,t as l}from"./MenuButton-C4zXeju7.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{u=e(n()),c(),o(),i(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p=e=>u.createElement(l,e),m=p.bind({}),m.args={label:`Overview example`,children:[u.createElement(l.Item,{key:`edit`,startIcon:`edit-2`,label:`Edit`,onSelect:()=>{alert(`edit handler`)}}),u.createElement(l.Item,{key:`screenshot`,startIcon:`camera`,label:`Screenshot`,onSelect:()=>{alert(`screenshot handler`)}}),u.createElement(l.Item,{key:`deposit`,startIcon:`bank`,label:`Deposit`,onSelect:()=>{alert(`deposit handler`)}})]},h={name:`Interaction: Opens on click`,args:{...m.args},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`combobox`,{name:`Overview example`});d(n).toHaveAttribute(`aria-expanded`,`false`),d(e.queryByRole(`option`,{name:`Edit`})).toBeNull(),await t.click(n),await f(()=>{d(n).toHaveAttribute(`aria-expanded`,`true`),d(e.getByRole(`option`,{name:`Edit`})).toBeVisible()}),d(e.getByRole(`option`,{name:`Screenshot`})).toBeVisible(),d(e.getByRole(`option`,{name:`Deposit`})).toBeVisible()}},g=p.bind({}),g.args={...m.args,showDropdownIndicator:!0,renderTrigger:e=>u.createElement(`span`,{className:`button--reset fontColor--azul fontWeight--semibold`},`More options...`,` `,u.createElement(`span`,{className:`padding--right narmi-icon-corner-${e?`right-up`:`left-down`}`}))},g.parameters={docs:{description:{story:"You may use the `renderTrigger` render prop as an alternative to passing in a `triggerIcon`. In this example, we use the `isOpen` argument to conditionally set an icon in the render function."}}},_=()=>u.createElement(`div`,{style:{display:`flex`,justifyContent:`flex-end`,outline:`1px dotted hotpink`}},u.createElement(l,{label:`Menu button on right side of viewport`},u.createElement(l.Item,{key:`edit`,startIcon:`edit-2`,label:`Edit`,onSelect:()=>{alert(`edit handler`)}}),u.createElement(l.Item,{key:`screenshot`,startIcon:`camera`,label:`Screenshot`,onSelect:()=>{alert(`screenshot handler`)}}),u.createElement(l.Item,{key:`deposit`,startIcon:`bank`,label:`Deposit`,onSelect:()=>{alert(`deposit handler`)}}))),_.parameters={docs:{description:{story:`We often render a MenuButton on the right hand of the viewport. The popover menu will reposition itself so it it always visible.`}}},v=()=>{let[e,t]=(0,u.useState)();return u.createElement(u.Fragment,null,u.createElement(`button`,{onClick:()=>{t(e=>!e)}},`Open Dialog`),u.createElement(s,{isOpen:e,title:`Dialog with a MenuButton`,onUserDismiss:()=>{t(!1)}},u.createElement(`p`,null,`Check out this menubutton`),u.createElement(l,{label:`In a dialog menubutton`},u.createElement(l.Item,{key:`edit`,startIcon:`edit-2`,label:`Edit`,onSelect:()=>{alert(`edit handler`)}}),u.createElement(l.Item,{key:`screenshot`,startIcon:`camera`,label:`Screenshot`,onSelect:()=>{alert(`screenshot handler`)}}),u.createElement(l.Item,{key:`deposit`,startIcon:`bank`,label:`Deposit`,onSelect:()=>{alert(`deposit handler`)}}))))},y=()=>u.createElement(l,{label:`Menu button on right side of viewport`},u.createElement(l.Item,{key:`edit`,endIcon:`edit-2`,label:`Edit`,onSelect:()=>{alert(`edit handler`)}}),u.createElement(l.Item,{key:`screenshot`,endIcon:`camera`,label:`Screenshot`,onSelect:()=>{alert(`screenshot handler`)}}),u.createElement(l.Item,{key:`deposit`,endIcon:`bank`,label:`Deposit`,onSelect:()=>{alert(`deposit handler`)}})),b=()=>u.createElement(l,{side:`right`,renderTrigger:()=>u.createElement(a,{kind:`action`,name:`sparkle`}),footerItem:u.createElement(l.Item,{label:`Help me write`,onSelect:()=>alert(`Footer!`)})},u.createElement(l.Item,{label:`Polish`,onSelect:()=>alert(`Polish!`)}),u.createElement(l.Item,{label:`Formalize`,onSelect:()=>alert(`Formalize!`)}),u.createElement(l.Item,{label:`Elaborate`,onSelect:()=>alert(`Elaborate!`)}),u.createElement(l.Item,{label:`Shorten`,onSelect:()=>alert(`Shorten!`)})),x=()=>u.createElement(`div`,{className:`style-isolation-parent`},u.createElement(`style`,null,`
      .style-isolation-parent * {
        display: flex;
        font-size: 24px;
        font-weight: 900;
        color: purple;
      }
    `),u.createElement(l,{label:`Should render normally`},u.createElement(l.Item,{key:`edit`,startIcon:`edit-2`,label:`Edit`,onSelect:()=>alert(`edit`)}),u.createElement(l.Item,{key:`screenshot`,startIcon:`camera`,label:`Screenshot`,onSelect:()=>alert(`screenshot`)}),u.createElement(l.Item,{key:`deposit`,startIcon:`bank`,label:`Deposit`,onSelect:()=>alert(`deposit`)}))),x.parameters={docs:{description:{story:"Demonstrates that the dropdown menu is visually isolated from broad parent selectors (e.g. `.parent * { ... }`). Menu items should render with standard design system styles."}}},S={title:`Components/MenuButton`,component:l,argTypes:{triggerIcon:{options:[``,...r]}}},_.__docgenInfo={description:``,methods:[],displayName:`AutomaticPositioning`},v.__docgenInfo={description:``,methods:[],displayName:`InADialog`},y.__docgenInfo={description:``,methods:[],displayName:`WithEndIcons`},b.__docgenInfo={description:``,methods:[],displayName:`WithFooterContent`},x.__docgenInfo={description:``,methods:[],displayName:`StyleIsolation`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <MenuButton {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on click",
  args: {
    ...Overview.args
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const trigger = canvas.getByRole("combobox", {
      name: "Overview example"
    });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(canvas.queryByRole("option", {
      name: "Edit"
    })).toBeNull();
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true");
      expect(canvas.getByRole("option", {
        name: "Edit"
      })).toBeVisible();
    });
    expect(canvas.getByRole("option", {
      name: "Screenshot"
    })).toBeVisible();
    expect(canvas.getByRole("option", {
      name: "Deposit"
    })).toBeVisible();
  }
}`,...h.parameters?.docs?.source},description:{story:`Interaction test verifying the menu opens when the trigger is clicked.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <MenuButton {...args} />`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <MenuButton label="Menu button on right side of viewport">
    <MenuButton.Item key="edit" endIcon="edit-2" label="Edit" onSelect={() => {
    alert("edit handler");
  }} />
    <MenuButton.Item key="screenshot" endIcon="camera" label="Screenshot" onSelect={() => {
    alert("screenshot handler");
  }} />
    <MenuButton.Item key="deposit" endIcon="bank" label="Deposit" onSelect={() => {
    alert("deposit handler");
  }} />
  </MenuButton>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <MenuButton side="right" renderTrigger={() => <IconButton kind="action" name="sparkle" />} footerItem={<MenuButton.Item label="Help me write" onSelect={() => alert("Footer!")} />}>
      <MenuButton.Item label="Polish" onSelect={() => alert("Polish!")} />
      <MenuButton.Item label="Formalize" onSelect={() => alert("Formalize!")} />
      <MenuButton.Item label="Elaborate" onSelect={() => alert("Elaborate!")} />
      <MenuButton.Item label="Shorten" onSelect={() => alert("Shorten!")} />
    </MenuButton>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <div className="style-isolation-parent">
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
  </div>`,...x.parameters?.docs?.source}}},C=[`Overview`,`OpensOnClick`,`CustomTrigger`,`AutomaticPositioning`,`InADialog`,`WithEndIcons`,`WithFooterContent`,`StyleIsolation`]}))();export{_ as AutomaticPositioning,g as CustomTrigger,v as InADialog,h as OpensOnClick,m as Overview,x as StyleIsolation,y as WithEndIcons,b as WithFooterContent,C as __namedExportsOrder,S as default};