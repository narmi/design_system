import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DzUeIiSQ.js";import{n as r,t as i}from"./Row-QOJb4vbF.js";import{n as a,r as o,t as s}from"./Button-CA4utsYj.js";import{n as c,t as l}from"./iconNames-BuGAwI5s.js";import{r as u,t as d}from"./Select-CmMWR9Jc.js";var f,p,m,h,g,_,v,y,b,x,S;t((()=>{f=e(n()),o(),c(),r(),u(),p=e=>f.createElement(a,e),m=p.bind({}),m.args={label:`Submit`},h=()=>f.createElement(`div`,{style:{maxWidth:`640px`}},f.createElement(d,{id:`overdraft`,label:`Use overdraft protection?`},f.createElement(d.Item,{value:`Yes`},`Yes`),f.createElement(d.Item,{value:`No`},`No`)),f.createElement(a,{label:`Learn more about overdraft protection`,kind:`plain`,onClick:()=>{alert(`button click`)}})),h.parameters={docs:{description:{story:'A Button of `kind="plain"` is a button styled to look like a link.'}}},g=()=>f.createElement(a,{kind:`ai`,label:`Ask Anything`,startIcon:`sparkle`}),g.parameters={docs:{description:{story:'A Button of `kind="ai"` is used for AI-related actions. It renders with a white background, amethyst text, and an animated rotating gradient border.'}}},_=()=>f.createElement(i,{alignItems:`center`,justifyContent:`end`},f.createElement(i.Item,{shrink:!0},f.createElement(a,{kind:`negative`,label:`Cancel`})),f.createElement(i.Item,{shrink:!0},f.createElement(a,{kind:`primary`,label:`Confirm`}))),_.parameters={docs:{description:{story:"When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right."}}},v=()=>f.createElement(f.Fragment,null,s.map(e=>f.createElement(`div`,{className:`margin--bottom--m`,key:e},f.createElement(a,{kind:e,label:e})))),v.parameters={docs:{description:{story:["`Button` supports the following kinds:",``,"- `primary`: filled with the theme color","- `secondary`: white, with a border and label in the theme color","- `tertiary`: white, with a neutral border and label","- `tonal`: tinted theme fill, with a label in the theme color","- `negative`: styled as a link, in the theme's primary color","- `plain`: styled as a link, in the theme's secondary color","- `ai`: amethyst label with an animated gradient border"].join(`
`)}}},y=()=>f.createElement(f.Fragment,null,f.createElement(`div`,{className:`margin--bottom--l`},f.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>f.createElement(i.Item,{key:e},f.createElement(a,{label:`${e} Button`,size:e}))))),f.createElement(`div`,{className:`margin--bottom--l`},f.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>f.createElement(i.Item,{key:e},f.createElement(a,{kind:`secondary`,label:`${e} Button`,size:e}))))),f.createElement(`div`,{className:`margin--bottom--l`},f.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>f.createElement(i.Item,{key:e},f.createElement(a,{kind:`tonal`,label:`${e} Button`,size:e}))))),f.createElement(`div`,{className:`margin--bottom--l`},f.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>f.createElement(i.Item,{key:e},f.createElement(a,{kind:`plain`,label:`${e} Button`,size:e}))))),f.createElement(`div`,{className:`margin--bottom--l`},f.createElement(i,{alignItems:`center`},[`m`,`s`,`xs`].map(e=>f.createElement(i.Item,{key:e},f.createElement(a,{kind:`ai`,label:`${e} Button`,size:e})))))),b=()=>f.createElement(`div`,{style:{maxWidth:`400px`}},f.createElement(`div`,{className:`margin--bottom--m`},f.createElement(a,{endIcon:`arrow-right`,label:`Continue`,isFullWidth:!0})),f.createElement(`div`,{className:`margin--bottom--m`},f.createElement(a,{kind:`tonal`,startIcon:`camera`,label:`Take a picture`,isFullWidth:!0}))),b.parameters={docs:{description:{story:"When `isFullWidth` is `true`, the button expands to fill the width of its container. Useful for stacked actions in narrow layouts such as mobile views or sidebars."}}},x={title:`Components/Button`,component:a,argTypes:{kind:{options:s,control:{type:`select`}},startIcon:{options:[``,...l]},endIcon:{options:[``,...l]}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Button {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <div style={{
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
    {BUTTON_KINDS.map(kind => <div className="margin--bottom--m" key={kind}>
        <Button kind={kind} label={kind} />
      </div>)}
  </>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <>
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
  </>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "400px"
}}>
    <div className="margin--bottom--m">
      <Button endIcon="arrow-right" label="Continue" isFullWidth />
    </div>
    <div className="margin--bottom--m">
      <Button kind="tonal" startIcon="camera" label="Take a picture" isFullWidth />
    </div>
  </div>`,...b.parameters?.docs?.source}}},S=[`Overview`,`PlainButton`,`AiButton`,`ConfirmAndCancel`,`ButtonKinds`,`ButtonSizes`,`FullWidthButton`]}))();export{g as AiButton,v as ButtonKinds,y as ButtonSizes,_ as ConfirmAndCancel,b as FullWidthButton,m as Overview,h as PlainButton,S as __namedExportsOrder,x as default};