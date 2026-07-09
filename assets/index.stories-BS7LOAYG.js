import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-D0FPaLQ2.js";import{n as r,t as i}from"./Accordion-C1wpRq1J.js";import{n as a,t as o}from"./Row-CoAdUw40.js";var s,c,l=e((()=>{s=t(n()),r(),c=({behavior:e=`exclusive`,children:t,testId:n=`nds-accordionSet`})=>{let[r,a]=(0,s.useState)(null);return s.createElement(`div`,{className:`nds-accordionSet`,"data-testid":n},s.Children.map(t,(t,n)=>{if(!s.isValidElement(t)||t.type!==i)return console.warn(`AccordionSet only accepts Accordion children`),null;let o=e===`exclusive`,c=r===n;return s.cloneElement(t,{key:t.key??n,...o&&{isOpen:c,onUserToggle:e=>{o&&a(e?n:null),t.props.onUserToggle?.(e)}}})}))}})),u,d,f,p,m,h,g;e((()=>{u=t(n()),l(),r(),a(),d=[{id:`account`,title:`Account Information`,content:`View your account details, balance, and transaction history.`},{id:`security`,title:`Security Settings`,content:`Manage your password, two-factor authentication, and security preferences.`},{id:`notifications`,title:`Notification Preferences`,content:`Configure email, SMS, and push notification settings for your account.`},{id:`support`,title:`Help & Support`,content:`Access help articles, contact support, or schedule a consultation.`}],f=()=>u.createElement(c,{behavior:`exclusive`},d.map(e=>u.createElement(i,{key:e.id,renderSummary:t=>u.createElement(o,{alignItems:`center`,gapSize:`s`},u.createElement(o.Item,null,u.createElement(`span`,null,e.title)),u.createElement(o.Item,{shrink:!0},u.createElement(`span`,{className:`fontSize--xs fontColor--charcoal`},t?`Collapse`:`Expand`)))},u.createElement(`div`,{className:`padding--all`},e.content)))),f.parameters={docs:{description:{story:`In exclusive mode (default), only one accordion can be open at a time. Opening a new accordion automatically closes the previously opened one.`}}},p=()=>u.createElement(c,{behavior:`native`},d.map(e=>u.createElement(i,{key:e.id,renderSummary:t=>u.createElement(o,{alignItems:`center`,gapSize:`s`},u.createElement(o.Item,null,u.createElement(`span`,null,e.title)),u.createElement(o.Item,{shrink:!0},u.createElement(`span`,{className:`fontSize--xs fontColor--charcoal`},t?`Collapse`:`Expand`)))},u.createElement(`div`,{className:`padding--all`},e.content)))),p.parameters={docs:{description:{story:`In native mode, each accordion manages its own state independently. Multiple accordions can be open simultaneously.`}}},m=()=>u.createElement(c,{behavior:`exclusive`},d.map(e=>u.createElement(i,{key:e.id,renderSummary:t=>u.createElement(`div`,{className:`alignChild--left--center padding--all--s bgColor--cloudGrey ${t?`rounded--top`:`rounded--all`}`},u.createElement(o,{alignItems:`center`,justifyContent:`space-between`},u.createElement(o.Item,null,u.createElement(`strong`,null,e.title)),u.createElement(o.Item,{shrink:!0},u.createElement(`span`,{className:`fontSize--xs fontColor--charcoal`},t?`Collapse`:`Expand`))))},u.createElement(`div`,{className:`padding--all bgColor--snowGrey rounded--bottom`},u.createElement(`p`,null,e.content),u.createElement(`div`,{className:`margin--top--s`},u.createElement(`button`,{type:`button`},`Learn More`)))))),m.parameters={docs:{description:{story:`Example showing how AccordionSet works with custom-styled accordions including interactive elements.`}}},h={title:`Components/AccordionSet`,component:c},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},g=[`ExclusiveMode`,`NativeMode`,`WithCustomStyling`]}))();export{f as ExclusiveMode,p as NativeMode,m as WithCustomStyling,g as __namedExportsOrder,h as default};