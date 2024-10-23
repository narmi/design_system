"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[4996],{"./src/Select/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangingTypeaheadBehavior:()=>ChangingTypeaheadBehavior,Controlled:()=>Controlled,CustomTypeahead:()=>CustomTypeahead,DefaultSelection:()=>DefaultSelection,DisabledSelection:()=>DisabledSelection,ErrorState:()=>ErrorState,InADialog:()=>InADialog,InAForm:()=>InAForm,OneAction:()=>OneAction,OneItem:()=>OneItem,Overview:()=>Overview,WithAction:()=>WithAction,WithCategories:()=>WithCategories,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Select/index.js"),_SelectItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Select/SelectItem.js"),_SelectAction__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Select/SelectAction.js"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Button/index.js"),_Dialog__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Dialog/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay,{...args});Template.displayName="Template";const children=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"coffee",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"film",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-film padding--right--xs"})," Film"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"truck",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"blob",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"]})],Overview=Template.bind({});Overview.args={id:"overviewStory",label:"Favorite icon",children};const DefaultSelection=Template.bind({});DefaultSelection.args={id:"defaultSelection",label:"Favorite icon",children,defaultValue:"film"};const DisabledSelection=Template.bind({});DisabledSelection.args={disabled:!0,id:"disabledSelection",label:"Account",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"checking0001",children:"Checking - 0001"})],value:"checking0001"};const ErrorState=Template.bind({});ErrorState.args={id:"errorState",label:"Account",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"checking1234",children:"Checking (1234)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"checking4321",children:"Checking (4321)"})],defaultValue:"checking1234",errorText:"Checking (1234) is not eligible"};const WithAction=Template.bind({});WithAction.args={label:"Account",id:"account-field",children:[...children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Action,{onSelect:()=>{alert("side effect triggered - no option selected")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{className:"fontColor--pine fontWeight--bold",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-plus padding--right--xs"})," Add new icon"]})})]},WithAction.parameters={docs:{description:{story:"If you need an option that triggers a side effect, use a `<Select.Action>` child. An action item will not update selection and con not be selected by default."}}};const WithCategories=Template.bind({});WithCategories.args={id:"withCategories",label:"Select an Icon",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Category,{label:"Transportation",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"truck",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"anchor",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-anchor padding--right--xs"})," Anchor"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"car-outline",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-car-outline padding--right--xs"})," Car"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Category,{label:"Art",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"film",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-film padding--right--xs"})," Film"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"aperture",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-aperture padding--right--xs"})," Aperture"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"pen",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-pen-tool padding--right--xs"})," Pen"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"blob",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"]})]})]},WithCategories.parameters={docs:{description:{story:"You may group `Select.Item` elements by category with `Select.Category`. When using categories, you **must** make all direct children of `Select` a `Select.Category`; no orphan items are allowed when using categories."}}};const CustomTypeahead=Template.bind({});CustomTypeahead.args={id:"customTypeaheadString",label:"Select an Industry",children:[{name:"Agriculture",code:"12345"},{name:"Manufacturing",code:"55555"},{name:"Logistics",code:"32144"},{name:"Hospitality",code:"22147"}].map((_ref=>{let{name,code}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:code,searchValue:name,children:name})}))},CustomTypeahead.parameters={docs:{description:{story:"By default, typeahead highlights items based on `value`. You may pass a `searchValue` to customize the string users search against when using typeahead. In this example, the value is a numeric code, but we'd like the user to filter on industry name"}}};const ChangingTypeaheadBehavior=Template.bind({});ChangingTypeaheadBehavior.args={id:"customTypeaheadBehavior",label:"Select an Industry",getTypeaheadString:(userInput,selectItem)=>{console.info(`User typed: "${userInput}"`);let searchString=selectItem.props.searchValue||selectItem.props.value||"";return/\d/.test(userInput)&&(searchString=selectItem.props.value,console.info("Searching by NAICS code instead of name")),searchString},children:[{name:"Agriculture",code:"12345"},{name:"Manufacturing",code:"55555"},{name:"Logistics",code:"32144"},{name:"Hospitality",code:"22147"}].map((_ref2=>{let{name,code}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:code,searchValue:name,children:[name," - ",code]})}))},ChangingTypeaheadBehavior.parameters={docs:{description:{story:"You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha"}}};const InAForm=()=>{const[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"margin--bottom",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input",{type:"text",name:"account",value:inputValue,readOnly:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p",{className:"fontSize--xs",children:["(",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("i",{children:["Typically this would be a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"hidden"})," input."]}),")"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay,{id:"product-field",label:"Account",onChange:setInputValue,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"checking1234",children:"Checking (1234)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"savings4321",children:"Savings (4321)"})]})]})};InAForm.parameters={docs:{description:{story:"A hidden input works natively in a `form`, or as a bridge to a form management library of your choice."}}};const Controlled=()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Ay,{id:"controlled-product-field",label:"Account",value,onChange:v=>setValue(v),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"checking1234",children:"Checking (1234)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"savings4321",children:"Savings (4321)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"margin--top",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.A,{label:"Clear selection",kind:"negative",onClick:()=>{setValue(null)}})})]})};Controlled.parameters={docs:{description:{story:"You can programmatically select selection by updating the `value` prop. When `value` is passed, the component becomes **fully controlled** and you must use the `onChange` prop to update the `value`. Clear the selection by passing an empty string as the `value`."}}};const InADialog=args=>{const[isDialogOpen,setIsDialogOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.A,{label:"Open Dialog",onClick:()=>{setIsDialogOpen(!0)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Dialog__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Dialog with a Select",isOpen:isDialogOpen,onUserDismiss:()=>{setIsDialogOpen(!1)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"padding--y--s",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:["The floating menu list will render portaled near the bottom of the"," ","<body>"," HTML element."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"padding--y--l",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay,{...args})})]})})]})};InADialog.args={label:"Favorite icon",children};const OneItem=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay,{label:"Account",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Item,{value:"checking1234",children:"Checking (1234)"})});OneItem.displayName="OneItem";const OneAction=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay,{label:"Account",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay.Action,{onSelect:()=>{},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{className:"fontColor--pine fontWeight--bold",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"narmi-icon-plus padding--right--xs"})," Add new account"]})})});OneAction.displayName="OneAction";const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Select",component:___WEBPACK_IMPORTED_MODULE_1__.Ay,subcomponents:{SelectItem:_SelectItem__WEBPACK_IMPORTED_MODULE_2__.A,SelectAction:_SelectAction__WEBPACK_IMPORTED_MODULE_3__.A},argTypes:{children:{control:!1}}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...Overview.parameters?.docs?.source}}},DefaultSelection.parameters={...DefaultSelection.parameters,docs:{...DefaultSelection.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...DefaultSelection.parameters?.docs?.source}}},DisabledSelection.parameters={...DisabledSelection.parameters,docs:{...DisabledSelection.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...DisabledSelection.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...ErrorState.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...WithAction.parameters?.docs?.source}}},WithCategories.parameters={...WithCategories.parameters,docs:{...WithCategories.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...WithCategories.parameters?.docs?.source}}},CustomTypeahead.parameters={...CustomTypeahead.parameters,docs:{...CustomTypeahead.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...CustomTypeahead.parameters?.docs?.source}}},ChangingTypeaheadBehavior.parameters={...ChangingTypeaheadBehavior.parameters,docs:{...ChangingTypeaheadBehavior.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...ChangingTypeaheadBehavior.parameters?.docs?.source}}},InAForm.parameters={...InAForm.parameters,docs:{...InAForm.parameters?.docs,source:{originalSource:'() => {\n  const [inputValue, setInputValue] = useState("");\n  return <>\n      <div className="margin--bottom">\n        <input type="text" name="account" value={inputValue} readOnly />\n        <p className="fontSize--xs">\n          (\n          <i>\n            Typically this would be a <code>hidden</code> input.\n          </i>\n          )\n        </p>\n      </div>\n      <Select id="product-field" label="Account" onChange={setInputValue}>\n        <Select.Item value="checking1234">Checking (1234)</Select.Item>\n        <Select.Item value="savings4321">Savings (4321)</Select.Item>\n      </Select>\n    </>;\n}',...InAForm.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState(null);\n  return <>\n      <Select id="controlled-product-field" label="Account" value={value} onChange={v => setValue(v)}>\n        <Select.Item value="checking1234">Checking (1234)</Select.Item>\n        <Select.Item value="savings4321">Savings (4321)</Select.Item>\n      </Select>\n      <div className="margin--top">\n        <Button label="Clear selection" kind="negative" onClick={() => {\n        setValue(null);\n      }} />\n      </div>\n    </>;\n}',...Controlled.parameters?.docs?.source}}},InADialog.parameters={...InADialog.parameters,docs:{...InADialog.parameters?.docs,source:{originalSource:'args => {\n  const [isDialogOpen, setIsDialogOpen] = useState(false);\n  return <>\n      <Button label="Open Dialog" onClick={() => {\n      setIsDialogOpen(true);\n    }} />\n      <Dialog title="Dialog with a Select" isOpen={isDialogOpen} onUserDismiss={() => {\n      setIsDialogOpen(false);\n    }}>\n        <div className="padding--y--s">\n          <div>\n            The floating menu list will render portaled near the bottom of the{" "}\n            {"<body>"} HTML element.\n          </div>\n          <div className="padding--y--l">\n            <Select {...args} />\n          </div>\n        </div>\n      </Dialog>\n    </>;\n}',...InADialog.parameters?.docs?.source}}},OneItem.parameters={...OneItem.parameters,docs:{...OneItem.parameters?.docs,source:{originalSource:'() => {\n  return <Select label="Account">\n      <Select.Item value="checking1234">Checking (1234)</Select.Item>\n    </Select>;\n}',...OneItem.parameters?.docs?.source}}},OneAction.parameters={...OneAction.parameters,docs:{...OneAction.parameters?.docs,source:{originalSource:'() => {\n  return <Select label="Account">\n      <Select.Action onSelect={() => {}}>\n        <span className="fontColor--pine fontWeight--bold">\n          <span className="narmi-icon-plus padding--right--xs" /> Add new\n          account\n        </span>\n      </Select.Action>\n    </Select>;\n}',...OneAction.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","DefaultSelection","DisabledSelection","ErrorState","WithAction","WithCategories","CustomTypeahead","ChangingTypeaheadBehavior","InAForm","Controlled","InADialog","OneItem","OneAction"]},"./src/Dialog/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),raf_schd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/raf-schd/dist/raf-schd.esm.js"),classcat__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/classcat/index.js"),_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useLockBodyScroll/index.jsx"),react_transition_group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},Dialog=_ref=>{let{isOpen=!1,onUserDismiss=noop,title,headerStyle="bordered",children,notification,footer,width="500px",testId}=_ref;const[isContentOverflowing,setIsContentOverflowing]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),contentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),shimRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isBanner="banner"===headerStyle;(0,_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_2__.A)(isOpen);const checkContentOverflow=()=>{(0,raf_schd__WEBPACK_IMPORTED_MODULE_4__.A)(setIsContentOverflowing((contentRef=>{let result=!1;return contentRef.current&&(result=contentRef.current.scrollHeight>contentRef.current.clientHeight+1),result})(contentRef)))},handleKeyDown=_ref2=>{let{key}=_ref2;"Escape"===key&&onUserDismiss()};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(isOpen&&checkContentOverflow(),window.addEventListener("keydown",handleKeyDown),window.addEventListener("resize",checkContentOverflow),()=>{window.removeEventListener("keydown",handleKeyDown),window.removeEventListener("resize",checkContentOverflow)})),[handleKeyDown,checkContentOverflow,isOpen]);const closeButtonJSX=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_5__.A)(["resetButton","nds-dialog-closeButton",{"nds-dialog-closeButton--banner":isBanner}]),"aria-label":"close",onClick:onUserDismiss,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"narmi-icon-x"})}),dialogJSX=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_6__.A,{timeout:1,classNames:"nds-dialog-transition",appear:!0,in:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"nds-shim--dark",ref:shimRef,onClick:_ref3=>{let{target}=_ref3;shimRef.current&&target===shimRef.current&&onUserDismiss()},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_focus_lock__WEBPACK_IMPORTED_MODULE_7__.Ay,{autoFocus:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{role:"dialog","aria-labelledby":"aria-dialog-label","aria-modal":"true",className:"nds-dialog",style:{"--dialog-preferred-width":width},"data-testid":testId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:`nds-dialog-header nds-dialog-header--${headerStyle}`,children:isBanner?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"margin--y--s",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"padding--y--xxs",id:"aria-dialog-label",style:{textAlign:"center"},children:title}),closeButtonJSX]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4",{id:"aria-dialog-label",children:title}),closeButtonJSX]})}),notification&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"nds-dialog-notification padding--y padding--x--xl",children:notification}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{ref:contentRef,className:(0,classcat__WEBPACK_IMPORTED_MODULE_5__.A)(["nds-dialog-content nds-typography padding--top--xs",{"padding--bottom--xl":!footer}]),children}),footer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_5__.A)(["nds-dialog-footer",{"nds-dialog-footer--overflowing":isContentOverflowing}]),children:footer})]})})})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:isOpen&&document&&react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(dialogJSX,document.body)})};Dialog.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_8___default().node.isRequired,title:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired,notification:prop_types__WEBPACK_IMPORTED_MODULE_8___default().node,footer:prop_types__WEBPACK_IMPORTED_MODULE_8___default().node,headerStyle:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(["bordered","plain","banner"]),isOpen:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_8___default().func,width:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,testId:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string};const __WEBPACK_DEFAULT_EXPORT__=Dialog;Dialog.__docgenInfo={description:"Renders a centered modal dialog with an overlay\n\nThis component uses a `ReactDOM` portal to render it as a direct\nchild of `document.body`.",methods:[],displayName:"Dialog",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"Controls open/close state of the modal. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to dismiss the modal\n(click outside, Escape key, click close button)",type:{name:"func"},required:!1},headerStyle:{defaultValue:{value:'"bordered"',computed:!1},description:"Visual style for Dialog header",type:{name:"enum",value:[{value:'"bordered"',computed:!1},{value:'"plain"',computed:!1},{value:'"banner"',computed:!1}]},required:!1},width:{defaultValue:{value:'"500px"',computed:!1},description:'Sets a custom modal width.\nUse the full CSS value with the unit (e.g. "400px")',type:{name:"string"},required:!1},children:{description:"Scrollable contents of the Dialog",type:{name:"node"},required:!0},title:{description:"Heading in the top of the Dialog",type:{name:"string"},required:!0},notification:{description:"Optional notification content to render pinned under the header",type:{name:"node"},required:!1},footer:{description:"Contents of Dialog footer, typically reserved for action buttons",type:{name:"node"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/Error/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorLine=_ref=>{let{errorLine,marginTop="xxs"}=_ref;return errorLine?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:`nds-input-error margin--top--${marginTop}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"fontSize--s margin--right--xxs narmi-icon-x-circle"}),errorLine]}):null};ErrorLine.displayName="ErrorLine",ErrorLine.propTypes={errorLine:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,marginTop:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const Error=_ref2=>{let{error,marginTop="xxs"}=_ref2;return error?Array.isArray(error)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"nds-input-errorlist","aria-live":"polite",children:error.map(((errorLine,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorLine,{errorLine,marginTop:index?marginTop:"xxs"},errorLine)))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorLine,{errorLine:error,marginTop}):null};Error.displayName="Error",Error.propTypes={error:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),marginTop:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])};const __WEBPACK_DEFAULT_EXPORT__=Error;Error.__docgenInfo={description:"",methods:[],displayName:"Error",props:{marginTop:{defaultValue:{value:'"xxs"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"xxl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},error:{description:"",type:{name:"enum",value:[{value:"PropTypes.string",computed:!0},{value:"PropTypes.arrayOf(PropTypes.string)",computed:!0}]},required:!1}}}},"./src/hooks/useLockBodyScroll/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=isActive=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(isActive&&document.body.classList.add("overflow--hidden"),()=>{document.body.classList.remove("overflow--hidden")})),[isActive])}}}]);