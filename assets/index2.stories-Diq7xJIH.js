import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BTUWID0V.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-C0-8EAoa.js";import{n as s,t as c}from"./IconButton-D_BZeUbe.js";var l,u,d=t((()=>{l=e(n()),u=(0,l.createContext)({tabIds:[],setTabIds:()=>{},currentIndex:0,hasPanels:!1,setHasPanels:()=>{},changeTabs:()=>{},tabsListRef:null,isResponsive:!1,setIsResponsive:()=>{},kind:`default`})})),f,p,m=t((()=>{r(),f=e(n()),s(),d(),p=({direction:e,onClick:t,show:n})=>{let{isResponsive:r,kind:a}=(0,f.useContext)(u),o=e===`left`?a===`segmented`?`chevron-left`:`arrow-left`:a===`segmented`?`chevron-right`:`arrow-right`;return r&&f.createElement(`div`,{className:`arrow-reponsive`},f.createElement(`div`,{className:i([`nds-tabs-arrow`,{"nds-tabs-arrow--visible":n}])},f.createElement(c,{onClick:t,name:o,kind:`action`})))};try{p.displayName=`Arrow`,p.__docgenInfo={description:``,displayName:`Arrow`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/Arrow.tsx`,methods:[],props:{direction:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`}],description:``,name:`direction`,parent:{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`},required:!0,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`}],description:``,name:`onClick`,parent:{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`},required:!1,tags:{},type:{name:`() => void`}},show:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`}],description:``,name:`show`,parent:{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),h,g,_,v,y,b=t((()=>{r(),h=e(n()),m(),a(),d(),g=()=>{},_=64,v=64,y=({children:e,xPadding:t=`none`})=>{let[n,r]=(0,h.useState)(!1),[a,s]=(0,h.useState)(!1),c=(0,h.useRef)(null),l=(0,h.useRef)(0),d=(0,h.useRef)(0),f=(0,h.useRef)(!1),{tabIds:m,setTabIds:y,changeTabs:b,currentIndex:x,hasPanels:S,tabsListRef:C,setIsResponsive:w,kind:T}=(0,h.useContext)(u),E=h.Children.toArray(e),D=()=>{if(!C.current||!c.current)return;let e=C.current,t=Array.from(e.children),n=parseFloat(getComputedStyle(e).columnGap)||0;l.current=t.reduce((e,t)=>e+t.offsetWidth,0)+Math.max(0,t.length-1)*n,d.current=c.current.clientWidth-_,O()},O=()=>{if(!C.current)return;let{scrollLeft:e}=C.current,t=l.current,n=d.current,i=f.current?t>n-v:t>n;f.current=i;let a=i&&e>1,o=i&&e<t-n-1;r(a),s(o),w(i)};(0,h.useEffect)(()=>{if(!c.current)return;let e=new ResizeObserver(D);return e.observe(c.current),D(),()=>e.disconnect()},[]),(0,h.useEffect)(()=>{let e=C.current;if(e)return e.addEventListener(`scroll`,O),()=>e.removeEventListener(`scroll`,O)},[]),(0,h.useEffect)(()=>{D()},[]),(0,h.useEffect)(()=>{D()},[E.length,x]),(0,h.useEffect)(()=>{m.length!==E.length&&y(E.map(e=>e.props.tabId))},[m,y,E]);let k=({key:e})=>{let t;switch(e){case`ArrowLeft`:t=x-1,t>=0&&b(m[t]);break;case`ArrowRight`:t=x+1,t<=m.length-1&&b(m[t]);break}},A=e=>{let t=getComputedStyle(e).getPropertyValue(`scroll-padding-inline-start`).trim(),n=parseFloat(t);return Number.isFinite(n)?n:0};return h.createElement(`div`,{ref:c},h.createElement(o,{gapSize:`none`,alignItems:`center`},n&&h.createElement(o.Item,{shrink:!0},h.createElement(p,{direction:`left`,onClick:()=>{let e=C.current,t=e.scrollLeft-e.clientWidth,n=A(e);e.scroll({left:t<=n?0:t,behavior:`smooth`})},show:n})),h.createElement(o.Item,null,h.createElement(`ul`,{ref:C,role:S?`tablist`:void 0,className:i([`nds-tabs-tabsList`,`nds-tabs-tabsList--${T}`,`list--reset`,`padding--x--${t}`,{"nds-tabs-tabsList--overflowLeft":n,"nds-tabs-tabsList--overflowRight":a}]),onKeyDown:S?k:g,tabIndex:S?0:void 0,"data-testid":`nds-tablist`},e)),a&&h.createElement(o.Item,{shrink:!0},h.createElement(p,{direction:`right`,onClick:()=>{let e=C.current;if(!e)return;let t=e.scrollWidth-e.clientWidth,n=e.scrollLeft+e.clientWidth,r=A(e);e.scroll({left:n>=t-r?t:n,behavior:`smooth`})},show:a}))))};try{y.displayName=`TabsList`,y.__docgenInfo={description:``,displayName:`TabsList`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/TabsList.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Children must be of type `Tabs.Tab`",name:`children`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!0,tags:{},type:{name:`ReactNode`}},xPadding:{defaultValue:{value:`none`},declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:`xPadding`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!1,tags:{},type:{name:`"xxs" | "xs" | "s" | "m" | "l" | "xl" | "none"`}}},tags:{}}}catch{}})),x,S,C=t((()=>{x=e(n()),d(),S=({children:e,tabId:t,testId:n})=>{let{currentIndex:r,tabIds:i,hasPanels:a,setHasPanels:o,isResponsive:s}=(0,x.useContext)(u),c=i[r];return(0,x.useEffect)(()=>{a||o(!0)},[a,o]),x.createElement(`div`,{className:`nds-tabs-panel`,tabIndex:0,role:`tabpanel`,id:`${t}-tabpanel`,"aria-labelledby":`${t}-tab`,hidden:t===c?void 0:!0,"data-testid":n},x.createElement(`div`,{className:s?`panel-responsive`:void 0},e))};try{S.displayName=`TabsPanel`,S.__docgenInfo={description:``,displayName:`TabsPanel`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/TabsPanel.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:`The content of the tab panel (any node type)`,name:`children`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`ReactNode`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),w,T,E=t((()=>{w=e(n()),d(),T=({label:e,tabId:t,testId:n,hasStatusIndicator:r})=>{let{currentIndex:i,tabIds:a,hasPanels:o,changeTabs:s,kind:c}=(0,w.useContext)(u),l=(0,w.useRef)(null),d=t===a[i];return w.createElement(`li`,{role:o?`tab`:void 0,"aria-selected":o?d.toString():void 0,"aria-controls":o?`${t}-tabpanel`:void 0,"data-selected":d||void 0,className:`nds-tabs-tabItem nds-tabs-tabItem--${c}${d?` nds-tabs-tabItem--selected`:``}`,ref:l},w.createElement(`button`,{className:`resetButton nds-tabs-button`,id:`${t}-tab`,tabIndex:o?-1:0,onClick:()=>{s(t)},"data-testid":n},r&&w.createElement(`span`,{className:`nds-tabs-statusIndicator`},w.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`6`,height:`6`,viewBox:`0 0 6 6`,fill:`none`,"aria-hidden":`true`,focusable:`false`},w.createElement(`circle`,{cx:`3`,cy:`3`,r:`3`,fill:`var(--color-successDark)`}))),w.createElement(`span`,null,e)))};try{T.displayName=`TabsTab`,T.__docgenInfo={description:``,displayName:`TabsTab`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/TabsTab.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Label of the tab button`,name:`label`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`string`}},hasStatusIndicator:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Optional prop to show an "update" notification dot in the tab`,name:`hasStatusIndicator`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),D,O,k,A=t((()=>{r(),D=e(n()),b(),C(),E(),d(),O=()=>{},k=({children:e,defaultSelectedIndex:t=0,selectedIndex:n=null,onTabChange:r=O,hasBorder:a=!0,kind:o=`default`,testId:s})=>{let c=(0,D.useRef)(),[l,d]=(0,D.useState)([]),[f,p]=(0,D.useState)(!1),[m,h]=(0,D.useState)(!1),[g,_]=(0,D.useState)(t),v=n!==null;return D.createElement(u.Provider,{value:{tabIds:l,setTabIds:d,currentIndex:v?n:g,hasPanels:f,setHasPanels:p,changeTabs:e=>{let t=l.indexOf(e);r(t),v||_(t)},tabsListRef:c,isResponsive:m,setIsResponsive:h,kind:o}},D.createElement(`div`,{className:i([`nds-tabs`,`nds-tabs--${o}`,{"nds-tabs--isResponsive":m,"nds-tabs--bordered":a&&o==="default"}]),"data-testid":s},e))},k.List=y,k.Tab=T,k.Panel=S;try{k.displayName=`Tabs`,k.__docgenInfo={description:`Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)
for the "tabs" design pattern.

The \`Tabs\` component manages its own state, changing the visible tab panel based
on user events. Use the \`onTabChange\` callback to add any custom behaviors.`,displayName:`Tabs`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:"Direct children of `Tabs` should be one of:\n`Tabs.List` or `Tabs.Panel`",name:`children`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!0,tags:{},type:{name:`ReactNode`}},defaultSelectedIndex:{defaultValue:{value:`0`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Sets _default_ tab selection by index in source order`,name:`defaultSelectedIndex`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`number`}},selectedIndex:{defaultValue:{value:`null`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Sets selected tab by index, making Tabs **fully controlled**.
When using this prop, you must use the \`onTabChange\` callback
to update the value of this prop to update the selected tab.`,name:`selectedIndex`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`number`}},onTabChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Callback invoked with the index of the tab the user is moving selection to`,name:`onTabChange`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`(index: number) => void`}},hasBorder:{defaultValue:{value:`true`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:'Shows bottom border when `true`.\nOnly applies to `kind="default"`.',name:`hasBorder`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{deprecated:`Will be removed in a future release.`},type:{name:`boolean`}},kind:{defaultValue:{value:`default`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Visual style variant of the tabs`,name:`kind`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`TabsKind`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{k.List.displayName=`Tabs.List`,k.List.__docgenInfo={description:``,displayName:`Tabs.List`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Children must be of type `Tabs.Tab`",name:`children`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!0,tags:{},type:{name:`ReactNode`}},xPadding:{defaultValue:{value:`none`},declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:`xPadding`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!1,tags:{},type:{name:`"xxs" | "xs" | "s" | "m" | "l" | "xl" | "none"`}}},tags:{}}}catch{}try{k.Tab.displayName=`Tabs.Tab`,k.Tab.__docgenInfo={description:``,displayName:`Tabs.Tab`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Label of the tab button`,name:`label`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`string`}},hasStatusIndicator:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Optional prop to show an "update" notification dot in the tab`,name:`hasStatusIndicator`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{k.Panel.displayName=`Tabs.Panel`,k.Panel.__docgenInfo={description:``,displayName:`Tabs.Panel`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:`The content of the tab panel (any node type)`,name:`children`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`ReactNode`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}}));function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(null,arguments)}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;t((()=>{M=e(n()),A(),b(),C(),E(),N=e=>M.createElement(k,e,M.createElement(k.List,null,M.createElement(k.Tab,{label:`Apples`,tabId:`apple`}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`}),M.createElement(k.Tab,{label:`Snow leopard`,tabId:`snowLeopard`})),M.createElement(k.Panel,{tabId:`apple`},M.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),M.createElement(k.Panel,{tabId:`orange`},M.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),M.createElement(k.Panel,{tabId:`pineapple`},M.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),M.createElement(k.Panel,{tabId:`snowLeopard`},M.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`))),P=N.bind({}),P.args={onTabChange:()=>{}},F=N.bind({}),F.args={defaultSelectedIndex:1},I=e=>M.createElement(`div`,{style:{display:`flex`,width:200,flexDirection:`column`}},M.createElement(k,e,M.createElement(k.List,null,M.createElement(k.Tab,{label:`Apples`,tabId:`apple`}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`}),M.createElement(k.Tab,{label:`Bird`,tabId:`bird`}),M.createElement(k.Tab,{label:`Cat`,tabId:`cat`}),M.createElement(k.Tab,{label:`Dog`,tabId:`dog`}),M.createElement(k.Tab,{label:`Snow leopard`,tabId:`snowLeopard`}),M.createElement(k.Tab,{label:`My absolute favorite animal of all time`,tabId:`penguin`})),M.createElement(k.Panel,{tabId:`apple`},M.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),M.createElement(k.Panel,{tabId:`orange`},M.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),M.createElement(k.Panel,{tabId:`pineapple`},M.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),M.createElement(k.Panel,{tabId:`bird`},M.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),M.createElement(k.Panel,{tabId:`cat`},M.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),M.createElement(k.Panel,{tabId:`dog`},M.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),M.createElement(k.Panel,{tabId:`snowLeopard`},M.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`)),M.createElement(k.Panel,{tabId:`penguin`},M.createElement(`div`,{className:`padding--all--s`},`️🐧🐧🐧`)))),L=e=>M.createElement(`div`,{style:{display:`flex`,width:300,flexDirection:`column`}},M.createElement(k,j({kind:`segmented`},e),M.createElement(k.List,null,M.createElement(k.Tab,{label:`Apples`,tabId:`apple`}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`}),M.createElement(k.Tab,{label:`Bird`,tabId:`bird`}),M.createElement(k.Tab,{label:`Cat`,tabId:`cat`}),M.createElement(k.Tab,{label:`Dog`,tabId:`dog`}),M.createElement(k.Tab,{label:`Snow leopard`,tabId:`snowLeopard`})),M.createElement(k.Panel,{tabId:`apple`},M.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),M.createElement(k.Panel,{tabId:`orange`},M.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),M.createElement(k.Panel,{tabId:`pineapple`},M.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),M.createElement(k.Panel,{tabId:`bird`},M.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),M.createElement(k.Panel,{tabId:`cat`},M.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),M.createElement(k.Panel,{tabId:`dog`},M.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),M.createElement(k.Panel,{tabId:`snowLeopard`},M.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`)))),R=e=>M.createElement(k,e,M.createElement(k.List,null,M.createElement(k.Tab,{label:`Apples`,tabId:`apple`}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`}))),R.parameters={docs:{description:{story:"You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events."}}},z=()=>M.createElement(k,{hasBorder:!1},M.createElement(k.List,null,M.createElement(k.Tab,{label:`Apples`,tabId:`apple`}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`}))),z.parameters={docs:{description:{story:"You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already."}}},B=()=>M.createElement(k,null,M.createElement(k.List,{xPadding:`l`},M.createElement(k.Tab,{label:`Apples`,tabId:`apple`}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`}))),B.parameters={docs:{description:{story:"You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`."}}},V=()=>{let[e,t]=(0,M.useState)(1);return M.createElement(k,{selectedIndex:e,onTabChange:e=>t(e)},M.createElement(k.List,null,M.createElement(k.Tab,{label:`Apples`,tabId:`apple`}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`})),M.createElement(k.Panel,{tabId:`apple`},M.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),M.createElement(k.Panel,{tabId:`orange`},M.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),M.createElement(k.Panel,{tabId:`pineapple`},M.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)))},V.parameters={docs:{description:{story:"Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab."}}},H=()=>M.createElement(k,{kind:`segmented`},M.createElement(k.List,null,M.createElement(k.Tab,{label:`Apples`,tabId:`apple`}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`})),M.createElement(k.Panel,{tabId:`apple`},M.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),M.createElement(k.Panel,{tabId:`orange`},M.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),M.createElement(k.Panel,{tabId:`pineapple`},M.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`))),H.parameters={docs:{description:{story:"The `segmented` kind renders tabs as a segmented control, useful for toggling between views within the same context."}}},U=()=>M.createElement(k,{kind:`segmented`},M.createElement(k.List,null,M.createElement(k.Tab,{label:`Apples`,tabId:`apple`,hasStatusIndicator:!0}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`,hasStatusIndicator:!0}),M.createElement(k.Tab,{label:`Very long label with indicator`,tabId:`test`,hasStatusIndicator:!0})),M.createElement(k.Panel,{tabId:`apple`},M.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),M.createElement(k.Panel,{tabId:`orange`},M.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),M.createElement(k.Panel,{tabId:`pineapple`},M.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),M.createElement(k.Panel,{tabId:`test`},M.createElement(`div`,{className:`padding--all--s`},`Test Content`))),U.parameters={docs:{description:{story:"Segmented tabs with `hasStatusIndicator` on select tabs to show an update notification dot."}}},W=()=>M.createElement(`div`,{className:`padding--all--m`,style:{display:`grid`,gap:`1.5rem`}},M.createElement(k,{kind:`segmented`},M.createElement(k.List,null,M.createElement(k.Tab,{label:`Apples`,tabId:`apple`}),M.createElement(k.Tab,{label:`Oranges`,tabId:`orange`}),M.createElement(k.Tab,{label:`Pineapples`,tabId:`pineapple`})),M.createElement(k.Panel,{tabId:`apple`},M.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),M.createElement(k.Panel,{tabId:`orange`},M.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),M.createElement(k.Panel,{tabId:`pineapple`},M.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`))),M.createElement(k,{kind:`segmented`,defaultSelectedIndex:1},M.createElement(k.List,null,M.createElement(k.Tab,{label:`Birds`,tabId:`bird`}),M.createElement(k.Tab,{label:`Cats`,tabId:`cat`}),M.createElement(k.Tab,{label:`Dogs`,tabId:`dog`}),M.createElement(k.Tab,{label:`Snow leopards`,tabId:`snowLeopard`})),M.createElement(k.Panel,{tabId:`bird`},M.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),M.createElement(k.Panel,{tabId:`cat`},M.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),M.createElement(k.Panel,{tabId:`dog`},M.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),M.createElement(k.Panel,{tabId:`snowLeopard`},M.createElement(`div`,{className:`padding--all--s`},`❄️🐆`))),M.createElement(k,{kind:`segmented`,defaultSelectedIndex:2},M.createElement(k.List,null,M.createElement(k.Tab,{label:`One`,tabId:`one`}),M.createElement(k.Tab,{label:`Two`,tabId:`two`}),M.createElement(k.Tab,{label:`Three`,tabId:`three`})),M.createElement(k.Panel,{tabId:`one`},M.createElement(`div`,{className:`padding--all--s`},`1️⃣`)),M.createElement(k.Panel,{tabId:`two`},M.createElement(`div`,{className:`padding--all--s`},`2️⃣`)),M.createElement(k.Panel,{tabId:`three`},M.createElement(`div`,{className:`padding--all--s`},`3️⃣`)))),W.parameters={docs:{description:{story:"Renders multiple `segmented` Tabs on the same page to verify that each instance's sliding pill resolves to its own selected tab. Since `anchor-name: --active` is declared at document scope, this story exists to confirm there is no cross-instance interference in practice (try changing the selected tab in each set and observe the pill)."}}},G={title:`Components/Tabs`,component:k,subcomponents:{TabsList:y,TabsTab:T,TabsPanel:S}},I.__docgenInfo={description:``,methods:[],displayName:`ResponsiveTabs`},L.__docgenInfo={description:``,methods:[],displayName:`ResponsiveSegmentedTabs`},R.__docgenInfo={description:``,methods:[],displayName:`WithoutPanels`},z.__docgenInfo={description:``,methods:[],displayName:`WithoutBorder`},B.__docgenInfo={description:``,methods:[],displayName:`PaddedTabsList`},V.__docgenInfo={description:``,methods:[],displayName:`FullyControlledTabs`},H.__docgenInfo={description:``,methods:[],displayName:`Segmented`},U.__docgenInfo={description:``,methods:[],displayName:`SegmentedWithStatusIndicator`},W.__docgenInfo={description:``,methods:[],displayName:`MultipleSegmentedTabs`},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => <div className="padding--all--m" style={{
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
  </div>`,...W.parameters?.docs?.source}}},K=[`Overview`,`DefaultSelectedTab`,`ResponsiveTabs`,`ResponsiveSegmentedTabs`,`WithoutPanels`,`WithoutBorder`,`PaddedTabsList`,`FullyControlledTabs`,`Segmented`,`SegmentedWithStatusIndicator`,`MultipleSegmentedTabs`]}))();export{F as DefaultSelectedTab,V as FullyControlledTabs,W as MultipleSegmentedTabs,P as Overview,B as PaddedTabsList,L as ResponsiveSegmentedTabs,I as ResponsiveTabs,H as Segmented,U as SegmentedWithStatusIndicator,z as WithoutBorder,R as WithoutPanels,K as __namedExportsOrder,G as default};