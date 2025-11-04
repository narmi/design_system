import{r as s,e as t}from"./iframe-CzJgcdY_.js";import{u as n}from"./index-BA4vvXK_.js";import{B as c}from"./index-9hrIl444.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-CGROeNBF.js";import"./index-atmsGtnL.js";import"./index-CP6V8-MG.js";import"./index-CTWP3cF_.js";const e=()=>{const[o,r]=s.useState(!1);return n(o),t.createElement(t.Fragment,null,t.createElement(c,{kind:"secondary",onClick:()=>{r(!o)}},"Click to ",o?"En":"Dis","able Scrolling"))},S={title:"Hooks/useLockBodyScroll",tags:["autodocs","!dev"]};e.__docgenInfo={description:"",methods:[],displayName:"Overview"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [isLocked, setIsLocked] = useState(false);
  useLockBodyScroll(isLocked);
  return <>
      <Button kind={"secondary"} onClick={() => {
      setIsLocked(!isLocked);
    }}>
        Click to {isLocked ? "En" : "Dis"}able Scrolling
      </Button>
    </>;
}`,...e.parameters?.docs?.source}}};const f=["Overview"];export{e as Overview,f as __namedExportsOrder,S as default};
