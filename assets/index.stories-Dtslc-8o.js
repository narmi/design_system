import{e}from"./iframe-C3nPEcQ0.js";import{R as s}from"./index-z6idFDj1.js";import{C as o,V as m}from"./index-B3DzvL8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./AsElement-Dw3joSjZ.js";import"./index-BALe7Hct.js";import"./index-RvS1aOr8.js";const i=t=>e.createElement(o,t),r=i.bind({});r.args={value:12};const a=()=>e.createElement(s,{alignItems:"center",gapSize:"xs"},m.map((t,n)=>e.createElement(e.Fragment,{key:`${t}-${n}`},e.createElement(s.Item,{key:`${t}-${n}`,shrink:!0},e.createElement(o,{kind:t,value:n+1})),e.createElement(s.Item,{shrink:!0},e.createElement("div",{style:{textTransform:"capitalize"},className:"padding--right--xl"},t))))),k={title:"Components/Count",component:o};a.__docgenInfo={description:"",methods:[],displayName:"Kinds"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Count {...args} />",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Row alignItems="center" gapSize="xs">
    {VALID_KINDS.map((k, i) => <React.Fragment key={\`\${k}-\${i}\`}>
        <Row.Item key={\`\${k}-\${i}\`} shrink>
          <Count kind={k} value={i + 1} />
        </Row.Item>
        <Row.Item shrink>
          <div style={{
        textTransform: "capitalize"
      }} className="padding--right--xl">
            {k}
          </div>
        </Row.Item>
      </React.Fragment>)}
  </Row>`,...a.parameters?.docs?.source}}};const v=["Overview","Kinds"];export{a as Kinds,r as Overview,v as __namedExportsOrder,k as default};
