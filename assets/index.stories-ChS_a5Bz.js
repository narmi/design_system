import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe--W4f4aLN.js";import{n as r,t as i}from"./Popover-D9O827ge.js";import{n as a,t as o}from"./DropdownTrigger-BETG6Nl0.js";import{n as s,t as c}from"./RadioButtons-C4d1wmgM.js";import{n as l,t as u}from"./FieldToken-eM_8XPYY.js";var d,f,p,m,h,g,_,v,y;t((()=>{d=e(n()),a(),r(),s(),l(),f=e=>d.createElement(o,e),p=f.bind({}),p.args={labelText:`State`},m=()=>d.createElement(o,{labelText:`Filters (6)`}),m.parameters={docs:{description:{story:"The `displayValue` can be omitted if you only need to render a label"}}},h=()=>{let[e,t]=(0,d.useState)([`Detroit, MI`,`Chicago, IL`,`Miami, FL`,`Boston, MA`,`Seattle, WA`,`Denver, CO`,`Houston, TX`,`Philadelphia, PA`]),n=e=>{t(t=>{let n=new Set(t);return n.delete(e),[...n]})};return d.createElement(o,{displayValue:null,startContent:d.createElement(`span`,{className:`nds-dropdownTrigger-tokens padding--y--xs`},e.map(e=>d.createElement(u,{key:e,label:e,onDismiss:n})))})},h.parameters={docs:{description:{story:"The `startContent` and `endContent` props may be used to render arbitrary JSX, like tokens and icons."}}},g=()=>d.createElement(o,{labelText:`Account`,displayValue:`Checking (1234)`,errorText:`This account is not eligible`}),g.parameters={docs:{description:{story:"Pass `errorText` to enable the error state of `DropdownTrigger`"}}},_=()=>{let[e,t]=(0,d.useState)(``),n=d.createElement(`div`,{className:`padding--top padding--x`},d.createElement(c,{name:`fondueType`,options:{Chocolate:`Chocolate`,Cheese:`Cheese`},onChange:({target:e})=>{t(e.value)}}));return d.createElement(d.Fragment,null,d.createElement(i,{content:n,matchTriggerWidth:!0},d.createElement(o,{labelText:`Fondue Preference`,displayValue:e,minWidth:`340px`})))},_.parameters={docs:{description:{story:"The `DropdownTrigger` component was designed to be composed with `Popover` or any other modal UI element. In this example, `DropdownTrigger` is used as a triggering element for the `Popover` component."}}},v={title:`Components/DropdownTrigger`,component:o,argTypes:{displayValue:{options:[``,`NY`,`CA`]}}},m.__docgenInfo={description:``,methods:[],displayName:`LabelOnly`},h.__docgenInfo={description:``,methods:[],displayName:`WithTokensAsStartContent`},g.__docgenInfo={description:``,methods:[],displayName:`ErrorState`},_.__docgenInfo={description:``,methods:[],displayName:`ComposingWithPopover`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <DropdownTrigger {...args} />`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <DropdownTrigger labelText="Filters (6)" />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <DropdownTrigger labelText="Account" displayValue="Checking (1234)" errorText="This account is not eligible" />`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},y=[`Overview`,`LabelOnly`,`WithTokensAsStartContent`,`ErrorState`,`ComposingWithPopover`]}))();export{_ as ComposingWithPopover,g as ErrorState,m as LabelOnly,p as Overview,h as WithTokensAsStartContent,y as __namedExportsOrder,v as default};