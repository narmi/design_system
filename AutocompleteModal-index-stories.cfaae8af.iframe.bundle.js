"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[2497],{"./src/AutocompleteModal/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,TriggerRenderProp:()=>TriggerRenderProp,WithAction:()=>WithAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AutocompleteModalItem=_ref=>{let{children,value}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children||value})};AutocompleteModalItem.displayName="Combobox.Item",AutocompleteModalItem.propTypes={value:prop_types_default().string.isRequired,searchValue:prop_types_default().string,children:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().arrayOf(prop_types_default().node)])};const Item=AutocompleteModalItem;AutocompleteModalItem.__docgenInfo={description:"",methods:[],displayName:"Combobox.Item",props:{value:{description:'String representation of the option.\n\nThis value is also used as a typeahead; if a user types "n" while\nthe Select is open, highlight will move to the first item with a\nvalue starting with `n`.',type:{name:"string"},required:!0},searchValue:{description:"Custom typeahead string. By default, typeahead uses `value`.\nUse this prop to pass in a custom string you'd like the user to search\nagainst when using typeahead.",type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};var Popover=__webpack_require__("./src/Popover/index.js"),classcat=__webpack_require__("./node_modules/classcat/index.js"),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),TextInput=__webpack_require__("./src/TextInput/index.js"),Row=__webpack_require__("./src/Row/index.js");const itemToString=item=>item.props.value||"",AutoComplete=_ref=>{let{label,items:allItems,selectedItem:selectedItemProp,onChange=()=>{},onInputChange=()=>{},footerContent}=_ref;const[items,setItems]=(0,react.useState)(allItems),{selectedItem,highlightedIndex,getComboboxProps,getMenuProps,getInputProps,getItemProps}=(0,downshift_esm.Bp)({items,initialSelectedItem:selectedItemProp,initialInputValue:"",onInputValueChange(_ref2){let{inputValue}=_ref2;setItems((null==inputValue?void 0:inputValue.length)>0?((items,inputValue)=>items.filter((item=>itemToString(item).toLowerCase().startsWith(inputValue.toLowerCase()))))(allItems,inputValue):allItems),onInputChange(inputValue)},onSelectedItemChange(_ref3){let{selectedItem}=_ref3;selectedItem&&onChange(selectedItem)},itemToString:item=>itemToString(item)});return(0,jsx_runtime.jsxs)("div",{className:(0,classcat.A)(["nds-autocompleteModal-autocomplete","rounded--all"]),...getComboboxProps(),children:[(0,jsx_runtime.jsx)("div",{className:"nds-autocompleteModal-input",children:(0,jsx_runtime.jsx)(TextInput.A,{label,...getInputProps()})}),(0,jsx_runtime.jsxs)("ul",{className:"nds-autocompleteModal-menu list--reset",...getMenuProps(),children:[0===items.length&&!selectedItem&&(0,jsx_runtime.jsx)("li",{className:"nds-autocompleteModal-item padding--x--s padding--y--xs",children:"No results found"}),items.map(((item,index)=>(0,jsx_runtime.jsx)("li",{className:(0,classcat.A)(["nds-autocompleteModal-item","padding--x--s padding--y--xs",{"nds-autocompleteModal-item--highlighted":highlightedIndex===index}]),...getItemProps({item,index}),children:(0,jsx_runtime.jsxs)(Row.A,{children:[(0,jsx_runtime.jsx)(Row.A.Item,{children:item}),selectedItem&&selectedItem.props.value===item.props.value&&(0,jsx_runtime.jsx)(Row.A.Item,{as:"span",shrink:!0,children:(0,jsx_runtime.jsx)("span",{className:"narmi-icon-check fontSize--l fontWeight--bold"})})]})},"".concat(null==item?void 0:item.props.value,"-").concat(index))))]}),footerContent&&(0,jsx_runtime.jsx)("div",{className:"nds-autocompleteModal-footer padding--all--s border--top",children:footerContent})]})};AutoComplete.displayName="AutoComplete";const AutocompleteModal_AutoComplete=AutoComplete;AutoComplete.__docgenInfo={description:"A simplified Combobox component that renders in a Popup.\nUseful for inline editing of things like table items where we want to\nprovide an autocomplete of possible values.\n\nAllows single selection only. The selected value is controlled, allowing the selection to render in the trigger.\ntrigger area.",methods:[],displayName:"AutoComplete",props:{label:{required:!0,tsType:{name:"string"},description:"Input label"},items:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement"}],raw:"AutoCompleteItem[]"},description:"ComboboxModal.Item children"},selectedItem:{required:!0,tsType:{name:"union",raw:"AutoCompleteItem | null",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"null"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: AutoCompleteItem) => void",signature:{arguments:[{type:{name:"ReactReactElement",raw:"React.ReactElement"},name:"item"}],return:{name:"void"}}},description:"Selection change event callback",defaultValue:{value:"() => {}",computed:!1}},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: string) => void",signature:{arguments:[{type:{name:"string"},name:"e"}],return:{name:"void"}}},description:"Input change event callback",defaultValue:{value:"() => {}",computed:!1}},footerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional pinned footer conent; use for action buttons"}}};const AutocompleteModal=_ref=>{let{inputLabel,children,trigger,onChange=()=>{},onInputChange=()=>{},footerContent}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(!1),[selectedItem,setSelectedItem]=(0,react.useState)(null),items=react.Children.toArray(children);return(0,jsx_runtime.jsx)(Popover.A,{isOpen,onUserDismiss:()=>{setIsOpen(!1)},onUserEnable:()=>{setIsOpen((o=>!o))},alignment:"center",side:"top",autoFocus:!0,hasShadow:!1,content:(0,jsx_runtime.jsx)("div",{className:"nds-autocompleteModal-positionedEl",children:(0,jsx_runtime.jsx)(AutocompleteModal_AutoComplete,{items,label:inputLabel,onChange:item=>{setIsOpen(!1),setSelectedItem(item),onChange(item.props.value)},onInputChange,footerContent,selectedItem})}),children:(0,jsx_runtime.jsx)("span",{style:{cursor:"pointer"},children:"function"==typeof trigger?trigger(isOpen):trigger})})};AutocompleteModal.displayName="AutocompleteModal",AutocompleteModal.Item=Item;const src_AutocompleteModal=AutocompleteModal;AutocompleteModal.__docgenInfo={description:"A simplified Combobox component that renders in a Popup.\nUseful for inline editing of things like table items where we want to\nprovide an autocomplete of possible values.\n\nAllows single selection only. The selected value will be rendered in the\ntrigger area.",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children, value }",optional:!1,type:null}],returns:null}],displayName:"AutocompleteModal",props:{inputLabel:{required:!0,tsType:{name:"string"},description:"Input label"},trigger:{required:!0,tsType:{name:"union",raw:"React.ReactNode | ((isActive: boolean) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:"Trigger element"},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:"AutocompleteModal.Item children"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Selection change event callback",defaultValue:{value:"() => {}",computed:!1}},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Input change event callback - called with value of selected item",defaultValue:{value:"() => {}",computed:!1}},footerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional pinned footer conent; use for action buttons"}}};var _Overview$parameters,_Overview$parameters2,_WithAction$parameter,_WithAction$parameter2,_TriggerRenderProp$pa,_TriggerRenderProp$pa2,Button=__webpack_require__("./src/Button/index.js");const Overview=()=>{const[selectedValue,setSelectedValue]=(0,react.useState)("Unassigned"),trigger=(0,jsx_runtime.jsx)("span",{children:selectedValue});return(0,jsx_runtime.jsx)("div",{style:{margin:"8rem"},children:(0,jsx_runtime.jsxs)(src_AutocompleteModal,{inputLabel:"Assignee",trigger,onChange:val=>setSelectedValue(val),children:[(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Unassigned"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Chris"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Nikhil"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"James"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Phil"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Batman"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Reshav"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Ethan"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Xihao"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Alana"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Yaro"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Jeff"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Johnathan"})]})})};Overview.displayName="Overview";const WithAction=()=>{const[selectedValue,setSelectedValue]=(0,react.useState)("Unassigned"),trigger=(0,jsx_runtime.jsx)("span",{children:selectedValue});return(0,jsx_runtime.jsx)("div",{style:{margin:"8rem"},children:(0,jsx_runtime.jsxs)(src_AutocompleteModal,{inputLabel:"Assignee",trigger,onChange:val=>setSelectedValue(val),footerContent:(0,jsx_runtime.jsx)(Button.A,{kind:"plain",label:"Add a new employee",startIcon:"plus"}),children:[(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Unassigned"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Chris"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Nikhil"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"James"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Phil"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Batman"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Reshav"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Ethan"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Xihao"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Alana"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Yaro"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Jeff"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Johnathan"})]})})};WithAction.displayName="WithAction";const TriggerRenderProp=()=>{const[selectedValue,setSelectedValue]=(0,react.useState)("Unassigned");return(0,jsx_runtime.jsx)("div",{style:{margin:"8rem"},children:(0,jsx_runtime.jsxs)(src_AutocompleteModal,{inputLabel:"Assignee",trigger:isActive=>(0,jsx_runtime.jsx)("div",{className:"padding--all--xxs rounded--all",style:{background:isActive?"yellow":"transparent"},children:selectedValue}),onChange:val=>setSelectedValue(val),footerContent:(0,jsx_runtime.jsx)(Button.A,{kind:"plain",label:"Add a new employee",startIcon:"plus"}),children:[(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Unassigned"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Chris"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Nikhil"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"James"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Phil"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Batman"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Reshav"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Ethan"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Xihao"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Alana"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Yaro"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Jeff"}),(0,jsx_runtime.jsx)(src_AutocompleteModal.Item,{value:"Johnathan"})]})})};TriggerRenderProp.displayName="TriggerRenderProp",TriggerRenderProp.parameters={docs:{description:{story:"The `trigger` prop takes either a ReactNode, or a render function. The render function makes the active state of the popover available to the trigger for conditional styling."}}};const index_stories={title:"Components/AutocompleteModal",component:src_AutocompleteModal};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:'() => {\n  const [selectedValue, setSelectedValue] = useState("Unassigned");\n  const trigger = <span>{selectedValue}</span>;\n  return <div style={{\n    margin: "8rem"\n  }}>\n      <AutocompleteModal inputLabel="Assignee" trigger={trigger} onChange={val => setSelectedValue(val)}>\n        <AutocompleteModal.Item value="Unassigned" />\n        <AutocompleteModal.Item value="Chris" />\n        <AutocompleteModal.Item value="Nikhil" />\n        <AutocompleteModal.Item value="James" />\n        <AutocompleteModal.Item value="Phil" />\n        <AutocompleteModal.Item value="Batman" />\n        <AutocompleteModal.Item value="Reshav" />\n        <AutocompleteModal.Item value="Ethan" />\n        <AutocompleteModal.Item value="Xihao" />\n        <AutocompleteModal.Item value="Alana" />\n        <AutocompleteModal.Item value="Yaro" />\n        <AutocompleteModal.Item value="Jeff" />\n        <AutocompleteModal.Item value="Johnathan" />\n      </AutocompleteModal>\n    </div>;\n}',...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}},WithAction.parameters={...WithAction.parameters,docs:{...null===(_WithAction$parameter=WithAction.parameters)||void 0===_WithAction$parameter?void 0:_WithAction$parameter.docs,source:{originalSource:'() => {\n  const [selectedValue, setSelectedValue] = useState("Unassigned");\n  const trigger = <span>{selectedValue}</span>;\n  return <div style={{\n    margin: "8rem"\n  }}>\n      <AutocompleteModal inputLabel="Assignee" trigger={trigger} onChange={val => setSelectedValue(val)} footerContent={<Button kind="plain" label="Add a new employee" startIcon="plus" />}>\n        <AutocompleteModal.Item value="Unassigned" />\n        <AutocompleteModal.Item value="Chris" />\n        <AutocompleteModal.Item value="Nikhil" />\n        <AutocompleteModal.Item value="James" />\n        <AutocompleteModal.Item value="Phil" />\n        <AutocompleteModal.Item value="Batman" />\n        <AutocompleteModal.Item value="Reshav" />\n        <AutocompleteModal.Item value="Ethan" />\n        <AutocompleteModal.Item value="Xihao" />\n        <AutocompleteModal.Item value="Alana" />\n        <AutocompleteModal.Item value="Yaro" />\n        <AutocompleteModal.Item value="Jeff" />\n        <AutocompleteModal.Item value="Johnathan" />\n      </AutocompleteModal>\n    </div>;\n}',...null===(_WithAction$parameter2=WithAction.parameters)||void 0===_WithAction$parameter2||null===(_WithAction$parameter2=_WithAction$parameter2.docs)||void 0===_WithAction$parameter2?void 0:_WithAction$parameter2.source}}},TriggerRenderProp.parameters={...TriggerRenderProp.parameters,docs:{...null===(_TriggerRenderProp$pa=TriggerRenderProp.parameters)||void 0===_TriggerRenderProp$pa?void 0:_TriggerRenderProp$pa.docs,source:{originalSource:'() => {\n  const [selectedValue, setSelectedValue] = useState("Unassigned");\n  const trigger = isActive => <div className="padding--all--xxs rounded--all" style={{\n    background: isActive ? "yellow" : "transparent"\n  }}>\n      {selectedValue}\n    </div>;\n  return <div style={{\n    margin: "8rem"\n  }}>\n      <AutocompleteModal inputLabel="Assignee" trigger={trigger} onChange={val => setSelectedValue(val)} footerContent={<Button kind="plain" label="Add a new employee" startIcon="plus" />}>\n        <AutocompleteModal.Item value="Unassigned" />\n        <AutocompleteModal.Item value="Chris" />\n        <AutocompleteModal.Item value="Nikhil" />\n        <AutocompleteModal.Item value="James" />\n        <AutocompleteModal.Item value="Phil" />\n        <AutocompleteModal.Item value="Batman" />\n        <AutocompleteModal.Item value="Reshav" />\n        <AutocompleteModal.Item value="Ethan" />\n        <AutocompleteModal.Item value="Xihao" />\n        <AutocompleteModal.Item value="Alana" />\n        <AutocompleteModal.Item value="Yaro" />\n        <AutocompleteModal.Item value="Jeff" />\n        <AutocompleteModal.Item value="Johnathan" />\n      </AutocompleteModal>\n    </div>;\n}',...null===(_TriggerRenderProp$pa2=TriggerRenderProp.parameters)||void 0===_TriggerRenderProp$pa2||null===(_TriggerRenderProp$pa2=_TriggerRenderProp$pa2.docs)||void 0===_TriggerRenderProp$pa2?void 0:_TriggerRenderProp$pa2.source}}};const __namedExportsOrder=["Overview","WithAction","TriggerRenderProp"]},"./src/Popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),classcat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classcat/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),react_laag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},Popover=_ref=>{let{side="bottom",alignment="center",content,children,wrapperDisplay="inline-flex",offset=2,disableAutoPlacement=!1,matchTriggerWidth=!1,testId,closeOnContentClick=!1,isOpen,autoFocus=!1,hasShadow=!0,onUserDismiss=noop,onUserEnable=noop}=_ref;const isControlled=!0===isOpen||!1===isOpen,[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),shouldRenderPopover=isControlled?isOpen:open,popoverContent=closeOnContentClick?react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(content,{onClick:()=>{content.onClick&&content.onClick(),setOpen(!1),onUserDismiss()}}):content,closePopover=()=>{setOpen(!1),onUserDismiss()},handleKeyUp=_ref3=>{let{key}=_ref3;"Escape"===key&&shouldRenderPopover&&(setOpen(!1),onUserDismiss())},{renderLayer,triggerProps,triggerBounds,layerProps}=(0,react_laag__WEBPACK_IMPORTED_MODULE_3__.Z4)({isOpen:shouldRenderPopover,onOutsideClick:closePopover,onDisappear:closePopover,auto:!disableAutoPlacement,placement:"".concat(side,"-").concat(alignment),preferX:"left",preferY:"bottom",container:"undefined"!=typeof document?document.body:void 0,triggerOffset:offset});(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(window.addEventListener("keydown",handleKeyUp),()=>{window.removeEventListener("keydown",handleKeyUp)})),[handleKeyUp]);let layerStyle=layerProps.style;return triggerBounds&&matchTriggerWidth&&(layerStyle={width:triggerBounds.width,...layerProps.style}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{...triggerProps,style:{display:wrapperDisplay},onClick:event=>{event.stopPropagation(),isControlled?isOpen?onUserDismiss():onUserEnable():setOpen((open=>!open))},onKeyDown:_ref2=>{let{key}=_ref2;"Enter"===key&&(setOpen(!0),onUserEnable())},role:"button",tabIndex:"0","data-testid":"nds-popover-trigger","aria-haspopup":"true","aria-expanded":shouldRenderPopover.toString(),children}),renderLayer((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:shouldRenderPopover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{...layerProps,className:(0,classcat__WEBPACK_IMPORTED_MODULE_4__.A)(["nds-typography nds-popover","rounded--all bgColor--white",{"nds-popover--elevated":hasShadow}]),style:layerStyle,"data-testid":testId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{tabIndex:-1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_focus_lock__WEBPACK_IMPORTED_MODULE_5__.Ay,{autoFocus,children:popoverContent})})})}))]})};Popover.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired,content:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired,side:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["top","right","bottom","left"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["start","center","end"]),wrapperDisplay:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["inline-flex","inline-block","inline","block","flex"]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,matchTriggerWidth:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,disableAutoPlacement:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,closeOnContentClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,onUserEnable:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,autoFocus:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,hasShadow:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool};const __WEBPACK_DEFAULT_EXPORT__=Popover;Popover.__docgenInfo={description:'Generic Popover component. Renders a floating element that can contain any content,\npositioned relatively to its triggering element.\n\nThis Popover only appears on "click" (focus + activate or mouse click) interactions.\nThe Escape key and clicking outside of the Popover will dismiss it.\nFor a hover-based informative popover, use `Tooltip`.\n\nThe popover will position itself based on the `side` prop, but will\nautomatically reposition to avoid collisions with viewport edges.',methods:[],displayName:"Popover",props:{side:{defaultValue:{value:'"bottom"',computed:!1},description:"Sets preferred side of the trigger the tooltip should appear",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"right"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},description:"Sets preferred alignment of the tooltip relative to the trigger",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1}]},required:!1},wrapperDisplay:{defaultValue:{value:'"inline-flex"',computed:!1},description:"CSS `display` value for the element that wraps the Tooltip children",type:{name:"enum",value:[{value:'"inline-flex"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"flex"',computed:!1}]},required:!1},offset:{defaultValue:{value:"2",computed:!1},description:"Distance of Popover from trigger element in number of pixels",type:{name:"number"},required:!1},disableAutoPlacement:{defaultValue:{value:"false",computed:!1},description:"By default, the Popover will automatically reposition itself to avoid viewport edges.\nSetting this prop to `true` will disable this behavior so that the Popover will\nalways be placed on the given `side` prop.",type:{name:"bool"},required:!1},matchTriggerWidth:{defaultValue:{value:"false",computed:!1},description:"When `true`, the Popover container will match the width of its triggering element",type:{name:"bool"},required:!1},closeOnContentClick:{defaultValue:{value:"false",computed:!1},description:"Close the popover if the User clicks on the content",type:{name:"bool"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"When set to `true`, the first focusable element will automatically receive focus\nwhenever the popover opens",type:{name:"bool"},required:!1},hasShadow:{defaultValue:{value:"true",computed:!1},description:"When set to `false` the popover positioned element will not have a box shadow.\nUseful for adding a custom box shadow.",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to __dismiss__ the popover\n(click outside, Escape key)",type:{name:"func"},required:!1},onUserEnable:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to __enable__ the popover\n(click or key interaction on the trigger button rendered in Popover)",type:{name:"func"},required:!1},children:{description:"The root node of JSX passed into Tooltip as children will act as the tooltip trigger",type:{name:"node"},required:!0},content:{description:"Content of popover",type:{name:"node"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},isOpen:{description:"If isOpen is set the component becomes a controlled component. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1}}}}}]);