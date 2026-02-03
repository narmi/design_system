import{r as n,e}from"./iframe-BGKFfZvn.js";import{c as z}from"./index-RvS1aOr8.js";import{r as U}from"./raf-schd.esm-CmoV45_-.js";import{I as H}from"./index-DhZFF4n8.js";import{C as Y}from"./CSSTransition-Da9xOi1y.js";import"./preload-helper-PPVm8Dsz.js";import"./selection-CAkQuomx.js";import"./AsElement-Nku_HKKk.js";import"./extends-DDykod_l.js";import"./inheritsLoose-CWawPfk8.js";import"./index-CG2lBYBD.js";import"./index-t4v8ycKX.js";const A=n.createContext({tabIds:[],setTabIds:()=>{},currentIndex:0,hasPanels:!1,setHasPanels:()=>{},changeTabs:()=>{},tabsListRef:null,isResponsive:!1,setIsResponsive:()=>{}}),S=({direction:t,onClick:s,show:d})=>{const{isResponsive:p}=n.useContext(A),b=n.useRef();return p&&e.createElement("div",{className:"arrow-reponsive"},e.createElement(Y,{nodeRef:b,in:d,timeout:300,unmountOnExit:!0,classNames:"nds-tabs-arrow"},e.createElement("div",{ref:b,className:"nds-tabs-arrow"},e.createElement(H,{onClick:s,name:t==="left"?"arrow-left":"arrow-right",kind:"action"}))))};try{S.displayName="Arrow",S.__docgenInfo={description:"",displayName:"Arrow",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}}}}}catch{}const K=()=>{},R=({children:t,xPadding:s="none"})=>{const[d,p]=n.useState(!1),[b,u]=n.useState(!1),{tabIds:l,setTabIds:m,changeTabs:c,currentIndex:f,hasPanels:P,tabsListRef:o,setIsResponsive:q,isResponsive:V}=n.useContext(A),F=e.Children.toArray(t),y=()=>{const{scrollWidth:i,clientWidth:r,scrollLeft:w}=o.current,g=w>1,N=w<i-r-1;p(g),u(N),q(g||N)},T=()=>{o.current&&U(y())};n.useEffect(()=>{T()},[]),n.useEffect(()=>(window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}),[]),n.useEffect(()=>(o.current.addEventListener("scroll",T),()=>{o?.current?.removeEventListener("scroll",T)}),[o.current]),n.useEffect(()=>{l.length!==F.length&&m(F.map(i=>i.props.tabId))},[l,m,F]);const W=({key:i})=>{let r;switch(i){case"ArrowLeft":r=f-1,r>=0&&c(l[r]);break;case"ArrowRight":r=f+1,r<=l.length-1&&c(l[r]);break}},I=()=>{const i=o.current.clientWidth;let r=0;const w=Array.from(o.current.children);for(let g=0;g<w.length;g+=1){const N=w[g];if(r+N.clientWidth>i){g===0&&(r=i);break}r+=N.clientWidth}return r},D=()=>{o.current.scroll({left:o.current.scrollLeft-I(),behavior:"smooth"})},B=()=>{o.current.scroll({left:o.current.scrollLeft+I(),behavior:"smooth"})};return e.createElement("div",{className:V?"display-flex":""},e.createElement(S,{direction:"left",onClick:D,show:d}),e.createElement("ul",{ref:o,role:P?"tablist":void 0,className:`nds-tabs-tabsList list--reset padding--x--${s}`,onKeyDown:P?W:K,tabIndex:P?0:void 0,"data-testid":"nds-tablist"},t),e.createElement(S,{direction:"right",onClick:B,show:b}))};try{R.displayName="TabsList",R.__docgenInfo={description:"",displayName:"TabsList",props:{children:{defaultValue:null,description:"Children must be of type `Tabs.Tab`",name:"children",required:!0,type:{name:"ReactNode"}},xPadding:{defaultValue:{value:"none"},description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:"xPadding",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}}}}}catch{}const k=({children:t,tabId:s,testId:d})=>{const{currentIndex:p,tabIds:b,hasPanels:u,setHasPanels:l,isResponsive:m}=n.useContext(A),c=b[p];return n.useEffect(()=>{u||l(!0)},[u,l]),e.createElement("div",{className:"nds-tabs-panel",tabIndex:0,role:"tabpanel",id:`${s}-tabpanel`,"aria-labelledby":`${s}-tab`,hidden:s!==c?!0:void 0,"data-testid":d},m?e.createElement("div",{className:"panel-responsive"},t):e.createElement(e.Fragment,null,t))};try{k.displayName="TabsPanel",k.__docgenInfo={description:"",displayName:"TabsPanel",props:{children:{defaultValue:null,description:"The content of the tab panel (any node type)",name:"children",required:!0,type:{name:"ReactNode"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const O=({label:t,tabId:s,testId:d})=>{const{currentIndex:p,tabIds:b,hasPanels:u,changeTabs:l}=n.useContext(A),m=n.useRef(),c=s===b[p],f=()=>{l(s)};return e.createElement("li",{role:u?"tab":void 0,"aria-selected":u?c.toString():void 0,"aria-controls":u?`${s}-tabpanel`:void 0,className:z(["nds-tabs-tabItem",{"nds-tabs-tabItem--selected":c}]),ref:m},e.createElement("button",{className:z(["resetButton","nds-tabs-button",{"nds-tabs-button--selected":c}]),id:`${s}-tab`,tabIndex:u?-1:0,onClick:f,"data-testid":d},t))};try{O.displayName="TabsTab",O.__docgenInfo={description:"",displayName:"TabsTab",props:{label:{defaultValue:null,description:"Label of the tab button",name:"label",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const M=()=>{},a=({children:t,defaultSelectedIndex:s=0,selectedIndex:d=null,onTabChange:p=M,hasBorder:b=!0,testId:u})=>{const l=n.useRef(),[m,c]=n.useState([]),[f,P]=n.useState(!1),[o,q]=n.useState(!1),[V,F]=n.useState(s),y=d!==null,T=I=>{let D=0;if(!l.current)return D;const B=Array.from(l.current.children);for(let i=0;i<I;i+=1){const r=B[i];D+=r.clientWidth+40}return D};n.useEffect(()=>{y&&l.current.scroll({left:T(d),behavior:"smooth"})},[d]);const W=I=>{const D=m.indexOf(I);p(D),y||(l.current.scroll({left:T(D),behavior:"smooth"}),F(D))};return e.createElement(A.Provider,{value:{tabIds:m,setTabIds:c,currentIndex:y?d:V,hasPanels:f,setHasPanels:P,changeTabs:W,tabsListRef:l,isResponsive:o,setIsResponsive:q}},e.createElement("div",{className:z(["nds-tabs",{"nds-tabs--bordered":b}]),"data-testid":u},t))};a.List=R;a.Tab=O;a.Panel=k;try{a.displayName="Tabs",a.__docgenInfo={description:'Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)\nfor the "tabs" design pattern.\n\nThe `Tabs` component manages its own state, changing the visible tab panel based\non user events. Use the `onTabChange` callback to add any custom behaviors.',displayName:"Tabs",props:{children:{defaultValue:null,description:"Direct children of `Tabs` should be one of:\n`Tabs.List` or `Tabs.Panel`",name:"children",required:!0,type:{name:"ReactNode"}},defaultSelectedIndex:{defaultValue:{value:"0"},description:"Sets _default_ tab selection by index in source order",name:"defaultSelectedIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:{value:"null"},description:"Sets selected tab by index, making Tabs **fully controlled**.\nWhen using this prop, you must use the `onTabChange` callback\nto update the value of this prop to update the selected tab.",name:"selectedIndex",required:!1,type:{name:"number"}},onTabChange:{defaultValue:{value:"() => {}"},description:"Callback invoked with the index of the tab the user is moving selection to",name:"onTabChange",required:!1,type:{name:"(index: number) => void"}},hasBorder:{defaultValue:{value:"true"},description:"Shows bottom border when `true`",name:"hasBorder",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const $=t=>e.createElement(a,t,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆"))),L=$.bind({});L.args={onTabChange:()=>{}};const x=$.bind({});x.args={defaultSelectedIndex:1};const _=t=>e.createElement("div",{style:{display:"flex",width:200,flexDirection:"column"}},e.createElement(a,t,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"}),e.createElement(a.Tab,{label:"Bird",tabId:"bird"}),e.createElement(a.Tab,{label:"Cat",tabId:"cat"}),e.createElement(a.Tab,{label:"Dog",tabId:"dog"}),e.createElement(a.Tab,{label:"Snow leopard",tabId:"snowLeopard"}),e.createElement(a.Tab,{label:"My absolute favorite animal of all time",tabId:"penguin"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),e.createElement(a.Panel,{tabId:"bird"},e.createElement("div",{className:"padding--all--s"},"🐦🐦🐦")),e.createElement(a.Panel,{tabId:"cat"},e.createElement("div",{className:"padding--all--s"},"🐈🐈🐈")),e.createElement(a.Panel,{tabId:"dog"},e.createElement("div",{className:"padding--all--s"},"🐕🐕🐕")),e.createElement(a.Panel,{tabId:"snowLeopard"},e.createElement("div",{className:"padding--all--s"},"️❄️🐆")),e.createElement(a.Panel,{tabId:"penguin"},e.createElement("div",{className:"padding--all--s"},"️🐧🐧🐧")))),h=t=>e.createElement(a,t,e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));h.parameters={docs:{description:{story:"You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events."}}};const C=()=>e.createElement(a,{hasBorder:!1},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));C.parameters={docs:{description:{story:"You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already."}}};const E=()=>e.createElement(a,null,e.createElement(a.List,{xPadding:"l"},e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})));E.parameters={docs:{description:{story:"You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`."}}};const v=()=>{const[t,s]=n.useState(1);return e.createElement(a,{selectedIndex:t,onTabChange:d=>s(d)},e.createElement(a.List,null,e.createElement(a.Tab,{label:"Apples",tabId:"apple"}),e.createElement(a.Tab,{label:"Oranges",tabId:"orange"}),e.createElement(a.Tab,{label:"Pineapples",tabId:"pineapple"})),e.createElement(a.Panel,{tabId:"apple"},e.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),e.createElement(a.Panel,{tabId:"orange"},e.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),e.createElement(a.Panel,{tabId:"pineapple"},e.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")))};v.parameters={docs:{description:{story:"Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab."}}};const re={title:"Components/Tabs",component:a,subcomponents:{TabsList:R,TabsTab:O,TabsPanel:k}};_.__docgenInfo={description:"",methods:[],displayName:"ResponsiveTabs"};h.__docgenInfo={description:"",methods:[],displayName:"WithoutPanels"};C.__docgenInfo={description:"",methods:[],displayName:"WithoutBorder"};E.__docgenInfo={description:"",methods:[],displayName:"PaddedTabsList"};v.__docgenInfo={description:"",methods:[],displayName:"FullyControlledTabs"};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...L.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </div>`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};const de=["Overview","DefaultSelectedTab","ResponsiveTabs","WithoutPanels","WithoutBorder","PaddedTabsList","FullyControlledTabs"];export{x as DefaultSelectedTab,v as FullyControlledTabs,L as Overview,E as PaddedTabsList,_ as ResponsiveTabs,C as WithoutBorder,h as WithoutPanels,de as __namedExportsOrder,re as default};
