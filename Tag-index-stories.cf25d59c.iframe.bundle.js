"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[6706],{"./src/Tag/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,TagWithText:()=>TagWithText,UsingWithState:()=>UsingWithState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),Row=__webpack_require__("./src/Row/index.tsx"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classcat=__webpack_require__("./node_modules/classcat/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},Tag=_ref=>{let{kind="subdued",onDismiss=noop,dismissible,label,testId}=_ref;return(0,jsx_runtime.jsxs)("div",{className:(0,classcat.A)(["nds-typography","nds-tag","nds-tag--".concat(kind)]),"data-testid":testId,children:[(0,jsx_runtime.jsx)("div",{className:"whiteSpace--truncate",children:label}),(dismissible||"dismissible"===kind)&&(0,jsx_runtime.jsx)("div",{className:"narmi-icon-x margin--left--xs",role:"button",tabIndex:0,onClick:onDismiss,onKeyUp:_ref2=>{let{key}=_ref2;"Enter"!==key&&" "!=key||onDismiss()}})]})};Tag.displayName="Tag",Tag.propTypes={kind:prop_types_default().oneOf(["subdued","subdued-secondary","dismissible","outline","success","warn","error"]),onDismiss:prop_types_default().func,dismissible:prop_types_default().bool,label:prop_types_default().string,testId:prop_types_default().string};const src_Tag=Tag;var _Overview$parameters,_Overview$parameters2,_UsingWithState$param,_UsingWithState$param2,_TagWithText$paramete,_TagWithText$paramete2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Tag.__docgenInfo={description:"A rounded rectangle inline label.\nThe user has the option of firing a callback for 'dismissible' Tags.",methods:[],displayName:"Tag",props:{kind:{defaultValue:{value:'"subdued"',computed:!1},description:'Variant of Tag. The "dismissible" kind is deprecated in favor of the dismissible property.',type:{name:"enum",value:[{value:'"subdued"',computed:!1},{value:'"subdued-secondary"',computed:!1},{value:'"dismissible"',computed:!1},{value:'"outline"',computed:!1},{value:'"success"',computed:!1},{value:'"warn"',computed:!1},{value:'"error"',computed:!1}]},required:!1},onDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback for user dismissal action\n(only applicable for `dismissible` kind)",type:{name:"func"},required:!1},dismissible:{description:"Whether the tag is dismissible",type:{name:"bool"},required:!1},label:{description:"Label text of tag.",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const Template=args=>(0,jsx_runtime.jsx)(src_Tag,_objectSpread({},args));Template.displayName="Template";const InteractiveTemplate=args=>{const[isTagVisible,setTagVisible]=(0,react.useState)(!0);return(0,jsx_runtime.jsx)("div",{children:isTagVisible?(0,jsx_runtime.jsx)(src_Tag,_objectSpread({label:"Label",kind:"dismissible",onDismiss:()=>{setTagVisible(!1)}},args)):(0,jsx_runtime.jsx)("button",{onClick:()=>{setTagVisible(!0)},children:"Make tag come back"})})};InteractiveTemplate.displayName="InteractiveTemplate";const Overview=Template.bind({});Overview.args={kind:"subdued",label:"Label"};const UsingWithState=InteractiveTemplate.bind({}),TagWithText=()=>(0,jsx_runtime.jsxs)(Row.A,{alignItems:"center",gapSize:"s",children:[(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)("p",{children:"Transfer from Wells Fargo-9876"})}),(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)(src_Tag,{label:"Pending",kind:"outline"})})]});TagWithText.displayName="TagWithText",TagWithText.parameters={docs:{description:{story:"The `Tag` is designed to match the height of default body text"}}};const index_stories={title:"Components/Tag",component:src_Tag};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Tag {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),UsingWithState.parameters=_objectSpread(_objectSpread({},UsingWithState.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_UsingWithState$param=UsingWithState.parameters)||void 0===_UsingWithState$param?void 0:_UsingWithState$param.docs),{},{source:_objectSpread({originalSource:'args => {\n  const [isTagVisible, setTagVisible] = useState(true);\n  return <div>\n      {isTagVisible ? <Tag label={"Label"} kind={"dismissible"} onDismiss={() => {\n      setTagVisible(false);\n    }} {...args} /> : <button onClick={() => {\n      setTagVisible(true);\n    }}>\n          Make tag come back\n        </button>}\n    </div>;\n}'},null===(_UsingWithState$param2=UsingWithState.parameters)||void 0===_UsingWithState$param2||null===(_UsingWithState$param2=_UsingWithState$param2.docs)||void 0===_UsingWithState$param2?void 0:_UsingWithState$param2.source)})}),TagWithText.parameters=_objectSpread(_objectSpread({},TagWithText.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TagWithText$paramete=TagWithText.parameters)||void 0===_TagWithText$paramete?void 0:_TagWithText$paramete.docs),{},{source:_objectSpread({originalSource:'() => <Row alignItems="center" gapSize="s">\n    <Row.Item shrink>\n      <p>Transfer from Wells Fargo-9876</p>\n    </Row.Item>\n    <Row.Item shrink>\n      <Tag label="Pending" kind="outline" />\n    </Row.Item>\n  </Row>'},null===(_TagWithText$paramete2=TagWithText.parameters)||void 0===_TagWithText$paramete2||null===(_TagWithText$paramete2=_TagWithText$paramete2.docs)||void 0===_TagWithText$paramete2?void 0:_TagWithText$paramete2.source)})});const __namedExportsOrder=["Overview","UsingWithState","TagWithText"]},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["elementType","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children}=_ref,rest=_objectWithoutProperties(_ref,_excluded);if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,_objectSpread(_objectSpread({},rest),{},{children}))};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./src/Row/RowItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId,children})};RowItem.displayName="RowItem";const __WEBPACK_DEFAULT_EXPORT__=RowItem;try{RowItem.displayName="RowItem",RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"RowItem",props:{shrink:{defaultValue:{value:"false"},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",name:"shrink",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"li"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/RowItem.tsx#RowItem"]={docgenInfo:RowItem.__docgenInfo,name:"RowItem",path:"src/Row/RowItem.tsx#RowItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/Row/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.tsx"),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{const result={gap:"var(--space-".concat(gapSize,")"),alignItems:"flex-start",justifyContent:"flex-".concat(justifyContent)};return gapSize&&"none"===gapSize&&(result.gap="0"),"top"!==alignItems&&(result.alignItems=alignItems),"space-between"===justifyContent&&(result.justifyContent=justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId,children})};Row.displayName="Row",Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A;const __WEBPACK_DEFAULT_EXPORT__=Row;try{Row.displayName="Row",Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width with its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"Row",props:{alignItems:{defaultValue:{value:"top"},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},justifyContent:{defaultValue:{value:"start"},description:"Controls vertical alignment of items within the row",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"space-between"'}]}},gapSize:{defaultValue:{value:"l"},description:"Controls horizontal flex justification",name:"gapSize",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"ul"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children must be of type `Row.Item`",name:"children",required:!0,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/index.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/Row/index.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);