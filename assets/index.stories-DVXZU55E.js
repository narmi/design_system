import{e}from"./iframe-C2GiQxmI.js";import{T as a}from"./index-DWMJLY5U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CntWuU9k.js";import"./index-BC6qydrt.js";import"./index-RvS1aOr8.js";import"./downshift.esm-DwlqoaV8.js";import"./extends-DDykod_l.js";import"./index-Bmp4nDZ5.js";import"./index-Chjiymov.js";import"./tslib.es6-rrx6G-_s.js";import"./index-DVLYIVHb.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-CXxQfNKn.js";import"./index-DvmsuEf6.js";import"./index-H0FE9JcS.js";import"./AsElement-B4slwwSK.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var d in r)({}).hasOwnProperty.call(r,d)&&(t[d]=r[d])}return t},p.apply(null,arguments)}const{action:o}=__STORYBOOK_MODULE_ACTIONS__,N={title:"Components/TableSelect",component:a},u=["Apple","Apricot","Banana","Blueberry","Cherry","Grape","Grapefruit","Lemon","Lime","Mango","Orange","Peach","Pear"],l=t=>e.createElement(a,p({onChange:o("onChange")},t),u.map(n=>e.createElement(a.Item,{key:n,value:n},n)));l.args={id:"fruit-select",label:"Select a fruit",isDisabled:!1,hasError:!1};const s=()=>e.createElement(a,{id:"account-select",label:"Select an account",onChange:o("onChange")},e.createElement(a.Item,{value:"checking-001",searchValue:"Checking - ***001"},e.createElement("div",null,e.createElement("div",null,"Checking Account"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***001"))),e.createElement(a.Item,{value:"savings-001",searchValue:"Savings - ***001"},e.createElement("div",null,e.createElement("div",null,"Savings Account"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***001"))),e.createElement(a.Item,{value:"credit-003",searchValue:"Credit - ***003"},e.createElement("div",null,e.createElement("div",null,"Credit Card"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***003")))),i=()=>e.createElement(a,{id:"fruit-select-disabled",label:"Select a fruit",isDisabled:!0,onChange:o("onChange")},u.map(t=>e.createElement(a.Item,{key:t,value:t},t))),m=()=>e.createElement(a,{id:"fruit-select-error",label:"Select a fruit",hasError:!0,errorText:"Please select a valid fruit",onChange:o("onChange")},u.map(t=>e.createElement(a.Item,{key:t,value:t},t))),c=()=>{const[t,n]=e.useState("Grape");return e.createElement(a,{id:"fruit-select-preselected",label:"Select a fruit",value:t,onChange:r=>{o("onChange")(r),n(r)}},u.map(r=>e.createElement(a.Item,{key:r,value:r},r)))};c.parameters={docs:{description:{story:"TableSelect manages selection internally through the onChange callback."}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  return <TableSelect onChange={action("onChange")} {...args}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <TableSelect id="fruit-select-disabled" label="Select a fruit" isDisabled={true} onChange={action("onChange")}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <TableSelect id="fruit-select-error" label="Select a fruit" hasError={true} errorText="Please select a valid fruit" onChange={action("onChange")}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = React.useState("Grape");
  return <TableSelect id="fruit-select-preselected" label="Select a fruit" value={selectedValue} onChange={value => {
    action("onChange")(value);
    setSelectedValue(value);
  }}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...c.parameters?.docs?.source}}};const P=["Basic","WithCustomContent","Disabled","WithError","PreSelectedValue"];export{l as Basic,i as Disabled,c as PreSelectedValue,s as WithCustomContent,m as WithError,P as __namedExportsOrder,N as default};
