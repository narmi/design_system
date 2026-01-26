import{e}from"./iframe-DTtOA2my.js";import{R as t}from"./index-CDO5PLff.js";import{T as a}from"./index-_2lM_CWq.js";import"./preload-helper-PPVm8Dsz.js";import"./AsElement-CpqWjTKE.js";import"./index-RvS1aOr8.js";import"./index-B6AE_n2P.js";import"./index-D8tmXPKq.js";import"./selection-CAkQuomx.js";const m=({title:r,children:l})=>e.createElement("div",{className:"nds-formSection fontFamily--body"},e.createElement(t,{alignItems:"center",gapSize:"xs"},e.createElement(t.Item,{shrink:!0},e.createElement("h3",{className:"fontColor--secondary fontSize--xs fontFamily--body"},r)),e.createElement(t.Item,null,e.createElement("div",{style:{width:"100%",height:"var(--font-size-default)"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",height:"var(--font-size-default)",width:"100%"},e.createElement("line",{x1:"0%",y1:"50%",x2:"100%",y2:"50%",stroke:"var(--font-color-hint)",strokeWidth:"1"}))))),l);m.__docgenInfo={description:"A sectioning element for forms that renders a label and line above the section",methods:[],displayName:"FormSection",props:{title:{description:"Title of form section",type:{name:"string"},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const s=r=>e.createElement(m,r),o=s.bind({});o.args={title:"Personal Details"};const n=r=>e.createElement(m,r,e.createElement("div",{className:"margin--bottom"},e.createElement(t,{alignItems:"center"},e.createElement(t.Item,null,e.createElement(a,{label:"Name"})),e.createElement(t.Item,null,e.createElement(a,{label:"Email",type:"email"})))),e.createElement("div",{className:"margin--bottom"},e.createElement(t,{alignItems:"center"},e.createElement(t.Item,{shrink:!0},e.createElement(a,{label:"Phone number",defaultValue:"(555) 867-5309",type:"tel"})),e.createElement(t.Item,null,e.createElement(a,{label:"Street Address"})))));n.args={title:"Contact Information"};const h={title:"Components/FormSection",component:m};n.__docgenInfo={description:"",methods:[],displayName:"WithInputs"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <FormSection {...args} />",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <FormSection {...args}>
    <div className="margin--bottom">
      <Row alignItems="center">
        <Row.Item>
          <TextInput label={"Name"} />
        </Row.Item>
        <Row.Item>
          <TextInput label={"Email"} type={"email"} />
        </Row.Item>
      </Row>
    </div>
    <div className="margin--bottom">
      <Row alignItems="center">
        <Row.Item shrink>
          <TextInput label={"Phone number"} defaultValue={"(555) 867-5309"} type={"tel"} />
        </Row.Item>
        <Row.Item>
          <TextInput label={"Street Address"} />
        </Row.Item>
      </Row>
    </div>
  </FormSection>`,...n.parameters?.docs?.source}}};const f=["Overview","WithInputs"];export{o as Overview,n as WithInputs,f as __namedExportsOrder,h as default};
