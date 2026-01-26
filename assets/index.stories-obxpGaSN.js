import{e}from"./iframe-CTHFVwiB.js";import{T as a}from"./index-C75DeE1R.js";import{B as g}from"./index-UI0I0XKB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./downshift.esm-BZnkhwRr.js";import"./extends-DDykod_l.js";import"./index-B3NVBfVJ.js";import"./index-Chjiymov.js";import"./tslib.es6-rrx6G-_s.js";import"./dom-B7XutmAi.js";import"./index-DChBguUb.js";import"./index-CmwxXSSA.js";import"./index-DZf7ozVt.js";import"./AsElement-BZSYqSPH.js";import"./index-Cscwlsgh.js";import"./index-Bl5gE4QZ.js";function d(){return d=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var h in o)({}).hasOwnProperty.call(o,h)&&(t[h]=o[h])}return t},d.apply(null,arguments)}const{action:n}=__STORYBOOK_MODULE_ACTIONS__,N={title:"Components/TableAutocomplete",component:a},m=["Apple","Apricot","Banana","Blueberry","Cherry","Grape","Grapefruit","Lemon","Lime","Mango","Orange","Peach","Pear"],l=t=>e.createElement(a,d({onChange:n("onChange"),onInputChange:n("onInputChange")},t),m.map(r=>e.createElement(a.Item,{key:r,value:r},r)));l.args={label:"Select a fruit",placeholder:"Type to search...",isDisabled:!1,hasError:!1};const u=()=>e.createElement(a,{label:"Select an account",placeholder:"Type to search...",onChange:n("onChange"),onInputChange:n("onInputChange")},e.createElement(a.Item,{value:"checking-001",searchValue:"Checking - ***001"},e.createElement("div",null,e.createElement("div",null,"Checking Account"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***001"))),e.createElement(a.Item,{value:"savings-001",searchValue:"Savings - ***001"},e.createElement("div",null,e.createElement("div",null,"Savings Account"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***001"))),e.createElement(a.Item,{value:"credit-003",searchValue:"Credit - ***003"},e.createElement("div",null,e.createElement("div",null,"Credit Card"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***003")))),s=()=>e.createElement(a,{label:"Select a fruit",placeholder:"Type to search...",onChange:n("onChange"),onInputChange:n("onInputChange"),footerContent:e.createElement(g,{size:"s",kind:"plain",label:"Add new item",onClick:n("Add new item")})},m.map(t=>e.createElement(a.Item,{key:t,value:t},t))),i=()=>e.createElement(a,{label:"Select a fruit",placeholder:"Type to search...",isDisabled:!0,inputValue:"Can't change this",onChange:n("onChange"),onInputChange:n("onInputChange")},m.map(t=>e.createElement(a.Item,{key:t,value:t},t))),p=()=>e.createElement(a,{label:"Select a fruit",placeholder:"Type to search...",hasError:!0,onChange:n("onChange"),onInputChange:n("onInputChange")},m.map(t=>e.createElement(a.Item,{key:t,value:t},t))),c=()=>{const[t,r]=e.useState("Grape");return e.createElement(a,{label:"Select a fruit",placeholder:"Type to search...",inputValue:t,onChange:n("onChange"),onInputChange:o=>{n("onInputChange")(o),r(o)}},m.map(o=>e.createElement(a.Item,{key:o,value:o},o)))};c.parameters={docs:{description:{story:"If the `inputValue` matches an item value, that item will be selected."}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  return <TableAutocomplete onChange={action("onChange")} onInputChange={action("onInputChange")} {...args}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select an account" placeholder="Type to search..." onChange={action("onChange")} onInputChange={action("onInputChange")}>
      <TableAutocomplete.Item value="checking-001" searchValue="Checking - ***001">
        <div>
          <div>Checking Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableAutocomplete.Item>
      <TableAutocomplete.Item value="savings-001" searchValue="Savings - ***001">
        <div>
          <div>Savings Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableAutocomplete.Item>
      <TableAutocomplete.Item value="credit-003" searchValue="Credit - ***003">
        <div>
          <div>Credit Card</div>
          <div className="fontSize--xs fontColor--secondary">***003</div>
        </div>
      </TableAutocomplete.Item>
    </TableAutocomplete>;
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." onChange={action("onChange")} onInputChange={action("onInputChange")} footerContent={<Button size="s" kind="plain" label="Add new item" onClick={action("Add new item")} />}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." isDisabled={true} inputValue="Can't change this" onChange={action("onChange")} onInputChange={action("onInputChange")}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." hasError={true} onChange={action("onChange")} onInputChange={action("onInputChange")}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState("Grape");
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." inputValue={inputValue} onChange={action("onChange")} onInputChange={value => {
    action("onInputChange")(value);
    setInputValue(value);
  }}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...c.parameters?.docs?.source}}};const w=["Basic","WithCustomContent","WithFooter","Disabled","WithError","PreSelectedValue"];export{l as Basic,i as Disabled,c as PreSelectedValue,u as WithCustomContent,p as WithError,s as WithFooter,w as __namedExportsOrder,N as default};
