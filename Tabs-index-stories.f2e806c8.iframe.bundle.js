(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[772],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,_setPrototypeOf(t,o)}__webpack_require__.d(__webpack_exports__,{A:()=>_inheritsLoose})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutPropertiesLoose})},"./src/IconButton/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,y:()=>VALID_ICON_NAMES});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),src_icons_selection_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icons/selection.json"),_util_AsElement__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/util/AsElement.js");const _excluded=["disabled","kind","textSize","testId","label","name","onClick","type","as"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const VALID_ICON_NAMES=src_icons_selection_json__WEBPACK_IMPORTED_MODULE_1__.Pt.map((icon=>icon.properties.name)),IconButton=_ref=>{let{disabled=!1,kind="plain",textSize="plain"===kind?"m":"l",testId="nds-icon-button",label,name,onClick=()=>{},type,as="button"}=_ref,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_AsElement__WEBPACK_IMPORTED_MODULE_2__.A,_extends({elementType:as,type,onClick,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-typography","nds-icon-button","nds-icon-button--".concat(kind),"fontSize--".concat(textSize),{"nds-icon-button--disabled":disabled}]),disabled,"aria-label":label,"data-testid":testId},otherProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{"aria-label":name,className:"narmi-icon-".concat(name)}))};IconButton.propTypes={name:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(VALID_ICON_NAMES).isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,kind:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["action","plain","themed"]),type:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,textSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["xs","s","m","l"]),onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["a","button"])};const __WEBPACK_DEFAULT_EXPORT__=IconButton;IconButton.__docgenInfo={description:"Narmi style Icon Button.\n\nIcon Button renders a button with a central Narmi icon",methods:[],displayName:"IconButton",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"disables the icon button when set to `true`",type:{name:"bool"},required:!1},kind:{defaultValue:{value:'"plain"',computed:!1},description:"style of icon button to render",type:{name:"enum",value:[{value:'"action"',computed:!1},{value:'"plain"',computed:!1},{value:'"themed"',computed:!1}]},required:!1},textSize:{defaultValue:{value:'kind === "plain" ? "m" : "l"',computed:!1},description:"Optional text size of the icon in the icon button defaults different for different kinds (plain/action)",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1}]},required:!1},testId:{defaultValue:{value:'"nds-icon-button"',computed:!1},description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"Click callback, with event object passed as argument",type:{name:"func"},required:!1},as:{defaultValue:{value:'"button"',computed:!1},description:'The html element to render as the root node of `Button`.\n\nWhen rendering as an "a" you **MUST** pass an `href` attribute\nfor the anchor to be valid.',type:{name:"enum",value:[{value:'"a"',computed:!1},{value:'"button"',computed:!1}]},required:!1},name:{description:"Name of Narmi icon",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!0},label:{description:"Renders the icon button label",type:{name:"string"},required:!1},type:{description:"type attribute for underlying HTML button element",type:{name:"string"},required:!1},className:{description:"className for adding classNames to the icon button",type:{name:"string"},required:!1}}}},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const _excluded=["elementType","children"];const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children}=_ref,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Element,rest,children)};AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./src/Tabs/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultSelectedTab:()=>DefaultSelectedTab,FullyControlledTabs:()=>FullyControlledTabs,Overview:()=>Overview,PaddedTabsList:()=>PaddedTabsList,ResponsiveTabs:()=>ResponsiveTabs,WithoutBorder:()=>WithoutBorder,WithoutPanels:()=>WithoutPanels,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),classcat=(__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/classcat/index.js")),raf_schd_esm=__webpack_require__("./node_modules/raf-schd/dist/raf-schd.esm.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),IconButton=__webpack_require__("./src/IconButton/index.js");const context=(0,react.createContext)({tabIds:[],setTabIds:()=>{},currentIndex:0,hasPanels:!1,setHasPanels:()=>{},changeTabs:()=>{},tabsListRef:null,isResponsive:!1,setIsResponsive:()=>{}}),Arrow=_ref=>{let{direction,onClick,show}=_ref;const{isResponsive}=(0,react.useContext)(context),arrowRef=(0,react.useRef)();return isResponsive&&react.createElement("div",{className:"arrow-reponsive"},react.createElement(CSSTransition.A,{nodeRef:arrowRef,in:show,timeout:300,unmountOnExit:!0,classNames:"nds-tabs-arrow"},react.createElement("div",{ref:arrowRef,className:"nds-tabs-arrow"},react.createElement(IconButton.A,{onClick,name:"left"===direction?"arrow-left":"arrow-right",kind:"action"}))))},Tabs_Arrow=Arrow;try{Arrow.displayName="Arrow",Arrow.__docgenInfo={description:"",displayName:"Arrow",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Tabs/Arrow.tsx#Arrow"]={docgenInfo:Arrow.__docgenInfo,name:"Arrow",path:"src/Tabs/Arrow.tsx#Arrow"})}catch(__react_docgen_typescript_loader_error){}const noop=()=>{},TabsList=_ref=>{let{children,xPadding="none"}=_ref;const[showLeftArrow,setShowLeftArrow]=(0,react.useState)(!1),[showRightArrow,setShowRightArrow]=(0,react.useState)(!1),{tabIds,setTabIds,changeTabs,currentIndex,hasPanels,tabsListRef,setIsResponsive,isResponsive}=(0,react.useContext)(context),childArray=react.Children.toArray(children),scheduleScrollButtonUpdate=()=>{tabsListRef.current&&(0,raf_schd_esm.A)((()=>{const{scrollWidth,clientWidth,scrollLeft}=tabsListRef.current,nextShowLeftArrow=scrollLeft>1,nextShowRightArrow=scrollLeft<scrollWidth-clientWidth-1;setShowLeftArrow(nextShowLeftArrow),setShowRightArrow(nextShowRightArrow),setIsResponsive(nextShowLeftArrow||nextShowRightArrow)})())};(0,react.useEffect)((()=>{scheduleScrollButtonUpdate()}),[]),(0,react.useEffect)((()=>(window.addEventListener("resize",scheduleScrollButtonUpdate),()=>{window.removeEventListener("resize",scheduleScrollButtonUpdate)})),[]),(0,react.useEffect)((()=>(tabsListRef.current.addEventListener("scroll",scheduleScrollButtonUpdate),()=>{var _tabsListRef$current;null==tabsListRef||null===(_tabsListRef$current=tabsListRef.current)||void 0===_tabsListRef$current||_tabsListRef$current.removeEventListener("scroll",scheduleScrollButtonUpdate)})),[tabsListRef.current]),(0,react.useEffect)((()=>{tabIds.length!==childArray.length&&setTabIds(childArray.map((t=>t.props.tabId)))}),[tabIds,setTabIds,childArray]);const getScrollSize=()=>{const containerSize=tabsListRef.current.clientWidth;let totalSize=0;const children=Array.from(tabsListRef.current.children);for(let i=0;i<children.length;i+=1){const tab=children[i];if(totalSize+tab.clientWidth>containerSize){0===i&&(totalSize=containerSize);break}totalSize+=tab.clientWidth}return totalSize};return react.createElement("div",{className:isResponsive?"display-flex":""},react.createElement(Tabs_Arrow,{direction:"left",onClick:()=>{tabsListRef.current.scroll({left:tabsListRef.current.scrollLeft-getScrollSize(),behavior:"smooth"})},show:showLeftArrow}),react.createElement("ul",{ref:tabsListRef,role:hasPanels?"tablist":void 0,className:"nds-tabs-tabsList list--reset padding--x--".concat(xPadding),onKeyDown:hasPanels?_ref2=>{let newIndex,{key}=_ref2;switch(key){case"ArrowLeft":newIndex=currentIndex-1,newIndex>=0&&changeTabs(tabIds[newIndex]);break;case"ArrowRight":newIndex=currentIndex+1,newIndex<=tabIds.length-1&&changeTabs(tabIds[newIndex])}}:noop,tabIndex:hasPanels?0:void 0,"data-testid":"nds-tablist"},children),react.createElement(Tabs_Arrow,{direction:"right",onClick:()=>{tabsListRef.current.scroll({left:tabsListRef.current.scrollLeft+getScrollSize(),behavior:"smooth"})},show:showRightArrow}))},Tabs_TabsList=TabsList;try{TabsList.displayName="TabsList",TabsList.__docgenInfo={description:"",displayName:"TabsList",props:{children:{defaultValue:null,description:"Children must be of type `Tabs.Tab`",name:"children",required:!0,type:{name:"ReactNode"}},xPadding:{defaultValue:{value:"none"},description:"Amount of padding to apply on the x axis to indent tabs\nfrom edges of the `Tabs.Panel`",name:"xPadding",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Tabs/TabsList.tsx#TabsList"]={docgenInfo:TabsList.__docgenInfo,name:"TabsList",path:"src/Tabs/TabsList.tsx#TabsList"})}catch(__react_docgen_typescript_loader_error){}const TabsPanel=_ref=>{let{children,tabId,testId}=_ref;const{currentIndex,tabIds,hasPanels,setHasPanels,isResponsive}=(0,react.useContext)(context),selectedId=tabIds[currentIndex];return(0,react.useEffect)((()=>{hasPanels||setHasPanels(!0)}),[hasPanels,setHasPanels]),react.createElement("div",{className:"nds-tabs-panel",tabIndex:0,role:"tabpanel",id:"".concat(tabId,"-tabpanel"),"aria-labelledby":"".concat(tabId,"-tab"),hidden:tabId!==selectedId||void 0,"data-testid":testId},isResponsive?react.createElement("div",{className:"panel-responsive"},children):react.createElement(react.Fragment,null,children))},Tabs_TabsPanel=TabsPanel;try{TabsPanel.displayName="TabsPanel",TabsPanel.__docgenInfo={description:"",displayName:"TabsPanel",props:{children:{defaultValue:null,description:"The content of the tab panel (any node type)",name:"children",required:!0,type:{name:"ReactNode"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Panel` to a `Tabs.Tab`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Tabs/TabsPanel.tsx#TabsPanel"]={docgenInfo:TabsPanel.__docgenInfo,name:"TabsPanel",path:"src/Tabs/TabsPanel.tsx#TabsPanel"})}catch(__react_docgen_typescript_loader_error){}const TabsTab=_ref=>{let{label,tabId,testId}=_ref;const{currentIndex,tabIds,hasPanels,changeTabs}=(0,react.useContext)(context),tabRef=(0,react.useRef)(),isSelected=tabId===tabIds[currentIndex];return react.createElement("li",{role:hasPanels?"tab":void 0,"aria-selected":hasPanels?isSelected.toString():void 0,"aria-controls":hasPanels?"".concat(tabId,"-tabpanel"):void 0,className:(0,classcat.A)(["nds-tabs-tabItem",{"nds-tabs-tabItem--selected":isSelected}]),ref:tabRef},react.createElement("button",{className:(0,classcat.A)(["resetButton","nds-tabs-button",{"nds-tabs-button--selected":isSelected}]),id:"".concat(tabId,"-tab"),tabIndex:hasPanels?-1:0,onClick:()=>{changeTabs(tabId)},"data-testid":testId},label))},Tabs_TabsTab=TabsTab;try{TabsTab.displayName="TabsTab",TabsTab.__docgenInfo={description:"",displayName:"TabsTab",props:{label:{defaultValue:null,description:"Label of the tab button",name:"label",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"String ID used to link the `Tabs.Tab` to a `Tabs.Panel`",name:"tabId",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Tabs/TabsTab.tsx#TabsTab"]={docgenInfo:TabsTab.__docgenInfo,name:"TabsTab",path:"src/Tabs/TabsTab.tsx#TabsTab"})}catch(__react_docgen_typescript_loader_error){}const Tabs_noop=()=>{},Tabs=_ref=>{let{children,defaultSelectedIndex=0,selectedIndex=null,onTabChange=Tabs_noop,hasBorder=!0,testId}=_ref;const tabsListRef=(0,react.useRef)(),[tabIds,setTabIds]=(0,react.useState)([]),[hasPanels,setHasPanels]=(0,react.useState)(!1),[isResponsive,setIsResponsive]=(0,react.useState)(!1),[currentIndex,setCurrentIndex]=(0,react.useState)(defaultSelectedIndex),isControlledComponent=null!==selectedIndex,getScrollToIndexSize=currentSelectedIndex=>{let totalSize=0;if(!tabsListRef.current)return totalSize;const children=Array.from(tabsListRef.current.children);for(let i=0;i<currentSelectedIndex;i+=1){totalSize+=children[i].clientWidth+40}return totalSize};(0,react.useEffect)((()=>{isControlledComponent&&tabsListRef.current.scroll({left:getScrollToIndexSize(selectedIndex),behavior:"smooth"})}),[selectedIndex]);return react.createElement(context.Provider,{value:{tabIds,setTabIds,currentIndex:isControlledComponent?selectedIndex:currentIndex,hasPanels,setHasPanels,changeTabs:tabId=>{const tabIndex=tabIds.indexOf(tabId);onTabChange(tabIndex),isControlledComponent||(tabsListRef.current.scroll({left:getScrollToIndexSize(tabIndex),behavior:"smooth"}),setCurrentIndex(tabIndex))},tabsListRef,isResponsive,setIsResponsive}},react.createElement("div",{className:(0,classcat.A)(["nds-tabs",{"nds-tabs--bordered":hasBorder}]),"data-testid":testId},children))};Tabs.List=Tabs_TabsList,Tabs.Tab=Tabs_TabsTab,Tabs.Panel=Tabs_TabsPanel;const src_Tabs=Tabs;try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:'Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)\nfor the "tabs" design pattern.\n\nThe `Tabs` component manages its own state, changing the visible tab panel based\non user events. Use the `onTabChange` callback to add any custom behaviors.',displayName:"Tabs",props:{children:{defaultValue:null,description:"Direct children of `Tabs` should be one of:\n`Tabs.List` or `Tabs.Panel`",name:"children",required:!0,type:{name:"ReactNode"}},defaultSelectedIndex:{defaultValue:{value:"0"},description:"Sets _default_ tab selection by index in source order",name:"defaultSelectedIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:{value:"null"},description:"Sets selected tab by index, making Tabs **fully controlled**.\nWhen using this prop, you must use the `onTabChange` callback\nto update the value of this prop to update the selected tab.",name:"selectedIndex",required:!1,type:{name:"number"}},onTabChange:{defaultValue:{value:"() => {}"},description:"Callback invoked with the index of the tab the user is moving selection to",name:"onTabChange",required:!1,type:{name:"(index: number) => void"}},hasBorder:{defaultValue:{value:"true"},description:"Shows bottom border when `true`",name:"hasBorder",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Tabs/index.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/Tabs/index.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>react.createElement(src_Tabs,args,react.createElement(src_Tabs.List,null,react.createElement(src_Tabs.Tab,{label:"Apples",tabId:"apple"}),react.createElement(src_Tabs.Tab,{label:"Oranges",tabId:"orange"}),react.createElement(src_Tabs.Tab,{label:"Pineapples",tabId:"pineapple"}),react.createElement(src_Tabs.Tab,{label:"Snow leopard",tabId:"snowLeopard"})),react.createElement(src_Tabs.Panel,{tabId:"apple"},react.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),react.createElement(src_Tabs.Panel,{tabId:"orange"},react.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),react.createElement(src_Tabs.Panel,{tabId:"pineapple"},react.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),react.createElement(src_Tabs.Panel,{tabId:"snowLeopard"},react.createElement("div",{className:"padding--all--s"},"️❄️🐆"))),Overview=Template.bind({});Overview.args={onTabChange:()=>{}};const DefaultSelectedTab=Template.bind({});DefaultSelectedTab.args={defaultSelectedIndex:1};const ResponsiveTabs=args=>react.createElement("div",{style:{display:"flex",width:200,flexDirection:"column"}},react.createElement(src_Tabs,args,react.createElement(src_Tabs.List,null,react.createElement(src_Tabs.Tab,{label:"Apples",tabId:"apple"}),react.createElement(src_Tabs.Tab,{label:"Oranges",tabId:"orange"}),react.createElement(src_Tabs.Tab,{label:"Pineapples",tabId:"pineapple"}),react.createElement(src_Tabs.Tab,{label:"Bird",tabId:"bird"}),react.createElement(src_Tabs.Tab,{label:"Cat",tabId:"cat"}),react.createElement(src_Tabs.Tab,{label:"Dog",tabId:"dog"}),react.createElement(src_Tabs.Tab,{label:"Snow leopard",tabId:"snowLeopard"}),react.createElement(src_Tabs.Tab,{label:"My absolute favorite animal of all time",tabId:"penguin"})),react.createElement(src_Tabs.Panel,{tabId:"apple"},react.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),react.createElement(src_Tabs.Panel,{tabId:"orange"},react.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),react.createElement(src_Tabs.Panel,{tabId:"pineapple"},react.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")),react.createElement(src_Tabs.Panel,{tabId:"bird"},react.createElement("div",{className:"padding--all--s"},"🐦🐦🐦")),react.createElement(src_Tabs.Panel,{tabId:"cat"},react.createElement("div",{className:"padding--all--s"},"🐈🐈🐈")),react.createElement(src_Tabs.Panel,{tabId:"dog"},react.createElement("div",{className:"padding--all--s"},"🐕🐕🐕")),react.createElement(src_Tabs.Panel,{tabId:"snowLeopard"},react.createElement("div",{className:"padding--all--s"},"️❄️🐆")),react.createElement(src_Tabs.Panel,{tabId:"penguin"},react.createElement("div",{className:"padding--all--s"},"️🐧🐧🐧")))),WithoutPanels=args=>react.createElement(src_Tabs,args,react.createElement(src_Tabs.List,null,react.createElement(src_Tabs.Tab,{label:"Apples",tabId:"apple"}),react.createElement(src_Tabs.Tab,{label:"Oranges",tabId:"orange"}),react.createElement(src_Tabs.Tab,{label:"Pineapples",tabId:"pineapple"})));WithoutPanels.parameters={docs:{description:{story:"You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events."}}};const WithoutBorder=()=>react.createElement(src_Tabs,{hasBorder:!1},react.createElement(src_Tabs.List,null,react.createElement(src_Tabs.Tab,{label:"Apples",tabId:"apple"}),react.createElement(src_Tabs.Tab,{label:"Oranges",tabId:"orange"}),react.createElement(src_Tabs.Tab,{label:"Pineapples",tabId:"pineapple"})));WithoutBorder.parameters={docs:{description:{story:"You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already."}}};const PaddedTabsList=()=>react.createElement(src_Tabs,null,react.createElement(src_Tabs.List,{xPadding:"l"},react.createElement(src_Tabs.Tab,{label:"Apples",tabId:"apple"}),react.createElement(src_Tabs.Tab,{label:"Oranges",tabId:"orange"}),react.createElement(src_Tabs.Tab,{label:"Pineapples",tabId:"pineapple"})));PaddedTabsList.parameters={docs:{description:{story:"You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`."}}};const FullyControlledTabs=()=>{const[selectedTab,setSelectedTab]=(0,react.useState)(1);return react.createElement(src_Tabs,{selectedIndex:selectedTab,onTabChange:index=>setSelectedTab(index)},react.createElement(src_Tabs.List,null,react.createElement(src_Tabs.Tab,{label:"Apples",tabId:"apple"}),react.createElement(src_Tabs.Tab,{label:"Oranges",tabId:"orange"}),react.createElement(src_Tabs.Tab,{label:"Pineapples",tabId:"pineapple"})),react.createElement(src_Tabs.Panel,{tabId:"apple"},react.createElement("div",{className:"padding--all--s"},"🍎🍎🍎")),react.createElement(src_Tabs.Panel,{tabId:"orange"},react.createElement("div",{className:"padding--all--s"},"🍊🍊🍊")),react.createElement(src_Tabs.Panel,{tabId:"pineapple"},react.createElement("div",{className:"padding--all--s"},"🍍🍍🍍")))};FullyControlledTabs.parameters={docs:{description:{story:"Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab."}}};const index_stories={title:"Components/Tabs",component:src_Tabs,subcomponents:{TabsList:Tabs_TabsList,TabsTab:Tabs_TabsTab,TabsPanel:Tabs_TabsPanel}},__namedExportsOrder=["Overview","DefaultSelectedTab","ResponsiveTabs","WithoutPanels","WithoutBorder","PaddedTabsList","FullyControlledTabs"];Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'args => <Tabs {...args}>\n    <Tabs.List>\n      <Tabs.Tab label="Apples" tabId="apple" />\n      <Tabs.Tab label="Oranges" tabId="orange" />\n      <Tabs.Tab label="Pineapples" tabId="pineapple" />\n      <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />\n    </Tabs.List>\n    <Tabs.Panel tabId="apple">\n      <div className="padding--all--s">🍎🍎🍎</div>\n    </Tabs.Panel>\n    <Tabs.Panel tabId="orange">\n      <div className="padding--all--s">🍊🍊🍊</div>\n    </Tabs.Panel>\n    <Tabs.Panel tabId="pineapple">\n      <div className="padding--all--s">🍍🍍🍍</div>\n    </Tabs.Panel>\n    <Tabs.Panel tabId="snowLeopard">\n      <div className="padding--all--s">️❄️🐆</div>\n    </Tabs.Panel>\n  </Tabs>',...Overview.parameters?.docs?.source}}},DefaultSelectedTab.parameters={...DefaultSelectedTab.parameters,docs:{...DefaultSelectedTab.parameters?.docs,source:{originalSource:'args => <Tabs {...args}>\n    <Tabs.List>\n      <Tabs.Tab label="Apples" tabId="apple" />\n      <Tabs.Tab label="Oranges" tabId="orange" />\n      <Tabs.Tab label="Pineapples" tabId="pineapple" />\n      <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />\n    </Tabs.List>\n    <Tabs.Panel tabId="apple">\n      <div className="padding--all--s">🍎🍎🍎</div>\n    </Tabs.Panel>\n    <Tabs.Panel tabId="orange">\n      <div className="padding--all--s">🍊🍊🍊</div>\n    </Tabs.Panel>\n    <Tabs.Panel tabId="pineapple">\n      <div className="padding--all--s">🍍🍍🍍</div>\n    </Tabs.Panel>\n    <Tabs.Panel tabId="snowLeopard">\n      <div className="padding--all--s">️❄️🐆</div>\n    </Tabs.Panel>\n  </Tabs>',...DefaultSelectedTab.parameters?.docs?.source}}},ResponsiveTabs.parameters={...ResponsiveTabs.parameters,docs:{...ResponsiveTabs.parameters?.docs,source:{originalSource:'args => <div style={{\n  display: "flex",\n  width: 200,\n  flexDirection: "column"\n}}>\n    <Tabs {...args}>\n      <Tabs.List>\n        <Tabs.Tab label="Apples" tabId="apple" />\n        <Tabs.Tab label="Oranges" tabId="orange" />\n        <Tabs.Tab label="Pineapples" tabId="pineapple" />\n        <Tabs.Tab label="Bird" tabId="bird" />\n        <Tabs.Tab label="Cat" tabId="cat" />\n        <Tabs.Tab label="Dog" tabId="dog" />\n        <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />\n        <Tabs.Tab label="My absolute favorite animal of all time" tabId="penguin" />\n      </Tabs.List>\n      <Tabs.Panel tabId="apple">\n        <div className="padding--all--s">🍎🍎🍎</div>\n      </Tabs.Panel>\n      <Tabs.Panel tabId="orange">\n        <div className="padding--all--s">🍊🍊🍊</div>\n      </Tabs.Panel>\n      <Tabs.Panel tabId="pineapple">\n        <div className="padding--all--s">🍍🍍🍍</div>\n      </Tabs.Panel>\n      <Tabs.Panel tabId="bird">\n        <div className="padding--all--s">🐦🐦🐦</div>\n      </Tabs.Panel>\n      <Tabs.Panel tabId="cat">\n        <div className="padding--all--s">🐈🐈🐈</div>\n      </Tabs.Panel>\n      <Tabs.Panel tabId="dog">\n        <div className="padding--all--s">🐕🐕🐕</div>\n      </Tabs.Panel>\n      <Tabs.Panel tabId="snowLeopard">\n        <div className="padding--all--s">️❄️🐆</div>\n      </Tabs.Panel>\n      <Tabs.Panel tabId="penguin">\n        <div className="padding--all--s">️🐧🐧🐧</div>\n      </Tabs.Panel>\n    </Tabs>\n  </div>',...ResponsiveTabs.parameters?.docs?.source}}},WithoutPanels.parameters={...WithoutPanels.parameters,docs:{...WithoutPanels.parameters?.docs,source:{originalSource:'args => <Tabs {...args}>\n    <Tabs.List>\n      <Tabs.Tab label="Apples" tabId="apple" />\n      <Tabs.Tab label="Oranges" tabId="orange" />\n      <Tabs.Tab label="Pineapples" tabId="pineapple" />\n    </Tabs.List>\n  </Tabs>',...WithoutPanels.parameters?.docs?.source}}},WithoutBorder.parameters={...WithoutBorder.parameters,docs:{...WithoutBorder.parameters?.docs,source:{originalSource:'() => <Tabs hasBorder={false}>\n    <Tabs.List>\n      <Tabs.Tab label="Apples" tabId="apple" />\n      <Tabs.Tab label="Oranges" tabId="orange" />\n      <Tabs.Tab label="Pineapples" tabId="pineapple" />\n    </Tabs.List>\n  </Tabs>',...WithoutBorder.parameters?.docs?.source}}},PaddedTabsList.parameters={...PaddedTabsList.parameters,docs:{...PaddedTabsList.parameters?.docs,source:{originalSource:'() => <Tabs>\n    <Tabs.List xPadding="l">\n      <Tabs.Tab label="Apples" tabId="apple" />\n      <Tabs.Tab label="Oranges" tabId="orange" />\n      <Tabs.Tab label="Pineapples" tabId="pineapple" />\n    </Tabs.List>\n  </Tabs>',...PaddedTabsList.parameters?.docs?.source}}},FullyControlledTabs.parameters={...FullyControlledTabs.parameters,docs:{...FullyControlledTabs.parameters?.docs,source:{originalSource:'() => {\n  const [selectedTab, setSelectedTab] = useState(1);\n  return <Tabs selectedIndex={selectedTab} onTabChange={index => setSelectedTab(index)}>\n      <Tabs.List>\n        <Tabs.Tab label="Apples" tabId="apple" />\n        <Tabs.Tab label="Oranges" tabId="orange" />\n        <Tabs.Tab label="Pineapples" tabId="pineapple" />\n      </Tabs.List>\n      <Tabs.Panel tabId="apple">\n        <div className="padding--all--s">🍎🍎🍎</div>\n      </Tabs.Panel>\n      <Tabs.Panel tabId="orange">\n        <div className="padding--all--s">🍊🍊🍊</div>\n      </Tabs.Panel>\n      <Tabs.Panel tabId="pineapple">\n        <div className="padding--all--s">🍍🍍🍍</div>\n      </Tabs.Panel>\n    </Tabs>;\n}',...FullyControlledTabs.parameters?.docs?.source}}}},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);