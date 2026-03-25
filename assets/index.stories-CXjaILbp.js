import{r as l,e}from"./iframe-CnYG4fmz.js";import"./useFetch-SS1gHxAX.js";import{F as k}from"./Combination-DE_Y1nnA.js";import{u as C}from"./index-D1DiD790.js";import{B as f}from"./index-BRMHC6sy.js";import{C as b}from"./index-WWx0qOKn.js";import"./preload-helper-PPVm8Dsz.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-RvS1aOr8.js";import"./AsElement-BTAGnGvi.js";import"./index-YU3J6xuU.js";import"./index-BJyLJqOi.js";import"./index-Chjiymov.js";import"./index-CieEyYjz.js";import"./index-BALfVJmR.js";function D(t,n,r,a){const o=l.useRef(n);x(()=>{o.current=n},[n]),l.useEffect(()=>{var s;const d=(s=void 0)!==null&&s!==void 0?s:window;if(!(d&&d.addEventListener))return;const i=c=>o.current(c);return d.addEventListener(t,i,a),()=>{d.removeEventListener(t,i,a)}},[t,r,a])}const x=typeof window<"u"?l.useLayoutEffect:l.useEffect;function I(t,n,r="mousedown"){D(r,a=>{const o=t?.current;!o||o.contains(a.target)||n(a)})}const u=({isOpen:t=!1,onUserDismiss:n=()=>{},renderHeader:r,renderFooter:a,isPortalled:o=!1,children:s,testId:d,trigger:i})=>{const{anchorProps:c,layerProps:y}=C({isOpen:t,setIsOpen:n,matchWidth:!1,isPortalled:o,ariaPopupType:"dialog"});I(y.ref,()=>{n()});const v=O=>{O.key==="Escape"&&n()};if(l.useEffect(()=>{if(t)return document.addEventListener("keydown",v),()=>{document.removeEventListener("keydown",v)}},[t,n]),!t&&!i)return null;const E=i?e.cloneElement(i,{ref:c.ref,style:{...i.props.style,...c.style},"aria-haspopup":c["aria-haspopup"],"aria-expanded":c["aria-expanded"]}):null;return e.createElement(e.Fragment,null,E,t&&e.createElement("div",{ref:y.ref,className:"nds-anchoredDialog","data-testid":d,style:y.style},e.createElement(k,{returnFocus:!0,autoFocus:!0,className:"nds-anchoredDialog-inner"},r&&e.createElement("div",{className:"nds-anchoredDialog-header border--bottom"},r()),e.createElement("div",{className:"nds-anchoredDialog-content"},s),a&&e.createElement("div",{className:"nds-anchoredDialog-footer border--top"},a()))))};try{u.displayName="AnchoredDialog",u.__docgenInfo={description:`A dialog component that can anchor to a trigger element.
Supports positioning and z-index customization via layout options.`,displayName:"AnchoredDialog",props:{children:{defaultValue:null,description:"Renders the dialog content",name:"children",required:!0,type:{name:"ReactNode"}},renderHeader:{defaultValue:null,description:"Optional header content to render at the top of the dialog",name:"renderHeader",required:!1,type:{name:"() => ReactNode"}},renderFooter:{defaultValue:null,description:"Optional footer content to render at the bottom of the dialog",name:"renderFooter",required:!1,type:{name:"() => ReactNode"}},isOpen:{defaultValue:{value:"false"},description:"Controls open/close state of the dialog",name:"isOpen",required:!1,type:{name:"boolean"}},onUserDismiss:{defaultValue:{value:"() => {}"},description:"Callback to handle user dismissing the dialog",name:"onUserDismiss",required:!1,type:{name:"() => void"}},isPortalled:{defaultValue:{value:"false"},description:"Whether the dialog is rendered in a Portal with fixed positioning and higher z-index",name:"isPortalled",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}},trigger:{defaultValue:null,description:"Trigger element (button, etc.) that anchors this dialog",name:"trigger",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}function h(){return h=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)({}).hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},h.apply(null,arguments)}const A=t=>e.createElement(u,t),S=t=>{const[n,r]=l.useState(!1);return e.createElement(u,h({},t,{isOpen:n,onUserDismiss:()=>r(!1),trigger:e.createElement(f,{onClick:()=>r(!0)},"Open Dialog"),renderFooter:()=>e.createElement("div",{style:{textAlign:"right"}},e.createElement(f,{size:"s",kind:"plain",onClick:()=>r(!1)},"Close"))}))},m=A.bind({});m.args={isOpen:!0,renderHeader:()=>e.createElement("div",null,"Custom JSX Header"),children:e.createElement("div",null,"Dialog content goes here"),renderFooter:()=>e.createElement("div",null,"Custom JSX Footer")};const p=S.bind({});p.args={renderHeader:()=>e.createElement("div",null,"Custom JSX Header"),children:e.createElement("div",null,"Dialog content goes here")};const _=t=>{const[n,r]=l.useState(!1),a=Array.from({length:15},(o,s)=>({id:s,label:`Checklist item ${s+1}`}));return e.createElement(u,h({},t,{isOpen:n,onUserDismiss:()=>r(!1),trigger:e.createElement(f,{onClick:()=>r(!0)},"Open Dialog"),renderFooter:()=>e.createElement("div",{style:{textAlign:"right"}},e.createElement(f,{size:"xs",kind:"secondary",onClick:()=>r(!1),label:"Apply"}))}),e.createElement("ul",{style:{listStyle:"none",padding:0,margin:0}},a.map(o=>e.createElement("li",{key:o.id,style:{marginBottom:"12px"}},e.createElement(b,{label:o.label})))))},g=_.bind({});g.args={renderHeader:()=>e.createElement("div",null,"Select Items"),renderFooter:()=>e.createElement("div",null,"Sticky footer")};const K={title:"Components/AnchoredDialog",component:u};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <AnchoredDialog {...args} />",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <AnchoredDialog {...args} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>} renderFooter={() => <div style={{
    textAlign: "right"
  }}>
          <Button size="s" kind="plain" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>} />;
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const items = Array.from({
    length: 15
  }, (_, i) => ({
    id: i,
    label: \`Checklist item \${i + 1}\`
  }));
  return <AnchoredDialog {...args} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>} renderFooter={() => <div style={{
    textAlign: "right"
  }}>
          <Button size="xs" kind="secondary" onClick={() => setIsOpen(false)} label="Apply" />
        </div>}>
      <ul style={{
      listStyle: "none",
      padding: 0,
      margin: 0
    }}>
        {items.map(item => <li key={item.id} style={{
        marginBottom: "12px"
      }}>
            <Checkbox label={item.label} />
          </li>)}
      </ul>
    </AnchoredDialog>;
}`,...g.parameters?.docs?.source}}};const G=["Overview","Interactive","Checklist"];export{g as Checklist,p as Interactive,m as Overview,G as __namedExportsOrder,K as default};
