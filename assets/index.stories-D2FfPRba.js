import{e}from"./iframe-DzU1GE0T.js";import{B as a}from"./index-CoiasXIo.js";import{i as p}from"./selection-CAkQuomx.js";import{R as n}from"./index-DpYRNHTO.js";import{S as c}from"./index-gLOzJfp8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-CZK5xIX7.js";import"./index-Gn9fvuLe.js";import"./downshift.esm-H1xoBJ5e.js";import"./tslib.es6-Dem0CNzv.js";import"./index-Bk_idqVV.js";import"./index-DO3L49R8.js";import"./index-CVbPokxv.js";import"./index-3k3-mEtS.js";const d=p.icons.map(t=>t.properties.name),u=t=>e.createElement(a,t),o=u.bind({});o.args={label:"Submit"};const r=()=>e.createElement("div",{style:{maxWidth:"640px"}},e.createElement(c,{id:"overdraft",label:"Use overdraft protection?"},e.createElement(c.Item,{value:"Yes"},"Yes"),e.createElement(c.Item,{value:"No"},"No")),e.createElement(a,{label:"Learn more about overdraft protection",kind:"plain",onClick:()=>{alert("button click")}}));r.parameters={docs:{description:{story:'A Button of `kind="plain"` is a button styled to look like a link.'}}};const i=()=>e.createElement(a,{kind:"ai",label:"Ask Anything",startIcon:"sparkle"});i.parameters={docs:{description:{story:'A Button of `kind="ai"` is used for AI-related actions. It renders with a white background, amethyst text, and an animated rotating gradient border.'}}};const s=()=>e.createElement(n,{alignItems:"center",justifyContent:"end"},e.createElement(n.Item,{shrink:!0},e.createElement(a,{kind:"negative",label:"Cancel"})),e.createElement(n.Item,{shrink:!0},e.createElement(a,{kind:"primary",label:"Confirm"})));s.parameters={docs:{description:{story:"When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right."}}};const l=()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{kind:"secondary",label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{kind:"tonal",label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{kind:"plain",label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{kind:"ai",label:`${t} Button`,size:t})))))),m=()=>e.createElement("div",{style:{maxWidth:"400px"}},e.createElement("div",{className:"margin--bottom--m"},e.createElement(a,{endIcon:"arrow-right",label:"Continue",isFullWidth:!0})),e.createElement("div",{className:"margin--bottom--m"},e.createElement(a,{kind:"tonal",startIcon:"camera",label:"Take a picture",isFullWidth:!0})));m.parameters={docs:{description:{story:"When `isFullWidth` is `true`, the button expands to fill the width of its container. Useful for stacked actions in narrow layouts such as mobile views or sidebars."}}};const S={title:"Components/Button",component:a,argTypes:{startIcon:{options:["",...d]},endIcon:{options:["",...d]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "640px"
}}>
    <Select id="overdraft" label="Use overdraft protection?">
      <Select.Item value="Yes">Yes</Select.Item>
      <Select.Item value="No">No</Select.Item>
    </Select>
    <Button label="Learn more about overdraft protection" kind="plain" onClick={() => {
    alert("button click");
  }} />
  </div>`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'() => <Button kind="ai" label="Ask Anything" startIcon="sparkle" />',...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Row alignItems="center" justifyContent="end">
    <Row.Item shrink>
      <Button kind="negative" label="Cancel" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="primary" label="Confirm" />
    </Row.Item>
  </Row>`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button kind="secondary" label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button kind="tonal" label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button kind="plain" label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button kind="ai" label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
  </>`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "400px"
}}>
    <div className="margin--bottom--m">
      <Button endIcon="arrow-right" label="Continue" isFullWidth />
    </div>
    <div className="margin--bottom--m">
      <Button kind="tonal" startIcon="camera" label="Take a picture" isFullWidth />
    </div>
  </div>`,...m.parameters?.docs?.source}}};const C=["Overview","PlainButton","AiButton","ConfirmAndCancel","ButtonSizes","FullWidthButton"];export{i as AiButton,l as ButtonSizes,s as ConfirmAndCancel,m as FullWidthButton,o as Overview,r as PlainButton,C as __namedExportsOrder,S as default};
