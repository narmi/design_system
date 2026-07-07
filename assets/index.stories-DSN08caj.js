import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BfKIDLek.js";import{n as r,t as i}from"./Row-B5Qn3bWX.js";import{n as a,t as o}from"./Button-EbTbPm3n.js";import{n as s,t as c}from"./selection-CvWrpGAP.js";import{r as l,t as u}from"./Select-CPFA4vM0.js";var d,f,p,m,h,g,_,v,y,b,x;e((()=>{d=t(n()),a(),s(),r(),l(),f=c.icons.map(e=>e.properties.name),p=e=>d.createElement(o,e),m=p.bind({}),m.args={label:`Submit`},h=()=>d.createElement(`div`,{style:{maxWidth:`640px`}},d.createElement(u,{id:`overdraft`,label:`Use overdraft protection?`},d.createElement(u.Item,{value:`Yes`},`Yes`),d.createElement(u.Item,{value:`No`},`No`)),d.createElement(o,{label:`Learn more about overdraft protection`,kind:`plain`,onClick:()=>{alert(`button click`)}})),h.parameters={docs:{description:{story:'A Button of `kind="plain"` is a button styled to look like a link.'}}},g=()=>d.createElement(o,{kind:`ai`,label:`Ask Anything`,startIcon:`sparkle`}),g.parameters={docs:{description:{story:'A Button of `kind="ai"` is used for AI-related actions. It renders with a white background, amethyst text, and an animated rotating gradient border.'}}},_=()=>d.createElement(i,{alignItems:`center`,justifyContent:`end`},d.createElement(i.Item,{shrink:!0},d.createElement(o,{kind:`negative`,label:`Cancel`})),d.createElement(i.Item,{shrink:!0},d.createElement(o,{kind:`primary`,label:`Confirm`}))),_.parameters={docs:{description:{story:"When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right."}}},v=()=>d.createElement(d.Fragment,null,d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{label:`${e} Button`,size:e}))))),d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{kind:`secondary`,label:`${e} Button`,size:e}))))),d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{kind:`tonal`,label:`${e} Button`,size:e}))))),d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{kind:`plain`,label:`${e} Button`,size:e}))))),d.createElement(`div`,{className:`margin--bottom--l`},d.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>d.createElement(i.Item,{key:e},d.createElement(o,{kind:`ai`,label:`${e} Button`,size:e})))))),y=()=>d.createElement(`div`,{style:{maxWidth:`400px`}},d.createElement(`div`,{className:`margin--bottom--m`},d.createElement(o,{endIcon:`arrow-right`,label:`Continue`,isFullWidth:!0})),d.createElement(`div`,{className:`margin--bottom--m`},d.createElement(o,{kind:`tonal`,startIcon:`camera`,label:`Take a picture`,isFullWidth:!0}))),y.parameters={docs:{description:{story:"When `isFullWidth` is `true`, the button expands to fill the width of its container. Useful for stacked actions in narrow layouts such as mobile views or sidebars."}}},b={title:`Components/Button`,component:o,argTypes:{startIcon:{options:[``,...f]},endIcon:{options:[``,...f]}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Button {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "640px"
}}>
    <Select id="overdraft" label="Use overdraft protection?">
      <Select.Item value="Yes">Yes</Select.Item>
      <Select.Item value="No">No</Select.Item>
    </Select>
    <Button label="Learn more about overdraft protection" kind="plain" onClick={() => {
    alert("button click");
  }} />
  </div>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <Button kind="ai" label="Ask Anything" startIcon="sparkle" />`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <Row alignItems="center" justifyContent="end">
    <Row.Item shrink>
      <Button kind="negative" label="Cancel" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="primary" label="Confirm" />
    </Row.Item>
  </Row>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <>
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
  </>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "400px"
}}>
    <div className="margin--bottom--m">
      <Button endIcon="arrow-right" label="Continue" isFullWidth />
    </div>
    <div className="margin--bottom--m">
      <Button kind="tonal" startIcon="camera" label="Take a picture" isFullWidth />
    </div>
  </div>`,...y.parameters?.docs?.source}}},x=[`Overview`,`PlainButton`,`AiButton`,`ConfirmAndCancel`,`ButtonSizes`,`FullWidthButton`]}))();export{g as AiButton,v as ButtonSizes,_ as ConfirmAndCancel,y as FullWidthButton,m as Overview,h as PlainButton,x as __namedExportsOrder,b as default};