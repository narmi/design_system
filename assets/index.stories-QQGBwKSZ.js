import{e}from"./iframe-BD9xPE55.js";import{T as l}from"./index-Dyitzke8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./index-BiJ3-8lL.js";function C(){return C=Object.assign?Object.assign.bind():function(a){for(var m=1;m<arguments.length;m++){var b=arguments[m];for(var i in b)({}).hasOwnProperty.call(b,i)&&(a[i]=b[i])}return a},C.apply(null,arguments)}const t=a=>e.createElement(l,C({colVisibility:["*","*","m","m","*"],colLayout:{s:"repeat(2, 1fr) min-content",m:"repeat(4, 1fr) min-content",l:"repeat(4, 1fr) min-content"}},a),e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.HeaderCell,null,"Name"),e.createElement(l.HeaderCell,null,"Email"),e.createElement(l.HeaderCell,null,"Role"),e.createElement(l.HeaderCell,null,"Department"),e.createElement(l.HeaderCell,null,"Actions"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"John Doe"),e.createElement(l.Cell,null,"john@example.com"),e.createElement(l.Cell,null,"Admin"),e.createElement(l.Cell,null,"Engineering"),e.createElement(l.Cell,null,e.createElement("button",null,"Edit"))),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Jane Smith"),e.createElement(l.Cell,null,"jane@example.com"),e.createElement(l.Cell,null,"User"),e.createElement(l.Cell,null,"Marketing"),e.createElement(l.Cell,null,e.createElement("button",null,"Edit"))),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Bob Johnson"),e.createElement(l.Cell,null,"bob@example.com"),e.createElement(l.Cell,null,"Manager"),e.createElement(l.Cell,null,"Sales"),e.createElement(l.Cell,null,e.createElement("button",null,"Edit"))))),r=()=>e.createElement(l,{colVisibility:["*","*","m","*","*"],colLayout:{s:"repeat(4, 1fr)",m:"repeat(4, 1fr) min-content",l:"repeat(4, 1fr) min-content"}},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.HeaderCell,null,"Col 1"),e.createElement(l.HeaderCell,null,"Col 2"),e.createElement(l.HeaderCell,null,"Col 3 (hidden on small)"),e.createElement(l.HeaderCell,null,"Col 4"),e.createElement(l.HeaderCell,null,"Col 5"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"Data 1"),e.createElement(l.Cell,null,"Data 2"),e.createElement(l.Cell,null,"Data 3 (hidden on small)"),e.createElement(l.Cell,null,"Data 4"),e.createElement(l.Cell,null,"Data 5")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"More 1"),e.createElement(l.Cell,null,"More 2"),e.createElement(l.Cell,null,"More 3 (hidden on small)"),e.createElement(l.Cell,null,"More 4"),e.createElement(l.Cell,null,"More 5"))));r.parameters={docs:{description:{story:"This table has a colVisibility value of `['*', '*', 'm', '*', '*']`, where the middle column is only shown at `m` viewports or larger."}}};const o=()=>e.createElement(l,{colVisibility:["*","*","*","*"],colLayout:{s:"2fr 1fr 1fr max-content",m:"minmax(200px, 1fr) max-content 1fr min-content",l:"minmax(300px, 2fr) max-content 1fr min-content"}},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.HeaderCell,null,"Product Name"),e.createElement(l.HeaderCell,null,"Price"),e.createElement(l.HeaderCell,null,"Category"),e.createElement(l.HeaderCell,null,"Actions"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"MacBook Pro 16-inch with M3 Max chip"),e.createElement(l.Cell,null,"$3,999.00"),e.createElement(l.Cell,null,"Laptops"),e.createElement(l.Cell,null,e.createElement("button",null,"Edit"))),e.createElement(l.Row,null,e.createElement(l.Cell,null,"iPhone 15 Pro"),e.createElement(l.Cell,null,"$999.00"),e.createElement(l.Cell,null,"Phones"),e.createElement(l.Cell,null,e.createElement("button",null,"Edit"))),e.createElement(l.Row,null,e.createElement(l.Cell,null,"AirPods Pro (2nd generation)"),e.createElement(l.Cell,null,"$249.00"),e.createElement(l.Cell,null,"Audio"),e.createElement(l.Cell,null,e.createElement("button",null,"Edit")))));o.parameters={docs:{description:{story:"Grid layouts configured per breakpoint using `colLayout`:\n\n- **Small**: `2fr 1fr 1fr max-content`\n- **Medium**: `minmax(200px, 1fr) max-content 1fr min-content`\n- **Large**: `minmax(300px, 2fr) max-content 1fr min-content`"}}};const n=a=>e.createElement(t,a);n.args={rowDensity:"compact"};n.parameters={docs:{description:{story:"Use the `rowDensity` prop to adjust the vertical spacing between rows."}}};const c=()=>e.createElement(l,{colVisibility:["*","*","*"],colLayout:{s:"1fr 1fr 1fr",m:"2fr 1fr 1fr",l:"2fr 1fr 1fr"}},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.HeaderCell,{onClick:()=>alert("Name column clicked!")},"Name"),e.createElement(l.HeaderCell,{onClick:()=>alert("Role column clicked!")},"Role"),e.createElement(l.HeaderCell,{onClick:()=>alert("Department column clicked!")},"Department"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"John Doe"),e.createElement(l.Cell,null,"Admin"),e.createElement(l.Cell,null,"Engineering")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Jane Smith"),e.createElement(l.Cell,null,"User"),e.createElement(l.Cell,null,"Marketing")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Bob Johnson"),e.createElement(l.Cell,null,"Manager"),e.createElement(l.Cell,null,"Sales"))));c.parameters={docs:{description:{story:"Header cells can be made interactive by passing an `onClick` handler. When clicked, they render as buttons and are announced by screen readers. Consumers are responsible for implementing any sorting or filtering behavior in the data passed to `Table`."}}};const p={title:"Components/Table",component:l};t.__docgenInfo={description:"",methods:[],displayName:"Overview"};r.__docgenInfo={description:"",methods:[],displayName:"ColumnVisibility"};o.__docgenInfo={description:"",methods:[],displayName:"ColumnLayout"};n.__docgenInfo={description:"",methods:[],displayName:"RowSpacing"};c.__docgenInfo={description:"",methods:[],displayName:"ClickableHeaders"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Table colVisibility={["*", "*", "m", "m", "*"]} colLayout={{
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
  </Table>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Table colVisibility={["*", "*", "m", "*", "*"]} colLayout={{
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
  </Table>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Table colVisibility={["*", "*", "*", "*"]} colLayout={{
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
  </Table>`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <Overview {...args} />",...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Table colVisibility={["*", "*", "*"]} colLayout={{
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
  </Table>`,...c.parameters?.docs?.source}}};const f=["Overview","ColumnVisibility","ColumnLayout","RowSpacing","ClickableHeaders"];export{c as ClickableHeaders,o as ColumnLayout,r as ColumnVisibility,t as Overview,n as RowSpacing,f as __namedExportsOrder,p as default};
