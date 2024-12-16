"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[2640],{"./src/Button/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonSizes:()=>ButtonSizes,ConfirmAndCancel:()=>ConfirmAndCancel,Overview:()=>Overview,PlainButton:()=>PlainButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/react/index.js");var _Overview$parameters,_Overview$parameters2,_PlainButton$paramete,_PlainButton$paramete2,_ConfirmAndCancel$par,_ConfirmAndCancel$par2,_ButtonSizes$paramete,_ButtonSizes$paramete2,___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Button/index.js"),_Row__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Row/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,_objectSpread({},args));Template.displayName="Template";const Overview=Template.bind({});Overview.args={label:"Submit"};const PlainButton=Template.bind({});PlainButton.args={label:"Edit",kind:"plain"},PlainButton.parameters={docs:{description:{story:'A Button of `kind="plain"` is a button styled to look like a link.'}}};const ConfirmAndCancel=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center",justifyContent:"end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{shrink:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{kind:"negative",label:"Cancel"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{shrink:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{kind:"primary",label:"Confirm"})})]});ConfirmAndCancel.displayName="ConfirmAndCancel",ConfirmAndCancel.parameters={docs:{description:{story:"When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right."}}};const ButtonSizes=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"margin--bottom--l",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center",children:["m","s","xs"].map((size=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{label:"".concat(size," Button"),size})},size)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"margin--bottom--l",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center",children:["m","s","xs"].map((size=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{kind:"secondary",label:"".concat(size," Button"),size})},size)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"margin--bottom--l",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center",children:["m","s","xs"].map((size=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{kind:"tonal",label:"".concat(size," Button"),size})},size)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"margin--bottom--l",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center",children:["m","s","xs"].map((size=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{kind:"plain",label:"".concat(size," Button"),size})},size)))})})]}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:___WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{startIcon:{options:["",...___WEBPACK_IMPORTED_MODULE_2__.y]},endIcon:{options:["",...___WEBPACK_IMPORTED_MODULE_2__.y]}}};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),PlainButton.parameters=_objectSpread(_objectSpread({},PlainButton.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PlainButton$paramete=PlainButton.parameters)||void 0===_PlainButton$paramete?void 0:_PlainButton$paramete.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args} />"},null===(_PlainButton$paramete2=PlainButton.parameters)||void 0===_PlainButton$paramete2||null===(_PlainButton$paramete2=_PlainButton$paramete2.docs)||void 0===_PlainButton$paramete2?void 0:_PlainButton$paramete2.source)})}),ConfirmAndCancel.parameters=_objectSpread(_objectSpread({},ConfirmAndCancel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ConfirmAndCancel$par=ConfirmAndCancel.parameters)||void 0===_ConfirmAndCancel$par?void 0:_ConfirmAndCancel$par.docs),{},{source:_objectSpread({originalSource:'() => <Row alignItems="center" justifyContent="end">\n    <Row.Item shrink>\n      <Button kind="negative" label="Cancel" />\n    </Row.Item>\n    <Row.Item shrink>\n      <Button kind="primary" label="Confirm" />\n    </Row.Item>\n  </Row>'},null===(_ConfirmAndCancel$par2=ConfirmAndCancel.parameters)||void 0===_ConfirmAndCancel$par2||null===(_ConfirmAndCancel$par2=_ConfirmAndCancel$par2.docs)||void 0===_ConfirmAndCancel$par2?void 0:_ConfirmAndCancel$par2.source)})}),ButtonSizes.parameters=_objectSpread(_objectSpread({},ButtonSizes.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ButtonSizes$paramete=ButtonSizes.parameters)||void 0===_ButtonSizes$paramete?void 0:_ButtonSizes$paramete.docs),{},{source:_objectSpread({originalSource:'() => <>\n    <div className="margin--bottom--l">\n      <Row alignItems="center">\n        {["m", "s", "xs"].map(size => <Row.Item key={size}>\n            <Button label={`${size} Button`} size={size} />\n          </Row.Item>)}\n      </Row>\n    </div>\n    <div className="margin--bottom--l">\n      <Row alignItems="center">\n        {["m", "s", "xs"].map(size => <Row.Item key={size}>\n            <Button kind="secondary" label={`${size} Button`} size={size} />\n          </Row.Item>)}\n      </Row>\n    </div>\n    <div className="margin--bottom--l">\n      <Row alignItems="center">\n        {["m", "s", "xs"].map(size => <Row.Item key={size}>\n            <Button kind="tonal" label={`${size} Button`} size={size} />\n          </Row.Item>)}\n      </Row>\n    </div>\n    <div className="margin--bottom--l">\n      <Row alignItems="center">\n        {["m", "s", "xs"].map(size => <Row.Item key={size}>\n            <Button kind="plain" label={`${size} Button`} size={size} />\n          </Row.Item>)}\n      </Row>\n    </div>\n  </>'},null===(_ButtonSizes$paramete2=ButtonSizes.parameters)||void 0===_ButtonSizes$paramete2||null===(_ButtonSizes$paramete2=_ButtonSizes$paramete2.docs)||void 0===_ButtonSizes$paramete2?void 0:_ButtonSizes$paramete2.source)})});const __namedExportsOrder=["Overview","PlainButton","ConfirmAndCancel","ButtonSizes"]},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);