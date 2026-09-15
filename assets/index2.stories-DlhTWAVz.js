import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DTOQovOy.js";import{n as r,t as i}from"./Table-Db2CgILo.js";import{n as a,t as o}from"./TableInput-17yLhHK2.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var c,l,u,d,f,p,m,h,g,_,v,y;t((()=>{c=e(n()),a(),r(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,{action:d}=__STORYBOOK_MODULE_ACTIONS__,f=e=>{let[t,n]=(0,c.useState)(e.value||``);return c.createElement(o,s({},e,{value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}}))},p=f.bind({}),p.args={value:`Sample value`,onChange:e=>d(`Value changed`)(e.target.value),label:`Editable field`,placeholder:`Enter text here...`,isDisabled:!1},m=f.bind({}),m.args={value:``,onChange:e=>d(`Value changed`)(e.target.value),label:`Editable field`,placeholder:`Enter text here...`,isDisabled:!1,maxLength:12},h={name:`Interaction: Accepts typed input`,render:()=>c.createElement(()=>{let[e,t]=(0,c.useState)(``);return c.createElement(o,{label:`Edit name`,value:e,onChange:e=>t(e.target.value),placeholder:`Enter name`})},null),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:/edit name/i});await t.type(n,`Jane Smith`),await u(()=>l(n).toHaveValue(`Jane Smith`))}},g={name:`Interaction: Updates character counter`,render:()=>c.createElement(()=>{let[e,t]=(0,c.useState)(``);return c.createElement(o,{label:`Edit code`,value:e,onChange:e=>t(e.target.value),maxLength:12})},null),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:/edit code/i});l(e.getByText(`0/12`)).toBeInTheDocument(),await t.type(n,`abc`),await u(()=>l(e.getByText(`3/12`)).toBeInTheDocument())}},_=()=>{let[e,t]=(0,c.useState)({name1:`John Doe`,email1:`john@example.com`,name2:`Jane Smith`,email2:`jane@example.com`}),n=(e,n)=>{t(t=>({...t,[e]:n.target.value}))};return c.createElement(i,{kind:`editable`,colVisibility:[`*`,`*`,`*`],colLayout:{s:`2fr 1fr 1fr`,m:`2fr 1fr 1fr`,l:`2fr 1fr 1fr`}},c.createElement(i.Header,null,c.createElement(i.Row,null,c.createElement(i.HeaderCell,null,`Name`),c.createElement(i.HeaderCell,null,`Role (not editable)`),c.createElement(i.HeaderCell,null,`Email`))),c.createElement(i.Body,null,c.createElement(i.Row,null,c.createElement(i.Cell,null,c.createElement(o,{value:e.name1,onChange:e=>n(`name1`,e),label:`Edit name`,placeholder:`Enter name`})),c.createElement(i.Cell,null,`Admin`),c.createElement(i.Cell,null,c.createElement(o,{value:e.email1,onChange:e=>n(`email1`,e),label:`Edit email`,placeholder:`Enter email`}))),c.createElement(i.Row,null,c.createElement(i.Cell,null,c.createElement(o,{value:e.name2,onChange:e=>n(`name2`,e),label:`Edit name`,placeholder:`Enter name`})),c.createElement(i.Cell,null,`User`),c.createElement(i.Cell,null,c.createElement(o,{value:e.email2,onChange:e=>n(`email2`,e),label:`Edit email`,placeholder:`Enter email`})))))},v={title:`Components/TableInput`,component:o},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: TableInputProps) => {
  const [value, setValue] = useState(args.value || "");
  return <TableInput {...args} value={value} onChange={event => {
    setValue(event.target.value);
    args.onChange?.(event);
  }} />;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: TableInputProps) => {
  const [value, setValue] = useState(args.value || "");
  return <TableInput {...args} value={value} onChange={event => {
    setValue(event.target.value);
    args.onChange?.(event);
  }} />;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Accepts typed input",
  render: () => {
    const ControlledInput = () => {
      const [value, setValue] = useState("");
      return <TableInput label="Edit name" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter name" />;
    };
    return <ControlledInput />;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole("textbox", {
      name: /edit name/i
    });
    await userEvent.type(input, "Jane Smith");
    await waitFor(() => expect(input).toHaveValue("Jane Smith"));
  }
}`,...h.parameters?.docs?.source},description:{story:`Interaction test verifying that typing updates the cell value.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Updates character counter",
  render: () => {
    const ControlledInput = () => {
      const [value, setValue] = useState("");
      return <TableInput label="Edit code" value={value} onChange={e => setValue(e.target.value)} maxLength={12} />;
    };
    return <ControlledInput />;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole("textbox", {
      name: /edit code/i
    });
    expect(canvas.getByText("0/12")).toBeInTheDocument();
    await userEvent.type(input, "abc");
    await waitFor(() => expect(canvas.getByText("3/12")).toBeInTheDocument());
  }
}`,...g.parameters?.docs?.source},description:{story:`Interaction test verifying the character counter updates as the user types.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    name1: "John Doe",
    email1: "john@example.com",
    name2: "Jane Smith",
    email2: "jane@example.com"
  });
  const updateValue = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({
      ...prev,
      [key]: event.target.value
    }));
  };
  return <Table kind="editable" colVisibility={["*", "*", "*"]} colLayout={{
    s: "2fr 1fr 1fr",
    m: "2fr 1fr 1fr",
    l: "2fr 1fr 1fr"
  }}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role (not editable)</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <TableInput value={values.name1} onChange={event => updateValue("name1", event)} label="Edit name" placeholder="Enter name" />
          </Table.Cell>
          <Table.Cell>Admin</Table.Cell>
          <Table.Cell>
            <TableInput value={values.email1} onChange={event => updateValue("email1", event)} label="Edit email" placeholder="Enter email" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <TableInput value={values.name2} onChange={event => updateValue("name2", event)} label="Edit name" placeholder="Enter name" />
          </Table.Cell>
          <Table.Cell>User</Table.Cell>
          <Table.Cell>
            <TableInput value={values.email2} onChange={event => updateValue("email2", event)} label="Edit email" placeholder="Enter email" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>;
}`,..._.parameters?.docs?.source}}},y=[`Overview`,`WithMaxLength`,`TypesValue`,`CharacterCounter`,`InATable`]}))();export{g as CharacterCounter,_ as InATable,p as Overview,h as TypesValue,m as WithMaxLength,y as __namedExportsOrder,v as default};