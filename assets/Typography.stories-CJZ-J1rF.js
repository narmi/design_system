import{e}from"./iframe-Bo0l4N58.js";const o={title:"Style/Typography",tags:["autodocs","!dev"]},t=()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"nds-typography"},e.createElement("h2",null,"Heading inside typography context"),e.createElement("p",null,"Paragraph inside of typography context")),e.createElement("h2",null,"Heading outside of typography context"),e.createElement("p",null,"Paragraph outside of typography context")),a=()=>e.createElement("div",{className:"nds-typography"},e.createElement("h1",null,"Heading level 1"),e.createElement("h2",null,"Heading level 2"),e.createElement("h3",null,"Heading level 3"),e.createElement("h4",null,"Heading level 4"),e.createElement("h5",null,"Heading level 5"),e.createElement("h6",null,"Heading level 6"),e.createElement("p",null,"Paragraph")),n=()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"nds-typography"},e.createElement("h3",{className:"fontColor--azul"},'Heading level 3 inside context with "azul" color override'),e.createElement("p",{className:"fontSize--xs fontWeight--semibold"},'Paragraph with "xs" size override and "semibold" weight override')),e.createElement("h1",{className:"fontFamily--heading fontSize--xl fontWeight--bold fontColor--heading"},"Heading outside of typography context; styled with helpers only"));t.__docgenInfo={description:"",methods:[],displayName:"SettingContext"};a.__docgenInfo={description:"",methods:[],displayName:"StyleElements"};n.__docgenInfo={description:"",methods:[],displayName:"HelperClassesList"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <>
    <div className="nds-typography">
      <h2>Heading inside typography context</h2>
      <p>Paragraph inside of typography context</p>
    </div>

    <h2>Heading outside of typography context</h2>
    <p>Paragraph outside of typography context</p>
  </>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <div className="nds-typography">
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    <h5>Heading level 5</h5>
    <h6>Heading level 6</h6>
    <p>Paragraph</p>
  </div>`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <>
    <div className="nds-typography">
      <h3 className="fontColor--azul">
        Heading level 3 inside context with "azul" color override
      </h3>

      <p className="fontSize--xs fontWeight--semibold">
        Paragraph with "xs" size override and "semibold" weight override
      </p>
    </div>

    <h1 className="fontFamily--heading fontSize--xl fontWeight--bold fontColor--heading">
      Heading outside of typography context; styled with helpers only
    </h1>
  </>`,...n.parameters?.docs?.source}}};const l=["SettingContext","StyleElements","HelperClassesList"],s=Object.freeze(Object.defineProperty({__proto__:null,HelperClassesList:n,SettingContext:t,StyleElements:a,__namedExportsOrder:l,default:o},Symbol.toStringTag,{value:"Module"}));export{n as H,t as S,s as T,a};
