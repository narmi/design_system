import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-1G208DMR.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Button-C2jKooT7.js";import{n as s,t as c}from"./Popover-B4ts7EGX.js";import{n as l,t as u}from"./MenuButton-DCSGc0AN.js";var d,f,p=t((()=>{d=e(n()),f=({children:e})=>d.createElement(d.Fragment,null)})),m,h,g,_=t((()=>{m=e(n()),h=({children:e})=>m.createElement(m.Fragment,null),g=({label:e,startIcon:t,endIcon:n,onSelect:r})=>m.createElement(m.Fragment,null)}));function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(null,arguments)}var y,b,x,S=t((()=>{y=e(n()),r(),a(),s(),l(),p(),_(),b={side:`top`,alignment:`start`,offset:6},x=({kind:e=`primary`,size:t=`m`,label:n,disabled:r,isLoading:a,isFullWidth:s=!1,children:l,...d})=>{let[f,p]=(0,y.useState)(!1),m=r||a,h=y.Children.toArray(l).find(e=>y.isValidElement(e)&&e.type===x.Popover),g=y.Children.toArray(l).find(e=>y.isValidElement(e)&&e.type===x.Menu),_=n=>y.createElement(`div`,{className:i([`nds-splitButton-action`,`alignChild--center--center`,`nds-splitButton-action--${e}`,`nds-splitButton-action--${t}`,{"nds-splitButton-action--disabled":r,"nds-splitButton-action--loading":a}])},y.createElement(`span`,{"aria-label":`More`,className:`narmi-icon-chevron-${n?`up`:`down`}`}));return y.createElement(`div`,{className:i([`nds-splitButton`,{"nds-splitButton--fullWidth":s}])},y.createElement(o,v({label:n,disabled:r,isLoading:a,size:t,kind:e,isFullWidth:s},d)),m&&_(!1),!m&&h&&y.isValidElement(h)&&y.createElement(c,v({autoFocus:!0,renderTrigger:_,isOpen:f,onUserDismiss:()=>p(!1),onUserEnable:()=>p(!0),content:h.props.children},b)),!m&&g&&y.isValidElement(g)&&y.createElement(u,v({renderTrigger:_},b),y.Children.toArray(g.props.children).map((e,t)=>y.isValidElement(e)?y.createElement(u.Item,v({key:t},e.props)):null)))},x.Popover=f,x.Menu=h,x.MenuItem=g})),C,w,T,E,D,O,k,A,j;t((()=>{C=e(n()),S(),p(),_(),w=e=>C.createElement(x,e),T=w.bind({}),T.args={children:C.createElement(x.Popover,null,`Arbitrary JSX in a popover!`),label:`Send`},E=()=>C.createElement(x,{label:`Send`,onClick:()=>alert(`Send button clicked`)},C.createElement(x.Popover,null,C.createElement(`div`,{className:`padding--all--s bgColor--white rounded--all`},`This is some arbitrary popover content!`))),D=()=>C.createElement(x,{label:`Send`,onClick:()=>alert(`Send button clicked`)},C.createElement(x.Menu,null,C.createElement(x.MenuItem,{label:`Schedule`,onSelect:()=>{alert(`Scheduling`)}}),C.createElement(x.MenuItem,{label:`Save as draft`,onSelect:()=>{alert(`Saving draft`)}}))),O=()=>{let e=(e,t)=>C.createElement(x,{kind:e,size:t,label:`Send`,onClick:()=>alert(`Send button clicked`)},C.createElement(x.Menu,null,C.createElement(x.MenuItem,{label:`Schedule`,onSelect:()=>{alert(`Scheduling`)}}),C.createElement(x.MenuItem,{label:`Save as draft`,onSelect:()=>{alert(`Saving draft`)}})));return C.createElement(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`var(--space-default)`}},[[`primary`,`m`],[`primary`,`s`],[`primary`,`xs`],[`secondary`,`m`],[`secondary`,`s`],[`secondary`,`xs`],[`tertiary`,`m`],[`tertiary`,`s`],[`tertiary`,`xs`],[`tonal`,`m`],[`tonal`,`s`],[`tonal`,`xs`]].map(([t,n])=>C.createElement(`div`,{key:`${t}-${n}`},e(t,n))))},k=()=>C.createElement(`div`,{style:{maxWidth:`320px`}},C.createElement(x,{label:`Send`,kind:`secondary`,isFullWidth:!0,onClick:()=>alert(`Send button clicked`)},C.createElement(x.Menu,null,C.createElement(x.MenuItem,{label:`Schedule`,onSelect:()=>{alert(`Scheduling`)}}),C.createElement(x.MenuItem,{label:`Save as draft`,onSelect:()=>{alert(`Saving draft`)}})))),k.parameters={docs:{description:{story:"When `isFullWidth` is `true`, the split button expands to fill the available width of its container. Useful for narrow layouts such as mobile views or sidebars."}}},A={title:`Components/SplitButton`,component:x,subcomponents:{SplitButtonPopover:f,SplitButtonMenu:h,SplitButtonMenuItem:g}},E.__docgenInfo={description:``,methods:[],displayName:`WithPopover`},D.__docgenInfo={description:``,methods:[],displayName:`WithMenu`},O.__docgenInfo={description:``,methods:[],displayName:`KindsAndSizes`},k.__docgenInfo={description:``,methods:[],displayName:`FullWidth`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <SplitButton {...args} />`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => <SplitButton label="Send" onClick={() => alert("Send button clicked")}>
    <SplitButton.Popover>
      <div className="padding--all--s bgColor--white rounded--all">
        This is some arbitrary popover content!
      </div>
    </SplitButton.Popover>
  </SplitButton>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <SplitButton label="Send" onClick={() => alert("Send button clicked")}>
    <SplitButton.Menu>
      <SplitButton.MenuItem label="Schedule" onSelect={() => {
      alert("Scheduling");
    }} />
      <SplitButton.MenuItem label="Save as draft" onSelect={() => {
      alert("Saving draft");
    }} />
    </SplitButton.Menu>
  </SplitButton>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const renderSplitButton = (kind, size) => <SplitButton kind={kind} size={size} label="Send" onClick={() => alert("Send button clicked")}>
      <SplitButton.Menu>
        <SplitButton.MenuItem label="Schedule" onSelect={() => {
        alert("Scheduling");
      }} />
        <SplitButton.MenuItem label="Save as draft" onSelect={() => {
        alert("Saving draft");
      }} />
      </SplitButton.Menu>
    </SplitButton>;
  const examples = [["primary", "m"], ["primary", "s"], ["primary", "xs"], ["secondary", "m"], ["secondary", "s"], ["secondary", "xs"], ["tertiary", "m"], ["tertiary", "s"], ["tertiary", "xs"], ["tonal", "m"], ["tonal", "s"], ["tonal", "xs"]];
  return <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "var(--space-default)"
  }}>
      {examples.map(([kind, size]) => <div key={\`\${kind}-\${size}\`}>{renderSplitButton(kind, size)}</div>)}
    </div>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "320px"
}}>
    <SplitButton label="Send" kind="secondary" isFullWidth onClick={() => alert("Send button clicked")}>
      <SplitButton.Menu>
        <SplitButton.MenuItem label="Schedule" onSelect={() => {
        alert("Scheduling");
      }} />
        <SplitButton.MenuItem label="Save as draft" onSelect={() => {
        alert("Saving draft");
      }} />
      </SplitButton.Menu>
    </SplitButton>
  </div>`,...k.parameters?.docs?.source}}},j=[`Overview`,`WithPopover`,`WithMenu`,`KindsAndSizes`,`FullWidth`]}))();export{k as FullWidth,O as KindsAndSizes,T as Overview,D as WithMenu,E as WithPopover,j as __namedExportsOrder,A as default};