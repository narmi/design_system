"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[7292],{"./src/Toggle/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullyControlled:()=>FullyControlled,Overview:()=>Overview,WhenDisabled:()=>WhenDisabled,WhenIsLoading:()=>WhenIsLoading,WithCustomLabel:()=>WithCustomLabel,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classcat=__webpack_require__("./node_modules/classcat/index.js"),LoadingShim=__webpack_require__("./src/LoadingShim/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toggle=_ref=>{let{defaultActive=!1,isActive,disabled=!1,isLoading,onChange=()=>{},labelledBy,label,testId,enabledLabel="on",disabledLabel="off"}=_ref;const isControlled=void 0!==isActive,[active,setActive]=(0,react.useState)(defaultActive);(0,react.useEffect)((()=>{isControlled&&setActive(isActive)}),[isActive,isControlled]);const buttonJsx=(0,jsx_runtime.jsx)("div",{className:(0,classcat.A)(["nds-toggle-button-container",{"nds-toggle-button-container--active":active}]),children:(0,jsx_runtime.jsxs)("button",{className:(0,classcat.A)(["resetButton","nds-toggle",{"nds-toggle--loading":isLoading}]),type:"button",role:"switch","aria-checked":active,onClick:()=>{isControlled||setActive(!active),onChange(!active)},disabled:disabled||isLoading,"aria-labelledby":labelledBy,"data-testid":testId,children:[(0,jsx_runtime.jsx)("span",{className:"nds-toggle-indicator elevation--low"}),(0,jsx_runtime.jsx)("div",{className:"nds-toggle-loading-overlay",children:(0,jsx_runtime.jsx)(LoadingShim.A,{size:"s",isLoading:!0})}),(0,jsx_runtime.jsx)("span",{className:"nds-toggle-buttonText",children:active?enabledLabel:disabledLabel})]})});return label?(0,jsx_runtime.jsxs)("label",{className:"alignChild--center--center","aria-disabled":disabled||isLoading,children:[buttonJsx,(0,jsx_runtime.jsx)("span",{className:"padding--left--xs",children:label})]}):buttonJsx};Toggle.propTypes={onChange:prop_types_default().func,defaultActive:prop_types_default().bool,isActive:prop_types_default().bool,disabled:prop_types_default().bool,isLoading:prop_types_default().bool,label:prop_types_default().string,labelledBy:prop_types_default().string,testId:prop_types_default().string,enabledLabel:prop_types_default().string,disabledLabel:prop_types_default().string};const src_Toggle=Toggle;Toggle.__docgenInfo={description:"Checkbox behavior with the visual treatment of a physical toggle switch.",methods:[],displayName:"Toggle",props:{defaultActive:{defaultValue:{value:"false",computed:!1},description:"When set to `true`, the toggle will initially render as active",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Shows a disabled state for the toggle when set to `true`.",type:{name:"bool"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"Callback invoked with current active state (bool) as the function argument\nwhen user changes the active state of the Toggle",type:{name:"func"},required:!1},enabledLabel:{defaultValue:{value:'"on"',computed:!1},description:"Label for enabled state. Not displayed, used for screen readers.",type:{name:"string"},required:!1},disabledLabel:{defaultValue:{value:'"off"',computed:!1},description:"Label for disabled state. Not displayed, used for screen readers.",type:{name:"string"},required:!1},isActive:{description:"Sets active state of toggle; makes the component fully controlled.\nWhen using `isActive` you **must** use the `onChange` callback\nto update the active state of the toggle.",type:{name:"bool"},required:!1},isLoading:{description:"Shows a loading state for the toggle when set to `true`.",type:{name:"bool"},required:!1},label:{description:"Label element to render to the right of the toggle",type:{name:"string"},required:!1},labelledBy:{description:"ID of element that labels the toggle control (e.g. `my-label-element`)",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};var _Overview$parameters,_Overview$parameters2,_WithLabel$parameters,_WithLabel$parameters2,_WithCustomLabel$para,_WithCustomLabel$para2,_FullyControlled$para,_FullyControlled$para2,_WhenIsLoading$parame,_WhenIsLoading$parame2,_WhenDisabled$paramet,_WhenDisabled$paramet2,Row=__webpack_require__("./src/Row/index.tsx");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Template=args=>(0,jsx_runtime.jsx)(src_Toggle,_objectSpread({},args));Template.displayName="Template";const Overview=Template.bind({}),WithLabel=()=>(0,jsx_runtime.jsx)(src_Toggle,{defaultActive:!0,label:"Include hidden accounts"});WithLabel.displayName="WithLabel";const WithCustomLabel=()=>(0,jsx_runtime.jsx)("div",{className:"padding--y--xs border--top",children:(0,jsx_runtime.jsxs)(Row.A,{alignItems:"center",children:[(0,jsx_runtime.jsx)(Row.A.Item,{children:(0,jsx_runtime.jsx)("label",{id:"my-custom-label",children:"Custom label on the left"})}),(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)(src_Toggle,{labelledBy:"my-custom-label"})})]})});WithCustomLabel.displayName="WithCustomLabel";const FullyControlled=()=>{const[isActive,setIsActive]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src_Toggle,{label:"Toggle state fully controlled",isActive,onChange:()=>setIsActive((isActive=>!isActive))}),(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)("div",{className:"alignChild--center--center",children:(0,jsx_runtime.jsx)("button",{onClick:()=>setIsActive(!1),children:"Deactivate toggle"})})]})},WhenIsLoading=()=>{const[isLoading,setIsLoading]=(0,react.useState)(!1),[isActive,setIsActive]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(src_Toggle,{label:"Click me",isActive,onChange:isActive=>{setIsLoading(!0),setTimeout((()=>{setIsActive(isActive),setIsLoading(!1)}),2e3)},isLoading})};WhenIsLoading.displayName="WhenIsLoading";const WhenDisabled=()=>(0,jsx_runtime.jsx)(src_Toggle,{disabled:!0});WhenDisabled.displayName="WhenDisabled";const index_stories={title:"Components/Toggle",component:src_Toggle};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Toggle {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),WithLabel.parameters=_objectSpread(_objectSpread({},WithLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithLabel$parameters=WithLabel.parameters)||void 0===_WithLabel$parameters?void 0:_WithLabel$parameters.docs),{},{source:_objectSpread({originalSource:'() => <Toggle defaultActive={true} label="Include hidden accounts" />'},null===(_WithLabel$parameters2=WithLabel.parameters)||void 0===_WithLabel$parameters2||null===(_WithLabel$parameters2=_WithLabel$parameters2.docs)||void 0===_WithLabel$parameters2?void 0:_WithLabel$parameters2.source)})}),WithCustomLabel.parameters=_objectSpread(_objectSpread({},WithCustomLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithCustomLabel$para=WithCustomLabel.parameters)||void 0===_WithCustomLabel$para?void 0:_WithCustomLabel$para.docs),{},{source:_objectSpread({originalSource:'() => <div className="padding--y--xs border--top">\n    <Row alignItems="center">\n      <Row.Item>\n        <label id="my-custom-label">Custom label on the left</label>\n      </Row.Item>\n      <Row.Item shrink>\n        <Toggle labelledBy="my-custom-label" />\n      </Row.Item>\n    </Row>\n  </div>'},null===(_WithCustomLabel$para2=WithCustomLabel.parameters)||void 0===_WithCustomLabel$para2||null===(_WithCustomLabel$para2=_WithCustomLabel$para2.docs)||void 0===_WithCustomLabel$para2?void 0:_WithCustomLabel$para2.source)})}),FullyControlled.parameters=_objectSpread(_objectSpread({},FullyControlled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FullyControlled$para=FullyControlled.parameters)||void 0===_FullyControlled$para?void 0:_FullyControlled$para.docs),{},{source:_objectSpread({originalSource:'() => {\n  const [isActive, setIsActive] = useState(false);\n  return <>\n      <Toggle label="Toggle state fully controlled" isActive={isActive} onChange={() => setIsActive(isActive => !isActive)} />\n      <hr />\n      <div className="alignChild--center--center">\n        <button onClick={() => setIsActive(false)}>Deactivate toggle</button>\n      </div>\n    </>;\n}'},null===(_FullyControlled$para2=FullyControlled.parameters)||void 0===_FullyControlled$para2||null===(_FullyControlled$para2=_FullyControlled$para2.docs)||void 0===_FullyControlled$para2?void 0:_FullyControlled$para2.source)})}),WhenIsLoading.parameters=_objectSpread(_objectSpread({},WhenIsLoading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WhenIsLoading$parame=WhenIsLoading.parameters)||void 0===_WhenIsLoading$parame?void 0:_WhenIsLoading$parame.docs),{},{source:_objectSpread({originalSource:'() => {\n  const [isLoading, setIsLoading] = useState(false);\n  const [isActive, setIsActive] = useState(false);\n  const onToggle = isActive => {\n    setIsLoading(true);\n    setTimeout(() => {\n      setIsActive(isActive);\n      setIsLoading(false);\n    }, 2000);\n  };\n  return <Toggle label="Click me" isActive={isActive} onChange={onToggle} isLoading={isLoading} />;\n}'},null===(_WhenIsLoading$parame2=WhenIsLoading.parameters)||void 0===_WhenIsLoading$parame2||null===(_WhenIsLoading$parame2=_WhenIsLoading$parame2.docs)||void 0===_WhenIsLoading$parame2?void 0:_WhenIsLoading$parame2.source)})}),WhenDisabled.parameters=_objectSpread(_objectSpread({},WhenDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WhenDisabled$paramet=WhenDisabled.parameters)||void 0===_WhenDisabled$paramet?void 0:_WhenDisabled$paramet.docs),{},{source:_objectSpread({originalSource:"() => <Toggle disabled />"},null===(_WhenDisabled$paramet2=WhenDisabled.parameters)||void 0===_WhenDisabled$paramet2||null===(_WhenDisabled$paramet2=_WhenDisabled$paramet2.docs)||void 0===_WhenDisabled$paramet2?void 0:_WhenDisabled$paramet2.source)})});const __namedExportsOrder=["Overview","WithLabel","WithCustomLabel","FullyControlled","WhenIsLoading","WhenDisabled"]},"./src/LoadingShim/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LoadingShim=_ref=>{let{isLoading=!1,children,testId,size="l"}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{"data-testid":testId||"nds-loadingshim","aria-live":"polite","aria-busy":isLoading.toString(),style:{position:"relative"},children:[isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)(["nds-loadingShim",{"nds-loadingShim--small":"s"===size}]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{title:"Loading...",role:"img",className:"nds-loadingShim-indicator",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:" "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:" "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:" "})]})}),children]})};LoadingShim.displayName="LoadingShim",LoadingShim.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,isLoading:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["s","l"])};const __WEBPACK_DEFAULT_EXPORT__=LoadingShim;LoadingShim.__docgenInfo={description:"Used to wrap a block of loadable content. When `isLoading` is set to true,\nthe content area will have an overlay and loading animation.",methods:[],displayName:"LoadingShim",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"When `true`, the loading shim appears over child content",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"l"',computed:!1},description:"Size of the loading indicator",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"l"',computed:!1}]},required:!1},children:{description:"Loadable content area - will render normally unless `isLoading` is true",type:{name:"node"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/Row/RowItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId,children})};RowItem.displayName="RowItem";const __WEBPACK_DEFAULT_EXPORT__=RowItem;RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",methods:[],displayName:"RowItem",props:{shrink:{required:!1,tsType:{name:"boolean"},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"union",raw:'"div" | "span" | "li"',elements:[{name:"literal",value:'"div"'},{name:"literal",value:'"span"'},{name:"literal",value:'"li"'}]},description:"The html element to render as the root node of `Row`",defaultValue:{value:'"div"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",defaultValue:{value:'""',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},testId:{required:!1,tsType:{name:"string"},description:"Optional value for `data-testid` attribute"}}}},"./src/Row/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.tsx"),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{const result={gap:"var(--space-".concat(gapSize,")"),alignItems:"flex-start",justifyContent:"flex-".concat(justifyContent)};return gapSize&&"none"===gapSize&&(result.gap="0"),"top"!==alignItems&&(result.alignItems=alignItems),"space-between"===justifyContent&&(result.justifyContent=justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId,children})};Row.displayName="Row",Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A;const __WEBPACK_DEFAULT_EXPORT__=Row;Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width with its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:'{\n  shrink = false,\n  as = "div",\n  className = "",\n  children,\n  testId,\n}: RowItemProps',optional:!1,type:{name:"RowItemProps",alias:"RowItemProps"}}],returns:null}],displayName:"Row",props:{alignItems:{required:!1,tsType:{name:"union",raw:'"top" | "center"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"center"'}]},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',defaultValue:{value:'"top"',computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "space-between"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"space-between"'}]},description:"Controls vertical alignment of items within the row",defaultValue:{value:'"start"',computed:!1}},gapSize:{required:!1,tsType:{name:"union",raw:'"xxs" | "xs" | "s" | "m" | "l" | "xl" | "none"',elements:[{name:"literal",value:'"xxs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"none"'}]},description:"Controls horizontal flex justification",defaultValue:{value:'"l"',computed:!1}},as:{required:!1,tsType:{name:"union",raw:'"span" | "div" | "ul"',elements:[{name:"literal",value:'"span"'},{name:"literal",value:'"div"'},{name:"literal",value:'"ul"'}]},description:"The html element to render as the root node of `Row`",defaultValue:{value:'"div"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",defaultValue:{value:'""',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children must be of type `Row.Item`"},testId:{required:!1,tsType:{name:"string"},description:"Optional value for `data-testid` attribute"}}}},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["elementType","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children}=_ref,rest=_objectWithoutProperties(_ref,_excluded);if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,_objectSpread(_objectSpread({},rest),{},{children}))};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);