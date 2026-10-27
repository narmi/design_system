import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-CGsTogKW.js";import{n as r,t as i}from"./useFocusTrap-Dta8yZbB.js";import{n as a,r as o}from"./Button-Df89TkKA.js";import{n as s,t as c}from"./TextInput-BfV_hhzu.js";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}var u,d,f,p;t((()=>{u=e(n()),i(),o(),s(),d=()=>{let[e,t]=(0,u.useState)(!1),n=(0,u.useRef)(null),{trapProps:i}=r({ref:n,isActive:e});return u.createElement(u.Fragment,null,u.createElement(a,{kind:`secondary`,onClick:()=>t(!e)},e?`Release`:`Trap`,` focus`),u.createElement(`div`,l({role:`group`,"aria-label":`Focus trap example`,ref:n},i,{className:`margin--top--s padding--all--l rounded--all`,style:{border:`2px solid ${e?`var(--theme-primary)`:`var(--border-color-default)`}`}}),u.createElement(`p`,{className:`margin--bottom--s`},`While trapped, Tab and Shift+Tab cycle through these fields.`),u.createElement(c,{label:`First`}),u.createElement(c,{label:`Second`}),u.createElement(a,{kind:`primary`,onClick:()=>t(!1)},`Done`)),u.createElement(a,{kind:`plain`},`A button outside the trap`))},f={title:`Hooks/Interaction/useFocusTrap`,tags:[`autodocs`,`!dev`],component:d},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {
    trapProps
  } = useFocusTrap({
    ref,
    isActive
  });
  return <>
      <Button kind="secondary" onClick={() => setIsActive(!isActive)}>
        {isActive ? "Release" : "Trap"} focus
      </Button>
      <div role="group" aria-label="Focus trap example" ref={ref} {...trapProps} className="margin--top--s padding--all--l rounded--all" style={{
      border: \`2px solid \${isActive ? "var(--theme-primary)" : "var(--border-color-default)"}\`
    }}>
        <p className="margin--bottom--s">
          While trapped, Tab and Shift+Tab cycle through these fields.
        </p>
        <TextInput label="First" />
        <TextInput label="Second" />
        <Button kind="primary" onClick={() => setIsActive(false)}>
          Done
        </Button>
      </div>
      <Button kind="plain">A button outside the trap</Button>
    </>;
}`,...d.parameters?.docs?.source}}},p=[`Overview`]}))();export{d as Overview,p as __namedExportsOrder,f as default};