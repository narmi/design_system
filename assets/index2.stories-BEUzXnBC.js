import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe--W4f4aLN.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-BPdECQqI.js";import{n as s,t as c}from"./IconButton-DjamefFW.js";var l,u,d=t((()=>{l=e(n()),u=(0,l.createContext)({tabIds:[],setTabIds:()=>{},currentIndex:0,hasPanels:!1,setHasPanels:()=>{},changeTabs:()=>{},tabsListRef:null,isResponsive:!1,setIsResponsive:()=>{},kind:`default`})})),f,p,m=t((()=>{r(),f=e(n()),s(),d(),p=({direction:e,onClick:t,show:n})=>{let{isResponsive:r,kind:a}=(0,f.useContext)(u),o=e===`left`?a===`segmented`?`chevron-left`:`arrow-left`:a===`segmented`?`chevron-right`:`arrow-right`;return r&&f.createElement(`div`,{className:`arrow-reponsive`},f.createElement(`div`,{className:i([`nds-tabs-arrow`,{"nds-tabs-arrow--visible":n}])},f.createElement(c,{onClick:t,name:o,kind:`action`})))}})),h,g,_,v,y=t((()=>{r(),h=e(n()),m(),a(),d(),g=()=>{},_=64,v=({children:e,xPadding:t=`none`})=>{let[n,r]=(0,h.useState)(!1),[a,s]=(0,h.useState)(!1),c=(0,h.useRef)(null),l=(0,h.useRef)(0),d=(0,h.useRef)(0),{tabIds:f,setTabIds:m,changeTabs:v,currentIndex:y,hasPanels:b,tabsListRef:x,setIsResponsive:S,kind:C}=(0,h.useContext)(u),w=h.Children.toArray(e),T=()=>{if(!x.current||!c.current)return;let e=x.current,t=Array.from(e.children),n=parseFloat(getComputedStyle(e).columnGap)||0;l.current=t.reduce((e,t)=>e+t.offsetWidth,0)+Math.max(0,t.length-1)*n,d.current=c.current.clientWidth-_,E()},E=()=>{if(!x.current)return;let{scrollLeft:e}=x.current,t=l.current,n=d.current,i=t>n,a=i&&e>1,o=i&&e<t-n-1;r(a),s(o),S(i)};(0,h.useEffect)(()=>{if(!c.current)return;let e=new ResizeObserver(T);return e.observe(c.current),T(),()=>e.disconnect()},[]),(0,h.useEffect)(()=>{let e=x.current;if(e)return e.addEventListener(`scroll`,E),()=>e.removeEventListener(`scroll`,E)},[]),(0,h.useEffect)(()=>{T()},[]),(0,h.useEffect)(()=>{T()},[w.length,y]),(0,h.useEffect)(()=>{f.length!==w.length&&m(w.map(e=>e.props.tabId))},[f,m,w]);let D=({key:e})=>{let t;switch(e){case`ArrowLeft`:t=y-1,t>=0&&v(f[t]);break;case`ArrowRight`:t=y+1,t<=f.length-1&&v(f[t]);break}},O=e=>{let t=getComputedStyle(e).getPropertyValue(`scroll-padding-inline-start`).trim(),n=parseFloat(t);return Number.isFinite(n)?n:0};return h.createElement(`div`,{ref:c},h.createElement(o,{gapSize:`none`,alignItems:`center`},n&&h.createElement(o.Item,{shrink:!0},h.createElement(p,{direction:`left`,onClick:()=>{let e=x.current,t=e.scrollLeft-e.clientWidth,n=O(e);e.scroll({left:t<=n?0:t,behavior:`smooth`})},show:n})),h.createElement(o.Item,null,h.createElement(`ul`,{ref:x,role:b?`tablist`:void 0,className:i([`nds-tabs-tabsList`,`nds-tabs-tabsList--${C}`,`list--reset`,`padding--x--${t}`,{"nds-tabs-tabsList--overflowLeft":n,"nds-tabs-tabsList--overflowRight":a}]),onKeyDown:b?D:g,tabIndex:b?0:void 0,"data-testid":`nds-tablist`},e)),a&&h.createElement(o.Item,{shrink:!0},h.createElement(p,{direction:`right`,onClick:()=>{let e=x.current;if(!e)return;let t=e.scrollWidth-e.clientWidth,n=e.scrollLeft+e.clientWidth,r=O(e);e.scroll({left:n>=t-r?t:n,behavior:`smooth`})},show:a}))))}})),b,x,S=t((()=>{b=e(n()),d(),x=({children:e,tabId:t,testId:n})=>{let{currentIndex:r,tabIds:i,hasPanels:a,setHasPanels:o,isResponsive:s}=(0,b.useContext)(u),c=i[r];return(0,b.useEffect)(()=>{a||o(!0)},[a,o]),b.createElement(`div`,{className:`nds-tabs-panel`,tabIndex:0,role:`tabpanel`,id:`${t}-tabpanel`,"aria-labelledby":`${t}-tab`,hidden:t===c?void 0:!0,"data-testid":n},s?b.createElement(`div`,{className:`panel-responsive`},e):b.createElement(b.Fragment,null,e))}})),C,w,T=t((()=>{C=e(n()),d(),w=({label:e,tabId:t,testId:n,hasStatusIndicator:r})=>{let{currentIndex:i,tabIds:a,hasPanels:o,changeTabs:s,kind:c}=(0,C.useContext)(u),l=(0,C.useRef)(null),d=t===a[i];return C.createElement(`li`,{role:o?`tab`:void 0,"aria-selected":o?d.toString():void 0,"aria-controls":o?`${t}-tabpanel`:void 0,"data-selected":d||void 0,className:`nds-tabs-tabItem nds-tabs-tabItem--${c}${d?` nds-tabs-tabItem--selected`:``}`,ref:l},C.createElement(`button`,{className:`resetButton nds-tabs-button`,id:`${t}-tab`,tabIndex:o?-1:0,onClick:()=>{s(t)},"data-testid":n},r&&C.createElement(`span`,{className:`nds-tabs-statusIndicator`},C.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`6`,height:`6`,viewBox:`0 0 6 6`,fill:`none`,"aria-hidden":`true`,focusable:`false`},C.createElement(`circle`,{cx:`3`,cy:`3`,r:`3`,fill:`var(--color-successDark)`}))),C.createElement(`span`,null,e)))}})),E,D,O,k=t((()=>{r(),E=e(n()),y(),S(),T(),d(),D=()=>{},O=({children:e,defaultSelectedIndex:t=0,selectedIndex:n=null,onTabChange:r=D,hasBorder:a=!0,kind:o=`default`,testId:s})=>{let c=(0,E.useRef)(),[l,d]=(0,E.useState)([]),[f,p]=(0,E.useState)(!1),[m,h]=(0,E.useState)(!1),[g,_]=(0,E.useState)(t),v=n!==null;return E.createElement(u.Provider,{value:{tabIds:l,setTabIds:d,currentIndex:v?n:g,hasPanels:f,setHasPanels:p,changeTabs:e=>{let t=l.indexOf(e);r(t),v||_(t)},tabsListRef:c,isResponsive:m,setIsResponsive:h,kind:o}},E.createElement(`div`,{className:i([`nds-tabs`,`nds-tabs--${o}`,{"nds-tabs--isResponsive":m,"nds-tabs--bordered":a&&o==="default"}]),"data-testid":s},e))},O.List=v,O.Tab=w,O.Panel=x}));function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(null,arguments)}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;t((()=>{j=e(n()),k(),y(),S(),T(),M=e=>j.createElement(O,e,j.createElement(O.List,null,j.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}),j.createElement(O.Tab,{label:`Snow leopard`,tabId:`snowLeopard`})),j.createElement(O.Panel,{tabId:`apple`},j.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),j.createElement(O.Panel,{tabId:`orange`},j.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),j.createElement(O.Panel,{tabId:`pineapple`},j.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),j.createElement(O.Panel,{tabId:`snowLeopard`},j.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`))),N=M.bind({}),N.args={onTabChange:()=>{}},P=M.bind({}),P.args={defaultSelectedIndex:1},F=e=>j.createElement(`div`,{style:{display:`flex`,width:200,flexDirection:`column`}},j.createElement(O,e,j.createElement(O.List,null,j.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}),j.createElement(O.Tab,{label:`Bird`,tabId:`bird`}),j.createElement(O.Tab,{label:`Cat`,tabId:`cat`}),j.createElement(O.Tab,{label:`Dog`,tabId:`dog`}),j.createElement(O.Tab,{label:`Snow leopard`,tabId:`snowLeopard`}),j.createElement(O.Tab,{label:`My absolute favorite animal of all time`,tabId:`penguin`})),j.createElement(O.Panel,{tabId:`apple`},j.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),j.createElement(O.Panel,{tabId:`orange`},j.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),j.createElement(O.Panel,{tabId:`pineapple`},j.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),j.createElement(O.Panel,{tabId:`bird`},j.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),j.createElement(O.Panel,{tabId:`cat`},j.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),j.createElement(O.Panel,{tabId:`dog`},j.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),j.createElement(O.Panel,{tabId:`snowLeopard`},j.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`)),j.createElement(O.Panel,{tabId:`penguin`},j.createElement(`div`,{className:`padding--all--s`},`️🐧🐧🐧`)))),I=e=>j.createElement(`div`,{style:{display:`flex`,width:300,flexDirection:`column`}},j.createElement(O,A({kind:`segmented`},e),j.createElement(O.List,null,j.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}),j.createElement(O.Tab,{label:`Bird`,tabId:`bird`}),j.createElement(O.Tab,{label:`Cat`,tabId:`cat`}),j.createElement(O.Tab,{label:`Dog`,tabId:`dog`}),j.createElement(O.Tab,{label:`Snow leopard`,tabId:`snowLeopard`})),j.createElement(O.Panel,{tabId:`apple`},j.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),j.createElement(O.Panel,{tabId:`orange`},j.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),j.createElement(O.Panel,{tabId:`pineapple`},j.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),j.createElement(O.Panel,{tabId:`bird`},j.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),j.createElement(O.Panel,{tabId:`cat`},j.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),j.createElement(O.Panel,{tabId:`dog`},j.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),j.createElement(O.Panel,{tabId:`snowLeopard`},j.createElement(`div`,{className:`padding--all--s`},`️❄️🐆`)))),L=e=>j.createElement(O,e,j.createElement(O.List,null,j.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}))),L.parameters={docs:{description:{story:"You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events."}}},R=()=>j.createElement(O,{hasBorder:!1},j.createElement(O.List,null,j.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}))),R.parameters={docs:{description:{story:"You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already."}}},z=()=>j.createElement(O,null,j.createElement(O.List,{xPadding:`l`},j.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`}))),z.parameters={docs:{description:{story:"You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`."}}},B=()=>{let[e,t]=(0,j.useState)(1);return j.createElement(O,{selectedIndex:e,onTabChange:e=>t(e)},j.createElement(O.List,null,j.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`})),j.createElement(O.Panel,{tabId:`apple`},j.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),j.createElement(O.Panel,{tabId:`orange`},j.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),j.createElement(O.Panel,{tabId:`pineapple`},j.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)))},B.parameters={docs:{description:{story:"Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab."}}},V=()=>j.createElement(O,{kind:`segmented`},j.createElement(O.List,null,j.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`})),j.createElement(O.Panel,{tabId:`apple`},j.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),j.createElement(O.Panel,{tabId:`orange`},j.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),j.createElement(O.Panel,{tabId:`pineapple`},j.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`))),V.parameters={docs:{description:{story:"The `segmented` kind renders tabs as a segmented control, useful for toggling between views within the same context."}}},H=()=>j.createElement(O,{kind:`segmented`},j.createElement(O.List,null,j.createElement(O.Tab,{label:`Apples`,tabId:`apple`,hasStatusIndicator:!0}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`,hasStatusIndicator:!0}),j.createElement(O.Tab,{label:`Very long label with indicator`,tabId:`test`,hasStatusIndicator:!0})),j.createElement(O.Panel,{tabId:`apple`},j.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),j.createElement(O.Panel,{tabId:`orange`},j.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),j.createElement(O.Panel,{tabId:`pineapple`},j.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`)),j.createElement(O.Panel,{tabId:`test`},j.createElement(`div`,{className:`padding--all--s`},`Test Content`))),H.parameters={docs:{description:{story:"Segmented tabs with `hasStatusIndicator` on select tabs to show an update notification dot."}}},U=()=>j.createElement(`div`,{className:`padding--all--m`,style:{display:`grid`,gap:`1.5rem`}},j.createElement(O,{kind:`segmented`},j.createElement(O.List,null,j.createElement(O.Tab,{label:`Apples`,tabId:`apple`}),j.createElement(O.Tab,{label:`Oranges`,tabId:`orange`}),j.createElement(O.Tab,{label:`Pineapples`,tabId:`pineapple`})),j.createElement(O.Panel,{tabId:`apple`},j.createElement(`div`,{className:`padding--all--s`},`🍎🍎🍎`)),j.createElement(O.Panel,{tabId:`orange`},j.createElement(`div`,{className:`padding--all--s`},`🍊🍊🍊`)),j.createElement(O.Panel,{tabId:`pineapple`},j.createElement(`div`,{className:`padding--all--s`},`🍍🍍🍍`))),j.createElement(O,{kind:`segmented`,defaultSelectedIndex:1},j.createElement(O.List,null,j.createElement(O.Tab,{label:`Birds`,tabId:`bird`}),j.createElement(O.Tab,{label:`Cats`,tabId:`cat`}),j.createElement(O.Tab,{label:`Dogs`,tabId:`dog`}),j.createElement(O.Tab,{label:`Snow leopards`,tabId:`snowLeopard`})),j.createElement(O.Panel,{tabId:`bird`},j.createElement(`div`,{className:`padding--all--s`},`🐦🐦🐦`)),j.createElement(O.Panel,{tabId:`cat`},j.createElement(`div`,{className:`padding--all--s`},`🐈🐈🐈`)),j.createElement(O.Panel,{tabId:`dog`},j.createElement(`div`,{className:`padding--all--s`},`🐕🐕🐕`)),j.createElement(O.Panel,{tabId:`snowLeopard`},j.createElement(`div`,{className:`padding--all--s`},`❄️🐆`))),j.createElement(O,{kind:`segmented`,defaultSelectedIndex:2},j.createElement(O.List,null,j.createElement(O.Tab,{label:`One`,tabId:`one`}),j.createElement(O.Tab,{label:`Two`,tabId:`two`}),j.createElement(O.Tab,{label:`Three`,tabId:`three`})),j.createElement(O.Panel,{tabId:`one`},j.createElement(`div`,{className:`padding--all--s`},`1️⃣`)),j.createElement(O.Panel,{tabId:`two`},j.createElement(`div`,{className:`padding--all--s`},`2️⃣`)),j.createElement(O.Panel,{tabId:`three`},j.createElement(`div`,{className:`padding--all--s`},`3️⃣`)))),U.parameters={docs:{description:{story:"Renders multiple `segmented` Tabs on the same page to verify that each instance's sliding pill resolves to its own selected tab. Since `anchor-name: --active` is declared at document scope, this story exists to confirm there is no cross-instance interference in practice (try changing the selected tab in each set and observe the pill)."}}},W={title:`Components/Tabs`,component:O,subcomponents:{TabsList:v,TabsTab:w,TabsPanel:x}},F.__docgenInfo={description:``,methods:[],displayName:`ResponsiveTabs`},I.__docgenInfo={description:``,methods:[],displayName:`ResponsiveSegmentedTabs`},L.__docgenInfo={description:``,methods:[],displayName:`WithoutPanels`},R.__docgenInfo={description:``,methods:[],displayName:`WithoutBorder`},z.__docgenInfo={description:``,methods:[],displayName:`PaddedTabsList`},B.__docgenInfo={description:``,methods:[],displayName:`FullyControlledTabs`},V.__docgenInfo={description:``,methods:[],displayName:`Segmented`},H.__docgenInfo={description:``,methods:[],displayName:`SegmentedWithStatusIndicator`},U.__docgenInfo={description:``,methods:[],displayName:`MultipleSegmentedTabs`},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => <Tabs kind="segmented">
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
  </Tabs>`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => <div className="padding--all--m" style={{
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
  </div>`,...U.parameters?.docs?.source}}},G=[`Overview`,`DefaultSelectedTab`,`ResponsiveTabs`,`ResponsiveSegmentedTabs`,`WithoutPanels`,`WithoutBorder`,`PaddedTabsList`,`FullyControlledTabs`,`Segmented`,`SegmentedWithStatusIndicator`,`MultipleSegmentedTabs`]}))();export{P as DefaultSelectedTab,B as FullyControlledTabs,U as MultipleSegmentedTabs,N as Overview,z as PaddedTabsList,I as ResponsiveSegmentedTabs,F as ResponsiveTabs,V as Segmented,H as SegmentedWithStatusIndicator,R as WithoutBorder,L as WithoutPanels,G as __namedExportsOrder,W as default};