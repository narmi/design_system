import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-D0FPaLQ2.js";import{n as r,t as i}from"./Row-CoAdUw40.js";import{n as a,r as o,t as s}from"./IconButton-CnQs_e8d.js";var c,l,u,d,f,p,m,h,g;e((()=>{c=t(n()),o(),r(),l=e=>c.createElement(s,e),u=l.bind({}),u.args={label:`Edit`,kind:`plain`,name:`info`},u.parameters={docs:{description:{story:'An Icon Button of `kind="plain"` is a button styled to look like a plain icon.'}}},d=()=>c.createElement(i,{alignItems:`center`},c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`action`,label:`Default Action Button`,name:`info`})),c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`plain`,label:`Default Plain Button`,name:`info`}))),f=()=>c.createElement(i,{alignItems:`center`},c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`action`,label:`X-Small Button`,textSize:`xs`,name:`info`})),c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`action`,label:`Small Button`,textSize:`s`,name:`info`})),c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`action`,label:`Medium Button`,textSize:`m`,name:`info`})),c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`action`,label:`Large Button`,textSize:`l`,name:`info`}))),p=()=>c.createElement(c.Fragment,null,c.createElement(i,{alignItems:`center`},c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`plain`,label:`X-Small Button`,textSize:`xs`,name:`info`})),c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`plain`,label:`Small Button`,textSize:`s`,name:`info`})),c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`plain`,label:`Medium Button`,textSize:`m`,name:`info`})),c.createElement(i.Item,{shrink:!0},c.createElement(s,{kind:`plain`,label:`Large Button`,textSize:`l`,name:`info`})))),m=()=>c.createElement(c.Fragment,null,c.createElement(s,{as:`a`,kind:`plain`,label:`Link button`,textSize:`xs`,name:`info`,href:`/`})),h={title:`Components/IconButton`,component:s,argTypes:{name:{options:[``,...a]},textSize:{options:[`xs`,`s`,`m`,`l`]},kind:{options:[`plain`,`action`,`themed`]}}},d.__docgenInfo={description:``,methods:[],displayName:`DefaultIconButtonSizes`},f.__docgenInfo={description:``,methods:[],displayName:`ActionIconButtonSizes`},p.__docgenInfo={description:``,methods:[],displayName:`PlainIconButtonSizes`},m.__docgenInfo={description:``,methods:[],displayName:`IconButtonAsAnchor`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <IconButton {...args} />`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Row alignItems="center">
    <Row.Item shrink>
      <IconButton kind="action" label="Default Action Button" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="plain" label="Default Plain Button" name="info" />
    </Row.Item>
  </Row>`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <Row alignItems="center">
    <Row.Item shrink>
      <IconButton kind="action" label="X-Small Button" textSize="xs" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="action" label="Small Button" textSize="s" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="action" label="Medium Button" textSize="m" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="action" label="Large Button" textSize="l" name="info" />
    </Row.Item>
  </Row>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <>
    <Row alignItems="center">
      <Row.Item shrink>
        <IconButton kind="plain" label="X-Small Button" textSize="xs" name="info" />
      </Row.Item>
      <Row.Item shrink>
        <IconButton kind="plain" label="Small Button" textSize="s" name="info" />
      </Row.Item>
      <Row.Item shrink>
        <IconButton kind="plain" label="Medium Button" textSize="m" name="info" />
      </Row.Item>
      <Row.Item shrink>
        <IconButton kind="plain" label="Large Button" textSize="l" name="info" />
      </Row.Item>
    </Row>
  </>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <>
    <IconButton as="a" kind="plain" label="Link button" textSize="xs" name="info" href="/" />
  </>`,...m.parameters?.docs?.source}}},g=[`PlainIconButton`,`DefaultIconButtonSizes`,`ActionIconButtonSizes`,`PlainIconButtonSizes`,`IconButtonAsAnchor`]}))();export{f as ActionIconButtonSizes,d as DefaultIconButtonSizes,m as IconButtonAsAnchor,u as PlainIconButton,p as PlainIconButtonSizes,g as __namedExportsOrder,h as default};