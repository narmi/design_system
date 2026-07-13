import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-Bq-TlzUC.js";import{n as r,t as i}from"./Button-Du8q6DTJ.js";import{t as a}from"./iconNames-oxjsxGpu.js";import{n as o,t as s}from"./TextInput-9r-3qUM5.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{c=t(n()),o(),r(),l=e=>c.createElement(s,e),u=l.bind({}),u.args={label:`TextInput Label`},d=()=>c.createElement(`div`,{className:`nds-typography`},c.createElement(`div`,{className:`storybook-4col`},c.createElement(s,{label:`Label`}),c.createElement(s,null),c.createElement(s,{label:`Label`,defaultValue:`Text`}),c.createElement(s,{label:`Label`,defaultValue:`Text`,error:`Error message`}),c.createElement(s,{label:`Label`,defaultValue:`Disabled`,disabled:!0}),c.createElement(s,{label:`Phone number`,defaultValue:`(555) 867-5309`,type:`tel`}),c.createElement(s,{type:`date`,label:`Test Quotes`,formatter:e=>e.replace(`“`,`"`).replace(`”`,`"`)}),c.createElement(s,{label:`Test Quotes`,formatter:e=>e.replace(`“`,`"`).replace(`”`,`"`)}),c.createElement(`form`,null,c.createElement(s,{label:`Secret phrase`,type:`password`,autoComplete:`on`})),c.createElement(s,{type:`text`,label:`Text`,maxLength:10}),c.createElement(s,{type:`text`,label:`Text`,maxLength:10,error:`Error message`}),c.createElement(s,{type:`text`,label:`Text`,defaultValue:`Text input that is too long`,maxLength:10}))),f=()=>c.createElement(c.Fragment,null,c.createElement(s,{multiline:!0}),c.createElement(s,{multiline:!0,label:`Multiline with label`})),p=l.bind({}),p.args={label:`Search`,startIcon:`search`},m=l.bind({}),m.args={label:`Search`,endContent:c.createElement(`button`,{className:`button--reset`},c.createElement(`i`,{className:`narmi-icon-info`}))},h=()=>{let[e,t]=(0,c.useState)(`#915F6D`);return c.createElement(`div`,{className:`nds-typography`},c.createElement(`h1`,{style:{marginBottom:`1em`}},`Edit Primary Accessible Color`),c.createElement(`div`,{style:{display:`flex`,alignItems:`center`}},c.createElement(s,{label:`Hex Code`,defaultValue:`915F6D`,formatter:e=>e.replace(`#`,``),onBlur:e=>{t(`#`+e.target.value)}}),c.createElement(`span`,{className:`narmi-icon-solid-circle`,style:{marginLeft:`20px`,color:e,fontSize:`50px`}})))},g=()=>c.createElement(s,{search:!0}),_=()=>c.createElement(s,{showClearButton:!0}),v=()=>{let[e,t]=(0,c.useState)(``);return c.createElement(c.Fragment,null,c.createElement(s,{onChange:e=>t(e.target.value),showClearButton:!0}),c.createElement(`div`,null,`Your text is: `,e))},y=()=>{let[e,t]=(0,c.useState)(null);return c.createElement(c.Fragment,null,c.createElement(s,{type:`datetime-local`,label:`Start datetime`,onChange:e=>t(e.target.value)}),c.createElement(`div`,{className:`margin--top--xxs`},`Value: `,e))},b=()=>{let[e,t]=(0,c.useState)(null);return c.createElement(c.Fragment,null,c.createElement(s,{type:`time`,label:`Start time`,onChange:e=>t(e.target.value)}),c.createElement(`div`,{className:`margin--top--xxs`},`Value: `,e))},x=()=>{let[e,t]=(0,c.useState)(!1);return c.createElement(c.Fragment,null,c.createElement(s,{type:e?`text`:`password`,label:`Password`,endContent:c.createElement(i,{kind:`plain`,label:e?`Hide`:`Show`,onClick:()=>{t(e=>!e)}})}))},S=()=>{let[e,t]=(0,c.useState)(`Default value`);return c.createElement(c.Fragment,null,c.createElement(s,{label:`Limited to 20 chars`,maxLength:20,value:e,onChange:e=>{t(e.target.value)}}))},C={title:`Components/TextInput`,component:s,argTypes:{startIcon:{options:[``,...a]},endIcon:{options:[``,...a]}}},d.__docgenInfo={description:``,methods:[],displayName:`Example`},f.__docgenInfo={description:``,methods:[],displayName:`MultiLine`},h.__docgenInfo={description:``,methods:[],displayName:`AsColorInput`},g.__docgenInfo={description:``,methods:[],displayName:`Search`},_.__docgenInfo={description:``,methods:[],displayName:`WithClearInputIcon`},v.__docgenInfo={description:``,methods:[],displayName:`WithClearInputIconAndOnChange`},y.__docgenInfo={description:``,methods:[],displayName:`DateTime`},b.__docgenInfo={description:``,methods:[],displayName:`Time`},x.__docgenInfo={description:``,methods:[],displayName:`PasswordShowHide`},S.__docgenInfo={description:``,methods:[],displayName:`WithMaxLength`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <TextInput {...args} />`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <>
      <TextInput multiline />
      <TextInput multiline label="Multiline with label" />
    </>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <TextInput {...args} />`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <TextInput {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <TextInput search />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <TextInput showClearButton />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [text, setText] = useState("");
  return <>
      <TextInput onChange={e => setText(e.target.value)} showClearButton />
      <div>Your text is: {text}</div>
    </>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [dateTime, setDateTime] = useState(null);
  return <>
      <TextInput type="datetime-local" label="Start datetime" onChange={e => setDateTime(e.target.value)} />
      <div className="margin--top--xxs">Value: {dateTime}</div>
    </>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [time, setTime] = useState(null);
  return <>
      <TextInput type="time" label="Start time" onChange={e => setTime(e.target.value)} />
      <div className="margin--top--xxs">Value: {time}</div>
    </>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [showInputVal, setShowInputVal] = useState(false);
  return <>
      <TextInput type={showInputVal ? "text" : "password"} label="Password" endContent={<Button kind="plain" label={showInputVal ? "Hide" : "Show"} onClick={() => {
      setShowInputVal(curr => !curr);
    }} />} />
    </>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState("Default value");
  return <>
      <TextInput label="Limited to 20 chars" maxLength={20} value={inputValue} onChange={e => {
      setInputValue(e.target.value);
    }} />
    </>;
}`,...S.parameters?.docs?.source}}},w=[`Overview`,`Example`,`MultiLine`,`WithIcon`,`CustomStartAndEndContent`,`AsColorInput`,`Search`,`WithClearInputIcon`,`WithClearInputIconAndOnChange`,`DateTime`,`Time`,`PasswordShowHide`,`WithMaxLength`]}))();export{h as AsColorInput,m as CustomStartAndEndContent,y as DateTime,d as Example,f as MultiLine,u as Overview,x as PasswordShowHide,g as Search,b as Time,_ as WithClearInputIcon,v as WithClearInputIconAndOnChange,p as WithIcon,S as WithMaxLength,w as __namedExportsOrder,C as default};