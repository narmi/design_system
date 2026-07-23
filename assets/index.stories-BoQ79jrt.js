import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BACAnKlJ.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-B2ORXX-p.js";import{n as s,t as c}from"./Button-BKTaRo9a.js";var l,u,d=t((()=>{l=e(n()),r(),u=({totalWidth:e=`100%`,percentComplete:t=0,size:n=`m`,fullBleed:r=!1})=>{let[a,o]=(0,l.useState)(0),s=(0,l.useRef)(null),c=(0,l.useRef)(null);return(0,l.useLayoutEffect)(()=>{let e=t===0?t:a;s.current&&c.current&&(c.current.setAttribute(`from`,`${e}%`),c.current.setAttribute(`to`,`${t}%`),c.current.beginElement(),o(t))},[t]),l.createElement(`div`,{className:i([`nds-progressbar`,`nds-progressbar--${n}`,{"nds-progressbar--fullBleed":r}]),style:{width:`${e}`}},t>0&&l.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`},l.createElement(`line`,{ref:s,x1:`0%`,y1:`50%`,x2:`${a}%`,y2:`50%`,strokeLinecap:`round`},l.createElement(`animate`,{ref:c,attributeName:`x2`,from:`0%`,to:`0%`,dur:`0.5s`,fill:`freeze`,restart:`always`,calcMode:`spline`,keyTimes:`0;1`,keySplines:`0 0 0.5 1`}))))}})),f,p,m,h,g,_,v;t((()=>{f=e(n()),d(),a(),s(),p=e=>f.createElement(u,e),m=p.bind({}),m.args={percentComplete:25},h=p.bind({}),h.args={fullBleed:!0,percentComplete:50},h.parameters={docs:{description:{story:"The ProgressBar will fill 100% of its parent container. We typically pad our containers, but in the event the ProgressBar should span the whole container width, the `fullBleed` prop flattens the edges of the bar."}}},g=()=>{let[e,t]=(0,f.useState)(0),n=e=>{e>=0&&e<=100&&t(t=>t+e)};return f.createElement(f.Fragment,null,f.createElement(`div`,{className:`margin--bottom`},f.createElement(u,{percentComplete:e})),f.createElement(o,null,f.createElement(o.Item,{shrink:!0},f.createElement(c,{size:`xs`,label:`Add 25%`,onClick:()=>n(25)})),f.createElement(o.Item,{shrink:!0},f.createElement(c,{size:`xs`,label:`Add 33%`,onClick:()=>n(33)})),f.createElement(o.Item,{shrink:!0},f.createElement(c,{kind:`secondary`,size:`xs`,label:`Reset`,onClick:()=>t(0)}))))},g.parameters={docs:{description:{story:"The SVG progress line will animate (ease out) to its new position when `percentComplete` changes."}}},_={title:`Components/ProgressBar`,component:u},g.__docgenInfo={description:``,methods:[],displayName:`Animation`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <ProgressBar {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <ProgressBar {...args} />`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},v=[`Overview`,`FullBleed`,`Animation`]}))();export{g as Animation,h as FullBleed,m as Overview,v as __namedExportsOrder,_ as default};