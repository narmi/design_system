import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DTOQovOy.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-CVr7SDYb.js";import{n as s,t as c}from"./IconButton-C9De5QbI.js";import{r as l,t as u}from"./Count-DNc-SQXJ.js";var d,f,p=t((()=>{d=e(n()),f=(0,d.createContext)({tabIds:[],setTabIds:()=>{},currentIndex:0,hasPanels:!1,setHasPanels:()=>{},changeTabs:()=>{},tabsListRef:null,isResponsive:!1,setIsResponsive:()=>{},kind:`default`})})),m,h,ee=t((()=>{r(),m=e(n()),s(),p(),h=({direction:e,onClick:t,show:n})=>{let{isResponsive:r,kind:a}=(0,m.useContext)(f),o=e===`left`,s=o?a===`segmented`?`chevron-left`:`arrow-left`:a===`segmented`?`chevron-right`:`arrow-right`;return r&&m.createElement(`div`,{className:`arrow-reponsive`},m.createElement(`div`,{className:i([`nds-tabs-arrow`,{"nds-tabs-arrow--visible":n}])},m.createElement(c,{onClick:t,name:s,kind:`action`,disabled:!n,label:o?`Scroll tabs left`:`Scroll tabs right`})))};try{h.displayName=`Arrow`,h.__docgenInfo={description:``,displayName:`Arrow`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/Arrow.tsx`,methods:[],props:{direction:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`}],description:``,name:`direction`,parent:{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`},required:!0,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`}],description:``,name:`onClick`,parent:{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`},required:!1,tags:{},type:{name:`() => void`}},show:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`}],description:``,name:`show`,parent:{fileName:`design_system/src/Tabs/Arrow.tsx`,name:`ArrowProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),g,_,te,ne,re,v,y=t((()=>{r(),g=e(n()),ee(),a(),p(),_=()=>{},te=64,ne=64,re=1,v=({children:e,xPadding:t=`none`})=>{let[n,r]=(0,g.useState)(!1),[a,s]=(0,g.useState)(!1),c=(0,g.useRef)(null),l=(0,g.useRef)(0),u=(0,g.useRef)(0),d=(0,g.useRef)(!1),p=(0,g.useRef)(null),{tabIds:m,setTabIds:ee,changeTabs:v,currentIndex:y,hasPanels:b,tabsListRef:x,isResponsive:S,setIsResponsive:C,kind:w}=(0,g.useContext)(f),T=g.Children.toArray(e),E=()=>{if(!x.current||!c.current)return;let e=x.current,t=Array.from(e.children),n=parseFloat(getComputedStyle(e).columnGap)||0;l.current=t.reduce((e,t)=>e+t.offsetWidth,0)+Math.max(0,t.length-1)*n,u.current=c.current.clientWidth-te,D()},D=()=>{let e=x.current;if(!e)return;let t=l.current,n=u.current,i=d.current?t>n-ne:t>n;d.current=i;let a=e.scrollWidth-e.clientWidth,o=e.scrollLeft<=re,c=e.scrollLeft>=a-re;r(i&&!o),s(i&&!c),C(i)},O=()=>{if(typeof requestAnimationFrame!=`function`){D();return}p.current===null&&(p.current=requestAnimationFrame(()=>{p.current=null,D()}))};return(0,g.useEffect)(()=>{if(!c.current)return;let e=new ResizeObserver(E);return e.observe(c.current),x.current&&e.observe(x.current),E(),()=>e.disconnect()},[]),(0,g.useEffect)(()=>{let e=x.current;if(e)return e.addEventListener(`scroll`,O),()=>{e.removeEventListener(`scroll`,O),p.current!==null&&cancelAnimationFrame(p.current)}},[]),(0,g.useEffect)(()=>{E()},[]),(0,g.useEffect)(()=>{E()},[T.length,y]),(0,g.useEffect)(()=>{m.length!==T.length&&ee(T.map(e=>e.props.tabId))},[m,ee,T]),g.createElement(`div`,{ref:c},g.createElement(o,{gapSize:`none`,alignItems:`center`},S&&g.createElement(o.Item,{shrink:!0},g.createElement(h,{direction:`left`,onClick:()=>{let e=x.current;e&&e.scrollBy({left:-e.clientWidth,behavior:`smooth`})},show:n})),g.createElement(o.Item,null,g.createElement(`ul`,{ref:x,role:b?`tablist`:void 0,className:i([`nds-tabs-tabsList`,`nds-tabs-tabsList--${w}`,`list--reset`,`padding--x--${t}`,{"nds-tabs-tabsList--overflowLeft":n,"nds-tabs-tabsList--overflowRight":a}]),onKeyDown:b?({key:e})=>{let t;switch(e){case`ArrowLeft`:t=y-1,t>=0&&v(m[t]);break;case`ArrowRight`:t=y+1,t<=m.length-1&&v(m[t]);break}}:_,tabIndex:b?0:void 0,"data-testid":`nds-tablist`},e)),S&&g.createElement(o.Item,{shrink:!0},g.createElement(h,{direction:`right`,onClick:()=>{let e=x.current;e&&e.scrollBy({left:e.clientWidth,behavior:`smooth`})},show:a}))))};try{v.displayName=`TabsList`,v.__docgenInfo={description:``,displayName:`TabsList`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/TabsList.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Children must be of type `Tabs.Tab`",name:`children`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!0,tags:{},type:{name:`ReactNode`}},xPadding:{defaultValue:{value:`none`},declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:`xPadding`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!1,tags:{},type:{name:`"xxs" | "xs" | "s" | "m" | "l" | "xl" | "none"`}}},tags:{}}}catch{}})),b,x,S=t((()=>{b=e(n()),p(),x=({children:e,tabId:t,testId:n})=>{let{currentIndex:r,tabIds:i,hasPanels:a,setHasPanels:o,isResponsive:s}=(0,b.useContext)(f),c=i[r];return(0,b.useEffect)(()=>{a||o(!0)},[a,o]),b.createElement(`div`,{className:`nds-tabs-panel`,tabIndex:0,role:`tabpanel`,id:`${t}-tabpanel`,"aria-labelledby":`${t}-tab`,hidden:t===c?void 0:!0,"data-testid":n},b.createElement(`div`,{className:s?`panel-responsive`:void 0},e))};try{x.displayName=`TabsPanel`,x.__docgenInfo={description:``,displayName:`TabsPanel`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/TabsPanel.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:`The content of the tab panel (any node type)`,name:`children`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`ReactNode`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),C,w,T=t((()=>{C=e(n()),p(),w=({label:e,tabId:t,testId:n,hasStatusIndicator:r,renderStartContent:i,renderEndContent:a})=>{let{currentIndex:o,tabIds:s,hasPanels:c,changeTabs:l,kind:u}=(0,C.useContext)(f),d=(0,C.useRef)(null),p=t===s[o];return C.createElement(`li`,{role:c?`tab`:void 0,"aria-selected":c?p.toString():void 0,"aria-controls":c?`${t}-tabpanel`:void 0,"data-selected":p||void 0,className:`nds-tabs-tabItem nds-tabs-tabItem--${u}${p?` nds-tabs-tabItem--selected`:``}`,ref:d},C.createElement(`button`,{className:`resetButton nds-tabs-button`,id:`${t}-tab`,tabIndex:c?-1:0,onClick:()=>{l(t)},"data-testid":n},(i||r)&&C.createElement(`span`,{className:`nds-tabs-startContent`},i&&i(p),r&&C.createElement(`span`,{className:`nds-tabs-statusIndicator`},C.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`6`,height:`6`,viewBox:`0 0 6 6`,fill:`none`,"aria-hidden":`true`,focusable:`false`},C.createElement(`circle`,{cx:`3`,cy:`3`,r:`3`,fill:`var(--color-successDark)`})))),C.createElement(`span`,{className:`nds-tabs-label`},e),a&&C.createElement(`span`,{className:`nds-tabs-endContent`},a(p))))};try{w.displayName=`TabsTab`,w.__docgenInfo={description:``,displayName:`TabsTab`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/TabsTab.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Label of the tab button`,name:`label`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`string`}},hasStatusIndicator:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Optional prop to show an "update" notification dot in the tab`,name:`hasStatusIndicator`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`boolean`}},renderStartContent:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Renders arbitrary content (e.g. an icon) at the inline-start of the tab,
before the label. Receives the tab's selected state.`,name:`renderStartContent`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`(isSelected: boolean) => ReactNode`}},renderEndContent:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Renders arbitrary content (e.g. a count) at the inline-end of the tab,
after the label. Receives the tab's selected state.`,name:`renderEndContent`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`(isSelected: boolean) => ReactNode`}}},tags:{}}}catch{}})),E,D,O,ie=t((()=>{r(),E=e(n()),y(),S(),T(),p(),D=()=>{},O=({children:e,defaultSelectedIndex:t=0,selectedIndex:n=null,onTabChange:r=D,hasBorder:a=!0,kind:o=`default`,testId:s})=>{let c=(0,E.useRef)(),[l,u]=(0,E.useState)([]),[d,p]=(0,E.useState)(!1),[m,h]=(0,E.useState)(!1),[ee,g]=(0,E.useState)(t),_=n!==null;return E.createElement(f.Provider,{value:{tabIds:l,setTabIds:u,currentIndex:_?n:ee,hasPanels:d,setHasPanels:p,changeTabs:e=>{let t=l.indexOf(e);r(t),_||g(t)},tabsListRef:c,isResponsive:m,setIsResponsive:h,kind:o}},E.createElement(`div`,{className:i([`nds-tabs`,`nds-tabs--${o}`,{"nds-tabs--isResponsive":m,"nds-tabs--bordered":a&&o==="default"}]),"data-testid":s},e))},O.List=v,O.Tab=w,O.Panel=x;try{O.displayName=`Tabs`,O.__docgenInfo={description:`Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)
for the "tabs" design pattern.

The \`Tabs\` component manages its own state, changing the visible tab panel based
on user events. Use the \`onTabChange\` callback to add any custom behaviors.`,displayName:`Tabs`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:"Direct children of `Tabs` should be one of:\n`Tabs.List` or `Tabs.Panel`",name:`children`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!0,tags:{},type:{name:`ReactNode`}},defaultSelectedIndex:{defaultValue:{value:`0`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Sets _default_ tab selection by index in source order`,name:`defaultSelectedIndex`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`number`}},selectedIndex:{defaultValue:{value:`null`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Sets selected tab by index, making Tabs **fully controlled**.
When using this prop, you must use the \`onTabChange\` callback
to update the value of this prop to update the selected tab.`,name:`selectedIndex`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`number`}},onTabChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Callback invoked with the index of the tab the user is moving selection to`,name:`onTabChange`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`(index: number) => void`}},hasBorder:{defaultValue:{value:`true`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:'Shows bottom border when `true`.\nOnly applies to `kind="default"`.',name:`hasBorder`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{deprecated:`Will be removed in a future release.`},type:{name:`boolean`}},kind:{defaultValue:{value:`default`},declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:`Visual style variant of the tabs`,name:`kind`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`TabsKind`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/index.tsx`,name:`TabsProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{O.List.displayName=`Tabs.List`,O.List.__docgenInfo={description:``,displayName:`Tabs.List`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Children must be of type `Tabs.Tab`",name:`children`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!0,tags:{},type:{name:`ReactNode`}},xPadding:{defaultValue:{value:`none`},declarations:[{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`}],description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:`xPadding`,parent:{fileName:`design_system/src/Tabs/TabsList.tsx`,name:`TabsListProps`},required:!1,tags:{},type:{name:`"xxs" | "xs" | "s" | "m" | "l" | "xl" | "none"`}}},tags:{}}}catch{}try{O.Tab.displayName=`Tabs.Tab`,O.Tab.__docgenInfo={description:``,displayName:`Tabs.Tab`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Label of the tab button`,name:`label`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`string`}},hasStatusIndicator:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Optional prop to show an "update" notification dot in the tab`,name:`hasStatusIndicator`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`boolean`}},renderStartContent:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Renders arbitrary content (e.g. an icon) at the inline-start of the tab,
before the label. Receives the tab's selected state.`,name:`renderStartContent`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`(isSelected: boolean) => ReactNode`}},renderEndContent:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`}],description:`Renders arbitrary content (e.g. a count) at the inline-end of the tab,
after the label. Receives the tab's selected state.`,name:`renderEndContent`,parent:{fileName:`design_system/src/Tabs/TabsTab.tsx`,name:`TabsTabProps`},required:!1,tags:{},type:{name:`(isSelected: boolean) => ReactNode`}}},tags:{}}}catch{}try{O.Panel.displayName=`Tabs.Panel`,O.Panel.__docgenInfo={description:``,displayName:`Tabs.Panel`,filePath:`/home/runner/work/design_system/design_system/src/Tabs/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:`The content of the tab panel (any node type)`,name:`children`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`ReactNode`}},tabId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:`tabId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!0,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Tabs/TabsPanel.tsx`,name:`TabsPanelProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}}));function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae.apply(null,arguments)}var k,A,oe,se,j,M,N,P,F,ce,I,le,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ue,de;t((()=>{k=e(n()),ie(),y(),S(),T(),l(),{expect:A,waitFor:oe}=__STORYBOOK_MODULE_TEST__,se=e=>k.createElement(O,e,k.createElement(O.List,null,k.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}),k.createElement(O.Tab,{label:`Snow leopard`,tabId:`snowLeopard`})),k.createElement(O.Panel,{tabId:`apple`},k.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),k.createElement(O.Panel,{tabId:`orange`},k.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),k.createElement(O.Panel,{tabId:`pineapple`},k.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),k.createElement(O.Panel,{tabId:`snowLeopard`},k.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`))),j=se.bind({}),j.args={onTabChange:()=>{}},M=se.bind({}),M.args={defaultSelectedIndex:1},N=e=>k.createElement(`div`,{style:{display:`flex`,width:200,flexDirection:`column`}},k.createElement(O,e,k.createElement(O.List,null,k.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}),k.createElement(O.Tab,{label:`Bird`,tabId:`bird`}),k.createElement(O.Tab,{label:`Cat`,tabId:`cat`}),k.createElement(O.Tab,{label:`Dog`,tabId:`dog`}),k.createElement(O.Tab,{label:`Snow leopard`,tabId:`snowLeopard`}),k.createElement(O.Tab,{label:`My absolute favorite animal of all time`,tabId:`penguin`})),k.createElement(O.Panel,{tabId:`apple`},k.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),k.createElement(O.Panel,{tabId:`orange`},k.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),k.createElement(O.Panel,{tabId:`pineapple`},k.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),k.createElement(O.Panel,{tabId:`bird`},k.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),k.createElement(O.Panel,{tabId:`cat`},k.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),k.createElement(O.Panel,{tabId:`dog`},k.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),k.createElement(O.Panel,{tabId:`snowLeopard`},k.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`)),k.createElement(O.Panel,{tabId:`penguin`},k.createElement(`div`,{className:`padding--all--s`},`️🐧🐧🐧`)))),P=({width:e=360,...t})=>k.createElement(`div`,{style:{display:`flex`,width:e,flexDirection:`column`}},k.createElement(O,t,k.createElement(O.List,null,k.createElement(O.Tab,{label:`ACH transfer`,tabId:`achTransfer`}),k.createElement(O.Tab,{label:`ACH send`,tabId:`achSend`}),k.createElement(O.Tab,{label:`Instant`,tabId:`instant`}),k.createElement(O.Tab,{label:`Domestic wires`,tabId:`domesticWires`}),k.createElement(O.Tab,{label:`International wires`,tabId:`internationalWires`})),k.createElement(O.Panel,{tabId:`achTransfer`},k.createElement(`div`,{className:`padding--all--s`},`ACH transfer limits`)),k.createElement(O.Panel,{tabId:`achSend`},k.createElement(`div`,{className:`padding--all--s`},`ACH send limits`)),k.createElement(O.Panel,{tabId:`instant`},k.createElement(`div`,{className:`padding--all--s`},`Instant limits`)),k.createElement(O.Panel,{tabId:`domesticWires`},k.createElement(`div`,{className:`padding--all--s`},`Domestic wire limits`)),k.createElement(O.Panel,{tabId:`internationalWires`},k.createElement(`div`,{className:`padding--all--s`},`International wire limits`)))),F=e=>k.createElement(P,e),F.parameters={docs:{description:{story:"Reproduces the Manage Users / Limits scenario: default-variant tabs that overflow and end with a long label ('International wires'). Use the right arrow to page to the end and confirm the final tab is fully visible rather than clipped under the fade. The fade clears because start/end detection reads live scroll metrics; resting alignment is CSS `scroll-snap-type: x proximity`. jsdom implements neither, so the interaction tests below cover it in a real browser."}}},ce=1,I=e=>new Promise(t=>{let n=e.scrollLeft,r=0,i=()=>{if(e.scrollLeft===n){if(r+=1,r>=3){t();return}}else r=0,n=e.scrollLeft;requestAnimationFrame(i)};requestAnimationFrame(i)}),le=e=>e.findByRole(`tablist`),L=e=>e.getByRole(`button`,{name:`Scroll tabs left`}),R=e=>e.getByRole(`button`,{name:`Scroll tabs right`}),z=async e=>(await oe(()=>A(R(e)).toBeEnabled()),le(e)),B=async(e,t,n)=>{for(let r=0;r<10;r+=1){if(R(e).disabled)return;await t.click(R(e)),await I(n)}throw Error(`Right arrow never became disabled; the end was not reached`)},V={name:`Interaction: Last tab is fully visible at the end`,render:()=>k.createElement(P,null),play:async({canvas:e,userEvent:t})=>{let n=await z(e);await B(e,t,n),A(n).not.toHaveClass(`nds-tabs-tabsList--overflowRight`),A(e.getByRole(`tab`,{name:`International wires`}).getBoundingClientRect().right).toBeLessThanOrEqual(n.getBoundingClientRect().right+ce)}},H={name:`Interaction: Arrow state tracks scroll limits`,render:()=>k.createElement(P,null),play:async({canvas:e,userEvent:t})=>{let n=await z(e);for(A(L(e)).toBeDisabled(),A(R(e)).toBeEnabled(),A(n).not.toHaveClass(`nds-tabs-tabsList--overflowLeft`),A(n).toHaveClass(`nds-tabs-tabsList--overflowRight`),await t.click(R(e)),await I(n),A(n.scrollLeft).toBeGreaterThan(0),A(L(e)).toBeEnabled(),A(n).toHaveClass(`nds-tabs-tabsList--overflowLeft`),await B(e,t,n),A(R(e)).toBeDisabled(),A(L(e)).toBeEnabled(),A(n).not.toHaveClass(`nds-tabs-tabsList--overflowRight`),A(n).toHaveClass(`nds-tabs-tabsList--overflowLeft`);!L(e).disabled;)await t.click(L(e)),await I(n);A(n.scrollLeft).toBeLessThanOrEqual(ce),A(n).not.toHaveClass(`nds-tabs-tabsList--overflowLeft`)}},U={name:`Interaction: Tab list width is stable while paging`,render:()=>k.createElement(P,null),play:async({canvas:e,userEvent:t})=>{let n=await z(e),r=n.clientWidth;await t.click(R(e)),await I(n),A(n.clientWidth).toBe(r),await B(e,t,n),A(n.clientWidth).toBe(r),A(L(e)).toBeInTheDocument(),A(R(e)).toBeInTheDocument()}},W={name:`Interaction: Non-overflowing tabs render no arrows`,render:()=>k.createElement(P,{width:900}),play:async({canvas:e})=>{let t=await le(e);await oe(()=>A(e.queryByRole(`button`,{name:`Scroll tabs right`})).not.toBeInTheDocument()),A(e.queryByRole(`button`,{name:`Scroll tabs left`})).not.toBeInTheDocument(),A(t).not.toHaveClass(`nds-tabs-tabsList--overflowLeft`),A(t).not.toHaveClass(`nds-tabs-tabsList--overflowRight`)}},G=e=>k.createElement(`div`,{style:{display:`flex`,width:300,flexDirection:`column`}},k.createElement(O,ae({kind:`segmented`},e),k.createElement(O.List,null,k.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}),k.createElement(O.Tab,{label:`Bird`,tabId:`bird`}),k.createElement(O.Tab,{label:`Cat`,tabId:`cat`}),k.createElement(O.Tab,{label:`Dog`,tabId:`dog`}),k.createElement(O.Tab,{label:`Snow leopard`,tabId:`snowLeopard`})),k.createElement(O.Panel,{tabId:`apple`},k.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),k.createElement(O.Panel,{tabId:`orange`},k.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),k.createElement(O.Panel,{tabId:`pineapple`},k.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),k.createElement(O.Panel,{tabId:`bird`},k.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),k.createElement(O.Panel,{tabId:`cat`},k.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),k.createElement(O.Panel,{tabId:`dog`},k.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),k.createElement(O.Panel,{tabId:`snowLeopard`},k.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`)))),K=e=>k.createElement(O,e,k.createElement(O.List,null,k.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}))),K.parameters={docs:{description:{story:"You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events."}}},q=()=>k.createElement(O,{hasBorder:!1},k.createElement(O.List,null,k.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}))),q.parameters={docs:{description:{story:"You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already."}}},J=()=>k.createElement(O,null,k.createElement(O.List,{xPadding:`l`},k.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}))),J.parameters={docs:{description:{story:"You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`."}}},Y=()=>{let[e,t]=(0,k.useState)(1);return k.createElement(O,{selectedIndex:e,onTabChange:e=>t(e)},k.createElement(O.List,null,k.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`})),k.createElement(O.Panel,{tabId:`apple`},k.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),k.createElement(O.Panel,{tabId:`orange`},k.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),k.createElement(O.Panel,{tabId:`pineapple`},k.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)))},Y.parameters={docs:{description:{story:"Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab."}}},X=()=>k.createElement(O,{kind:`segmented`},k.createElement(O.List,null,k.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`})),k.createElement(O.Panel,{tabId:`apple`},k.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),k.createElement(O.Panel,{tabId:`orange`},k.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),k.createElement(O.Panel,{tabId:`pineapple`},k.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`))),X.parameters={docs:{description:{story:"The `segmented` kind renders tabs as a segmented control, useful for toggling between views within the same context."}}},Z=()=>k.createElement(O,{kind:`segmented`},k.createElement(O.List,null,k.createElement(O.Tab,{label:`Apples`,tabId:`apple`,hasStatusIndicator:!0}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`,hasStatusIndicator:!0}),k.createElement(O.Tab,{label:`Very long label with indicator`,tabId:`test`,hasStatusIndicator:!0})),k.createElement(O.Panel,{tabId:`apple`},k.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),k.createElement(O.Panel,{tabId:`orange`},k.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),k.createElement(O.Panel,{tabId:`pineapple`},k.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),k.createElement(O.Panel,{tabId:`test`},k.createElement(`div`,{className:`padding--all--s`},`Test Content`))),Z.parameters={docs:{description:{story:"Segmented tabs with `hasStatusIndicator` on select tabs to show an update notification dot."}}},Q=()=>k.createElement(`div`,{className:`padding--all--m`,style:{display:`grid`,gap:`1.5rem`}},k.createElement(O,{kind:`segmented`},k.createElement(O.List,null,k.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),k.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),k.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`})),k.createElement(O.Panel,{tabId:`apple`},k.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),k.createElement(O.Panel,{tabId:`orange`},k.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),k.createElement(O.Panel,{tabId:`pineapple`},k.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`))),k.createElement(O,{kind:`segmented`,defaultSelectedIndex:1},k.createElement(O.List,null,k.createElement(O.Tab,{label:`Birds`,tabId:`bird`}),k.createElement(O.Tab,{label:`Cats`,tabId:`cat`}),k.createElement(O.Tab,{label:`Dogs`,tabId:`dog`}),k.createElement(O.Tab,{label:`Snow leopards`,tabId:`snowLeopard`})),k.createElement(O.Panel,{tabId:`bird`},k.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),k.createElement(O.Panel,{tabId:`cat`},k.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),k.createElement(O.Panel,{tabId:`dog`},k.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),k.createElement(O.Panel,{tabId:`snowLeopard`},k.createElement(`div`,{className:`padding--all--s`},`❄️🐆`))),k.createElement(O,{kind:`segmented`,defaultSelectedIndex:2},k.createElement(O.List,null,k.createElement(O.Tab,{label:`One`,tabId:`one`}),k.createElement(O.Tab,{label:`Two`,tabId:`two`}),k.createElement(O.Tab,{label:`Three`,tabId:`three`})),k.createElement(O.Panel,{tabId:`one`},k.createElement(`div`,{className:`padding--all--s`},`1️⃣`)),k.createElement(O.Panel,{tabId:`two`},k.createElement(`div`,{className:`padding--all--s`},`2️⃣`)),k.createElement(O.Panel,{tabId:`three`},k.createElement(`div`,{className:`padding--all--s`},`3️⃣`)))),Q.parameters={docs:{description:{story:"Renders multiple `segmented` Tabs on the same page to verify that each instance's sliding pill resolves to its own selected tab. Since `anchor-name: --active` is declared at document scope, this story exists to confirm there is no cross-instance interference in practice (try changing the selected tab in each set and observe the pill)."}}},$=()=>k.createElement(`div`,{style:{display:`grid`,gap:`1.5rem`}},k.createElement(O,null,k.createElement(O.List,null,k.createElement(O.Tab,{label:`Inbox`,tabId:`inbox`,renderStartContent:()=>k.createElement(`span`,{className:`narmi-icon-mail`}),renderEndContent:e=>k.createElement(u,{value:8,kind:e?`theme`:`neutral`})}),k.createElement(O.Tab,{label:`Starred`,tabId:`starred`,renderStartContent:()=>k.createElement(`span`,{className:`narmi-icon-star`}),renderEndContent:e=>k.createElement(u,{value:2,kind:e?`theme`:`neutral`})}),k.createElement(O.Tab,{label:`Sent`,tabId:`sent`,renderStartContent:()=>k.createElement(`span`,{className:`narmi-icon-send`})})),k.createElement(O.Panel,{tabId:`inbox`},k.createElement(`div`,{className:`padding--all--s`},`Inbox`)),k.createElement(O.Panel,{tabId:`starred`},k.createElement(`div`,{className:`padding--all--s`},`Starred`)),k.createElement(O.Panel,{tabId:`sent`},k.createElement(`div`,{className:`padding--all--s`},`Sent`))),k.createElement(O,{kind:`segmented`},k.createElement(O.List,null,k.createElement(O.Tab,{label:`Inbox`,tabId:`inbox`,renderStartContent:()=>k.createElement(`span`,{className:`narmi-icon-mail`}),renderEndContent:e=>k.createElement(u,{value:8,kind:e?`theme`:`neutral`})}),k.createElement(O.Tab,{label:`Starred`,tabId:`starred`,renderStartContent:()=>k.createElement(`span`,{className:`narmi-icon-star`}),renderEndContent:e=>k.createElement(u,{value:2,kind:e?`theme`:`neutral`})}),k.createElement(O.Tab,{label:`Sent`,tabId:`sent`,renderStartContent:()=>k.createElement(`span`,{className:`narmi-icon-send`})})),k.createElement(O.Panel,{tabId:`inbox`},k.createElement(`div`,{className:`padding--all--s`},`Inbox`)),k.createElement(O.Panel,{tabId:`starred`},k.createElement(`div`,{className:`padding--all--s`},`Starred`)),k.createElement(O.Panel,{tabId:`sent`},k.createElement(`div`,{className:`padding--all--s`},`Sent`)))),$.parameters={docs:{description:{story:"Use `renderStartContent` and `renderEndContent` on `Tabs.Tab` to render arbitrary inline-start / inline-end content such as an icon or a `Count`. Each render prop receives the tab's `isSelected` state, so content can respond to selection. Shown here with both the `default` and `segmented` kinds."}}},ue={title:`Components/Tabs`,component:O,subcomponents:{TabsList:v,TabsTab:w,TabsPanel:x}},N.__docgenInfo={description:``,methods:[],displayName:`ResponsiveTabs`},F.__docgenInfo={description:``,methods:[],displayName:`ResponsiveTabsWithArrowScroll`},G.__docgenInfo={description:``,methods:[],displayName:`ResponsiveSegmentedTabs`},K.__docgenInfo={description:``,methods:[],displayName:`WithoutPanels`},q.__docgenInfo={description:``,methods:[],displayName:`WithoutBorder`},J.__docgenInfo={description:``,methods:[],displayName:`PaddedTabsList`},Y.__docgenInfo={description:``,methods:[],displayName:`FullyControlledTabs`},X.__docgenInfo={description:``,methods:[],displayName:`Segmented`},Z.__docgenInfo={description:``,methods:[],displayName:`SegmentedWithStatusIndicator`},Q.__docgenInfo={description:``,methods:[],displayName:`MultipleSegmentedTabs`},$.__docgenInfo={description:``,methods:[],displayName:`WithCustomLabelContent`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <LimitsTabs {...args} />`,...F.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Last tab is fully visible at the end",
  render: () => <LimitsTabs />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const tabList = await waitForArrows(canvas);
    await pageToEnd(canvas, userEvent, tabList);

    // The trailing fade must be gone, otherwise it is painted over the last tab.
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowRight");
    const lastTab = canvas.getByRole("tab", {
      name: "International wires"
    });
    expect(lastTab.getBoundingClientRect().right).toBeLessThanOrEqual(tabList.getBoundingClientRect().right + SUBPIXEL_TOLERANCE_PX);
  }
}`,...V.parameters?.docs?.source},description:{story:`The regression this whole change exists for. Arrow state used to be derived
from a cached width that reserved space for both arrows whether or not they
were rendered, which understated the scroll range: the end was never
detected, the trailing fade never cleared, and the last tab sat clipped
underneath it. jsdom has no layout engine, so this is only provable here.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Arrow state tracks scroll limits",
  render: () => <LimitsTabs />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const tabList = await waitForArrows(canvas);

    // At the start: nothing hidden to the left.
    expect(getLeftArrow(canvas)).toBeDisabled();
    expect(getRightArrow(canvas)).toBeEnabled();
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowLeft");
    expect(tabList).toHaveClass("nds-tabs-tabsList--overflowRight");

    // One page in, content is hidden on both sides.
    await userEvent.click(getRightArrow(canvas));
    await waitForScrollEnd(tabList);
    expect(tabList.scrollLeft).toBeGreaterThan(0);
    expect(getLeftArrow(canvas)).toBeEnabled();
    expect(tabList).toHaveClass("nds-tabs-tabsList--overflowLeft");

    // At the end: nothing hidden to the right.
    await pageToEnd(canvas, userEvent, tabList);
    expect(getRightArrow(canvas)).toBeDisabled();
    expect(getLeftArrow(canvas)).toBeEnabled();
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowRight");
    expect(tabList).toHaveClass("nds-tabs-tabsList--overflowLeft");

    // ...and back to the start again.
    while (!getLeftArrow(canvas).disabled) {
      await userEvent.click(getLeftArrow(canvas));
      await waitForScrollEnd(tabList);
    }
    expect(tabList.scrollLeft).toBeLessThanOrEqual(SUBPIXEL_TOLERANCE_PX);
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowLeft");
  }
}`,...H.parameters?.docs?.source},description:{story:`Arrow enablement and the fade masks must track the real scroll position at
both limits and in between.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Tab list width is stable while paging",
  render: () => <LimitsTabs />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const tabList = await waitForArrows(canvas);
    const widthAtStart = tabList.clientWidth;
    await userEvent.click(getRightArrow(canvas));
    await waitForScrollEnd(tabList);
    expect(tabList.clientWidth).toBe(widthAtStart);
    await pageToEnd(canvas, userEvent, tabList);
    expect(tabList.clientWidth).toBe(widthAtStart);

    // Both arrows stay in the document at both limits, so focus is never
    // destroyed underneath a user clicking toward the end.
    expect(getLeftArrow(canvas)).toBeInTheDocument();
    expect(getRightArrow(canvas)).toBeInTheDocument();
  }
}`,...U.parameters?.docs?.source},description:{story:"The arrows hold their columns and toggle `disabled` instead of unmounting.\nIf they unmounted at the scroll limits, the list's width would change, which\nfeeds back into the overflow decision that renders the arrows in the first\nplace -- the oscillation that `ARROW_RESERVE_PX` exists to damp.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Non-overflowing tabs render no arrows",
  render: () => <LimitsTabs width={900} />,
  play: async ({
    canvas
  }) => {
    const tabList = await getTabList(canvas);
    await waitFor(() => expect(canvas.queryByRole("button", {
      name: "Scroll tabs right"
    })).not.toBeInTheDocument());
    expect(canvas.queryByRole("button", {
      name: "Scroll tabs left"
    })).not.toBeInTheDocument();
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowLeft");
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowRight");
  }
}`,...W.parameters?.docs?.source},description:{story:`The inverse case: when everything fits there is no responsive mode, no
arrows, and no fade.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <div className="padding--all--m" style={{
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
  </div>`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...$.parameters?.docs?.source}}},de=[`Overview`,`DefaultSelectedTab`,`ResponsiveTabs`,`ResponsiveTabsWithArrowScroll`,`InteractionLastTabFullyVisible`,`InteractionArrowStateTracksScrollLimits`,`InteractionTabListWidthIsStable`,`InteractionNoArrowsWhenContentFits`,`ResponsiveSegmentedTabs`,`WithoutPanels`,`WithoutBorder`,`PaddedTabsList`,`FullyControlledTabs`,`Segmented`,`SegmentedWithStatusIndicator`,`MultipleSegmentedTabs`,`WithCustomLabelContent`]}))();export{M as DefaultSelectedTab,Y as FullyControlledTabs,H as InteractionArrowStateTracksScrollLimits,V as InteractionLastTabFullyVisible,W as InteractionNoArrowsWhenContentFits,U as InteractionTabListWidthIsStable,Q as MultipleSegmentedTabs,j as Overview,J as PaddedTabsList,G as ResponsiveSegmentedTabs,N as ResponsiveTabs,F as ResponsiveTabsWithArrowScroll,X as Segmented,Z as SegmentedWithStatusIndicator,$ as WithCustomLabelContent,q as WithoutBorder,K as WithoutPanels,de as __namedExportsOrder,ue as default};