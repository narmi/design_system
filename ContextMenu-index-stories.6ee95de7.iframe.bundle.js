"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[6514],{"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const _excluded=["elementType","children"];const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children}=_ref,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Element,rest,children)};AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./src/ContextMenu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_ContextMenu});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),Menu=__webpack_require__("./node_modules/react-aria-components/dist/Menu.mjs"),react_laag_esm=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),classcat=__webpack_require__("./node_modules/classcat/index.js");__webpack_require__("./src/icons/selection.json").Pt.map((icon=>icon.properties.name));const ContextMenuItem=props=>react.createElement(react.Fragment,null);ContextMenuItem.displayName="MenuButton.Item";const ContextMenu_ContextMenuItem=ContextMenuItem;try{MenuButton.Item.displayName="MenuButton.Item",MenuButton.Item.__docgenInfo={description:"",displayName:"MenuButton.Item",props:{label:{defaultValue:null,description:"Display label for menu item",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"ID for menu item",name:"id",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"Selection handler",name:"onSelect",required:!0,type:{name:"(label: string, id: string) => void"}},startIcon:{defaultValue:null,description:"Optional start icon for menu item",name:"startIcon",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ContextMenu/ContextMenuItem.tsx#MenuButton.Item"]={docgenInfo:MenuButton.Item.__docgenInfo,name:"MenuButton.Item",path:"src/ContextMenu/ContextMenuItem.tsx#MenuButton.Item"})}catch(__react_docgen_typescript_loader_error){}var Row=__webpack_require__("./src/Row/index.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ContextMenu(_ref){let{menuItems,testId,children}=_ref;const[isOpen,setIsOpen]=react.useState(!1),[isMouseOverEventEnabled,setIsMouseOverEventEnabled]=react.useState(!0),{handleMouseEvent,trigger,parentRef}=(0,react_laag_esm.gZ)({enabled:isMouseOverEventEnabled}),{renderLayer,triggerProps,layerProps}=(0,react_laag_esm.Z4)({isOpen,auto:!0,onOutsideClick:()=>{setIsOpen(!1),setIsMouseOverEventEnabled(!0)},preferX:"right",preferY:"bottom",placement:"bottom-start",trigger});const handleKeyUp=_ref2=>{let{key}=_ref2;"Escape"===key&&isOpen&&(setIsOpen(!1),setIsMouseOverEventEnabled(!0))},handleNativeContextMenu=event=>{var _parentRef$current;null!==(_parentRef$current=parentRef.current)&&void 0!==_parentRef$current&&_parentRef$current.contains(event.target)||(setIsOpen(!1),setIsMouseOverEventEnabled(!0))};return(0,react.useEffect)((()=>(window.addEventListener("keyup",handleKeyUp),window.addEventListener("contextmenu",handleNativeContextMenu),()=>{window.removeEventListener("keyup",handleKeyUp),window.removeEventListener("contextmenu",handleNativeContextMenu)})),[handleKeyUp]),react.createElement(Menu.cQ,{isOpen:!0,onOpenChange:isOpen=>{isOpen&&setIsOpen(isOpen)},"data-testid":testId},react.createElement("div",_extends({ref:parentRef,role:"button",tabIndex:0,"aria-label":"Press Control + F12 to open the context menu",onContextMenu:function handleContextMenuClick(event){event.preventDefault(),setIsOpen(!0),setIsMouseOverEventEnabled(!1)},onKeyDown:function handleContextMenuKeyDown(event){event.preventDefault(),"F12"===event.key&&event.ctrlKey&&(setIsOpen(!0),setIsMouseOverEventEnabled(!1))},onMouseMove:handleMouseEvent},triggerProps),children),isOpen&&renderLayer(react.createElement("div",_extends({className:"nds-context-menu-popover"},layerProps),react.createElement(Menu.W1,{onAction:itemId=>{const selectedItem=menuItems.find((item=>item.props.id===itemId));selectedItem.props.onSelect(selectedItem.props.label,selectedItem.props.id),setIsOpen(!1),setIsMouseOverEventEnabled(!0)},className:"nds-context-menu rounded--all elevation--high"},menuItems.map(((menuItem,menuItemIndex)=>react.createElement(Menu.Dr,{key:menuItem.props.id,id:menuItem.props.id,value:menuItem.props.id,className:_ref3=>{let{isSelected,isFocused,isDisabled}=_ref3;return(0,classcat.A)(["nds-context-menu-item","padding--x--s padding--y--xs",{"nds-context-menu-item--highlighted":isSelected||isFocused,"nds-context-menu-item--disabled":isDisabled,"rounded--top":0===menuItemIndex,"rounded--bottom":menuItemIndex===menuItems.length-1}])}},react.createElement(Row.A,{gapSize:"s"},menuItem.props.startIcon&&react.createElement(Row.A.Item,{shrink:!0},react.createElement("span",{className:"narmi-icon-".concat(menuItem.props.startIcon)})),react.createElement(Row.A.Item,null,menuItem.props.label)))))))))}ContextMenu.Item=ContextMenu_ContextMenuItem;const src_ContextMenu=ContextMenu;try{ContextMenu.displayName="ContextMenu",ContextMenu.__docgenInfo={description:"ContextMenu is a wrapper component that provides a custom context menu for the children element.\n\nThe menu can be trigger by right-clicking on the element or by pressing Control + F12.",displayName:"ContextMenu",props:{testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"ContextMenu.Item children",name:"menuItems",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>[]"}},children:{defaultValue:null,description:"React element for enabling custom context menu",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ContextMenu/index.tsx#ContextMenu"]={docgenInfo:ContextMenu.__docgenInfo,name:"ContextMenu",path:"src/ContextMenu/index.tsx#ContextMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/Row/RowItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId},children)},__WEBPACK_DEFAULT_EXPORT__=RowItem;try{RowItem.displayName="RowItem",RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"RowItem",props:{shrink:{defaultValue:{value:"false"},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",name:"shrink",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"li"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/RowItem.tsx#RowItem"]={docgenInfo:RowItem.__docgenInfo,name:"RowItem",path:"src/Row/RowItem.tsx#RowItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/Row/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.tsx"),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{const result={gap:"var(--space-".concat(gapSize,")"),alignItems:"flex-start",justifyContent:"flex-".concat(justifyContent)};return gapSize&&"none"===gapSize&&(result.gap="0"),"top"!==alignItems&&(result.alignItems=alignItems),"space-between"===justifyContent&&(result.justifyContent=justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId},children)};Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A;const __WEBPACK_DEFAULT_EXPORT__=Row;try{Row.displayName="Row",Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width with its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"Row",props:{alignItems:{defaultValue:{value:"top"},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},justifyContent:{defaultValue:{value:"start"},description:"Controls vertical alignment of items within the row",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"space-between"'}]}},gapSize:{defaultValue:{value:"l"},description:"Controls horizontal flex justification",name:"gapSize",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"ul"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children must be of type `Row.Item`",name:"children",required:!0,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/index.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/Row/index.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}},"./src/ContextMenu/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ContextMenu/index.tsx");const Overview=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Overview.args={children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{style:{border:"1px dashed black"}},"Context Menu"),menuItems:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.A.Item,{key:"edit",startIcon:"edit-2",label:"Edit",id:"random-edit-uuid",onSelect:(label,id)=>{alert(`Label: ${label} - ID: ${id}`)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.A.Item,{key:"screenshot",startIcon:"camera",label:"Screenshot",id:"screenshot",onSelect:(label,id)=>{alert(`Label: ${label} - ID: ${id}`)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.A.Item,{key:"deposit",startIcon:"bank",label:"Deposit",id:"deposit",onSelect:(label,id)=>{alert(`Label: ${label} - ID: ${id}`)}})]};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ContextMenu",component:_index__WEBPACK_IMPORTED_MODULE_1__.A},__namedExportsOrder=["Overview"];Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"args => <ContextMenu {...args} />",...Overview.parameters?.docs?.source}}}}}]);