import{r as s,e}from"./iframe-_zXvXaHg.js";import{c as L}from"./index-RvS1aOr8.js";import{I as $}from"./index-DbVkgFv1.js";import"./preload-helper-PPVm8Dsz.js";import"./selection-CAkQuomx.js";import"./AsElement-Ba1ct5Ob.js";const N=s.createContext({tabIds:[],setTabIds:()=>{},currentIndex:0,hasPanels:!1,setHasPanels:()=>{},changeTabs:()=>{},tabsListRef:null,isResponsive:!1,setIsResponsive:()=>{}}),A=({direction:t,onClick:l,show:d})=>{const{isResponsive:c}=s.useContext(N);return c&&e.createElement("div",{className:"arrow-reponsive"},e.createElement("div",{className:L(["nds-tabs-arrow",{"nds-tabs-arrow--visible":d}])},e.createElement($,{onClick:l,name:t==="left"?"arrow-left":"arrow-right",kind:"action"})))};try{A.displayName="Arrow",A.__docgenInfo={description:"",displayName:"Arrow",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}}}}}catch{}const z=()=>{},S=({children:t,xPadding:l="none"})=>{const[d,c]=s.useState(!1),[D,i]=s.useState(!1),{tabIds:r,setTabIds:p,changeTabs:b,currentIndex:T,hasPanels:E,tabsListRef:o,setIsResponsive:O,isResponsive:q}=s.useContext(N),v=e.Children.toArray(t),m=()=>{if(!o.current)return;const{scrollWidth:n,clientWidth:u,scrollLeft:g}=o.current,x=g>1,W=g<n-u-1;c(x),i(W),O(x||W)};s.useEffect(()=>{if(!o.current)return;const n=new ResizeObserver(m);return n.observe(o.current),()=>n.disconnect()},[]),s.useEffect(()=>{const n=o.current;if(n)return n.addEventListener("scroll",m),()=>n.removeEventListener("scroll",m)},[]),s.useEffect(()=>{m()},[]),s.useEffect(()=>{r.length!==v.length&&p(v.map(n=>n.props.tabId))},[r,p,v]);const _=({key:n})=>{let u;switch(n){case"ArrowLeft":u=T-1,u>=0&&b(r[u]);break;case"ArrowRight":u=T+1,u<=r.length-1&&b(r[u]);break}},V=()=>{o.current.scroll({left:o.current.scrollLeft-o.current.clientWidth,behavior:"smooth"})},P=()=>{o.current.scroll({left:o.current.scrollLeft+o.current.clientWidth,behavior:"smooth"})};return e.createElement("div",{className:q?"display-flex":""},e.createElement(A,{direction:"left",onClick:V,show:d}),e.createElement("ul",{ref:o,role:E?"tablist":void 0,className:`nds-tabs-tabsList list--reset padding--x--${l}`,onKeyDown:E?_:z,tabIndex:E?0:void 0,"data-testid":"nds-tablist"},t),e.createElement(A,{direction:"right",onClick:P,show:D}))};try{S.displayName="TabsList",S.__docgenInfo={description:"",displayName:"TabsList",props:{children:{defaultValue:null,description:"Children must be of type `Tabs.Tab`",name:"children",required:!0,type:{name:"ReactNode"}},xPadding:{defaultValue:{value:"none"},description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:"xPadding",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"l"'},{value:'"xl"'},{value:'"m"'},{value:'"none"'}]}}}}}catch{}const R=({children:t,tabId:l,testId:d})=>{const{currentIndex:c,tabIds:D,hasPanels:i,setHasPanels:r,isResponsive:p}=s.useContext(N),b=D[c];return s.useEffect(()=>{i||r(!0)},[i,r]),e.createElement("div",{className:"nds-tabs-panel",tabIndex:0,role:"tabpanel",id:`${l}-tabpanel`,"aria-labelledby":`${l}-tab`,hidden:l!==b?!0:void 0,"data-testid":d},p?e.createElement("div",{className:"panel-responsive"},t):e.createElement(e.Fragment,null,t))};try{R.displayName="TabsPanel",R.__docgenInfo={description:"",displayName:"TabsPanel",props:{children:{defaultValue:null,description:"The content of the tab panel (any node type)",name:"children",required:!0,type:{name:"ReactNode"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const k=({label:t,tabId:l,testId:d})=>{const{currentIndex:c,tabIds:D,hasPanels:i,changeTabs:r}=s.useContext(N),p=s.useRef(),b=l===D[c],T=()=>{r(l)};return e.createElement("li",{role:i?"tab":void 0,"aria-selected":i?b.toString():void 0,"aria-controls":i?`${l}-tabpanel`:void 0,className:L(["nds-tabs-tabItem",{"nds-tabs-tabItem--selected":b}]),ref:p},e.createElement("button",{className:L(["resetButton","nds-tabs-button",{"nds-tabs-button--selected":b}]),id:`${l}-tab`,tabIndex:i?-1:0,onClick:T,"data-testid":d},t))};try{k.displayName="TabsTab",k.__docgenInfo={description:"",displayName:"TabsTab",props:{label:{defaultValue:null,description:"Label of the tab button",name:"label",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const H=()=>{},a=({children:t,defaultSelectedIndex:l=0,selectedIndex:d=null,onTabChange:c=H,hasBorder:D=!0,testId:i})=>{const r=s.useRef(),[p,b]=s.useState([]),[T,E]=s.useState(!1),[o,O]=s.useState(!1),[q,v]=s.useState(l),m=d!==null,_=P=>{let n=0;if(!r.current)return n;const u=Array.from(r.current.children);for(let g=0;g<P;g+=1){const x=u[g];n+=x.clientWidth+40}return n};s.useEffect(()=>{m&&r.current.scroll({left:_(d),behavior:"smooth"})},[d]);const V=P=>{const n=p.indexOf(P);c(n),m||(r.current.scroll({left:_(n),behavior:"smooth"}),v(n))};return e.createElement(N.Provider,{value:{tabIds:p,setTabIds:b,currentIndex:m?d:q,hasPanels:T,setHasPanels:E,changeTabs:V,tabsListRef:r,isResponsive:o,setIsResponsive:O}},e.createElement("div",{className:L(["nds-tabs",{"nds-tabs--bordered":D}]),"data-testid":i},t))};a.List=S;a.Tab=k;a.Panel=R;try{a.displayName="Tabs",a.__docgenInfo={description:'Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)\nfor the "tabs" design pattern.\n\nThe `Tabs` component manages its own state, changing the visible tab panel based\non user events. Use the `onTabChange` callback to add any custom behaviors.',displayName:"Tabs",props:{children:{defaultValue:null,description:"Direct children of `Tabs` should be one of:\n`Tabs.List` or `Tabs.Panel`",name:"children",required:!0,type:{name:"ReactNode"}},defaultSelectedIndex:{defaultValue:{value:"0"},description:"Sets _default_ tab selection by index in source order",name:"defaultSelectedIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:{value:"null"},description:"Sets selected tab by index, making Tabs **fully controlled**.\nWhen using this prop, you must use the `onTabChange` callback\nto update the value of this prop to update the selected tab.",name:"selectedIndex",required:!1,type:{name:"number"}},onTabChange:{defaultValue:{value:"() => {}"},description:"Callback invoked with the index of the tab the user is moving selection to",name:"onTabChange",required:!1,type:{name:"(index: number) => void"}},hasBorder:{defaultValue:{value:"true"},description:"Shows bottom border when `true`",name:"hasBorder",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const B=t=>e.createElement(a,t,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆"))),F=B.bind({});F.args={onTabChange:()=>{}};const y=B.bind({});y.args={defaultSelectedIndex:1};const w=t=>e.createElement("div",{style:{display:"flex",width:200,flexDirection:"column"}},e.createElement(a,t,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Bird",tabId:"bird"}),e.createElement(a.Tab,{label:"Cat",tabId:"cat"}),e.createElement(a.Tab,{label:"Dog",tabId:"dog"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"}),e.createElement(a.Tab,{label:"My absolute favorite animal of all time",tabId:"penguin"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"bird"},e.createElement("div",{className:"padding--all--s"},"🐦🐦🐦")),e.createElement(a.Panel,{tabId:"cat"},e.createElement("div",{className:"padding--all--s"},"🐈🐈🐈")),e.createElement(a.Panel,{tabId:"dog"},e.createElement("div",{className:"padding--all--s"},"🐕🐕🐕")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆")),e.createElement(a.Panel,{tabId:"penguin"},e.createElement("div",{className:"padding--all--s"},"️🐧🐧🐧")))),I=t=>e.createElement(a,t,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));I.parameters={docs:{description:{story:"You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events."}}};const f=()=>e.createElement(a,{hasBorder:!1},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));f.parameters={docs:{description:{story:"You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already."}}};const h=()=>e.createElement(a,null,e.createElement(a.List,{xPadding:"l"},e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));h.parameters={docs:{description:{story:"You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`."}}};const C=()=>{const[t,l]=s.useState(1);return e.createElement(a,{selectedIndex:t,onTabChange:d=>l(d)},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")))};C.parameters={docs:{description:{story:"Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab."}}};const J={title:"Components/Tabs",component:a,subcomponents:{TabsList:S,TabsTab:k,TabsPanel:R}};w.__docgenInfo={description:"",methods:[],displayName:"ResponsiveTabs"};I.__docgenInfo={description:"",methods:[],displayName:"WithoutPanels"};f.__docgenInfo={description:"",methods:[],displayName:"WithoutBorder"};h.__docgenInfo={description:"",methods:[],displayName:"PaddedTabsList"};C.__docgenInfo={description:"",methods:[],displayName:"FullyControlledTabs"};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...F.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...I.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};const Q=["Overview","DefaultSelectedTab","ResponsiveTabs","WithoutPanels","WithoutBorder","PaddedTabsList","FullyControlledTabs"];export{y as DefaultSelectedTab,C as FullyControlledTabs,F as Overview,h as PaddedTabsList,w as ResponsiveTabs,f as WithoutBorder,I as WithoutPanels,Q as __namedExportsOrder,J as default};
