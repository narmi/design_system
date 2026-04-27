import{r as h,e}from"./iframe-PlbfQQZ5.js";import{a as k}from"./index-DAgvVAST.js";import{F as C}from"./Combination-nfXSgy3H.js";import{u as b}from"./index-CatWVSgv.js";import{B as u}from"./index-C4PjweTe.js";import{C as D}from"./index-C_QoEfd7.js";import"./preload-helper-PPVm8Dsz.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";import"./index-RvS1aOr8.js";import"./AsElement-DuiXXkDe.js";import"./index-B3KOg2vW.js";import"./index-eKfhzVKl.js";import"./index-C6Ol9WMq.js";import"./index-drDfzhzd.js";const o=({isOpen:t=!1,onUserDismiss:r=()=>{},renderHeader:n,renderFooter:a,isPortalled:s=!1,children:c,testId:v,trigger:m})=>{const{anchorProps:p,layerProps:f}=b({isOpen:t,setIsOpen:r,matchWidth:!1,isPortalled:s,ariaPopupType:"dialog"});k(f.ref,()=>{r()});const y=O=>{O.key==="Escape"&&r()};if(h.useEffect(()=>{if(t)return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[t,r]),!t&&!m)return null;const E=m?e.cloneElement(m,{ref:p.ref,style:{...m.props.style,...p.style},"aria-haspopup":p["aria-haspopup"],"aria-expanded":p["aria-expanded"]}):null;return e.createElement(e.Fragment,null,E,t&&e.createElement("div",{ref:f.ref,className:"nds-anchoredDialog","data-testid":v,style:f.style},e.createElement(C,{returnFocus:!0,autoFocus:!0,className:"nds-anchoredDialog-inner"},n&&e.createElement("div",{className:"nds-anchoredDialog-header border--bottom"},n()),e.createElement("div",{className:"nds-anchoredDialog-content"},c),a&&e.createElement("div",{className:"nds-anchoredDialog-footer border--top"},a()))))};try{o.displayName="AnchoredDialog",o.__docgenInfo={description:`A dialog component that can anchor to a trigger element.
Supports positioning and z-index customization via layout options.`,displayName:"AnchoredDialog",props:{children:{defaultValue:null,description:"Renders the dialog content",name:"children",required:!0,type:{name:"ReactNode"}},renderHeader:{defaultValue:null,description:"Optional header content to render at the top of the dialog",name:"renderHeader",required:!1,type:{name:"() => ReactNode"}},renderFooter:{defaultValue:null,description:"Optional footer content to render at the bottom of the dialog",name:"renderFooter",required:!1,type:{name:"() => ReactNode"}},isOpen:{defaultValue:{value:"false"},description:"Controls open/close state of the dialog",name:"isOpen",required:!1,type:{name:"boolean"}},onUserDismiss:{defaultValue:{value:"() => {}"},description:"Callback to handle user dismissing the dialog",name:"onUserDismiss",required:!1,type:{name:"() => void"}},isPortalled:{defaultValue:{value:"false"},description:"Whether the dialog is rendered in a Portal with fixed positioning and higher z-index",name:"isPortalled",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}},trigger:{defaultValue:null,description:"Trigger element (button, etc.) that anchors this dialog",name:"trigger",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}function g(){return g=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)({}).hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},g.apply(null,arguments)}const x=t=>e.createElement(o,t),I=t=>{const[r,n]=h.useState(!1);return e.createElement(o,g({},t,{isOpen:r,onUserDismiss:()=>n(!1),trigger:e.createElement(u,{onClick:()=>n(!0)},"Open Dialog"),renderFooter:()=>e.createElement("div",{style:{textAlign:"right"}},e.createElement(u,{size:"s",kind:"plain",onClick:()=>n(!1)},"Close"))}))},l=x.bind({});l.args={isOpen:!0,renderHeader:()=>e.createElement("div",null,"Custom JSX Header"),children:e.createElement("div",null,"Dialog content goes here"),renderFooter:()=>e.createElement("div",null,"Custom JSX Footer")};const i=I.bind({});i.args={renderHeader:()=>e.createElement("div",null,"Custom JSX Header"),children:e.createElement("div",null,"Dialog content goes here")};const A=t=>{const[r,n]=h.useState(!1),a=Array.from({length:15},(s,c)=>({id:c,label:`Checklist item ${c+1}`}));return e.createElement(o,g({},t,{isOpen:r,onUserDismiss:()=>n(!1),trigger:e.createElement(u,{onClick:()=>n(!0)},"Open Dialog"),renderFooter:()=>e.createElement("div",{style:{textAlign:"right"}},e.createElement(u,{size:"xs",kind:"secondary",onClick:()=>n(!1),label:"Apply"}))}),e.createElement("ul",{style:{listStyle:"none",padding:0,margin:0}},a.map(s=>e.createElement("li",{key:s.id,style:{marginBottom:"12px"}},e.createElement(D,{label:s.label})))))},d=A.bind({});d.args={renderHeader:()=>e.createElement("div",null,"Select Items"),renderFooter:()=>e.createElement("div",null,"Sticky footer")};const U={title:"Components/AnchoredDialog",component:o};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <AnchoredDialog {...args} />",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <AnchoredDialog {...args} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>} renderFooter={() => <div style={{
    textAlign: "right"
  }}>
          <Button size="s" kind="plain" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>} />;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
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
}`,...d.parameters?.docs?.source}}};const j=["Overview","Interactive","Checklist"];export{d as Checklist,i as Interactive,l as Overview,j as __namedExportsOrder,U as default};
