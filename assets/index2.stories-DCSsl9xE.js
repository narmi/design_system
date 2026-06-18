import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-J6DUEc5C.js";import{n as r,t as i}from"./Button-BQ8_wTwS.js";import{n as a,t as o}from"./TableAutocomplete-DZC_MaFH.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var c,l,u,d,f,p,m,h,g,_,v;e((()=>{c=t(n()),a(),r(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Components/TableAutocomplete`,component:o},d=[`Apple`,`Apricot`,`Banana`,`Blueberry`,`Cherry`,`Grape`,`Grapefruit`,`Lemon`,`Lime`,`Mango`,`Orange`,`Peach`,`Pear`],f=e=>c.createElement(o,s({onChange:l(`onChange`),onInputChange:l(`onInputChange`)},e),d.map(e=>c.createElement(o.Item,{key:e,value:e},e))),f.args={label:`Select a fruit`,placeholder:`Type to search...`,isDisabled:!1,hasError:!1},p=()=>c.createElement(o,{label:`Select an account`,placeholder:`Type to search...`,onChange:l(`onChange`),onInputChange:l(`onInputChange`)},c.createElement(o.Item,{value:`checking-001`,searchValue:`Checking - ***001`},c.createElement(`div`,null,c.createElement(`div`,null,`Checking Account`),c.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***001`))),c.createElement(o.Item,{value:`savings-001`,searchValue:`Savings - ***001`},c.createElement(`div`,null,c.createElement(`div`,null,`Savings Account`),c.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***001`))),c.createElement(o.Item,{value:`credit-003`,searchValue:`Credit - ***003`},c.createElement(`div`,null,c.createElement(`div`,null,`Credit Card`),c.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***003`)))),m=()=>c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`,onChange:l(`onChange`),onInputChange:l(`onInputChange`),footerContent:c.createElement(i,{size:`s`,kind:`plain`,label:`Add new item`,onClick:l(`Add new item`)})},d.map(e=>c.createElement(o.Item,{key:e,value:e},e))),h=()=>c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`,isDisabled:!0,inputValue:`Can't change this`,onChange:l(`onChange`),onInputChange:l(`onInputChange`)},d.map(e=>c.createElement(o.Item,{key:e,value:e},e))),g=()=>c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`,hasError:!0,onChange:l(`onChange`),onInputChange:l(`onInputChange`)},d.map(e=>c.createElement(o.Item,{key:e,value:e},e))),_=()=>{let[e,t]=c.useState(`Grape`);return c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`,inputValue:e,onChange:l(`onChange`),onInputChange:e=>{l(`onInputChange`)(e),t(e)}},d.map(e=>c.createElement(o.Item,{key:e,value:e},e)))},_.parameters={docs:{description:{story:"If the `inputValue` matches an item value, that item will be selected."}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  return <TableAutocomplete onChange={action("onChange")} onInputChange={action("onInputChange")} {...args}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." onChange={action("onChange")} onInputChange={action("onInputChange")} footerContent={<Button size="s" kind="plain" label="Add new item" onClick={action("Add new item")} />}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." isDisabled={true} inputValue="Can't change this" onChange={action("onChange")} onInputChange={action("onInputChange")}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." hasError={true} onChange={action("onChange")} onInputChange={action("onInputChange")}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState("Grape");
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." inputValue={inputValue} onChange={action("onChange")} onInputChange={value => {
    action("onInputChange")(value);
    setInputValue(value);
  }}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,..._.parameters?.docs?.source}}},v=[`Basic`,`WithCustomContent`,`WithFooter`,`Disabled`,`WithError`,`PreSelectedValue`]}))();export{f as Basic,h as Disabled,_ as PreSelectedValue,p as WithCustomContent,g as WithError,m as WithFooter,v as __namedExportsOrder,u as default};