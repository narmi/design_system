import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-CmAoFXIH.js";import{n as r,t as i}from"./Table-CsfP8YF8.js";import{n as a,t as o}from"./TableInput-_1qzzIz2.js";import{n as s,t as c}from"./TableAutocomplete-5Lv2NsfY.js";import{n as l,t as u}from"./TableDateInput-rzlRFq1y.js";import{n as d,t as f}from"./TableSelect-CQVCBBRl.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(null,arguments)}var m,h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{m=e(n()),r(),a(),s(),l(),d(),h=e=>m.createElement(i,p({colVisibility:[`*`,`*`,`m`,`m`,`*`],colLayout:{s:`repeat(2, 1fr) min-content`,m:`repeat(4, 1fr) min-content`,l:`repeat(4, 1fr) min-content`}},e),m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Name`),m.createElement(i.HeaderCell,null,`Email`),m.createElement(i.HeaderCell,null,`Role`),m.createElement(i.HeaderCell,null,`Department`),m.createElement(i.HeaderCell,null,`Actions`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`John Doe`),m.createElement(i.Cell,null,`john@example.com`),m.createElement(i.Cell,null,`Admin`),m.createElement(i.Cell,null,`Engineering`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Jane Smith`),m.createElement(i.Cell,null,`jane@example.com`),m.createElement(i.Cell,null,`User`),m.createElement(i.Cell,null,`Marketing`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Bob Johnson`),m.createElement(i.Cell,null,`bob@example.com`),m.createElement(i.Cell,null,`Manager`),m.createElement(i.Cell,null,`Sales`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))))),g=()=>m.createElement(i,{colVisibility:[`*`,`*`,`m`,`*`,`*`],colLayout:{s:`repeat(4, 1fr)`,m:`repeat(4, 1fr) min-content`,l:`repeat(4, 1fr) min-content`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Col 1`),m.createElement(i.HeaderCell,null,`Col 2`),m.createElement(i.HeaderCell,null,`Col 3 (hidden on small)`),m.createElement(i.HeaderCell,null,`Col 4`),m.createElement(i.HeaderCell,null,`Col 5`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`Data 1`),m.createElement(i.Cell,null,`Data 2`),m.createElement(i.Cell,null,`Data 3 (hidden on small)`),m.createElement(i.Cell,null,`Data 4`),m.createElement(i.Cell,null,`Data 5`)),m.createElement(i.Row,null,m.createElement(i.Cell,null,`More 1`),m.createElement(i.Cell,null,`More 2`),m.createElement(i.Cell,null,`More 3 (hidden on small)`),m.createElement(i.Cell,null,`More 4`),m.createElement(i.Cell,null,`More 5`)))),g.parameters={docs:{description:{story:"This table has a colVisibility value of `['*', '*', 'm', '*', '*']`, where the middle column is only shown at `m` viewports or larger."}}},_=()=>m.createElement(i,{colVisibility:[`*`,`*`,`*`,`*`],colLayout:{s:`2fr 1fr 1fr max-content`,m:`minmax(200px, 1fr) max-content 1fr min-content`,l:`minmax(300px, 2fr) max-content 1fr min-content`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Product Name`),m.createElement(i.HeaderCell,null,`Price`),m.createElement(i.HeaderCell,null,`Category`),m.createElement(i.HeaderCell,null,`Actions`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`MacBook Pro 16-inch with M3 Max chip`),m.createElement(i.Cell,null,`$3,999.00`),m.createElement(i.Cell,null,`Laptops`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`iPhone 15 Pro`),m.createElement(i.Cell,null,`$999.00`),m.createElement(i.Cell,null,`Phones`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`AirPods Pro (2nd generation)`),m.createElement(i.Cell,null,`$249.00`),m.createElement(i.Cell,null,`Audio`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))))),_.parameters={docs:{description:{story:'> **Deprecated interface.** Passing `colLayout` values as `grid-template-columns` **strings** (shown here) is deprecated and will be removed in the next major version. Provide a per-column **track array** parallel to `colVisibility` instead — e.g. `"repeat(4, 1fr) min-content"` becomes `["1fr", "1fr", "1fr", "1fr", "min-content"]` (list hidden columns too; their width is used when shown and collapses to `0fr` when hidden). Only the array form animates and supports `colVisibility: "none"`. See the "Animated columns" and "Programmatically hiding a column" stories.\n\nGrid layouts configured per breakpoint using `colLayout`:\n\n- **Small**: `2fr 1fr 1fr max-content`\n- **Medium**: `minmax(200px, 1fr) max-content 1fr min-content`\n- **Large**: `minmax(300px, 2fr) max-content 1fr min-content`'}}},v=e=>m.createElement(h,e),v.args={rowDensity:`compact`},v.parameters={docs:{description:{story:"Use the `rowDensity` prop to adjust the vertical spacing between rows."}}},y=()=>m.createElement(i,{colVisibility:[`*`,`*`,`*`],colLayout:{s:`1fr 1fr 1fr`,m:`2fr 1fr 1fr`,l:`2fr 1fr 1fr`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,{onClick:()=>alert(`Name column clicked!`)},`Name`),m.createElement(i.HeaderCell,{onClick:()=>alert(`Role column clicked!`)},`Role`),m.createElement(i.HeaderCell,{onClick:()=>alert(`Department column clicked!`)},`Department`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`John Doe`),m.createElement(i.Cell,null,`Admin`),m.createElement(i.Cell,null,`Engineering`)),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Jane Smith`),m.createElement(i.Cell,null,`User`),m.createElement(i.Cell,null,`Marketing`)),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Bob Johnson`),m.createElement(i.Cell,null,`Manager`),m.createElement(i.Cell,null,`Sales`)))),y.parameters={docs:{description:{story:"Header cells can be made interactive by passing an `onClick` handler. When clicked, they render as buttons and are announced by screen readers. Consumers are responsible for implementing any sorting or filtering behavior in the data passed to `Table`."}}},b=()=>{let[e,t]=(0,m.useState)([{id:1,name:`John Doe`,email:`john@example.com`,department:``,startDate:`2023-01-15`,status:`Active`},{id:2,name:``,email:`jane@example.com`,department:`Marketing`,startDate:``,status:``},{id:3,name:`Bob Johnson`,email:``,department:``,startDate:`2022-06-01`,status:`Active`}]),n=(e,n,r)=>{t(t=>t.map(t=>t.id===e?{...t,[n]:r}:t))},r=[`Engineering`,`Marketing`,`Sales`,`Design`,`HR`];return m.createElement(i,{kind:`editable`,colVisibility:[`*`,`*`,`*`,`*`,`*`],colLayout:{s:`1fr 1fr 1fr min-content`,m:`1fr 1fr 1fr 1fr 1fr`,l:`1fr 1fr 1fr 1fr 1fr`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Name (Input)`),m.createElement(i.HeaderCell,null,`Email (Input)`),m.createElement(i.HeaderCell,null,`Department (Autocomplete)`),m.createElement(i.HeaderCell,null,`Start Date (DateInput)`),m.createElement(i.HeaderCell,null,`Status (Select)`))),m.createElement(i.Body,null,e.map(e=>m.createElement(i.Row,{key:e.id},m.createElement(i.Cell,null,m.createElement(o,{label:`Employee name`,value:e.name,onChange:t=>n(e.id,`name`,t.target.value),placeholder:`Enter name`})),m.createElement(i.Cell,null,m.createElement(o,{label:`Email address`,value:e.email,onChange:t=>n(e.id,`email`,t.target.value),placeholder:`Enter email`,type:`email`})),m.createElement(i.Cell,null,m.createElement(c,{label:`Department`,inputValue:e.department,onInputChange:t=>n(e.id,`department`,t),onChange:t=>n(e.id,`department`,t)},r.map(e=>m.createElement(c.Item,{key:e,value:e},e)))),m.createElement(i.Cell,null,m.createElement(u,{label:`Start date`,value:e.startDate,onChange:t=>n(e.id,`startDate`,t),placeholder:`YYYY-MM-DD`})),m.createElement(i.Cell,null,m.createElement(f,{id:`status-${e.id}`,label:`Status`,value:e.status,onChange:t=>n(e.id,`status`,t)},m.createElement(f.Item,{value:`Active`},`Active`),m.createElement(f.Item,{value:`Inactive`},`Inactive`),m.createElement(f.Item,{value:`Pending`},`Pending`)))))))},b.parameters={docs:{description:{story:"This table demonstrates all available editable input types: `TableInput` for text fields, `TableAutocomplete` for searchable selections, `TableDateInput` for date picking, and `TableSelect` for dropdown selections. The table includes rows with partially filled data to show empty state behavior."}}},x=()=>{let[e,t]=(0,m.useState)({id:1,name:`John Doe`,email:`john@example.com`,department:``,startDate:`2023-01-15`,status:`Active`}),n=(e,n)=>{t(t=>({...t,[e]:n}))};return m.createElement(`div`,{style:{width:`600px`,height:`auto`,overflow:`scroll`,border:`2px solid #ddd`,padding:`16px`}},m.createElement(i,{kind:`editable`,colVisibility:[`*`,`*`,`*`,`*`,`*`],colLayout:{s:`1fr 1fr 1fr min-content`,m:`1fr 1fr 1fr 1fr 1fr`,l:`1fr 1fr 1fr 1fr 1fr`}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Name (Input)`),m.createElement(i.HeaderCell,null,`Email (Input)`),m.createElement(i.HeaderCell,null,`Department (Autocomplete)`),m.createElement(i.HeaderCell,null,`Start Date (DateInput)`),m.createElement(i.HeaderCell,null,`Status (Select)`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,m.createElement(o,{label:`Employee name`,value:e.name,onChange:e=>n(`name`,e.target.value),placeholder:`Enter name`})),m.createElement(i.Cell,null,m.createElement(o,{label:`Email address`,value:e.email,onChange:e=>n(`email`,e.target.value),placeholder:`Enter email`,type:`email`})),m.createElement(i.Cell,null,m.createElement(c,{label:`Department`,inputValue:e.department,onInputChange:e=>n(`department`,e),onChange:e=>n(`department`,e)},[`Engineering`,`Marketing`,`Sales`,`Design`,`HR`].map(e=>m.createElement(c.Item,{key:e,value:e},e)))),m.createElement(i.Cell,null,m.createElement(u,{label:`Start date`,value:e.startDate,onChange:e=>n(`startDate`,e),placeholder:`YYYY-MM-DD`})),m.createElement(i.Cell,null,m.createElement(f,{id:`status-select`,label:`Status`,value:e.status,onChange:e=>n(`status`,e)},m.createElement(f.Item,{value:`Active`},`Active`),m.createElement(f.Item,{value:`Inactive`},`Inactive`),m.createElement(f.Item,{value:`Pending`},`Pending`)))))))},x.parameters={docs:{description:{story:"This table is wrapped in an `overflow: scroll` container to test that dropdowns (like `TableSelect`) escape the overflow boundary and remain visible. This is important when tables are horizontally scrollable or constrained."}}},S=({pinColumns:e})=>m.createElement(`div`,{style:{background:`var(--bgColor-blueGrey)`,padding:`16px`}},m.createElement(i,{colVisibility:[`*`,`*`,`*`,`*`,`*`,`*`,`*`,`*`,`*`,`*`],colLayout:{s:`max-content 200px 180px 180px 150px max-content 180px 150px 180px max-content`,m:`max-content 220px 200px 200px 180px max-content 200px 180px 200px max-content`,l:`max-content 240px 220px 220px 200px max-content 220px 200px 220px max-content`},pinColumns:e,kind:`editable`},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Name`),m.createElement(i.HeaderCell,null,`Email`),m.createElement(i.HeaderCell,null,`Phone`),m.createElement(i.HeaderCell,null,`Department`),m.createElement(i.HeaderCell,null,`Location`),m.createElement(i.HeaderCell,null,`Status`),m.createElement(i.HeaderCell,null,`Start Date`),m.createElement(i.HeaderCell,null,`Salary`),m.createElement(i.HeaderCell,null,`Manager`),m.createElement(i.HeaderCell,null,`Actions`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`John Doe`),m.createElement(i.Cell,null,`john@example.com`),m.createElement(i.Cell,null,`(555) 123-4567`),m.createElement(i.Cell,null,`Engineering`),m.createElement(i.Cell,null,`New York`),m.createElement(i.Cell,null,`Active`),m.createElement(i.Cell,null,`Jan 15, 2022`),m.createElement(i.Cell,null,`$120,000`),m.createElement(i.Cell,null,`Sarah Connor`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Jane Smith`),m.createElement(i.Cell,null,`jane@example.com`),m.createElement(i.Cell,null,`(555) 987-6543`),m.createElement(i.Cell,null,`Marketing`),m.createElement(i.Cell,null,`San Francisco`),m.createElement(i.Cell,null,`Active`),m.createElement(i.Cell,null,`Mar 3, 2021`),m.createElement(i.Cell,null,`$105,000`),m.createElement(i.Cell,null,`Tom Bradley`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Bob Johnson`),m.createElement(i.Cell,null,`bob@example.com`),m.createElement(i.Cell,null,`(555) 456-7890`),m.createElement(i.Cell,null,`Sales`),m.createElement(i.Cell,null,`Chicago`),m.createElement(i.Cell,null,`On Leave`),m.createElement(i.Cell,null,`Nov 20, 2023`),m.createElement(i.Cell,null,`$95,000`),m.createElement(i.Cell,null,`Lisa Park`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`)))))),S.args={pinColumns:`both`},S.argTypes={pinColumns:{control:{type:`inline-radio`},options:[`none`,`start`,`end`,`both`]}},S.parameters={docs:{description:{story:'A scrollable table with the first column (Name) pinned to the start and the last column (Actions) pinned to the end. Middle columns scroll horizontally. Use `columnOverflow="scroll"` with `pinnedStart` and `pinnedEnd` to configure. Pinned columns require fixed widths in `colLayout` (not `fr` units).'}}},C=()=>m.createElement(i,{colVisibility:[`*`,`*`,`m`,`m`,`*`],colLayout:{s:[`1fr`,`1fr`,`1fr`,`1fr`,`min-content`],m:[`1fr`,`1fr`,`1fr`,`1fr`,`min-content`],l:[`1fr`,`1fr`,`1fr`,`1fr`,`min-content`]}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Name`),m.createElement(i.HeaderCell,null,`Email`),m.createElement(i.HeaderCell,null,`Role`),m.createElement(i.HeaderCell,null,`Department`),m.createElement(i.HeaderCell,null,`Actions`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`John Doe`),m.createElement(i.Cell,null,`john@example.com`),m.createElement(i.Cell,null,`Admin`),m.createElement(i.Cell,null,`Engineering`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Jane Smith`),m.createElement(i.Cell,null,`jane@example.com`),m.createElement(i.Cell,null,`User`),m.createElement(i.Cell,null,`Marketing`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Bob Johnson`),m.createElement(i.Cell,null,`bob@example.com`),m.createElement(i.Cell,null,`Manager`),m.createElement(i.Cell,null,`Sales`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))))),C.parameters={docs:{description:{story:"Provide `colLayout` as a **track array** per breakpoint (parallel to `colVisibility`) to opt into animated column show/hide. `fr` widths are wrapped in `minmax(0, …)` internally so hidden columns can collapse to `minmax(0, 0fr)` and interpolate. Resize the viewport across the `m` breakpoint: the Role and Department columns animate open/closed while the track count stays constant. The trailing `min-content` Actions column stays visible and does not interpolate. Honors `prefers-reduced-motion: reduce`."}}},w=()=>{let[e,t]=(0,m.useState)(!1),n=[`*`,`*`,`*`,e?`none`:`*`,`*`];return m.createElement(`div`,null,m.createElement(`button`,{className:`button button--primary`,onClick:()=>t(e=>!e),style:{marginBottom:16}},e?`Show`:`Hide`,` Department column`),m.createElement(i,{colVisibility:n,colLayout:{s:[`1fr`,`1fr`,`1fr`,`1fr`,`min-content`],m:[`1fr`,`1fr`,`1fr`,`1fr`,`min-content`],l:[`1fr`,`1fr`,`1fr`,`1fr`,`min-content`]}},m.createElement(i.Header,null,m.createElement(i.Row,null,m.createElement(i.HeaderCell,null,`Name`),m.createElement(i.HeaderCell,null,`Email`),m.createElement(i.HeaderCell,null,`Role`),m.createElement(i.HeaderCell,null,`Department`),m.createElement(i.HeaderCell,null,`Actions`))),m.createElement(i.Body,null,m.createElement(i.Row,null,m.createElement(i.Cell,null,`John Doe`),m.createElement(i.Cell,null,`john@example.com`),m.createElement(i.Cell,null,`Admin`),m.createElement(i.Cell,null,`Engineering`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Jane Smith`),m.createElement(i.Cell,null,`jane@example.com`),m.createElement(i.Cell,null,`User`),m.createElement(i.Cell,null,`Marketing`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))),m.createElement(i.Row,null,m.createElement(i.Cell,null,`Bob Johnson`),m.createElement(i.Cell,null,`bob@example.com`),m.createElement(i.Cell,null,`Manager`),m.createElement(i.Cell,null,`Sales`),m.createElement(i.Cell,null,m.createElement(`button`,null,`Edit`))))))},w.storyName=`Programmatically hiding a column`,w.parameters={layout:`centered`,docs:{description:{story:'Set a column\'s `colVisibility` entry to `"none"` to hide it programmatically (e.g. from React state), and back to `"*"` or a breakpoint (`"m"`) to reveal it. The column animates open/closed.\n\n**`"none"` requires the array form of `colLayout`.** You must provide each breakpoint\'s layout as a track array parallel to `colVisibility` (e.g. `["1fr", "1fr", "1fr", "1fr", "min-content"]`) rather than a CSS string (`"repeat(4, 1fr) min-content"`). Only the array form exposes each column\'s width individually, which is what lets a single track collapse to `minmax(0, 0fr)` while the total track count stays constant so the grid can interpolate.\n\nIf `colLayout` is a string at the current breakpoint, `"none"` falls back to `"*"` (the column stays visible) and a `console.error` is logged.'}}},T={title:`Components/Table`,component:i},h.__docgenInfo={description:``,methods:[],displayName:`Overview`},g.__docgenInfo={description:``,methods:[],displayName:`ColumnVisibility`},_.__docgenInfo={description:``,methods:[],displayName:`ColumnLayout`},v.__docgenInfo={description:``,methods:[],displayName:`RowSpacing`},y.__docgenInfo={description:``,methods:[],displayName:`ClickableHeaders`},b.__docgenInfo={description:``,methods:[],displayName:`AllEditableInputTypes`},x.__docgenInfo={description:``,methods:[],displayName:`TableWithOverflow`},S.__docgenInfo={description:``,methods:[],displayName:`ScrollableWithPinnedColumns`},C.__docgenInfo={description:``,methods:[],displayName:`AnimatedColumns`},w.__docgenInfo={description:'Toggle a column\'s visibility at runtime by flipping its `colVisibility` entry\nto/from `"none"`. This only animates when `colLayout` is supplied as track\narrays (see the story description).',methods:[],displayName:`ProgrammaticallyHidingAColumn`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Table colVisibility={["*", "*", "m", "m", "*"]} colLayout={{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`({
  pinColumns
}) => <div style={{
  background: "var(--bgColor-blueGrey)",
  padding: "16px"
}}>
    <Table colVisibility={["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]} colLayout={{
    s: "max-content 200px 180px 180px 150px max-content 180px 150px 180px max-content",
    m: "max-content 220px 200px 200px 180px max-content 200px 180px 200px max-content",
    l: "max-content 240px 220px 220px 200px max-content 220px 200px 220px max-content"
  }} pinColumns={pinColumns} kind="editable">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Department</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Start Date</Table.HeaderCell>
          <Table.HeaderCell>Salary</Table.HeaderCell>
          <Table.HeaderCell>Manager</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>john@example.com</Table.Cell>
          <Table.Cell>(555) 123-4567</Table.Cell>
          <Table.Cell>Engineering</Table.Cell>
          <Table.Cell>New York</Table.Cell>
          <Table.Cell>Active</Table.Cell>
          <Table.Cell>Jan 15, 2022</Table.Cell>
          <Table.Cell>$120,000</Table.Cell>
          <Table.Cell>Sarah Connor</Table.Cell>
          <Table.Cell>
            <button>Edit</button>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jane Smith</Table.Cell>
          <Table.Cell>jane@example.com</Table.Cell>
          <Table.Cell>(555) 987-6543</Table.Cell>
          <Table.Cell>Marketing</Table.Cell>
          <Table.Cell>San Francisco</Table.Cell>
          <Table.Cell>Active</Table.Cell>
          <Table.Cell>Mar 3, 2021</Table.Cell>
          <Table.Cell>$105,000</Table.Cell>
          <Table.Cell>Tom Bradley</Table.Cell>
          <Table.Cell>
            <button>Edit</button>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob Johnson</Table.Cell>
          <Table.Cell>bob@example.com</Table.Cell>
          <Table.Cell>(555) 456-7890</Table.Cell>
          <Table.Cell>Sales</Table.Cell>
          <Table.Cell>Chicago</Table.Cell>
          <Table.Cell>On Leave</Table.Cell>
          <Table.Cell>Nov 20, 2023</Table.Cell>
          <Table.Cell>$95,000</Table.Cell>
          <Table.Cell>Lisa Park</Table.Cell>
          <Table.Cell>
            <button>Edit</button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <Table colVisibility={["*", "*", "m", "m", "*"]} colLayout={{
  s: ["1fr", "1fr", "1fr", "1fr", "min-content"],
  m: ["1fr", "1fr", "1fr", "1fr", "min-content"],
  l: ["1fr", "1fr", "1fr", "1fr", "min-content"]
}}>
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
  </Table>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [departmentHidden, setDepartmentHidden] = useState(false);

  // "Department" is column index 3. Toggling it between "none" (hidden) and
  // "*" (always visible) animates the column open/closed.
  const colVisibility = ["*", "*", "*", departmentHidden ? "none" : "*", "*"];
  return <div>
      <button className="button button--primary" onClick={() => setDepartmentHidden(hidden => !hidden)} style={{
      marginBottom: 16
    }}>
        {departmentHidden ? "Show" : "Hide"} Department column
      </button>
      <Table colVisibility={colVisibility} colLayout={{
      s: ["1fr", "1fr", "1fr", "1fr", "min-content"],
      m: ["1fr", "1fr", "1fr", "1fr", "min-content"],
      l: ["1fr", "1fr", "1fr", "1fr", "min-content"]
    }}>
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
      </Table>
    </div>;
}`,...w.parameters?.docs?.source},description:{story:'Toggle a column\'s visibility at runtime by flipping its `colVisibility` entry\nto/from `"none"`. This only animates when `colLayout` is supplied as track\narrays (see the story description).',...w.parameters?.docs?.description}}},E=[`Overview`,`ColumnVisibility`,`ColumnLayout`,`RowSpacing`,`ClickableHeaders`,`AllEditableInputTypes`,`TableWithOverflow`,`ScrollableWithPinnedColumns`,`AnimatedColumns`,`ProgrammaticallyHidingAColumn`]}))();export{b as AllEditableInputTypes,C as AnimatedColumns,y as ClickableHeaders,_ as ColumnLayout,g as ColumnVisibility,h as Overview,w as ProgrammaticallyHidingAColumn,v as RowSpacing,S as ScrollableWithPinnedColumns,x as TableWithOverflow,E as __namedExportsOrder,T as default};