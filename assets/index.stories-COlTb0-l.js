import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-LOv6PZTd.js";import{a as r,i,n as a,o,r as s,t as c}from"./selection-J6hr8rEj.js";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;t((()=>{u=e(n()),i(),o(),a(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p=c.icons.map(e=>e.properties.name).filter(Boolean),m={title:`Components/Field/Field.Text`,component:s,argTypes:{startIcon:{control:`select`,options:[null,...p]},endIcon:{control:`select`,options:[null,...p]}}},h=e=>{let[t,n]=(0,u.useState)(e.value||``);return u.createElement(s,l({},e,{value:t,onChange:n}))},g=h.bind({}),g.args={id:`email`,label:`Email Address`,value:``},_={name:`Interaction: Accepts typed input`,render:()=>u.createElement(()=>{let[e,t]=(0,u.useState)(``);return u.createElement(s,{id:`full-name`,label:`Full Name`,value:e,onChange:t})},null),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:/full name/i});await t.type(n,`Ada Lovelace`),await f(()=>d(n).toHaveValue(`Ada Lovelace`))}},v={name:`Interaction: Clears input on button click`,render:()=>u.createElement(()=>{let[e,t]=(0,u.useState)(``);return u.createElement(s,{id:`searchable`,label:`Searchable Text`,value:e,onChange:t,showClearButton:!0})},null),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:/searchable text/i});await t.type(n,`hello`),await f(()=>d(n).toHaveValue(`hello`)),await t.click(e.getByRole(`button`,{name:/clear input/i})),await f(()=>d(n).toHaveValue(``))}},y=h.bind({}),y.args={id:`username`,label:`Username`,value:``,placeholder:`Enter your username`},b=h.bind({}),b.args={id:`fullname`,label:`Full Name`,value:`Jane Smith`},x=h.bind({}),x.args={id:`credit-card`,label:`Credit Card Number`,value:``,startIcon:`credit-card`,placeholder:`#### #### #### ####`,mask:r.CCNumber},x.parameters={docs:{description:{story:"`Field.MASKS.CCNumber` is passed to `mask` in this story. The `Field.MASKS` registry contains a number of built in masks for convenience. You may also pass your own valid MakitoOptions directly to the `mask` prop."}}},S=h.bind({}),S.args={id:`email-icon`,label:`Email`,value:``,placeholder:`name@example.com`,startIcon:`mail`},C=h.bind({}),C.args={id:`password`,label:`Password`,type:`password`,value:``,endIcon:`lock`},C.parameters={docs:{description:{story:'Password masking is accomplished by passing `type="password"`'}}},w=()=>{let[e,t]=(0,u.useState)(`Sample text`);return u.createElement(s,{id:`clearable`,label:`Searchable Text`,value:e,onChange:t,showClearButton:!0,placeholder:`Type to search...`})},w.parameters={docs:{description:{story:`The clear button is only shown when the field has a value and is not disabled. Click the button to clear the input.`}}},T=h.bind({}),T.args={id:`email-error`,label:`Email Address`,value:`invalid-email`,errors:[`Please enter a valid email address`]},E=h.bind({}),E.args={id:`password-validation`,label:`Password`,value:`weak`,errors:[`Password must be at least 8 characters`,`Password must include a number`,`Password must include a special character`]},D=h.bind({}),D.args={id:`disabled-field`,label:`Disabled Field`,value:`Cannot edit this`,isDisabled:!0},O=h.bind({}),O.args={id:`disabled-error`,label:`Disabled with Error`,value:`Cannot edit`,isDisabled:!0,errors:[`This field has an error`]},k=()=>{let[e,t]=(0,u.useState)(``);return u.createElement(s,{id:`percentage`,label:`Discount`,value:e,onChange:t,endContent:u.createElement(`span`,{style:{color:`var(--font-color-secondary)`}},`%`),placeholder:`0`})},k.parameters={docs:{description:{story:"Use `endContent` to display decorative content at the end of the input."}}},A=()=>{let[e,t]=(0,u.useState)(``);return u.createElement(s,{id:`username-helper`,label:`Username`,value:e,onChange:t,placeholder:`Enter your username`,renderHelperText:()=>u.createElement(`span`,null,`Must be 3-20 characters, letters and numbers only`)})},A.parameters={docs:{description:{story:"`renderHelperText` accepts a function returning a ReactNode. The node is rendered at the end of the label row."}}},j=()=>{let[e,t]=(0,u.useState)(`(555) 123-4567`);return u.createElement(s,{id:`phone`,label:`Phone Number`,value:e,onChange:t,startIcon:`phone`,showClearButton:!0,placeholder:`(###) ###-####`,mask:r.Phone})},j.parameters={docs:{description:{story:`This example combines multiple features: icons, clear button, placeholder text, and input masking.`}}},w.__docgenInfo={description:``,methods:[],displayName:`WithClearButton`},k.__docgenInfo={description:``,methods:[],displayName:`WithEndContent`},A.__docgenInfo={description:``,methods:[],displayName:`WithHelperText`},j.__docgenInfo={description:``,methods:[],displayName:`FullyDecorated`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Accepts typed input",
  render: () => {
    const ControlledField = () => {
      const [value, setValue] = useState("");
      return <FieldText id="full-name" label="Full Name" value={value} onChange={setValue} />;
    };
    return <ControlledField />;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole("textbox", {
      name: /full name/i
    });
    await userEvent.type(input, "Ada Lovelace");
    await waitFor(() => expect(input).toHaveValue("Ada Lovelace"));
  }
}`,..._.parameters?.docs?.source},description:{story:`Interaction test verifying that typing updates the field value.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Clears input on button click",
  render: () => {
    const ClearableField = () => {
      const [value, setValue] = useState("");
      return <FieldText id="searchable" label="Searchable Text" value={value} onChange={setValue} showClearButton />;
    };
    return <ClearableField />;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole("textbox", {
      name: /searchable text/i
    });
    await userEvent.type(input, "hello");
    await waitFor(() => expect(input).toHaveValue("hello"));
    await userEvent.click(canvas.getByRole("button", {
      name: /clear input/i
    }));
    await waitFor(() => expect(input).toHaveValue(""));
  }
}`,...v.parameters?.docs?.source},description:{story:`Interaction test verifying the clear button empties the field.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("Sample text");
  return <FieldText id="clearable" label="Searchable Text" value={value} onChange={setValue} showClearButton placeholder="Type to search..." />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <FieldText id="percentage" label="Discount" value={value} onChange={setValue} endContent={<span style={{
    color: "var(--font-color-secondary)"
  }}>%</span>} placeholder="0" />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <FieldText id="username-helper" label="Username" value={value} onChange={setValue} placeholder="Enter your username" renderHelperText={() => <span>Must be 3-20 characters, letters and numbers only</span>} />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("(555) 123-4567");
  return <FieldText id="phone" label="Phone Number" value={value} onChange={setValue} startIcon="phone" showClearButton placeholder="(###) ###-####" mask={FIELD_MASKS.Phone} />;
}`,...j.parameters?.docs?.source}}},M=[`Overview`,`TypesValue`,`ClearsValue`,`WithPlaceholder`,`WithValue`,`WithMask`,`WithStartIcon`,`WithEndIcon`,`WithClearButton`,`WithErrors`,`WithMultipleErrors`,`Disabled`,`DisabledWithError`,`WithEndContent`,`WithHelperText`,`FullyDecorated`]}))();export{v as ClearsValue,D as Disabled,O as DisabledWithError,j as FullyDecorated,g as Overview,_ as TypesValue,w as WithClearButton,k as WithEndContent,C as WithEndIcon,T as WithErrors,A as WithHelperText,x as WithMask,E as WithMultipleErrors,y as WithPlaceholder,S as WithStartIcon,b as WithValue,M as __namedExportsOrder,m as default};