import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-D0FPaLQ2.js";import{n as r,t as i}from"./TableSelect-DViA2Vmw.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(null,arguments)}var o,s,c,l,u,d,f,p,m,h,g;e((()=>{o=t(n()),r(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Components/TableSelect`,component:i},l=[`Apple`,`Apricot`,`Banana`,`Blueberry`,`Cherry`,`Grape`,`Grapefruit`,`Lemon`,`Lime`,`Mango`,`Orange`,`Peach`,`Pear`],u=e=>o.createElement(i,a({onChange:s(`onChange`)},e),l.map(e=>o.createElement(i.Item,{key:e,value:e},e))),u.args={id:`fruit-select`,label:`Select a fruit`,isDisabled:!1,hasError:!1},d=()=>o.createElement(i,{id:`account-select`,label:`Select an account`,onChange:s(`onChange`)},o.createElement(i.Item,{value:`checking-001`,searchValue:`Checking - ***001`},o.createElement(`div`,null,o.createElement(`div`,null,`Checking Account`),o.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***001`))),o.createElement(i.Item,{value:`savings-001`,searchValue:`Savings - ***001`},o.createElement(`div`,null,o.createElement(`div`,null,`Savings Account`),o.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***001`))),o.createElement(i.Item,{value:`credit-003`,searchValue:`Credit - ***003`},o.createElement(`div`,null,o.createElement(`div`,null,`Credit Card`),o.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***003`)))),f=()=>o.createElement(i,{id:`fruit-select-disabled`,label:`Select a fruit`,isDisabled:!0,onChange:s(`onChange`)},l.map(e=>o.createElement(i.Item,{key:e,value:e},e))),p=()=>o.createElement(i,{id:`fruit-select-error`,label:`Select a fruit`,hasError:!0,errorText:`Please select a valid fruit`,onChange:s(`onChange`)},l.map(e=>o.createElement(i.Item,{key:e,value:e},e))),m=()=>{let[e,t]=o.useState(`Grape`);return o.createElement(i,{id:`fruit-select-preselected`,label:`Select a fruit`,value:e,onChange:e=>{s(`onChange`)(e),t(e)}},l.map(e=>o.createElement(i.Item,{key:e,value:e},e)))},m.parameters={docs:{description:{story:`TableSelect manages selection internally through the onChange callback.`}}},h=()=>o.createElement(`main`,{style:{height:`200vh`}},o.createElement(`div`,{className:`margin--bottom`,style:{marginTop:`100vh`}}),o.createElement(i,{id:`fruit-select-scrolling`,label:`Select a fruit`,onChange:s(`onChange`)},l.map(e=>o.createElement(i.Item,{key:e,value:e},e)))),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  return <TableSelect onChange={action("onChange")} {...args}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <TableSelect id="fruit-select-disabled" label="Select a fruit" isDisabled={true} onChange={action("onChange")}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <TableSelect id="fruit-select-error" label="Select a fruit" hasError={true} errorText="Please select a valid fruit" onChange={action("onChange")}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = React.useState("Grape");
  return <TableSelect id="fruit-select-preselected" label="Select a fruit" value={selectedValue} onChange={value => {
    action("onChange")(value);
    setSelectedValue(value);
  }}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g=[`Basic`,`WithCustomContent`,`Disabled`,`WithError`,`PreSelectedValue`,`ScrollingBehavior`]}))();export{u as Basic,f as Disabled,m as PreSelectedValue,h as ScrollingBehavior,d as WithCustomContent,p as WithError,g as __namedExportsOrder,c as default};