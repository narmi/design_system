import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-D7-gyrF9.js";import{n as r,t as i}from"./useOnClickOutside-eLqRUyab.js";import{n as a,r as o}from"./Button-CBhWRQju.js";var s,c,l=t((()=>{s=e(n()),i(),c=({isOpen:e,onDismiss:t,ref:n,escapeKey:i=!0,outsideClick:a=!1})=>{let o=(0,s.useRef)(null),c=(0,s.useRef)(t);return c.current=t,r(n??o,t=>{e&&a&&c.current(`outside`,t)}),(0,s.useEffect)(()=>{if(!e||!i)return;let t=e=>{e.key!==`Escape`||e.defaultPrevented||c.current(`escape`,e)};return document.addEventListener(`keydown`,t),()=>document.removeEventListener(`keydown`,t)},[e,i]),{backdropProps:{onMouseDown:t=>{!e||t.target!==t.currentTarget||c.current(`backdrop`,t)}}}}}));function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(null,arguments)}var d,f,p,m;t((()=>{d=e(n()),l(),o(),f=()=>{let[e,t]=(0,d.useState)(!1),[n,r]=(0,d.useState)(null),i=(0,d.useRef)(null),{backdropProps:o}=c({isOpen:e,ref:i,onDismiss:e=>{r(e),t(!1)}});return d.createElement(d.Fragment,null,d.createElement(a,{kind:`secondary`,onClick:()=>t(!0)},`Open layer`),d.createElement(`p`,{className:`margin--top--s`},`Last dismissed by: `,d.createElement(`code`,null,n??`—`)),e&&d.createElement(`div`,u({},o,{style:{position:`fixed`,inset:0,display:`grid`,placeItems:`center`,background:`rgba(0, 0, 0, 0.4)`}}),d.createElement(`div`,{role:`dialog`,"aria-label":`Example layer`,ref:i,className:`bgColor--white padding--all--l rounded--all`},d.createElement(`p`,null,`Press Escape or click the backdrop.`),d.createElement(a,{kind:`primary`,onClick:()=>t(!1)},`Close`))))},p={title:`Hooks/Interaction/useDismiss`,tags:[`autodocs`,`!dev`],component:f},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastReason, setLastReason] = useState<DismissReason | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const {
    backdropProps
  } = useDismiss({
    isOpen,
    ref,
    onDismiss: reason => {
      setLastReason(reason);
      setIsOpen(false);
    }
  });
  return <>
      <Button kind="secondary" onClick={() => setIsOpen(true)}>
        Open layer
      </Button>
      <p className="margin--top--s">
        Last dismissed by: <code>{lastReason ?? "—"}</code>
      </p>
      {isOpen && <div {...backdropProps} style={{
      position: "fixed",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "rgba(0, 0, 0, 0.4)"
    }}>
          <div role="dialog" aria-label="Example layer" ref={ref} className="bgColor--white padding--all--l rounded--all">
            <p>Press Escape or click the backdrop.</p>
            <Button kind="primary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>}
    </>;
}`,...f.parameters?.docs?.source}}},m=[`Overview`]}))();export{f as Overview,m as __namedExportsOrder,p as default};