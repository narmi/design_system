import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-Bulwfw7W.js";import{n as r,t as i}from"./Button-DzpiDvx6.js";import{n as a,t as o}from"./TableAutocomplete-BcwyHfgm.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{c=e(n()),a(),r(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,{expect:u,screen:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/TableAutocomplete`,component:o},m=[`Apple`,`Apricot`,`Banana`,`Blueberry`,`Cherry`,`Grape`,`Grapefruit`,`Lemon`,`Lime`,`Mango`,`Orange`,`Peach`,`Pear`],h=e=>c.createElement(o,s({onChange:l(`onChange`),onInputChange:l(`onInputChange`)},e),m.map(e=>c.createElement(o.Item,{key:e,value:e},e))),h.args={label:`Select a fruit`,placeholder:`Type to search...`,isDisabled:!1,hasError:!1},g={name:`Interaction: Opens on typing`,render:()=>c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`},m.map(e=>c.createElement(o.Item,{key:e,value:e},e))),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`combobox`,{name:/select a fruit/i});await t.type(n,`A`),await f(()=>u(d.getByRole(`option`,{name:`Apple`})).toBeVisible())}},_={name:`Interaction: Filters and selects an item`,render:()=>c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`},m.map(e=>c.createElement(o.Item,{key:e,value:e},e))),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`combobox`,{name:/select a fruit/i});await t.type(n,`Ban`),await f(()=>u(d.getByRole(`option`,{name:`Banana`})).toBeVisible()),await t.click(d.getByRole(`option`,{name:`Banana`})),await f(()=>u(n).toHaveValue(`Banana`))}},v=()=>c.createElement(o,{label:`Select an account`,placeholder:`Type to search...`,onChange:l(`onChange`),onInputChange:l(`onInputChange`)},c.createElement(o.Item,{value:`checking-001`,searchValue:`Checking - ***001`},c.createElement(`div`,null,c.createElement(`div`,null,`Checking Account`),c.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***001`))),c.createElement(o.Item,{value:`savings-001`,searchValue:`Savings - ***001`},c.createElement(`div`,null,c.createElement(`div`,null,`Savings Account`),c.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***001`))),c.createElement(o.Item,{value:`credit-003`,searchValue:`Credit - ***003`},c.createElement(`div`,null,c.createElement(`div`,null,`Credit Card`),c.createElement(`div`,{className:`fontSize--xs fontColor--secondary`},`***003`)))),y=()=>c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`,onChange:l(`onChange`),onInputChange:l(`onInputChange`),footerContent:c.createElement(i,{size:`s`,kind:`plain`,label:`Add new item`,onClick:l(`Add new item`)})},m.map(e=>c.createElement(o.Item,{key:e,value:e},e))),b=()=>c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`,isDisabled:!0,inputValue:`Can't change this`,onChange:l(`onChange`),onInputChange:l(`onInputChange`)},m.map(e=>c.createElement(o.Item,{key:e,value:e},e))),x=()=>c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`,hasError:!0,onChange:l(`onChange`),onInputChange:l(`onInputChange`)},m.map(e=>c.createElement(o.Item,{key:e,value:e},e))),S=()=>{let[e,t]=c.useState(`Grape`);return c.createElement(o,{label:`Select a fruit`,placeholder:`Type to search...`,inputValue:e,onChange:l(`onChange`),onInputChange:e=>{l(`onInputChange`)(e),t(e)}},m.map(e=>c.createElement(o.Item,{key:e,value:e},e)))},S.parameters={docs:{description:{story:"If the `inputValue` matches an item value, that item will be selected."}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  return <TableAutocomplete onChange={action("onChange")} onInputChange={action("onInputChange")} {...args}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on typing",
  render: () => <TableAutocomplete label="Select a fruit" placeholder="Type to search...">
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole("combobox", {
      name: /select a fruit/i
    });
    await userEvent.type(input, "A");
    await waitFor(() => expect(screen.getByRole("option", {
      name: "Apple"
    })).toBeVisible());
  }
}`,...g.parameters?.docs?.source},description:{story:"Interaction test that opens the TableAutocomplete by typing so Chromatic\ncan snapshot the dropdown. Options are queried via `screen`.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Filters and selects an item",
  render: () => <TableAutocomplete label="Select a fruit" placeholder="Type to search...">
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole("combobox", {
      name: /select a fruit/i
    });
    await userEvent.type(input, "Ban");
    await waitFor(() => expect(screen.getByRole("option", {
      name: "Banana"
    })).toBeVisible());
    await userEvent.click(screen.getByRole("option", {
      name: "Banana"
    }));
    await waitFor(() => expect(input).toHaveValue("Banana"));
  }
}`,..._.parameters?.docs?.source},description:{story:`Interaction test for the full flow: type to filter, select an item, and
verify the input reflects the selection.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." onChange={action("onChange")} onInputChange={action("onInputChange")} footerContent={<Button size="s" kind="plain" label="Add new item" onClick={action("Add new item")} />}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." isDisabled={true} inputValue="Can't change this" onChange={action("onChange")} onInputChange={action("onInputChange")}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." hasError={true} onChange={action("onChange")} onInputChange={action("onInputChange")}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState("Grape");
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." inputValue={inputValue} onChange={action("onChange")} onInputChange={value => {
    action("onInputChange")(value);
    setInputValue(value);
  }}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...S.parameters?.docs?.source}}},C=[`Basic`,`Opens`,`FiltersAndSelects`,`WithCustomContent`,`WithFooter`,`Disabled`,`WithError`,`PreSelectedValue`]}))();export{h as Basic,b as Disabled,_ as FiltersAndSelects,g as Opens,S as PreSelectedValue,v as WithCustomContent,x as WithError,y as WithFooter,C as __namedExportsOrder,p as default};