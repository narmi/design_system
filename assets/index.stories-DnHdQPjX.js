import{e,r as p}from"./iframe-BBFkYpee.js";import{C as s}from"./index-BmF7u0ui.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./index-Dos-RCSj.js";import"./index-CA1B0jeb.js";const c=d=>e.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},e.createElement(s,d)),a=c.bind({});a.args={children:e.createElement(e.Fragment,null,e.createElement("h3",{className:"fontSize--heading4 padding--bottom--s"},"Anything can go in here"),e.createElement("div",null,"The card will grow to fit the width of its parent container"))};const t=()=>e.createElement(s,{kind:"button",onClick:()=>{alert("button card clicked")}},e.createElement("h3",{className:"fontSize--heading4 padding--bottom--xs"},"Button card"),e.createElement("div",{className:"fontSize--s fontColor--secondary"},"This card behaves like an html ",e.createElement("code",null,"button"),"."));t.parameters={docs:{description:{story:"Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop."}}};const n=()=>{const[d,i]=p.useState(!1),l=()=>{i(m=>!m)};return e.createElement(s,{kind:"toggle",onClick:l,isSelected:d},e.createElement("h3",{className:"fontSize--heading4 padding--bottom--xs"},"Toggle card"),e.createElement("div",{className:"fontSize--s fontColor--secondary"},"This card is currently"," ",e.createElement("em",null,d?"selected":"not selected")))};n.parameters={docs:{description:{story:"Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop."}}};const r=()=>e.createElement(s,{kind:"button",onClick:()=>{alert("button card clicked")},error:"Something else is required before you can continue"},e.createElement("h3",{className:"fontSize--heading4 padding--bottom--xs"},"Button card"),e.createElement("div",{className:"fontSize--s fontColor--secondary"},"This card behaves like an html ",e.createElement("code",null,"button"),"."));t.parameters={docs:{description:{story:"Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop."}}};const b={title:"Components/ContentCard",component:s,argTypes:{type:{table:{disable:!0}}}},o=c.bind({});o.args={kind:"ai",children:e.createElement(e.Fragment,null,e.createElement("h3",{className:"fontSize--heading4 padding--bottom--s"},"Anything can go in here"),e.createElement("div",null,"The card will grow to fit the width of its parent container"))};t.__docgenInfo={description:"",methods:[],displayName:"ButtonCard"};n.__docgenInfo={description:"",methods:[],displayName:"ToggleCard"};r.__docgenInfo={description:"",methods:[],displayName:"ButtonCardWithError"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
    <ContentCard {...args} />
  </div>`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <ContentCard kind="button" onClick={() => {
  alert("button card clicked");
}}>
    <h3 className="fontSize--heading4 padding--bottom--xs">Button card</h3>
    <div className="fontSize--s fontColor--secondary">
      This card behaves like an html <code>button</code>.
    </div>
  </ContentCard>`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [isCardSelected, setIsCardSelected] = useState(false);
  const handleClick = () => {
    setIsCardSelected(isCardSelected => !isCardSelected);
  };
  return <ContentCard kind="toggle" onClick={handleClick} isSelected={isCardSelected}>
      <h3 className="fontSize--heading4 padding--bottom--xs">Toggle card</h3>
      <div className="fontSize--s fontColor--secondary">
        This card is currently{" "}
        <em>{isCardSelected ? "selected" : "not selected"}</em>
      </div>
    </ContentCard>;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <ContentCard kind="button" onClick={() => {
  alert("button card clicked");
}} error="Something else is required before you can continue">
    <h3 className="fontSize--heading4 padding--bottom--xs">Button card</h3>
    <div className="fontSize--s fontColor--secondary">
      This card behaves like an html <code>button</code>.
    </div>
  </ContentCard>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
    <ContentCard {...args} />
  </div>`,...o.parameters?.docs?.source}}};const k=["Overview","ButtonCard","ToggleCard","ButtonCardWithError","AIVariant"];export{o as AIVariant,t as ButtonCard,r as ButtonCardWithError,a as Overview,n as ToggleCard,k as __namedExportsOrder,b as default};
