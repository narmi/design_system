import{e}from"./iframe-CWvcjpEt.js";import{c as u}from"./index-RvS1aOr8.js";import{P as r}from"./index-CLTdY825.js";import{S as m}from"./index-C_zZTJug.js";import"./preload-helper-PPVm8Dsz.js";import"./downshift.esm-CB5di14_.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./index-BaQVilRQ.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-DTa5lqc6.js";import"./AsElement-YuO2GXgf.js";import"./index-CaafuwDw.js";import"./index-Bhl2sFZf.js";const t=({name:n,lastFour:l,isInline:d})=>e.createElement("span",{className:u(["nds-truncatedAccount",{"nds-truncatedAccount--inline":d}]),title:`${n} - ${l}`},e.createElement("span",{className:"whiteSpace--truncate"},n),l&&e.createElement("span",{role:"img",className:"padding--x--xxs"},"-"),l&&e.createElement("span",{className:"whiteSpace--singleLine"},l));t.propTypes={name:r.string.isRequired,lastFour:r.oneOfType([r.string,r.number]),testId:r.string,isInline:r.bool};t.__docgenInfo={description:`Auto-truncated display of account name and account last four digits.
This component will grow to the width of its parent container.
The account name will truncate with ellipsis as needed to fit the space.`,methods:[],displayName:"TruncatedAccount",props:{name:{description:"Name of account",type:{name:"string"},required:!0},lastFour:{description:"Last four digits of account number",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},isInline:{description:"When `true`, the TruncatedAccount root element will display inline instead of block",type:{name:"bool"},required:!1}}};const p=n=>e.createElement(t,n),i=p.bind({});i.args={name:"Secondary Checking Account",lastFour:4321};const a=n=>e.createElement(e.Fragment,null,e.createElement("h4",{className:"margin--bottom"},"The element below can be resized:"),e.createElement("div",{style:{outline:"1px dotted hotpink",width:"300px",height:"36px",resize:"both",overflow:"auto"}},e.createElement(t,n)));a.args={name:"Secondary Savings Account / Car Repair Funds",lastFour:4441};a.parameters={docs:{description:{story:"When the account name is longer than available space, it will be truncated automatically. Resize the element in this example to see truncation in action."}}};const o=n=>e.createElement("div",{className:"fontSize--heading1 fontFamily--heading"},e.createElement(t,n));o.args={name:"Primary Savings Account",lastFour:9695};o.parameters={docs:{description:{story:"This component will inherit any text styles from its parent."}}};const s=()=>e.createElement("p",null,"Would you like to transfer money from"," ",e.createElement("strong",null,e.createElement(t,{name:"Primary Checking",lastFour:7633,isInline:!0}))," ","to"," ",e.createElement("strong",null,e.createElement(t,{name:"Secondary Savings",lastFour:3444,isInline:!0})),"?");s.parameters={docs:{description:{story:"By default, the root element of `TruncatedAccount` displays block. Passing the `isInline` prop sets it to display inline."}}};const c=()=>e.createElement("div",{style:{width:"500px"}},e.createElement(m,{label:"Loan"},e.createElement(m.Item,{value:"123"},e.createElement(t,{name:"A Loan",lastFour:"1234 ($1,234.24)"})),e.createElement(m.Item,{value:"234"},e.createElement(t,{name:"My Favorite Loan With A Very Long Name",lastFour:"33=0008 ($92,050.95)"}))));c.parameters={docs:{description:{story:"An example of using this component in a Select"}}};const F={title:"Components/TruncatedAccount",component:t};a.__docgenInfo={description:"",methods:[],displayName:"LongAccountName"};o.__docgenInfo={description:"",methods:[],displayName:"StylingThisComponent"};s.__docgenInfo={description:"",methods:[],displayName:"InlineLayout"};c.__docgenInfo={description:"",methods:[],displayName:"AccountSelector"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <TruncatedAccount {...args} />",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <>
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
  </div>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <p>
    Would you like to transfer money from{" "}
    <strong>
      <TruncatedAccount name="Primary Checking" lastFour={7633} isInline />
    </strong>{" "}
    to{" "}
    <strong>
      <TruncatedAccount name="Secondary Savings" lastFour={3444} isInline />
    </strong>
    ?
  </p>`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...c.parameters?.docs?.source}}};const L=["Overview","LongAccountName","StylingThisComponent","InlineLayout","AccountSelector"];export{c as AccountSelector,s as InlineLayout,a as LongAccountName,i as Overview,o as StylingThisComponent,L as __namedExportsOrder,F as default};
