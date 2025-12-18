import{r as l,e}from"./iframe-DeDBNvmQ.js";import{c as b}from"./index-RvS1aOr8.js";import{R as u}from"./index-sR1b3bqr.js";import{B as p}from"./index-CO9rXbjm.js";import"./preload-helper-PPVm8Dsz.js";import"./AsElement-DqReV08e.js";import"./index-B54Hldaw.js";const c=({totalWidth:r="100%",percentComplete:t=0,size:m="m",fullBleed:n=!1})=>{const[d,h]=l.useState(0),f=l.useRef(null),o=l.useRef(null);return l.useLayoutEffect(()=>{const w=t===0?t:d;f.current&&o.current&&(o.current.setAttribute("from",`${w}%`),o.current.setAttribute("to",`${t}%`),o.current.beginElement(),h(t))},[t]),e.createElement("div",{className:b(["nds-progressbar",`nds-progressbar--${m}`,{"nds-progressbar--fullBleed":n}]),style:{width:`${r}`}},t>0&&e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},e.createElement("line",{ref:f,x1:"0%",y1:"50%",x2:`${d}%`,y2:"50%",strokeLinecap:"round"},e.createElement("animate",{ref:o,attributeName:"x2",from:"0%",to:"0%",dur:"0.5s",fill:"freeze",restart:"always",calcMode:"spline",keyTimes:"0;1",keySplines:"0 0 0.5 1"}))))};try{c.displayName="ProgressBar",c.__docgenInfo={description:"",displayName:"ProgressBar",props:{percentComplete:{defaultValue:{value:"0"},description:"Int from 0 to 100",name:"percentComplete",required:!1,type:{name:"number"}},totalWidth:{defaultValue:{value:"100%"},description:`CSS Value; Total width of progress bar.
(e.g. "50%" or "200px")`,name:"totalWidth",required:!1,type:{name:"string"}},size:{defaultValue:{value:"m"},description:"Size (height) of the ProgressBar",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},fullBleed:{defaultValue:{value:"false"},description:`Flattens left and right sides of ProgressBar
when you want to create a full-bleed effect`,name:"fullBleed",required:!1,type:{name:"boolean"}}}}}catch{}const g=r=>e.createElement(c,r),i=g.bind({});i.args={percentComplete:25};const s=g.bind({});s.args={fullBleed:!0,percentComplete:50};s.parameters={docs:{description:{story:"The ProgressBar will fill 100% of its parent container. We typically pad our containers, but in the event the ProgressBar should span the whole container width, the `fullBleed` prop flattens the edges of the bar."}}};const a=()=>{const[r,t]=l.useState(0),m=n=>{n>=0&&n<=100&&t(d=>d+n)};return e.createElement(e.Fragment,null,e.createElement("div",{className:"margin--bottom"},e.createElement(c,{percentComplete:r})),e.createElement(u,null,e.createElement(u.Item,{shrink:!0},e.createElement(p,{size:"xs",label:"Add 25%",onClick:()=>m(25)})),e.createElement(u.Item,{shrink:!0},e.createElement(p,{size:"xs",label:"Add 33%",onClick:()=>m(33)})),e.createElement(u.Item,{shrink:!0},e.createElement(p,{kind:"secondary",size:"xs",label:"Reset",onClick:()=>t(0)}))))};a.parameters={docs:{description:{story:"The SVG progress line will animate (ease out) to its new position when `percentComplete` changes."}}};const x={title:"Components/ProgressBar",component:c};a.__docgenInfo={description:"",methods:[],displayName:"Animation"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const C=["Overview","FullBleed","Animation"];export{a as Animation,s as FullBleed,i as Overview,C as __namedExportsOrder,x as default};
