import{e,r as u}from"./iframe-DTq7mDUi.js";import{A as o}from"./index-CjaukPWz.js";import{R as t}from"./index-DrBFEQb5.js";import"./preload-helper-PPVm8Dsz.js";import"./AsElement-DkUcqMDO.js";import"./index-RvS1aOr8.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var d in a)({}).hasOwnProperty.call(a,d)&&(n[d]=a[d])}return n},p.apply(null,arguments)}const l=({children:n="This is the accordion content that can be expanded or collapsed.",...r})=>e.createElement(o,p({renderSummary:a=>e.createElement("span",null,"Click to ",a?"collapse":"expand")},r),e.createElement("div",{className:"padding--y"},n)),m=()=>e.createElement(o,{renderSummary:n=>e.createElement("div",{className:`alignChild--left--center padding--all--s bgColor--cloudGrey ${n?"rounded--top":"rounded--all"}`},e.createElement(t,{alignItems:"center",justifyContent:"space-between"},e.createElement(t.Item,null,e.createElement("strong",null,"Account Details")),e.createElement(t.Item,{shrink:!0},e.createElement("span",{className:"fontSize--xs fontColor--charcoal"},n?"Hide":"Show"," details"))))},e.createElement("div",{className:"padding--all bgColor--blueGrey rounded--bottom"},e.createElement("p",null,e.createElement("strong",null,"Account Number:")," 123456789"),e.createElement("p",null,e.createElement("strong",null,"Balance:")," $1,234.56"),e.createElement("p",null,e.createElement("strong",null,"Type:")," Checking"))),s=()=>e.createElement(o,{renderSummary:()=>e.createElement("span",null,"Settings & Actions")},e.createElement("div",{className:"padding--all"},e.createElement("p",null,"Focusable elements are only reachable when the Accordion is open (",e.createElement("code",null,"aria-hidden")," controls this)."),e.createElement("div",{className:"margin--top--s"},e.createElement("a",{href:"#",className:"margin--right--s"},"Learn more"),e.createElement("button",{type:"button",className:"margin--right--s"},"Edit Settings"),e.createElement("button",{type:"button"},"Save Changes")),e.createElement("div",{className:"margin--top--s"},e.createElement("input",{type:"text",placeholder:"Search settings..."}))));s.parameters={docs:{description:{story:"Accordion content with focusable elements (links, buttons, inputs) to test keyboard navigation and accessibility when expanded/collapsed."}}};const c=()=>{const[n,r]=u.useState(!1);return e.createElement("div",null,e.createElement("div",{className:"margin--bottom"},e.createElement("button",{onClick:()=>r(!n)},n?"Close":"Open"," accordion externally")),e.createElement(o,{isOpen:n,onUserToggle:r,renderSummary:a=>e.createElement(t,{alignItems:"center",gapSize:"xs"},e.createElement(t.Item,{shrink:!0},e.createElement("span",null,a?"▼":"▶")),e.createElement(t.Item,{shrink:!0},e.createElement("span",null,"Controlled Accordion")))},e.createElement("div",{className:"padding--all"},"This accordion state is controlled by the parent component. You can toggle it using the button above or by clicking this summary.")))};c.parameters={docs:{description:{story:"When `isOpen` is provided, the accordion becomes controlled. The parent component must handle state updates via the `onUserToggle` callback."}}};const i=()=>e.createElement(o,{isOpen:!0,onUserToggle:()=>{},renderSummary:n=>e.createElement(t,{alignItems:"center",gapSize:"xs"},e.createElement(t.Item,{shrink:!0},e.createElement("span",null,n?"▼":"▶")),e.createElement(t.Item,{shrink:!0},e.createElement("span",null,"This accordion starts open")))},"This accordion is initially open and cannot be closed because the onUserToggle handler is empty.");i.parameters={docs:{description:{story:"Example of an accordion that starts in the open state. Since onUserToggle is empty, it remains open."}}};const S={title:"Components/Accordion",component:o};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  children = "This is the accordion content that can be expanded or collapsed.",
  ...otherProps
}) => {
  return <Accordion renderSummary={isOpen => <span>Click to {isOpen ? "collapse" : "expand"}</span>} {...otherProps}>
      <div className="padding--y">{children}</div>
    </Accordion>;
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const O=["Overview","WithCustomSummary","WithFocusableContent","ControlledMode","InitiallyOpen"];export{c as ControlledMode,i as InitiallyOpen,l as Overview,m as WithCustomSummary,s as WithFocusableContent,O as __namedExportsOrder,S as default};
