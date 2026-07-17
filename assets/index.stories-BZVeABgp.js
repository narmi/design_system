import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BOevXIh5.js";import{n as r,t as i}from"./Button-BIxX7iif.js";import{n as a,t as o}from"./useLockBodyScroll-B2lDe3uY.js";var s,c,l,u;t((()=>{s=e(n()),o(),r(),c=()=>{let[e,t]=(0,s.useState)(!1);return a(e),s.createElement(s.Fragment,null,s.createElement(i,{kind:`secondary`,onClick:()=>{t(!e)}},`Click to `,e?`En`:`Dis`,`able Scrolling`))},l={title:`Hooks/useLockBodyScroll`,tags:[`autodocs`,`!dev`]},c.__docgenInfo={description:``,methods:[],displayName:`Overview`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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