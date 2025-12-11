import{e}from"./iframe-TBFlVX6f.js";import{c as d}from"./index-RvS1aOr8.js";import{S as l}from"./index-DPdbS6x4.js";import"./preload-helper-PPVm8Dsz.js";import"./downshift.esm-BAfHClSj.js";import"./extends-DDykod_l.js";import"./index-CHsAb1j0.js";import"./index-Chjiymov.js";import"./tslib.es6-rrx6G-_s.js";import"./index-BtXdbvX-.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-D4ZnUx02.js";import"./AsElement-CpkTwJND.js";import"./index-Ck3kFN9V.js";import"./index-DwWlvkYt.js";const t=({name:n,lastFour:i,isInline:m})=>e.createElement("span",{className:d(["nds-truncatedAccount",{"nds-truncatedAccount--inline":m}]),title:`${n} - ${i}`},e.createElement("span",{className:"whiteSpace--truncate"},n),i&&e.createElement("span",{role:"img",className:"padding--x--xxs"},"-"),i&&e.createElement("span",{className:"whiteSpace--singleLine"},i));t.__docgenInfo={description:`Auto-truncated display of account name and account last four digits.
This component will grow to the width of its parent container.
The account name will truncate with ellipsis as needed to fit the space.`,methods:[],displayName:"TruncatedAccount",props:{name:{description:"Name of account",type:{name:"string"},required:!0},lastFour:{description:"Last four digits of account number",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},isInline:{description:"When `true`, the TruncatedAccount root element will display inline instead of block",type:{name:"bool"},required:!1}}};const u=n=>e.createElement(t,n),c=u.bind({});c.args={name:"Secondary Checking Account",lastFour:4321};const a=n=>e.createElement(e.Fragment,null,e.createElement("h4",{className:"margin--bottom"},"The element below can be resized:"),e.createElement("div",{style:{outline:"1px dotted hotpink",width:"300px",height:"36px",resize:"both",overflow:"auto"}},e.createElement(t,n)));a.args={name:"Secondary Savings Account / Car Repair Funds",lastFour:4441};a.parameters={docs:{description:{story:"When the account name is longer than available space, it will be truncated automatically. Resize the element in this example to see truncation in action."}}};const o=n=>e.createElement("div",{className:"fontSize--heading1 fontFamily--heading"},e.createElement(t,n));o.args={name:"Primary Savings Account",lastFour:9695};o.parameters={docs:{description:{story:"This component will inherit any text styles from its parent."}}};const r=()=>e.createElement("p",null,"Would you like to transfer money from"," ",e.createElement("strong",null,e.createElement(t,{name:"Primary Checking",lastFour:7633,isInline:!0}))," ","to"," ",e.createElement("strong",null,e.createElement(t,{name:"Secondary Savings",lastFour:3444,isInline:!0})),"?");r.parameters={docs:{description:{story:"By default, the root element of `TruncatedAccount` displays block. Passing the `isInline` prop sets it to display inline."}}};const s=()=>e.createElement("div",{style:{width:"500px"}},e.createElement(l,{label:"Loan"},e.createElement(l.Item,{value:"123"},e.createElement(t,{name:"A Loan",lastFour:"1234 ($1,234.24)"})),e.createElement(l.Item,{value:"234"},e.createElement(t,{name:"My Favorite Loan With A Very Long Name",lastFour:"33=0008 ($92,050.95)"}))));s.parameters={docs:{description:{story:"An example of using this component in a Select"}}};const L={title:"Components/TruncatedAccount",component:t};a.__docgenInfo={description:"",methods:[],displayName:"LongAccountName"};o.__docgenInfo={description:"",methods:[],displayName:"StylingThisComponent"};r.__docgenInfo={description:"",methods:[],displayName:"InlineLayout"};s.__docgenInfo={description:"",methods:[],displayName:"AccountSelector"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <TruncatedAccount {...args} />",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <>
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
  </p>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...s.parameters?.docs?.source}}};const F=["Overview","LongAccountName","StylingThisComponent","InlineLayout","AccountSelector"];export{s as AccountSelector,r as InlineLayout,a as LongAccountName,c as Overview,o as StylingThisComponent,F as __namedExportsOrder,L as default};
