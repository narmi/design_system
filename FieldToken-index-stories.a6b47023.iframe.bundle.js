"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[5567],{"./src/FieldToken/index.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Overview$parameters,_Overview$parameters2,___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/FieldToken/index.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});Template.displayName="Template";const Overview=Template.bind({});Overview.args={label:"Label"};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/FieldToken",component:___WEBPACK_IMPORTED_MODULE_1__.A};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <FieldToken {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}};const __namedExportsOrder=["Overview"]},"./src/FieldToken/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},FieldToken=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldToken(_ref,forwardedRef){let{label,onDismiss=noop,disabled=!1,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{ref:forwardedRef,role:"listitem",className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)(["nds-fieldToken","padding--y--none","padding--left--s","padding--right--xs","rounded--all--l","fontSize--xs","fontWeight--semibold",{"nds-fieldToken--disabled":disabled}]),"data-testid":testId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"whiteSpace--truncate",style:{userSelect:"none"},children:label}),!disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"narmi-icon-x margin--left--xs",role:"button","aria-label":"Remove ".concat(label),tabIndex:0,onClick:e=>{e.stopPropagation(),onDismiss(label)},onKeyUp:_ref2=>{let{key}=_ref2;"Enter"!==key&&" "!=key||onDismiss(label)}})]})}));FieldToken.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired,onDismiss:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,testId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},FieldToken.__docgenInfo={description:'Shared component to render "tokens" inside inputs, active filters,\nor other user selections we want to tokenize.',methods:[],displayName:"FieldToken",props:{onDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback for user dismissal action,\ncalled with token label as the argument",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disabled state for FieldToken",type:{name:"bool"},required:!1},label:{description:"Label text of tag.",type:{name:"string"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=FieldToken},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);