import{e,r as s}from"./iframe-5cZI04P5.js";import{V as E,T as t}from"./index-DlQUkjfl.js";import{B as y}from"./index-TpuZGUwk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUWOyih7.js";import"./index-BnAfomjG.js";import"./index-RvS1aOr8.js";import"./selection-CAkQuomx.js";import"./AsElement-DxmTNQPo.js";import"./index-D-8p0qzh.js";import"./index-Bx5zeSvS.js";const T=a=>e.createElement(t,a),l=T.bind({});l.args={label:"TextInput Label"};const o=()=>e.createElement("div",{className:"nds-typography"},e.createElement("div",{className:"storybook-4col"},e.createElement(t,{label:"Label"}),e.createElement(t,null),e.createElement(t,{label:"Label",defaultValue:"Text"}),e.createElement(t,{label:"Label",defaultValue:"Text",error:"Error message"}),e.createElement(t,{label:"Label",defaultValue:"Disabled",disabled:!0}),e.createElement(t,{label:"Phone number",defaultValue:"(555) 867-5309",type:"tel"}),e.createElement(t,{type:"date",label:"Test Quotes",formatter:a=>a.replace("“",'"').replace("”",'"')}),e.createElement(t,{label:"Test Quotes",formatter:a=>a.replace("“",'"').replace("”",'"')}),e.createElement("form",null,e.createElement(t,{label:"Secret phrase",type:"password",autoComplete:"on"})),e.createElement(t,{type:"text",label:"Text",maxLength:10}),e.createElement(t,{type:"text",label:"Text",maxLength:10,error:"Error message"}),e.createElement(t,{type:"text",label:"Text",defaultValue:"Text input that is too long",maxLength:10}))),c=()=>e.createElement(e.Fragment,null,e.createElement(t,{multiline:!0}),e.createElement(t,{multiline:!0,label:"Multiline with label"})),m=T.bind({});m.args={label:"Search",startIcon:"search"};const u=T.bind({});u.args={label:"Search",endContent:e.createElement("button",{className:"button--reset"},e.createElement("i",{className:"narmi-icon-info"}))};const i=()=>{const[a,n]=s.useState("#915F6D");return e.createElement("div",{className:"nds-typography"},e.createElement("h1",{style:{marginBottom:"1em"}},"Edit Primary Accessible Color"),e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(t,{label:"Hex Code",defaultValue:"915F6D",formatter:r=>r.replace("#",""),onBlur:r=>{n("#"+r.target.value)}}),e.createElement("span",{className:"narmi-icon-solid-circle",style:{marginLeft:"20px",color:a,fontSize:"50px"}})))},p=()=>e.createElement(t,{search:!0}),d=()=>e.createElement(t,{showClearButton:!0}),x=()=>{const[a,n]=s.useState("");return e.createElement(e.Fragment,null,e.createElement(t,{onChange:r=>n(r.target.value),showClearButton:!0}),e.createElement("div",null,"Your text is: ",a))},g=()=>{const[a,n]=s.useState(null);return e.createElement(e.Fragment,null,e.createElement(t,{type:"datetime-local",label:"Start datetime",onChange:r=>n(r.target.value)}),e.createElement("div",{className:"margin--top--xxs"},"Value: ",a))},h=()=>{const[a,n]=s.useState(null);return e.createElement(e.Fragment,null,e.createElement(t,{type:"time",label:"Start time",onChange:r=>n(r.target.value)}),e.createElement("div",{className:"margin--top--xxs"},"Value: ",a))},I=()=>{const[a,n]=s.useState(!1);return e.createElement(e.Fragment,null,e.createElement(t,{type:a?"text":"password",label:"Password",endContent:e.createElement(y,{kind:"plain",label:a?"Hide":"Show",onClick:()=>{n(r=>!r)}})}))},b=()=>{const[a,n]=s.useState("Default value");return e.createElement(e.Fragment,null,e.createElement(t,{label:"Limited to 20 chars",maxLength:20,value:a,onChange:r=>{n(r.target.value)}}))},B={title:"Components/TextInput",component:t,argTypes:{startIcon:{options:["",...E]},endIcon:{options:["",...E]}}};o.__docgenInfo={description:"",methods:[],displayName:"Example"};c.__docgenInfo={description:"",methods:[],displayName:"MultiLine"};i.__docgenInfo={description:"",methods:[],displayName:"AsColorInput"};p.__docgenInfo={description:"",methods:[],displayName:"Search"};d.__docgenInfo={description:"",methods:[],displayName:"WithClearInputIcon"};x.__docgenInfo={description:"",methods:[],displayName:"WithClearInputIconAndOnChange"};g.__docgenInfo={description:"",methods:[],displayName:"DateTime"};h.__docgenInfo={description:"",methods:[],displayName:"Time"};I.__docgenInfo={description:"",methods:[],displayName:"PasswordShowHide"};b.__docgenInfo={description:"",methods:[],displayName:"WithMaxLength"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <TextInput {...args} />",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <>
      <TextInput multiline />
      <TextInput multiline label="Multiline with label" />
    </>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <TextInput {...args} />",...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <TextInput {...args} />",...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <TextInput search />;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <TextInput showClearButton />;
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [text, setText] = useState("");
  return <>
      <TextInput onChange={e => setText(e.target.value)} showClearButton />
      <div>Your text is: {text}</div>
    </>;
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [dateTime, setDateTime] = useState(null);
  return <>
      <TextInput type="datetime-local" label="Start datetime" onChange={e => setDateTime(e.target.value)} />
      <div className="margin--top--xxs">Value: {dateTime}</div>
    </>;
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [time, setTime] = useState(null);
  return <>
      <TextInput type="time" label="Start time" onChange={e => setTime(e.target.value)} />
      <div className="margin--top--xxs">Value: {time}</div>
    </>;
}`,...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [showInputVal, setShowInputVal] = useState(false);
  return <>
      <TextInput type={showInputVal ? "text" : "password"} label="Password" endContent={<Button kind="plain" label={showInputVal ? "Hide" : "Show"} onClick={() => {
      setShowInputVal(curr => !curr);
    }} />} />
    </>;
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState("Default value");
  return <>
      <TextInput label="Limited to 20 chars" maxLength={20} value={inputValue} onChange={e => {
      setInputValue(e.target.value);
    }} />
    </>;
}`,...b.parameters?.docs?.source}}};const W=["Overview","Example","MultiLine","WithIcon","CustomStartAndEndContent","AsColorInput","Search","WithClearInputIcon","WithClearInputIconAndOnChange","DateTime","Time","PasswordShowHide","WithMaxLength"];export{i as AsColorInput,u as CustomStartAndEndContent,g as DateTime,o as Example,c as MultiLine,l as Overview,I as PasswordShowHide,p as Search,h as Time,d as WithClearInputIcon,x as WithClearInputIconAndOnChange,m as WithIcon,b as WithMaxLength,W as __namedExportsOrder,B as default};
