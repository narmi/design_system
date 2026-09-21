import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-pRI8RQc4.js";import{n as r,t as i}from"./TableSelect-B4ufXQOx.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(null,arguments)}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;t((()=>{o=e(n()),r(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,{expect:c,screen:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/TableSelect`,component:i},f=[`Apple`,`Apricot`,`Banana`,`Blueberry`,`Cherry`,`Grape`,`Grapefruit`,`Lemon`,`Lime`,`Mango`,`Orange`,`Peach`,`Pear`],p=e=>o.createElement(i,a({onChange:s(`onChange`)},e),f.map(e=>o.createElement(i.Item,{key:e,value:e},e))),p.args={id:`fruit-select`,label:`Select a fruit`,isDisabled:!1,hasError:!1},m={name:`Interaction: Opens on click`,render:()=>o.createElement(i,{id:`fruit-open`,label:`Select a fruit`,onChange:()=>{}},f.map(e=>o.createElement(i.Item,{key:e,value:e},e))),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`,{name:/select a fruit/i})),await u(()=>c(l.getByRole(`option`,{name:`Apple`})).toBeVisible())}},h={name:`Interaction: Selects an option`,render:()=>o.createElement(i,{id:`fruit-select-story`,label:`Select a fruit`,onChange:()=>{}},f.map(e=>o.createElement(i.Item,{key:e,value:e},e))),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`combobox`,{name:/select a fruit/i});await t.click(n),await u(()=>c(l.getByRole(`option`,{name:`Banana`})).toBeVisible()),await t.click(l.getByRole(`option`,{name:`Banana`})),await u(()=>c(n).toHaveTextContent(`Banana`))}},g=()=>o.createElement(i,{id:`account-select`,label:`Select an account`,onChange:s(`onChange`)},o.createElement(i.Item,{value:`checking-001`,searchValue:`Checking - ***001`},o.createElement(`div`,null,o.createElement(`div`,null,`Checking Account`),o.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***001`))),o.createElement(i.Item,{value:`savings-001`,searchValue:`Savings - ***001`},o.createElement(`div`,null,o.createElement(`div`,null,`Savings Account`),o.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***001`))),o.createElement(i.Item,{value:`credit-003`,searchValue:`Credit - ***003`},o.createElement(`div`,null,o.createElement(`div`,null,`Credit Card`),o.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***003`)))),_=()=>o.createElement(i,{id:`fruit-select-disabled`,label:`Select a fruit`,isDisabled:!0,onChange:s(`onChange`)},f.map(e=>o.createElement(i.Item,{key:e,value:e},e))),v=()=>o.createElement(i,{id:`fruit-select-error`,label:`Select a fruit`,hasError:!0,errorText:`Please select a valid fruit`,onChange:s(`onChange`)},f.map(e=>o.createElement(i.Item,{key:e,value:e},e))),y=()=>{let[e,t]=o.useState(`Grape`);return o.createElement(i,{id:`fruit-select-preselected`,label:`Select a fruit`,value:e,onChange:e=>{s(`onChange`)(e),t(e)}},f.map(e=>o.createElement(i.Item,{key:e,value:e},e)))},y.parameters={docs:{description:{story:`TableSelect manages selection internally through the onChange callback.`}}},b=()=>o.createElement(`main`,{style:{height:`200vh`}},o.createElement(`div`,{className:`margin--bottom`,style:{marginTop:`100vh`}}),o.createElement(i,{id:`fruit-select-scrolling`,label:`Select a fruit`,onChange:s(`onChange`)},f.map(e=>o.createElement(i.Item,{key:e,value:e},e)))),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  return <TableSelect onChange={action("onChange")} {...args}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on click",
  render: () => <TableSelect id="fruit-open" label="Select a fruit" onChange={() => {}}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("combobox", {
      name: /select a fruit/i
    }));
    await waitFor(() => expect(screen.getByRole("option", {
      name: "Apple"
    })).toBeVisible());
  }
}`,...m.parameters?.docs?.source},description:{story:`Interaction test that opens the TableSelect so Chromatic can snapshot
the dropdown. The menu is portalled to the body, so options are queried
via \`screen\`.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Selects an option",
  render: () => <TableSelect id="fruit-select-story" label="Select a fruit" onChange={() => {}}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const trigger = canvas.getByRole("combobox", {
      name: /select a fruit/i
    });
    await userEvent.click(trigger);
    await waitFor(() => expect(screen.getByRole("option", {
      name: "Banana"
    })).toBeVisible());
    await userEvent.click(screen.getByRole("option", {
      name: "Banana"
    }));
    await waitFor(() => expect(trigger).toHaveTextContent("Banana"));
  }
}`,...h.parameters?.docs?.source},description:{story:`Interaction test for the selection flow: open, pick an option, and
verify the trigger reflects the choice.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <TableSelect id="fruit-select-disabled" label="Select a fruit" isDisabled={true} onChange={action("onChange")}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <TableSelect id="fruit-select-error" label="Select a fruit" hasError={true} errorText="Please select a valid fruit" onChange={action("onChange")}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = React.useState("Grape");
  return <TableSelect id="fruit-select-preselected" label="Select a fruit" value={selectedValue} onChange={value => {
    action("onChange")(value);
    setSelectedValue(value);
  }}>
      {mockItems.map(item => <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>)}
    </TableSelect>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`Basic`,`Opens`,`SelectsOption`,`WithCustomContent`,`Disabled`,`WithError`,`PreSelectedValue`,`ScrollingBehavior`]}))();export{p as Basic,_ as Disabled,m as Opens,y as PreSelectedValue,b as ScrollingBehavior,h as SelectsOption,g as WithCustomContent,v as WithError,x as __namedExportsOrder,d as default};