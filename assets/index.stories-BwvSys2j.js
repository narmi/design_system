import{r as n,e}from"./iframe-hzaqUASc.js";import{c as j}from"./index-RvS1aOr8.js";import{I as Q}from"./index-BEJoRg-t.js";import{R as W}from"./index-gEEjD8uy.js";import"./preload-helper-PPVm8Dsz.js";import"./selection-CAkQuomx.js";import"./AsElement-a2vLLMqH.js";const k=n.createContext({tabIds:[],setTabIds:()=>{},currentIndex:0,hasPanels:!1,setHasPanels:()=>{},changeTabs:()=>{},tabsListRef:null,isResponsive:!1,setIsResponsive:()=>{},kind:"default"}),q=({direction:t,onClick:l,show:s})=>{const{isResponsive:u,kind:b}=n.useContext(k),o=t==="left"?b==="segmented"?"chevron-left":"arrow-left":b==="segmented"?"chevron-right":"arrow-right";return u&&e.createElement("div",{className:"arrow-reponsive"},e.createElement("div",{className:j(["nds-tabs-arrow",{"nds-tabs-arrow--visible":s}])},e.createElement(Q,{onClick:l,name:o,kind:"action"})))};try{q.displayName="Arrow",q.__docgenInfo={description:"",displayName:"Arrow",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}}}}}catch{}const Z=()=>{},ee=64,B=({children:t,xPadding:l="none"})=>{const[s,u]=n.useState(!1),[b,o]=n.useState(!1),r=n.useRef(null),m=n.useRef(0),p=n.useRef(0),{tabIds:D,setTabIds:T,changeTabs:g,currentIndex:w,hasPanels:A,tabsListRef:i,setIsResponsive:H,kind:O}=n.useContext(k),E=e.Children.toArray(t),I=()=>{if(!i.current||!r.current)return;const d=i.current,c=Array.from(d.children),V=parseFloat(getComputedStyle(d).columnGap)||0;m.current=c.reduce((L,U)=>L+U.offsetWidth,0)+Math.max(0,c.length-1)*V,p.current=r.current.clientWidth-ee,C()},C=()=>{if(!i.current)return;const{scrollLeft:d}=i.current,c=m.current,V=p.current,L=c>V,U=L&&d>1,J=L&&d<c-V-1;u(U),o(J),H(L)};n.useEffect(()=>{if(!r.current)return;const d=new ResizeObserver(I);return d.observe(r.current),I(),()=>d.disconnect()},[]),n.useEffect(()=>{const d=i.current;if(d)return d.addEventListener("scroll",C),()=>d.removeEventListener("scroll",C)},[]),n.useEffect(()=>{I()},[]),n.useEffect(()=>{I()},[E.length,w]),n.useEffect(()=>{D.length!==E.length&&T(E.map(d=>d.props.tabId))},[D,T,E]);const K=({key:d})=>{let c;switch(d){case"ArrowLeft":c=w-1,c>=0&&g(D[c]);break;case"ArrowRight":c=w+1,c<=D.length-1&&g(D[c]);break}},G=()=>{i.current.scroll({left:i.current.scrollLeft-i.current.clientWidth,behavior:"smooth"})},X=()=>{i.current.scroll({left:i.current.scrollLeft+i.current.clientWidth,behavior:"smooth"})};return e.createElement("div",{ref:r},e.createElement(W,{gapSize:"none",alignItems:"center"},s&&e.createElement(W.Item,{shrink:!0},e.createElement(q,{direction:"left",onClick:G,show:s})),e.createElement(W.Item,null,e.createElement("ul",{ref:i,role:A?"tablist":void 0,className:j(["nds-tabs-tabsList",`nds-tabs-tabsList--${O}`,"list--reset",`padding--x--${l}`,{"nds-tabs-tabsList--overflowLeft":s,"nds-tabs-tabsList--overflowRight":b}]),onKeyDown:A?K:Z,tabIndex:A?0:void 0,"data-testid":"nds-tablist"},t)),b&&e.createElement(W.Item,{shrink:!0},e.createElement(q,{direction:"right",onClick:X,show:b}))))};try{B.displayName="TabsList",B.__docgenInfo={description:"",displayName:"TabsList",props:{children:{defaultValue:null,description:"Children must be of type `Tabs.Tab`",name:"children",required:!0,type:{name:"ReactNode"}},xPadding:{defaultValue:{value:"none"},description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:"xPadding",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}}}}}catch{}const $=({children:t,tabId:l,testId:s})=>{const{currentIndex:u,tabIds:b,hasPanels:o,setHasPanels:r,isResponsive:m}=n.useContext(k),p=b[u];return n.useEffect(()=>{o||r(!0)},[o,r]),e.createElement("div",{className:"nds-tabs-panel",tabIndex:0,role:"tabpanel",id:`${l}-tabpanel`,"aria-labelledby":`${l}-tab`,hidden:l!==p?!0:void 0,"data-testid":s},m?e.createElement("div",{className:"panel-responsive"},t):e.createElement(e.Fragment,null,t))};try{$.displayName="TabsPanel",$.__docgenInfo={description:"",displayName:"TabsPanel",props:{children:{defaultValue:null,description:"The content of the tab panel (any node type)",name:"children",required:!0,type:{name:"ReactNode"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const M=({label:t,tabId:l,testId:s,hasStatusIndicator:u})=>{const{currentIndex:b,tabIds:o,hasPanels:r,changeTabs:m,kind:p}=n.useContext(k),D=n.useRef(null),T=l===o[b],g=()=>{m(l)};return e.createElement("li",{role:r?"tab":void 0,"aria-selected":r?T.toString():void 0,"aria-controls":r?`${l}-tabpanel`:void 0,"data-selected":T||void 0,className:`nds-tabs-tabItem nds-tabs-tabItem--${p}${T?" nds-tabs-tabItem--selected":""}`,ref:D},e.createElement("button",{className:"resetButton nds-tabs-button",id:`${l}-tab`,tabIndex:r?-1:0,onClick:g,"data-testid":s},u&&e.createElement("span",{className:"nds-tabs-statusIndicator"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"6",viewBox:"0 0 6 6",fill:"none","aria-hidden":"true",focusable:"false"},e.createElement("circle",{cx:"3",cy:"3",r:"3",fill:"var(--color-successDark)"}))),e.createElement("span",null,t)))};try{M.displayName="TabsTab",M.__docgenInfo={description:"",displayName:"TabsTab",props:{label:{defaultValue:null,description:"Label of the tab button",name:"label",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}},hasStatusIndicator:{defaultValue:null,description:'Optional prop to show an "update" notification dot in the tab',name:"hasStatusIndicator",required:!1,type:{name:"boolean"}}}}}catch{}const ae=()=>{},a=({children:t,defaultSelectedIndex:l=0,selectedIndex:s=null,onTabChange:u=ae,hasBorder:b=!0,kind:o="default",testId:r})=>{const m=n.useRef(),[p,D]=n.useState([]),[T,g]=n.useState(!1),[w,A]=n.useState(!1),[i,H]=n.useState(l),O=s!==null,E=I=>{const C=p.indexOf(I);u(C),O||H(C)};return e.createElement(k.Provider,{value:{tabIds:p,setTabIds:D,currentIndex:O?s:i,hasPanels:T,setHasPanels:g,changeTabs:E,tabsListRef:m,isResponsive:w,setIsResponsive:A,kind:o}},e.createElement("div",{className:j(["nds-tabs",`nds-tabs--${o}`,{"nds-tabs--bordered":b&&o==="default"}]),"data-testid":r},t))};a.List=B;a.Tab=M;a.Panel=$;try{a.displayName="Tabs",a.__docgenInfo={description:'Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)\nfor the "tabs" design pattern.\n\nThe `Tabs` component manages its own state, changing the visible tab panel based\non user events. Use the `onTabChange` callback to add any custom behaviors.',displayName:"Tabs",props:{children:{defaultValue:null,description:"Direct children of `Tabs` should be one of:\n`Tabs.List` or `Tabs.Panel`",name:"children",required:!0,type:{name:"ReactNode"}},defaultSelectedIndex:{defaultValue:{value:"0"},description:"Sets _default_ tab selection by index in source order",name:"defaultSelectedIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:{value:"null"},description:"Sets selected tab by index, making Tabs **fully controlled**.\nWhen using this prop, you must use the `onTabChange` callback\nto update the value of this prop to update the selected tab.",name:"selectedIndex",required:!1,type:{name:"number"}},onTabChange:{defaultValue:{value:"() => {}"},description:"Callback invoked with the index of the tab the user is moving selection to",name:"onTabChange",required:!1,type:{name:"(index: number) => void"}},hasBorder:{defaultValue:{value:"true"},description:'Shows bottom border when `true`.\nOnly applies to `kind="default"`.\n@deprecated Will be removed in a future release.',name:"hasBorder",required:!1,type:{name:"boolean"}},kind:{defaultValue:{value:"default"},description:"Visual style variant of the tabs",name:"kind",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"segmented"'}]}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}function Y(){return Y=Object.assign?Object.assign.bind():function(t){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var u in s)({}).hasOwnProperty.call(s,u)&&(t[u]=s[u])}return t},Y.apply(null,arguments)}const z=t=>e.createElement(a,t,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆"))),S=z.bind({});S.args={onTabChange:()=>{}};const x=z.bind({});x.args={defaultSelectedIndex:1};const _=t=>e.createElement("div",{style:{display:"flex",width:200,flexDirection:"column"}},e.createElement(a,t,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Bird",tabId:"bird"}),e.createElement(a.Tab,{label:"Cat",tabId:"cat"}),e.createElement(a.Tab,{label:"Dog",tabId:"dog"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"}),e.createElement(a.Tab,{label:"My absolute favorite animal of all time",tabId:"penguin"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"bird"},e.createElement("div",{className:"padding--all--s"},"🐦🐦🐦")),e.createElement(a.Panel,{tabId:"cat"},e.createElement("div",{className:"padding--all--s"},"🐈🐈🐈")),e.createElement(a.Panel,{tabId:"dog"},e.createElement("div",{className:"padding--all--s"},"🐕🐕🐕")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆")),e.createElement(a.Panel,{tabId:"penguin"},e.createElement("div",{className:"padding--all--s"},"️🐧🐧🐧")))),R=t=>e.createElement("div",{style:{display:"flex",width:300,flexDirection:"column"}},e.createElement(a,Y({kind:"segmented"},t),e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Bird",tabId:"bird"}),e.createElement(a.Tab,{label:"Cat",tabId:"cat"}),e.createElement(a.Tab,{label:"Dog",tabId:"dog"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"bird"},e.createElement("div",{className:"padding--all--s"},"🐦🐦🐦")),e.createElement(a.Panel,{tabId:"cat"},e.createElement("div",{className:"padding--all--s"},"🐈🐈🐈")),e.createElement(a.Panel,{tabId:"dog"},e.createElement("div",{className:"padding--all--s"},"🐕🐕🐕")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆")))),v=t=>e.createElement(a,t,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));v.parameters={docs:{description:{story:"You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events."}}};const h=()=>e.createElement(a,{hasBorder:!1},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));h.parameters={docs:{description:{story:"You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already."}}};const f=()=>e.createElement(a,null,e.createElement(a.List,{xPadding:"l"},e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));f.parameters={docs:{description:{story:"You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`."}}};const F=()=>{const[t,l]=n.useState(1);return e.createElement(a,{selectedIndex:t,onTabChange:s=>l(s)},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")))};F.parameters={docs:{description:{story:"Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab."}}};const P=()=>e.createElement(a,{kind:"segmented"},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")));P.parameters={docs:{description:{story:"The `segmented` kind renders tabs as a segmented control, useful for toggling between views within the same context."}}};const N=()=>e.createElement(a,{kind:"segmented"},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple",hasStatusIndicator:!0}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple",hasStatusIndicator:!0}),e.createElement(a.Tab,{label:"Very long label with indicator",tabId:"test",hasStatusIndicator:!0})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"test"},e.createElement("div",{className:"padding--all--s"},"Test Content")));N.parameters={docs:{description:{story:"Segmented tabs with `hasStatusIndicator` on select tabs to show an update notification dot."}}};const y=()=>e.createElement("div",{className:"padding--all--m",style:{display:"grid",gap:"1.5rem"}},e.createElement(a,{kind:"segmented"},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍"))),e.createElement(a,{kind:"segmented",defaultSelectedIndex:1},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Birds",tabId:"bird"}),e.createElement(a.Tab,{label:"Cats",tabId:"cat"}),e.createElement(a.Tab,{label:"Dogs",tabId:"dog"}),e.createElement(a.Tab,{label:"Snow leopards",tabId:"snowLeopard"})),e.createElement(a.Panel,{tabId:"bird"},e.createElement("div",{className:"padding--all--s"},"🐦🐦🐦")),e.createElement(a.Panel,{tabId:"cat"},e.createElement("div",{className:"padding--all--s"},"🐈🐈🐈")),e.createElement(a.Panel,{tabId:"dog"},e.createElement("div",{className:"padding--all--s"},"🐕🐕🐕")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"❄️🐆"))),e.createElement(a,{kind:"segmented",defaultSelectedIndex:2},e.createElement(a.List,null,e.createElement(a.Tab,{label:"One",tabId:"one"}),e.createElement(a.Tab,{label:"Two",tabId:"two"}),e.createElement(a.Tab,{label:"Three",tabId:"three"})),e.createElement(a.Panel,{tabId:"one"},e.createElement("div",{className:"padding--all--s"},"1️⃣")),e.createElement(a.Panel,{tabId:"two"},e.createElement("div",{className:"padding--all--s"},"2️⃣")),e.createElement(a.Panel,{tabId:"three"},e.createElement("div",{className:"padding--all--s"},"3️⃣"))));y.parameters={docs:{description:{story:"Renders multiple `segmented` Tabs on the same page to verify that each instance's sliding pill resolves to its own selected tab. Since `anchor-name: --active` is declared at document scope, this story exists to confirm there is no cross-instance interference in practice (try changing the selected tab in each set and observe the pill)."}}};const ue={title:"Components/Tabs",component:a,subcomponents:{TabsList:B,TabsTab:M,TabsPanel:$}};_.__docgenInfo={description:"",methods:[],displayName:"ResponsiveTabs"};R.__docgenInfo={description:"",methods:[],displayName:"ResponsiveSegmentedTabs"};v.__docgenInfo={description:"",methods:[],displayName:"WithoutPanels"};h.__docgenInfo={description:"",methods:[],displayName:"WithoutBorder"};f.__docgenInfo={description:"",methods:[],displayName:"PaddedTabsList"};F.__docgenInfo={description:"",methods:[],displayName:"FullyControlledTabs"};P.__docgenInfo={description:"",methods:[],displayName:"Segmented"};N.__docgenInfo={description:"",methods:[],displayName:"SegmentedWithStatusIndicator"};y.__docgenInfo={description:"",methods:[],displayName:"MultipleSegmentedTabs"};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,..._.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...R.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...f.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...P.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...N.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <div className="padding--all--m" style={{
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
  </div>`,...y.parameters?.docs?.source}}};const be=["Overview","DefaultSelectedTab","ResponsiveTabs","ResponsiveSegmentedTabs","WithoutPanels","WithoutBorder","PaddedTabsList","FullyControlledTabs","Segmented","SegmentedWithStatusIndicator","MultipleSegmentedTabs"];export{x as DefaultSelectedTab,F as FullyControlledTabs,y as MultipleSegmentedTabs,S as Overview,f as PaddedTabsList,R as ResponsiveSegmentedTabs,_ as ResponsiveTabs,P as Segmented,N as SegmentedWithStatusIndicator,h as WithoutBorder,v as WithoutPanels,be as __namedExportsOrder,ue as default};
