import{r as c,e}from"./iframe-CTHFVwiB.js";import{T as o}from"./index-Cscwlsgh.js";import{T as n}from"./index-BRH1g6Rz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./index-BYSOu1SS.js";function i(){return i=Object.assign?Object.assign.bind():function(l){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)({}).hasOwnProperty.call(t,a)&&(l[a]=t[a])}return l},i.apply(null,arguments)}const{action:d}=__STORYBOOK_MODULE_ACTIONS__,b=l=>{const[r,t]=c.useState(l.value||"");return e.createElement(o,i({},l,{value:r,onChange:a=>{t(a.target.value),l.onChange?.(a)}}))},u=b.bind({});u.args={value:"Sample value",onChange:l=>d("Value changed")(l.target.value),label:"Editable field",placeholder:"Enter text here...",isDisabled:!1};const m=b.bind({});m.args={value:"",onChange:l=>d("Value changed")(l.target.value),label:"Editable field",placeholder:"Enter text here...",isDisabled:!1,maxLength:12};const s=()=>{const[l,r]=c.useState({name1:"John Doe",email1:"john@example.com",name2:"Jane Smith",email2:"jane@example.com"}),t=(a,p)=>{r(v=>({...v,[a]:p.target.value}))};return e.createElement(n,{kind:"editable",colVisibility:["*","*","*"],colLayout:{s:"2fr 1fr 1fr",m:"2fr 1fr 1fr",l:"2fr 1fr 1fr"}},e.createElement(n.Header,null,e.createElement(n.Row,null,e.createElement(n.HeaderCell,null,"Name"),e.createElement(n.HeaderCell,null,"Role (not editable)"),e.createElement(n.HeaderCell,null,"Email"))),e.createElement(n.Body,null,e.createElement(n.Row,null,e.createElement(n.Cell,null,e.createElement(o,{value:l.name1,onChange:a=>t("name1",a),label:"Edit name",placeholder:"Enter name"})),e.createElement(n.Cell,null,"Admin"),e.createElement(n.Cell,null,e.createElement(o,{value:l.email1,onChange:a=>t("email1",a),label:"Edit email",placeholder:"Enter email"}))),e.createElement(n.Row,null,e.createElement(n.Cell,null,e.createElement(o,{value:l.name2,onChange:a=>t("name2",a),label:"Edit name",placeholder:"Enter name"})),e.createElement(n.Cell,null,"User"),e.createElement(n.Cell,null,e.createElement(o,{value:l.email2,onChange:a=>t("email2",a),label:"Edit email",placeholder:"Enter email"})))))},V={title:"Components/TableInput",component:o};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: TableInputProps) => {
  const [value, setValue] = useState(args.value || "");
  return <TableInput {...args} value={value} onChange={event => {
    setValue(event.target.value);
    args.onChange?.(event);
  }} />;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: TableInputProps) => {
  const [value, setValue] = useState(args.value || "");
  return <TableInput {...args} value={value} onChange={event => {
    setValue(event.target.value);
    args.onChange?.(event);
  }} />;
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const x=["Overview","WithMaxLength","InATable"];export{s as InATable,u as Overview,m as WithMaxLength,x as __namedExportsOrder,V as default};
