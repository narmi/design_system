import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-B5brrW0I.js";import{n as r,t as i}from"./ContentCard-TxvyCRQH.js";var a,o,s,c,l,u,d,f,p;t((()=>{a=e(n()),r(),o=e=>a.createElement(`div`,{className:`bgColor--snowGrey alignChild--center--center padding--all--xl`},a.createElement(i,e)),s=o.bind({}),s.args={children:a.createElement(a.Fragment,null,a.createElement(`h3`,{className:`fontSize--heading4 padding--bottom--s`},`Anything can go in here`),a.createElement(`div`,null,`The card will grow to fit the width of its parent container`))},c=()=>a.createElement(i,{kind:`button`,onClick:()=>{alert(`button card clicked`)}},a.createElement(`h3`,{className:`fontSize--heading4 padding--bottom--xs`},`Button card`),a.createElement(`div`,{className:`fontSize--s fontColor--secondary`},`This card behaves like an html `,a.createElement(`code`,null,`button`),`.`)),c.parameters={docs:{description:{story:"Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop."}}},l=()=>{let[e,t]=(0,a.useState)(!1);return a.createElement(i,{kind:`toggle`,onClick:()=>{t(e=>!e)},isSelected:e},a.createElement(`h3`,{className:`fontSize--heading4 padding--bottom--xs`},`Toggle card`),a.createElement(`div`,{className:`fontSize--s fontColor--secondary`},`This card is currently`,` `,a.createElement(`em`,null,e?`selected`:`not selected`)))},l.parameters={docs:{description:{story:"Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop."}}},u=()=>a.createElement(i,{kind:`button`,onClick:()=>{alert(`button card clicked`)},error:`Something else is required before you can continue`},a.createElement(`h3`,{className:`fontSize--heading4 padding--bottom--xs`},`Button card`),a.createElement(`div`,{className:`fontSize--s fontColor--secondary`},`This card behaves like an html `,a.createElement(`code`,null,`button`),`.`)),c.parameters={docs:{description:{story:"Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop."}}},d={title:`Components/ContentCard`,component:i,argTypes:{type:{table:{disable:!0}}}},f=o.bind({}),f.args={kind:`ai`,children:a.createElement(a.Fragment,null,a.createElement(`h3`,{className:`fontSize--heading4 padding--bottom--s`},`Anything can go in here`),a.createElement(`div`,null,`The card will grow to fit the width of its parent container`))},c.__docgenInfo={description:``,methods:[],displayName:`ButtonCard`},l.__docgenInfo={description:``,methods:[],displayName:`ToggleCard`},u.__docgenInfo={description:``,methods:[],displayName:`ButtonCardWithError`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
    <ContentCard {...args} />
  </div>`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <ContentCard kind="button" onClick={() => {
  alert("button card clicked");
}}>
    <h3 className="fontSize--heading4 padding--bottom--xs">Button card</h3>
    <div className="fontSize--s fontColor--secondary">
      This card behaves like an html <code>button</code>.
    </div>
  </ContentCard>`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <ContentCard kind="button" onClick={() => {
  alert("button card clicked");
}} error="Something else is required before you can continue">
    <h3 className="fontSize--heading4 padding--bottom--xs">Button card</h3>
    <div className="fontSize--s fontColor--secondary">
      This card behaves like an html <code>button</code>.
    </div>
  </ContentCard>`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
    <ContentCard {...args} />
  </div>`,...f.parameters?.docs?.source}}},p=[`Overview`,`ButtonCard`,`ToggleCard`,`ButtonCardWithError`,`AIVariant`]}))();export{f as AIVariant,c as ButtonCard,u as ButtonCardWithError,s as Overview,l as ToggleCard,p as __namedExportsOrder,d as default};