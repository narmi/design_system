import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-Dn_DKNIZ.js";import{n as r,t as i}from"./Button-CfGr1AaO.js";import{n as a,t as o}from"./useLockBodyScroll-B2xPZ5Ey.js";var s,c,l,u;e((()=>{s=t(n()),o(),r(),c=()=>{let[e,t]=(0,s.useState)(!1);return a(e),s.createElement(s.Fragment,null,s.createElement(i,{kind:`secondary`,onClick:()=>{t(!e)}},`Click to `,e?`En`:`Dis`,`able Scrolling`))},l={title:`Hooks/useLockBodyScroll`,tags:[`autodocs`,`!dev`]},c.__docgenInfo={description:``,methods:[],displayName:`Overview`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [isLocked, setIsLocked] = useState(false);
  useLockBodyScroll(isLocked);
  return <>
      <Button kind={"secondary"} onClick={() => {
      setIsLocked(!isLocked);
    }}>
        Click to {isLocked ? "En" : "Dis"}able Scrolling
      </Button>
    </>;
}`,...c.parameters?.docs?.source}}},u=[`Overview`]}))();export{c as Overview,u as __namedExportsOrder,l as default};