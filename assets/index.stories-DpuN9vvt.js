import{r as s,e}from"./iframe-1EjhyCyX.js";import{c as j}from"./index-RvS1aOr8.js";import{I as Z}from"./index-BK4URVtZ.js";import{R as W}from"./index-DWnEDKGd.js";import"./preload-helper-PPVm8Dsz.js";import"./selection-CAkQuomx.js";import"./AsElement-Dx6wCoRQ.js";const O=s.createContext({tabIds:[],setTabIds:()=>{},currentIndex:0,hasPanels:!1,setHasPanels:()=>{},changeTabs:()=>{},tabsListRef:null,isResponsive:!1,setIsResponsive:()=>{},kind:"default"}),q=({direction:n,onClick:l,show:r})=>{const{isResponsive:u,kind:b}=s.useContext(O),o=n==="left"?b==="segmented"?"chevron-left":"arrow-left":b==="segmented"?"chevron-right":"arrow-right";return u&&e.createElement("div",{className:"arrow-reponsive"},e.createElement("div",{className:j(["nds-tabs-arrow",{"nds-tabs-arrow--visible":r}])},e.createElement(Z,{onClick:l,name:o,kind:"action"})))};try{q.displayName="Arrow",q.__docgenInfo={description:"",displayName:"Arrow",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}}}}}catch{}const ee=()=>{},ae=64,B=({children:n,xPadding:l="none"})=>{const[r,u]=s.useState(!1),[b,o]=s.useState(!1),i=s.useRef(null),T=s.useRef(0),D=s.useRef(0),{tabIds:m,setTabIds:g,changeTabs:I,currentIndex:C,hasPanels:S,tabsListRef:p,setIsResponsive:H,kind:V}=s.useContext(O),v=e.Children.toArray(n),f=()=>{if(!p.current||!i.current)return;const t=p.current,d=Array.from(t.children),c=parseFloat(getComputedStyle(t).columnGap)||0;T.current=d.reduce((E,U)=>E+U.offsetWidth,0)+Math.max(0,d.length-1)*c,D.current=i.current.clientWidth-ae,h()},h=()=>{if(!p.current)return;const{scrollLeft:t}=p.current,d=T.current,c=D.current,E=d>c,U=E&&t>1,Q=E&&t<d-c-1;u(U),o(Q),H(E)};s.useEffect(()=>{if(!i.current)return;const t=new ResizeObserver(f);return t.observe(i.current),f(),()=>t.disconnect()},[]),s.useEffect(()=>{const t=p.current;if(t)return t.addEventListener("scroll",h),()=>t.removeEventListener("scroll",h)},[]),s.useEffect(()=>{f()},[]),s.useEffect(()=>{f()},[v.length,C]),s.useEffect(()=>{m.length!==v.length&&g(v.map(t=>t.props.tabId))},[m,g,v]);const G=({key:t})=>{let d;switch(t){case"ArrowLeft":d=C-1,d>=0&&I(m[d]);break;case"ArrowRight":d=C+1,d<=m.length-1&&I(m[d]);break}},z=t=>{const d=getComputedStyle(t).getPropertyValue("scroll-padding-inline-start").trim(),c=parseFloat(d);return Number.isFinite(c)?c:0},X=()=>{const t=p.current,d=t.scrollLeft-t.clientWidth,c=z(t);t.scroll({left:d<=c?0:d,behavior:"smooth"})},J=()=>{const t=p.current;if(!t)return;const d=t.scrollWidth-t.clientWidth,c=t.scrollLeft+t.clientWidth,E=z(t);t.scroll({left:c>=d-E?d:c,behavior:"smooth"})};return e.createElement("div",{ref:i},e.createElement(W,{gapSize:"none",alignItems:"center"},r&&e.createElement(W.Item,{shrink:!0},e.createElement(q,{direction:"left",onClick:X,show:r})),e.createElement(W.Item,null,e.createElement("ul",{ref:p,role:S?"tablist":void 0,className:j(["nds-tabs-tabsList",`nds-tabs-tabsList--${V}`,"list--reset",`padding--x--${l}`,{"nds-tabs-tabsList--overflowLeft":r,"nds-tabs-tabsList--overflowRight":b}]),onKeyDown:S?G:ee,tabIndex:S?0:void 0,"data-testid":"nds-tablist"},n)),b&&e.createElement(W.Item,{shrink:!0},e.createElement(q,{direction:"right",onClick:J,show:b}))))};try{B.displayName="TabsList",B.__docgenInfo={description:"",displayName:"TabsList",props:{children:{defaultValue:null,description:"Children must be of type `Tabs.Tab`",name:"children",required:!0,type:{name:"ReactNode"}},xPadding:{defaultValue:{value:"none"},description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:"xPadding",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}}}}}catch{}const $=({children:n,tabId:l,testId:r})=>{const{currentIndex:u,tabIds:b,hasPanels:o,setHasPanels:i,isResponsive:T}=s.useContext(O),D=b[u];return s.useEffect(()=>{o||i(!0)},[o,i]),e.createElement("div",{className:"nds-tabs-panel",tabIndex:0,role:"tabpanel",id:`${l}-tabpanel`,"aria-labelledby":`${l}-tab`,hidden:l!==D?!0:void 0,"data-testid":r},T?e.createElement("div",{className:"panel-responsive"},n):e.createElement(e.Fragment,null,n))};try{$.displayName="TabsPanel",$.__docgenInfo={description:"",displayName:"TabsPanel",props:{children:{defaultValue:null,description:"The content of the tab panel (any node type)",name:"children",required:!0,type:{name:"ReactNode"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const M=({label:n,tabId:l,testId:r,hasStatusIndicator:u})=>{const{currentIndex:b,tabIds:o,hasPanels:i,changeTabs:T,kind:D}=s.useContext(O),m=s.useRef(null),g=l===o[b],I=()=>{T(l)};return e.createElement("li",{role:i?"tab":void 0,"aria-selected":i?g.toString():void 0,"aria-controls":i?`${l}-tabpanel`:void 0,"data-selected":g||void 0,className:`nds-tabs-tabItem nds-tabs-tabItem--${D}${g?" nds-tabs-tabItem--selected":""}`,ref:m},e.createElement("button",{className:"resetButton nds-tabs-button",id:`${l}-tab`,tabIndex:i?-1:0,onClick:I,"data-testid":r},u&&e.createElement("span",{className:"nds-tabs-statusIndicator"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"6",viewBox:"0 0 6 6",fill:"none","aria-hidden":"true",focusable:"false"},e.createElement("circle",{cx:"3",cy:"3",r:"3",fill:"var(--color-successDark)"}))),e.createElement("span",null,n)))};try{M.displayName="TabsTab",M.__docgenInfo={description:"",displayName:"TabsTab",props:{label:{defaultValue:null,description:"Label of the tab button",name:"label",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}},hasStatusIndicator:{defaultValue:null,description:'Optional prop to show an "update" notification dot in the tab',name:"hasStatusIndicator",required:!1,type:{name:"boolean"}}}}}catch{}const te=()=>{},a=({children:n,defaultSelectedIndex:l=0,selectedIndex:r=null,onTabChange:u=te,hasBorder:b=!0,kind:o="default",testId:i})=>{const T=s.useRef(),[D,m]=s.useState([]),[g,I]=s.useState(!1),[C,S]=s.useState(!1),[p,H]=s.useState(l),V=r!==null,v=f=>{const h=D.indexOf(f);u(h),V||H(h)};return e.createElement(O.Provider,{value:{tabIds:D,setTabIds:m,currentIndex:V?r:p,hasPanels:g,setHasPanels:I,changeTabs:v,tabsListRef:T,isResponsive:C,setIsResponsive:S,kind:o}},e.createElement("div",{className:j(["nds-tabs",`nds-tabs--${o}`,{"nds-tabs--isResponsive":C,"nds-tabs--bordered":b&&o==="default"}]),"data-testid":i},n))};a.List=B;a.Tab=M;a.Panel=$;try{a.displayName="Tabs",a.__docgenInfo={description:'Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)\nfor the "tabs" design pattern.\n\nThe `Tabs` component manages its own state, changing the visible tab panel based\non user events. Use the `onTabChange` callback to add any custom behaviors.',displayName:"Tabs",props:{children:{defaultValue:null,description:"Direct children of `Tabs` should be one of:\n`Tabs.List` or `Tabs.Panel`",name:"children",required:!0,type:{name:"ReactNode"}},defaultSelectedIndex:{defaultValue:{value:"0"},description:"Sets _default_ tab selection by index in source order",name:"defaultSelectedIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:{value:"null"},description:"Sets selected tab by index, making Tabs **fully controlled**.\nWhen using this prop, you must use the `onTabChange` callback\nto update the value of this prop to update the selected tab.",name:"selectedIndex",required:!1,type:{name:"number"}},onTabChange:{defaultValue:{value:"() => {}"},description:"Callback invoked with the index of the tab the user is moving selection to",name:"onTabChange",required:!1,type:{name:"(index: number) => void"}},hasBorder:{defaultValue:{value:"true"},description:'Shows bottom border when `true`.\nOnly applies to `kind="default"`.\n@deprecated Will be removed in a future release.',name:"hasBorder",required:!1,type:{name:"boolean"}},kind:{defaultValue:{value:"default"},description:"Visual style variant of the tabs",name:"kind",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"segmented"'}]}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}function Y(){return Y=Object.assign?Object.assign.bind():function(n){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var u in r)({}).hasOwnProperty.call(r,u)&&(n[u]=r[u])}return n},Y.apply(null,arguments)}const K=n=>e.createElement(a,n,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆"))),x=K.bind({});x.args={onTabChange:()=>{}};const _=K.bind({});_.args={defaultSelectedIndex:1};const R=n=>e.createElement("div",{style:{display:"flex",width:200,flexDirection:"column"}},e.createElement(a,n,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Bird",tabId:"bird"}),e.createElement(a.Tab,{label:"Cat",tabId:"cat"}),e.createElement(a.Tab,{label:"Dog",tabId:"dog"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"}),e.createElement(a.Tab,{label:"My absolute favorite animal of all time",tabId:"penguin"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"bird"},e.createElement("div",{className:"padding--all--s"},"🐦🐦🐦")),e.createElement(a.Panel,{tabId:"cat"},e.createElement("div",{className:"padding--all--s"},"🐈🐈🐈")),e.createElement(a.Panel,{tabId:"dog"},e.createElement("div",{className:"padding--all--s"},"🐕🐕🐕")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆")),e.createElement(a.Panel,{tabId:"penguin"},e.createElement("div",{className:"padding--all--s"},"️🐧🐧🐧")))),k=n=>e.createElement("div",{style:{display:"flex",width:300,flexDirection:"column"}},e.createElement(a,Y({kind:"segmented"},n),e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Bird",tabId:"bird"}),e.createElement(a.Tab,{label:"Cat",tabId:"cat"}),e.createElement(a.Tab,{label:"Dog",tabId:"dog"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"bird"},e.createElement("div",{className:"padding--all--s"},"🐦🐦🐦")),e.createElement(a.Panel,{tabId:"cat"},e.createElement("div",{className:"padding--all--s"},"🐈🐈🐈")),e.createElement(a.Panel,{tabId:"dog"},e.createElement("div",{className:"padding--all--s"},"🐕🐕🐕")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆")))),F=n=>e.createElement(a,n,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));F.parameters={docs:{description:{story:"You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events."}}};const P=()=>e.createElement(a,{hasBorder:!1},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));P.parameters={docs:{description:{story:"You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already."}}};const N=()=>e.createElement(a,null,e.createElement(a.List,{xPadding:"l"},e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));N.parameters={docs:{description:{story:"You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`."}}};const y=()=>{const[n,l]=s.useState(1);return e.createElement(a,{selectedIndex:n,onTabChange:r=>l(r)},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")))};y.parameters={docs:{description:{story:"Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab."}}};const w=()=>e.createElement(a,{kind:"segmented"},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")));w.parameters={docs:{description:{story:"The `segmented` kind renders tabs as a segmented control, useful for toggling between views within the same context."}}};const A=()=>e.createElement(a,{kind:"segmented"},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple",hasStatusIndicator:!0}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple",hasStatusIndicator:!0}),e.createElement(a.Tab,{label:"Very long label with indicator",tabId:"test",hasStatusIndicator:!0})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"test"},e.createElement("div",{className:"padding--all--s"},"Test Content")));A.parameters={docs:{description:{story:"Segmented tabs with `hasStatusIndicator` on select tabs to show an update notification dot."}}};const L=()=>e.createElement("div",{className:"padding--all--m",style:{display:"grid",gap:"1.5rem"}},e.createElement(a,{kind:"segmented"},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍"))),e.createElement(a,{kind:"segmented",defaultSelectedIndex:1},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Birds",tabId:"bird"}),e.createElement(a.Tab,{label:"Cats",tabId:"cat"}),e.createElement(a.Tab,{label:"Dogs",tabId:"dog"}),e.createElement(a.Tab,{label:"Snow leopards",tabId:"snowLeopard"})),e.createElement(a.Panel,{tabId:"bird"},e.createElement("div",{className:"padding--all--s"},"🐦🐦🐦")),e.createElement(a.Panel,{tabId:"cat"},e.createElement("div",{className:"padding--all--s"},"🐈🐈🐈")),e.createElement(a.Panel,{tabId:"dog"},e.createElement("div",{className:"padding--all--s"},"🐕🐕🐕")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"❄️🐆"))),e.createElement(a,{kind:"segmented",defaultSelectedIndex:2},e.createElement(a.List,null,e.createElement(a.Tab,{label:"One",tabId:"one"}),e.createElement(a.Tab,{label:"Two",tabId:"two"}),e.createElement(a.Tab,{label:"Three",tabId:"three"})),e.createElement(a.Panel,{tabId:"one"},e.createElement("div",{className:"padding--all--s"},"1️⃣")),e.createElement(a.Panel,{tabId:"two"},e.createElement("div",{className:"padding--all--s"},"2️⃣")),e.createElement(a.Panel,{tabId:"three"},e.createElement("div",{className:"padding--all--s"},"3️⃣"))));L.parameters={docs:{description:{story:"Renders multiple `segmented` Tabs on the same page to verify that each instance's sliding pill resolves to its own selected tab. Since `anchor-name: --active` is declared at document scope, this story exists to confirm there is no cross-instance interference in practice (try changing the selected tab in each set and observe the pill)."}}};const be={title:"Components/Tabs",component:a,subcomponents:{TabsList:B,TabsTab:M,TabsPanel:$}};R.__docgenInfo={description:"",methods:[],displayName:"ResponsiveTabs"};k.__docgenInfo={description:"",methods:[],displayName:"ResponsiveSegmentedTabs"};F.__docgenInfo={description:"",methods:[],displayName:"WithoutPanels"};P.__docgenInfo={description:"",methods:[],displayName:"WithoutBorder"};N.__docgenInfo={description:"",methods:[],displayName:"PaddedTabsList"};y.__docgenInfo={description:"",methods:[],displayName:"FullyControlledTabs"};w.__docgenInfo={description:"",methods:[],displayName:"Segmented"};A.__docgenInfo={description:"",methods:[],displayName:"SegmentedWithStatusIndicator"};L.__docgenInfo={description:"",methods:[],displayName:"MultipleSegmentedTabs"};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
      <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />
    </Tabs.List>
    <Tabs.Panel tabId="apple">
      <div className="padding--all--s">🍎🍎🍎</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="orange">
      <div className="padding--all--s">🍊🍊🍊</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="pineapple">
      <div className="padding--all--s">🍍🍍🍍</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="snowLeopard">
      <div className="padding--all--s">️❄️🐆</div>
    </Tabs.Panel>
  </Tabs>`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
      <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />
    </Tabs.List>
    <Tabs.Panel tabId="apple">
      <div className="padding--all--s">🍎🍎🍎</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="orange">
      <div className="padding--all--s">🍊🍊🍊</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="pineapple">
      <div className="padding--all--s">🍍🍍🍍</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="snowLeopard">
      <div className="padding--all--s">️❄️🐆</div>
    </Tabs.Panel>
  </Tabs>`,..._.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  width: 200,
  flexDirection: "column"
}}>
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
        <Tabs.Tab label="Bird" tabId="bird" />
        <Tabs.Tab label="Cat" tabId="cat" />
        <Tabs.Tab label="Dog" tabId="dog" />
        <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />
        <Tabs.Tab label="My absolute favorite animal of all time" tabId="penguin" />
      </Tabs.List>
      <Tabs.Panel tabId="apple">
        <div className="padding--all--s">🍎🍎🍎</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="orange">
        <div className="padding--all--s">🍊🍊🍊</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="pineapple">
        <div className="padding--all--s">🍍🍍🍍</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="bird">
        <div className="padding--all--s">🐦🐦🐦</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="cat">
        <div className="padding--all--s">🐈🐈🐈</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="dog">
        <div className="padding--all--s">🐕🐕🐕</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="snowLeopard">
        <div className="padding--all--s">️❄️🐆</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="penguin">
        <div className="padding--all--s">️🐧🐧🐧</div>
      </Tabs.Panel>
    </Tabs>
  </div>`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  width: 300,
  flexDirection: "column"
}}>
    <Tabs kind="segmented" {...args}>
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
        <Tabs.Tab label="Bird" tabId="bird" />
        <Tabs.Tab label="Cat" tabId="cat" />
        <Tabs.Tab label="Dog" tabId="dog" />
        <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />
      </Tabs.List>
      <Tabs.Panel tabId="apple">
        <div className="padding--all--s">🍎🍎🍎</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="orange">
        <div className="padding--all--s">🍊🍊🍊</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="pineapple">
        <div className="padding--all--s">🍍🍍🍍</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="bird">
        <div className="padding--all--s">🐦🐦🐦</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="cat">
        <div className="padding--all--s">🐈🐈🐈</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="dog">
        <div className="padding--all--s">🐕🐕🐕</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="snowLeopard">
        <div className="padding--all--s">️❄️🐆</div>
      </Tabs.Panel>
    </Tabs>
  </div>`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...P.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...N.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [selectedTab, setSelectedTab] = useState(1);
  return <Tabs selectedIndex={selectedTab} onTabChange={index => setSelectedTab(index)}>
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
      </Tabs.List>
      <Tabs.Panel tabId="apple">
        <div className="padding--all--s">🍎🍎🍎</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="orange">
        <div className="padding--all--s">🍊🍊🍊</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="pineapple">
        <div className="padding--all--s">🍍🍍🍍</div>
      </Tabs.Panel>
    </Tabs>;
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
    <Tabs.Panel tabId="apple">
      <div className="padding--all--s">🍎🍎🍎</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="orange">
      <div className="padding--all--s">🍊🍊🍊</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="pineapple">
      <div className="padding--all--s">🍍🍍🍍</div>
    </Tabs.Panel>
  </Tabs>`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" hasStatusIndicator />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" hasStatusIndicator />
      <Tabs.Tab label="Very long label with indicator" tabId="test" hasStatusIndicator />
    </Tabs.List>
    <Tabs.Panel tabId="apple">
      <div className="padding--all--s">🍎🍎🍎</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="orange">
      <div className="padding--all--s">🍊🍊🍊</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="pineapple">
      <div className="padding--all--s">🍍🍍🍍</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="test">
      <div className="padding--all--s">Test Content</div>
    </Tabs.Panel>
  </Tabs>`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <div className="padding--all--m" style={{
  display: "grid",
  gap: "1.5rem"
}}>
    <Tabs kind="segmented">
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
      </Tabs.List>
      <Tabs.Panel tabId="apple">
        <div className="padding--all--s">🍎🍎🍎</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="orange">
        <div className="padding--all--s">🍊🍊🍊</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="pineapple">
        <div className="padding--all--s">🍍🍍🍍</div>
      </Tabs.Panel>
    </Tabs>

    <Tabs kind="segmented" defaultSelectedIndex={1}>
      <Tabs.List>
        <Tabs.Tab label="Birds" tabId="bird" />
        <Tabs.Tab label="Cats" tabId="cat" />
        <Tabs.Tab label="Dogs" tabId="dog" />
        <Tabs.Tab label="Snow leopards" tabId="snowLeopard" />
      </Tabs.List>
      <Tabs.Panel tabId="bird">
        <div className="padding--all--s">🐦🐦🐦</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="cat">
        <div className="padding--all--s">🐈🐈🐈</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="dog">
        <div className="padding--all--s">🐕🐕🐕</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="snowLeopard">
        <div className="padding--all--s">❄️🐆</div>
      </Tabs.Panel>
    </Tabs>

    <Tabs kind="segmented" defaultSelectedIndex={2}>
      <Tabs.List>
        <Tabs.Tab label="One" tabId="one" />
        <Tabs.Tab label="Two" tabId="two" />
        <Tabs.Tab label="Three" tabId="three" />
      </Tabs.List>
      <Tabs.Panel tabId="one">
        <div className="padding--all--s">1️⃣</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="two">
        <div className="padding--all--s">2️⃣</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="three">
        <div className="padding--all--s">3️⃣</div>
      </Tabs.Panel>
    </Tabs>
  </div>`,...L.parameters?.docs?.source}}};const oe=["Overview","DefaultSelectedTab","ResponsiveTabs","ResponsiveSegmentedTabs","WithoutPanels","WithoutBorder","PaddedTabsList","FullyControlledTabs","Segmented","SegmentedWithStatusIndicator","MultipleSegmentedTabs"];export{_ as DefaultSelectedTab,y as FullyControlledTabs,L as MultipleSegmentedTabs,x as Overview,N as PaddedTabsList,k as ResponsiveSegmentedTabs,R as ResponsiveTabs,w as Segmented,A as SegmentedWithStatusIndicator,P as WithoutBorder,F as WithoutPanels,oe as __namedExportsOrder,be as default};
