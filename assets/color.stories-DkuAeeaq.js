import{e}from"./iframe-B4XyxN82.js";import{T as n,t as c,c as l}from"./TokenTable-ClKIn_RS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";const g={title:"Design Tokens/Color"},p=m=>e.createElement(n,m),o=p.bind({});o.args={previewType:"color",rows:c(l,"narmi","color").filter(({name:m})=>!new RegExp(/[0-9]/).test(m))};const r=()=>e.createElement(e.Fragment,null,e.createElement("h2",null,"Theme Colors"),e.createElement(n,{previewType:"color",rows:c(l,"theme","theme")})),s=()=>e.createElement(e.Fragment,null,e.createElement("h2",null,"Background Colors"),e.createElement(n,{previewType:"color",rows:c(l,"background","bgColor")})),a=()=>e.createElement(e.Fragment,null,e.createElement("h2",null,"System Colors"),e.createElement(n,{previewType:"color",rows:c(l,"system","color")})),t=()=>e.createElement(e.Fragment,null,e.createElement("h2",null,"Alpha Values"),e.createElement(n,{rows:c(l,"alpha","alpha")}));r.__docgenInfo={description:"",methods:[],displayName:"Theme"};s.__docgenInfo={description:"",methods:[],displayName:"Background"};a.__docgenInfo={description:"",methods:[],displayName:"System"};t.__docgenInfo={description:"",methods:[],displayName:"Transparency"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <TokenTable {...args} />",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <>
    <h2>Theme Colors</h2>
    <TokenTable previewType="color" rows={toTokenRows(color, "theme", "theme")} />
  </>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <>
    <h2>Background Colors</h2>
    <TokenTable previewType="color" rows={toTokenRows(color, "background", "bgColor")} />
  </>`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <>
    <h2>System Colors</h2>
    <TokenTable previewType="color" rows={toTokenRows(color, "system", "color")} />
  </>`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <>
    <h2>Alpha Values</h2>
    <TokenTable rows={toTokenRows(color, "alpha", "alpha")} />
  </>`,...t.parameters?.docs?.source}}};const w=["Base","Theme","Background","System","Transparency"];export{s as Background,o as Base,a as System,r as Theme,t as Transparency,w as __namedExportsOrder,g as default};
