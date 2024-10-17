"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[9269],{"./src/MenuButton/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutomaticPositioning:()=>AutomaticPositioning,CustomTrigger:()=>CustomTrigger,InADialog:()=>InADialog,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),classcat=__webpack_require__("./node_modules/classcat/index.js"),react_laag_esm=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),Menu=__webpack_require__("./node_modules/react-aria-components/dist/Menu.mjs"),Button=__webpack_require__("./node_modules/react-aria-components/dist/Button.mjs"),selection=__webpack_require__("./src/icons/selection.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VALID_ICON_NAMES=selection.icons.map((icon=>icon.properties.name)),MenuButtonItem=_ref=>{let{label,startIcon}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})};MenuButtonItem.propTypes={label:prop_types_default().string.isRequired,onSelect:prop_types_default().func.isRequired,startIcon:prop_types_default().oneOf(VALID_ICON_NAMES)},MenuButtonItem.displayName="MenuButton.Item";const MenuButton_MenuButtonItem=MenuButtonItem;MenuButtonItem.__docgenInfo={description:"",methods:[],displayName:"MenuButton.Item",props:{label:{description:"Display label for menu item",type:{name:"string"},required:!0},onSelect:{description:"Selection handler",type:{name:"func"},required:!0},startIcon:{description:"Optional start icon for menu item",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1}}};var Row=__webpack_require__("./src/Row/index.js");const MenuButton_VALID_ICON_NAMES=selection.icons.map((icon=>icon.properties.name)),labelToItemId=label=>label.replace(/\s+/g,"-").toLowerCase(),MenuButton=_ref=>{let{label="Menu",testId,trigger,triggerIcon="more-vertical",showDropdownIndicator=!1,children}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(!1),menuItems=react.Children.toArray(children),{renderLayer,triggerProps,layerProps}=(0,react_laag_esm.Z4)({isOpen,auto:!0,onOutsideClick:()=>{setIsOpen(!1)},preferX:"right",preferY:"bottom",placement:"bottom-start"}),handleKeyUp=_ref2=>{let{key}=_ref2;"Escape"===key&&isOpen&&setIsOpen(!1)};(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyUp),()=>{window.removeEventListener("keydown",handleKeyUp)})),[handleKeyUp]);return(0,jsx_runtime.jsxs)(Menu.cQ,{isOpen,onOpenChange:o=>{o&&setIsOpen(!0)},"data-testid":testId,className:"nds-menubutton",children:[(0,jsx_runtime.jsx)(Button.$,{"aria-label":label,className:"button--reset",...triggerProps,children:(0,jsx_runtime.jsx)("div",{className:(0,classcat.A)(["nds-menubutton-trigger",{"nds-menubutton-trigger--useCssHover":!trigger,"nds-menubutton-trigger--hovered":!trigger&&isOpen}]),children:(0,jsx_runtime.jsxs)(Row.A,{gapSize:"xxs",children:[(0,jsx_runtime.jsx)(Row.A.Item,{children:trigger||(0,jsx_runtime.jsx)("span",{className:"narmi-icon-".concat(triggerIcon)})}),showDropdownIndicator&&(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:isOpen?(0,jsx_runtime.jsx)("span",{className:"narmi-icon-chevron-up"}):(0,jsx_runtime.jsx)("span",{className:"narmi-icon-chevron-down"})})]})})}),isOpen&&renderLayer((0,jsx_runtime.jsx)("div",{className:"nds-menubutton-popover",...layerProps,children:(0,jsx_runtime.jsx)(Menu.W1,{onAction:itemId=>{menuItems.find((item=>labelToItemId(item.props.label)===itemId)).props.onSelect(),setIsOpen(!1)},className:"nds-menubutton-menu rounded--all elevation--high",autoFocus:!0,children:menuItems.map(((child,childIndex)=>{const itemId=labelToItemId(child.props.label);return(0,jsx_runtime.jsx)(Menu.Dr,{id:itemId,value:itemId,startIcon:child.props.startIcon,className:_ref3=>{let{isSelected,isFocused,isDisabled}=_ref3;return(0,classcat.A)(["nds-menubutton-item","padding--x--s padding--y--xs",{"nds-menubutton-item--highlighted":isSelected||isFocused,"nds-menubutton-item--disabled":isDisabled,"rounded--top":0===childIndex,"rounded--bottom":childIndex===menuItems.length-1}])},children:(0,jsx_runtime.jsxs)(Row.A,{gapSize:"s",children:[child.props.startIcon&&(0,jsx_runtime.jsx)(Row.A.Item,{shrink:!0,children:(0,jsx_runtime.jsx)("span",{className:"narmi-icon-".concat(child.props.startIcon)})}),(0,jsx_runtime.jsx)(Row.A.Item,{children:child.props.label})]})},itemId)}))})}))]})};MenuButton.displayName="MenuButton",MenuButton.propTypes={label:prop_types_default().string.isRequired,testId:prop_types_default().string,triggerIcon:prop_types_default().oneOf(MenuButton_VALID_ICON_NAMES),trigger:prop_types_default().node,children:prop_types_default().arrayOf(prop_types_default().node),showDropdownIndicator:prop_types_default().bool},MenuButton.Item=MenuButton_MenuButtonItem;const src_MenuButton=MenuButton;MenuButton.__docgenInfo={description:'Keyboard navigable popover menu following the\n[WIA-ARIA "MenuButton" pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton).',methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ label, startIcon }",optional:!1,type:null}],returns:null}],displayName:"MenuButton",props:{label:{defaultValue:{value:'"Menu"',computed:!1},description:'Accessible label for the menu trigger (e.g. "Transaction Actions")',type:{name:"string"},required:!1},triggerIcon:{defaultValue:{value:'"more-vertical"',computed:!1},description:"Name of NDS icon to use as a trigger",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},showDropdownIndicator:{defaultValue:{value:"false",computed:!1},description:"If true, a caret indicator is rendered as the end icon\nwithin the trigger. The icon will change direction when\nthe expanded state of the menulist changes.",type:{name:"bool"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},trigger:{description:"Custom element for trigger",type:{name:"node"},required:!1},children:{description:"MenuButton.Item children",type:{name:"arrayOf",value:{name:"node"}},required:!1}}};var _Overview$parameters,_Overview$parameters2,_CustomTrigger$parame,_CustomTrigger$parame2,_AutomaticPositioning,_AutomaticPositioning2,_InADialog$parameters,_InADialog$parameters2,Dialog=__webpack_require__("./src/Dialog/index.js");const Template=args=>(0,jsx_runtime.jsx)(src_MenuButton,{...args});Template.displayName="Template";const Overview=Template.bind({});Overview.args={label:"Overview example",children:[(0,jsx_runtime.jsx)(src_MenuButton.Item,{startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}},"edit"),(0,jsx_runtime.jsx)(src_MenuButton.Item,{startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}},"screenshot"),(0,jsx_runtime.jsx)(src_MenuButton.Item,{startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}},"deposit")]};const CustomTrigger=Template.bind({});CustomTrigger.args={...Overview.args,showDropdownIndicator:!0,trigger:(0,jsx_runtime.jsx)("span",{className:"button--reset fontColor--azul fontWeight--semibold",children:"More options..."})},CustomTrigger.parameters={docs:{description:{story:"You may use the `trigger` prop as an alternative to passing in a `triggerIcon`. In this example, we pass in a custom `span` to act as the trigger. The `showDropdownIndicator` prop is enabled, causing `MenuButton` to render the chevron icons indicating menu open state."}}};const AutomaticPositioning=()=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",outline:"1px dotted hotpink"},children:(0,jsx_runtime.jsxs)(src_MenuButton,{label:"Menu button on right side of viewport",children:[(0,jsx_runtime.jsx)(src_MenuButton.Item,{startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}},"edit"),(0,jsx_runtime.jsx)(src_MenuButton.Item,{startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}},"screenshot"),(0,jsx_runtime.jsx)(src_MenuButton.Item,{startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}},"deposit")]})});AutomaticPositioning.displayName="AutomaticPositioning",AutomaticPositioning.parameters={docs:{description:{story:"We often render a MenuButton on the right hand of the viewport. The popover menu will reposition itself so it it always visible."}}};const InADialog=()=>{const[isOpen,setIsOpen]=(0,react.useState)();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{onClick:()=>{setIsOpen((open=>!open))},children:"Open Dialog"}),(0,jsx_runtime.jsxs)(Dialog.A,{isOpen,title:"Dialog with a MenuButton",onUserDismiss:()=>{setIsOpen(!1)},children:[(0,jsx_runtime.jsx)("p",{children:"Check out this menubutton"}),(0,jsx_runtime.jsxs)(src_MenuButton,{label:"In a dialog menubutton",children:[(0,jsx_runtime.jsx)(src_MenuButton.Item,{startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}},"edit"),(0,jsx_runtime.jsx)(src_MenuButton.Item,{startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}},"screenshot"),(0,jsx_runtime.jsx)(src_MenuButton.Item,{startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}},"deposit")]})]})]})},index_stories={title:"Components/MenuButton",component:src_MenuButton,argTypes:{triggerIcon:{options:["",...MenuButton_VALID_ICON_NAMES]}}};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <MenuButton {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}},CustomTrigger.parameters={...CustomTrigger.parameters,docs:{...null===(_CustomTrigger$parame=CustomTrigger.parameters)||void 0===_CustomTrigger$parame?void 0:_CustomTrigger$parame.docs,source:{originalSource:"args => <MenuButton {...args} />",...null===(_CustomTrigger$parame2=CustomTrigger.parameters)||void 0===_CustomTrigger$parame2||null===(_CustomTrigger$parame2=_CustomTrigger$parame2.docs)||void 0===_CustomTrigger$parame2?void 0:_CustomTrigger$parame2.source}}},AutomaticPositioning.parameters={...AutomaticPositioning.parameters,docs:{...null===(_AutomaticPositioning=AutomaticPositioning.parameters)||void 0===_AutomaticPositioning?void 0:_AutomaticPositioning.docs,source:{originalSource:'() => <div style={{\n  display: "flex",\n  justifyContent: "flex-end",\n  outline: "1px dotted hotpink"\n}}>\n    <MenuButton label="Menu button on right side of viewport">\n      <MenuButton.Item key="edit" startIcon="edit-2" label="Edit" onSelect={() => {\n      alert("edit handler");\n    }} />\n      <MenuButton.Item key="screenshot" startIcon="camera" label="Screenshot" onSelect={() => {\n      alert("screenshot handler");\n    }} />\n      <MenuButton.Item key="deposit" startIcon="bank" label="Deposit" onSelect={() => {\n      alert("deposit handler");\n    }} />\n    </MenuButton>\n  </div>',...null===(_AutomaticPositioning2=AutomaticPositioning.parameters)||void 0===_AutomaticPositioning2||null===(_AutomaticPositioning2=_AutomaticPositioning2.docs)||void 0===_AutomaticPositioning2?void 0:_AutomaticPositioning2.source}}},InADialog.parameters={...InADialog.parameters,docs:{...null===(_InADialog$parameters=InADialog.parameters)||void 0===_InADialog$parameters?void 0:_InADialog$parameters.docs,source:{originalSource:'() => {\n  const [isOpen, setIsOpen] = useState();\n  return <>\n      <button onClick={() => {\n      setIsOpen(open => !open);\n    }}>\n        Open Dialog\n      </button>\n      <Dialog isOpen={isOpen} title="Dialog with a MenuButton" onUserDismiss={() => {\n      setIsOpen(false);\n    }}>\n        <p>Check out this menubutton</p>\n        <MenuButton label="In a dialog menubutton">\n          <MenuButton.Item key="edit" startIcon="edit-2" label="Edit" onSelect={() => {\n          alert("edit handler");\n        }} />\n          <MenuButton.Item key="screenshot" startIcon="camera" label="Screenshot" onSelect={() => {\n          alert("screenshot handler");\n        }} />\n          <MenuButton.Item key="deposit" startIcon="bank" label="Deposit" onSelect={() => {\n          alert("deposit handler");\n        }} />\n        </MenuButton>\n      </Dialog>\n    </>;\n}',...null===(_InADialog$parameters2=InADialog.parameters)||void 0===_InADialog$parameters2||null===(_InADialog$parameters2=_InADialog$parameters2.docs)||void 0===_InADialog$parameters2?void 0:_InADialog$parameters2.source}}};const __namedExportsOrder=["Overview","CustomTrigger","AutomaticPositioning","InADialog"]},"./src/Dialog/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),raf_schd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/raf-schd/dist/raf-schd.esm.js"),classcat__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/classcat/index.js"),_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useLockBodyScroll/index.jsx"),react_transition_group__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},Dialog=_ref=>{let{isOpen=!1,onUserDismiss=noop,title,headerStyle="bordered",children,notification,footer,width="500px",testId}=_ref;const[isContentOverflowing,setIsContentOverflowing]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),contentRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),shimRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),isBanner="banner"===headerStyle;(0,_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_3__.A)(isOpen);const checkContentOverflow=()=>{(0,raf_schd__WEBPACK_IMPORTED_MODULE_5__.A)(setIsContentOverflowing((contentRef=>{let result=!1;return contentRef.current&&(result=contentRef.current.scrollHeight>contentRef.current.clientHeight+1),result})(contentRef)))},handleKeyDown=_ref2=>{let{key}=_ref2;"Escape"===key&&onUserDismiss()};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(isOpen&&checkContentOverflow(),window.addEventListener("keydown",handleKeyDown),window.addEventListener("resize",checkContentOverflow),()=>{window.removeEventListener("keydown",handleKeyDown),window.removeEventListener("resize",checkContentOverflow)})),[handleKeyDown,checkContentOverflow,isOpen]);const closeButtonJSX=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_6__.A)(["resetButton","nds-dialog-closeButton",{"nds-dialog-closeButton--banner":isBanner}]),"aria-label":"close",onClick:onUserDismiss,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"narmi-icon-x"})}),dialogJSX=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_7__.A,{timeout:1,classNames:"nds-dialog-transition",appear:!0,in:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"nds-shim--dark",ref:shimRef,onClick:_ref3=>{let{target}=_ref3;shimRef.current&&target===shimRef.current&&onUserDismiss()},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_focus_lock__WEBPACK_IMPORTED_MODULE_8__.Ay,{autoFocus:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{role:"dialog","aria-labelledby":"aria-dialog-label","aria-modal":"true",className:"nds-dialog",style:{"--dialog-preferred-width":width},"data-testid":testId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"nds-dialog-header nds-dialog-header--".concat(headerStyle),children:isBanner?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"margin--y--s",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"padding--y--xxs",id:"aria-dialog-label",style:{textAlign:"center"},children:title}),closeButtonJSX]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4",{id:"aria-dialog-label",children:title}),closeButtonJSX]})}),notification&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"nds-dialog-notification padding--y padding--x--xl",children:notification}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{ref:contentRef,className:(0,classcat__WEBPACK_IMPORTED_MODULE_6__.A)(["nds-dialog-content nds-typography padding--top--xs",{"padding--bottom--xl":!footer}]),children}),footer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_6__.A)(["nds-dialog-footer",{"nds-dialog-footer--overflowing":isContentOverflowing}]),children:footer})]})})})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:isOpen&&document&&react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(dialogJSX,document.body)})};Dialog.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node.isRequired,title:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired,notification:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,footer:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,headerStyle:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["bordered","plain","banner"]),isOpen:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_9___default().func,width:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,testId:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string};const __WEBPACK_DEFAULT_EXPORT__=Dialog;Dialog.__docgenInfo={description:"Renders a centered modal dialog with an overlay\n\nThis component uses a `ReactDOM` portal to render it as a direct\nchild of `document.body`.",methods:[],displayName:"Dialog",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"Controls open/close state of the modal. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to dismiss the modal\n(click outside, Escape key, click close button)",type:{name:"func"},required:!1},headerStyle:{defaultValue:{value:'"bordered"',computed:!1},description:"Visual style for Dialog header",type:{name:"enum",value:[{value:'"bordered"',computed:!1},{value:'"plain"',computed:!1},{value:'"banner"',computed:!1}]},required:!1},width:{defaultValue:{value:'"500px"',computed:!1},description:'Sets a custom modal width.\nUse the full CSS value with the unit (e.g. "400px")',type:{name:"string"},required:!1},children:{description:"Scrollable contents of the Dialog",type:{name:"node"},required:!0},title:{description:"Heading in the top of the Dialog",type:{name:"string"},required:!0},notification:{description:"Optional notification content to render pinned under the header",type:{name:"node"},required:!1},footer:{description:"Contents of Dialog footer, typically reserved for action buttons",type:{name:"node"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/Row/RowItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId,children})};RowItem.displayName="RowItem",RowItem.propTypes={shrink:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["div","span","li"]),className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string};const __WEBPACK_DEFAULT_EXPORT__=RowItem;RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",methods:[],displayName:"RowItem",props:{shrink:{defaultValue:{value:"false",computed:!1},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",type:{name:"bool"},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"span"',computed:!1},{value:'"li"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/Row/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.js"),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{let result={};return gapSize&&(result.gap="none"===gapSize?"0":"var(--space-".concat(gapSize,")")),result.alignItems="top"===alignItems?"flex-start":alignItems,result.justifyContent="flex-".concat(justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId,children})};Row.displayName="Row",Row.propTypes={gapSize:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["xxs","xs","s","m","l","xl","none"]),alignItems:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["top","center"]),justifyContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["start","end"]),as:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["span","div","ul"]),className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().node).isRequired,testId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A;const __WEBPACK_DEFAULT_EXPORT__=Row;Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width of its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:'{\n  shrink = false,\n  as = "div",\n  className = "",\n  children,\n  testId,\n}',optional:!1,type:null}],returns:null}],displayName:"Row",props:{alignItems:{defaultValue:{value:'"top"',computed:!1},description:"Controls vertical alignment of items within the row",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"center"',computed:!1}]},required:!1},justifyContent:{defaultValue:{value:'"start"',computed:!1},description:"Controls horizontal flex justification",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1}]},required:!1},gapSize:{defaultValue:{value:'"l"',computed:!1},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",type:{name:"string"},required:!1},children:{description:"Children must be of type `Row.Item`",type:{name:"arrayOf",value:{name:"node"}},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/hooks/useLockBodyScroll/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=isActive=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(isActive&&document.body.classList.add("overflow--hidden"),()=>{document.body.classList.remove("overflow--hidden")})),[isActive])}},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children,...rest}=_ref;if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,{...rest,children})};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}}}]);