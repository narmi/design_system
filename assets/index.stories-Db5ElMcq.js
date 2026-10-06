import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-LOv6PZTd.js";import{n as r,t as i}from"./Row-CMxAJ3dJ.js";import{n as a,r as o}from"./Button-CC9s-RF0.js";import{n as s,t as c}from"./ProgressBar-DiFPH7TR.js";var l,u,d,f,p,m,h;t((()=>{l=e(n()),s(),r(),o(),u=e=>l.createElement(c,e),d=u.bind({}),d.args={percentComplete:25},f=u.bind({}),f.args={fullBleed:!0,percentComplete:50},f.parameters={docs:{description:{story:"The ProgressBar will fill 100% of its parent container. We typically pad our containers, but in the event the ProgressBar should span the whole container width, the `fullBleed` prop flattens the edges of the bar."}}},p=()=>{let[e,t]=(0,l.useState)(0),n=e=>{e>=0&&e<=100&&t(t=>t+e)};return l.createElement(l.Fragment,null,l.createElement(`div`,{className:`margin--bottom`},l.createElement(c,{percentComplete:e})),l.createElement(i,null,l.createElement(i.Item,{shrink:!0},l.createElement(a,{size:`xs`,label:`Add 25%`,onClick:()=>n(25)})),l.createElement(i.Item,{shrink:!0},l.createElement(a,{size:`xs`,label:`Add 33%`,onClick:()=>n(33)})),l.createElement(i.Item,{shrink:!0},l.createElement(a,{kind:`secondary`,size:`xs`,label:`Reset`,onClick:()=>t(0)}))))},p.parameters={docs:{description:{story:"The SVG progress line will animate (ease out) to its new position when `percentComplete` changes."}}},m={title:`Components/ProgressBar`,component:c},p.__docgenInfo={description:``,methods:[],displayName:`Animation`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <ProgressBar {...args} />`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <ProgressBar {...args} />`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [pct, setPct] = useState(0);
  const handleChange = amount => {
    if (amount >= 0 && amount <= 100) {
      setPct(p => p + amount);
    }
  };
  return <>
      <div className="margin--bottom">
        <ProgressBar percentComplete={pct} />
      </div>
      <Row>
        <Row.Item shrink>
          <Button size="xs" label="Add 25%" onClick={() => handleChange(25)} />
        </Row.Item>
        <Row.Item shrink>
          <Button size="xs" label="Add 33%" onClick={() => handleChange(33)} />
        </Row.Item>
        <Row.Item shrink>
          <Button kind="secondary" size="xs" label="Reset" onClick={() => setPct(0)} />
        </Row.Item>
      </Row>
    </>;
}`,...p.parameters?.docs?.source}}},h=[`Overview`,`FullBleed`,`Animation`]}))();export{p as Animation,f as FullBleed,d as Overview,h as __namedExportsOrder,m as default};