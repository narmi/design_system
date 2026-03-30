import{r,e as t}from"./iframe-5fvx2Z6l.js";import{u as n}from"./index-DYVyqIDH.js";import{B as c}from"./index-NCiYTp8V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-DgtwEuyW.js";import"./index-DjozX-4p.js";import"./index-DQs0zBf-.js";const e=()=>{const[o,s]=r.useState(!1);return n(o),t.createElement(t.Fragment,null,t.createElement(c,{kind:"secondary",onClick:()=>{s(!o)}},"Click to ",o?"En":"Dis","able Scrolling"))},L={title:"Hooks/useLockBodyScroll",tags:["autodocs","!dev"]};e.__docgenInfo={description:"",methods:[],displayName:"Overview"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [isLocked, setIsLocked] = useState(false);
  useLockBodyScroll(isLocked);
  return <>
      <Button kind={"secondary"} onClick={() => {
      setIsLocked(!isLocked);
    }}>
        Click to {isLocked ? "En" : "Dis"}able Scrolling
      </Button>
    </>;
}`,...e.parameters?.docs?.source}}};const S=["Overview"];export{e as Overview,S as __namedExportsOrder,L as default};
