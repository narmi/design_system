import{r as E,e}from"./iframe-DOQXiNbA.js";import{A as l}from"./index-B2wB-cfe.js";import{R as t}from"./index-IDt57kqT.js";import"./preload-helper-PPVm8Dsz.js";import"./AsElement-CI8Rxu5t.js";import"./index-RvS1aOr8.js";const a=({behavior:n="exclusive",children:o,testId:y="nds-accordionSet"})=>{const[v,g]=E.useState(null);return e.createElement("div",{className:"nds-accordionSet","data-testid":y},e.Children.map(o,(r,d)=>{if(!e.isValidElement(r)||r.type!==l)return console.warn("AccordionSet only accepts Accordion children"),null;const p=n==="exclusive",h=v===d,f=u=>{p&&g(u?d:null),r.props.onUserToggle?.(u)};return e.cloneElement(r,{key:r.key??d,...p&&{isOpen:h,onUserToggle:f}})}))};try{a.displayName="AccordionSet",a.__docgenInfo={description:`May be used to wrap \`Accordion\` components to control how their open/closed state
affects each other.

"native": Any number of accordions can be open at once
"exclusive": Open accordions are mutually exclusive; opening one closes others (default)`,displayName:"AccordionSet",props:{behavior:{defaultValue:{value:"exclusive"},description:`Behavior mode for the accordion set.
- "exclusive": Only one accordion can be open at a time
- "native": Multiple accordions can be open simultaneously`,name:"behavior",required:!1,type:{name:"enum",value:[{value:'"exclusive"'},{value:'"native"'}]}},children:{defaultValue:null,description:"Accordion children. Must be of type Accordion.",name:"children",required:!0,type:{name:"ReactElement<AccordionProps, string | JSXElementConstructor<any>>[]"}},testId:{defaultValue:{value:"nds-accordionSet"},description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const m=[{id:"account",title:"Account Information",content:"View your account details, balance, and transaction history."},{id:"security",title:"Security Settings",content:"Manage your password, two-factor authentication, and security preferences."},{id:"notifications",title:"Notification Preferences",content:"Configure email, SMS, and push notification settings for your account."},{id:"support",title:"Help & Support",content:"Access help articles, contact support, or schedule a consultation."}],c=()=>e.createElement(a,{behavior:"exclusive"},m.map(n=>e.createElement(l,{key:n.id,renderSummary:o=>e.createElement(t,{alignItems:"center",gapSize:"s"},e.createElement(t.Item,null,e.createElement("span",null,n.title)),e.createElement(t.Item,{shrink:!0},e.createElement("span",{className:"fontSize--xs fontColor--charcoal"},o?"Collapse":"Expand")))},e.createElement("div",{className:"padding--all"},n.content))));c.parameters={docs:{description:{story:"In exclusive mode (default), only one accordion can be open at a time. Opening a new accordion automatically closes the previously opened one."}}};const s=()=>e.createElement(a,{behavior:"native"},m.map(n=>e.createElement(l,{key:n.id,renderSummary:o=>e.createElement(t,{alignItems:"center",gapSize:"s"},e.createElement(t.Item,null,e.createElement("span",null,n.title)),e.createElement(t.Item,{shrink:!0},e.createElement("span",{className:"fontSize--xs fontColor--charcoal"},o?"Collapse":"Expand")))},e.createElement("div",{className:"padding--all"},n.content))));s.parameters={docs:{description:{story:"In native mode, each accordion manages its own state independently. Multiple accordions can be open simultaneously."}}};const i=()=>e.createElement(a,{behavior:"exclusive"},m.map(n=>e.createElement(l,{key:n.id,renderSummary:o=>e.createElement("div",{className:`alignChild--left--center padding--all--s bgColor--cloudGrey ${o?"rounded--top":"rounded--all"}`},e.createElement(t,{alignItems:"center",justifyContent:"space-between"},e.createElement(t.Item,null,e.createElement("strong",null,n.title)),e.createElement(t.Item,{shrink:!0},e.createElement("span",{className:"fontSize--xs fontColor--charcoal"},o?"Collapse":"Expand"))))},e.createElement("div",{className:"padding--all bgColor--snowGrey rounded--bottom"},e.createElement("p",null,n.content),e.createElement("div",{className:"margin--top--s"},e.createElement("button",{type:"button"},"Learn More"))))));i.parameters={docs:{description:{story:"Example showing how AccordionSet works with custom-styled accordions including interactive elements."}}};const C={title:"Components/AccordionSet",component:a};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <AccordionSet behavior="exclusive">
      {sampleAccordions.map(item => <Accordion key={item.id} renderSummary={isOpen => <Row alignItems="center" gapSize="s">
              <Row.Item>
                <span>{item.title}</span>
              </Row.Item>
              <Row.Item shrink>
                <span className="fontSize--xs fontColor--charcoal">
                  {isOpen ? "Collapse" : "Expand"}
                </span>
              </Row.Item>
            </Row>}>
          <div className="padding--all">{item.content}</div>
        </Accordion>)}
    </AccordionSet>;
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <AccordionSet behavior="native">
      {sampleAccordions.map(item => <Accordion key={item.id} renderSummary={isOpen => <Row alignItems="center" gapSize="s">
              <Row.Item>
                <span>{item.title}</span>
              </Row.Item>
              <Row.Item shrink>
                <span className="fontSize--xs fontColor--charcoal">
                  {isOpen ? "Collapse" : "Expand"}
                </span>
              </Row.Item>
            </Row>}>
          <div className="padding--all">{item.content}</div>
        </Accordion>)}
    </AccordionSet>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <AccordionSet behavior="exclusive">
      {sampleAccordions.map(item => <Accordion key={item.id} renderSummary={isOpen => <div className={\`alignChild--left--center padding--all--s bgColor--cloudGrey \${isOpen ? "rounded--top" : "rounded--all"}\`}>
              <Row alignItems="center" justifyContent="space-between">
                <Row.Item>
                  <strong>{item.title}</strong>
                </Row.Item>
                <Row.Item shrink>
                  <span className="fontSize--xs fontColor--charcoal">
                    {isOpen ? "Collapse" : "Expand"}
                  </span>
                </Row.Item>
              </Row>
            </div>}>
          <div className="padding--all bgColor--snowGrey rounded--bottom">
            <p>{item.content}</p>
            <div className="margin--top--s">
              <button type="button">Learn More</button>
            </div>
          </div>
        </Accordion>)}
    </AccordionSet>;
}`,...i.parameters?.docs?.source}}};const N=["ExclusiveMode","NativeMode","WithCustomStyling"];export{c as ExclusiveMode,s as NativeMode,i as WithCustomStyling,N as __namedExportsOrder,C as default};
