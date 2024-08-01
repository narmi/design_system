"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[9368],{"./src/Alert/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ControllingVisibility:()=>ControllingVisibility,Overview:()=>Overview,WithoutDismiss:()=>WithoutDismiss,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var _Overview$parameters,_Overview$parameters2,_ControllingVisibilit,_ControllingVisibilit2,_WithoutDismiss$param,_WithoutDismiss$param2,react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Alert/index.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{...args});Template.displayName="Template";const Overview=Template.bind({});Overview.args={isActive:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"I like turtles. Turtles are good. I like turtles. Turtles are good."})};const ControllingVisibility=()=>{const[isActive,setIsActive]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"margin--bottom",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{kind:"success",isActive,onUserDismiss:()=>{setIsActive(!1)},children:"You can dismiss this alert!"})}),!isActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:()=>{setIsActive(!0)},children:"Show alert again"})]})};ControllingVisibility.parameters={docs:{description:{story:"Visibility of an alert should be controlled by the `isActive` prop instead of conditional rendering. This enables every `Alert` to be announced when it becomes active via an `aria-live` region."}}};const WithoutDismiss=Template.bind({});WithoutDismiss.args={isActive:!0,kind:"error",isDismissable:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:["The user can not dismiss this Alert when ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code",{children:"isDismissable"})," is set to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code",{children:"false"})]})};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Alert",component:___WEBPACK_IMPORTED_MODULE_2__.A};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <Alert {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}},ControllingVisibility.parameters={...ControllingVisibility.parameters,docs:{...null===(_ControllingVisibilit=ControllingVisibility.parameters)||void 0===_ControllingVisibilit?void 0:_ControllingVisibilit.docs,source:{originalSource:'() => {\n  const [isActive, setIsActive] = useState(true);\n  return <>\n      <div className="margin--bottom">\n        <Alert kind="success" isActive={isActive} onUserDismiss={() => {\n        setIsActive(false);\n      }}>\n          You can dismiss this alert!\n        </Alert>\n      </div>\n      {!isActive && <button onClick={() => {\n      setIsActive(true);\n    }}>\n          Show alert again\n        </button>}\n    </>;\n}',...null===(_ControllingVisibilit2=ControllingVisibility.parameters)||void 0===_ControllingVisibilit2||null===(_ControllingVisibilit2=_ControllingVisibilit2.docs)||void 0===_ControllingVisibilit2?void 0:_ControllingVisibilit2.source}}},WithoutDismiss.parameters={...WithoutDismiss.parameters,docs:{...null===(_WithoutDismiss$param=WithoutDismiss.parameters)||void 0===_WithoutDismiss$param?void 0:_WithoutDismiss$param.docs,source:{originalSource:"args => <Alert {...args} />",...null===(_WithoutDismiss$param2=WithoutDismiss.parameters)||void 0===_WithoutDismiss$param2||null===(_WithoutDismiss$param2=_WithoutDismiss$param2.docs)||void 0===_WithoutDismiss$param2?void 0:_WithoutDismiss$param2.source}}};const __namedExportsOrder=["Overview","ControllingVisibility","WithoutDismiss"];ControllingVisibility.__docgenInfo={description:"",methods:[],displayName:"ControllingVisibility"}},"./src/Alert/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_Row__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Row/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},Alert=_ref=>{let{isActive=!1,isDismissable=!0,onUserDismiss=noop,kind="info",icon=null,children}=_ref;const iconName="success"===kind?"check":"info";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{"aria-live":"polite",children:isActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-alert","nds-alert--".concat(kind),"rounded--all","padding--all"]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_1__.A,{gapSize:"s",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__.A.Item,{shrink:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"nds-alert-icon narmi-icon-".concat(icon||iconName)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__.A.Item,{children}),isDismissable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__.A.Item,{shrink:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"nds-alert-close resetButton","aria-label":"close",onClick:onUserDismiss,"data-testid":"nds-alert-close",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"narmi-icon-x"})})})]})})})};Alert.displayName="Alert",Alert.propTypes={isActive:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,isDismissable:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,kind:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["info","error","success","warn"]),icon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)])},Alert.__docgenInfo={description:"Inline system message, for a sepcific region of a page.\nThe `isActive` prop is used to hide and show the Alert to ensure the Alert\nis always rendered in an [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)\nfor accessibility.",methods:[],displayName:"Alert",props:{isActive:{defaultValue:{value:"false",computed:!1},description:"The alert is only visible when this prop is set to `true`",type:{name:"bool"},required:!1},isDismissable:{defaultValue:{value:"true",computed:!1},description:"Renders a dismiss button when `true`",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback for user dismissal actions",type:{name:"func"},required:!1},kind:{defaultValue:{value:'"info"',computed:!1},description:"Variant of Alert to use",type:{name:"enum",value:[{value:'"info"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1},{value:'"warn"',computed:!1}]},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"Override the default icon of the alert",type:{name:"string"},required:!1},children:{description:"Message content of the Alert",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Alert},"./src/Row/RowItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RowItem=_ref=>{let{shrink=!1,as="div",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId,children})};RowItem.displayName="RowItem",RowItem.propTypes={shrink:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["div","li"]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.",methods:[],displayName:"RowItem",props:{shrink:{defaultValue:{value:"false",computed:!1},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",type:{name:"bool"},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"li"',computed:!1}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=RowItem},"./src/Row/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{let result={};return gapSize&&(result.gap="none"===gapSize?"0":"var(--space-".concat(gapSize,")")),result.alignItems="top"===alignItems?"flex-start":alignItems,result.justifyContent="flex-".concat(justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:"nds-row",style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId,children})};Row.displayName="Row",Row.propTypes={gapSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["xxs","xs","s","m","l","xl","none"]),alignItems:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["top","center"]),justifyContent:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["start","end"]),as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["div","ul"]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired,testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A,Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width of its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.",methods:[],displayName:"Row",props:{alignItems:{defaultValue:{value:'"top"',computed:!1},description:"Controls vertical alignment of items within the row",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"center"',computed:!1}]},required:!1},justifyContent:{defaultValue:{value:'"start"',computed:!1},description:"Controls horizontal flex justification",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1}]},required:!1},gapSize:{defaultValue:{value:'"l"',computed:!1},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"ul"',computed:!1}]},required:!1},children:{description:"Children must be of type `Row.Item`",type:{name:"arrayOf",value:{name:"node"}},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Row},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children,...rest}=_ref;if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,{...rest,children})};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)])},AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=AsElement},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);