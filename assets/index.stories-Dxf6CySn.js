import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-D0FPaLQ2.js";import{n as r,t as i}from"./classcat-BMx3V7o4.js";import{r as a,t as o}from"./Select-BgYezh3Y.js";var s,c,l=e((()=>{s=t(n()),r(),c=({name:e,lastFour:t,isInline:n})=>s.createElement(`span`,{className:i([`nds-truncatedAccount`,{"nds-truncatedAccount--inline":n}]),title:t?`${e} - ${t}`:e},s.createElement(`span`,{className:`whiteSpace--truncate`},e),t&&s.createElement(`span`,{role:`img`,className:`padding--x--xxs`},`-`),t&&s.createElement(`span`,{className:`whiteSpace--singleLine`},t))})),u,d,f,p,m,h,g,_,v;e((()=>{u=t(n()),l(),a(),d=e=>u.createElement(c,e),f=d.bind({}),f.args={name:`Secondary Checking Account`,lastFour:4321},p=e=>u.createElement(u.Fragment,null,u.createElement(`h4`,{className:`margin--bottom`},`The element below can be resized:`),u.createElement(`div`,{style:{outline:`1px dotted hotpink`,width:`300px`,height:`36px`,resize:`both`,overflow:`auto`}},u.createElement(c,e))),p.args={name:`Secondary Savings Account / Car Repair Funds`,lastFour:4441},p.parameters={docs:{description:{story:`When the account name is longer than available space, it will be truncated automatically. Resize the element in this example to see truncation in action.`}}},m=e=>u.createElement(`div`,{className:`fontSize--heading1 fontFamily--heading`},u.createElement(c,e)),m.args={name:`Primary Savings Account`,lastFour:9695},m.parameters={docs:{description:{story:`This component will inherit any text styles from its parent.`}}},h=()=>u.createElement(`p`,null,`Would you like to transfer money from`,` `,u.createElement(`strong`,null,u.createElement(c,{name:`Primary Checking`,lastFour:7633,isInline:!0})),` `,`to`,` `,u.createElement(`strong`,null,u.createElement(c,{name:`Secondary Savings`,lastFour:3444,isInline:!0})),`?`),h.parameters={docs:{description:{story:"By default, the root element of `TruncatedAccount` displays block. Passing the `isInline` prop sets it to display inline."}}},g=()=>u.createElement(`div`,{style:{width:`500px`}},u.createElement(o,{label:`Loan`},u.createElement(o.Item,{value:`123`},u.createElement(c,{name:`A Loan`,lastFour:`1234 ($1,234.24)`})),u.createElement(o.Item,{value:`234`},u.createElement(c,{name:`My Favorite Loan With A Very Long Name`,lastFour:`33=0008 ($92,050.95)`})))),g.parameters={docs:{description:{story:`An example of using this component in a Select`}}},_={title:`Components/TruncatedAccount`,component:c},p.__docgenInfo={description:``,methods:[],displayName:`LongAccountName`},m.__docgenInfo={description:``,methods:[],displayName:`StylingThisComponent`},h.__docgenInfo={description:``,methods:[],displayName:`InlineLayout`},g.__docgenInfo={description:``,methods:[],displayName:`AccountSelector`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <TruncatedAccount {...args} />`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
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
  </>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div className="fontSize--heading1 fontFamily--heading">
    <TruncatedAccount {...args} />
  </div>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <p>
    Would you like to transfer money from{" "}
    <strong>
      <TruncatedAccount name="Primary Checking" lastFour={7633} isInline />
    </strong>{" "}
    to{" "}
    <strong>
      <TruncatedAccount name="Secondary Savings" lastFour={3444} isInline />
    </strong>
    ?
  </p>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...g.parameters?.docs?.source}}},v=[`Overview`,`LongAccountName`,`StylingThisComponent`,`InlineLayout`,`AccountSelector`]}))();export{g as AccountSelector,h as InlineLayout,p as LongAccountName,f as Overview,m as StylingThisComponent,v as __namedExportsOrder,_ as default};