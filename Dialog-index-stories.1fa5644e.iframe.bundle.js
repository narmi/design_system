"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[1288],{"./src/Dialog/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BannerType:()=>BannerType,FocusManagement:()=>FocusManagement,Overview:()=>Overview,PopoverDialog:()=>PopoverDialog,ScrollingContent:()=>ScrollingContent,UsingWithState:()=>UsingWithState,WithNotification:()=>WithNotification,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var _Overview$parameters,_Overview$parameters2,_UsingWithState$param,_UsingWithState$param2,_BannerType$parameter,_BannerType$parameter2,_ScrollingContent$par,_ScrollingContent$par2,_FocusManagement$para,_FocusManagement$para2,_PopoverDialog$parame,_PopoverDialog$parame2,_WithNotification$par,_WithNotification$par2,react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Dialog/index.js"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Button/index.js"),_Popover__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Popover/index.js"),_Alert__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Alert/index.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BaseTemplate=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{...args});BaseTemplate.displayName="BaseTemplate";const InteractiveTemplate=args=>{const[isDialogOpen,setIsDialogOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{onClick:()=>{setIsDialogOpen(!0)},children:"Open Dialog"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{...args,isOpen:isDialogOpen,onUserDismiss:()=>{setIsDialogOpen(!1)},footer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{textAlign:"right"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{onClick:()=>{setIsDialogOpen(!1)},children:"Close Dialog"})})})]})},Overview=BaseTemplate.bind({});Overview.args={isOpen:!1,title:"Dialog title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:"Dialog content"}),footer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{textAlign:"right"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{children:"Accept"})}),headerStyle:"bordered",onUserDismiss:()=>{},width:"500px"},Overview.argTypes={footer:{control:!1}};const UsingWithState=InteractiveTemplate.bind({});UsingWithState.args={title:"Dialog controlled by external state",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:"Dialog content"})},UsingWithState.parameters={docs:{description:{story:"The `Dialog` will render open our closed based on the `isOpen` prop passed in. Use the `onUserDismiss` callback to determine when to change the value of `isOpen`."}}};const BannerType=InteractiveTemplate.bind({});BannerType.args={title:"This shows how the `title` will look like for the banner header style",headerStyle:"banner",width:"800px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4",{className:"margin--top--l",children:"Lorem ipsum"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?"})]})},BannerType.parameters={docs:{description:{story:"Works the same way as above, but its title is a banner instead. Note that the width might need to be set to be larger than the default depending on the length of title."}}};const ScrollingContent=InteractiveTemplate.bind({});ScrollingContent.args={title:"Resize your window",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"This content area will become scrollable whenever the content overflows its container."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?"})]})},ScrollingContent.parameters={docs:{description:{story:"The `Dialog` will grow in height to fit content until it reaches edges of the viewport, at which point, the content area will become scrollable and a gradient border appears betwen the footer and content area."}}};const FocusManagement=InteractiveTemplate.bind({});FocusManagement.args={title:"Tab through this Dialog",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:["Focus will be trapped to"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a",{_target:"blank",href:"http://narmi.com",children:"focusable elements"})," ","within the Dialog. Background content is marked as hidden via ARIA attributes."]})},FocusManagement.parameters={docs:{description:{story:"For accessibility purposes, only elements within the Dialog can be focused while the Dialog is open."}}};const PopoverDialog=()=>{const[isDialogOpen,setIsDialogOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style",{children:"\n        .popover-content > div:hover {\n          cursor: pointer;\n          background-color: rgba(26, 67, 56, 0.05);\n        }\n        "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Popover__WEBPACK_IMPORTED_MODULE_4__.A,{closeOnContentClick:!0,content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"popover-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"padding--all--s",tabIndex:"0",role:"button",onClick:()=>{setIsDialogOpen(!0)},onKeyDown:()=>{},children:"Open Modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"padding--all--s",tabIndex:"0",role:"button",onClick:()=>{},onKeyDown:()=>{},children:"Does Nothing"})]}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-more-horizontal"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{isOpen:isDialogOpen,title:"Remove account",onUserDismiss:()=>{setIsDialogOpen(!1)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{onClick:()=>{setIsDialogOpen(!1)},children:"Close"})})]})},WithNotification=InteractiveTemplate.bind({});WithNotification.args={title:"Dialog controlled by external state",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:"Dialog content"}),notification:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Alert__WEBPACK_IMPORTED_MODULE_5__.A,{kind:"error",isActive:!0,children:"This alert is pinned to the top of the dialog"})};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dialog",component:___WEBPACK_IMPORTED_MODULE_2__.A};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <Dialog {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}},UsingWithState.parameters={...UsingWithState.parameters,docs:{...null===(_UsingWithState$param=UsingWithState.parameters)||void 0===_UsingWithState$param?void 0:_UsingWithState$param.docs,source:{originalSource:'args => {\n  const [isDialogOpen, setIsDialogOpen] = useState(false);\n  return <>\n      <Button onClick={() => {\n      setIsDialogOpen(true);\n    }}>\n        Open Dialog\n      </Button>\n      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {\n      setIsDialogOpen(false);\n    }} footer={<div style={{\n      textAlign: "right"\n    }}>\n            <Button onClick={() => {\n        setIsDialogOpen(false);\n      }}>\n              Close Dialog\n            </Button>\n          </div>} />\n    </>;\n}',...null===(_UsingWithState$param2=UsingWithState.parameters)||void 0===_UsingWithState$param2||null===(_UsingWithState$param2=_UsingWithState$param2.docs)||void 0===_UsingWithState$param2?void 0:_UsingWithState$param2.source}}},BannerType.parameters={...BannerType.parameters,docs:{...null===(_BannerType$parameter=BannerType.parameters)||void 0===_BannerType$parameter?void 0:_BannerType$parameter.docs,source:{originalSource:'args => {\n  const [isDialogOpen, setIsDialogOpen] = useState(false);\n  return <>\n      <Button onClick={() => {\n      setIsDialogOpen(true);\n    }}>\n        Open Dialog\n      </Button>\n      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {\n      setIsDialogOpen(false);\n    }} footer={<div style={{\n      textAlign: "right"\n    }}>\n            <Button onClick={() => {\n        setIsDialogOpen(false);\n      }}>\n              Close Dialog\n            </Button>\n          </div>} />\n    </>;\n}',...null===(_BannerType$parameter2=BannerType.parameters)||void 0===_BannerType$parameter2||null===(_BannerType$parameter2=_BannerType$parameter2.docs)||void 0===_BannerType$parameter2?void 0:_BannerType$parameter2.source}}},ScrollingContent.parameters={...ScrollingContent.parameters,docs:{...null===(_ScrollingContent$par=ScrollingContent.parameters)||void 0===_ScrollingContent$par?void 0:_ScrollingContent$par.docs,source:{originalSource:'args => {\n  const [isDialogOpen, setIsDialogOpen] = useState(false);\n  return <>\n      <Button onClick={() => {\n      setIsDialogOpen(true);\n    }}>\n        Open Dialog\n      </Button>\n      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {\n      setIsDialogOpen(false);\n    }} footer={<div style={{\n      textAlign: "right"\n    }}>\n            <Button onClick={() => {\n        setIsDialogOpen(false);\n      }}>\n              Close Dialog\n            </Button>\n          </div>} />\n    </>;\n}',...null===(_ScrollingContent$par2=ScrollingContent.parameters)||void 0===_ScrollingContent$par2||null===(_ScrollingContent$par2=_ScrollingContent$par2.docs)||void 0===_ScrollingContent$par2?void 0:_ScrollingContent$par2.source}}},FocusManagement.parameters={...FocusManagement.parameters,docs:{...null===(_FocusManagement$para=FocusManagement.parameters)||void 0===_FocusManagement$para?void 0:_FocusManagement$para.docs,source:{originalSource:'args => {\n  const [isDialogOpen, setIsDialogOpen] = useState(false);\n  return <>\n      <Button onClick={() => {\n      setIsDialogOpen(true);\n    }}>\n        Open Dialog\n      </Button>\n      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {\n      setIsDialogOpen(false);\n    }} footer={<div style={{\n      textAlign: "right"\n    }}>\n            <Button onClick={() => {\n        setIsDialogOpen(false);\n      }}>\n              Close Dialog\n            </Button>\n          </div>} />\n    </>;\n}',...null===(_FocusManagement$para2=FocusManagement.parameters)||void 0===_FocusManagement$para2||null===(_FocusManagement$para2=_FocusManagement$para2.docs)||void 0===_FocusManagement$para2?void 0:_FocusManagement$para2.source}}},PopoverDialog.parameters={...PopoverDialog.parameters,docs:{...null===(_PopoverDialog$parame=PopoverDialog.parameters)||void 0===_PopoverDialog$parame?void 0:_PopoverDialog$parame.docs,source:{originalSource:'() => {\n  const [isDialogOpen, setIsDialogOpen] = useState(false);\n  return <>\n      <style>\n        {`\n        .popover-content > div:hover {\n          cursor: pointer;\n          background-color: rgba(26, 67, 56, 0.05);\n        }\n        `}\n      </style>\n      <Popover closeOnContentClick content={<div className="popover-content">\n            <div className="padding--all--s" tabIndex="0" role="button" onClick={() => {\n        setIsDialogOpen(true);\n      }} onKeyDown={() => {}}>\n              Open Modal\n            </div>\n            <div className="padding--all--s" tabIndex="0" role="button" onClick={() => {}} onKeyDown={() => {}}>\n              Does Nothing\n            </div>\n          </div>}>\n        <span className="narmi-icon-more-horizontal"></span>\n      </Popover>\n      <Dialog isOpen={isDialogOpen} title={`Remove account`} onUserDismiss={() => {\n      setIsDialogOpen(false);\n    }}>\n        <Button onClick={() => {\n        setIsDialogOpen(false);\n      }}>\n          Close\n        </Button>\n      </Dialog>\n    </>;\n}',...null===(_PopoverDialog$parame2=PopoverDialog.parameters)||void 0===_PopoverDialog$parame2||null===(_PopoverDialog$parame2=_PopoverDialog$parame2.docs)||void 0===_PopoverDialog$parame2?void 0:_PopoverDialog$parame2.source}}},WithNotification.parameters={...WithNotification.parameters,docs:{...null===(_WithNotification$par=WithNotification.parameters)||void 0===_WithNotification$par?void 0:_WithNotification$par.docs,source:{originalSource:'args => {\n  const [isDialogOpen, setIsDialogOpen] = useState(false);\n  return <>\n      <Button onClick={() => {\n      setIsDialogOpen(true);\n    }}>\n        Open Dialog\n      </Button>\n      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {\n      setIsDialogOpen(false);\n    }} footer={<div style={{\n      textAlign: "right"\n    }}>\n            <Button onClick={() => {\n        setIsDialogOpen(false);\n      }}>\n              Close Dialog\n            </Button>\n          </div>} />\n    </>;\n}',...null===(_WithNotification$par2=WithNotification.parameters)||void 0===_WithNotification$par2||null===(_WithNotification$par2=_WithNotification$par2.docs)||void 0===_WithNotification$par2?void 0:_WithNotification$par2.source}}};const __namedExportsOrder=["Overview","UsingWithState","BannerType","ScrollingContent","FocusManagement","PopoverDialog","WithNotification"];PopoverDialog.__docgenInfo={description:"",methods:[],displayName:"PopoverDialog"}},"./src/Alert/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_Row__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Row/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},Alert=_ref=>{let{isActive=!1,isDismissable=!0,onUserDismiss=noop,kind="info",icon=null,children}=_ref;const iconName="success"===kind?"check":"info";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{"aria-live":"polite",children:isActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-alert","nds-alert--".concat(kind),"rounded--all","padding--all"]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_1__.A,{gapSize:"s",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__.A.Item,{shrink:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"nds-alert-icon narmi-icon-".concat(icon||iconName)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__.A.Item,{children}),isDismissable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__.A.Item,{shrink:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"nds-alert-close resetButton","aria-label":"close",onClick:onUserDismiss,"data-testid":"nds-alert-close",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"narmi-icon-x"})})})]})})})};Alert.displayName="Alert",Alert.propTypes={isActive:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,isDismissable:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,kind:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["info","error","success","warn"]),icon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)])},Alert.__docgenInfo={description:"Inline system message, for a specific region of a page.\nThe `isActive` prop is used to hide and show the Alert to ensure the Alert\nis always rendered in an [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)\nfor accessibility.",methods:[],displayName:"Alert",props:{isActive:{defaultValue:{value:"false",computed:!1},description:"The alert is only visible when this prop is set to `true`",type:{name:"bool"},required:!1},isDismissable:{defaultValue:{value:"true",computed:!1},description:"Renders a dismiss button when `true`",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback for user dismissal actions",type:{name:"func"},required:!1},kind:{defaultValue:{value:'"info"',computed:!1},description:"Variant of Alert to use",type:{name:"enum",value:[{value:'"info"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1},{value:'"warn"',computed:!1}]},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"Override the default icon of the alert",type:{name:"string"},required:!1},children:{description:"Message content of the Alert",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Alert},"./src/Dialog/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),raf_schd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/raf-schd/dist/raf-schd.esm.js"),classcat__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/classcat/index.js"),_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useLockBodyScroll/index.jsx"),react_transition_group__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},Dialog=_ref=>{let{isOpen=!1,onUserDismiss=noop,title,headerStyle="bordered",children,notification,footer,width="500px",testId}=_ref;const[isContentOverflowing,setIsContentOverflowing]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),contentRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),shimRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),isBanner="banner"===headerStyle;(0,_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_3__.A)(isOpen);const checkContentOverflow=()=>{(0,raf_schd__WEBPACK_IMPORTED_MODULE_5__.A)(setIsContentOverflowing((contentRef=>{let result=!1;return contentRef.current&&(result=contentRef.current.scrollHeight>contentRef.current.clientHeight+1),result})(contentRef)))},handleKeyDown=_ref2=>{let{key}=_ref2;"Escape"===key&&onUserDismiss()};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(isOpen&&checkContentOverflow(),window.addEventListener("keydown",handleKeyDown),window.addEventListener("resize",checkContentOverflow),()=>{window.removeEventListener("keydown",handleKeyDown),window.removeEventListener("resize",checkContentOverflow)})),[handleKeyDown,checkContentOverflow,isOpen]);const closeButtonJSX=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_6__.A)(["resetButton","nds-dialog-closeButton",{"nds-dialog-closeButton--banner":isBanner}]),"aria-label":"close",onClick:onUserDismiss,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"narmi-icon-x"})}),dialogJSX=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_7__.A,{timeout:1,classNames:"nds-dialog-transition",appear:!0,in:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"nds-shim--dark",ref:shimRef,onClick:_ref3=>{let{target}=_ref3;shimRef.current&&target===shimRef.current&&onUserDismiss()},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_focus_lock__WEBPACK_IMPORTED_MODULE_8__.Ay,{autoFocus:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{role:"dialog","aria-labelledby":"aria-dialog-label","aria-modal":"true",className:"nds-dialog",style:{"--dialog-preferred-width":width},"data-testid":testId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"nds-dialog-header nds-dialog-header--".concat(headerStyle),children:isBanner?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"margin--y--s",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"padding--y--xxs",id:"aria-dialog-label",style:{textAlign:"center"},children:title}),closeButtonJSX]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4",{id:"aria-dialog-label",children:title}),closeButtonJSX]})}),notification&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"nds-dialog-notification padding--y padding--x--xl",children:notification}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{ref:contentRef,className:(0,classcat__WEBPACK_IMPORTED_MODULE_6__.A)(["nds-dialog-content nds-typography padding--top--xs",{"padding--bottom--xl":!footer}]),children}),footer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_6__.A)(["nds-dialog-footer",{"nds-dialog-footer--overflowing":isContentOverflowing}]),children:footer})]})})})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:isOpen&&document&&react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(dialogJSX,document.body)})};Dialog.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node.isRequired,title:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired,notification:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,footer:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,headerStyle:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["bordered","plain","banner"]),isOpen:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_9___default().func,width:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,testId:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string},Dialog.__docgenInfo={description:"Renders a centered modal dialog with an overlay\n\nThis component uses a `ReactDOM` portal to render it as a direct\nchild of `document.body`.",methods:[],displayName:"Dialog",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"Controls open/close state of the modal. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to dismiss the modal\n(click outside, Escape key, click close button)",type:{name:"func"},required:!1},headerStyle:{defaultValue:{value:'"bordered"',computed:!1},description:"Visual style for Dialog header",type:{name:"enum",value:[{value:'"bordered"',computed:!1},{value:'"plain"',computed:!1},{value:'"banner"',computed:!1}]},required:!1},width:{defaultValue:{value:'"500px"',computed:!1},description:'Sets a custom modal width.\nUse the full CSS value with the unit (e.g. "400px")',type:{name:"string"},required:!1},children:{description:"Scrollable contents of the Dialog",type:{name:"node"},required:!0},title:{description:"Heading in the top of the Dialog",type:{name:"string"},required:!0},notification:{description:"Optional notification content to render pinned under the header",type:{name:"node"},required:!1},footer:{description:"Contents of Dialog footer, typically reserved for action buttons",type:{name:"node"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Dialog},"./src/Popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),react_laag__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Popover=_ref=>{let{side="bottom",alignment="center",content,children,wrapperDisplay="inline-flex",offset=2,disableAutoPlacement=!1,matchTriggerWidth=!1,testId,closeOnContentClick=!1,isOpen,onUserDismiss=lodash__WEBPACK_IMPORTED_MODULE_2___default()}=_ref;const isControlled=!0===isOpen||!1===isOpen,[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),shouldRenderPopover=isControlled?isOpen:open,popoverContent=closeOnContentClick?react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(content,{onClick:()=>{content.onClick&&content.onClick(),setOpen(!1),onUserDismiss()}}):content,closePopover=()=>{setOpen(!1),onUserDismiss()},handleKeyUp=_ref3=>{let{key}=_ref3;"Escape"===key&&shouldRenderPopover&&(setOpen(!1),onUserDismiss())},{renderLayer,triggerProps,triggerBounds,layerProps}=(0,react_laag__WEBPACK_IMPORTED_MODULE_4__.Z4)({isOpen:shouldRenderPopover,onOutsideClick:closePopover,onDisappear:closePopover,auto:!disableAutoPlacement,placement:"".concat(side,"-").concat(alignment),preferX:"left",preferY:"bottom",container:"undefined"!=typeof document?document.body:void 0,triggerOffset:offset});(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(window.addEventListener("keydown",handleKeyUp),()=>{window.removeEventListener("keydown",handleKeyUp)})),[handleKeyUp]);let layerStyle=layerProps.style;return triggerBounds&&matchTriggerWidth&&(layerStyle={width:triggerBounds.width,...layerProps.style}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{...triggerProps,style:{display:wrapperDisplay},onClick:event=>{event.stopPropagation(),setOpen(!open)},onKeyDown:_ref2=>{let{key}=_ref2;"Enter"===key&&setOpen(!0)},role:"button",tabIndex:"0","data-testid":"nds-popover-trigger","aria-haspopup":"true","aria-expanded":shouldRenderPopover.toString(),children}),renderLayer((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:shouldRenderPopover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{...layerProps,className:"nds-typography nds-popover rounded--all bgColor--white",style:layerStyle,"data-testid":testId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{tabIndex:-1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_focus_lock__WEBPACK_IMPORTED_MODULE_5__.Ay,{autoFocus:!1,children:popoverContent})})})}))]})};Popover.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired,content:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired,side:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["top","right","bottom","left"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["start","center","end"]),wrapperDisplay:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["inline-flex","inline-block","inline","block","flex"]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,matchTriggerWidth:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,disableAutoPlacement:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,closeOnContentClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func},Popover.__docgenInfo={description:'Generic Popover component. Renders a floating element that can contain any content,\npositioned relatively to its triggering element.\n\nThis Popover only appears on "click" (focus + activate or mouse click) interactions.\nThe Escape key and clicking outside of the Popover will dismiss it.\nFor a hover-based informative popover, use `Tooltip`.\n\nThe popover will position itself based on the `side` prop, but will\nautomatically reposition to avoid collisions with viewport edges.',methods:[],displayName:"Popover",props:{side:{defaultValue:{value:'"bottom"',computed:!1},description:"Sets preferred side of the trigger the tooltip should appear",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"right"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},description:"Sets preferred alignment of the tooltip relative to the trigger",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1}]},required:!1},wrapperDisplay:{defaultValue:{value:'"inline-flex"',computed:!1},description:"CSS `display` value for the element that wraps the Tooltip children",type:{name:"enum",value:[{value:'"inline-flex"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"flex"',computed:!1}]},required:!1},offset:{defaultValue:{value:"2",computed:!1},description:"Distance of Popover from trigger element in number of pixels",type:{name:"number"},required:!1},disableAutoPlacement:{defaultValue:{value:"false",computed:!1},description:"By default, the Popover will automatically reposition itself to avoid viewport edges.\nSetting this prop to `true` will disable this behavior so that the Popover will\nalways be placed on the given `side` prop.",type:{name:"bool"},required:!1},matchTriggerWidth:{defaultValue:{value:"false",computed:!1},description:"When `true`, the Popover container will match the width of its triggering element",type:{name:"bool"},required:!1},closeOnContentClick:{defaultValue:{value:"false",computed:!1},description:"Close the popover if the User clicks on the content",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"noop",computed:!0},description:"Callback to handle user taking an action to dismiss the popover\n(click outside, Escape key)",type:{name:"func"},required:!1},children:{description:"The root node of JSX passed into Tooltip as children will act as the tooltip trigger",type:{name:"node"},required:!0},content:{description:"Content of popover",type:{name:"node"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},isOpen:{description:"If isOpen is set the component becomes a controlled component. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Popover},"./src/hooks/useLockBodyScroll/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=isActive=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(isActive&&document.body.classList.add("overflow--hidden"),()=>{document.body.classList.remove("overflow--hidden")})),[isActive])}}}]);