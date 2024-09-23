"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[5278],{"./src/Sidebar/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),classcat=__webpack_require__("./node_modules/classcat/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Row=__webpack_require__("./src/Row/index.js"),selection=__webpack_require__("./src/icons/selection.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VALID_ICON_NAMES=selection.icons.map((icon=>icon.properties.name)),SidebarItem=()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{});SidebarItem.propTypes={onClick:prop_types_default().func,isActive:prop_types_default().bool,label:prop_types_default().string.isRequired,startIcon:prop_types_default().oneOf(VALID_ICON_NAMES),endIcon:prop_types_default().oneOf(VALID_ICON_NAMES)},SidebarItem.displayName="Sidebar.Item",SidebarItem.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Item",props:{onClick:{description:"Click callback, with event object passed as argument",type:{name:"func"},required:!1},isActive:{description:"Whether the tab is currently selected",type:{name:"bool"},required:!1},label:{description:"Label for the tab",type:{name:"string"},required:!0},startIcon:{description:"Name of Narmi icon to place at the start of the label",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},endIcon:{description:"Name of Narmi icon to place at the end of the label",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1}}};const Sidebar_SidebarItem=SidebarItem,Sidebar=_ref=>{let{kind="nav",children}=_ref;const mappedSidebarItems=react.Children.toArray(children).map((item=>(0,jsx_runtime.jsx)("li",{className:"margin--bottom--s",children:(0,jsx_runtime.jsx)("button",{onClick:item.props.onClick,className:(0,classcat.A)(["button--reset","sidebar-item",{"sidebar-item--active":item.props.isActive}]),children:(0,jsx_runtime.jsxs)(Row.A,{gapSize:"xs",children:[item.props.startIcon&&(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)("span",{className:"narmi-icon-".concat(item.props.startIcon," sidebar-icon")})}),(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:item.props.label}),item.props.endIcon&&(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)("span",{className:"narmi-icon-".concat(item.props.endIcon," .sidebar-icon")})})]})})},item.props.label)));return(0,jsx_runtime.jsx)("nav",{className:"sidebar--".concat(kind),children:(0,jsx_runtime.jsx)("ul",{className:"list--reset",children:mappedSidebarItems})})};Sidebar.displayName="Sidebar",Sidebar.propTypes={children:prop_types_default().arrayOf(prop_types_default().node),kind:prop_types_default().oneOf(["nav"])},Sidebar.Item=Sidebar_SidebarItem,Sidebar.__docgenInfo={description:"Narmi Sidebar component",methods:[],displayName:"Sidebar",props:{kind:{defaultValue:{value:'"nav"',computed:!1},description:"Kind of Sidebar to render\n\n`nav`: navigation sidebar",type:{name:"enum",value:[{value:'"nav"',computed:!1}]},required:!1},children:{description:"Accepts any content as children",type:{name:"arrayOf",value:{name:"node"}},required:!1}}};const src_Sidebar=Sidebar;var _Overview$parameters,_Overview$parameters2,_WithIcons$parameters,_WithIcons$parameters2;const Template=args=>(0,jsx_runtime.jsx)(src_Sidebar,{...args});Template.displayName="Template";const children=[(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Home",isActive:!0,onClick:()=>console.log("clicked")},"home"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Accounts",onClick:()=>console.log("clicked")},"accounts"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Transactions",onClick:()=>console.log("clicked")},"transactions"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Settings",onClick:()=>console.log("clicked")},"settings"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Help",onClick:()=>console.log("clicked")},"help"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Logout",onClick:()=>console.log("clicked")},"logout")],childrenWithIcons=[(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Home",startIcon:"feed",isActive:!0,onClick:()=>console.log("clicked")},"home"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Accounts",startIcon:"solid-circle",onClick:()=>console.log("clicked")},"accounts"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Transactions",startIcon:"bill",onClick:()=>console.log("clicked")},"transactions"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Settings",startIcon:"settings",onClick:()=>console.log("clicked")},"settings"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Help",startIcon:"question",onClick:()=>console.log("clicked")},"help"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Logout",startIcon:"log-out",endIcon:"smile",onClick:()=>console.log("clicked")},"logout")],Overview=Template.bind({});Overview.args={children};const WithIcons=Template.bind({});WithIcons.args={children:childrenWithIcons};const index_stories={title:"Components/Sidebar",component:src_Sidebar,subcomponents:{"Sidebar.Item":Sidebar_SidebarItem}};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <Sidebar {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...null===(_WithIcons$parameters=WithIcons.parameters)||void 0===_WithIcons$parameters?void 0:_WithIcons$parameters.docs,source:{originalSource:"args => <Sidebar {...args} />",...null===(_WithIcons$parameters2=WithIcons.parameters)||void 0===_WithIcons$parameters2||null===(_WithIcons$parameters2=_WithIcons$parameters2.docs)||void 0===_WithIcons$parameters2?void 0:_WithIcons$parameters2.source}}};const __namedExportsOrder=["Overview","WithIcons"]},"./src/Row/RowItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId,children})};RowItem.displayName="RowItem",RowItem.propTypes={shrink:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["div","li"]),className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",methods:[],displayName:"RowItem",props:{shrink:{defaultValue:{value:"false",computed:!1},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",type:{name:"bool"},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"li"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=RowItem},"./src/Row/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.js"),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{let result={};return gapSize&&(result.gap="none"===gapSize?"0":"var(--space-".concat(gapSize,")")),result.alignItems="top"===alignItems?"flex-start":alignItems,result.justifyContent="flex-".concat(justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId,children})};Row.displayName="Row",Row.propTypes={gapSize:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["xxs","xs","s","m","l","xl","none"]),alignItems:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["top","center"]),justifyContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["start","end"]),as:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["div","ul"]),className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().node).isRequired,testId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A,Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width of its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",methods:[],displayName:"Row",props:{alignItems:{defaultValue:{value:'"top"',computed:!1},description:"Controls vertical alignment of items within the row",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"center"',computed:!1}]},required:!1},justifyContent:{defaultValue:{value:'"start"',computed:!1},description:"Controls horizontal flex justification",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1}]},required:!1},gapSize:{defaultValue:{value:'"l"',computed:!1},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"ul"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",type:{name:"string"},required:!1},children:{description:"Children must be of type `Row.Item`",type:{name:"arrayOf",value:{name:"node"}},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Row},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children,...rest}=_ref;if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,{...rest,children})};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)])},AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=AsElement},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);