"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[9269],{"./src/hooks/useLockBodyScroll/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=isActive=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(isActive&&document.body.classList.add("overflow--hidden"),()=>{document.body.classList.remove("overflow--hidden")})),[isActive])}},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const _excluded=["elementType","children"];const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children}=_ref,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Element,rest,children)};AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./src/Dialog/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),raf_schd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/raf-schd/dist/raf-schd.esm.js"),classcat__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/classcat/index.js"),_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useLockBodyScroll/index.jsx"),react_transition_group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js");const noop=()=>{},Dialog=_ref=>{let{isOpen=!1,onUserDismiss=noop,title,headerStyle="bordered",children,notification,footer,width="500px",testId}=_ref;const[isContentOverflowing,setIsContentOverflowing]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),contentRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),shimRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),isBanner="banner"===headerStyle;(0,_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_3__.A)(isOpen);const checkContentOverflow=()=>{(0,raf_schd__WEBPACK_IMPORTED_MODULE_4__.A)(setIsContentOverflowing((contentRef=>{let result=!1;return contentRef.current&&(result=contentRef.current.scrollHeight>contentRef.current.clientHeight+1),result})(contentRef)))},handleKeyDown=_ref2=>{let{key}=_ref2;"Escape"===key&&onUserDismiss()};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(isOpen&&checkContentOverflow(),window.addEventListener("keydown",handleKeyDown),window.addEventListener("resize",checkContentOverflow),()=>{window.removeEventListener("keydown",handleKeyDown),window.removeEventListener("resize",checkContentOverflow)})),[handleKeyDown,checkContentOverflow,isOpen]);const closeButtonJSX=react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_5__.A)(["resetButton","nds-dialog-closeButton",{"nds-dialog-closeButton--banner":isBanner}]),"aria-label":"close",onClick:onUserDismiss},react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:"narmi-icon-x"})),dialogJSX=react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_6__.A,{timeout:1,classNames:"nds-dialog-transition",appear:!0,in:!0},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"nds-shim--dark",ref:shimRef,onClick:_ref3=>{let{target}=_ref3;shimRef.current&&target===shimRef.current&&onUserDismiss()}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_focus_lock__WEBPACK_IMPORTED_MODULE_7__.Ay,{autoFocus:!1,className:"nds-dialog-focuslock"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{role:"dialog","aria-labelledby":"aria-dialog-label","aria-modal":"true",className:"nds-dialog",style:{"--dialog-preferred-width":width},"data-testid":testId},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"nds-dialog-header nds-dialog-header--".concat(headerStyle)},isBanner?react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"margin--y--s"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"padding--y--xxs",id:"aria-dialog-label",style:{textAlign:"center"}},title),closeButtonJSX):react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4",{id:"aria-dialog-label"},title),closeButtonJSX)),notification&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"nds-dialog-notification padding--y padding--x--xl"},notification),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{ref:contentRef,className:(0,classcat__WEBPACK_IMPORTED_MODULE_5__.A)(["nds-dialog-content nds-typography padding--top--xs",{"padding--bottom--xl":!footer||isContentOverflowing}])},children),footer&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_5__.A)(["nds-dialog-footer",{"nds-dialog-footer--overflowing":isContentOverflowing}])},footer)))));return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,isOpen&&document&&react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(dialogJSX,document.body))},__WEBPACK_DEFAULT_EXPORT__=Dialog;try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"Renders a centered modal dialog with an overlay\n\nThis component uses a `ReactDOM` portal to render it as a direct\nchild of `document.body`.",displayName:"Dialog",props:{children:{defaultValue:null,description:"Scrollable contents of the Dialog",name:"children",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Heading in the top of the Dialog",name:"title",required:!0,type:{name:"string"}},notification:{defaultValue:null,description:"Optional notification content to render pinned under the header",name:"notification",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Contents of Dialog footer, typically reserved for action buttons",name:"footer",required:!1,type:{name:"ReactNode"}},headerStyle:{defaultValue:{value:"bordered"},description:"Visual style for Dialog header",name:"headerStyle",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"bordered"'},{value:'"banner"'}]}},isOpen:{defaultValue:{value:"false"},description:"Controls open/close state of the modal. Use the `onUserDismiss` callback to update.",name:"isOpen",required:!1,type:{name:"boolean"}},onUserDismiss:{defaultValue:{value:"() => {}"},description:"Callback to handle user taking an action to dismiss the modal\n(click outside, Escape key, click close button)",name:"onUserDismiss",required:!1,type:{name:"() => void"}},width:{defaultValue:{value:"500px"},description:'Sets a custom modal width.\nUse the full CSS value with the unit (e.g. "400px")',name:"width",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Dialog/index.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"src/Dialog/index.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}},"./src/Row/RowItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId},children)},__WEBPACK_DEFAULT_EXPORT__=RowItem;try{RowItem.displayName="RowItem",RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"RowItem",props:{shrink:{defaultValue:{value:"false"},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",name:"shrink",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"li"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/RowItem.tsx#RowItem"]={docgenInfo:RowItem.__docgenInfo,name:"RowItem",path:"src/Row/RowItem.tsx#RowItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/Row/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.tsx"),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{const result={gap:"var(--space-".concat(gapSize,")"),alignItems:"flex-start",justifyContent:"flex-".concat(justifyContent)};return gapSize&&"none"===gapSize&&(result.gap="0"),"top"!==alignItems&&(result.alignItems=alignItems),"space-between"===justifyContent&&(result.justifyContent=justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId},children)};Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A;const __WEBPACK_DEFAULT_EXPORT__=Row;try{Row.displayName="Row",Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width with its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"Row",props:{alignItems:{defaultValue:{value:"top"},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},justifyContent:{defaultValue:{value:"start"},description:"Controls vertical alignment of items within the row",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"space-between"'}]}},gapSize:{defaultValue:{value:"l"},description:"Controls horizontal flex justification",name:"gapSize",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"ul"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children must be of type `Row.Item`",name:"children",required:!0,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/index.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/Row/index.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}},"./src/MenuButton/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutomaticPositioning:()=>AutomaticPositioning,CustomTrigger:()=>CustomTrigger,InADialog:()=>InADialog,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),classcat=__webpack_require__("./node_modules/classcat/index.js"),react_laag_esm=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),Menu=__webpack_require__("./node_modules/react-aria-components/dist/Menu.mjs"),Button=__webpack_require__("./node_modules/react-aria-components/dist/Button.mjs"),selection=__webpack_require__("./src/icons/selection.json");const VALID_ICON_NAMES=selection.Pt.map((icon=>icon.properties.name)),MenuButtonItem=_ref=>{let{label,startIcon}=_ref;return react.createElement(react.Fragment,null)};MenuButtonItem.propTypes={label:prop_types_default().string.isRequired,onSelect:prop_types_default().func.isRequired,startIcon:prop_types_default().oneOf(VALID_ICON_NAMES)},MenuButtonItem.displayName="MenuButton.Item";const MenuButton_MenuButtonItem=MenuButtonItem;MenuButtonItem.__docgenInfo={description:"",methods:[],displayName:"MenuButton.Item",props:{label:{description:"Display label for menu item",type:{name:"string"},required:!0},onSelect:{description:"Selection handler",type:{name:"func"},required:!0},startIcon:{description:"Optional start icon for menu item",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1}}};var Row=__webpack_require__("./src/Row/index.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const MenuButton_VALID_ICON_NAMES=selection.Pt.map((icon=>icon.properties.name)),labelToItemId=label=>label.replace(/\s+/g,"-").toLowerCase(),MenuButton=_ref=>{let{label="Menu",testId,trigger,triggerIcon="more-vertical",showDropdownIndicator=!1,children}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(!1),menuItems=react.Children.toArray(children),{renderLayer,triggerProps,layerProps}=(0,react_laag_esm.Z4)({isOpen,auto:!0,onOutsideClick:()=>{setIsOpen(!1)},preferX:"right",preferY:"bottom",placement:"bottom-start"}),handleKeyUp=_ref2=>{let{key}=_ref2;"Escape"===key&&isOpen&&setIsOpen(!1)};(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyUp),()=>{window.removeEventListener("keydown",handleKeyUp)})),[handleKeyUp]);return react.createElement(Menu.cQ,{isOpen,onOpenChange:o=>{o&&setIsOpen(!0)},"data-testid":testId,className:"nds-menubutton"},react.createElement(Button.$,_extends({"aria-label":label,className:"button--reset"},triggerProps),react.createElement("div",{className:(0,classcat.A)(["nds-menubutton-trigger",{"nds-menubutton-trigger--useCssHover":!trigger,"nds-menubutton-trigger--hovered":!trigger&&isOpen}])},react.createElement(Row.A,{gapSize:"xxs"},react.createElement(Row.A.Item,null,trigger||react.createElement("span",{className:"narmi-icon-".concat(triggerIcon)})),showDropdownIndicator&&react.createElement(Row.A.Item,{shrink:!0},isOpen?react.createElement("span",{className:"narmi-icon-chevron-up"}):react.createElement("span",{className:"narmi-icon-chevron-down"}))))),isOpen&&renderLayer(react.createElement("div",_extends({className:"nds-menubutton-popover"},layerProps),react.createElement(Menu.W1,{onAction:itemId=>{menuItems.find((item=>labelToItemId(item.props.label)===itemId)).props.onSelect(),setIsOpen(!1)},className:"nds-menubutton-menu rounded--all elevation--high",autoFocus:!0},menuItems.map(((child,childIndex)=>{const itemId=labelToItemId(child.props.label);return react.createElement(Menu.Dr,{key:itemId,id:itemId,value:itemId,startIcon:child.props.startIcon,className:_ref3=>{let{isSelected,isFocused,isDisabled}=_ref3;return(0,classcat.A)(["nds-menubutton-item","padding--x--s padding--y--xs",{"nds-menubutton-item--highlighted":isSelected||isFocused,"nds-menubutton-item--disabled":isDisabled,"rounded--top":0===childIndex,"rounded--bottom":childIndex===menuItems.length-1}])}},react.createElement(Row.A,{gapSize:"s"},child.props.startIcon&&react.createElement(Row.A.Item,{shrink:!0},react.createElement("span",{className:"narmi-icon-".concat(child.props.startIcon)})),react.createElement(Row.A.Item,null,child.props.label)))}))))))};MenuButton.propTypes={label:prop_types_default().string.isRequired,testId:prop_types_default().string,triggerIcon:prop_types_default().oneOf(MenuButton_VALID_ICON_NAMES),trigger:prop_types_default().node,children:prop_types_default().arrayOf(prop_types_default().node),showDropdownIndicator:prop_types_default().bool},MenuButton.Item=MenuButton_MenuButtonItem;const src_MenuButton=MenuButton;MenuButton.__docgenInfo={description:'Keyboard navigable popover menu following the\n[WIA-ARIA "MenuButton" pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton).',methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ label, startIcon }",optional:!1,type:null}],returns:null}],displayName:"MenuButton",props:{label:{defaultValue:{value:'"Menu"',computed:!1},description:'Accessible label for the menu trigger (e.g. "Transaction Actions")',type:{name:"string"},required:!1},triggerIcon:{defaultValue:{value:'"more-vertical"',computed:!1},description:"Name of NDS icon to use as a trigger",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},showDropdownIndicator:{defaultValue:{value:"false",computed:!1},description:"If true, a caret indicator is rendered as the end icon\nwithin the trigger. The icon will change direction when\nthe expanded state of the menulist changes.",type:{name:"bool"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},trigger:{description:"Custom element for trigger",type:{name:"node"},required:!1},children:{description:"MenuButton.Item children",type:{name:"arrayOf",value:{name:"node"}},required:!1}}};var Dialog=__webpack_require__("./src/Dialog/index.tsx");const Template=args=>react.createElement(src_MenuButton,args),Overview=Template.bind({});Overview.args={label:"Overview example",children:[react.createElement(src_MenuButton.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),react.createElement(src_MenuButton.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),react.createElement(src_MenuButton.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}})]};const CustomTrigger=Template.bind({});CustomTrigger.args={...Overview.args,showDropdownIndicator:!0,trigger:react.createElement("span",{className:"button--reset fontColor--azul fontWeight--semibold"},"More options...")},CustomTrigger.parameters={docs:{description:{story:"You may use the `trigger` prop as an alternative to passing in a `triggerIcon`. In this example, we pass in a custom `span` to act as the trigger. The `showDropdownIndicator` prop is enabled, causing `MenuButton` to render the chevron icons indicating menu open state."}}};const AutomaticPositioning=()=>react.createElement("div",{style:{display:"flex",justifyContent:"flex-end",outline:"1px dotted hotpink"}},react.createElement(src_MenuButton,{label:"Menu button on right side of viewport"},react.createElement(src_MenuButton.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),react.createElement(src_MenuButton.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),react.createElement(src_MenuButton.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}})));AutomaticPositioning.parameters={docs:{description:{story:"We often render a MenuButton on the right hand of the viewport. The popover menu will reposition itself so it it always visible."}}};const InADialog=()=>{const[isOpen,setIsOpen]=(0,react.useState)();return react.createElement(react.Fragment,null,react.createElement("button",{onClick:()=>{setIsOpen((open=>!open))}},"Open Dialog"),react.createElement(Dialog.A,{isOpen,title:"Dialog with a MenuButton",onUserDismiss:()=>{setIsOpen(!1)}},react.createElement("p",null,"Check out this menubutton"),react.createElement(src_MenuButton,{label:"In a dialog menubutton"},react.createElement(src_MenuButton.Item,{key:"edit",startIcon:"edit-2",label:"Edit",onSelect:()=>{alert("edit handler")}}),react.createElement(src_MenuButton.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",onSelect:()=>{alert("screenshot handler")}}),react.createElement(src_MenuButton.Item,{key:"deposit",startIcon:"bank",label:"Deposit",onSelect:()=>{alert("deposit handler")}}))))},index_stories={title:"Components/MenuButton",component:src_MenuButton,argTypes:{triggerIcon:{options:["",...MenuButton_VALID_ICON_NAMES]}}},__namedExportsOrder=["Overview","CustomTrigger","AutomaticPositioning","InADialog"];Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"args => <MenuButton {...args} />",...Overview.parameters?.docs?.source}}},CustomTrigger.parameters={...CustomTrigger.parameters,docs:{...CustomTrigger.parameters?.docs,source:{originalSource:"args => <MenuButton {...args} />",...CustomTrigger.parameters?.docs?.source}}},AutomaticPositioning.parameters={...AutomaticPositioning.parameters,docs:{...AutomaticPositioning.parameters?.docs,source:{originalSource:'() => <div style={{\n  display: "flex",\n  justifyContent: "flex-end",\n  outline: "1px dotted hotpink"\n}}>\n    <MenuButton label="Menu button on right side of viewport">\n      <MenuButton.Item key="edit" startIcon="edit-2" label="Edit" onSelect={() => {\n      alert("edit handler");\n    }} />\n      <MenuButton.Item key="screenshot" startIcon="camera" label="Screenshot" onSelect={() => {\n      alert("screenshot handler");\n    }} />\n      <MenuButton.Item key="deposit" startIcon="bank" label="Deposit" onSelect={() => {\n      alert("deposit handler");\n    }} />\n    </MenuButton>\n  </div>',...AutomaticPositioning.parameters?.docs?.source}}},InADialog.parameters={...InADialog.parameters,docs:{...InADialog.parameters?.docs,source:{originalSource:'() => {\n  const [isOpen, setIsOpen] = useState();\n  return <>\n      <button onClick={() => {\n      setIsOpen(open => !open);\n    }}>\n        Open Dialog\n      </button>\n      <Dialog isOpen={isOpen} title="Dialog with a MenuButton" onUserDismiss={() => {\n      setIsOpen(false);\n    }}>\n        <p>Check out this menubutton</p>\n        <MenuButton label="In a dialog menubutton">\n          <MenuButton.Item key="edit" startIcon="edit-2" label="Edit" onSelect={() => {\n          alert("edit handler");\n        }} />\n          <MenuButton.Item key="screenshot" startIcon="camera" label="Screenshot" onSelect={() => {\n          alert("screenshot handler");\n        }} />\n          <MenuButton.Item key="deposit" startIcon="bank" label="Deposit" onSelect={() => {\n          alert("deposit handler");\n        }} />\n        </MenuButton>\n      </Dialog>\n    </>;\n}',...InADialog.parameters?.docs?.source}}}}}]);