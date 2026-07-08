import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-CNe7ZBVf.js";import{n as r,t as i}from"./Table-DtWdJv3V.js";import{n as a,t as o}from"./TableInput-Bt5Xvko_.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var c,l,u,d,f,p,m,h;e((()=>{c=t(n()),a(),r(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u=e=>{let[t,n]=(0,c.useState)(e.value||``);return c.createElement(o,s({},e,{value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}}))},d=u.bind({}),d.args={value:`Sample value`,onChange:e=>l(`Value changed`)(e.target.value),label:`Editable field`,placeholder:`Enter text here...`,isDisabled:!1},f=u.bind({}),f.args={value:``,onChange:e=>l(`Value changed`)(e.target.value),label:`Editable field`,placeholder:`Enter text here...`,isDisabled:!1,maxLength:12},p=()=>{let[e,t]=(0,c.useState)({name1:`John Doe`,email1:`john@example.com`,name2:`Jane Smith`,email2:`jane@example.com`}),n=(e,n)=>{t(t=>({...t,[e]:n.target.value}))};return c.createElement(i,{kind:`editable`,colVisibility:[`*`,`*`,`*`],colLayout:{s:`2fr 1fr 1fr`,m:`2fr 1fr 1fr`,l:`2fr 1fr 1fr`}},c.createElement(i.Header,null,c.createElement(i.Row,null,c.createElement(i.HeaderCell,null,`Name`),c.createElement(i.HeaderCell,null,`Role (not editable)`),c.createElement(i.HeaderCell,null,`Email`))),c.createElement(i.Body,null,c.createElement(i.Row,null,c.createElement(i.Cell,null,c.createElement(o,{value:e.name1,onChange:e=>n(`name1`,e),label:`Edit name`,placeholder:`Enter name`})),c.createElement(i.Cell,null,`Admin`),c.createElement(i.Cell,null,c.createElement(o,{value:e.email1,onChange:e=>n(`email1`,e),label:`Edit email`,placeholder:`Enter email`}))),c.createElement(i.Row,null,c.createElement(i.Cell,null,c.createElement(o,{value:e.name2,onChange:e=>n(`name2`,e),label:`Edit name`,placeholder:`Enter name`})),c.createElement(i.Cell,null,`User`),c.createElement(i.Cell,null,c.createElement(o,{value:e.email2,onChange:e=>n(`email2`,e),label:`Edit email`,placeholder:`Enter email`})))))},m={title:`Components/TableInput`,component:o},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: TableInputProps) => {
  const [value, setValue] = useState(args.value || "");
  return <TableInput {...args} value={value} onChange={event => {
    setValue(event.target.value);
    args.onChange?.(event);
  }} />;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: TableInputProps) => {
  const [value, setValue] = useState(args.value || "");
  return <TableInput {...args} value={value} onChange={event => {
    setValue(event.target.value);
    args.onChange?.(event);
  }} />;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},h=[`Overview`,`WithMaxLength`,`InATable`]}))();export{p as InATable,d as Overview,f as WithMaxLength,h as __namedExportsOrder,m as default};