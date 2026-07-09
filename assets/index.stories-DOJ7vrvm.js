import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-DRqKOuY3.js";import{n as r,t as i}from"./Accordion-fhvi6GLA.js";import{n as a,t as o}from"./Row-Nondj9Rb.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var c,l,u,d,f,p,m,h;e((()=>{c=t(n()),r(),a(),l=({children:e=`This is the accordion content that can be expanded or collapsed.`,...t})=>c.createElement(i,s({renderSummary:e=>c.createElement(`span`,null,`Click to `,e?`collapse`:`expand`)},t),c.createElement(`div`,{className:`padding--y`},e)),u=()=>c.createElement(i,{renderSummary:e=>c.createElement(`div`,{className:`alignChild--left--center padding--all--s bgColor--cloudGrey ${e?`rounded--top`:`rounded--all`}`},c.createElement(o,{alignItems:`center`,justifyContent:`space-between`},c.createElement(o.Item,null,c.createElement(`strong`,null,`Account Details`)),c.createElement(o.Item,{shrink:!0},c.createElement(`span`,{className:`fontSize--xs fontColor--charcoal`},e?`Hide`:`Show`,` details`))))},c.createElement(`div`,{className:`padding--all bgColor--blueGrey rounded--bottom`},c.createElement(`p`,null,c.createElement(`strong`,null,`Account Number:`),` 123456789`),c.createElement(`p`,null,c.createElement(`strong`,null,`Balance:`),` $1,234.56`),c.createElement(`p`,null,c.createElement(`strong`,null,`Type:`),` Checking`))),d=()=>c.createElement(i,{renderSummary:()=>c.createElement(`span`,null,`Settings & Actions`)},c.createElement(`div`,{className:`padding--all`},c.createElement(`p`,null,`Focusable elements are only reachable when the Accordion is open (`,c.createElement(`code`,null,`aria-hidden`),` controls this).`),c.createElement(`div`,{className:`margin--top--s`},c.createElement(`a`,{href:`#`,className:`margin--right--s`},`Learn more`),c.createElement(`button`,{type:`button`,className:`margin--right--s`},`Edit Settings`),c.createElement(`button`,{type:`button`},`Save Changes`)),c.createElement(`div`,{className:`margin--top--s`},c.createElement(`input`,{type:`text`,placeholder:`Search settings...`})))),d.parameters={docs:{description:{story:`Accordion content with focusable elements (links, buttons, inputs) to test keyboard navigation and accessibility when expanded/collapsed.`}}},f=()=>{let[e,t]=(0,c.useState)(!1);return c.createElement(`div`,null,c.createElement(`div`,{className:`margin--bottom`},c.createElement(`button`,{onClick:()=>t(!e)},e?`Close`:`Open`,` accordion externally`)),c.createElement(i,{isOpen:e,onUserToggle:t,renderSummary:e=>c.createElement(o,{alignItems:`center`,gapSize:`xs`},c.createElement(o.Item,{shrink:!0},c.createElement(`span`,null,e?`▼`:`▶`)),c.createElement(o.Item,{shrink:!0},c.createElement(`span`,null,`Controlled Accordion`)))},c.createElement(`div`,{className:`padding--all`},`This accordion state is controlled by the parent component. You can toggle it using the button above or by clicking this summary.`)))},f.parameters={docs:{description:{story:"When `isOpen` is provided, the accordion becomes controlled. The parent component must handle state updates via the `onUserToggle` callback."}}},p=()=>c.createElement(i,{isOpen:!0,onUserToggle:()=>{},renderSummary:e=>c.createElement(o,{alignItems:`center`,gapSize:`xs`},c.createElement(o.Item,{shrink:!0},c.createElement(`span`,null,e?`▼`:`▶`)),c.createElement(o.Item,{shrink:!0},c.createElement(`span`,null,`This accordion starts open`)))},`This accordion is initially open and cannot be closed because the onUserToggle handler is empty.`),p.parameters={docs:{description:{story:`Example of an accordion that starts in the open state. Since onUserToggle is empty, it remains open.`}}},m={title:`Components/Accordion`,component:i},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  children = "This is the accordion content that can be expanded or collapsed.",
  ...otherProps
}) => {
  return <Accordion renderSummary={isOpen => <span>Click to {isOpen ? "collapse" : "expand"}</span>} {...otherProps}>
      <div className="padding--y">{children}</div>
    </Accordion>;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Accordion renderSummary={isOpen => <div className={\`alignChild--left--center padding--all--s bgColor--cloudGrey \${isOpen ? "rounded--top" : "rounded--all"}\`}>
          <Row alignItems="center" justifyContent="space-between">
            <Row.Item>
              <strong>Account Details</strong>
            </Row.Item>
            <Row.Item shrink>
              <span className="fontSize--xs fontColor--charcoal">
                {isOpen ? "Hide" : "Show"} details
              </span>
            </Row.Item>
          </Row>
        </div>}>
      <div className="padding--all bgColor--blueGrey rounded--bottom">
        <p>
          <strong>Account Number:</strong> 123456789
        </p>
        <p>
          <strong>Balance:</strong> $1,234.56
        </p>
        <p>
          <strong>Type:</strong> Checking
        </p>
      </div>
    </Accordion>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Accordion renderSummary={() => <span>Settings & Actions</span>}>
      <div className="padding--all">
        <p>
          Focusable elements are only reachable when the Accordion is open (
          <code>aria-hidden</code> controls this).
        </p>
        <div className="margin--top--s">
          <a href="#" className="margin--right--s">
            Learn more
          </a>
          <button type="button" className="margin--right--s">
            Edit Settings
          </button>
          <button type="button">Save Changes</button>
        </div>
        <div className="margin--top--s">
          <input type="text" placeholder="Search settings..." />
        </div>
      </div>
    </Accordion>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <div className="margin--bottom">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"} accordion externally
        </button>
      </div>

      <Accordion isOpen={isOpen} onUserToggle={setIsOpen} renderSummary={isOpen => <Row alignItems="center" gapSize="xs">
            <Row.Item shrink>
              <span>{isOpen ? "▼" : "▶"}</span>
            </Row.Item>
            <Row.Item shrink>
              <span>Controlled Accordion</span>
            </Row.Item>
          </Row>}>
        <div className="padding--all">
          This accordion state is controlled by the parent component. You can
          toggle it using the button above or by clicking this summary.
        </div>
      </Accordion>
    </div>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Accordion isOpen={true} onUserToggle={() => {}} renderSummary={isOpen => <Row alignItems="center" gapSize="xs">
          <Row.Item shrink>
            <span>{isOpen ? "▼" : "▶"}</span>
          </Row.Item>
          <Row.Item shrink>
            <span>This accordion starts open</span>
          </Row.Item>
        </Row>}>
      This accordion is initially open and cannot be closed because the
      onUserToggle handler is empty.
    </Accordion>;
}`,...p.parameters?.docs?.source}}},h=[`Overview`,`WithCustomSummary`,`WithFocusableContent`,`ControlledMode`,`InitiallyOpen`]}))();export{f as ControlledMode,p as InitiallyOpen,l as Overview,u as WithCustomSummary,d as WithFocusableContent,h as __namedExportsOrder,m as default};