import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-tnY1528U.js";import{n as r,t as i}from"./Alert-QAXM4_yW.js";import{n as a,t as o}from"./Checkbox-BAEKDv_z.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{c=e(n()),a(),r(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d=e=>c.createElement(o,e),f=d.bind({}),f.args={label:`I agree to receive spam`,name:`spam`},p={name:`Interaction: Toggles on click`,render:()=>c.createElement(o,{label:`I agree to receive spam`,name:`spam`}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`checkbox`,{name:/i agree to receive spam/i});l(n).not.toBeChecked(),await t.click(n),await u(()=>l(n).toBeChecked()),await t.click(n),await u(()=>l(n).not.toBeChecked())}},m={name:`Interaction: Renders indeterminate state`,render:()=>c.createElement(o,{label:`Select all`,name:`select-all`,indeterminate:!0}),play:async({canvas:e})=>{let t=e.getByRole(`checkbox`,{name:/select all/i});await u(()=>l(t).toBePartiallyChecked())}},h=()=>{let[e,t]=(0,c.useState)(!1);return c.createElement(o,{label:`Make deposits`,name:`deposit`,checked:e,onChange:()=>t(e=>!e)})},h.parameters={docs:{description:{story:"When passing `checked`, the input becomes fully controlled and you must use the `onChange` callback to update the value of `checked`."}}},g=e=>c.createElement(c.Fragment,null,c.createElement(`h3`,{className:`margin--bottom`},`Permissions`),c.createElement(o,s({label:`See statements and documents`,name:`view`},e)),c.createElement(o,s({label:`Make deposits`,name:`deposit`},e)),c.createElement(o,s({label:`Make withdrawals`,name:`withdrawal`},e))),_=d.bind({}),_.args={label:`Checked and disabled`,name:`checked_disabled`,checked:!0,isDisabled:!0},_.parameters={docs:{description:{story:`A checkbox that is both checked and disabled.`}}},v=d.bind({}),v.args={label:`Checkbox of 'card' kind`,name:`card_kind`,kind:`card`},v.parameters={docs:{description:{story:`Renders a checkbox input and label styled as a card`}}},y=d.bind({}),y.args={kind:`table`,name:`table_kind`,label:`Select row`},y.parameters={docs:{description:{story:`Checkbox used in table row selection`}}},b=d.bind({}),b.args={markdownLabel:`I agree to receive spam from [google](https://www.google.com/)`,name:`spam`},b.parameters={docs:{description:{story:`Renders markdown when markdownLabel prop is set`}}},x=d.bind({}),x.args={name:`Custom display with stuff`,defaultChecked:!1,renderLabel:e=>{let t=e?`primary`:`warn`;return c.createElement(i,{kind:t,isActive:!0,isDismissable:!1},`I will turn green if you check the box!`)}},x.parameters={docs:{description:{story:"Renders a custom label element when `renderLabel` prop is set. Will provide the `isChecked` state to the custom element."}}},S={title:`Components/Checkbox`,component:o,argTypes:{label:{control:`text`},markdownLabel:{control:`text`},name:{control:`text`},id:{control:`text`},value:{control:`text`},error:{control:`text`},testId:{control:`text`},checked:{control:`boolean`},defaultChecked:{control:`boolean`},isDisabled:{control:`boolean`},disabled:{control:`boolean`},indeterminate:{control:`boolean`},hasError:{control:`boolean`},kind:{control:`select`,options:[`normal`,`condensed`,`card`,`table`]},onChange:{action:`changed`},renderLabel:{control:!1}}},h.__docgenInfo={description:``,methods:[],displayName:`FullyControlled`},g.__docgenInfo={description:``,methods:[],displayName:`MultipleCheckboxes`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <Checkbox {...args} />`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Toggles on click",
  render: () => <Checkbox label="I agree to receive spam" name="spam" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const checkbox = canvas.getByRole("checkbox", {
      name: /i agree to receive spam/i
    });
    expect(checkbox).not.toBeChecked();

    // check
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).toBeChecked());

    // uncheck
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).not.toBeChecked());
  }
}`,...p.parameters?.docs?.source},description:{story:`Interaction test verifying that clicking the checkbox toggles its
checked state on and back off.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Renders indeterminate state",
  render: () => <Checkbox label="Select all" name="select-all" indeterminate />,
  play: async ({
    canvas
  }) => {
    const checkbox = canvas.getByRole("checkbox", {
      name: /select all/i
    });
    await waitFor(() => expect(checkbox).toBePartiallyChecked());
  }
}`,...m.parameters?.docs?.source},description:{story:`Interaction test verifying the indeterminate state renders as a
partially checked checkbox.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = useState(false);
  return <Checkbox label="Make deposits" name="deposit" checked={isChecked} onChange={() => setIsChecked(isChecked => !isChecked)} />;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
    <h3 className="margin--bottom">Permissions</h3>
    <Checkbox label="See statements and documents" name="view" {...args} />
    <Checkbox label="Make deposits" name="deposit" {...args} />
    <Checkbox label="Make withdrawals" name="withdrawal" {...args} />
  </>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Checkbox {...args} />`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Checkbox {...args} />`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Checkbox {...args} />`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <Checkbox {...args} />`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Checkbox {...args} />`,...x.parameters?.docs?.source}}},C=[`Overview`,`Toggles`,`Indeterminate`,`FullyControlled`,`MultipleCheckboxes`,`CheckedDisabled`,`AsCard`,`TableCheckbox`,`Markdown`,`CustomLabelElements`]}))();export{v as AsCard,_ as CheckedDisabled,x as CustomLabelElements,h as FullyControlled,m as Indeterminate,b as Markdown,g as MultipleCheckboxes,f as Overview,y as TableCheckbox,p as Toggles,C as __namedExportsOrder,S as default};