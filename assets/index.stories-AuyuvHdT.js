import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BZG9rCTm.js";import{n as r,t as i}from"./useDismiss-DjI6Q99z.js";import{n as a,r as o}from"./Button-Dbdw2zw_.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var c,l,u,d;t((()=>{c=e(n()),i(),o(),l=()=>{let[e,t]=(0,c.useState)(!1),[n,i]=(0,c.useState)(null),o=(0,c.useRef)(null),{backdropProps:l}=r({isOpen:e,ref:o,onDismiss:e=>{i(e),t(!1)}});return c.createElement(c.Fragment,null,c.createElement(a,{kind:`secondary`,onClick:()=>t(!0)},`Open layer`),c.createElement(`p`,{className:`margin--top--s`},`Last dismissed by: `,c.createElement(`code`,null,n??`—`)),e&&c.createElement(`div`,s({},l,{style:{position:`fixed`,inset:0,display:`grid`,placeItems:`center`,background:`rgba(0, 0, 0, 0.4)`}}),c.createElement(`div`,{role:`dialog`,"aria-label":`Example layer`,ref:o,className:`bgColor--white padding--all--l rounded--all`},c.createElement(`p`,null,`Press Escape or click the backdrop.`),c.createElement(a,{kind:`primary`,onClick:()=>t(!1)},`Close`))))},u={title:`Hooks/Interaction/useDismiss`,tags:[`autodocs`,`!dev`],component:l},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},d=[`Overview`]}))();export{l as Overview,d as __namedExportsOrder,u as default};