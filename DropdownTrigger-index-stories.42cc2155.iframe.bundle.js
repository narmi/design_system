"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[2439],{"./src/DropdownTrigger/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),_Error__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Error/index.js");const _excluded=["isOpen","showOpenIndicator","disabled","labelText","labelProps","displayValue","errorText","minWidth","testId","startContent","endContent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DropdownTrigger=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{isOpen=!1,showOpenIndicator=!0,disabled=!1,labelText,labelProps,displayValue,errorText,minWidth="auto",testId,startContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),endContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)}=_ref,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"nds-dropdownTrigger",style:{minWidth}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({disabled,ref,"data-testid":testId||"dropdownTriggerButton",className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)(["nds-dropdownTrigger-button button--reset","padding--x--s rounded--all",{"nds-dropdownTrigger-button--hasValue":Boolean(displayValue),"nds-dropdownTrigger-button--hasError":Boolean(errorText),"nds-dropdownTrigger-button--isActive":isOpen,"nds-dropdownTrigger-button--disabled":disabled}]),"aria-expanded":isOpen?"true":"false",type:"button"},otherProps),startContent,labelText&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_extends({className:"nds-dropdownTrigger-label"},labelProps),labelText),displayValue&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"nds-dropdownTrigger-value"},displayValue),endContent,showOpenIndicator&&!disabled&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{role:"img","aria-label":isOpen?"popup open":"popup closed",className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)(["nds-dropdownTrigger-chevron fontSize--l fontColor--secondary","narmi-icon-chevron-".concat(isOpen?"up":"down")])}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Error__WEBPACK_IMPORTED_MODULE_1__.A,{error:errorText}))}));DropdownTrigger.displayName="DropdownTrigger",DropdownTrigger.propTypes={isOpen:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,showOpenIndicator:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,labelText:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,labelProps:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,displayValue:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,prop_types__WEBPACK_IMPORTED_MODULE_3___default().node]),errorText:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,minWidth:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,testId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,tokens:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),onTokensChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,startContent:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,endContent:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const __WEBPACK_DEFAULT_EXPORT__=DropdownTrigger;DropdownTrigger.__docgenInfo={description:"Generic trigger button for dropdowns. `DropdownTrigger` can be composed with\nother components like `Popover` to create a wide range of dropdown, popover, and menu components.\n\nThe entire clickable area is a `button` element to ensure dropdown triggers are accessible.\n\n **Additional props will be spread on the `button` element.**",methods:[],displayName:"DropdownTrigger",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"Set this to `true` when the associated popup is open",type:{name:"bool"},required:!1},showOpenIndicator:{defaultValue:{value:"true",computed:!1},description:"Set to `false` to hide the chevron icon indicating open state",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Renders the button with the appearance of a disabled input and\nprevents user interaction.",type:{name:"bool"},required:!1},minWidth:{defaultValue:{value:'"auto"',computed:!1},description:'Sets a minimum width.\nUse the full CSS value with the unit (e.g. "400px")',type:{name:"string"},required:!1},startContent:{defaultValue:{value:"<></>",computed:!1},description:"arbitrary JSX to place at the start of the faux input",type:{name:"node"},required:!1},endContent:{defaultValue:{value:"<></>",computed:!1},description:"arbitrary JSX to place at the end of the faux input",type:{name:"node"},required:!1},labelText:{description:"Text of `label` element",type:{name:"string"},required:!1},labelProps:{description:"Props to spread onto the `label` element",type:{name:"object"},required:!1},displayValue:{description:"Renders a string or node as the value displayed in the `DropdownTrigger`\nUsually, this represents the name of a selected option",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},errorText:{description:"Error message. When this prop is passed, an error state is displayed",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},tokens:{description:"Pass labels to show a token list of current selections",type:{name:"arrayOf",value:{name:"string"}},required:!1},onTokensChange:{description:"Called with new list of tokens. Called whenever a user\nadds or dismisses a token.\n`onTokensChange={(tokens) => setTokens(tokens)}`",type:{name:"func"},required:!1}}}},"./src/Error/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const ErrorLine=_ref=>{let{errorLine,marginTop="xxs"}=_ref;return errorLine?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"nds-input-error margin--top--".concat(marginTop)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"fontSize--s margin--right--xxs narmi-icon-x-circle"}),errorLine):null};ErrorLine.propTypes={errorLine:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,marginTop:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const Error=_ref2=>{let{error,marginTop="xxs"}=_ref2;return error?Array.isArray(error)?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"nds-input-errorlist","aria-live":"polite"},error.map(((errorLine,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorLine,{key:errorLine,errorLine,marginTop:index?marginTop:"xxs"})))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorLine,{errorLine:error,marginTop}):null};Error.propTypes={error:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),marginTop:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const __WEBPACK_DEFAULT_EXPORT__=Error;Error.__docgenInfo={description:"",methods:[],displayName:"Error",props:{marginTop:{defaultValue:{value:'"xxs"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"xxl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},error:{description:"",type:{name:"enum",value:[{value:"PropTypes.string",computed:!0},{value:"PropTypes.arrayOf(PropTypes.string)",computed:!0}]},required:!1}}}},"./src/FieldToken/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classcat__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classcat/index.js");const noop=()=>{},FieldToken=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldToken(_ref,forwardedRef){let{label,onDismiss=noop,disabled=!1,testId}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:forwardedRef,role:"listitem",className:(0,classcat__WEBPACK_IMPORTED_MODULE_1__.A)(["nds-fieldToken","padding--y--none","padding--left--s","padding--right--xs","rounded--all--l","fontSize--xs","fontWeight--semibold",{"nds-fieldToken--disabled":disabled}]),"data-testid":testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"whiteSpace--truncate",style:{userSelect:"none"}},label),!disabled&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"narmi-icon-x margin--left--xs",role:"button","aria-label":"Remove ".concat(label),tabIndex:0,onClick:e=>{e.stopPropagation(),onDismiss(label)},onKeyUp:_ref2=>{let{key}=_ref2;"Enter"!==key&&" "!=key||onDismiss(label)}}))}));FieldToken.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,onDismiss:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,testId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool};const __WEBPACK_DEFAULT_EXPORT__=FieldToken;FieldToken.__docgenInfo={description:'Shared component to render "tokens" inside inputs, active filters,\nor other user selections we want to tokenize.',methods:[],displayName:"FieldToken",props:{onDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback for user dismissal action,\ncalled with token label as the argument",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disabled state for FieldToken",type:{name:"bool"},required:!1},label:{description:"Label text of tag.",type:{name:"string"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/Popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),react_laag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),src_util_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/util/dom.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const noop=()=>{},Popover=_ref=>{let{side="bottom",alignment="center",content,children,renderTrigger=()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null),wrapperDisplay="inline-flex",offset=2,disableAutoPlacement=!1,matchTriggerWidth=!1,testId,closeOnContentClick=!1,isOpen,autoFocus=!1,hasShadow=!0,onUserDismiss=noop,onUserEnable=noop}=_ref;const isControlled=!0===isOpen||!1===isOpen,hasChildren=react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children)>0,[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),shouldRenderPopover=isControlled?isOpen:open,popoverContent=closeOnContentClick?react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(content,{onClick:()=>{content.onClick&&content.onClick(),setOpen(!1),onUserDismiss()}}):content,closePopover=()=>{setOpen(!1),onUserDismiss()},handleKeyUp=_ref3=>{let{key}=_ref3;"Escape"===key&&shouldRenderPopover&&(setOpen(!1),onUserDismiss())},{renderLayer,triggerProps,triggerBounds,layerProps}=(0,react_laag__WEBPACK_IMPORTED_MODULE_2__.Z4)({isOpen:shouldRenderPopover,onOutsideClick:closePopover,onDisappear:closePopover,auto:!disableAutoPlacement,placement:"".concat(side,"-").concat(alignment),preferX:"left",preferY:"bottom",container:src_util_dom__WEBPACK_IMPORTED_MODULE_3__.u,triggerOffset:offset});(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(window.addEventListener("keydown",handleKeyUp),()=>{window.removeEventListener("keydown",handleKeyUp)})),[handleKeyUp]);let layerStyle=layerProps.style;return triggerBounds&&matchTriggerWidth&&(layerStyle=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({width:triggerBounds.width},layerProps.style)),react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",_extends({},triggerProps,{style:{display:wrapperDisplay},onClick:event=>{event.stopPropagation(),isControlled?isOpen?onUserDismiss():onUserEnable():setOpen((open=>!open))},onKeyDown:_ref2=>{let{key}=_ref2;"Enter"===key&&(setOpen(!0),onUserEnable())},role:"button",tabIndex:"0","data-testid":"nds-popover-trigger","aria-haspopup":"true","aria-expanded":shouldRenderPopover.toString()}),hasChildren?children:renderTrigger(isOpen)),renderLayer(react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,shouldRenderPopover&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",_extends({},layerProps,{className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)(["nds-typography nds-popover","rounded--all bgColor--white",{"nds-popover--elevated":hasShadow}]),style:layerStyle,"data-testid":testId}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{tabIndex:-1},react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_focus_lock__WEBPACK_IMPORTED_MODULE_5__.Ay,{autoFocus},popoverContent))))))};Popover.propTypes={content:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,renderTrigger:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,side:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["top","right","bottom","left"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["start","center","end"]),wrapperDisplay:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["inline-flex","inline-block","inline","block","flex"]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,matchTriggerWidth:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,disableAutoPlacement:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,closeOnContentClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,onUserEnable:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,autoFocus:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,hasShadow:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool};const __WEBPACK_DEFAULT_EXPORT__=Popover;Popover.__docgenInfo={description:'Generic Popover component. Renders a floating element that can contain any content,\npositioned relatively to its triggering element.\n\nThis Popover only appears on "click" (focus + activate or mouse click) interactions.\nThe Escape key and clicking outside of the Popover will dismiss it.\nFor a hover-based informative popover, use `Tooltip`.\n\nThe popover will position itself based on the `side` prop, but will\nautomatically reposition to avoid collisions with viewport edges.',methods:[],displayName:"Popover",props:{side:{defaultValue:{value:'"bottom"',computed:!1},description:"Sets preferred side of the trigger the tooltip should appear",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"right"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},description:"Sets preferred alignment of the tooltip relative to the trigger",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1}]},required:!1},renderTrigger:{defaultValue:{value:"() => <></>",computed:!1},description:"Render function for a custom trigger aware of the open state of the Popover.\nCalled with `(isOpen) => {}`, the state of the Popover.",type:{name:"func"},required:!1},wrapperDisplay:{defaultValue:{value:'"inline-flex"',computed:!1},description:"CSS `display` value for the element that wraps the Tooltip children",type:{name:"enum",value:[{value:'"inline-flex"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"flex"',computed:!1}]},required:!1},offset:{defaultValue:{value:"2",computed:!1},description:"Distance of Popover from trigger element in number of pixels",type:{name:"number"},required:!1},disableAutoPlacement:{defaultValue:{value:"false",computed:!1},description:"By default, the Popover will automatically reposition itself to avoid viewport edges.\nSetting this prop to `true` will disable this behavior so that the Popover will\nalways be placed on the given `side` prop.",type:{name:"bool"},required:!1},matchTriggerWidth:{defaultValue:{value:"false",computed:!1},description:"When `true`, the Popover container will match the width of its triggering element",type:{name:"bool"},required:!1},closeOnContentClick:{defaultValue:{value:"false",computed:!1},description:"Close the popover if the User clicks on the content",type:{name:"bool"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"When set to `true`, the first focusable element will automatically receive focus\nwhenever the popover opens",type:{name:"bool"},required:!1},hasShadow:{defaultValue:{value:"true",computed:!1},description:"When set to `false` the popover positioned element will not have a box shadow.\nUseful for adding a custom box shadow.",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to __dismiss__ the popover\n(click outside, Escape key)",type:{name:"func"},required:!1},onUserEnable:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to __enable__ the popover\n(click or key interaction on the trigger button rendered in Popover)",type:{name:"func"},required:!1},content:{description:"Content of popover",type:{name:"node"},required:!0},children:{description:"⚠️ DEPRECATED - use `renderTrigger` instead.\nThe root node of JSX passed into Tooltip as children will act as the tooltip trigger",type:{name:"node"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},isOpen:{description:"If isOpen is set the component becomes a controlled component. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1}}}},"./src/RadioButtons/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_Error__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Error/index.js");const _excluded=["options","name","initialValue","value","kind","onChange","testId","error","alwaysShowDetails"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const RadioButtons=_ref=>{let{options,name,initialValue,value,kind="normal",onChange=()=>{},testId,error,alwaysShowDetails=!1}=_ref,containerProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);const isControlled=void 0!==value,hasError=void 0!==error&&error.length>0,[checkedValue,setCheckedValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isControlled?value:initialValue),[focusedValue,setFocusedValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{isControlled&&setCheckedValue(value)}),[value]);const handleChange=e=>{isControlled||setCheckedValue(e.target.value),onChange(e)},handleFocus=_ref2=>{let{target}=_ref2;setFocusedValue(target.value)},handleBlur=()=>{setFocusedValue(null)};return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",_extends({className:"nds-radiobuttons nds-radiobuttons--".concat(kind),onChange:handleChange,"data-testid":testId},containerProps),Object.entries(options).map((_ref3=>{let[label,subOptions]=_ref3;const inputOption="object"==typeof subOptions?subOptions:{value:subOptions},inputValue=inputOption.value,details=inputOption.details;return react__WEBPACK_IMPORTED_MODULE_1__.createElement("label",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-radiobuttons-option","fontWeight--default",{"nds-radiobuttons-option--checked":checkedValue==inputValue,"nds-radiobuttons-option--focused":focusedValue==inputValue,"nds-radiobuttons-option--error":hasError,"padding--all rounded--all border--all":["card","input-card"].includes(kind)}]),key:inputValue},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"nds-radiobuttons-label-container"},label,react__WEBPACK_IMPORTED_MODULE_1__.createElement("input",{type:"radio","aria-label":"Radio ".concat(name," option ").concat(label),checked:checkedValue===inputValue,onChange:handleChange,onFocus:handleFocus,onBlur:handleBlur,value:inputValue,name}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{role:"presentation",className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-radio",{"narmi-icon-check":["card","checkmark"].includes(kind)}])})),details&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-radiobutton-details",{"nds-radiobutton-details--checked":alwaysShowDetails||checkedValue==inputValue,"fontColor--secondary":"card"!=kind,"fontSize--s":"card"!=kind}])},details))}))),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([{"margin--top--s":"row"!==kind}])},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Error__WEBPACK_IMPORTED_MODULE_2__.A,{error})))},__WEBPACK_DEFAULT_EXPORT__=RadioButtons;try{RadioButtons.displayName="RadioButtons",RadioButtons.__docgenInfo={description:'The Narmi RadioButtons component expects an "options" Prop, which is an object where the keys are the radiobutton\nlabels and the values are the radiobutton values. An "initialvalue" Prop can be passed to set a default checked\nradiobutton.\n```\noptions={{\n "First Label": { value: "firstValue", details: "This is the explanation of the firstValue" },\n "Second Label": { value: "secondValue", details: "This is the explanation of the secondValue" }\n}\n```\n\nThe other options configuration without details would be:\n```\noptions={{ "First Label": "firstValue", "Second Label": "secondValue" }}\n```',displayName:"RadioButtons",props:{options:{defaultValue:null,description:"Map of label strings to input values\n\nTODO: restore this type when we can do it in a non-breaking way\n```\ntype OptionType = {\n     value: string;\n     details?: string;\n   }\n | string;\n```",name:"options",required:!1,type:{name:"object"}},name:{defaultValue:null,description:"name of radiogroup",name:"name",required:!0,type:{name:"string"}},initialValue:{defaultValue:null,description:"initially selected option by input value (uncontrolled)",name:"initialValue",required:!1,type:{name:"unknown"}},value:{defaultValue:null,description:"selected option by input value (fully controlled)\nWhen passing a `value` prop, you must use the `onChange`\nhandler to update the `value`",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"change callback invoked with input value",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}},kind:{defaultValue:{value:"normal"},description:"`normal` - display input and label normally\n\n`card` - display input and label as a toggleable card\n\n`input-card` - display toggleable card with a faux radio input\n\n`checkmark` - uses a checkmark icon instead of a faux radio",name:"kind",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"row"'},{value:'"row-start"'},{value:'"card"'},{value:'"input-card"'},{value:'"checkmark"'}]}},error:{defaultValue:null,description:"Error message. When passed, the `error` prop will\nrender the radio group in an error state.",name:"error",required:!1,type:{name:"string"}},alwaysShowDetails:{defaultValue:{value:"false"},description:"Always show details. When `true`, the details will\nalways be shown, regardless of if an radio button is selected.\nWhen `false`, the details will only be shown when a radio\nbutton is selected. Defaults to `false`",name:"alwaysShowDetails",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/RadioButtons/index.tsx#RadioButtons"]={docgenInfo:RadioButtons.__docgenInfo,name:"RadioButtons",path:"src/RadioButtons/index.tsx#RadioButtons"})}catch(__react_docgen_typescript_loader_error){}},"./src/util/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createUseLayerContainer(){if("undefined"!=typeof document){const container=document.getElementById("outlet");if(container)return container;{const outlet=document.createElement("div");return outlet.setAttribute("id","outlet"),outlet.setAttribute("class","outlet"),document.body.appendChild(outlet),outlet}}}__webpack_require__.d(__webpack_exports__,{u:()=>createUseLayerContainer})},"./src/DropdownTrigger/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComposingWithPopover:()=>ComposingWithPopover,ErrorState:()=>ErrorState,LabelOnly:()=>LabelOnly,Overview:()=>Overview,WithTokensAsStartContent:()=>WithTokensAsStartContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/DropdownTrigger/index.js"),_Popover__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Popover/index.js"),_RadioButtons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/RadioButtons/index.tsx"),_FieldToken__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/FieldToken/index.jsx");const Overview=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Overview.args={labelText:"State"};const LabelOnly=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{labelText:"Filters (6)"});LabelOnly.parameters={docs:{description:{story:"The `displayValue` can be omitted if you only need to render a label"}}};const WithTokensAsStartContent=()=>{const[tokens,setTokens]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["Detroit, MI","Chicago, IL","Miami, FL","Boston, MA","Seattle, WA","Denver, CO","Houston, TX","Philadelphia, PA"]),handleTokenDismiss=token=>{setTokens((oldTokens=>{const newTokens=new Set(oldTokens);return newTokens.delete(token),[...newTokens]}))};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{displayValue:null,startContent:react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"nds-dropdownTrigger-tokens padding--y--xs"},tokens.map((label=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FieldToken__WEBPACK_IMPORTED_MODULE_4__.A,{key:"label",label,onDismiss:handleTokenDismiss}))))})};WithTokensAsStartContent.parameters={docs:{description:{story:"The `startContent` and `endContent` props may be used to render arbitrary JSX, like tokens and icons."}}};const ErrorState=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{labelText:"Account",displayValue:"Checking (1234)",errorText:"This account is not eligible"});ErrorState.parameters={docs:{description:{story:"Pass `errorText` to enable the error state of `DropdownTrigger`"}}};const ComposingWithPopover=()=>{const[fondueType,setFondueType]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),popoverContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"padding--top padding--x"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RadioButtons__WEBPACK_IMPORTED_MODULE_3__.A,{name:"fondueType",options:{Chocolate:"Chocolate",Cheese:"Cheese"},onChange:({target})=>{setFondueType(target.value)}}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_2__.A,{content:popoverContent,matchTriggerWidth:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{labelText:"Fondue Preference",displayValue:fondueType,minWidth:"340px"})))};ComposingWithPopover.parameters={docs:{description:{story:"The `DropdownTrigger` component was designed to be composed with `Popover` or any other modal UI element. In this example, `DropdownTrigger` is used as a triggering element for the `Popover` component."}}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/DropdownTrigger",component:___WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{displayValue:{options:["","NY","CA"]}}},__namedExportsOrder=["Overview","LabelOnly","WithTokensAsStartContent","ErrorState","ComposingWithPopover"];Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"args => <DropdownTrigger {...args} />",...Overview.parameters?.docs?.source}}},LabelOnly.parameters={...LabelOnly.parameters,docs:{...LabelOnly.parameters?.docs,source:{originalSource:'() => <DropdownTrigger labelText="Filters (6)" />',...LabelOnly.parameters?.docs?.source}}},WithTokensAsStartContent.parameters={...WithTokensAsStartContent.parameters,docs:{...WithTokensAsStartContent.parameters?.docs,source:{originalSource:'() => {\n  const [tokens, setTokens] = useState(["Detroit, MI", "Chicago, IL", "Miami, FL", "Boston, MA", "Seattle, WA", "Denver, CO", "Houston, TX", "Philadelphia, PA"]);\n  const handleTokenDismiss = token => {\n    setTokens(oldTokens => {\n      const newTokens = new Set(oldTokens);\n      newTokens.delete(token);\n      return [...newTokens];\n    });\n  };\n  return <DropdownTrigger displayValue={null} startContent={<span className="nds-dropdownTrigger-tokens padding--y--xs">\n          {tokens.map(label => <FieldToken key="label" label={label} onDismiss={handleTokenDismiss} />)}\n        </span>} />;\n}',...WithTokensAsStartContent.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:'() => <DropdownTrigger labelText="Account" displayValue="Checking (1234)" errorText="This account is not eligible" />',...ErrorState.parameters?.docs?.source}}},ComposingWithPopover.parameters={...ComposingWithPopover.parameters,docs:{...ComposingWithPopover.parameters?.docs,source:{originalSource:'() => {\n  const [fondueType, setFondueType] = useState("");\n  const popoverContent = <div className="padding--top padding--x">\n      <RadioButtons name="fondueType" options={{\n      Chocolate: "Chocolate",\n      Cheese: "Cheese"\n    }} onChange={({\n      target\n    }) => {\n      setFondueType(target.value);\n    }} />\n    </div>;\n  return <>\n      <Popover content={popoverContent} matchTriggerWidth>\n        <DropdownTrigger labelText="Fondue Preference" displayValue={fondueType} minWidth="340px" />\n      </Popover>\n    </>;\n}',...ComposingWithPopover.parameters?.docs?.source}}}}}]);