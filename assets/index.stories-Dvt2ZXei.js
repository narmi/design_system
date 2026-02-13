import{e,r as x}from"./iframe-C2GiQxmI.js";import{c as g}from"./index-RvS1aOr8.js";import{R as h}from"./index-H0FE9JcS.js";import{I as _}from"./index-BFyi1HxR.js";import{D as z}from"./index-D7bp1Fhe.js";import{D as P}from"./index-B3TECkeP.js";import"./preload-helper-PPVm8Dsz.js";import"./AsElement-B4slwwSK.js";import"./selection-CAkQuomx.js";import"./index-CntWuU9k.js";import"./index-BC6qydrt.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-9dLwVC9O.js";import"./Combination-DTNpLgib.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";import"./CSSTransition-CcdGYy56.js";function w(){return w=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)({}).hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},w.apply(null,arguments)}const k=()=>{},u=({title:n,subtitle:r,statusText:a,isOpen:t,trigger:l="header",onOpen:N=k,onClose:D=k,isDisabled:s=!1,onDisabledClick:j=k,renderTitle:I,hasError:H=!1,disableHover:T=!1,children:J,radiusSize:S="m",kind:q="default"})=>{const[X,m]=e.useState(!1),A=(o=!1,c)=>{if(o){j();return}else c==="open"?(N(),m(!0)):c==="close"&&(D(),m(!1))},G=()=>{m(!1),t?D():N()},V=e.createElement("div",{className:g(["collapsible-card-trigger","alignChild--center--center",{"padding--left":l=="caret-start","padding--right--l":l=="caret-end"}])},e.createElement(_,{kind:"action",label:t?"Close":"Open",onClick:G,name:`chevron-${t?"up":"down"}`,textSize:"l",onKeyUp:({key:o})=>{o==="Enter"&&G()}})),W=e.createElement("div",{className:g(["collapsible-card-titleBar",`rounded--top--${q==="ai"?"m":S}`])},e.createElement(z,{isDisabled:s},typeof I=="function"?I(t):e.createElement(h,{alignItems:"center",gapSize:"s"},l==="caret-start"&&e.createElement(h.Item,{shrink:!0},V),e.createElement(h.Item,null,e.createElement("h4",{className:g(["fontWeight--bold","fontSize--xl","padding--top--l","fontFamily--body",{"padding--left--l":l!=="caret-start"}])},n),e.createElement("div",{className:g([s?"subtitle--disabled":"subtitle","padding--bottom--l","margin--top--xxs",{"padding--left--l":l!=="caret-start"}])},r)),l==="caret-end"&&e.createElement(h.Item,{shrink:!0},V),a&&e.createElement(h.Item,{shrink:!0},e.createElement("div",{className:"collapsible-card--statusText padding--right--l fontSize--s alignChild--right--center"},e.createElement("span",null,a)))))),Y=g(["collapsible-card--content-card",`collapisble-card--${q}`,{"content-card--hasCaretTrigger":l.includes("caret"),"content-card--error":H,"content-card--disabled":s,"content-card--hover":l==="header"&&!T&&X,"collapsible-card--no-user-select":!T||l==="header","collapsible-card--customTitle":typeof I=="function"},t&&!s?void 0:"content-card--closed",`rounded--all--${S}`,"bgColor--white"]),F=l==="header"?{role:"button",tabIndex:0,onKeyUp:({key:o})=>{if(o==="Enter"){const c=t&&!s?"close":"open";A(c==="open"?s:!1,c)}},onClick:()=>{const o=t&&!s?"close":"open";A(o==="open"?s:!1,o)}}:{};return e.createElement("div",{className:Y},t&&!s?e.createElement(e.Fragment,null,e.createElement("div",w({className:`collapsible-card--title-expanded rounded--top--${S}`,"aria-expanded":"true",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1)},F),W),e.createElement("div",{className:"padding--all--l"},J)):e.createElement("div",w({"aria-expanded":"false"},F),W))};u.__docgenInfo={description:"",methods:[],displayName:"CollapsibleCard",props:{trigger:{defaultValue:{value:'"header"',computed:!1},description:"Controls which element is used as the open/close trigger",type:{name:"enum",value:[{value:'"header"',computed:!1},{value:'"caret-start"',computed:!1},{value:'"caret-end"',computed:!1}]},required:!1},onOpen:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user opening card",type:{name:"func"},required:!1},onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user closing card",type:{name:"func"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"Disabled cards are greyed out and do not open",type:{name:"bool"},required:!1},onDisabledClick:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user clicking on disabled card",type:{name:"func"},required:!1},hasError:{defaultValue:{value:"false",computed:!1},description:"Displays a red border on the card. Does not interfere with user interactions",type:{name:"bool"},required:!1},disableHover:{defaultValue:{value:"false",computed:!1},description:"Disable hover. Useful for cards that are always open",type:{name:"bool"},required:!1},radiusSize:{defaultValue:{value:'"m"',computed:!1},description:"Amount of border radius to add on all sides of card.",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1}]},required:!1},kind:{defaultValue:{value:'"default"',computed:!1},description:"Visual variant of the Collapsible card.",type:{name:"enum",value:[{value:'"ai"',computed:!1},{value:'"default"',computed:!1}]},required:!1},children:{description:"Accepts any content as children",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!0},title:{description:"Card title",type:{name:"string"},required:!1},subtitle:{description:"Card subtitle",type:{name:"string"},required:!1},statusText:{description:"Card status text, placed on the right side of the title container. Can be a JSX fragment.",type:{name:"node"},required:!1},isOpen:{description:"Controls whether card is opened",type:{name:"bool"},required:!0},renderTitle:{description:"User-defined render prop that returns JSX.\nCalled with `(isOpen)` arg you may use for conditional rendering in your custom title JSX.",type:{name:"func"},required:!1}}};function p(){return p=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)({}).hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},p.apply(null,arguments)}const E=n=>{const[r,a]=x.useState(!1);return e.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},e.createElement(u,p({},n,{isOpen:r,onClose:()=>a(!1),onOpen:()=>a(!0)}),n.children))},U=n=>{const[r,a]=x.useState(!0),t=e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--theme-secondary)",color:"white",height:"16px",width:"16px",borderRadius:"50%"}},e.createElement("span",{className:"narmi-icon-check fontSize--xs"})),e.createElement("div",{className:"margin--left--xs fontWeight--semibold",style:{color:"var(--theme-secondary)"}},"Open"));return e.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},e.createElement(u,p({},n,{isOpen:r,onClose:()=>a(!1),onOpen:()=>a(!0),statusText:r?t:"Closed"}),n.children))},$=n=>{const[r,a]=x.useState(!1),[t,l]=x.useState(!1);return e.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},e.createElement(u,p({},n,{isOpen:r,onClose:()=>a(!1),onOpen:()=>a(!0),isDisabled:!0,onDisabledClick:()=>l(!0)}),n.children),e.createElement(P,{title:"Not to panic",isOpen:t,onUserDismiss:()=>l(!1)},"This is just an example of what ",e.createElement("code",null,"onDisabledClick")," can do"))},R=n=>e.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},e.createElement(u,p({},n,{isOpen:!0}),n.children)),f=E.bind({});f.args={title:"Your title here",subtitle:"Hover over and click anywhere",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};const C=E.bind({});C.args={title:"Your title here",trigger:"caret-end",subtitle:"Only the caret opens the card. Start and End positions are both supported.",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};const d=U.bind({});d.args={title:"Your title here",subtitle:"Hover over and click anywhere",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};d.parameters={docs:{description:{story:"The `CollapsibleCard` with a status text on the right. This could be also a link, button, etc."}}};const i=$.bind({});i.args={title:"This card is disabled",subtitle:"But you could still try to click somewhere",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};i.parameters={docs:{description:{story:"Disabled cards can still be clicked on, in which case a message could be displayed."}}};const b=E.bind({});b.args={title:"Error state",subtitle:"Something happened here",onOpen:()=>{},onClose:()=>{},hasError:!0,children:e.createElement(e.Fragment,null,e.createElement("div",null,"Nothing you can do to clear that."))};const v=E.bind({});v.args={renderTitle:n=>e.createElement("div",{className:"padding--all"},"This card is ",e.createElement("strong",null,n?"open":"closed"),"."),children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};i.parameters={docs:{description:{story:"You may also pass your own title content using the `renderTitle` function, allowing for greater customization of the clickable area of `CollapsibleCard`"}}};const O=R.bind({});O.args={title:"Your title here",subtitle:"A subtitle here",onOpen:()=>{},onClose:()=>{},isOpen:!0,disableHover:!0,children:e.createElement(e.Fragment,null,e.createElement("div",null,"This is just a card with information. Here is a list of useless facts:"),e.createElement("ul",null,e.createElement("li",null,"Movie trailers got their name because they were originally shown after the movie."),e.createElement("li",null,"Rubber bands last longer when refrigerated."),e.createElement("li",null,"Oreo has made enough cookies to span five back and forth trips to the moon."),e.createElement("li",null,"Your fingernails grow faster on your dominant hand."),e.createElement("li",null,"A giraffe can go longer without water than a camel can."),e.createElement("li",null,"A dragonfly has a lifespan of only 24 hours.")))};const y=E.bind({});y.args={title:"Your title here",subtitle:"Hover over and click anywhere",kind:"ai",onOpen:()=>{},onClose:()=>{},children:e.createElement(e.Fragment,null,e.createElement("div",null,"Any content can go in here!"))};const me={title:"Components/CollapsibleCard",component:u};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...C.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
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
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...v.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
    <CollapsibleCard {...args} isOpen>
      {args.children}
    </CollapsibleCard>
  </div>`,...O.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...y.parameters?.docs?.source}}};const ge=["Overview","CaretAsTrigger","WithStatusText","DisabledCard","WithError","WithCustomTitle","PermanentlyOpenWithDisabledHover","AIVariant"];export{y as AIVariant,C as CaretAsTrigger,i as DisabledCard,f as Overview,O as PermanentlyOpenWithDisabledHover,v as WithCustomTitle,b as WithError,d as WithStatusText,ge as __namedExportsOrder,me as default};
