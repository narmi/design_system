import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BJh9JJFI.js";import{n as r,t as i}from"./Row-CZonlCjD.js";import{n as a,t as o}from"./NavigationItem-Yozb2iUt.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var c,l,u,d,f,p,m,h;t((()=>{c=e(n()),r(),a(),l=e=>c.createElement(`div`,{style:{maxWidth:`600px`}},c.createElement(i,{gapSize:`l`},c.createElement(i.Item,null,c.createElement(o,s({},e,{isSelected:!1}))),c.createElement(i.Item,null,c.createElement(o,s({},e,{isSelected:!0}))))),u=l.bind({}),u.args={label:`Dashboard`},d=l.bind({}),d.args={label:`Admin`,detail:`2 users`},f=l.bind({}),f.args={label:`Admin`,startContent:c.createElement(`span`,{className:`narmi-icon-profile`,"aria-hidden":`true`})},p=l.bind({}),p.args={label:`Admin`,detail:`2 users`,endContent:c.createElement(`span`,{className:`narmi-icon-lock`,"aria-hidden":`true`})},m={title:`Components/NavigationItem`,component:o,argTypes:{label:{control:`text`},detail:{control:`text`},isSelected:{control:!1},onClick:{action:`clicked`,control:!1},startContent:{control:!1},endContent:{control:!1},testId:{control:`text`}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  maxWidth: "600px"
}}>
    <Row gapSize="l">
      <Row.Item>
        <NavigationItem {...args} isSelected={false} />
      </Row.Item>
      <Row.Item>
        <NavigationItem {...args} isSelected />
      </Row.Item>
    </Row>
  </div>`,...u.parameters?.docs?.source},description:{story:"A single navigation control. It always renders as a button, and the click\nbehavior is passed in explicitly via `onClick`. Each story shows the default\nand selected states side by side.\n\nContent is provided via the `label` (and optional `detail`) slots rather than\n`children`, so the component owns the wrapper spans and the button only ever\ncontains phrasing (inline) content.\n\n`NavigationItem` is valid anywhere — it renders no `li`, so it can sit\ndirectly in a `nav` or be composed inside other components.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  maxWidth: "600px"
}}>
    <Row gapSize="l">
      <Row.Item>
        <NavigationItem {...args} isSelected={false} />
      </Row.Item>
      <Row.Item>
        <NavigationItem {...args} isSelected />
      </Row.Item>
    </Row>
  </div>`,...d.parameters?.docs?.source},description:{story:"A secondary line of text is provided via the `detail` slot. Both `label` and\n`detail` are rendered as spans the component owns, so the button stays valid\neven with two lines of content.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div style={{
  maxWidth: "600px"
}}>
    <Row gapSize="l">
      <Row.Item>
        <NavigationItem {...args} isSelected={false} />
      </Row.Item>
      <Row.Item>
        <NavigationItem {...args} isSelected />
      </Row.Item>
    </Row>
  </div>`,...f.parameters?.docs?.source},description:{story:"`startContent` renders decorative content (e.g. an icon) before the control,\nas a grid sibling — it is not part of the button's accessible label.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  maxWidth: "600px"
}}>
    <Row gapSize="l">
      <Row.Item>
        <NavigationItem {...args} isSelected={false} />
      </Row.Item>
      <Row.Item>
        <NavigationItem {...args} isSelected />
      </Row.Item>
    </Row>
  </div>`,...p.parameters?.docs?.source},description:{story:`\`endContent\` renders as a grid sibling of the control, not as a child of it —
so a secondary action (e.g. a "more" affordance) never creates invalid nested
interactive elements.`,...p.parameters?.docs?.description}}},h=[`Overview`,`WithDetail`,`WithStartContent`,`WithEndContent`]}))();export{u as Overview,d as WithDetail,p as WithEndContent,f as WithStartContent,h as __namedExportsOrder,m as default};