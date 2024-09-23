"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[2439],{"./src/DropdownTrigger/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComposingWithPopover:()=>ComposingWithPopover,ErrorState:()=>ErrorState,LabelOnly:()=>LabelOnly,Overview:()=>Overview,WithTokensAsStartContent:()=>WithTokensAsStartContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var _Overview$parameters,_Overview$parameters2,_LabelOnly$parameters,_LabelOnly$parameters2,_WithTokensAsStartCon,_WithTokensAsStartCon2,_ErrorState$parameter,_ErrorState$parameter2,_ComposingWithPopover,_ComposingWithPopover2,react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/DropdownTrigger/index.js"),_Popover__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Popover/index.js"),_RadioButtons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/RadioButtons/index.js"),_FieldToken__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/FieldToken/index.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{...args});Template.displayName="Template";const Overview=Template.bind({});Overview.args={labelText:"State"};const LabelOnly=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{labelText:"Filters (6)"});LabelOnly.displayName="LabelOnly",LabelOnly.parameters={docs:{description:{story:"The `displayValue` can be omitted if you only need to render a label"}}};const WithTokensAsStartContent=()=>{const[tokens,setTokens]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(["Detroit, MI","Chicago, IL","Miami, FL","Boston, MA","Seattle, WA","Denver, CO","Houston, TX","Philadelphia, PA"]),handleTokenDismiss=token=>{setTokens((oldTokens=>{const newTokens=new Set(oldTokens);return newTokens.delete(token),[...newTokens]}))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{displayValue:null,startContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"nds-dropdownTrigger-tokens padding--y--xs",children:tokens.map((label=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FieldToken__WEBPACK_IMPORTED_MODULE_5__.A,{label,onDismiss:handleTokenDismiss},"label")))})})};WithTokensAsStartContent.displayName="WithTokensAsStartContent",WithTokensAsStartContent.parameters={docs:{description:{story:"The `startContent` and `endContent` props may be used to render arbitrary JSX, like tokens and icons."}}};const ErrorState=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{labelText:"Account",displayValue:"Checking (1234)",errorText:"This account is not eligible"});ErrorState.displayName="ErrorState",ErrorState.parameters={docs:{description:{story:"Pass `errorText` to enable the error state of `DropdownTrigger`"}}};const ComposingWithPopover=()=>{const[fondueType,setFondueType]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),popoverContent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"padding--top padding--x",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RadioButtons__WEBPACK_IMPORTED_MODULE_4__.A,{name:"fondueType",options:{Chocolate:"Chocolate",Cheese:"Cheese"},onChange:_ref=>{let{target}=_ref;setFondueType(target.value)}})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Popover__WEBPACK_IMPORTED_MODULE_3__.A,{content:popoverContent,matchTriggerWidth:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{labelText:"Fondue Preference",displayValue:fondueType,minWidth:"340px"})})})};ComposingWithPopover.parameters={docs:{description:{story:"The `DropdownTrigger` component was designed to be composed with `Popover` or any other modal UI element. In this example, `DropdownTrigger` is used as a triggering element for the `Popover` component."}}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/DropdownTrigger",component:___WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{displayValue:{options:["","NY","CA"]}}};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <DropdownTrigger {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}},LabelOnly.parameters={...LabelOnly.parameters,docs:{...null===(_LabelOnly$parameters=LabelOnly.parameters)||void 0===_LabelOnly$parameters?void 0:_LabelOnly$parameters.docs,source:{originalSource:'() => <DropdownTrigger labelText="Filters (6)" />',...null===(_LabelOnly$parameters2=LabelOnly.parameters)||void 0===_LabelOnly$parameters2||null===(_LabelOnly$parameters2=_LabelOnly$parameters2.docs)||void 0===_LabelOnly$parameters2?void 0:_LabelOnly$parameters2.source}}},WithTokensAsStartContent.parameters={...WithTokensAsStartContent.parameters,docs:{...null===(_WithTokensAsStartCon=WithTokensAsStartContent.parameters)||void 0===_WithTokensAsStartCon?void 0:_WithTokensAsStartCon.docs,source:{originalSource:'() => {\n  const [tokens, setTokens] = useState(["Detroit, MI", "Chicago, IL", "Miami, FL", "Boston, MA", "Seattle, WA", "Denver, CO", "Houston, TX", "Philadelphia, PA"]);\n  const handleTokenDismiss = token => {\n    setTokens(oldTokens => {\n      const newTokens = new Set(oldTokens);\n      newTokens.delete(token);\n      return [...newTokens];\n    });\n  };\n  return <DropdownTrigger displayValue={null} startContent={<span className="nds-dropdownTrigger-tokens padding--y--xs">\n          {tokens.map(label => <FieldToken key="label" label={label} onDismiss={handleTokenDismiss} />)}\n        </span>} />;\n}',...null===(_WithTokensAsStartCon2=WithTokensAsStartContent.parameters)||void 0===_WithTokensAsStartCon2||null===(_WithTokensAsStartCon2=_WithTokensAsStartCon2.docs)||void 0===_WithTokensAsStartCon2?void 0:_WithTokensAsStartCon2.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...null===(_ErrorState$parameter=ErrorState.parameters)||void 0===_ErrorState$parameter?void 0:_ErrorState$parameter.docs,source:{originalSource:'() => <DropdownTrigger labelText="Account" displayValue="Checking (1234)" errorText="This account is not eligible" />',...null===(_ErrorState$parameter2=ErrorState.parameters)||void 0===_ErrorState$parameter2||null===(_ErrorState$parameter2=_ErrorState$parameter2.docs)||void 0===_ErrorState$parameter2?void 0:_ErrorState$parameter2.source}}},ComposingWithPopover.parameters={...ComposingWithPopover.parameters,docs:{...null===(_ComposingWithPopover=ComposingWithPopover.parameters)||void 0===_ComposingWithPopover?void 0:_ComposingWithPopover.docs,source:{originalSource:'() => {\n  const [fondueType, setFondueType] = useState("");\n  const popoverContent = <div className="padding--top padding--x">\n      <RadioButtons name="fondueType" options={{\n      Chocolate: "Chocolate",\n      Cheese: "Cheese"\n    }} onChange={({\n      target\n    }) => {\n      setFondueType(target.value);\n    }} />\n    </div>;\n  return <>\n      <Popover content={popoverContent} matchTriggerWidth>\n        <DropdownTrigger labelText="Fondue Preference" displayValue={fondueType} minWidth="340px" />\n      </Popover>\n    </>;\n}',...null===(_ComposingWithPopover2=ComposingWithPopover.parameters)||void 0===_ComposingWithPopover2||null===(_ComposingWithPopover2=_ComposingWithPopover2.docs)||void 0===_ComposingWithPopover2?void 0:_ComposingWithPopover2.source}}};const __namedExportsOrder=["Overview","LabelOnly","WithTokensAsStartContent","ErrorState","ComposingWithPopover"]},"./src/DropdownTrigger/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_Error__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Error/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DropdownTrigger=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{isOpen=!1,showOpenIndicator=!0,disabled=!1,labelText,labelProps,displayValue,errorText,minWidth="auto",testId,startContent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{}),endContent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{}),...otherProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"nds-dropdownTrigger",style:{minWidth},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button",{disabled,ref,"data-testid":testId||"dropdownTriggerButton",className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-dropdownTrigger-button button--reset","padding--x--s rounded--all",{"nds-dropdownTrigger-button--hasValue":Boolean(displayValue),"nds-dropdownTrigger-button--hasError":Boolean(errorText),"nds-dropdownTrigger-button--isActive":isOpen,"nds-dropdownTrigger-button--disabled":disabled}]),"aria-expanded":isOpen?"true":"false",type:"button",...otherProps,children:[startContent,labelText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{className:"nds-dropdownTrigger-label",...labelProps,children:labelText}),displayValue&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"nds-dropdownTrigger-value",children:displayValue}),endContent,showOpenIndicator&&!disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{role:"img","aria-label":isOpen?"popup open":"popup closed",className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-dropdownTrigger-chevron fontSize--l fontColor--secondary","narmi-icon-chevron-".concat(isOpen?"up":"down")])})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Error__WEBPACK_IMPORTED_MODULE_1__.A,{error:errorText})]})}));DropdownTrigger.displayName="DropdownTrigger",DropdownTrigger.propTypes={isOpen:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,showOpenIndicator:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,labelText:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,labelProps:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,displayValue:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),errorText:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,minWidth:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,tokens:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),onTokensChange:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,startContent:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,endContent:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool};const __WEBPACK_DEFAULT_EXPORT__=DropdownTrigger;DropdownTrigger.__docgenInfo={description:"Generic trigger button for dropdowns. `DropdownTrigger` can be composed with\nother components like `Popover` to create a wide range of dropdown, popover, and menu components.\n\nThe entire clickable area is a `button` element to ensure dropdown triggers are accessible.\n\n **Additional props will be spread on the `button` element.**",methods:[],displayName:"DropdownTrigger",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"Set this to `true` when the associated popup is open",type:{name:"bool"},required:!1},showOpenIndicator:{defaultValue:{value:"true",computed:!1},description:"Set to `false` to hide the chevron icon indicating open state",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Renders the button with the appearance of a disabled input and\nprevents user interaction.",type:{name:"bool"},required:!1},minWidth:{defaultValue:{value:'"auto"',computed:!1},description:'Sets a minimum width.\nUse the full CSS value with the unit (e.g. "400px")',type:{name:"string"},required:!1},startContent:{defaultValue:{value:"<></>",computed:!1},description:"arbitrary JSX to place at the start of the faux input",type:{name:"node"},required:!1},endContent:{defaultValue:{value:"<></>",computed:!1},description:"arbitrary JSX to place at the end of the faux input",type:{name:"node"},required:!1},labelText:{description:"Text of `label` element",type:{name:"string"},required:!1},labelProps:{description:"Props to spread onto the `label` element",type:{name:"object"},required:!1},displayValue:{description:"Renders a string or node as the value displayed in the `DropdownTrigger`\nUsually, this represents the name of a selected option",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},errorText:{description:"Error message. When this prop is passed, an error state is displayed",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},tokens:{description:"Pass labels to show a token list of current selections",type:{name:"arrayOf",value:{name:"string"}},required:!1},onTokensChange:{description:"Called with new list of tokens. Called whenever a user\nadds or dismisses a token.\n`onTokensChange={(tokens) => setTokens(tokens)}`",type:{name:"func"},required:!1}}}},"./src/Error/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorLine=_ref=>{let{errorLine,marginTop="xxs"}=_ref;return errorLine?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"nds-input-error margin--top--".concat(marginTop),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"fontSize--s margin--right--xxs narmi-icon-x-circle"}),errorLine]}):null};ErrorLine.displayName="ErrorLine",ErrorLine.propTypes={errorLine:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,marginTop:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const Error=_ref2=>{let{error,marginTop="xxs"}=_ref2;return error?Array.isArray(error)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"nds-input-errorlist","aria-live":"polite",children:error.map(((errorLine,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorLine,{errorLine,marginTop:index?marginTop:"xxs"},errorLine)))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorLine,{errorLine:error,marginTop}):null};Error.displayName="Error",Error.propTypes={error:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),marginTop:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const __WEBPACK_DEFAULT_EXPORT__=Error;Error.__docgenInfo={description:"",methods:[],displayName:"Error",props:{marginTop:{defaultValue:{value:'"xxs"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"xxl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},error:{description:"",type:{name:"enum",value:[{value:"PropTypes.string",computed:!0},{value:"PropTypes.arrayOf(PropTypes.string)",computed:!0}]},required:!1}}}},"./src/FieldToken/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},FieldToken=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldToken(_ref,forwardedRef){let{label,onDismiss=noop,disabled=!1,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{ref:forwardedRef,role:"listitem",className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)(["nds-fieldToken","padding--y--none","padding--left--s","padding--right--xs","rounded--all--l","fontSize--xs","fontWeight--semibold",{"nds-fieldToken--disabled":disabled}]),"data-testid":testId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"whiteSpace--truncate",style:{userSelect:"none"},children:label}),!disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"narmi-icon-x margin--left--xs",role:"button","aria-label":"Remove ".concat(label),tabIndex:0,onClick:e=>{e.stopPropagation(),onDismiss(label)},onKeyUp:_ref2=>{let{key}=_ref2;"Enter"!==key&&" "!=key||onDismiss(label)}})]})}));FieldToken.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired,onDismiss:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,testId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const __WEBPACK_DEFAULT_EXPORT__=FieldToken;FieldToken.__docgenInfo={description:'Shared component to render "tokens" inside inputs, active filters,\nor other user selections we want to tokenize.',methods:[],displayName:"FieldToken",props:{onDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback for user dismissal action,\ncalled with token label as the argument",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disabled state for FieldToken",type:{name:"bool"},required:!1},label:{description:"Label text of tag.",type:{name:"string"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/Popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),react_laag__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Popover=_ref=>{let{side="bottom",alignment="center",content,children,wrapperDisplay="inline-flex",offset=2,disableAutoPlacement=!1,matchTriggerWidth=!1,testId,closeOnContentClick=!1,isOpen,onUserDismiss=lodash__WEBPACK_IMPORTED_MODULE_2___default(),onUserEnable=lodash__WEBPACK_IMPORTED_MODULE_2___default()}=_ref;const isControlled=!0===isOpen||!1===isOpen,[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),shouldRenderPopover=isControlled?isOpen:open,popoverContent=closeOnContentClick?react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(content,{onClick:()=>{content.onClick&&content.onClick(),setOpen(!1),onUserDismiss()}}):content,closePopover=()=>{setOpen(!1),onUserDismiss()},handleKeyUp=_ref3=>{let{key}=_ref3;"Escape"===key&&shouldRenderPopover&&(setOpen(!1),onUserDismiss())},{renderLayer,triggerProps,triggerBounds,layerProps}=(0,react_laag__WEBPACK_IMPORTED_MODULE_4__.Z4)({isOpen:shouldRenderPopover,onOutsideClick:closePopover,onDisappear:closePopover,auto:!disableAutoPlacement,placement:"".concat(side,"-").concat(alignment),preferX:"left",preferY:"bottom",container:"undefined"!=typeof document?document.body:void 0,triggerOffset:offset});(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(window.addEventListener("keydown",handleKeyUp),()=>{window.removeEventListener("keydown",handleKeyUp)})),[handleKeyUp]);let layerStyle=layerProps.style;return triggerBounds&&matchTriggerWidth&&(layerStyle={width:triggerBounds.width,...layerProps.style}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{...triggerProps,style:{display:wrapperDisplay},onClick:event=>{event.stopPropagation(),setOpen((open=>(open||onUserEnable(),!open)))},onKeyDown:_ref2=>{let{key}=_ref2;"Enter"===key&&(setOpen(!0),onUserEnable())},role:"button",tabIndex:"0","data-testid":"nds-popover-trigger","aria-haspopup":"true","aria-expanded":shouldRenderPopover.toString(),children}),renderLayer((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:shouldRenderPopover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{...layerProps,className:"nds-typography nds-popover rounded--all bgColor--white",style:layerStyle,"data-testid":testId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{tabIndex:-1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_focus_lock__WEBPACK_IMPORTED_MODULE_5__.Ay,{autoFocus:!1,children:popoverContent})})})}))]})};Popover.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired,content:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired,side:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["top","right","bottom","left"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["start","center","end"]),wrapperDisplay:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["inline-flex","inline-block","inline","block","flex"]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,matchTriggerWidth:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,disableAutoPlacement:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,closeOnContentClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,onUserEnable:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func};const __WEBPACK_DEFAULT_EXPORT__=Popover;Popover.__docgenInfo={description:'Generic Popover component. Renders a floating element that can contain any content,\npositioned relatively to its triggering element.\n\nThis Popover only appears on "click" (focus + activate or mouse click) interactions.\nThe Escape key and clicking outside of the Popover will dismiss it.\nFor a hover-based informative popover, use `Tooltip`.\n\nThe popover will position itself based on the `side` prop, but will\nautomatically reposition to avoid collisions with viewport edges.',methods:[],displayName:"Popover",props:{side:{defaultValue:{value:'"bottom"',computed:!1},description:"Sets preferred side of the trigger the tooltip should appear",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"right"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},description:"Sets preferred alignment of the tooltip relative to the trigger",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1}]},required:!1},wrapperDisplay:{defaultValue:{value:'"inline-flex"',computed:!1},description:"CSS `display` value for the element that wraps the Tooltip children",type:{name:"enum",value:[{value:'"inline-flex"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"flex"',computed:!1}]},required:!1},offset:{defaultValue:{value:"2",computed:!1},description:"Distance of Popover from trigger element in number of pixels",type:{name:"number"},required:!1},disableAutoPlacement:{defaultValue:{value:"false",computed:!1},description:"By default, the Popover will automatically reposition itself to avoid viewport edges.\nSetting this prop to `true` will disable this behavior so that the Popover will\nalways be placed on the given `side` prop.",type:{name:"bool"},required:!1},matchTriggerWidth:{defaultValue:{value:"false",computed:!1},description:"When `true`, the Popover container will match the width of its triggering element",type:{name:"bool"},required:!1},closeOnContentClick:{defaultValue:{value:"false",computed:!1},description:"Close the popover if the User clicks on the content",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"noop",computed:!0},description:"Callback to handle user taking an action to __dismiss__ the popover\n(click outside, Escape key)",type:{name:"func"},required:!1},onUserEnable:{defaultValue:{value:"noop",computed:!0},description:"Callback to handle user taking an action to __enable__ the popover\n(click or key interaction on the trigger button rendered in Popover)",type:{name:"func"},required:!1},children:{description:"The root node of JSX passed into Tooltip as children will act as the tooltip trigger",type:{name:"node"},required:!0},content:{description:"Content of popover",type:{name:"node"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},isOpen:{description:"If isOpen is set the component becomes a controlled component. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1}}}},"./src/RadioButtons/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),_Error__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Error/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioButtons=_ref=>{let{options,name,initialValue,value,kind="normal",onChange=()=>{},testId,error,alwaysShowDetails=!1,...containerProps}=_ref;const isControlled=void 0!==value,hasError=void 0!==error&&error.length>0,[checkedValue,setCheckedValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isControlled?value:initialValue),[focusedValue,setFocusedValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{isControlled&&setCheckedValue(value)}),[value]);const handleChange=e=>{isControlled||setCheckedValue(e.target.value),onChange(e)},handleFocus=_ref2=>{let{target}=_ref2;setFocusedValue(target.value)},handleBlur=()=>{setFocusedValue(null)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"nds-radiobuttons nds-radiobuttons--".concat(kind),onChange:handleChange,"data-testid":testId,...containerProps,children:[Object.entries(options).map((_ref3=>{let[label,subOptions]=_ref3;const{value:inputValue,details}="object"==typeof subOptions?subOptions:{value:subOptions};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)(["nds-radiobuttons-option","fontWeight--default",{"nds-radiobuttons-option--checked":checkedValue==inputValue,"nds-radiobuttons-option--focused":focusedValue==inputValue,"nds-radiobuttons-option--error":hasError,"padding--all rounded--all border--all":"card"===kind}]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"nds-radiobuttons-label-container",children:[label,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{type:"radio","aria-label":"Radio ".concat(name," option ").concat(label),checked:checkedValue===inputValue,onChange:handleChange,onFocus:handleFocus,onBlur:handleBlur,value:inputValue,name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{role:"presentation",className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)(["nds-radio",{"narmi-icon-check":"card"===kind}])})]}),details&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)(["nds-radiobutton-details",{"nds-radiobutton-details--checked":alwaysShowDetails||checkedValue==inputValue,"fontColor--secondary":"card"!=kind,"fontSize--s":"card"!=kind}]),children:details})]},inputValue)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Error__WEBPACK_IMPORTED_MODULE_2__.A,{error})]})};RadioButtons.displayName="RadioButtons",RadioButtons.propTypes={options:prop_types__WEBPACK_IMPORTED_MODULE_5___default().object,name:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,initialValue:prop_types__WEBPACK_IMPORTED_MODULE_5___default().any,value:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onChange:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,kind:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["normal","row","card"]),error:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,alwaysShowDetails:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string};const __WEBPACK_DEFAULT_EXPORT__=RadioButtons;RadioButtons.__docgenInfo={description:'The Narmi RadioButtons component expects an "options" Prop, which is an object where the keys are the radiobutton\nlabels and the values are the radiobutton values. An "initialvalue" Prop can be passed to set a default checked\nradiobutton.\n```\n  options={{\n    "First Label": { value: "firstValue", details: "This is the explanation of the firstValue" },\n    "Second Label": { value: "secondValue", details: "This is the explanation of the secondValue" }\n  }\n```\n\nThe other options configuration without details would be:\n```\n  options={{ "First Label": "firstValue", "Second Label": "secondValue" }}\n```',methods:[],displayName:"RadioButtons",props:{kind:{defaultValue:{value:'"normal"',computed:!1},description:"`normal` - display input and label normally\n\n`card` - display input and label as a toggleable card",type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"row"',computed:!1},{value:'"card"',computed:!1}]},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"change callback invoked with input value",type:{name:"func"},required:!1},alwaysShowDetails:{defaultValue:{value:"false",computed:!1},description:"Always show details. When `true`, the details will\nalways be shown, regardless of if an radio button is selected.\nWhen `false`, the details will only be shown when a radio\nbutton is selected. Defaults to `false`",type:{name:"bool"},required:!1},options:{description:"Map of label strings to input values",type:{name:"object"},required:!1},name:{description:"name of radiogroup",type:{name:"string"},required:!1},initialValue:{description:"initially selected option by input value (uncontrolled)",type:{name:"any"},required:!1},value:{description:"selected option by input value (fully controlled)\nWhen passing a `value` prop, you must use the `onChange`\nhandler to update the `value`",type:{name:"string"},required:!1},error:{description:"Error message. When passed, the `error` prop will\nrender the radio group in an error state.",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}}}]);