import{e,r as w}from"./iframe-C3nPEcQ0.js";import{P as r}from"./index-BALe7Hct.js";import{c as f}from"./index-RvS1aOr8.js";import{R as h}from"./index-z6idFDj1.js";import{I as X}from"./index-DdgV_o1q.js";import{D as Y}from"./index-CQ4bZLvh.js";import{D as _}from"./index-cTHv8Y9e.js";import"./preload-helper-PPVm8Dsz.js";import"./AsElement-Dw3joSjZ.js";import"./selection-CAkQuomx.js";import"./index-BYEuTg4M.js";import"./index-BmUsaSUB.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-zjWsLbh2.js";import"./Combination-DBCp4ldB.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";import"./CSSTransition-ChLu7wSX.js";function I(){return I=Object.assign?Object.assign.bind():function(n){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)({}).hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},I.apply(null,arguments)}const N=()=>{},d=({title:n,subtitle:l,statusText:a,isOpen:t,trigger:s="header",onOpen:T=N,onClose:D=N,isDisabled:o=!1,onDisabledClick:j=N,renderTitle:S,hasError:J=!1,disableHover:q=!1,children:P,radiusSize:k="m",kind:A="default"})=>{const[z,g]=e.useState(!1),G=(i=!1,p)=>{if(i){j();return}else p==="open"?(T(),g(!0)):p==="close"&&(D(),g(!1))},V=()=>{g(!1),t?D():T()},W=e.createElement("div",{className:f(["collapsible-card-trigger","alignChild--center--center",{"padding--left":s=="caret-start","padding--right--l":s=="caret-end"}])},e.createElement(X,{kind:"action",label:t?"Close":"Open",onClick:V,name:`chevron-${t?"up":"down"}`,textSize:"l",onKeyUp:({key:i})=>{i==="Enter"&&V()}})),F=e.createElement("div",{className:f(["collapsible-card-titleBar",`rounded--top--${A==="ai"?"m":k}`])},e.createElement(Y,{isDisabled:o},typeof S=="function"?S(t):e.createElement(h,{alignItems:"center",gapSize:"s"},s==="caret-start"&&e.createElement(h.Item,{shrink:!0},W),e.createElement(h.Item,null,e.createElement("h4",{className:f(["fontWeight--bold","fontSize--l","padding--top--l","fontFamily--body",{"padding--left--l":s!=="caret-start"}])},n),e.createElement("div",{className:f([o?"subtitle--disabled":"subtitle","padding--bottom--l","margin--top--xxs",{"padding--left--l":s!=="caret-start"}])},l)),s==="caret-end"&&e.createElement(h.Item,{shrink:!0},W),a&&e.createElement(h.Item,{shrink:!0},e.createElement("div",{className:"collapsible-card--statusText padding--right--l fontSize--s alignChild--right--center"},e.createElement("span",null,a)))))),R=f(["collapsible-card--content-card",`collapisble-card--${A}`,{"content-card--hasCaretTrigger":s.includes("caret"),"content-card--error":J,"content-card--disabled":o,"content-card--hover":s==="header"&&!q&&z,"collapsible-card--no-user-select":!q||s==="header","collapsible-card--customTitle":typeof S=="function"},t&&!o?void 0:"content-card--closed",`rounded--all--${k}`,"bgColor--white"]),H=s==="header"?{role:"button",tabIndex:0,onKeyUp:({key:i})=>{if(i==="Enter"){const p=t&&!o?"close":"open";G(p==="open"?o:!1,p)}},onClick:()=>{const i=t&&!o?"close":"open";G(i==="open"?o:!1,i)}}:{};return e.createElement("div",{className:R},t&&!o?e.createElement(e.Fragment,null,e.createElement("div",I({className:`collapsible-card--title-expanded rounded--top--${k}`,"aria-expanded":"true",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1)},H),F),e.createElement("div",{className:"padding--all--l"},P)):e.createElement("div",I({"aria-expanded":"false"},H),F))};d.propTypes={children:r.oneOfType([r.node,r.arrayOf(r.node)]).isRequired,title:r.string,subtitle:r.string,statusText:r.node,isOpen:r.bool.isRequired,onOpen:r.func,onClose:r.func,isDisabled:r.bool,onDisabledClick:r.func,hasError:r.bool,disableHover:r.bool,trigger:r.oneOf(["header","caret-start","caret-end"]),renderTitle:r.func,radiusSize:r.oneOf(["s","m","l"]),kind:r.oneOf(["ai","default"])};d.__docgenInfo={description:"",methods:[],displayName:"CollapsibleCard",props:{trigger:{defaultValue:{value:'"header"',computed:!1},description:"Controls which element is used as the open/close trigger",type:{name:"enum",value:[{value:'"header"',computed:!1},{value:'"caret-start"',computed:!1},{value:'"caret-end"',computed:!1}]},required:!1},onOpen:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user opening card",type:{name:"func"},required:!1},onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user closing card",type:{name:"func"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"Disabled cards are greyed out and do not open",type:{name:"bool"},required:!1},onDisabledClick:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user clicking on disabled card",type:{name:"func"},required:!1},hasError:{defaultValue:{value:"false",computed:!1},description:"Displays a red border on the card. Does not interfere with user interactions",type:{name:"bool"},required:!1},disableHover:{defaultValue:{value:"false",computed:!1},description:"Disable hover. Useful for cards that are always open",type:{name:"bool"},required:!1},radiusSize:{defaultValue:{value:'"m"',computed:!1},description:"Amount of border radius to add on all sides of card.",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1}]},required:!1},kind:{defaultValue:{value:'"default"',computed:!1},description:"Visual variant of the Collapsible card.",type:{name:"enum",value:[{value:'"ai"',computed:!1},{value:'"default"',computed:!1}]},required:!1},children:{description:"Accepts any content as children",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!0},title:{description:"Card title",type:{name:"string"},required:!1},subtitle:{description:"Card subtitle",type:{name:"string"},required:!1},statusText:{description:"Card status text, placed on the right side of the title container. Can be a JSX fragment.",type:{name:"node"},required:!1},isOpen:{description:"Controls whether card is opened",type:{name:"bool"},required:!0},renderTitle:{description:"User-defined render prop that returns JSX.\nCalled with `(isOpen)` arg you may use for conditional rendering in your custom title JSX.",type:{name:"func"},required:!1}}};function m(){return m=Object.assign?Object.assign.bind():function(n){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)({}).hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},m.apply(null,arguments)}const x=n=>{const[l,a]=w.useState(!1);return e.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},e.createElement(d,m({},n,{isOpen:l,onClose:()=>a(!1),onOpen:()=>a(!0)}),n.children))},U=n=>{const[l,a]=w.useState(!0),t=e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--theme-secondary)",color:"white",height:"16px",width:"16px",borderRadius:"50%"}},e.createElement("span",{className:"narmi-icon-check fontSize--xs"})),e.createElement("div",{className:"margin--left--xs fontWeight--semibold",style:{color:"var(--theme-secondary)"}},"Open"));return e.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},e.createElement(d,m({},n,{isOpen:l,onClose:()=>a(!1),onOpen:()=>a(!0),statusText:l?t:"Closed"}),n.children))},$=n=>{const[l,a]=w.useState(!1),[t,s]=w.useState(!1);return e.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},e.createElement(d,m({},n,{isOpen:l,onClose:()=>a(!1),onOpen:()=>a(!0),isDisabled:!0,onDisabledClick:()=>s(!0)}),n.children),e.createElement(_,{title:"Not to panic",isOpen:t,onUserDismiss:()=>s(!1)},"This is just an example of what ",e.createElement("code",null,"onDisabledClick")," can do"))},B=n=>e.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},e.createElement(d,m({},n,{isOpen:!0}),n.children)),b=x.bind({});b.args={title:"Your title here",subtitle:"Hover over and click anywhere",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};const C=x.bind({});C.args={title:"Your title here",trigger:"caret-end",subtitle:"Only the caret opens the card. Start and End positions are both supported.",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};const u=U.bind({});u.args={title:"Your title here",subtitle:"Hover over and click anywhere",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};u.parameters={docs:{description:{story:"The `CollapsibleCard` with a status text on the right. This could be also a link, button, etc."}}};const c=$.bind({});c.args={title:"This card is disabled",subtitle:"But you could still try to click somewhere",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};c.parameters={docs:{description:{story:"Disabled cards can still be clicked on, in which case a message could be displayed."}}};const v=x.bind({});v.args={title:"Error state",subtitle:"Something happened here",onOpen:()=>{},onClose:()=>{},hasError:!0,children:e.createElement(e.Fragment,null,e.createElement("div",null,"Nothing you can do to clear that."))};const O=x.bind({});O.args={renderTitle:n=>e.createElement("div",{className:"padding--all"},"This card is ",e.createElement("strong",null,n?"open":"closed"),"."),children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};c.parameters={docs:{description:{story:"You may also pass your own title content using the `renderTitle` function, allowing for greater customization of the clickable area of `CollapsibleCard`"}}};const y=B.bind({});y.args={title:"Your title here",subtitle:"A subtitle here",onOpen:()=>{},onClose:()=>{},isOpen:!0,disableHover:!0,children:e.createElement(e.Fragment,null,e.createElement("div",null,"This is just a card with information. Here is a list of useless facts:"),e.createElement("ul",null,e.createElement("li",null,"Movie trailers got their name because they were originally shown after the movie."),e.createElement("li",null,"Rubber bands last longer when refrigerated."),e.createElement("li",null,"Oreo has made enough cookies to span five back and forth trips to the moon."),e.createElement("li",null,"Your fingernails grow faster on your dominant hand."),e.createElement("li",null,"A giraffe can go longer without water than a camel can."),e.createElement("li",null,"A dragonfly has a lifespan of only 24 hours.")))};const E=x.bind({});E.args={title:"Your title here",subtitle:"Hover over and click anywhere",kind:"ai",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};const fe={title:"Components/CollapsibleCard",component:d};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...C.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(true);
  const completedJSX = <div style={{
    display: "flex",
    alignItems: "center"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--theme-secondary)",
      color: "white",
      height: "16px",
      width: "16px",
      borderRadius: "50%"
    }}>
        <span className="narmi-icon-check fontSize--xs" />
      </div>
      <div className="margin--left--xs fontWeight--semibold" style={{
      color: "var(--theme-secondary)"
    }}>
        Open
      </div>
    </div>;
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)} statusText={isOpen ? completedJSX : "Closed"}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)} isDisabled onDisabledClick={() => setIsDialogOpen(true)}>
        {args.children}
      </CollapsibleCard>
      <Dialog title="Not to panic" isOpen={isDialogOpen} onUserDismiss={() => setIsDialogOpen(false)}>
        This is just an example of what <code>onDisabledClick</code> can do
      </Dialog>
    </div>;
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...v.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...O.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
    <CollapsibleCard {...args} isOpen>
      {args.children}
    </CollapsibleCard>
  </div>`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...E.parameters?.docs?.source}}};const he=["Overview","CaretAsTrigger","WithStatusText","DisabledCard","WithError","WithCustomTitle","PermanentlyOpenWithDisabledHover","AIVariant"];export{E as AIVariant,C as CaretAsTrigger,c as DisabledCard,b as Overview,y as PermanentlyOpenWithDisabledHover,O as WithCustomTitle,v as WithError,u as WithStatusText,he as __namedExportsOrder,fe as default};
