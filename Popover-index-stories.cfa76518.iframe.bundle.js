"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[5949],{"./src/Popover/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,FocusManagement:()=>FocusManagement,Overview:()=>Overview,Positioning:()=>Positioning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var _Overview$parameters,_Overview$parameters2,_Positioning$paramete,_Positioning$paramete2,_FocusManagement$para,_FocusManagement$para2,_Controlled$parameter,_Controlled$parameter2,react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Popover/index.js"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,_objectSpread({},args))});Template.displayName="Template";const Overview=Template.bind({});Overview.args={content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"padding--all--m",children:"📦 Any content"}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{type:"button",kind:"secondary",children:"Open Popover"})},Overview.argTypes={content:{control:!1}};const Positioning=Template.bind({});Positioning.args={content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"padding--all--m",children:["Use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code",{children:"side"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code",{children:"alignment"})," to set your preferred positioning"]}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{type:"button",kind:"secondary",children:"Top / Start positioned Popover"}),side:"top",alignment:"start"},Positioning.argTypes={content:{control:!1}};const FocusManagement=Template.bind({});FocusManagement.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{type:"button",kind:"secondary",children:"Click to show Popover"}),content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"padding--all",children:["Focus will be trapped to"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{target:"blank",href:"http://narmi.com",className:"fontWeight--bold",children:"focusable"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{target:"blank",href:"http://narmi.com",className:"fontWeight--bold",children:"elements"})," ","within the Popover while it is open."]})};const Controlled=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{kind:"secondary",size:"s",label:"show popover",onClick:()=>setIsOpen(!isOpen)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"margin--top--m",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"padding--all--m",children:"📦 Any content"}),isOpen,onUserDismiss:()=>setIsOpen(!1),onUserEnable:()=>setIsOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:"Popover trigger and positioning reference"})})})]})};Controlled.parameters={docs:{description:{story:"In this example, the user may click on either the button, or the text below to open the Popover. The `children` (trigger element) of Popover will always be the positioning reference. The `onUserEnable` prop can be used to subscribe to user interactions on the trigger, and `onUserDismiss` is used to subscribe to user events that dismiss the popover."}}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Popover",component:___WEBPACK_IMPORTED_MODULE_2__.A};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:'args => <div style={{\n  height: "200px",\n  display: "flex",\n  flexDirection: "column",\n  justifyContent: "center",\n  alignItems: "center"\n}}>\n    <Popover {...args} />\n  </div>'},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),Positioning.parameters=_objectSpread(_objectSpread({},Positioning.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Positioning$paramete=Positioning.parameters)||void 0===_Positioning$paramete?void 0:_Positioning$paramete.docs),{},{source:_objectSpread({originalSource:'args => <div style={{\n  height: "200px",\n  display: "flex",\n  flexDirection: "column",\n  justifyContent: "center",\n  alignItems: "center"\n}}>\n    <Popover {...args} />\n  </div>'},null===(_Positioning$paramete2=Positioning.parameters)||void 0===_Positioning$paramete2||null===(_Positioning$paramete2=_Positioning$paramete2.docs)||void 0===_Positioning$paramete2?void 0:_Positioning$paramete2.source)})}),FocusManagement.parameters=_objectSpread(_objectSpread({},FocusManagement.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FocusManagement$para=FocusManagement.parameters)||void 0===_FocusManagement$para?void 0:_FocusManagement$para.docs),{},{source:_objectSpread({originalSource:'args => <div style={{\n  height: "200px",\n  display: "flex",\n  flexDirection: "column",\n  justifyContent: "center",\n  alignItems: "center"\n}}>\n    <Popover {...args} />\n  </div>'},null===(_FocusManagement$para2=FocusManagement.parameters)||void 0===_FocusManagement$para2||null===(_FocusManagement$para2=_FocusManagement$para2.docs)||void 0===_FocusManagement$para2?void 0:_FocusManagement$para2.source)})}),Controlled.parameters=_objectSpread(_objectSpread({},Controlled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Controlled$parameter=Controlled.parameters)||void 0===_Controlled$parameter?void 0:_Controlled$parameter.docs),{},{source:_objectSpread({originalSource:'() => {\n  const [isOpen, setIsOpen] = useState(false);\n  return <>\n      <Button kind="secondary" size="s" label="show popover" onClick={() => setIsOpen(!isOpen)} />\n      <div className="margin--top--m">\n        <Popover content={<div className="padding--all--m">📦 Any content</div>} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} onUserEnable={() => setIsOpen(true)}>\n          <div>Popover trigger and positioning reference</div>\n        </Popover>\n      </div>\n    </>;\n}'},null===(_Controlled$parameter2=Controlled.parameters)||void 0===_Controlled$parameter2||null===(_Controlled$parameter2=_Controlled$parameter2.docs)||void 0===_Controlled$parameter2?void 0:_Controlled$parameter2.source)})});const __namedExportsOrder=["Overview","Positioning","FocusManagement","Controlled"]},"./src/Popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),react_laag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const noop=()=>{},Popover=_ref=>{let{side="bottom",alignment="center",content,children,wrapperDisplay="inline-flex",offset=2,disableAutoPlacement=!1,matchTriggerWidth=!1,testId,closeOnContentClick=!1,isOpen,autoFocus=!1,hasShadow=!0,onUserDismiss=noop,onUserEnable=noop}=_ref;const isControlled=!0===isOpen||!1===isOpen,[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),shouldRenderPopover=isControlled?isOpen:open,popoverContent=closeOnContentClick?react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(content,{onClick:()=>{content.onClick&&content.onClick(),setOpen(!1),onUserDismiss()}}):content,closePopover=()=>{setOpen(!1),onUserDismiss()},handleKeyUp=_ref3=>{let{key}=_ref3;"Escape"===key&&shouldRenderPopover&&(setOpen(!1),onUserDismiss())},{renderLayer,triggerProps,triggerBounds,layerProps}=(0,react_laag__WEBPACK_IMPORTED_MODULE_3__.Z4)({isOpen:shouldRenderPopover,onOutsideClick:closePopover,onDisappear:closePopover,auto:!disableAutoPlacement,placement:"".concat(side,"-").concat(alignment),preferX:"left",preferY:"bottom",container:"undefined"!=typeof document?document.body:void 0,triggerOffset:offset});(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(window.addEventListener("keydown",handleKeyUp),()=>{window.removeEventListener("keydown",handleKeyUp)})),[handleKeyUp]);let layerStyle=layerProps.style;return triggerBounds&&matchTriggerWidth&&(layerStyle=_objectSpread({width:triggerBounds.width},layerProps.style)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",_objectSpread(_objectSpread({},triggerProps),{},{style:{display:wrapperDisplay},onClick:event=>{event.stopPropagation(),isControlled?isOpen?onUserDismiss():onUserEnable():setOpen((open=>!open))},onKeyDown:_ref2=>{let{key}=_ref2;"Enter"===key&&(setOpen(!0),onUserEnable())},role:"button",tabIndex:"0","data-testid":"nds-popover-trigger","aria-haspopup":"true","aria-expanded":shouldRenderPopover.toString(),children})),renderLayer((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:shouldRenderPopover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",_objectSpread(_objectSpread({},layerProps),{},{className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)(["nds-typography nds-popover","rounded--all bgColor--white",{"nds-popover--elevated":hasShadow}]),style:layerStyle,"data-testid":testId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{tabIndex:-1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_focus_lock__WEBPACK_IMPORTED_MODULE_5__.Ay,{autoFocus,children:popoverContent})})}))}))]})};Popover.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired,content:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired,side:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["top","right","bottom","left"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["start","center","end"]),wrapperDisplay:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["inline-flex","inline-block","inline","block","flex"]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,matchTriggerWidth:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,disableAutoPlacement:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,closeOnContentClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,onUserEnable:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,autoFocus:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,hasShadow:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool};const __WEBPACK_DEFAULT_EXPORT__=Popover;Popover.__docgenInfo={description:'Generic Popover component. Renders a floating element that can contain any content,\npositioned relatively to its triggering element.\n\nThis Popover only appears on "click" (focus + activate or mouse click) interactions.\nThe Escape key and clicking outside of the Popover will dismiss it.\nFor a hover-based informative popover, use `Tooltip`.\n\nThe popover will position itself based on the `side` prop, but will\nautomatically reposition to avoid collisions with viewport edges.',methods:[],displayName:"Popover",props:{side:{defaultValue:{value:'"bottom"',computed:!1},description:"Sets preferred side of the trigger the tooltip should appear",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"right"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},description:"Sets preferred alignment of the tooltip relative to the trigger",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1}]},required:!1},wrapperDisplay:{defaultValue:{value:'"inline-flex"',computed:!1},description:"CSS `display` value for the element that wraps the Tooltip children",type:{name:"enum",value:[{value:'"inline-flex"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"flex"',computed:!1}]},required:!1},offset:{defaultValue:{value:"2",computed:!1},description:"Distance of Popover from trigger element in number of pixels",type:{name:"number"},required:!1},disableAutoPlacement:{defaultValue:{value:"false",computed:!1},description:"By default, the Popover will automatically reposition itself to avoid viewport edges.\nSetting this prop to `true` will disable this behavior so that the Popover will\nalways be placed on the given `side` prop.",type:{name:"bool"},required:!1},matchTriggerWidth:{defaultValue:{value:"false",computed:!1},description:"When `true`, the Popover container will match the width of its triggering element",type:{name:"bool"},required:!1},closeOnContentClick:{defaultValue:{value:"false",computed:!1},description:"Close the popover if the User clicks on the content",type:{name:"bool"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"When set to `true`, the first focusable element will automatically receive focus\nwhenever the popover opens",type:{name:"bool"},required:!1},hasShadow:{defaultValue:{value:"true",computed:!1},description:"When set to `false` the popover positioned element will not have a box shadow.\nUseful for adding a custom box shadow.",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to __dismiss__ the popover\n(click outside, Escape key)",type:{name:"func"},required:!1},onUserEnable:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to __enable__ the popover\n(click or key interaction on the trigger button rendered in Popover)",type:{name:"func"},required:!1},children:{description:"The root node of JSX passed into Tooltip as children will act as the tooltip trigger",type:{name:"node"},required:!0},content:{description:"Content of popover",type:{name:"node"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},isOpen:{description:"If isOpen is set the component becomes a controlled component. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1}}}}}]);