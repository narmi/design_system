import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DYSQF0Z1.js";import{n as r,t as i}from"./Select-DkyOLjdm.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(null,arguments)}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;t((()=>{o=e(n()),r(),{expect:s,screen:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Field/Field.Select`,component:i},d=[{value:`us`,label:`United States`},{value:`ca`,label:`Canada`},{value:`mx`,label:`Mexico`},{value:`gb`,label:`United Kingdom`},{value:`de`,label:`Germany`}],f=e=>{let[t,n]=(0,o.useState)(e.value||``);return o.createElement(i,a({},e,{value:t,onChange:n}),d.map(({value:e,label:t})=>o.createElement(i.Item,{key:e,value:e},t)))},p=f.bind({}),p.args={label:`Country`,placeholder:`Select a country`},m={name:`Interaction: Opens on click`,render:()=>o.createElement(f,{label:`Country`,placeholder:`Select a country`}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`,{name:/country/i})),await l(()=>s(c.getByRole(`option`,{name:/united states/i})).toBeVisible())}},h={name:`Interaction: Selects an option`,render:()=>o.createElement(f,{label:`Country`,placeholder:`Select a country`}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`,{name:/country/i})),await l(()=>s(c.getByRole(`option`,{name:/canada/i})).toBeVisible()),await t.click(c.getByRole(`option`,{name:/canada/i})),await l(()=>s(c.queryByRole(`option`,{name:/canada/i})).not.toBeInTheDocument()),s(e.getByRole(`combobox`,{name:/country/i})).toHaveTextContent(`Canada`)}},g=f.bind({}),g.args={label:`Country`,value:`ca`},_=f.bind({}),_.args={label:`Country`,placeholder:`Select a country`,errors:[`Please select a country`]},v=f.bind({}),v.args={label:`Country`,value:`us`,isDisabled:!0},y=()=>{let[e,t]=(0,o.useState)(``);return o.createElement(i,{label:`Country`,value:e,onChange:t,placeholder:`Select a country`,renderHelperText:()=>o.createElement(`span`,null,`Choose the country where you currently reside`)},d.map(({value:e,label:t})=>o.createElement(i.Item,{key:e,value:e},t)))},y.parameters={docs:{description:{story:"`renderHelperText` accepts a function returning a ReactNode. The node is rendered at the end of the label row."}}},b=()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``);return o.createElement(`div`,{style:{display:`flex`,gap:`var(--space-m)`,maxWidth:600}},o.createElement(`div`,{style:{flex:1}},o.createElement(i,{label:`Country`,value:e,onChange:t,placeholder:`Select a country`},d.map(({value:e,label:t})=>o.createElement(i.Item,{key:e,value:e},t)))),o.createElement(`div`,{style:{flex:1}},o.createElement(`div`,{className:`nds-field`},o.createElement(`label`,{className:`nds-field-label`,htmlFor:`city-input`},`City`),o.createElement(`div`,{className:`nds-field-input-box`},o.createElement(`input`,{id:`city-input`,value:n,onChange:e=>r(e.target.value),placeholder:`Enter city name`,style:{width:`100%`,border:`none`,outline:0,padding:`0 var(--space-xs)`,fontSize:`var(--font-size-s)`}})))))},b.parameters={docs:{description:{story:`Field.Select is designed to visually align with Field.Text. Both share the same shell, label, and input box styles.`}}},y.__docgenInfo={description:``,methods:[],displayName:`WithHelperText`},b.__docgenInfo={description:``,methods:[],displayName:`SideBySideWithText`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldSelect {...args} value={value} onChange={setValue}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on click",
  render: () => <Template label="Country" placeholder="Select a country" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("combobox", {
      name: /country/i
    }));
    await waitFor(() => expect(screen.getByRole("option", {
      name: /united states/i
    })).toBeVisible());
  }
}`,...m.parameters?.docs?.source},description:{story:"Interaction test that opens the Field.Select so Chromatic can snapshot\nthe dropdown. Options render in a dropdown layer, queried via `screen`.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Selects an option",
  render: () => <Template label="Country" placeholder="Select a country" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("combobox", {
      name: /country/i
    }));
    await waitFor(() => expect(screen.getByRole("option", {
      name: /canada/i
    })).toBeVisible());
    await userEvent.click(screen.getByRole("option", {
      name: /canada/i
    }));
    await waitFor(() => expect(screen.queryByRole("option", {
      name: /canada/i
    })).not.toBeInTheDocument());
    expect(canvas.getByRole("combobox", {
      name: /country/i
    })).toHaveTextContent("Canada");
  }
}`,...h.parameters?.docs?.source},description:{story:`Interaction test for the selection flow: open, pick an option, and
verify the trigger reflects the choice and the menu closes.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldSelect {...args} value={value} onChange={setValue}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldSelect {...args} value={value} onChange={setValue}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldSelect {...args} value={value} onChange={setValue}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <FieldSelect label="Country" value={value} onChange={setValue} placeholder="Select a country" renderHelperText={() => <span>Choose the country where you currently reside</span>}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  return <div style={{
    display: "flex",
    gap: "var(--space-m)",
    maxWidth: 600
  }}>
      <div style={{
      flex: 1
    }}>
        <FieldSelect label="Country" value={country} onChange={setCountry} placeholder="Select a country">
          {COUNTRIES.map(({
          value,
          label
        }) => <FieldSelect.Item key={value} value={value}>
              {label}
            </FieldSelect.Item>)}
        </FieldSelect>
      </div>
      <div style={{
      flex: 1
    }}>
        {/* Using a plain input here to show visual alignment */}
        <div className="nds-field">
          <label className="nds-field-label" htmlFor="city-input">
            City
          </label>
          <div className="nds-field-input-box">
            <input id="city-input" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city name" style={{
            width: "100%",
            border: "none",
            outline: 0,
            padding: "0 var(--space-xs)",
            fontSize: "var(--font-size-s)"
          }} />
          </div>
        </div>
      </div>
    </div>;
}`,...b.parameters?.docs?.source}}},x=[`Overview`,`Opens`,`SelectsOption`,`WithValue`,`WithErrors`,`Disabled`,`WithHelperText`,`SideBySideWithText`]}))();export{v as Disabled,m as Opens,p as Overview,h as SelectsOption,b as SideBySideWithText,_ as WithErrors,y as WithHelperText,g as WithValue,x as __namedExportsOrder,u as default};