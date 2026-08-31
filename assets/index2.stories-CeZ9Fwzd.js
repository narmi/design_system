import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-CqDUv2Cy.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-TRtrslJB.js";import{n as s,t as c}from"./IconButton-41di4fMm.js";import{r as l,t as u}from"./Count-D2hh9tyc.js";var d,f,p=t((()=>{d=e(n()),f=(0,d.createContext)({tabIds:[],setTabIds:()=>{},currentIndex:0,hasPanels:!1,setHasPanels:()=>{},changeTabs:()=>{},tabsListRef:null,isResponsive:!1,setIsResponsive:()=>{},kind:`default`})})),m,h,g=t((()=>{r(),m=e(n()),s(),p(),h=({direction:e,onClick:t,show:n})=>{let{isResponsive:r,kind:a}=(0,m.useContext)(f),o=e===`left`?a===`segmented`?`chevron-left`:`arrow-left`:a===`segmented`?`chevron-right`:`arrow-right`;return r&&m.createElement(`div`,{className:`arrow-reponsive`},m.createElement(`div`,{className:i([`nds-tabs-arrow`,{"nds-tabs-arrow--visible":n}])},m.createElement(c,{onClick:t,name:o,kind:`action`})))};try{h.displayName=`Arrow`,h.__docgenInfo={description:``,displayName:`Arrow`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/Arrow.tsx`,methods:[],props:{direction:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`}],description:``,name:`direction`,parent:{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`},required:!0,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`}],description:``,name:`onClick`,parent:{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`},required:!1,tags:{},type:{name:`() => void`}},show:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`}],description:``,name:`show`,parent:{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),_,v,y,b,x,S=t((()=>{r(),_=e(n()),g(),a(),p(),v=()=>{},y=64,b=64,x=({children:e,xPadding:t=`none`})=>{let[n,r]=(0,_.useState)(!1),[a,s]=(0,_.useState)(!1),c=(0,_.useRef)(null),l=(0,_.useRef)(0),u=(0,_.useRef)(0),d=(0,_.useRef)(!1),{tabIds:p,setTabIds:m,changeTabs:g,currentIndex:x,hasPanels:S,tabsListRef:C,setIsResponsive:w,kind:T}=(0,_.useContext)(f),E=_.Children.toArray(e),D=()=>{if(!C.current||!c.current)return;let e=C.current,t=Array.from(e.children),n=parseFloat(getComputedStyle(e).columnGap)||0;l.current=t.reduce((e,t)=>e+t.offsetWidth,0)+Math.max(0,t.length-1)*n,u.current=c.current.clientWidth-y,O()},O=()=>{if(!C.current)return;let{scrollLeft:e}=C.current,t=l.current,n=u.current,i=d.current?t>n-b:t>n;d.current=i;let a=i&&e>1,o=i&&e<t-n-1;r(a),s(o),w(i)};(0,_.useEffect)(()=>{if(!c.current)return;let e=new ResizeObserver(D);return e.observe(c.current),D(),()=>e.disconnect()},[]),(0,_.useEffect)(()=>{let e=C.current;if(e)return e.addEventListener(`scroll`,O),()=>e.removeEventListener(`scroll`,O)},[]),(0,_.useEffect)(()=>{D()},[]),(0,_.useEffect)(()=>{D()},[E.length,x]),(0,_.useEffect)(()=>{p.length!==E.length&&m(E.map(e=>e.props.tabId))},[p,m,E]);let k=({key:e})=>{let t;switch(e){case`ArrowLeft`:t=x-1,t>=0&&g(p[t]);break;case`ArrowRight`:t=x+1,t<=p.length-1&&g(p[t]);break}},A=e=>{let t=getComputedStyle(e).getPropertyValue(`scroll-padding-inline-start`).trim(),n=parseFloat(t);return Number.isFinite(n)?n:0};return _.createElement(`div`,{ref:c},_.createElement(o,{gapSize:`none`,alignItems:`center`},n&&_.createElement(o.Item,{shrink:!0},_.createElement(h,{direction:`left`,onClick:()=>{let e=C.current,t=e.scrollLeft-e.clientWidth,n=A(e);e.scroll({left:t<=n?0:t,behavior:`smooth`})},show:n})),_.createElement(o.Item,null,_.createElement(`ul`,{ref:C,role:S?`tablist`:void 0,className:i([`nds-tabs-tabsList`,`nds-tabs-tabsList--${T}`,`list--reset`,`padding--x--${t}`,{"nds-tabs-tabsList--overflowLeft":n,"nds-tabs-tabsList--overflowRight":a}]),onKeyDown:S?k:v,tabIndex:S?0:void 0,"data-testid":`nds-tablist`},e)),a&&_.createElement(o.Item,{shrink:!0},_.createElement(h,{direction:`right`,onClick:()=>{let e=C.current;if(!e)return;let t=e.scrollWidth-e.clientWidth,n=e.scrollLeft+e.clientWidth,r=A(e);e.scroll({left:n>=t-r?t:n,behavior:`smooth`})},show:a}))))};try{x.displayName=`TabsList`,x.__docgenInfo={description:``,displayName:`TabsList`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/TabsList.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Children must be of type `Tabs.Tab`",name:`children`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!0,tags:{},type:{name:`ReactNode`}},xPadding:{defaultValue:{value:`none`},declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:`xPadding`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!1,tags:{},type:{name:`"xxs" | "xs" | "s" | "m" | "l" | "xl" | "none"`}}},tags:{}}}catch{}})),C,w,T=t((()=>{C=e(n()),p(),w=({children:e,tabId:t,testId:n})=>{let{currentIndex:r,tabIds:i,hasPanels:a,setHasPanels:o,isResponsive:s}=(0,C.useContext)(f),c=i[r];return(0,C.useEffect)(()=>{a||o(!0)},[a,o]),C.createElement(`div`,{className:`nds-tabs-panel`,tabIndex:0,role:`tabpanel`,id:`${t}-tabpanel`,"aria-labelledby":`${t}-tab`,hidden:t===c?void 0:!0,"data-testid":n},C.createElement(`div`,{className:s?`panel-responsive`:void 0},e))};try{w.displayName=`TabsPanel`,w.__docgenInfo={description:``,displayName:`TabsPanel`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/TabsPanel.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:`The content of the tab panel (any node type)`,name:`children`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`ReactNode`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),E,D,O=t((()=>{E=e(n()),p(),D=({label:e,tabId:t,testId:n,hasStatusIndicator:r,renderStartContent:i,renderEndContent:a})=>{let{currentIndex:o,tabIds:s,hasPanels:c,changeTabs:l,kind:u}=(0,E.useContext)(f),d=(0,E.useRef)(null),p=t===s[o];return E.createElement(`li`,{role:c?`tab`:void 0,"aria-selected":c?p.toString():void 0,"aria-controls":c?`${t}-tabpanel`:void 0,"data-selected":p||void 0,className:`nds-tabs-tabItem nds-tabs-tabItem--${u}${p?` nds-tabs-tabItem--selected`:``}`,ref:d},E.createElement(`button`,{className:`resetButton nds-tabs-button`,id:`${t}-tab`,tabIndex:c?-1:0,onClick:()=>{l(t)},"data-testid":n},(i||r)&&E.createElement(`span`,{className:`nds-tabs-startContent`},i&&i(p),r&&E.createElement(`span`,{className:`nds-tabs-statusIndicator`},E.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`6`,height:`6`,viewBox:`0 0 6 6`,fill:`none`,"aria-hidden":`true`,focusable:`false`},E.createElement(`circle`,{cx:`3`,cy:`3`,r:`3`,fill:`var(--color-successDark)`})))),E.createElement(`span`,{className:`nds-tabs-label`},e),a&&E.createElement(`span`,{className:`nds-tabs-endContent`},a(p))))};try{D.displayName=`TabsTab`,D.__docgenInfo={description:``,displayName:`TabsTab`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/TabsTab.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Label of the tab button`,name:`label`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`string`}},hasStatusIndicator:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Optional prop to show an "update" notification dot in the tab`,name:`hasStatusIndicator`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`boolean`}},renderStartContent:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Renders arbitrary content (e.g. an icon) at the inline-start of the tab,
before the label. Receives the tab's selected state.`,name:`renderStartContent`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`(isSelected: boolean) => ReactNode`}},renderEndContent:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Renders arbitrary content (e.g. a count) at the inline-end of the tab,
after the label. Receives the tab's selected state.`,name:`renderEndContent`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`(isSelected: boolean) => ReactNode`}}},tags:{}}}catch{}})),k,A,j,M=t((()=>{r(),k=e(n()),S(),T(),O(),p(),A=()=>{},j=({children:e,defaultSelectedIndex:t=0,selectedIndex:n=null,onTabChange:r=A,hasBorder:a=!0,kind:o=`default`,testId:s})=>{let c=(0,k.useRef)(),[l,u]=(0,k.useState)([]),[d,p]=(0,k.useState)(!1),[m,h]=(0,k.useState)(!1),[g,_]=(0,k.useState)(t),v=n!==null;return k.createElement(f.Provider,{value:{tabIds:l,setTabIds:u,currentIndex:v?n:g,hasPanels:d,setHasPanels:p,changeTabs:e=>{let t=l.indexOf(e);r(t),v||_(t)},tabsListRef:c,isResponsive:m,setIsResponsive:h,kind:o}},k.createElement(`div`,{className:i([`nds-tabs`,`nds-tabs--${o}`,{"nds-tabs--isResponsive":m,"nds-tabs--bordered":a&&o==="default"}]),"data-testid":s},e))},j.List=x,j.Tab=D,j.Panel=w;try{j.displayName=`Tabs`,j.__docgenInfo={description:`Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)
for the "tabs" design pattern.

The \`Tabs\` component manages its own state, changing the visible tab panel based
on user events. Use the \`onTabChange\` callback to add any custom behaviors.`,displayName:`Tabs`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:"Direct children of `Tabs` should be one of:\n`Tabs.List` or `Tabs.Panel`",name:`children`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!0,tags:{},type:{name:`ReactNode`}},defaultSelectedIndex:{defaultValue:{value:`0`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Sets _default_ tab selection by index in source order`,name:`defaultSelectedIndex`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`number`}},selectedIndex:{defaultValue:{value:`null`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Sets selected tab by index, making Tabs **fully controlled**.
When using this prop, you must use the \`onTabChange\` callback
to update the value of this prop to update the selected tab.`,name:`selectedIndex`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`number`}},onTabChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Callback invoked with the index of the tab the user is moving selection to`,name:`onTabChange`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`(index: number) => void`}},hasBorder:{defaultValue:{value:`true`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:'Shows bottom border when `true`.\nOnly applies to `kind="default"`.',name:`hasBorder`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{deprecated:`Will be removed in a future release.`},type:{name:`boolean`}},kind:{defaultValue:{value:`default`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Visual style variant of the tabs`,name:`kind`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`TabsKind`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{j.List.displayName=`Tabs.List`,j.List.__docgenInfo={description:``,displayName:`Tabs.List`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Children must be of type `Tabs.Tab`",name:`children`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!0,tags:{},type:{name:`ReactNode`}},xPadding:{defaultValue:{value:`none`},declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:`xPadding`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!1,tags:{},type:{name:`"xxs" | "xs" | "s" | "m" | "l" | "xl" | "none"`}}},tags:{}}}catch{}try{j.Tab.displayName=`Tabs.Tab`,j.Tab.__docgenInfo={description:``,displayName:`Tabs.Tab`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Label of the tab button`,name:`label`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`string`}},hasStatusIndicator:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Optional prop to show an "update" notification dot in the tab`,name:`hasStatusIndicator`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`boolean`}},renderStartContent:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Renders arbitrary content (e.g. an icon) at the inline-start of the tab,
before the label. Receives the tab's selected state.`,name:`renderStartContent`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`(isSelected: boolean) => ReactNode`}},renderEndContent:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Renders arbitrary content (e.g. a count) at the inline-end of the tab,
after the label. Receives the tab's selected state.`,name:`renderEndContent`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`(isSelected: boolean) => ReactNode`}}},tags:{}}}catch{}try{j.Panel.displayName=`Tabs.Panel`,j.Panel.__docgenInfo={description:``,displayName:`Tabs.Panel`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:`The content of the tab panel (any node type)`,name:`children`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`ReactNode`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}}));function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(null,arguments)}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;t((()=>{P=e(n()),M(),S(),T(),O(),l(),F=e=>P.createElement(j,e,P.createElement(j.List,null,P.createElement(j.Tab,{label:`Apples`,tabId:`apple`}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`}),P.createElement(j.Tab,{label:`Snow leopard`,tabId:`snowLeopard`})),P.createElement(j.Panel,{tabId:`apple`},P.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),P.createElement(j.Panel,{tabId:`orange`},P.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),P.createElement(j.Panel,{tabId:`pineapple`},P.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),P.createElement(j.Panel,{tabId:`snowLeopard`},P.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`))),I=F.bind({}),I.args={onTabChange:()=>{}},L=F.bind({}),L.args={defaultSelectedIndex:1},R=e=>P.createElement(`div`,{style:{display:`flex`,width:200,flexDirection:`column`}},P.createElement(j,e,P.createElement(j.List,null,P.createElement(j.Tab,{label:`Apples`,tabId:`apple`}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`}),P.createElement(j.Tab,{label:`Bird`,tabId:`bird`}),P.createElement(j.Tab,{label:`Cat`,tabId:`cat`}),P.createElement(j.Tab,{label:`Dog`,tabId:`dog`}),P.createElement(j.Tab,{label:`Snow leopard`,tabId:`snowLeopard`}),P.createElement(j.Tab,{label:`My absolute favorite animal of all time`,tabId:`penguin`})),P.createElement(j.Panel,{tabId:`apple`},P.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),P.createElement(j.Panel,{tabId:`orange`},P.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),P.createElement(j.Panel,{tabId:`pineapple`},P.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),P.createElement(j.Panel,{tabId:`bird`},P.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),P.createElement(j.Panel,{tabId:`cat`},P.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),P.createElement(j.Panel,{tabId:`dog`},P.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),P.createElement(j.Panel,{tabId:`snowLeopard`},P.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`)),P.createElement(j.Panel,{tabId:`penguin`},P.createElement(`div`,{className:`padding--all--s`},`️🐧🐧🐧`)))),z=e=>P.createElement(`div`,{style:{display:`flex`,width:300,flexDirection:`column`}},P.createElement(j,N({kind:`segmented`},e),P.createElement(j.List,null,P.createElement(j.Tab,{label:`Apples`,tabId:`apple`}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`}),P.createElement(j.Tab,{label:`Bird`,tabId:`bird`}),P.createElement(j.Tab,{label:`Cat`,tabId:`cat`}),P.createElement(j.Tab,{label:`Dog`,tabId:`dog`}),P.createElement(j.Tab,{label:`Snow leopard`,tabId:`snowLeopard`})),P.createElement(j.Panel,{tabId:`apple`},P.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),P.createElement(j.Panel,{tabId:`orange`},P.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),P.createElement(j.Panel,{tabId:`pineapple`},P.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),P.createElement(j.Panel,{tabId:`bird`},P.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),P.createElement(j.Panel,{tabId:`cat`},P.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),P.createElement(j.Panel,{tabId:`dog`},P.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),P.createElement(j.Panel,{tabId:`snowLeopard`},P.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`)))),B=e=>P.createElement(j,e,P.createElement(j.List,null,P.createElement(j.Tab,{label:`Apples`,tabId:`apple`}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`}))),B.parameters={docs:{description:{story:"You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events."}}},V=()=>P.createElement(j,{hasBorder:!1},P.createElement(j.List,null,P.createElement(j.Tab,{label:`Apples`,tabId:`apple`}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`}))),V.parameters={docs:{description:{story:"You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already."}}},H=()=>P.createElement(j,null,P.createElement(j.List,{xPadding:`l`},P.createElement(j.Tab,{label:`Apples`,tabId:`apple`}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`}))),H.parameters={docs:{description:{story:"You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`."}}},U=()=>{let[e,t]=(0,P.useState)(1);return P.createElement(j,{selectedIndex:e,onTabChange:e=>t(e)},P.createElement(j.List,null,P.createElement(j.Tab,{label:`Apples`,tabId:`apple`}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`})),P.createElement(j.Panel,{tabId:`apple`},P.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),P.createElement(j.Panel,{tabId:`orange`},P.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),P.createElement(j.Panel,{tabId:`pineapple`},P.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)))},U.parameters={docs:{description:{story:"Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab."}}},W=()=>P.createElement(j,{kind:`segmented`},P.createElement(j.List,null,P.createElement(j.Tab,{label:`Apples`,tabId:`apple`}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`})),P.createElement(j.Panel,{tabId:`apple`},P.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),P.createElement(j.Panel,{tabId:`orange`},P.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),P.createElement(j.Panel,{tabId:`pineapple`},P.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`))),W.parameters={docs:{description:{story:"The `segmented` kind renders tabs as a segmented control, useful for toggling between views within the same context."}}},G=()=>P.createElement(j,{kind:`segmented`},P.createElement(j.List,null,P.createElement(j.Tab,{label:`Apples`,tabId:`apple`,hasStatusIndicator:!0}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`,hasStatusIndicator:!0}),P.createElement(j.Tab,{label:`Very long label with indicator`,tabId:`test`,hasStatusIndicator:!0})),P.createElement(j.Panel,{tabId:`apple`},P.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),P.createElement(j.Panel,{tabId:`orange`},P.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),P.createElement(j.Panel,{tabId:`pineapple`},P.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),P.createElement(j.Panel,{tabId:`test`},P.createElement(`div`,{className:`padding--all--s`},`Test Content`))),G.parameters={docs:{description:{story:"Segmented tabs with `hasStatusIndicator` on select tabs to show an update notification dot."}}},K=()=>P.createElement(`div`,{className:`padding--all--m`,style:{display:`grid`,gap:`1.5rem`}},P.createElement(j,{kind:`segmented`},P.createElement(j.List,null,P.createElement(j.Tab,{label:`Apples`,tabId:`apple`}),P.createElement(j.Tab,{label:`Oranges`,tabId:`orange`}),P.createElement(j.Tab,{label:`Pineapples`,tabId:`pineapple`})),P.createElement(j.Panel,{tabId:`apple`},P.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),P.createElement(j.Panel,{tabId:`orange`},P.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),P.createElement(j.Panel,{tabId:`pineapple`},P.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`))),P.createElement(j,{kind:`segmented`,defaultSelectedIndex:1},P.createElement(j.List,null,P.createElement(j.Tab,{label:`Birds`,tabId:`bird`}),P.createElement(j.Tab,{label:`Cats`,tabId:`cat`}),P.createElement(j.Tab,{label:`Dogs`,tabId:`dog`}),P.createElement(j.Tab,{label:`Snow leopards`,tabId:`snowLeopard`})),P.createElement(j.Panel,{tabId:`bird`},P.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),P.createElement(j.Panel,{tabId:`cat`},P.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),P.createElement(j.Panel,{tabId:`dog`},P.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),P.createElement(j.Panel,{tabId:`snowLeopard`},P.createElement(`div`,{className:`padding--all--s`},`❄️🐆`))),P.createElement(j,{kind:`segmented`,defaultSelectedIndex:2},P.createElement(j.List,null,P.createElement(j.Tab,{label:`One`,tabId:`one`}),P.createElement(j.Tab,{label:`Two`,tabId:`two`}),P.createElement(j.Tab,{label:`Three`,tabId:`three`})),P.createElement(j.Panel,{tabId:`one`},P.createElement(`div`,{className:`padding--all--s`},`1️⃣`)),P.createElement(j.Panel,{tabId:`two`},P.createElement(`div`,{className:`padding--all--s`},`2️⃣`)),P.createElement(j.Panel,{tabId:`three`},P.createElement(`div`,{className:`padding--all--s`},`3️⃣`)))),K.parameters={docs:{description:{story:"Renders multiple `segmented` Tabs on the same page to verify that each instance's sliding pill resolves to its own selected tab. Since `anchor-name: --active` is declared at document scope, this story exists to confirm there is no cross-instance interference in practice (try changing the selected tab in each set and observe the pill)."}}},q=()=>P.createElement(`div`,{style:{display:`grid`,gap:`1.5rem`}},P.createElement(j,null,P.createElement(j.List,null,P.createElement(j.Tab,{label:`Inbox`,tabId:`inbox`,renderStartContent:()=>P.createElement(`span`,{className:`narmi-icon-mail`}),renderEndContent:e=>P.createElement(u,{value:8,kind:e?`theme`:`neutral`})}),P.createElement(j.Tab,{label:`Starred`,tabId:`starred`,renderStartContent:()=>P.createElement(`span`,{className:`narmi-icon-star`}),renderEndContent:e=>P.createElement(u,{value:2,kind:e?`theme`:`neutral`})}),P.createElement(j.Tab,{label:`Sent`,tabId:`sent`,renderStartContent:()=>P.createElement(`span`,{className:`narmi-icon-send`})})),P.createElement(j.Panel,{tabId:`inbox`},P.createElement(`div`,{className:`padding--all--s`},`Inbox`)),P.createElement(j.Panel,{tabId:`starred`},P.createElement(`div`,{className:`padding--all--s`},`Starred`)),P.createElement(j.Panel,{tabId:`sent`},P.createElement(`div`,{className:`padding--all--s`},`Sent`))),P.createElement(j,{kind:`segmented`},P.createElement(j.List,null,P.createElement(j.Tab,{label:`Inbox`,tabId:`inbox`,renderStartContent:()=>P.createElement(`span`,{className:`narmi-icon-mail`}),renderEndContent:e=>P.createElement(u,{value:8,kind:e?`theme`:`neutral`})}),P.createElement(j.Tab,{label:`Starred`,tabId:`starred`,renderStartContent:()=>P.createElement(`span`,{className:`narmi-icon-star`}),renderEndContent:e=>P.createElement(u,{value:2,kind:e?`theme`:`neutral`})}),P.createElement(j.Tab,{label:`Sent`,tabId:`sent`,renderStartContent:()=>P.createElement(`span`,{className:`narmi-icon-send`})})),P.createElement(j.Panel,{tabId:`inbox`},P.createElement(`div`,{className:`padding--all--s`},`Inbox`)),P.createElement(j.Panel,{tabId:`starred`},P.createElement(`div`,{className:`padding--all--s`},`Starred`)),P.createElement(j.Panel,{tabId:`sent`},P.createElement(`div`,{className:`padding--all--s`},`Sent`)))),q.parameters={docs:{description:{story:"Use `renderStartContent` and `renderEndContent` on `Tabs.Tab` to render arbitrary inline-start / inline-end content such as an icon or a `Count`. Each render prop receives the tab's `isSelected` state, so content can respond to selection. Shown here with both the `default` and `segmented` kinds."}}},J={title:`Components/Tabs`,component:j,subcomponents:{TabsList:x,TabsTab:D,TabsPanel:w}},R.__docgenInfo={description:``,methods:[],displayName:`ResponsiveTabs`},z.__docgenInfo={description:``,methods:[],displayName:`ResponsiveSegmentedTabs`},B.__docgenInfo={description:``,methods:[],displayName:`WithoutPanels`},V.__docgenInfo={description:``,methods:[],displayName:`WithoutBorder`},H.__docgenInfo={description:``,methods:[],displayName:`PaddedTabsList`},U.__docgenInfo={description:``,methods:[],displayName:`FullyControlledTabs`},W.__docgenInfo={description:``,methods:[],displayName:`Segmented`},G.__docgenInfo={description:``,methods:[],displayName:`SegmentedWithStatusIndicator`},K.__docgenInfo={description:``,methods:[],displayName:`MultipleSegmentedTabs`},q.__docgenInfo={description:``,methods:[],displayName:`WithCustomLabelContent`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => <div className="padding--all--m" style={{
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
  </div>`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "grid",
  gap: "1.5rem"
}}>
    <Tabs>
      <Tabs.List>
        <Tabs.Tab label="Inbox" tabId="inbox" renderStartContent={() => <span className="narmi-icon-mail" />} renderEndContent={isSelected => <Count value={8} kind={isSelected ? "theme" : "neutral"} />} />
        <Tabs.Tab label="Starred" tabId="starred" renderStartContent={() => <span className="narmi-icon-star" />} renderEndContent={isSelected => <Count value={2} kind={isSelected ? "theme" : "neutral"} />} />
        <Tabs.Tab label="Sent" tabId="sent" renderStartContent={() => <span className="narmi-icon-send" />} />
      </Tabs.List>
      <Tabs.Panel tabId="inbox">
        <div className="padding--all--s">Inbox</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="starred">
        <div className="padding--all--s">Starred</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="sent">
        <div className="padding--all--s">Sent</div>
      </Tabs.Panel>
    </Tabs>

    <Tabs kind="segmented">
      <Tabs.List>
        <Tabs.Tab label="Inbox" tabId="inbox" renderStartContent={() => <span className="narmi-icon-mail" />} renderEndContent={isSelected => <Count value={8} kind={isSelected ? "theme" : "neutral"} />} />
        <Tabs.Tab label="Starred" tabId="starred" renderStartContent={() => <span className="narmi-icon-star" />} renderEndContent={isSelected => <Count value={2} kind={isSelected ? "theme" : "neutral"} />} />
        <Tabs.Tab label="Sent" tabId="sent" renderStartContent={() => <span className="narmi-icon-send" />} />
      </Tabs.List>
      <Tabs.Panel tabId="inbox">
        <div className="padding--all--s">Inbox</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="starred">
        <div className="padding--all--s">Starred</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="sent">
        <div className="padding--all--s">Sent</div>
      </Tabs.Panel>
    </Tabs>
  </div>`,...q.parameters?.docs?.source}}},Y=[`Overview`,`DefaultSelectedTab`,`ResponsiveTabs`,`ResponsiveSegmentedTabs`,`WithoutPanels`,`WithoutBorder`,`PaddedTabsList`,`FullyControlledTabs`,`Segmented`,`SegmentedWithStatusIndicator`,`MultipleSegmentedTabs`,`WithCustomLabelContent`]}))();export{L as DefaultSelectedTab,U as FullyControlledTabs,K as MultipleSegmentedTabs,I as Overview,H as PaddedTabsList,z as ResponsiveSegmentedTabs,R as ResponsiveTabs,W as Segmented,G as SegmentedWithStatusIndicator,q as WithCustomLabelContent,V as WithoutBorder,B as WithoutPanels,Y as __namedExportsOrder,J as default};