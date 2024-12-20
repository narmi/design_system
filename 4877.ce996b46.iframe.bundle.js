"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[4877],{"./src/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>VALID_ICON_NAMES,A:()=>src_Button});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classcat=__webpack_require__("./node_modules/classcat/index.js"),selection=__webpack_require__("./src/icons/selection.json"),AsElement=__webpack_require__("./src/util/AsElement.js"),Row=__webpack_require__("./src/Row/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Spinner=_ref=>{let{size=28,strokeWidth=3,color="var(--color-white)"}=_ref;return(0,jsx_runtime.jsx)("div",{className:"nds-spinner",style:{height:size,width:size},children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",height:size,width:size,viewBox:"0 0 ".concat(size," ").concat(size),children:(0,jsx_runtime.jsx)("circle",{fill:"none",stroke:color,strokeWidth,strokeLinecap:"round",className:"nds-spinner-circle",cx:"50%",cy:"50%",r:"25%"})})})};Spinner.displayName="Spinner",Spinner.propTypes={size:prop_types_default().number,strokeWidth:prop_types_default().number,color:prop_types_default().string};const Button_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{defaultValue:{value:"28",computed:!1},description:"Square size of spinner as unitless number",type:{name:"number"},required:!1},strokeWidth:{defaultValue:{value:"3",computed:!1},description:"Width of animated stroke",type:{name:"number"},required:!1},color:{defaultValue:{value:'"var(--color-white)"',computed:!1},description:"CSS color value",type:{name:"string"},required:!1}}};const _excluded=["isLoading","disabled","kind","type","size","startIcon","endIcon","testId","children","label","onClick","as","ariaLabel"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const VALID_ICON_NAMES=null==selection?void 0:selection.icons.map((icon=>icon.properties.name)),Button=_ref=>{let{isLoading=!1,disabled=!1,kind="primary",type,size="m",startIcon=null,endIcon=null,testId,children,label,onClick=()=>{},as="button",ariaLabel=null}=_ref,otherProps=_objectWithoutProperties(_ref,_excluded);const isButtonElement="button"===as;let buttonLabel=label;buttonLabel||(buttonLabel=children);const Icon=_ref2=>{let{name}=_ref2;return(0,jsx_runtime.jsx)("div",{className:"alignChild--center--center",children:(0,jsx_runtime.jsx)("i",{role:"img","aria-label":ariaLabel||name,className:"narmi-icon-".concat(name)})})};return Icon.propTypes={name:prop_types_default().string.isRequired},(0,jsx_runtime.jsx)(AsElement.A,_objectSpread(_objectSpread({elementType:as,tabIndex:0,onClick,type},otherProps),{},{className:(0,classcat.A)(["nds-typography","nds-button","nds-button--".concat(kind),"nds-button--".concat(size),{resetButton:"button"===as,"nds-button--disabled":disabled,"nds-button--loading":isLoading}]),disabled:!!(isButtonElement&&disabled||isLoading)||void 0,"aria-label":ariaLabel||buttonLabel,"data-testid":testId||"nds-button",children:(0,jsx_runtime.jsxs)("div",{className:"nds-button-content",children:[isLoading&&(0,jsx_runtime.jsx)("div",{className:"nds-button-spinner",children:(0,jsx_runtime.jsx)(Button_Spinner,{color:"primary"!==kind?"var(--color-lightGrey)":void 0})}),(0,jsx_runtime.jsx)("div",{style:{visibility:isLoading?"hidden":"visible"},children:(0,jsx_runtime.jsxs)(Row.A,{gapSize:{xs:"xs",s:"xs",m:"s"}[size],alignItems:"center",children:[startIcon&&(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)(Icon,{name:startIcon})}),(0,jsx_runtime.jsx)(Row.A.Item,{children:(0,jsx_runtime.jsx)("span",{className:"nds-button-label",children:buttonLabel})}),endIcon&&(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)(Icon,{name:endIcon})})]})})]})}))};Button.displayName="Button",Button.propTypes={as:prop_types_default().oneOf(["a","button"]),label:prop_types_default().string,disabled:prop_types_default().bool,isLoading:prop_types_default().bool,kind:prop_types_default().oneOf(["primary","secondary","tonal","negative","menu","plain"]),type:prop_types_default().oneOf(["submit","button","reset"]),size:prop_types_default().oneOf(["xs","s","m"]),onClick:prop_types_default().func,startIcon:prop_types_default().oneOf(VALID_ICON_NAMES),endIcon:prop_types_default().oneOf(VALID_ICON_NAMES),testId:prop_types_default().string,ariaLabel:prop_types_default().string,children:prop_types_default().node};const src_Button=Button;Button.__docgenInfo={description:"Narmi style action buttons.\n\nButton renders as a `button` element by default, but can render as an `a` element\nvia the `as` prop.\n\nThis component supports rest props; any additional props on button will be\npassed through to the root node of `Button`.",methods:[],displayName:"Button",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"disables the button and adds a loading spinner when set to `true`",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"disables the button when set to `true`",type:{name:"bool"},required:!1},kind:{defaultValue:{value:'"primary"',computed:!1},description:"style of button to render",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tonal"',computed:!1},{value:'"negative"',computed:!1},{value:'"menu"',computed:!1},{value:'"plain"',computed:!1}]},required:!1},size:{defaultValue:{value:'"m"',computed:!1},description:"size variant of button",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1}]},required:!1},startIcon:{defaultValue:{value:"null",computed:!1},description:"Name of Narmi icon to place at the start of the label",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},endIcon:{defaultValue:{value:"null",computed:!1},description:"Name of Narmi icon to place at the end of the label",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"Click callback, with event object passed as argument",type:{name:"func"},required:!1},as:{defaultValue:{value:'"button"',computed:!1},description:'The html element to render as the root node of `Button`.\n\nWhen rendering as an "a" you **MUST** pass an `href` attribute\nfor the anchor to be valid.',type:{name:"enum",value:[{value:'"a"',computed:!1},{value:'"button"',computed:!1}]},required:!1},ariaLabel:{defaultValue:{value:"null",computed:!1},description:"Optional value for setting the aria-label. If unset label will be used.",type:{name:"string"},required:!1},label:{description:"Renders the button label",type:{name:"string"},required:!1},type:{description:"type attribute of button element",type:{name:"enum",value:[{value:'"submit"',computed:!1},{value:'"button"',computed:!1},{value:'"reset"',computed:!1}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},children:{description:"**⚠️ DEPRECATED**\n\nPassing children to render the button label will be removed\nin a future release. Use the `label` prop instead.",type:{name:"node"},required:!1}}}},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["elementType","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children}=_ref,rest=_objectWithoutProperties(_ref,_excluded);if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,_objectSpread(_objectSpread({},rest),{},{children}))};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./src/Row/RowItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId,children})};RowItem.displayName="RowItem";const __WEBPACK_DEFAULT_EXPORT__=RowItem;try{RowItem.displayName="RowItem",RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"RowItem",props:{shrink:{defaultValue:{value:"false"},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",name:"shrink",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"li"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/RowItem.tsx#RowItem"]={docgenInfo:RowItem.__docgenInfo,name:"RowItem",path:"src/Row/RowItem.tsx#RowItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/Row/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.tsx"),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{const result={gap:"var(--space-".concat(gapSize,")"),alignItems:"flex-start",justifyContent:"flex-".concat(justifyContent)};return gapSize&&"none"===gapSize&&(result.gap="0"),"top"!==alignItems&&(result.alignItems=alignItems),"space-between"===justifyContent&&(result.justifyContent=justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId,children})};Row.displayName="Row",Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A;const __WEBPACK_DEFAULT_EXPORT__=Row;try{Row.displayName="Row",Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width with its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"Row",props:{alignItems:{defaultValue:{value:"top"},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},justifyContent:{defaultValue:{value:"start"},description:"Controls vertical alignment of items within the row",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"space-between"'}]}},gapSize:{defaultValue:{value:"l"},description:"Controls horizontal flex justification",name:"gapSize",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"ul"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children must be of type `Row.Item`",name:"children",required:!0,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/index.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/Row/index.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}}}]);