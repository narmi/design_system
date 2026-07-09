import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-DRqKOuY3.js";import{n as r,t as i}from"./classcat-BMx3V7o4.js";import{n as a,t as o}from"./Row-Nondj9Rb.js";import{n as s,t as c}from"./DisabledShim-CE6Mi8aZ.js";import{r as l,t as u}from"./IconButton-D8jY0sgV.js";import{n as d,t as f}from"./Dialog-DHp9SRe_.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(null,arguments)}var m,h,g,_=e((()=>{m=t(n()),r(),a(),l(),s(),h=()=>{},g=({title:e,subtitle:t,statusText:n,isOpen:r,trigger:a=`header`,onOpen:s=h,onClose:l=h,isDisabled:d=!1,onDisabledClick:f=h,renderTitle:g,hasError:_=!1,disableHover:v=!1,children:y,radiusSize:b=`l`,kind:x=`default`})=>{let[S,C]=m.useState(!1),w=(e=!1,t)=>{if(e){f();return}else t===`open`?(s(),C(!0)):t===`close`&&(l(),C(!1))},T=()=>{C(!1),r?l():s()},E=m.createElement(`div`,{className:i([`collapsible-card-trigger`,`alignChild--center--center`,{"padding--left":a==`caret-start`,"padding--right--l":a==`caret-end`}])},m.createElement(u,{kind:`action`,label:r?`Close`:`Open`,onClick:T,name:`chevron-${r?`up`:`down`}`,textSize:`l`,onKeyUp:({key:e})=>{e===`Enter`&&T()}})),D=m.createElement(`div`,{className:i([`collapsible-card-titleBar`,`rounded--top--${x===`ai`?`m`:b}`])},m.createElement(c,{isDisabled:d},typeof g==`function`?g(r):m.createElement(o,{alignItems:`center`,gapSize:`s`},a===`caret-start`&&m.createElement(o.Item,{shrink:!0},E),m.createElement(o.Item,null,m.createElement(`h4`,{className:i([`fontWeight--bold`,`fontSize--xl`,`padding--top--l`,`fontFamily--body`,{"padding--left--l":a!==`caret-start`}])},e),m.createElement(`div`,{className:i([d?`subtitle--disabled`:`subtitle`,`padding--bottom--l`,`margin--top--xxs`,{"padding--left--l":a!==`caret-start`}])},t)),a===`caret-end`&&m.createElement(o.Item,{shrink:!0},E),n&&m.createElement(o.Item,{shrink:!0},m.createElement(`div`,{className:`collapsible-card--statusText padding--right--l fontSize--s alignChild--right--center`},m.createElement(`span`,null,n)))))),O=i([`collapsible-card--content-card`,`collapisble-card--${x}`,{"content-card--hasCaretTrigger":a.includes(`caret`),"content-card--error":_,"content-card--disabled":d,"content-card--hover":a===`header`&&!v&&S,"collapsible-card--no-user-select":!v||a===`header`,"collapsible-card--customTitle":typeof g==`function`},r&&!d?void 0:`content-card--closed`,`rounded--all--${b}`,`bgColor--white`]),k=a===`header`?{role:`button`,tabIndex:0,onKeyUp:({key:e})=>{if(e===`Enter`){let e=r&&!d?`close`:`open`;w(e===`open`?d:!1,e)}},onClick:()=>{let e=r&&!d?`close`:`open`;w(e===`open`?d:!1,e)}}:{};return m.createElement(`div`,{className:O},r&&!d?m.createElement(m.Fragment,null,m.createElement(`div`,p({className:`collapsible-card--title-expanded rounded--top--${b}`,"aria-expanded":`true`,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1)},k),D),m.createElement(`div`,{className:`padding--all--l`},y)):m.createElement(`div`,p({"aria-expanded":`false`},k),D))},g.__docgenInfo={description:``,methods:[],displayName:`CollapsibleCard`,props:{trigger:{defaultValue:{value:`"header"`,computed:!1},description:`Controls which element is used as the open/close trigger`,type:{name:`enum`,value:[{value:`"header"`,computed:!1},{value:`"caret-start"`,computed:!1},{value:`"caret-end"`,computed:!1}]},required:!1},onOpen:{defaultValue:{value:`() => {}`,computed:!1},description:`Callback to handle user opening card`,type:{name:`func`},required:!1},onClose:{defaultValue:{value:`() => {}`,computed:!1},description:`Callback to handle user closing card`,type:{name:`func`},required:!1},isDisabled:{defaultValue:{value:`false`,computed:!1},description:`Disabled cards are greyed out and do not open`,type:{name:`bool`},required:!1},onDisabledClick:{defaultValue:{value:`() => {}`,computed:!1},description:`Callback to handle user clicking on disabled card`,type:{name:`func`},required:!1},hasError:{defaultValue:{value:`false`,computed:!1},description:`Displays a red border on the card. Does not interfere with user interactions`,type:{name:`bool`},required:!1},disableHover:{defaultValue:{value:`false`,computed:!1},description:`Disable hover. Useful for cards that are always open`,type:{name:`bool`},required:!1},radiusSize:{defaultValue:{value:`"l"`,computed:!1},description:`Amount of border radius to add on all sides of card.`,type:{name:`enum`,value:[{value:`"s"`,computed:!1},{value:`"m"`,computed:!1},{value:`"l"`,computed:!1}]},required:!1},kind:{defaultValue:{value:`"default"`,computed:!1},description:`Visual variant of the Collapsible card.`,type:{name:`enum`,value:[{value:`"ai"`,computed:!1},{value:`"default"`,computed:!1}]},required:!1},children:{description:`Accepts any content as children`,type:{name:`union`,value:[{name:`node`},{name:`arrayOf`,value:{name:`node`}}]},required:!0},title:{description:`Card title`,type:{name:`string`},required:!1},subtitle:{description:`Card subtitle`,type:{name:`string`},required:!1},statusText:{description:`Card status text, placed on the right side of the title container. Can be a JSX fragment.`,type:{name:`node`},required:!1},isOpen:{description:`Controls whether card is opened`,type:{name:`bool`},required:!0},renderTitle:{description:"User-defined render prop that returns JSX.\nCalled with `(isOpen)` arg you may use for conditional rendering in your custom title JSX.",type:{name:`func`},required:!1}}}}));function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(null,arguments)}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{y=t(n()),_(),d(),b=e=>{let[t,n]=(0,y.useState)(!1);return y.createElement(`div`,{className:`bgColor--snowGrey alignChild--center--center padding--all--xl`},y.createElement(g,v({},e,{isOpen:t,onClose:()=>n(!1),onOpen:()=>n(!0)}),e.children))},x=e=>{let[t,n]=(0,y.useState)(!0),r=y.createElement(`div`,{style:{display:`flex`,alignItems:`center`}},y.createElement(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`var(--theme-secondary)`,color:`white`,height:`16px`,width:`16px`,borderRadius:`50%`}},y.createElement(`span`,{className:`narmi-icon-check fontSize--xs`})),y.createElement(`div`,{className:`margin--left--xs fontWeight--semibold`,style:{color:`var(--theme-secondary)`}},`Open`));return y.createElement(`div`,{className:`bgColor--snowGrey alignChild--center--center padding--all--xl`},y.createElement(g,v({},e,{isOpen:t,onClose:()=>n(!1),onOpen:()=>n(!0),statusText:t?r:`Closed`}),e.children))},S=e=>{let[t,n]=(0,y.useState)(!1),[r,i]=(0,y.useState)(!1);return y.createElement(`div`,{className:`bgColor--snowGrey alignChild--center--center padding--all--xl`},y.createElement(g,v({},e,{isOpen:t,onClose:()=>n(!1),onOpen:()=>n(!0),isDisabled:!0,onDisabledClick:()=>i(!0)}),e.children),y.createElement(f,{title:`Not to panic`,isOpen:r,onUserDismiss:()=>i(!1)},`This is just an example of what `,y.createElement(`code`,null,`onDisabledClick`),` can do`))},C=e=>y.createElement(`div`,{className:`bgColor--snowGrey alignChild--center--center padding--all--xl`},y.createElement(g,v({},e,{isOpen:!0}),e.children)),w=b.bind({}),w.args={title:`Your title here`,subtitle:`Hover over and click anywhere`,onOpen:()=>{},onClose:()=>{},children:y.createElement(y.Fragment,null,y.createElement(`div`,null,`Any content can go in here!`))},T=b.bind({}),T.args={title:`Your title here`,trigger:`caret-end`,subtitle:`Only the caret opens the card. Start and End positions are both supported.`,onOpen:()=>{},onClose:()=>{},children:y.createElement(y.Fragment,null,y.createElement(`div`,null,`Any content can go in here!`))},E=x.bind({}),E.args={title:`Your title here`,subtitle:`Hover over and click anywhere`,onOpen:()=>{},onClose:()=>{},children:y.createElement(y.Fragment,null,y.createElement(`div`,null,`Any content can go in here!`))},E.parameters={docs:{description:{story:"The `CollapsibleCard` with a status text on the right. This could be also a link, button, etc."}}},D=S.bind({}),D.args={title:`This card is disabled`,subtitle:`But you could still try to click somewhere`,onOpen:()=>{},onClose:()=>{},children:y.createElement(y.Fragment,null,y.createElement(`div`,null,`Any content can go in here!`))},D.parameters={docs:{description:{story:`Disabled cards can still be clicked on, in which case a message could be displayed.`}}},O=b.bind({}),O.args={title:`Error state`,subtitle:`Something happened here`,onOpen:()=>{},onClose:()=>{},hasError:!0,children:y.createElement(y.Fragment,null,y.createElement(`div`,null,`Nothing you can do to clear that.`))},k=b.bind({}),k.args={renderTitle:e=>y.createElement(`div`,{className:`padding--all`},`This card is `,y.createElement(`strong`,null,e?`open`:`closed`),`.`),children:y.createElement(y.Fragment,null,y.createElement(`div`,null,`Any content can go in here!`))},D.parameters={docs:{description:{story:"You may also pass your own title content using the `renderTitle` function, allowing for greater customization of the clickable area of `CollapsibleCard`"}}},A=C.bind({}),A.args={title:`Your title here`,subtitle:`A subtitle here`,onOpen:()=>{},onClose:()=>{},isOpen:!0,disableHover:!0,children:y.createElement(y.Fragment,null,y.createElement(`div`,null,`This is just a card with information. Here is a list of useless facts:`),y.createElement(`ul`,null,y.createElement(`li`,null,`Movie trailers got their name because they were originally shown after the movie.`),y.createElement(`li`,null,`Rubber bands last longer when refrigerated.`),y.createElement(`li`,null,`Oreo has made enough cookies to span five back and forth trips to the moon.`),y.createElement(`li`,null,`Your fingernails grow faster on your dominant hand.`),y.createElement(`li`,null,`A giraffe can go longer without water than a camel can.`),y.createElement(`li`,null,`A dragonfly has a lifespan of only 24 hours.`)))},j=b.bind({}),j.args={title:`Your title here`,subtitle:`Hover over and click anywhere`,kind:`ai`,onOpen:()=>{},onClose:()=>{},children:y.createElement(y.Fragment,null,y.createElement(`div`,null,`Any content can go in here!`))},M={title:`Components/CollapsibleCard`,component:g},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
    <CollapsibleCard {...args} isOpen>
      {args.children}
    </CollapsibleCard>
  </div>`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
        {args.children}
      </CollapsibleCard>
    </div>;
}`,...j.parameters?.docs?.source}}},N=[`Overview`,`CaretAsTrigger`,`WithStatusText`,`DisabledCard`,`WithError`,`WithCustomTitle`,`PermanentlyOpenWithDisabledHover`,`AIVariant`]}))();export{j as AIVariant,T as CaretAsTrigger,D as DisabledCard,w as Overview,A as PermanentlyOpenWithDisabledHover,k as WithCustomTitle,O as WithError,E as WithStatusText,N as __namedExportsOrder,M as default};