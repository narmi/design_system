"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[5278],{"./src/Sidebar/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js");var react=__webpack_require__("./node_modules/react/index.js"),classcat=(__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/classcat/index.js")),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Row=__webpack_require__("./src/Row/index.js"),selection=__webpack_require__("./src/icons/selection.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),VALID_ICON_NAMES=selection.Pt.map((function(icon){return icon.properties.name})),SidebarItem=function SidebarItem(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})};SidebarItem.propTypes={onClick:prop_types_default().func,isActive:prop_types_default().bool,label:prop_types_default().string.isRequired,startIcon:prop_types_default().oneOf(VALID_ICON_NAMES),endIcon:prop_types_default().oneOf(VALID_ICON_NAMES)},SidebarItem.displayName="Sidebar.Item",SidebarItem.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Item",props:{onClick:{description:"Click callback, with event object passed as argument",type:{name:"func"},required:!1},isActive:{description:"Whether the tab is currently selected",type:{name:"bool"},required:!1},label:{description:"Label for the tab",type:{name:"string"},required:!0},startIcon:{description:"Name of Narmi icon to place at the start of the label",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},endIcon:{description:"Name of Narmi icon to place at the end of the label",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1}}};const Sidebar_SidebarItem=SidebarItem;var Sidebar=function Sidebar(_ref){var _ref$kind=_ref.kind,kind=void 0===_ref$kind?"nav":_ref$kind,children=_ref.children,mappedSidebarItems=react.Children.toArray(children).map((function(item){return(0,jsx_runtime.jsx)("li",{className:"margin--bottom--s",children:(0,jsx_runtime.jsx)("button",{onClick:item.props.onClick,className:(0,classcat.A)(["button--reset","sidebar-item",{"sidebar-item--active":item.props.isActive}]),children:(0,jsx_runtime.jsxs)(Row.A,{gapSize:"xs",children:[item.props.startIcon&&(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)("span",{className:"narmi-icon-".concat(item.props.startIcon," sidebar-icon")})}),(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:item.props.label}),item.props.endIcon&&(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)("span",{className:"narmi-icon-".concat(item.props.endIcon," .sidebar-icon")})})]})})},item.props.label)}));return(0,jsx_runtime.jsx)("nav",{className:"sidebar--".concat(kind),children:(0,jsx_runtime.jsx)("ul",{className:"list--reset",children:mappedSidebarItems})})};Sidebar.displayName="Sidebar",Sidebar.propTypes={children:prop_types_default().arrayOf(prop_types_default().node),kind:prop_types_default().oneOf(["nav"])},Sidebar.Item=Sidebar_SidebarItem,Sidebar.__docgenInfo={description:"Narmi Sidebar component",methods:[],displayName:"Sidebar",props:{kind:{defaultValue:{value:'"nav"',computed:!1},description:"Kind of Sidebar to render\n\n`nav`: navigation sidebar",type:{name:"enum",value:[{value:'"nav"',computed:!1}]},required:!1},children:{description:"Accepts any content as children",type:{name:"arrayOf",value:{name:"node"}},required:!1}}};const src_Sidebar=Sidebar;var _Overview$parameters,_Overview$parameters2,_WithIcons$parameters,_WithIcons$parameters2;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Template=function Template(args){return(0,jsx_runtime.jsx)(src_Sidebar,_objectSpread({},args))};Template.displayName="Template";var children=[(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Home",isActive:!0,onClick:function onClick(){return console.log("clicked")}},"home"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Accounts",onClick:function onClick(){return console.log("clicked")}},"accounts"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Transactions",onClick:function onClick(){return console.log("clicked")}},"transactions"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Settings",onClick:function onClick(){return console.log("clicked")}},"settings"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Help",onClick:function onClick(){return console.log("clicked")}},"help"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Logout",onClick:function onClick(){return console.log("clicked")}},"logout")],childrenWithIcons=[(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Home",startIcon:"feed",isActive:!0,onClick:function onClick(){return console.log("clicked")}},"home"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Accounts",startIcon:"solid-circle",onClick:function onClick(){return console.log("clicked")}},"accounts"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Transactions",startIcon:"bill",onClick:function onClick(){return console.log("clicked")}},"transactions"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Settings",startIcon:"settings",onClick:function onClick(){return console.log("clicked")}},"settings"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Help",startIcon:"question",onClick:function onClick(){return console.log("clicked")}},"help"),(0,jsx_runtime.jsx)(Sidebar_SidebarItem,{label:"Logout",startIcon:"log-out",endIcon:"smile",onClick:function onClick(){return console.log("clicked")}},"logout")],Overview=Template.bind({});Overview.args={children};var WithIcons=Template.bind({});WithIcons.args={children:childrenWithIcons};const index_stories={title:"Components/Sidebar",component:src_Sidebar,subcomponents:{"Sidebar.Item":Sidebar_SidebarItem}};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Sidebar {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),WithIcons.parameters=_objectSpread(_objectSpread({},WithIcons.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIcons$parameters=WithIcons.parameters)||void 0===_WithIcons$parameters?void 0:_WithIcons$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Sidebar {...args} />"},null===(_WithIcons$parameters2=WithIcons.parameters)||void 0===_WithIcons$parameters2||null===(_WithIcons$parameters2=_WithIcons$parameters2.docs)||void 0===_WithIcons$parameters2?void 0:_WithIcons$parameters2.source)})});var __namedExportsOrder=["Overview","WithIcons"]},"./src/Row/RowItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),RowItem=function RowItem(_ref){var _ref$shrink=_ref.shrink,shrink=void 0!==_ref$shrink&&_ref$shrink,_ref$as=_ref.as,as=void 0===_ref$as?"div":_ref$as,children=_ref.children,testId=_ref.testId;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId,children})};RowItem.displayName="RowItem",RowItem.propTypes={shrink:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["div","li"]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.",methods:[],displayName:"RowItem",props:{shrink:{defaultValue:{value:"false",computed:!1},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",type:{name:"bool"},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"li"',computed:!1}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=RowItem},"./src/Row/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_getRowStyle=function _getRowStyle(alignItems,justifyContent,gapSize){var result={};return gapSize&&(result.gap="none"===gapSize?"0":"var(--space-".concat(gapSize,")")),result.alignItems="top"===alignItems?"flex-start":alignItems,result.justifyContent="flex-".concat(justifyContent),result},Row=function Row(_ref){var _ref$alignItems=_ref.alignItems,alignItems=void 0===_ref$alignItems?"top":_ref$alignItems,_ref$justifyContent=_ref.justifyContent,justifyContent=void 0===_ref$justifyContent?"start":_ref$justifyContent,_ref$gapSize=_ref.gapSize,gapSize=void 0===_ref$gapSize?"l":_ref$gapSize,_ref$as=_ref.as,as=void 0===_ref$as?"div":_ref$as,children=_ref.children,testId=_ref.testId;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:"nds-row",style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId,children})};Row.displayName="Row",Row.propTypes={gapSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["xxs","xs","s","m","l","xl","none"]),alignItems:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["top","center"]),justifyContent:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["start","end"]),as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["div","ul"]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired,testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A,Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width of its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.",methods:[],displayName:"Row",props:{alignItems:{defaultValue:{value:'"top"',computed:!1},description:"Controls vertical alignment of items within the row",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"center"',computed:!1}]},required:!1},justifyContent:{defaultValue:{value:'"start"',computed:!1},description:"Controls horizontal flex justification",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1}]},required:!1},gapSize:{defaultValue:{value:'"l"',computed:!1},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"ul"',computed:!1}]},required:!1},children:{description:"Children must be of type `Row.Item`",type:{name:"arrayOf",value:{name:"node"}},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Row},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["elementType","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=function AsElement(_ref){var _ref$elementType=_ref.elementType,elementType=void 0===_ref$elementType?"div":_ref$elementType,children=_ref.children,rest=_objectWithoutProperties(_ref,_excluded),Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(Element,_objectSpread(_objectSpread({},rest),{},{children}))};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_21___default().oneOf(VALID_ELEMENTS).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_21___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_21___default().node,prop_types__WEBPACK_IMPORTED_MODULE_21___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_21___default().node)])},AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=AsElement},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})},"./node_modules/core-js/internals/check-correctness-of-iteration.js":(module,__unused_webpack_exports,__webpack_require__)=>{var ITERATOR=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("iterator"),SAFE_CLOSING=!1;try{var called=0,iteratorWithReturn={next:function(){return{done:!!called++}},return:function(){SAFE_CLOSING=!0}};iteratorWithReturn[ITERATOR]=function(){return this},Array.from(iteratorWithReturn,(function(){throw 2}))}catch(error){}module.exports=function(exec,SKIP_CLOSING){try{if(!SKIP_CLOSING&&!SAFE_CLOSING)return!1}catch(error){return!1}var ITERATION_SUPPORT=!1;try{var object={};object[ITERATOR]=function(){return{next:function(){return{done:ITERATION_SUPPORT=!0}}}},exec(object)}catch(error){}return ITERATION_SUPPORT}},"./node_modules/core-js/internals/get-iterator-method.js":(module,__unused_webpack_exports,__webpack_require__)=>{var classof=__webpack_require__("./node_modules/core-js/internals/classof.js"),getMethod=__webpack_require__("./node_modules/core-js/internals/get-method.js"),isNullOrUndefined=__webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js"),Iterators=__webpack_require__("./node_modules/core-js/internals/iterators.js"),ITERATOR=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("iterator");module.exports=function(it){if(!isNullOrUndefined(it))return getMethod(it,ITERATOR)||getMethod(it,"@@iterator")||Iterators[classof(it)]}},"./node_modules/core-js/internals/get-iterator.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),tryToString=__webpack_require__("./node_modules/core-js/internals/try-to-string.js"),getIteratorMethod=__webpack_require__("./node_modules/core-js/internals/get-iterator-method.js"),$TypeError=TypeError;module.exports=function(argument,usingIterator){var iteratorMethod=arguments.length<2?getIteratorMethod(argument):usingIterator;if(aCallable(iteratorMethod))return anObject(call(iteratorMethod,argument));throw new $TypeError(tryToString(argument)+" is not iterable")}},"./node_modules/core-js/internals/is-array-iterator-method.js":(module,__unused_webpack_exports,__webpack_require__)=>{var wellKnownSymbol=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js"),Iterators=__webpack_require__("./node_modules/core-js/internals/iterators.js"),ITERATOR=wellKnownSymbol("iterator"),ArrayPrototype=Array.prototype;module.exports=function(it){return void 0!==it&&(Iterators.Array===it||ArrayPrototype[ITERATOR]===it)}},"./node_modules/core-js/internals/iterator-close.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),getMethod=__webpack_require__("./node_modules/core-js/internals/get-method.js");module.exports=function(iterator,kind,value){var innerResult,innerError;anObject(iterator);try{if(!(innerResult=getMethod(iterator,"return"))){if("throw"===kind)throw value;return value}innerResult=call(innerResult,iterator)}catch(error){innerError=!0,innerResult=error}if("throw"===kind)throw value;if(innerError)throw innerResult;return anObject(innerResult),value}},"./node_modules/core-js/modules/es.array.includes.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$includes=__webpack_require__("./node_modules/core-js/internals/array-includes.js").includes,fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),addToUnscopables=__webpack_require__("./node_modules/core-js/internals/add-to-unscopables.js");$({target:"Array",proto:!0,forced:fails((function(){return!Array(1).includes()}))},{includes:function includes(el){return $includes(this,el,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables("includes")},"./node_modules/core-js/modules/es.array.index-of.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js"),$indexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),nativeIndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!nativeIndexOf&&1/nativeIndexOf([1],1,-0)<0;$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!arrayMethodIsStrict("indexOf")},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?nativeIndexOf(this,searchElement,fromIndex)||0:$indexOf(this,searchElement,fromIndex)}})},"./node_modules/core-js/modules/es.array.map.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$map=__webpack_require__("./node_modules/core-js/internals/array-iteration.js").map;$({target:"Array",proto:!0,forced:!__webpack_require__("./node_modules/core-js/internals/array-method-has-species-support.js")("map")},{map:function map(callbackfn){return $map(this,callbackfn,arguments.length>1?arguments[1]:void 0)}})}}]);