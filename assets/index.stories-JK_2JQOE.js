import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-J6DUEc5C.js";import{n as r,t as i}from"./Row-CDWigKpT.js";import{r as a,t as o}from"./TextInput-DyFi-ILJ.js";var s,c,l=e((()=>{s=t(n()),r(),c=({title:e,children:t})=>s.createElement(`div`,{className:`nds-formSection fontFamily--body`},s.createElement(i,{alignItems:`center`,gapSize:`xs`},s.createElement(i.Item,{shrink:!0},s.createElement(`h3`,{className:`fontColor--secondary fontSize--xs fontFamily--body`},e)),s.createElement(i.Item,null,s.createElement(`div`,{style:{width:`100%`,height:`var(--font-size-default)`}},s.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,xmlnsXlink:`http://www.w3.org/1999/xlink`,height:`var(--font-size-default)`,width:`100%`},s.createElement(`line`,{x1:`0%`,y1:`50%`,x2:`100%`,y2:`50%`,stroke:`var(--font-color-hint)`,strokeWidth:`1`}))))),t),c.__docgenInfo={description:`A sectioning element for forms that renders a label and line above the section`,methods:[],displayName:`FormSection`,props:{title:{description:`Title of form section`,type:{name:`string`},required:!0},children:{description:``,type:{name:`node`},required:!0}}}})),u,d,f,p,m,h;e((()=>{u=t(n()),l(),a(),r(),d=e=>u.createElement(c,e),f=d.bind({}),f.args={title:`Personal Details`},p=e=>u.createElement(c,e,u.createElement(`div`,{className:`margin--bottom`},u.createElement(i,{alignItems:`center`},u.createElement(i.Item,null,u.createElement(o,{label:`Name`})),u.createElement(i.Item,null,u.createElement(o,{label:`Email`,type:`email`})))),u.createElement(`div`,{className:`margin--bottom`},u.createElement(i,{alignItems:`center`},u.createElement(i.Item,{shrink:!0},u.createElement(o,{label:`Phone number`,defaultValue:`(555) 867-5309`,type:`tel`})),u.createElement(i.Item,null,u.createElement(o,{label:`Street Address`}))))),p.args={title:`Contact Information`},m={title:`Components/FormSection`,component:c},p.__docgenInfo={description:``,methods:[],displayName:`WithInputs`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <FormSection {...args} />`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <FormSection {...args}>
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
  </FormSection>`,...p.parameters?.docs?.source}}},h=[`Overview`,`WithInputs`]}))();export{f as Overview,p as WithInputs,h as __namedExportsOrder,m as default};