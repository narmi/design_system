import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BACAnKlJ.js";import{n as r,t as i}from"./Row-B2ORXX-p.js";import{n as a,t as o}from"./Button-BKTaRo9a.js";import{n as s,t as c}from"./iconNames-BuGAwI5s.js";import{r as l,t as u}from"./Select-DrcjWmRe.js";var d,f,p,m,h,g,_,v,y,b;t((()=>{d=e(n()),a(),s(),r(),l(),f=e=>d.createElement(o,e),p=f.bind({}),p.args={label:`Submit`},m=()=>d.createElement(`div`,{style:{maxWidth:`640px`}},d.createElement(u,{id:`overdraft`,label:`Use overdraft protection?`},d.createElement(u.Item,{value:`Yes`},`Yes`),d.createElement(u.Item,{value:`No`},`No`)),d.createElement(o,{label:`Learn more about overdraft protection`,kind:`plain`,onClick:()=>{alert(`button click`)}})),m.parameters={docs:{description:{story:'A Button of `kind="plain"` is a button styled to look like a link.'}}},h=()=>d.createElement(o,{kind:`ai`,label:`Ask Anything`,startIcon:`sparkle`}),h.parameters={docs:{description:{story:'A Button of `kind="ai"` is used for AI-related actions. It renders with a white background, amethyst text, and an animated rotating gradient border.'}}},g=()=>d.createElement(i,{alignItems:`center`,justifyContent:`end`},d.createElement(i.Item,{shrink:!0},d.createElement(o,{kind:`negative`,label:`Cancel`})),d.createElement(i.Item,{shrink:!0},d.createElement(o,{kind:`primary`,label:`Confirm`}))),g.parameters={docs:{description:{story:"When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right."}}},_=()=>d.createElement(d.Fragment,null,d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{label:`${e} Button`,size:e}))))),d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{kind:`secondary`,label:`${e} Button`,size:e}))))),d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{kind:`tonal`,label:`${e} Button`,size:e}))))),d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{kind:`plain`,label:`${e} Button`,size:e}))))),d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{kind:`ai`,label:`${e} Button`,size:e})))))),v=()=>d.createElement(`div`,{style:{maxWidth:`400px`}},d.createElement(`div`,{className:`margin--bottom--m`},d.createElement(o,{endIcon:`arrow-right`,label:`Continue`,isFullWidth:!0})),d.createElement(`div`,{className:`margin--bottom--m`},d.createElement(o,{kind:`tonal`,startIcon:`camera`,label:`Take a picture`,isFullWidth:!0}))),v.parameters={docs:{description:{story:"When `isFullWidth` is `true`, the button expands to fill the width of its container. Useful for stacked actions in narrow layouts such as mobile views or sidebars."}}},y={title:`Components/Button`,component:o,argTypes:{startIcon:{options:[``,...c]},endIcon:{options:[``,...c]}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Button {...args} />`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "640px"
}}>
    <Select id="overdraft" label="Use overdraft protection?">
      <Select.Item value="Yes">Yes</Select.Item>
      <Select.Item value="No">No</Select.Item>
    </Select>
    <Button label="Learn more about overdraft protection" kind="plain" onClick={() => {
    alert("button click");
  }} />
  </div>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <Button kind="ai" label="Ask Anything" startIcon="sparkle" />`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <Row alignItems="center" justifyContent="end">
    <Row.Item shrink>
      <Button kind="negative" label="Cancel" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="primary" label="Confirm" />
    </Row.Item>
  </Row>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <>
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
  </>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "400px"
}}>
    <div className="margin--bottom--m">
      <Button endIcon="arrow-right" label="Continue" isFullWidth />
    </div>
    <div className="margin--bottom--m">
      <Button kind="tonal" startIcon="camera" label="Take a picture" isFullWidth />
    </div>
  </div>`,...v.parameters?.docs?.source}}},b=[`Overview`,`PlainButton`,`AiButton`,`ConfirmAndCancel`,`ButtonSizes`,`FullWidthButton`]}))();export{h as AiButton,_ as ButtonSizes,g as ConfirmAndCancel,v as FullWidthButton,p as Overview,m as PlainButton,b as __namedExportsOrder,y as default};