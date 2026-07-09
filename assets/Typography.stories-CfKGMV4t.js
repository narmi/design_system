import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{X as r}from"./iframe-D0FPaLQ2.js";var i=e({HelperClassesList:()=>l,SettingContext:()=>s,StyleElements:()=>c,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u,d=t((()=>{a=n(r()),o={title:`Style/Typography`,tags:[`autodocs`,`!dev`]},s=()=>a.createElement(a.Fragment,null,a.createElement(`div`,{className:`nds-typography`},a.createElement(`h2`,null,`Heading inside typography context`),a.createElement(`p`,null,`Paragraph inside of typography context`)),a.createElement(`h2`,null,`Heading outside of typography context`),a.createElement(`p`,null,`Paragraph outside of typography context`)),c=()=>a.createElement(`div`,{className:`nds-typography`},a.createElement(`h1`,null,`Heading level 1`),a.createElement(`h2`,null,`Heading level 2`),a.createElement(`h3`,null,`Heading level 3`),a.createElement(`h4`,null,`Heading level 4`),a.createElement(`h5`,null,`Heading level 5`),a.createElement(`h6`,null,`Heading level 6`),a.createElement(`p`,null,`Paragraph`)),l=()=>a.createElement(a.Fragment,null,a.createElement(`div`,{className:`nds-typography`},a.createElement(`h3`,{className:`fontColor--azul`},`Heading level 3 inside context with "azul" color override`),a.createElement(`p`,{className:`fontSize--xs fontWeight--semibold`},`Paragraph with "xs" size override and "semibold" weight override`)),a.createElement(`h1`,{className:`fontFamily--heading fontSize--xl fontWeight--bold fontColor--heading`},`Heading outside of typography context; styled with helpers only`)),s.__docgenInfo={description:``,methods:[],displayName:`SettingContext`},c.__docgenInfo={description:``,methods:[],displayName:`StyleElements`},l.__docgenInfo={description:``,methods:[],displayName:`HelperClassesList`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <>
    <div className="nds-typography">
      <h2>Heading inside typography context</h2>
      <p>Paragraph inside of typography context</p>
    </div>

    <h2>Heading outside of typography context</h2>
    <p>Paragraph outside of typography context</p>
  </>`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div className="nds-typography">
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    <h5>Heading level 5</h5>
    <h6>Heading level 6</h6>
    <p>Paragraph</p>
  </div>`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <>
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
  </>`,...l.parameters?.docs?.source}}},u=[`SettingContext`,`StyleElements`,`HelperClassesList`]}));d();export{l as HelperClassesList,s as SettingContext,c as StyleElements,u as __namedExportsOrder,o as default,d as n,i as t};