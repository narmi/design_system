import{e}from"./iframe-Bp8Sg-0I.js";import{D as l}from"./index-D_ZIu5VW.js";import{P as d}from"./index-BHe1lNk5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVuYhh3C.js";import"./index-Chjiymov.js";import"./index-CgTX1EqX.js";import"./index-DF_nJ66N.js";import"./index-BkJe5G47.js";import"./index-RvS1aOr8.js";import"./selection-CAkQuomx.js";import"./AsElement-I2T0w9XL.js";import"./dom-DkvhKUCj.js";import"./index-BMkMClY6.js";import"./index-CZuRpPmc.js";import"./Combination-BoLispg3.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";const p=(t,c=0)=>`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()+c}`,i=t=>e.createElement(l,t),o=i.bind({});o.args={label:"Date of Birth"};const n=i.bind({});n.args={label:"Select any date (except for today or tomorrow)",disableDates:[p(new Date),p(new Date,1)]};const s=()=>e.createElement(l,{label:"Select a date",defaultDate:"2021-10-22"}),a=i.bind({});a.args={altInput:!0,altFormat:"m/d/Y",label:"Date in input will follow m/d/Y format"};a.parameters={docs:{description:{story:"The `altInput` prop will make the input show a date in an alternate format defined by `altFormat`. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options."}}};const r=()=>{const t=e.createElement("div",{className:"padding--all"},e.createElement("div",{className:"padding--bottom"},e.createElement(l,{label:"Start Date",placeholder:"YYYY-MM-DD",disablePortal:!0})),e.createElement("div",{className:"padding--bottom"},e.createElement(l,{label:"End Date",placeholder:"YYYY-MM-DD",disablePortal:!0})));return e.createElement("div",{style:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.createElement(d,{content:t},e.createElement("button",null,"Click to show popover")))};r.parameters={docs:{description:{story:"By default, `DateInput` appends to the document body. Most of the time, this is fine, but when using inside of another modal that uses 'click outside' behavior, it can be helpful to render the `DateInput` calendar in-place by passing `disablePortal={true}`"}}};const k={title:"Components/DateInput",component:l};s.__docgenInfo={description:"",methods:[],displayName:"WithDefaultDate"};r.__docgenInfo={description:"",methods:[],displayName:"DisablePortal"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <DateInput {...args} />",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <DateInput {...args} />",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <DateInput label={"Select a date"} defaultDate="2021-10-22" />;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <DateInput {...args} />",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const content = <div className="padding--all">
      <div className="padding--bottom">
        <DateInput label="Start Date" placeholder="YYYY-MM-DD" disablePortal={true} />
      </div>
      <div className="padding--bottom">
        <DateInput label="End Date" placeholder="YYYY-MM-DD" disablePortal={true} />
      </div>
    </div>;
  return <div style={{
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
      <Popover content={content}>
        <button>Click to show popover</button>
      </Popover>
    </div>;
}`,...r.parameters?.docs?.source}}};const C=["Overview","WithDisabledDates","WithDefaultDate","AltInput","DisablePortal"];export{a as AltInput,r as DisablePortal,o as Overview,s as WithDefaultDate,n as WithDisabledDates,C as __namedExportsOrder,k as default};
