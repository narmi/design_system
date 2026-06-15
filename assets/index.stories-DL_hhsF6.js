import{e}from"./iframe-DC9YD7X8.js";import{T as a}from"./index-BAJBzMxz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iAQrrA0j.js";import"./index-ZdqFTIo0.js";import"./index-RvS1aOr8.js";import"./downshift.esm-DT9bSls0.js";import"./tslib.es6-Dem0CNzv.js";import"./index-BYm_JNFr.js";import"./index--gnqJ8Sc.js";import"./index-DyWgbdfm.js";import"./index-DZ7jJsT5.js";import"./index-Cfgm8Wir.js";import"./AsElement-BYiERQHm.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var S in n)({}).hasOwnProperty.call(n,S)&&(t[S]=n[S])}return t},p.apply(null,arguments)}const{action:l}=__STORYBOOK_MODULE_ACTIONS__,_={title:"Components/TableSelect",component:a},s=["Apple","Apricot","Banana","Blueberry","Cherry","Grape","Grapefruit","Lemon","Lime","Mango","Orange","Peach","Pear"],c=t=>e.createElement(a,p({onChange:l("onChange")},t),s.map(r=>e.createElement(a.Item,{key:r,value:r},r)));c.args={id:"fruit-select",label:"Select a fruit",isDisabled:!1,hasError:!1};const i=()=>e.createElement(a,{id:"account-select",label:"Select an account",onChange:l("onChange")},e.createElement(a.Item,{value:"checking-001",searchValue:"Checking - ***001"},e.createElement("div",null,e.createElement("div",null,"Checking Account"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***001"))),e.createElement(a.Item,{value:"savings-001",searchValue:"Savings - ***001"},e.createElement("div",null,e.createElement("div",null,"Savings Account"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***001"))),e.createElement(a.Item,{value:"credit-003",searchValue:"Credit - ***003"},e.createElement("div",null,e.createElement("div",null,"Credit Card"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***003")))),m=()=>e.createElement(a,{id:"fruit-select-disabled",label:"Select a fruit",isDisabled:!0,onChange:l("onChange")},s.map(t=>e.createElement(a.Item,{key:t,value:t},t))),u=()=>e.createElement(a,{id:"fruit-select-error",label:"Select a fruit",hasError:!0,errorText:"Please select a valid fruit",onChange:l("onChange")},s.map(t=>e.createElement(a.Item,{key:t,value:t},t))),o=()=>{const[t,r]=e.useState("Grape");return e.createElement(a,{id:"fruit-select-preselected",label:"Select a fruit",value:t,onChange:n=>{l("onChange")(n),r(n)}},s.map(n=>e.createElement(a.Item,{key:n,value:n},n)))};o.parameters={docs:{description:{story:"TableSelect manages selection internally through the onChange callback."}}};const d=()=>e.createElement("main",{style:{height:"200vh"}},e.createElement("div",{className:"margin--bottom",style:{marginTop:"100vh"}}),e.createElement(a,{id:"fruit-select-scrolling",label:"Select a fruit",onChange:l("onChange")},s.map(t=>e.createElement(a.Item,{key:t,value:t},t))));c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  return <TableSelect onChange={action("onChange")} {...args}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <TableSelect id="account-select" label="Select an account" onChange={action("onChange")}>
      <TableSelect.Item value="checking-001" searchValue="Checking - ***001">
        <div>
          <div>Checking Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableSelect.Item>
      <TableSelect.Item value="savings-001" searchValue="Savings - ***001">
        <div>
          <div>Savings Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableSelect.Item>
      <TableSelect.Item value="credit-003" searchValue="Credit - ***003">
        <div>
          <div>Credit Card</div>
          <div className="fontSize--xs fontColor--secondary">***003</div>
        </div>
      </TableSelect.Item>
    </TableSelect>;
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <TableSelect id="fruit-select-disabled" label="Select a fruit" isDisabled={true} onChange={action("onChange")}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <TableSelect id="fruit-select-error" label="Select a fruit" hasError={true} errorText="Please select a valid fruit" onChange={action("onChange")}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = React.useState("Grape");
  return <TableSelect id="fruit-select-preselected" label="Select a fruit" value={selectedValue} onChange={value => {
    action("onChange")(value);
    setSelectedValue(value);
  }}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <main style={{
    height: "200vh"
  }}>
      <div className="margin--bottom" style={{
      marginTop: "100vh"
    }} />
      <TableSelect id="fruit-select-scrolling" label="Select a fruit" onChange={action("onChange")}>
        {mockItems.map(item => <TableSelect.Item key={item} value={item}>
            {item}
          </TableSelect.Item>)}
      </TableSelect>
    </main>;
}`,...d.parameters?.docs?.source}}};const N=["Basic","WithCustomContent","Disabled","WithError","PreSelectedValue","ScrollingBehavior"];export{c as Basic,m as Disabled,o as PreSelectedValue,d as ScrollingBehavior,i as WithCustomContent,u as WithError,N as __namedExportsOrder,_ as default};
