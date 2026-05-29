import{r as m,e}from"./iframe-CqlVqdpp.js";import{D as a}from"./index-CJWU2PtY.js";import{P as u}from"./index-RV7-GTvY.js";import{R as T}from"./index-C5iqd708.js";import{F as h}from"./index-DFFjW65-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./index-Bh4yiNoP.js";import"./Combination-C6wVkQDM.js";import"./tslib.es6-Dem0CNzv.js";import"./index-DoWYy1ut.js";import"./index-Bchf-5oU.js";import"./index-CjvGcNta.js";import"./AsElement-CdroCN1L.js";import"./index-Dxf2KNbg.js";const y=i=>e.createElement(a,i),p=y.bind({});p.args={labelText:"State"};const t=()=>e.createElement(a,{labelText:"Filters (6)"});t.parameters={docs:{description:{story:"The `displayValue` can be omitted if you only need to render a label"}}};const n=()=>{const[i,d]=m.useState(["Detroit, MI","Chicago, IL","Miami, FL","Boston, MA","Seattle, WA","Denver, CO","Houston, TX","Philadelphia, PA"]),l=o=>{d(g=>{const c=new Set(g);return c.delete(o),[...c]})};return e.createElement(a,{displayValue:null,startContent:e.createElement("span",{className:"nds-dropdownTrigger-tokens padding--y--xs"},i.map(o=>e.createElement(h,{key:o,label:o,onDismiss:l})))})};n.parameters={docs:{description:{story:"The `startContent` and `endContent` props may be used to render arbitrary JSX, like tokens and icons."}}};const r=()=>e.createElement(a,{labelText:"Account",displayValue:"Checking (1234)",errorText:"This account is not eligible"});r.parameters={docs:{description:{story:"Pass `errorText` to enable the error state of `DropdownTrigger`"}}};const s=()=>{const[i,d]=m.useState(""),l=e.createElement("div",{className:"padding--top padding--x"},e.createElement(T,{name:"fondueType",options:{Chocolate:"Chocolate",Cheese:"Cheese"},onChange:({target:o})=>{d(o.value)}}));return e.createElement(e.Fragment,null,e.createElement(u,{content:l,matchTriggerWidth:!0},e.createElement(a,{labelText:"Fondue Preference",displayValue:i,minWidth:"340px"})))};s.parameters={docs:{description:{story:"The `DropdownTrigger` component was designed to be composed with `Popover` or any other modal UI element. In this example, `DropdownTrigger` is used as a triggering element for the `Popover` component."}}};const I={title:"Components/DropdownTrigger",component:a,argTypes:{displayValue:{options:["","NY","CA"]}}};t.__docgenInfo={description:"",methods:[],displayName:"LabelOnly"};n.__docgenInfo={description:"",methods:[],displayName:"WithTokensAsStartContent"};r.__docgenInfo={description:"",methods:[],displayName:"ErrorState"};s.__docgenInfo={description:"",methods:[],displayName:"ComposingWithPopover"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <DropdownTrigger {...args} />",...p.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'() => <DropdownTrigger labelText="Filters (6)" />',...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'() => <DropdownTrigger labelText="Account" displayValue="Checking (1234)" errorText="This account is not eligible" />',...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const N=["Overview","LabelOnly","WithTokensAsStartContent","ErrorState","ComposingWithPopover"];export{s as ComposingWithPopover,r as ErrorState,t as LabelOnly,p as Overview,n as WithTokensAsStartContent,N as __namedExportsOrder,I as default};
