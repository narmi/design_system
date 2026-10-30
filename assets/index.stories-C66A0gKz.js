import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BZG9rCTm.js";import{t as r}from"./react-dom-DoWNyHbC.js";import{n as i,r as a}from"./Button-Dbdw2zw_.js";import{n as o,t as s}from"./TextInput-DeppWGCT.js";import{n as c,t as l}from"./useDialog-BvcObdcc.js";function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(null,arguments)}var d,f,p,m,h,g;t((()=>{d=e(n()),f=e(r()),l(),a(),o(),p=()=>{let[e,t]=(0,d.useState)(!1),[n,r]=(0,d.useState)(null),{dialogProps:a,backdropProps:o,titleProps:l,descriptionProps:p,closeButtonProps:m}=c({isOpen:e,onDismiss:e=>{r(e),t(!1)}});return d.createElement(d.Fragment,null,d.createElement(i,{kind:`secondary`,onClick:()=>t(!0)},`Open modal dialog`),d.createElement(`p`,{className:`margin--top--s`},`Last dismissed by: `,d.createElement(`code`,null,n??`—`)),e&&f.createPortal(d.createElement(`div`,u({},o,{style:{position:`fixed`,inset:0,display:`grid`,placeItems:`center`,background:`rgba(0, 0, 0, 0.4)`}}),d.createElement(`div`,u({},a,{className:`bgColor--white padding--all--l rounded--all`,style:{width:`min(400px, 90vw)`}}),d.createElement(`div`,{className:`alignChild--left--center justifyContent--between`},d.createElement(`h4`,l,`Rename account`),d.createElement(`button`,u({},m,{className:`resetButton padding--all--xs`}),d.createElement(`span`,{className:`narmi-icon-x`,"aria-hidden":`true`}))),d.createElement(`p`,u({},p,{className:`margin--y--s`}),`Choose a nickname for this account. It only changes what you see.`),d.createElement(s,{label:`Nickname`}),d.createElement(`div`,{className:`margin--top--l alignChild--right--center`},d.createElement(i,{kind:`primary`,onClick:()=>t(!1)},`Save`)))),document.body))},m=()=>{let[e,t]=(0,d.useState)(!1),{dialogProps:n,titleProps:r,closeButtonProps:a}=c({isOpen:e,isModal:!1,initialFocus:`container`,onDismiss:()=>t(!1)});return d.createElement(`div`,{style:{position:`relative`,display:`inline-block`}},d.createElement(i,{kind:`secondary`,onMouseDown:e=>e.stopPropagation(),onClick:()=>t(!e)},`Toggle filters`),e&&d.createElement(`div`,u({},n,{className:`bgColor--white padding--all--l rounded--all`,style:{position:`absolute`,top:`100%`,left:0,marginTop:`var(--space-xs)`,width:`280px`,boxShadow:`var(--elevation-high)`}}),d.createElement(`div`,{className:`alignChild--left--center justifyContent--between`},d.createElement(`h5`,r,`Filters`),d.createElement(`button`,u({},a,{className:`resetButton padding--all--xs`}),d.createElement(`span`,{className:`narmi-icon-x`,"aria-hidden":`true`}))),d.createElement(`p`,{className:`margin--y--s`},`Click outside or press Escape to close. The page behind stays scrollable.`),d.createElement(s,{label:`Search`})))},h={title:`Hooks/Interaction/useDialog`,tags:[`autodocs`,`!dev`],component:p},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastReason, setLastReason] = useState<DialogDismissReason | null>(null);
  const {
    dialogProps,
    backdropProps,
    titleProps,
    descriptionProps,
    closeButtonProps
  } = useDialog({
    isOpen,
    onDismiss: reason => {
      setLastReason(reason);
      setIsOpen(false);
    }
  });
  return <>
      <Button kind="secondary" onClick={() => setIsOpen(true)}>
        Open modal dialog
      </Button>
      <p className="margin--top--s">
        Last dismissed by: <code>{lastReason ?? "—"}</code>
      </p>
      {isOpen && ReactDOM.createPortal(<div {...backdropProps} style={{
      position: "fixed",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "rgba(0, 0, 0, 0.4)"
    }}>
            <div {...dialogProps} className="bgColor--white padding--all--l rounded--all" style={{
        width: "min(400px, 90vw)"
      }}>
              <div className="alignChild--left--center justifyContent--between">
                <h4 {...titleProps}>Rename account</h4>
                <button {...closeButtonProps} className="resetButton padding--all--xs">
                  <span className="narmi-icon-x" aria-hidden="true" />
                </button>
              </div>
              <p {...descriptionProps} className="margin--y--s">
                Choose a nickname for this account. It only changes what you
                see.
              </p>
              <TextInput label="Nickname" />
              <div className="margin--top--l alignChild--right--center">
                <Button kind="primary" onClick={() => setIsOpen(false)}>
                  Save
                </Button>
              </div>
            </div>
          </div>, document.body)}
    </>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    dialogProps,
    titleProps,
    closeButtonProps
  } = useDialog({
    isOpen,
    isModal: false,
    initialFocus: "container",
    onDismiss: () => setIsOpen(false)
  });
  return <div style={{
    position: "relative",
    display: "inline-block"
  }}>
      <Button kind="secondary" onMouseDown={(event: React.MouseEvent) => event.stopPropagation()} onClick={() => setIsOpen(!isOpen)}>
        Toggle filters
      </Button>
      {isOpen && <div {...dialogProps} className="bgColor--white padding--all--l rounded--all" style={{
      position: "absolute",
      top: "100%",
      left: 0,
      marginTop: "var(--space-xs)",
      width: "280px",
      boxShadow: "var(--elevation-high)"
    }}>
          <div className="alignChild--left--center justifyContent--between">
            <h5 {...titleProps}>Filters</h5>
            <button {...closeButtonProps} className="resetButton padding--all--xs">
              <span className="narmi-icon-x" aria-hidden="true" />
            </button>
          </div>
          <p className="margin--y--s">
            Click outside or press Escape to close. The page behind stays
            scrollable.
          </p>
          <TextInput label="Search" />
        </div>}
    </div>;
}`,...m.parameters?.docs?.source}}},g=[`Overview`,`NonModal`]}))();export{m as NonModal,p as Overview,g as __namedExportsOrder,h as default};