"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[7955],{"./src/Checkbox/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsCard:()=>AsCard,FullyControlled:()=>FullyControlled,Markdown:()=>Markdown,MultipleCheckboxes:()=>MultipleCheckboxes,Overview:()=>Overview,TableCheckbox:()=>TableCheckbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classcat=__webpack_require__("./node_modules/classcat/index.js"),react_markdown=__webpack_require__("./node_modules/react-markdown/src/react-markdown.js"),react_markdown_default=__webpack_require__.n(react_markdown),Error=__webpack_require__("./src/Error/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["label","markdownLabel","onChange","id","name","defaultChecked","checked","disabled","indeterminate","value","hasError","error","kind","testId"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const Checkbox=_ref=>{let{label,markdownLabel,onChange=()=>{},id,name,defaultChecked,checked,disabled=!1,indeterminate=!1,value,hasError,error,kind="normal",testId}=_ref,rest=_objectWithoutProperties(_ref,_excluded);const inputRef=(0,react.useRef)(null),isControlled=void 0!==checked,[isChecked,setIsChecked]=(0,react.useState)(isControlled?checked:defaultChecked||!1),[isFocused,setIsFocused]=(0,react.useState)(!1),isCard="card"===kind,LinkRenderer=_ref2=>{let{href,children}=_ref2;return(0,jsx_runtime.jsx)("a",{href,target:"_blank",rel:"noreferrer",children})};LinkRenderer.propTypes={href:prop_types_default().string.isRequired,children:prop_types_default().array.isRequired},(0,react.useEffect)((()=>{isControlled&&setIsChecked(checked),inputRef.current&&(inputRef.current.indeterminate=indeterminate)}),[checked,indeterminate]);return(0,jsx_runtime.jsxs)("div",{className:"nds-checkbox-container nds-checkbox-container--".concat(kind),children:[(0,jsx_runtime.jsxs)("label",{className:(0,classcat.A)(["nds-checkbox nds-checkbox--".concat(kind),"fontWeight--default",{"nds-checkbox--checked":isChecked||indeterminate,"nds-checkbox--disabled":disabled,"nds-checkbox--focused":isFocused,"padding--y--xl padding--x rounded--all border--all":isCard}]),children:[(0,jsx_runtime.jsx)("span",{className:(0,classcat.A)([{"narmi-icon-check":!indeterminate,"narmi-icon-minus":indeterminate,error:hasError||!!error}])}),(0,jsx_runtime.jsxs)("div",{className:"nds-checkbox-label",children:[markdownLabel&&(0,jsx_runtime.jsx)(react_markdown_default(),{components:{a:LinkRenderer},children:markdownLabel}),!markdownLabel&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:label})]}),(0,jsx_runtime.jsx)("input",_objectSpread(_objectSpread({ref:inputRef,onFocus:()=>{setIsFocused(!0)},onBlur:()=>{setIsFocused(!1)},onChange:e=>{isControlled||setIsChecked((isChecked=>!isChecked)),onChange(e)},checked:isChecked,defaultChecked,disabled,name,id,value,"data-testid":testId},rest),{},{type:"checkbox"}))]}),(0,jsx_runtime.jsx)(Error.A,{marginTop:"xs",error})]})};Checkbox.displayName="Checkbox",Checkbox.propTypes={label:prop_types_default().string,markdownLabel:prop_types_default().string,onChange:prop_types_default().func,id:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),name:prop_types_default().string,defaultChecked:prop_types_default().bool,checked:prop_types_default().bool,indeterminate:prop_types_default().bool,disabled:prop_types_default().bool,value:prop_types_default().string,hasError:prop_types_default().bool,error:prop_types_default().string,testId:prop_types_default().string,kind:prop_types_default().oneOf(["normal","condensed","card","table"])};const src_Checkbox=Checkbox;var _Overview$parameters,_Overview$parameters2,_FullyControlled$para,_FullyControlled$para2,_MultipleCheckboxes$p,_MultipleCheckboxes$p2,_AsCard$parameters,_AsCard$parameters2,_TableCheckbox$parame,_TableCheckbox$parame2,_Markdown$parameters,_Markdown$parameters2;function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(arg){var key=function index_stories_toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Checkbox.__docgenInfo={description:"Narmi styled checkbox with built-in label.",methods:[],displayName:"Checkbox",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},description:"Change callback invoked when the value of the `input` changes",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Checkbox renders as disabled and ignores click/check events.",type:{name:"bool"},required:!1},indeterminate:{defaultValue:{value:"false",computed:!1},description:"Checkbox renders in\n[indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)\nwhen `true`.",type:{name:"bool"},required:!1},kind:{defaultValue:{value:'"normal"',computed:!1},description:"`normal` - visually matches a checkbox input\n\n`condensed` - like `normal`, but without added top margin when there are multiple checkboxes\n\n`card` - visually present as a toggleable card",type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"condensed"',computed:!1},{value:'"card"',computed:!1},{value:'"table"',computed:!1}]},required:!1},label:{description:"Content of `label` element",type:{name:"string"},required:!1},markdownLabel:{description:"Markdown to use in place of the `label` field",type:{name:"string"},required:!1},id:{description:"`id` attribute of `input`",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},name:{description:"`name` attribute of `input`",type:{name:"string"},required:!1},defaultChecked:{description:"⚠️ DEPRECATED\n\nUncontrolled Checkbox props will be removed in a future release.\nUse `checked` instead to use Checkbox as a fully controlled input.",type:{name:"bool"},required:!1},checked:{description:"Sets the checkbox checked value",type:{name:"bool"},required:!1},value:{description:"Sets the `value` attribute of the `input`",type:{name:"string"},required:!1},hasError:{description:"Sets whether the checkbox has an error. To be used with multiple checkboxes",type:{name:"bool"},required:!1},error:{description:"Text of error message to display under the checkbox",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const Template=args=>(0,jsx_runtime.jsx)(src_Checkbox,index_stories_objectSpread({},args));Template.displayName="Template";const Overview=Template.bind({});Overview.args={label:"I agree to receive spam",name:"spam"};const FullyControlled=()=>{const[isChecked,setIsChecked]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(src_Checkbox,{label:"Make deposits",name:"deposit",checked:isChecked,onChange:()=>setIsChecked((isChecked=>!isChecked))})};FullyControlled.displayName="FullyControlled",FullyControlled.parameters={docs:{description:{story:"When passing `checked`, the input becomes fully controlled and you must use the `onChange` callback to update the value of `checked`."}}};const MultipleCheckboxes=args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{className:"margin--bottom",children:"Permissions"}),(0,jsx_runtime.jsx)(src_Checkbox,index_stories_objectSpread({label:"See statements and documents",name:"view"},args)),(0,jsx_runtime.jsx)(src_Checkbox,index_stories_objectSpread({label:"Make deposits",name:"deposit"},args)),(0,jsx_runtime.jsx)(src_Checkbox,index_stories_objectSpread({label:"Make withdrawals",name:"withdrawal"},args))]}),AsCard=Template.bind({});AsCard.args={label:"Checkbox of 'card' kind",name:"card_kind",kind:"card"},AsCard.parameters={docs:{description:{story:"Renders a checkbox input and label styled as a card"}}};const TableCheckbox=Template.bind({});TableCheckbox.args={kind:"table",name:"table_kind",label:"Select row"},TableCheckbox.parameters={docs:{description:{story:"Checkbox used in table row selection"}}};const Markdown=Template.bind({});Markdown.args={markdownLabel:"I agree to receive spam from [google](https://www.google.com/)",name:"spam"},Markdown.parameters={docs:{description:{story:"Renders markdown when markdownLabel prop is set"}}};const index_stories={title:"Components/Checkbox",component:src_Checkbox};Overview.parameters=index_stories_objectSpread(index_stories_objectSpread({},Overview.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:index_stories_objectSpread({originalSource:"args => <Checkbox {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),FullyControlled.parameters=index_stories_objectSpread(index_stories_objectSpread({},FullyControlled.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_FullyControlled$para=FullyControlled.parameters)||void 0===_FullyControlled$para?void 0:_FullyControlled$para.docs),{},{source:index_stories_objectSpread({originalSource:'() => {\n  const [isChecked, setIsChecked] = useState(false);\n  return <Checkbox label="Make deposits" name="deposit" checked={isChecked} onChange={() => setIsChecked(isChecked => !isChecked)} />;\n}'},null===(_FullyControlled$para2=FullyControlled.parameters)||void 0===_FullyControlled$para2||null===(_FullyControlled$para2=_FullyControlled$para2.docs)||void 0===_FullyControlled$para2?void 0:_FullyControlled$para2.source)})}),MultipleCheckboxes.parameters=index_stories_objectSpread(index_stories_objectSpread({},MultipleCheckboxes.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_MultipleCheckboxes$p=MultipleCheckboxes.parameters)||void 0===_MultipleCheckboxes$p?void 0:_MultipleCheckboxes$p.docs),{},{source:index_stories_objectSpread({originalSource:'args => <>\n    <h3 className="margin--bottom">Permissions</h3>\n    <Checkbox label="See statements and documents" name="view" {...args} />\n    <Checkbox label="Make deposits" name="deposit" {...args} />\n    <Checkbox label="Make withdrawals" name="withdrawal" {...args} />\n  </>'},null===(_MultipleCheckboxes$p2=MultipleCheckboxes.parameters)||void 0===_MultipleCheckboxes$p2||null===(_MultipleCheckboxes$p2=_MultipleCheckboxes$p2.docs)||void 0===_MultipleCheckboxes$p2?void 0:_MultipleCheckboxes$p2.source)})}),AsCard.parameters=index_stories_objectSpread(index_stories_objectSpread({},AsCard.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_AsCard$parameters=AsCard.parameters)||void 0===_AsCard$parameters?void 0:_AsCard$parameters.docs),{},{source:index_stories_objectSpread({originalSource:"args => <Checkbox {...args} />"},null===(_AsCard$parameters2=AsCard.parameters)||void 0===_AsCard$parameters2||null===(_AsCard$parameters2=_AsCard$parameters2.docs)||void 0===_AsCard$parameters2?void 0:_AsCard$parameters2.source)})}),TableCheckbox.parameters=index_stories_objectSpread(index_stories_objectSpread({},TableCheckbox.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_TableCheckbox$parame=TableCheckbox.parameters)||void 0===_TableCheckbox$parame?void 0:_TableCheckbox$parame.docs),{},{source:index_stories_objectSpread({originalSource:"args => <Checkbox {...args} />"},null===(_TableCheckbox$parame2=TableCheckbox.parameters)||void 0===_TableCheckbox$parame2||null===(_TableCheckbox$parame2=_TableCheckbox$parame2.docs)||void 0===_TableCheckbox$parame2?void 0:_TableCheckbox$parame2.source)})}),Markdown.parameters=index_stories_objectSpread(index_stories_objectSpread({},Markdown.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Markdown$parameters=Markdown.parameters)||void 0===_Markdown$parameters?void 0:_Markdown$parameters.docs),{},{source:index_stories_objectSpread({originalSource:"args => <Checkbox {...args} />"},null===(_Markdown$parameters2=Markdown.parameters)||void 0===_Markdown$parameters2||null===(_Markdown$parameters2=_Markdown$parameters2.docs)||void 0===_Markdown$parameters2?void 0:_Markdown$parameters2.source)})});const __namedExportsOrder=["Overview","FullyControlled","MultipleCheckboxes","AsCard","TableCheckbox","Markdown"]},"./src/Error/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorLine=_ref=>{let{errorLine,marginTop="xxs"}=_ref;return errorLine?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"nds-input-error margin--top--".concat(marginTop),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"fontSize--s margin--right--xxs narmi-icon-x-circle"}),errorLine]}):null};ErrorLine.displayName="ErrorLine",ErrorLine.propTypes={errorLine:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,marginTop:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const Error=_ref2=>{let{error,marginTop="xxs"}=_ref2;return error?Array.isArray(error)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"nds-input-errorlist","aria-live":"polite",children:error.map(((errorLine,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorLine,{errorLine,marginTop:index?marginTop:"xxs"},errorLine)))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorLine,{errorLine:error,marginTop}):null};Error.displayName="Error",Error.propTypes={error:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),marginTop:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const __WEBPACK_DEFAULT_EXPORT__=Error;Error.__docgenInfo={description:"",methods:[],displayName:"Error",props:{marginTop:{defaultValue:{value:'"xxs"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"xxl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},error:{description:"",type:{name:"enum",value:[{value:"PropTypes.string",computed:!0},{value:"PropTypes.arrayOf(PropTypes.string)",computed:!0}]},required:!1}}}}}]);