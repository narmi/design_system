"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[3923],{"./src/TruncatedAccount/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccountSelector:()=>AccountSelector,LongAccountName:()=>LongAccountName,Overview:()=>Overview,StylingThisComponent:()=>StylingThisComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TruncatedAccount=_ref=>{let{name,lastFour}=_ref;return(0,jsx_runtime.jsxs)("span",{className:"nds-truncatedAccount",title:"".concat(name," - ").concat(lastFour),children:[(0,jsx_runtime.jsx)("span",{className:"whiteSpace--truncate",children:name}),lastFour&&(0,jsx_runtime.jsx)("span",{role:"img",className:"padding--x--xxs",children:"-"}),lastFour&&(0,jsx_runtime.jsx)("span",{className:"whiteSpace--singleLine",children:lastFour})]})};TruncatedAccount.displayName="TruncatedAccount",TruncatedAccount.propTypes={name:prop_types_default().string.isRequired,lastFour:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),testId:prop_types_default().string};const src_TruncatedAccount=TruncatedAccount;TruncatedAccount.__docgenInfo={description:"Auto-truncated display of account name and account last four digits.\nThis component will grow to the width of its parent container.\nThe account name will truncate with ellipsis as needed to fit the space.",methods:[],displayName:"TruncatedAccount",props:{name:{description:"Name of account",type:{name:"string"},required:!0},lastFour:{description:"Last four digits of account number",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};var _Overview$parameters,_Overview$parameters2,_LongAccountName$para,_LongAccountName$para2,_StylingThisComponent,_StylingThisComponent2,_AccountSelector$para,_AccountSelector$para2,Select=__webpack_require__("./src/Select/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Template=args=>(0,jsx_runtime.jsx)(src_TruncatedAccount,_objectSpread({},args));Template.displayName="Template";const Overview=Template.bind({});Overview.args={name:"Secondary Checking Account",lastFour:4321};const LongAccountName=args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h4",{className:"margin--bottom",children:"The element below can be resized:"}),(0,jsx_runtime.jsx)("div",{style:{outline:"1px dotted hotpink",width:"300px",height:"36px",resize:"both",overflow:"auto"},children:(0,jsx_runtime.jsx)(src_TruncatedAccount,_objectSpread({},args))})]});LongAccountName.args={name:"Secondary Savings Account / Car Repair Funds",lastFour:4441},LongAccountName.parameters={docs:{description:{story:"When the account name is longer than available space, it will be truncated automatically. Resize the element in this example to see truncation in action."}}};const StylingThisComponent=args=>(0,jsx_runtime.jsx)("div",{className:"fontSize--heading1 fontFamily--heading",children:(0,jsx_runtime.jsx)(src_TruncatedAccount,_objectSpread({},args))});StylingThisComponent.displayName="StylingThisComponent",StylingThisComponent.args={name:"Primary Savings Account",lastFour:9695},StylingThisComponent.parameters={docs:{description:{story:"This component will inherit any text styles from its parent."}}};const AccountSelector=()=>(0,jsx_runtime.jsx)("div",{style:{width:"500px"},children:(0,jsx_runtime.jsxs)(Select.Ay,{label:"Loan",children:[(0,jsx_runtime.jsx)(Select.Ay.Item,{value:"123",children:(0,jsx_runtime.jsx)(src_TruncatedAccount,{name:"A Loan",lastFour:"1234 ($1,234.24)"})}),(0,jsx_runtime.jsx)(Select.Ay.Item,{value:"234",children:(0,jsx_runtime.jsx)(src_TruncatedAccount,{name:"My Favorite Loan With A Very Long Name",lastFour:"33=0008 ($92,050.95)"})})]})});AccountSelector.displayName="AccountSelector",AccountSelector.parameters={docs:{description:{story:"An example of using this component in a Select"}}};const index_stories={title:"Components/TruncatedAccount",component:src_TruncatedAccount};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TruncatedAccount {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),LongAccountName.parameters=_objectSpread(_objectSpread({},LongAccountName.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LongAccountName$para=LongAccountName.parameters)||void 0===_LongAccountName$para?void 0:_LongAccountName$para.docs),{},{source:_objectSpread({originalSource:'args => <>\n    <h4 className="margin--bottom">The element below can be resized:</h4>\n    <div style={{\n    outline: "1px dotted hotpink",\n    width: "300px",\n    height: "36px",\n    resize: "both",\n    overflow: "auto"\n  }}>\n      <TruncatedAccount {...args} />\n    </div>\n  </>'},null===(_LongAccountName$para2=LongAccountName.parameters)||void 0===_LongAccountName$para2||null===(_LongAccountName$para2=_LongAccountName$para2.docs)||void 0===_LongAccountName$para2?void 0:_LongAccountName$para2.source)})}),StylingThisComponent.parameters=_objectSpread(_objectSpread({},StylingThisComponent.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_StylingThisComponent=StylingThisComponent.parameters)||void 0===_StylingThisComponent?void 0:_StylingThisComponent.docs),{},{source:_objectSpread({originalSource:'args => <div className="fontSize--heading1 fontFamily--heading">\n    <TruncatedAccount {...args} />\n  </div>'},null===(_StylingThisComponent2=StylingThisComponent.parameters)||void 0===_StylingThisComponent2||null===(_StylingThisComponent2=_StylingThisComponent2.docs)||void 0===_StylingThisComponent2?void 0:_StylingThisComponent2.source)})}),AccountSelector.parameters=_objectSpread(_objectSpread({},AccountSelector.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AccountSelector$para=AccountSelector.parameters)||void 0===_AccountSelector$para?void 0:_AccountSelector$para.docs),{},{source:_objectSpread({originalSource:'() => <div style={{\n  width: "500px"\n}}>\n    <Select label="Loan">\n      <Select.Item value="123">\n        <TruncatedAccount name="A Loan" lastFour="1234 ($1,234.24)" />\n      </Select.Item>\n      <Select.Item value="234">\n        <TruncatedAccount name="My Favorite Loan With A Very Long Name" lastFour="33=0008 ($92,050.95)" />\n      </Select.Item>\n    </Select>\n  </div>'},null===(_AccountSelector$para2=AccountSelector.parameters)||void 0===_AccountSelector$para2||null===(_AccountSelector$para2=_AccountSelector$para2.docs)||void 0===_AccountSelector$para2?void 0:_AccountSelector$para2.source)})});const __namedExportsOrder=["Overview","LongAccountName","StylingThisComponent","AccountSelector"]},"./src/Error/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorLine=_ref=>{let{errorLine,marginTop="xxs"}=_ref;return errorLine?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"nds-input-error margin--top--".concat(marginTop),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"fontSize--s margin--right--xxs narmi-icon-x-circle"}),errorLine]}):null};ErrorLine.displayName="ErrorLine",ErrorLine.propTypes={errorLine:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,marginTop:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const Error=_ref2=>{let{error,marginTop="xxs"}=_ref2;return error?Array.isArray(error)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"nds-input-errorlist","aria-live":"polite",children:error.map(((errorLine,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorLine,{errorLine,marginTop:index?marginTop:"xxs"},errorLine)))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorLine,{errorLine:error,marginTop}):null};Error.displayName="Error",Error.propTypes={error:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),marginTop:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const __WEBPACK_DEFAULT_EXPORT__=Error;Error.__docgenInfo={description:"",methods:[],displayName:"Error",props:{marginTop:{defaultValue:{value:'"xxs"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"xxl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},error:{description:"",type:{name:"enum",value:[{value:"PropTypes.string",computed:!0},{value:"PropTypes.arrayOf(PropTypes.string)",computed:!0}]},required:!1}}}},"./src/Row/RowItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId,children})};RowItem.displayName="RowItem",RowItem.propTypes={shrink:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["div","span","li"]),className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string};const __WEBPACK_DEFAULT_EXPORT__=RowItem;RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",methods:[],displayName:"RowItem",props:{shrink:{defaultValue:{value:"false",computed:!1},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",type:{name:"bool"},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"span"',computed:!1},{value:'"li"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/Row/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.js"),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{let result={};return gapSize&&(result.gap="none"===gapSize?"0":"var(--space-".concat(gapSize,")")),result.alignItems="top"===alignItems?"flex-start":alignItems,result.justifyContent="flex-".concat(justifyContent),"space-between"===justifyContent&&(result.justifyContent=justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId,children})};Row.displayName="Row",Row.propTypes={gapSize:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["xxs","xs","s","m","l","xl","none"]),alignItems:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["top","center"]),justifyContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["start","end","space-between"]),as:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["span","div","ul"]),className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().node).isRequired,testId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A;const __WEBPACK_DEFAULT_EXPORT__=Row;Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width of its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:'{\n  shrink = false,\n  as = "div",\n  className = "",\n  children,\n  testId,\n}',optional:!1,type:null}],returns:null}],displayName:"Row",props:{alignItems:{defaultValue:{value:'"top"',computed:!1},description:"Controls vertical alignment of items within the row",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"center"',computed:!1}]},required:!1},justifyContent:{defaultValue:{value:'"start"',computed:!1},description:"Controls horizontal flex justification",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"space-between"',computed:!1}]},required:!1},gapSize:{defaultValue:{value:'"l"',computed:!1},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",type:{name:"string"},required:!1},children:{description:"Children must be of type `Row.Item`",type:{name:"arrayOf",value:{name:"node"}},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["elementType","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children}=_ref,rest=_objectWithoutProperties(_ref,_excluded);if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,_objectSpread(_objectSpread({},rest),{},{children}))};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}}}]);