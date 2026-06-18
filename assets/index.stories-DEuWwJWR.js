import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-sqE9WaiT.js";import{n as r,t as i}from"./Popover-BL7ljUxo.js";import{n as a,t as o}from"./DateInput-5jqrNBiP.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{s=t(n()),a(),r(),c=(e,t=0)=>`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()+t}`,l=e=>s.createElement(o,e),u=l.bind({}),u.args={label:`Date of Birth`},d=l.bind({}),d.args={label:`Select any date (except for today or tomorrow)`,disableDates:[c(new Date),c(new Date,1)]},f=()=>s.createElement(o,{label:`Select a date`,defaultDate:`2021-10-22`}),p=l.bind({}),p.args={altInput:!0,altFormat:`m/d/Y`,label:`Date in input will follow m/d/Y format`},p.parameters={docs:{description:{story:"The `altInput` prop will make the input show a date in an alternate format defined by `altFormat`. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options."}}},m=()=>{let e=s.createElement(`div`,{className:`padding--all`},s.createElement(`div`,{className:`padding--bottom`},s.createElement(o,{label:`Start Date`,placeholder:`YYYY-MM-DD`,disablePortal:!0})),s.createElement(`div`,{className:`padding--bottom`},s.createElement(o,{label:`End Date`,placeholder:`YYYY-MM-DD`,disablePortal:!0})));return s.createElement(`div`,{style:{height:`200px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`}},s.createElement(i,{content:e},s.createElement(`button`,null,`Click to show popover`)))},m.parameters={docs:{description:{story:"By default, `DateInput` appends to the document body. Most of the time, this is fine, but when using inside of another modal that uses 'click outside' behavior, it can be helpful to render the `DateInput` calendar in-place by passing `disablePortal={true}`"}}},h={title:`Components/DateInput`,component:o},f.__docgenInfo={description:``,methods:[],displayName:`WithDefaultDate`},m.__docgenInfo={description:``,methods:[],displayName:`DisablePortal`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <DateInput {...args} />`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <DateInput {...args} />`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <DateInput label={"Select a date"} defaultDate="2021-10-22" />;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <DateInput {...args} />`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},g=[`Overview`,`WithDisabledDates`,`WithDefaultDate`,`AltInput`,`DisablePortal`]}))();export{p as AltInput,m as DisablePortal,u as Overview,f as WithDefaultDate,d as WithDisabledDates,g as __namedExportsOrder,h as default};