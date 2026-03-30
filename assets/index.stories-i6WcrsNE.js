import{e}from"./iframe-CCDJTabY.js";import{u as a}from"./index-CMwKhUOg.js";import"./preload-helper-PPVm8Dsz.js";import"./useFetch-8Ev6EpPS.js";const r=()=>{const{s:o,m:l,l:n,xl:t,largestSatisfiedBreakpoint:s}=a();return e.createElement(e.Fragment,null,e.createElement("h1",{className:"fontColor--heading fontFamily--heading margin--bottom--l"},"Resize your browser"),e.createElement("ul",{className:"list--reset padding--all rounded--all bgColor--blueGrey fontColor--azul fontSize--xl"},e.createElement("li",null,e.createElement("code",null,"s or larger: "),e.createElement("code",{className:`fontColor--${o?"success":"error"}`},o.toString())),e.createElement("li",null,e.createElement("code",null,"m or larger: "),e.createElement("code",{className:`fontColor--${l?"success":"error"}`},l.toString())),e.createElement("li",null,e.createElement("code",null,"l or larger: "),e.createElement("code",{className:`fontColor--${n?"success":"error"}`},n.toString())),e.createElement("li",null,e.createElement("code",null,"xl or larger: "),e.createElement("code",{className:`fontColor--${t?"success":"error"}`},t.toString())),e.createElement("li",null,e.createElement("code",null,"largest satisfied bp: "),e.createElement("code",{className:"fontColor--primary"},s.toString()))))},u={title:"Hooks/useBreakpoints",tags:["autodocs","!dev"],component:r};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const g=["Overview"];export{r as Overview,g as __namedExportsOrder,u as default};
