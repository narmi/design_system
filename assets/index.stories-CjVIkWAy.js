import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-CNe7ZBVf.js";import{n as r,t as i}from"./Table-DtWdJv3V.js";import{n as a,t as o}from"./TableInput-Bt5Xvko_.js";import{n as s,t as c}from"./TableAutocomplete-CRuEKZWT.js";import{n as l,t as u}from"./TableDateInput-CQxzAi1n.js";import{n as d,t as f}from"./TableSelect-DRXoRSUD.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(null,arguments)}var m,h,g,_,v,y,b,x,S,C;e((()=>{m=t(n()),r(),a(),s(),l(),d(),h=e=>m.createElement(i,p({colVisibility:[`*`,`*`,`m`,`m`,`*`],colLayout:{s:`repeat(2, 1fr) min-content`,m:`repeat(4, 1fr) min-content`,l:`repeat(4, 1fr) min-content`}},e),m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Name`),m.createElement(i.HeaderCell,null,`Email`),m.createElement(i.HeaderCell,null,`Role`),m.createElement(i.HeaderCell,null,`Department`),m.createElement(i.HeaderCell,null,`Actions`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`John Doe`),m.createElement(i.Cell,null,`john@example.com`),m.createElement(i.Cell,null,`Admin`),m.createElement(i.Cell,null,`Engineering`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Jane Smith`),m.createElement(i.Cell,null,`jane@example.com`),m.createElement(i.Cell,null,`User`),m.createElement(i.Cell,null,`Marketing`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Bob Johnson`),m.createElement(i.Cell,null,`bob@example.com`),m.createElement(i.Cell,null,`Manager`),m.createElement(i.Cell,null,`Sales`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))))),g=()=>m.createElement(i,{colVisibility:[`*`,`*`,`m`,`*`,`*`],colLayout:{s:`repeat(4, 1fr)`,m:`repeat(4, 1fr) min-content`,l:`repeat(4, 1fr) min-content`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Col 1`),m.createElement(i.HeaderCell,null,`Col 2`),m.createElement(i.HeaderCell,null,`Col 3 (hidden on small)`),m.createElement(i.HeaderCell,null,`Col 4`),m.createElement(i.HeaderCell,null,`Col 5`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`Data 1`),m.createElement(i.Cell,null,`Data 2`),m.createElement(i.Cell,null,`Data 3 (hidden on small)`),m.createElement(i.Cell,null,`Data 4`),m.createElement(i.Cell,null,`Data 5`)),m.createElement(i.Row,null,m.createElement(i.Cell,null,`More 1`),m.createElement(i.Cell,null,`More 2`),m.createElement(i.Cell,null,`More 3 (hidden on small)`),m.createElement(i.Cell,null,`More 4`),m.createElement(i.Cell,null,`More 5`)))),g.parameters={docs:{description:{story:"This table has a colVisibility value of `['*', '*', 'm', '*', '*']`, where the middle column is only shown at `m` viewports or larger."}}},_=()=>m.createElement(i,{colVisibility:[`*`,`*`,`*`,`*`],colLayout:{s:`2fr 1fr 1fr max-content`,m:`minmax(200px, 1fr) max-content 1fr min-content`,l:`minmax(300px, 2fr) max-content 1fr min-content`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Product Name`),m.createElement(i.HeaderCell,null,`Price`),m.createElement(i.HeaderCell,null,`Category`),m.createElement(i.HeaderCell,null,`Actions`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`MacBook Pro 16-inch with M3 Max chip`),m.createElement(i.Cell,null,`$3,999.00`),m.createElement(i.Cell,null,`Laptops`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`iPhone 15 Pro`),m.createElement(i.Cell,null,`$999.00`),m.createElement(i.Cell,null,`Phones`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`AirPods Pro (2nd generation)`),m.createElement(i.Cell,null,`$249.00`),m.createElement(i.Cell,null,`Audio`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))))),_.parameters={docs:{description:{story:"Grid layouts configured per breakpoint using `colLayout`:\n\n- **Small**: `2fr 1fr 1fr max-content`\n- **Medium**: `minmax(200px, 1fr) max-content 1fr min-content`\n- **Large**: `minmax(300px, 2fr) max-content 1fr min-content`"}}},v=e=>m.createElement(h,e),v.args={rowDensity:`compact`},v.parameters={docs:{description:{story:"Use the `rowDensity` prop to adjust the vertical spacing between rows."}}},y=()=>m.createElement(i,{colVisibility:[`*`,`*`,`*`],colLayout:{s:`1fr 1fr 1fr`,m:`2fr 1fr 1fr`,l:`2fr 1fr 1fr`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,{onClick:()=>alert(`Name column clicked!`)},`Name`),m.createElement(i.HeaderCell,{onClick:()=>alert(`Role column clicked!`)},`Role`),m.createElement(i.HeaderCell,{onClick:()=>alert(`Department column clicked!`)},`Department`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`John Doe`),m.createElement(i.Cell,null,`Admin`),m.createElement(i.Cell,null,`Engineering`)),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Jane Smith`),m.createElement(i.Cell,null,`User`),m.createElement(i.Cell,null,`Marketing`)),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Bob Johnson`),m.createElement(i.Cell,null,`Manager`),m.createElement(i.Cell,null,`Sales`)))),y.parameters={docs:{description:{story:"Header cells can be made interactive by passing an `onClick` handler. When clicked, they render as buttons and are announced by screen readers. Consumers are responsible for implementing any sorting or filtering behavior in the data passed to `Table`."}}},b=()=>{let[e,t]=(0,m.useState)([{id:1,name:`John Doe`,email:`john@example.com`,department:``,startDate:`2023-01-15`,status:`Active`},{id:2,name:``,email:`jane@example.com`,department:`Marketing`,startDate:``,status:``},{id:3,name:`Bob Johnson`,email:``,department:``,startDate:`2022-06-01`,status:`Active`}]),n=(e,n,r)=>{t(t=>t.map(t=>t.id===e?{...t,[n]:r}:t))},r=[`Engineering`,`Marketing`,`Sales`,`Design`,`HR`];return m.createElement(i,{kind:`editable`,colVisibility:[`*`,`*`,`*`,`*`,`*`],colLayout:{s:`1fr 1fr 1fr min-content`,m:`1fr 1fr 1fr 1fr 1fr`,l:`1fr 1fr 1fr 1fr 1fr`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Name (Input)`),m.createElement(i.HeaderCell,null,`Email (Input)`),m.createElement(i.HeaderCell,null,`Department (Autocomplete)`),m.createElement(i.HeaderCell,null,`Start Date (DateInput)`),m.createElement(i.HeaderCell,null,`Status (Select)`))),m.createElement(i.Body,null,e.map(e=>m.createElement(i.Row,{key:e.id},m.createElement(i.Cell,null,m.createElement(o,{label:`Employee name`,value:e.name,onChange:t=>n(e.id,`name`,t.target.value),placeholder:`Enter name`})),m.createElement(i.Cell,null,m.createElement(o,{label:`Email address`,value:e.email,onChange:t=>n(e.id,`email`,t.target.value),placeholder:`Enter email`,type:`email`})),m.createElement(i.Cell,null,m.createElement(c,{label:`Department`,inputValue:e.department,onInputChange:t=>n(e.id,`department`,t),onChange:t=>n(e.id,`department`,t)},r.map(e=>m.createElement(c.Item,{key:e,value:e},e)))),m.createElement(i.Cell,null,m.createElement(u,{label:`Start date`,value:e.startDate,onChange:t=>n(e.id,`startDate`,t),placeholder:`YYYY-MM-DD`})),m.createElement(i.Cell,null,m.createElement(f,{id:`status-${e.id}`,label:`Status`,value:e.status,onChange:t=>n(e.id,`status`,t)},m.createElement(f.Item,{value:`Active`},`Active`),m.createElement(f.Item,{value:`Inactive`},`Inactive`),m.createElement(f.Item,{value:`Pending`},`Pending`)))))))},b.parameters={docs:{description:{story:"This table demonstrates all available editable input types: `TableInput` for text fields, `TableAutocomplete` for searchable selections, `TableDateInput` for date picking, and `TableSelect` for dropdown selections. The table includes rows with partially filled data to show empty state behavior."}}},x=()=>{let[e,t]=(0,m.useState)({id:1,name:`John Doe`,email:`john@example.com`,department:``,startDate:`2023-01-15`,status:`Active`}),n=(e,n)=>{t(t=>({...t,[e]:n}))};return m.createElement(`div`,{style:{width:`600px`,height:`auto`,overflow:`scroll`,border:`2px solid #ddd`,padding:`16px`}},m.createElement(i,{kind:`editable`,colVisibility:[`*`,`*`,`*`,`*`,`*`],colLayout:{s:`1fr 1fr 1fr min-content`,m:`1fr 1fr 1fr 1fr 1fr`,l:`1fr 1fr 1fr 1fr 1fr`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Name (Input)`),m.createElement(i.HeaderCell,null,`Email (Input)`),m.createElement(i.HeaderCell,null,`Department (Autocomplete)`),m.createElement(i.HeaderCell,null,`Start Date (DateInput)`),m.createElement(i.HeaderCell,null,`Status (Select)`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,m.createElement(o,{label:`Employee name`,value:e.name,onChange:e=>n(`name`,e.target.value),placeholder:`Enter name`})),m.createElement(i.Cell,null,m.createElement(o,{label:`Email address`,value:e.email,onChange:e=>n(`email`,e.target.value),placeholder:`Enter email`,type:`email`})),m.createElement(i.Cell,null,m.createElement(c,{label:`Department`,inputValue:e.department,onInputChange:e=>n(`department`,e),onChange:e=>n(`department`,e)},[`Engineering`,`Marketing`,`Sales`,`Design`,`HR`].map(e=>m.createElement(c.Item,{key:e,value:e},e)))),m.createElement(i.Cell,null,m.createElement(u,{label:`Start date`,value:e.startDate,onChange:e=>n(`startDate`,e),placeholder:`YYYY-MM-DD`})),m.createElement(i.Cell,null,m.createElement(f,{id:`status-select`,label:`Status`,value:e.status,onChange:e=>n(`status`,e)},m.createElement(f.Item,{value:`Active`},`Active`),m.createElement(f.Item,{value:`Inactive`},`Inactive`),m.createElement(f.Item,{value:`Pending`},`Pending`)))))))},x.parameters={docs:{description:{story:"This table is wrapped in an `overflow: scroll` container to test that dropdowns (like `TableSelect`) escape the overflow boundary and remain visible. This is important when tables are horizontally scrollable or constrained."}}},S={title:`Components/Table`,component:i},h.__docgenInfo={description:``,methods:[],displayName:`Overview`},g.__docgenInfo={description:``,methods:[],displayName:`ColumnVisibility`},_.__docgenInfo={description:``,methods:[],displayName:`ColumnLayout`},v.__docgenInfo={description:``,methods:[],displayName:`RowSpacing`},y.__docgenInfo={description:``,methods:[],displayName:`ClickableHeaders`},b.__docgenInfo={description:``,methods:[],displayName:`AllEditableInputTypes`},x.__docgenInfo={description:``,methods:[],displayName:`TableWithOverflow`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Table colVisibility={["*", "*", "m", "m", "*"]} colLayout={{
  s: "repeat(2, 1fr) min-content",
  m: "repeat(4, 1fr) min-content",
  l: "repeat(4, 1fr) min-content"
}} {...args}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell>Department</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell>john@example.com</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
        <Table.Cell>Engineering</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jane Smith</Table.Cell>
        <Table.Cell>jane@example.com</Table.Cell>
        <Table.Cell>User</Table.Cell>
        <Table.Cell>Marketing</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bob Johnson</Table.Cell>
        <Table.Cell>bob@example.com</Table.Cell>
        <Table.Cell>Manager</Table.Cell>
        <Table.Cell>Sales</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <Table colVisibility={["*", "*", "m", "*", "*"]} colLayout={{
  s: "repeat(4, 1fr)",
  m: "repeat(4, 1fr) min-content",
  l: "repeat(4, 1fr) min-content"
}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Col 1</Table.HeaderCell>
        <Table.HeaderCell>Col 2</Table.HeaderCell>
        <Table.HeaderCell>Col 3 (hidden on small)</Table.HeaderCell>
        <Table.HeaderCell>Col 4</Table.HeaderCell>
        <Table.HeaderCell>Col 5</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Data 1</Table.Cell>
        <Table.Cell>Data 2</Table.Cell>
        <Table.Cell>Data 3 (hidden on small)</Table.Cell>
        <Table.Cell>Data 4</Table.Cell>
        <Table.Cell>Data 5</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>More 1</Table.Cell>
        <Table.Cell>More 2</Table.Cell>
        <Table.Cell>More 3 (hidden on small)</Table.Cell>
        <Table.Cell>More 4</Table.Cell>
        <Table.Cell>More 5</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <Table colVisibility={["*", "*", "*", "*"]} colLayout={{
  s: "2fr 1fr 1fr max-content",
  m: "minmax(200px, 1fr) max-content 1fr min-content",
  l: "minmax(300px, 2fr) max-content 1fr min-content"
}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Product Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>MacBook Pro 16-inch with M3 Max chip</Table.Cell>
        <Table.Cell>$3,999.00</Table.Cell>
        <Table.Cell>Laptops</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>iPhone 15 Pro</Table.Cell>
        <Table.Cell>$999.00</Table.Cell>
        <Table.Cell>Phones</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>AirPods Pro (2nd generation)</Table.Cell>
        <Table.Cell>$249.00</Table.Cell>
        <Table.Cell>Audio</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Overview {...args} />`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <Table colVisibility={["*", "*", "*"]} colLayout={{
  s: "1fr 1fr 1fr",
  m: "2fr 1fr 1fr",
  l: "2fr 1fr 1fr"
}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell onClick={() => alert("Name column clicked!")}>
          Name
        </Table.HeaderCell>
        <Table.HeaderCell onClick={() => alert("Role column clicked!")}>
          Role
        </Table.HeaderCell>
        <Table.HeaderCell onClick={() => alert("Department column clicked!")}>
          Department
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
        <Table.Cell>Engineering</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jane Smith</Table.Cell>
        <Table.Cell>User</Table.Cell>
        <Table.Cell>Marketing</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bob Johnson</Table.Cell>
        <Table.Cell>Manager</Table.Cell>
        <Table.Cell>Sales</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [data, setData] = useState([{
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "",
    startDate: "2023-01-15",
    status: "Active"
  }, {
    id: 2,
    name: "",
    email: "jane@example.com",
    department: "Marketing",
    startDate: "",
    status: ""
  }, {
    id: 3,
    name: "Bob Johnson",
    email: "",
    department: "",
    startDate: "2022-06-01",
    status: "Active"
  }]);
  const updateData = (id, key, value) => {
    setData(prev => prev.map(row => row.id === id ? {
      ...row,
      [key]: value
    } : row));
  };
  const departments = ["Engineering", "Marketing", "Sales", "Design", "HR"];
  return <Table kind="editable" colVisibility={["*", "*", "*", "*", "*"]} colLayout={{
    s: "1fr 1fr 1fr min-content",
    m: "1fr 1fr 1fr 1fr 1fr",
    l: "1fr 1fr 1fr 1fr 1fr"
  }}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name (Input)</Table.HeaderCell>
          <Table.HeaderCell>Email (Input)</Table.HeaderCell>
          <Table.HeaderCell>Department (Autocomplete)</Table.HeaderCell>
          <Table.HeaderCell>Start Date (DateInput)</Table.HeaderCell>
          <Table.HeaderCell>Status (Select)</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(row => <Table.Row key={row.id}>
            <Table.Cell>
              <TableInput label="Employee name" value={row.name} onChange={event => updateData(row.id, "name", event.target.value)} placeholder="Enter name" />
            </Table.Cell>
            <Table.Cell>
              <TableInput label="Email address" value={row.email} onChange={event => updateData(row.id, "email", event.target.value)} placeholder="Enter email" type="email" />
            </Table.Cell>
            <Table.Cell>
              <TableAutocomplete label="Department" inputValue={row.department} onInputChange={value => updateData(row.id, "department", value)} onChange={value => updateData(row.id, "department", value)}>
                {departments.map(dept => <TableAutocomplete.Item key={dept} value={dept}>
                    {dept}
                  </TableAutocomplete.Item>)}
              </TableAutocomplete>
            </Table.Cell>
            <Table.Cell>
              <TableDateInput label="Start date" value={row.startDate} onChange={value => updateData(row.id, "startDate", value)} placeholder="YYYY-MM-DD" />
            </Table.Cell>
            <Table.Cell>
              <TableSelect id={\`status-\${row.id}\`} label="Status" value={row.status} onChange={value => updateData(row.id, "status", value)}>
                <TableSelect.Item value="Active">Active</TableSelect.Item>
                <TableSelect.Item value="Inactive">Inactive</TableSelect.Item>
                <TableSelect.Item value="Pending">Pending</TableSelect.Item>
              </TableSelect>
            </Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [data, setData] = useState({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "",
    startDate: "2023-01-15",
    status: "Active"
  });
  const updateData = (key, value) => {
    setData(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const departments = ["Engineering", "Marketing", "Sales", "Design", "HR"];
  return <div style={{
    width: "600px",
    height: "auto",
    overflow: "scroll",
    border: "2px solid #ddd",
    padding: "16px"
  }}>
      <Table kind="editable" colVisibility={["*", "*", "*", "*", "*"]} colLayout={{
      s: "1fr 1fr 1fr min-content",
      m: "1fr 1fr 1fr 1fr 1fr",
      l: "1fr 1fr 1fr 1fr 1fr"
    }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name (Input)</Table.HeaderCell>
            <Table.HeaderCell>Email (Input)</Table.HeaderCell>
            <Table.HeaderCell>Department (Autocomplete)</Table.HeaderCell>
            <Table.HeaderCell>Start Date (DateInput)</Table.HeaderCell>
            <Table.HeaderCell>Status (Select)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <TableInput label="Employee name" value={data.name} onChange={event => updateData("name", event.target.value)} placeholder="Enter name" />
            </Table.Cell>
            <Table.Cell>
              <TableInput label="Email address" value={data.email} onChange={event => updateData("email", event.target.value)} placeholder="Enter email" type="email" />
            </Table.Cell>
            <Table.Cell>
              <TableAutocomplete label="Department" inputValue={data.department} onInputChange={value => updateData("department", value)} onChange={value => updateData("department", value)}>
                {departments.map(dept => <TableAutocomplete.Item key={dept} value={dept}>
                    {dept}
                  </TableAutocomplete.Item>)}
              </TableAutocomplete>
            </Table.Cell>
            <Table.Cell>
              <TableDateInput label="Start date" value={data.startDate} onChange={value => updateData("startDate", value)} placeholder="YYYY-MM-DD" />
            </Table.Cell>
            <Table.Cell>
              <TableSelect id="status-select" label="Status" value={data.status} onChange={value => updateData("status", value)}>
                <TableSelect.Item value="Active">Active</TableSelect.Item>
                <TableSelect.Item value="Inactive">Inactive</TableSelect.Item>
                <TableSelect.Item value="Pending">Pending</TableSelect.Item>
              </TableSelect>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>;
}`,...x.parameters?.docs?.source}}},C=[`Overview`,`ColumnVisibility`,`ColumnLayout`,`RowSpacing`,`ClickableHeaders`,`AllEditableInputTypes`,`TableWithOverflow`]}))();export{b as AllEditableInputTypes,y as ClickableHeaders,_ as ColumnLayout,g as ColumnVisibility,h as Overview,v as RowSpacing,x as TableWithOverflow,C as __namedExportsOrder,S as default};