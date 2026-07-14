import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-CiAHTIhJ.js";import{n as r,t as i}from"./Row-BolV-G0f.js";import{n as a,r as o,t as s}from"./Count-Drrgh5om.js";var c,l,u,d,f,p;t((()=>{c=e(n()),r(),o(),l=e=>c.createElement(s,e),u=l.bind({}),u.args={value:12},d=()=>c.createElement(i,{alignItems:`center`,gapSize:`xs`},a.map((e,t)=>c.createElement(c.Fragment,{key:`${e}-${t}`},c.createElement(i.Item,{key:`${e}-${t}`,shrink:!0},c.createElement(s,{kind:e,value:t+1})),c.createElement(i.Item,{shrink:!0},c.createElement(`div`,{style:{textTransform:`capitalize`},className:`padding--right--xl`},e))))),f={title:`Components/Count`,component:s},d.__docgenInfo={description:``,methods:[],displayName:`Kinds`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <Count {...args} />`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Row alignItems="center" gapSize="xs">
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
  </Row>`,...d.parameters?.docs?.source}}},p=[`Overview`,`Kinds`]}))();export{d as Kinds,u as Overview,p as __namedExportsOrder,f as default};