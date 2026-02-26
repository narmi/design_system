import{e,r as m}from"./iframe-BPsAvrl-.js";import{D as a}from"./index-D7DPQ8wB.js";import{P as u}from"./index-Co8S-Og_.js";import{R as T}from"./index-DJwyXEX0.js";import{F as h}from"./index-qX9XkQ45.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./index-BSxLBRVe.js";import"./dom-bwD9wktB.js";import"./index-DT_T6eR6.js";import"./index-1P9theSN.js";import"./Combination-D2bCWS8U.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";import"./index-DuCnxnjy.js";import"./index-eA5g-JiE.js";import"./AsElement-6t3Ye-6H.js";import"./index-D1X_mtqU.js";const y=i=>e.createElement(a,i),p=y.bind({});p.args={labelText:"State"};const t=()=>e.createElement(a,{labelText:"Filters (6)"});t.parameters={docs:{description:{story:"The `displayValue` can be omitted if you only need to render a label"}}};const r=()=>{const[i,d]=m.useState(["Detroit, MI","Chicago, IL","Miami, FL","Boston, MA","Seattle, WA","Denver, CO","Houston, TX","Philadelphia, PA"]),l=o=>{d(g=>{const c=new Set(g);return c.delete(o),[...c]})};return e.createElement(a,{displayValue:null,startContent:e.createElement("span",{className:"nds-dropdownTrigger-tokens padding--y--xs"},i.map(o=>e.createElement(h,{key:o,label:o,onDismiss:l})))})};r.parameters={docs:{description:{story:"The `startContent` and `endContent` props may be used to render arbitrary JSX, like tokens and icons."}}};const n=()=>e.createElement(a,{labelText:"Account",displayValue:"Checking (1234)",errorText:"This account is not eligible"});n.parameters={docs:{description:{story:"Pass `errorText` to enable the error state of `DropdownTrigger`"}}};const s=()=>{const[i,d]=m.useState(""),l=e.createElement("div",{className:"padding--top padding--x"},e.createElement(T,{name:"fondueType",options:{Chocolate:"Chocolate",Cheese:"Cheese"},onChange:({target:o})=>{d(o.value)}}));return e.createElement(e.Fragment,null,e.createElement(u,{content:l,matchTriggerWidth:!0},e.createElement(a,{labelText:"Fondue Preference",displayValue:i,minWidth:"340px"})))};s.parameters={docs:{description:{story:"The `DropdownTrigger` component was designed to be composed with `Popover` or any other modal UI element. In this example, `DropdownTrigger` is used as a triggering element for the `Popover` component."}}};const L={title:"Components/DropdownTrigger",component:a,argTypes:{displayValue:{options:["","NY","CA"]}}};t.__docgenInfo={description:"",methods:[],displayName:"LabelOnly"};r.__docgenInfo={description:"",methods:[],displayName:"WithTokensAsStartContent"};n.__docgenInfo={description:"",methods:[],displayName:"ErrorState"};s.__docgenInfo={description:"",methods:[],displayName:"ComposingWithPopover"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <DropdownTrigger {...args} />",...p.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'() => <DropdownTrigger labelText="Filters (6)" />',...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [tokens, setTokens] = useState(["Detroit, MI", "Chicago, IL", "Miami, FL", "Boston, MA", "Seattle, WA", "Denver, CO", "Houston, TX", "Philadelphia, PA"]);
  const handleTokenDismiss = token => {
    setTokens(oldTokens => {
      const newTokens = new Set(oldTokens);
      newTokens.delete(token);
      return [...newTokens];
    });
  };
  return <DropdownTrigger displayValue={null} startContent={<span className="nds-dropdownTrigger-tokens padding--y--xs">
          {tokens.map(label => <FieldToken key={label} label={label} onDismiss={handleTokenDismiss} />)}
        </span>} />;
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'() => <DropdownTrigger labelText="Account" displayValue="Checking (1234)" errorText="This account is not eligible" />',...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [fondueType, setFondueType] = useState("");
  const popoverContent = <div className="padding--top padding--x">
      <RadioButtons name="fondueType" options={{
      Chocolate: "Chocolate",
      Cheese: "Cheese"
    }} onChange={({
      target
    }) => {
      setFondueType(target.value);
    }} />
    </div>;
  return <>
      <Popover content={popoverContent} matchTriggerWidth>
        <DropdownTrigger labelText="Fondue Preference" displayValue={fondueType} minWidth="340px" />
      </Popover>
    </>;
}`,...s.parameters?.docs?.source}}};const M=["Overview","LabelOnly","WithTokensAsStartContent","ErrorState","ComposingWithPopover"];export{s as ComposingWithPopover,n as ErrorState,t as LabelOnly,p as Overview,r as WithTokensAsStartContent,M as __namedExportsOrder,L as default};
