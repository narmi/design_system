import{r as s,e as t}from"./iframe-BBFkYpee.js";import{u as n}from"./index-C5HeVMBe.js";import{B as c}from"./index-C6iFNxnF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-DAVRWOOb.js";import"./index-CA1B0jeb.js";import"./index-U9exmUpV.js";import"./index-DZfgTdK7.js";const e=()=>{const[o,r]=s.useState(!1);return n(o),t.createElement(t.Fragment,null,t.createElement(c,{kind:"secondary",onClick:()=>{r(!o)}},"Click to ",o?"En":"Dis","able Scrolling"))},S={title:"Hooks/useLockBodyScroll",tags:["autodocs","!dev"]};e.__docgenInfo={description:"",methods:[],displayName:"Overview"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
