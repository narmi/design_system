import{r,e as t}from"./iframe-B6U_AUin.js";import{u as n}from"./index-D4NHbEip.js";import{B as c}from"./index-DhOJuQ-h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-DA1uPFFv.js";import"./index-yR_1GfOG.js";import"./index-CSVNVB3E.js";const e=()=>{const[o,s]=r.useState(!1);return n(o),t.createElement(t.Fragment,null,t.createElement(c,{kind:"secondary",onClick:()=>{s(!o)}},"Click to ",o?"En":"Dis","able Scrolling"))},L={title:"Hooks/useLockBodyScroll",tags:["autodocs","!dev"]};e.__docgenInfo={description:"",methods:[],displayName:"Overview"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
