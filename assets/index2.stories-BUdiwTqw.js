import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DzUeIiSQ.js";import{n as r,r as i}from"./Button-CA4utsYj.js";import{t as a}from"./iconNames-BuGAwI5s.js";import{n as o,t as s}from"./TextInput-B_I35EyW.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{c=e(n()),o(),i(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d=e=>c.createElement(s,e),f=d.bind({}),f.args={label:`TextInput Label`},p={name:`Interaction: Accepts typed input`,render:()=>c.createElement(s,{label:`Full name`}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:/full name/i});await t.type(n,`Ada Lovelace`),await u(()=>l(n).toHaveValue(`Ada Lovelace`))}},m={name:`Interaction: Clears input on button click`,render:()=>c.createElement(()=>{let[e,t]=(0,c.useState)(``);return c.createElement(s,{label:`Search`,value:e,onChange:e=>t(e.target.value),showClearButton:!0})},null),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:/search/i});await t.type(n,`hello`),await u(()=>l(n).toHaveValue(`hello`)),await t.click(e.getByRole(`button`,{name:/clear/i})),await u(()=>l(n).toHaveValue(``))}},h={name:`Interaction: Updates character counter`,render:()=>c.createElement(s,{label:`Bio`,maxLength:20}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:/bio/i});l(e.getByText(`0/20`)).toBeInTheDocument(),await t.type(n,`hello`),await u(()=>l(e.getByText(`5/20`)).toBeInTheDocument())}},g=()=>c.createElement(`div`,{className:`nds-typography`},c.createElement(`div`,{className:`storybook-4col`},c.createElement(s,{label:`Label`}),c.createElement(s,null),c.createElement(s,{label:`Label`,defaultValue:`Text`}),c.createElement(s,{label:`Label`,defaultValue:`Text`,error:`Error message`}),c.createElement(s,{label:`Label`,defaultValue:`Disabled`,disabled:!0}),c.createElement(s,{label:`Phone number`,defaultValue:`(555) 867-5309`,type:`tel`}),c.createElement(s,{type:`date`,label:`Test Quotes`,formatter:e=>e.replace(`“`,`"`).replace(`”`,`"`)}),c.createElement(s,{label:`Test Quotes`,formatter:e=>e.replace(`“`,`"`).replace(`”`,`"`)}),c.createElement(`form`,null,c.createElement(s,{label:`Secret phrase`,type:`password`,autoComplete:`on`})),c.createElement(s,{type:`text`,label:`Text`,maxLength:10}),c.createElement(s,{type:`text`,label:`Text`,maxLength:10,error:`Error message`}),c.createElement(s,{type:`text`,label:`Text`,defaultValue:`Text input that is too long`,maxLength:10}))),_=()=>c.createElement(c.Fragment,null,c.createElement(s,{multiline:!0}),c.createElement(s,{multiline:!0,label:`Multiline with label`})),v=d.bind({}),v.args={label:`Search`,startIcon:`search`},y=d.bind({}),y.args={label:`Search`,endContent:c.createElement(`button`,{className:`button--reset`},c.createElement(`i`,{className:`narmi-icon-info`}))},b=()=>{let[e,t]=(0,c.useState)(`#915F6D`);return c.createElement(`div`,{className:`nds-typography`},c.createElement(`h1`,{style:{marginBottom:`1em`}},`Edit Primary Accessible Color`),c.createElement(`div`,{style:{display:`flex`,alignItems:`center`}},c.createElement(s,{label:`Hex Code`,defaultValue:`915F6D`,formatter:e=>e.replace(`#`,``),onBlur:e=>{t(`#`+e.target.value)}}),c.createElement(`span`,{className:`narmi-icon-solid-circle`,style:{marginLeft:`20px`,color:e,fontSize:`50px`}})))},x=()=>c.createElement(s,{search:!0}),S=()=>c.createElement(s,{showClearButton:!0}),C=()=>{let[e,t]=(0,c.useState)(``);return c.createElement(c.Fragment,null,c.createElement(s,{onChange:e=>t(e.target.value),showClearButton:!0}),c.createElement(`div`,null,`Your text is: `,e))},w=()=>{let[e,t]=(0,c.useState)(null);return c.createElement(c.Fragment,null,c.createElement(s,{type:`datetime-local`,label:`Start datetime`,onChange:e=>t(e.target.value)}),c.createElement(`div`,{className:`margin--top--xxs`},`Value: `,e))},T=()=>{let[e,t]=(0,c.useState)(null);return c.createElement(c.Fragment,null,c.createElement(s,{type:`time`,label:`Start time`,onChange:e=>t(e.target.value)}),c.createElement(`div`,{className:`margin--top--xxs`},`Value: `,e))},E=()=>{let[e,t]=(0,c.useState)(!1);return c.createElement(c.Fragment,null,c.createElement(s,{type:e?`text`:`password`,label:`Password`,endContent:c.createElement(r,{kind:`plain`,label:e?`Hide`:`Show`,onClick:()=>{t(e=>!e)}})}))},D=()=>{let[e,t]=(0,c.useState)(`Default value`);return c.createElement(c.Fragment,null,c.createElement(s,{label:`Limited to 20 chars`,maxLength:20,value:e,onChange:e=>{t(e.target.value)}}))},O={title:`Components/TextInput`,component:s,argTypes:{startIcon:{options:[``,...a]},endIcon:{options:[``,...a]}}},g.__docgenInfo={description:``,methods:[],displayName:`Example`},_.__docgenInfo={description:``,methods:[],displayName:`MultiLine`},b.__docgenInfo={description:``,methods:[],displayName:`AsColorInput`},x.__docgenInfo={description:``,methods:[],displayName:`Search`},S.__docgenInfo={description:``,methods:[],displayName:`WithClearInputIcon`},C.__docgenInfo={description:``,methods:[],displayName:`WithClearInputIconAndOnChange`},w.__docgenInfo={description:``,methods:[],displayName:`DateTime`},T.__docgenInfo={description:``,methods:[],displayName:`Time`},E.__docgenInfo={description:``,methods:[],displayName:`PasswordShowHide`},D.__docgenInfo={description:``,methods:[],displayName:`WithMaxLength`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <TextInput {...args} />`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Accepts typed input",
  render: () => <TextInput label="Full name" />,
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
}`,...p.parameters?.docs?.source},description:{story:`Interaction test verifying that typing updates the input value.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Clears input on button click",
  render: () => {
    const ClearableInput = () => {
      const [value, setValue] = useState("");
      return <TextInput label="Search" value={value} onChange={e => setValue(e.target.value)} showClearButton />;
    };
    return <ClearableInput />;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole("textbox", {
      name: /search/i
    });
    await userEvent.type(input, "hello");
    await waitFor(() => expect(input).toHaveValue("hello"));

    // the clear button only renders once there is a value
    await userEvent.click(canvas.getByRole("button", {
      name: /clear/i
    }));
    await waitFor(() => expect(input).toHaveValue(""));
  }
}`,...m.parameters?.docs?.source},description:{story:`Interaction test verifying that the clear button empties the input.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Updates character counter",
  render: () => <TextInput label="Bio" maxLength={20} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole("textbox", {
      name: /bio/i
    });
    expect(canvas.getByText("0/20")).toBeInTheDocument();
    await userEvent.type(input, "hello");
    await waitFor(() => expect(canvas.getByText("5/20")).toBeInTheDocument());
  }
}`,...h.parameters?.docs?.source},description:{story:`Interaction test verifying the character counter updates as the user types.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <div className={"nds-typography"}>
      <div className="storybook-4col">
        <TextInput label={"Label"} />
        <TextInput />
        <TextInput label={"Label"} defaultValue={"Text"} />
        <TextInput label={"Label"} defaultValue={"Text"} error={"Error message"} />
        <TextInput label={"Label"} defaultValue={"Disabled"} disabled />
        <TextInput label={"Phone number"} defaultValue={"(555) 867-5309"} type={"tel"} />
        <TextInput type={"date"} label={"Test Quotes"} formatter={text => text.replace("“", '"').replace("”", '"')} />
        <TextInput label={"Test Quotes"} formatter={text => text.replace("“", '"').replace("”", '"')} />
        <form>
          <TextInput label={"Secret phrase"} type="password" autoComplete="on" />
        </form>
        <TextInput type="text" label="Text" maxLength={10} />
        <TextInput type="text" label="Text" maxLength={10} error={"Error message"} />
        <TextInput type="text" label="Text" defaultValue="Text input that is too long" maxLength={10} />
      </div>
    </div>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <TextInput multiline />
      <TextInput multiline label="Multiline with label" />
    </>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <TextInput {...args} />`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <TextInput {...args} />`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [color, setColor] = useState("#915F6D");
  return <div className={"nds-typography"}>
      <h1 style={{
      marginBottom: "1em"
    }}>Edit Primary Accessible Color</h1>
      <div style={{
      display: "flex",
      alignItems: "center"
    }}>
        <TextInput label={"Hex Code"} defaultValue="915F6D" formatter={text => text.replace("#", "")} onBlur={e => {
        setColor("#" + e.target.value);
      }} />
        <span className="narmi-icon-solid-circle" style={{
        marginLeft: "20px",
        color: color,
        fontSize: "50px"
      }}></span>
      </div>
    </div>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <TextInput search />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <TextInput showClearButton />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [text, setText] = useState("");
  return <>
      <TextInput onChange={e => setText(e.target.value)} showClearButton />
      <div>Your text is: {text}</div>
    </>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [dateTime, setDateTime] = useState(null);
  return <>
      <TextInput type="datetime-local" label="Start datetime" onChange={e => setDateTime(e.target.value)} />
      <div className="margin--top--xxs">Value: {dateTime}</div>
    </>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [time, setTime] = useState(null);
  return <>
      <TextInput type="time" label="Start time" onChange={e => setTime(e.target.value)} />
      <div className="margin--top--xxs">Value: {time}</div>
    </>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [showInputVal, setShowInputVal] = useState(false);
  return <>
      <TextInput type={showInputVal ? "text" : "password"} label="Password" endContent={<Button kind="plain" label={showInputVal ? "Hide" : "Show"} onClick={() => {
      setShowInputVal(curr => !curr);
    }} />} />
    </>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState("Default value");
  return <>
      <TextInput label="Limited to 20 chars" maxLength={20} value={inputValue} onChange={e => {
      setInputValue(e.target.value);
    }} />
    </>;
}`,...D.parameters?.docs?.source}}},k=[`Overview`,`TypesValue`,`ClearsValue`,`CharacterCounter`,`Example`,`MultiLine`,`WithIcon`,`CustomStartAndEndContent`,`AsColorInput`,`Search`,`WithClearInputIcon`,`WithClearInputIconAndOnChange`,`DateTime`,`Time`,`PasswordShowHide`,`WithMaxLength`]}))();export{b as AsColorInput,h as CharacterCounter,m as ClearsValue,y as CustomStartAndEndContent,w as DateTime,g as Example,_ as MultiLine,f as Overview,E as PasswordShowHide,x as Search,T as Time,p as TypesValue,S as WithClearInputIcon,C as WithClearInputIconAndOnChange,v as WithIcon,D as WithMaxLength,k as __namedExportsOrder,O as default};