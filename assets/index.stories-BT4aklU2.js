import{e}from"./iframe-D838Xngv.js";import{c as d}from"./index-RvS1aOr8.js";import{S as l}from"./index-sUl8N3ER.js";import"./preload-helper-PPVm8Dsz.js";import"./downshift.esm-B2L8EezS.js";import"./tslib.es6-Dem0CNzv.js";import"./index-BLNjWkow.js";import"./index-M5r28pWZ.js";import"./index-aJhA7lUn.js";import"./AsElement-JwrBrqs5.js";import"./index-DCwpezfL.js";import"./index-BVdUVi6f.js";const n=({name:t,lastFour:s,isInline:m})=>e.createElement("span",{className:d(["nds-truncatedAccount",{"nds-truncatedAccount--inline":m}]),title:s?`${t} - ${s}`:t},e.createElement("span",{className:"whiteSpace--truncate"},t),s&&e.createElement("span",{role:"img",className:"padding--x--xxs"},"-"),s&&e.createElement("span",{className:"whiteSpace--singleLine"},s));try{n.displayName="TruncatedAccount",n.__docgenInfo={description:`Auto-truncated display of account name and account last four digits.
This component will grow to the width of its parent container.
The account name will truncate with ellipsis as needed to fit the space.`,displayName:"TruncatedAccount",props:{name:{defaultValue:null,description:"Name of account",name:"name",required:!0,type:{name:"string"}},lastFour:{defaultValue:null,description:"Last four digits of account number",name:"lastFour",required:!1,type:{name:"string | number"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}},isInline:{defaultValue:null,description:"When `true`, the TruncatedAccount root element will display inline instead of block",name:"isInline",required:!1,type:{name:"boolean"}}}}}catch{}const u=t=>e.createElement(n,t),i=u.bind({});i.args={name:"Secondary Checking Account",lastFour:4321};const a=t=>e.createElement(e.Fragment,null,e.createElement("h4",{className:"margin--bottom"},"The element below can be resized:"),e.createElement("div",{style:{outline:"1px dotted hotpink",width:"300px",height:"36px",resize:"both",overflow:"auto"}},e.createElement(n,t)));a.args={name:"Secondary Savings Account / Car Repair Funds",lastFour:4441};a.parameters={docs:{description:{story:"When the account name is longer than available space, it will be truncated automatically. Resize the element in this example to see truncation in action."}}};const o=t=>e.createElement("div",{className:"fontSize--heading1 fontFamily--heading"},e.createElement(n,t));o.args={name:"Primary Savings Account",lastFour:9695};o.parameters={docs:{description:{story:"This component will inherit any text styles from its parent."}}};const r=()=>e.createElement("p",null,"Would you like to transfer money from"," ",e.createElement("strong",null,e.createElement(n,{name:"Primary Checking",lastFour:7633,isInline:!0}))," ","to"," ",e.createElement("strong",null,e.createElement(n,{name:"Secondary Savings",lastFour:3444,isInline:!0})),"?");r.parameters={docs:{description:{story:"By default, the root element of `TruncatedAccount` displays block. Passing the `isInline` prop sets it to display inline."}}};const c=()=>e.createElement("div",{style:{width:"500px"}},e.createElement(l,{label:"Loan"},e.createElement(l.Item,{value:"123"},e.createElement(n,{name:"A Loan",lastFour:"1234 ($1,234.24)"})),e.createElement(l.Item,{value:"234"},e.createElement(n,{name:"My Favorite Loan With A Very Long Name",lastFour:"33=0008 ($92,050.95)"}))));c.parameters={docs:{description:{story:"An example of using this component in a Select"}}};const N={title:"Components/TruncatedAccount",component:n};a.__docgenInfo={description:"",methods:[],displayName:"LongAccountName"};o.__docgenInfo={description:"",methods:[],displayName:"StylingThisComponent"};r.__docgenInfo={description:"",methods:[],displayName:"InlineLayout"};c.__docgenInfo={description:"",methods:[],displayName:"AccountSelector"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <TruncatedAccount {...args} />",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <>
    <h4 className="margin--bottom">The element below can be resized:</h4>
    <div style={{
    outline: "1px dotted hotpink",
    width: "300px",
    height: "36px",
    resize: "both",
    overflow: "auto"
  }}>
      <TruncatedAccount {...args} />
    </div>
  </>`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div className="fontSize--heading1 fontFamily--heading">
    <TruncatedAccount {...args} />
  </div>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <p>
    Would you like to transfer money from{" "}
    <strong>
      <TruncatedAccount name="Primary Checking" lastFour={7633} isInline />
    </strong>{" "}
    to{" "}
    <strong>
      <TruncatedAccount name="Secondary Savings" lastFour={3444} isInline />
    </strong>
    ?
  </p>`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div style={{
  width: "500px"
}}>
    <Select label="Loan">
      <Select.Item value="123">
        <TruncatedAccount name="A Loan" lastFour="1234 ($1,234.24)" />
      </Select.Item>
      <Select.Item value="234">
        <TruncatedAccount name="My Favorite Loan With A Very Long Name" lastFour="33=0008 ($92,050.95)" />
      </Select.Item>
    </Select>
  </div>`,...c.parameters?.docs?.source}}};const b=["Overview","LongAccountName","StylingThisComponent","InlineLayout","AccountSelector"];export{c as AccountSelector,r as InlineLayout,a as LongAccountName,i as Overview,o as StylingThisComponent,b as __namedExportsOrder,N as default};
