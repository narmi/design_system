import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-CiAHTIhJ.js";import{n as r,t as i}from"./useBreakpoints-CwdbQVO7.js";var a,o,s,c;t((()=>{a=e(n()),i(),o=()=>{let{s:e,m:t,l:n,xl:i,largestSatisfiedBreakpoint:o}=r();return a.createElement(a.Fragment,null,a.createElement(`h1`,{className:`fontColor--heading fontFamily--heading margin--bottom--l`},`Resize your browser`),a.createElement(`ul`,{className:`list--reset padding--all rounded--all bgColor--blueGrey fontColor--azul fontSize--xl`},a.createElement(`li`,null,a.createElement(`code`,null,`s or larger:\xA0`),a.createElement(`code`,{className:`fontColor--${e?`success`:`error`}`},e.toString())),a.createElement(`li`,null,a.createElement(`code`,null,`m or larger:\xA0`),a.createElement(`code`,{className:`fontColor--${t?`success`:`error`}`},t.toString())),a.createElement(`li`,null,a.createElement(`code`,null,`l or larger:\xA0`),a.createElement(`code`,{className:`fontColor--${n?`success`:`error`}`},n.toString())),a.createElement(`li`,null,a.createElement(`code`,null,`xl or larger:\xA0`),a.createElement(`code`,{className:`fontColor--${i?`success`:`error`}`},i.toString())),a.createElement(`li`,null,a.createElement(`code`,null,`largest satisfied bp:\xA0`),a.createElement(`code`,{className:`fontColor--primary`},o.toString()))))},s={title:`Hooks/useBreakpoints`,tags:[`autodocs`,`!dev`],component:o},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    s,
    m,
    l,
    xl,
    largestSatisfiedBreakpoint
  }: UseBreakpointsResult = useBreakpoints();
  return <>
      <h1 className="fontColor--heading fontFamily--heading margin--bottom--l">
        Resize your browser
      </h1>
      <ul className="list--reset padding--all rounded--all bgColor--blueGrey fontColor--azul fontSize--xl">
        <li>
          <code>s or larger:&nbsp;</code>
          <code className={\`fontColor--\${s ? "success" : "error"}\`}>
            {s.toString()}
          </code>
        </li>
        <li>
          <code>m or larger:&nbsp;</code>
          <code className={\`fontColor--\${m ? "success" : "error"}\`}>
            {m.toString()}
          </code>
        </li>
        <li>
          <code>l or larger:&nbsp;</code>
          <code className={\`fontColor--\${l ? "success" : "error"}\`}>
            {l.toString()}
          </code>
        </li>
        <li>
          <code>xl or larger:&nbsp;</code>
          <code className={\`fontColor--\${xl ? "success" : "error"}\`}>
            {xl.toString()}
          </code>
        </li>
        <li>
          <code>largest satisfied bp:&nbsp;</code>
          <code className="fontColor--primary">
            {largestSatisfiedBreakpoint.toString()}
          </code>
        </li>
      </ul>
    </>;
}`,...o.parameters?.docs?.source}}},c=[`Overview`]}))();export{o as Overview,c as __namedExportsOrder,s as default};