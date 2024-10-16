"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[8257],{"./src/TokenInput/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,UsingWithState:()=>UsingWithState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),FieldToken=__webpack_require__("./src/FieldToken/index.jsx"),TextInput=__webpack_require__("./src/TextInput/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},INPUT_RESET_EVENT={target:{value:""}},TokenInput=_ref=>{let{fieldName,label,fieldValue,onInputChange=noop,onTokensChange=noop,inputValue,tokens=[],delimiter=",",disabled=!1,...otherProps}=_ref;const inputRef=(0,react.useRef)(null),handleTokenDismiss=token=>{const newTokens=new Set(tokens);newTokens.delete(token),onTokensChange([...newTokens]),null!=inputRef&&inputRef.current&&inputRef.current.focus()};return(0,jsx_runtime.jsxs)("fieldset",{className:"nds-tokenInput",onClick:e=>{null!=inputRef&&inputRef.current&&(e.stopPropagation(),inputRef.current.focus())},children:[(0,jsx_runtime.jsx)("legend",{children:label}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:fieldName,name:fieldName,value:fieldValue}),(0,jsx_runtime.jsx)(TextInput.A,{ref:inputRef,label,disabled,onChange:onInputChange,value:inputValue,startContent:(0,jsx_runtime.jsx)("div",{className:"nds-tokenInput-tokens margin--right--s",role:"list","aria-atomic":"true",children:tokens.map((label=>(0,jsx_runtime.jsx)(FieldToken.A,{label,disabled,onDismiss:disabled?noop:handleTokenDismiss},label)))}),onKeyUp:e=>{const{key}=e;if([delimiter,"Enter"].includes(key)){e.stopPropagation();const token=((inputValue,delimiter)=>inputValue.trim().replace(new RegExp("^[".concat(delimiter,"]+|[").concat(delimiter,"]+$"),"g"),""))(inputValue,delimiter);token.length>1&&(onTokensChange([...new Set([...tokens,token])]),onInputChange(INPUT_RESET_EVENT))}},...otherProps})]})};TokenInput.displayName="TokenInput",TokenInput.propTypes={label:prop_types_default().string.isRequired,fieldName:prop_types_default().string.isRequired,fieldValue:prop_types_default().string.isRequired,onInputChange:prop_types_default().func,inputValue:prop_types_default().string,disabled:prop_types_default().bool,onTokensChange:prop_types_default().func,tokens:prop_types_default().arrayOf(prop_types_default().string),isMultiline:prop_types_default().bool,delimiter:prop_types_default().string};const src_TokenInput=TokenInput;var _Overview$parameters,_Overview$parameters2,_UsingWithState$param,_UsingWithState$param2;TokenInput.__docgenInfo={description:'`TokenInput` is a **fully controlled** component used to show a list of "tokens"\na user has entered into the accompanying text input.',methods:[],displayName:"TokenInput",props:{onInputChange:{defaultValue:{value:"() => {}",computed:!1},description:"Input change callback",type:{name:"func"},required:!1},onTokensChange:{defaultValue:{value:"() => {}",computed:!1},description:"Called with the list of selected tokens\nas the argument when user updates tokens list",type:{name:"func"},required:!1},tokens:{defaultValue:{value:"[]",computed:!1},description:"List of selected tokens by name",type:{name:"arrayOf",value:{name:"string"}},required:!1},delimiter:{defaultValue:{value:'","',computed:!1},description:"Delimiter users can enter to tokenize text",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Is the input disabled?",type:{name:"bool"},required:!1},label:{description:"Label for input",type:{name:"string"},required:!0},fieldName:{description:"Name of input that holds the submission value.\nThis should be the name of the field in the submitted form.",type:{name:"string"},required:!0},fieldValue:{description:"Value for the input with the given `name` prop.\nThis should be the value of the field in the submitted form.",type:{name:"string"},required:!0},inputValue:{description:"Value of input element",type:{name:"string"},required:!1},isMultiline:{description:"enables a multiline text input",type:{name:"bool"},required:!1}}};const Template=args=>(0,jsx_runtime.jsx)(src_TokenInput,{...args});Template.displayName="Template";const Overview=Template.bind({});Overview.args={label:"Which cities would you like to add?",tokens:["New York","Chicago"]};const UsingWithState=()=>{const[inputValue,setInputValue]=(0,react.useState)(""),[tokens,setTokens]=(0,react.useState)(["apples"]),value=tokens.join(",");return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"margin--bottom",style:{fontFamily:"consolas, monaco, monospaced"},children:[(0,jsx_runtime.jsx)("label",{htmlFor:"result",className:"fontColor--azul margin--right--l",children:"Hidden input value:"}),(0,jsx_runtime.jsx)("output",{name:"result",htmlFor:"favorite_foods",children:value})]}),(0,jsx_runtime.jsx)(src_TokenInput,{label:"Favorite Foods",fieldName:"favorite_foods",fieldValue:value,inputValue,tokens,onInputChange:e=>{setInputValue(e.target.value)},onTokensChange:tokens=>{setTokens(tokens)}})]})},index_stories={title:"Components/TokenInput",component:src_TokenInput};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <TokenInput {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}},UsingWithState.parameters={...UsingWithState.parameters,docs:{...null===(_UsingWithState$param=UsingWithState.parameters)||void 0===_UsingWithState$param?void 0:_UsingWithState$param.docs,source:{originalSource:'() => {\n  const [inputValue, setInputValue] = useState("");\n  const [tokens, setTokens] = useState(["apples"]);\n  const value = tokens.join(","); // list formatted for submission\n  return <>\n      <div className="margin--bottom" style={{\n      fontFamily: "consolas, monaco, monospaced"\n    }}>\n        <label htmlFor="result" className="fontColor--azul margin--right--l">\n          Hidden input value:\n        </label>\n        <output name="result" htmlFor="favorite_foods">\n          {value}\n        </output>\n      </div>\n      <TokenInput label="Favorite Foods" fieldName="favorite_foods" fieldValue={value} inputValue={inputValue} tokens={tokens} onInputChange={e => {\n      setInputValue(e.target.value);\n    }} onTokensChange={tokens => {\n      setTokens(tokens);\n    }} />\n    </>;\n}',...null===(_UsingWithState$param2=UsingWithState.parameters)||void 0===_UsingWithState$param2||null===(_UsingWithState$param2=_UsingWithState$param2.docs)||void 0===_UsingWithState$param2?void 0:_UsingWithState$param2.source}}};const __namedExportsOrder=["Overview","UsingWithState"]},"./src/FieldToken/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},FieldToken=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldToken(_ref,forwardedRef){let{label,onDismiss=noop,disabled=!1,testId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{ref:forwardedRef,role:"listitem",className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)(["nds-fieldToken","padding--y--none","padding--left--s","padding--right--xs","rounded--all--l","fontSize--xs","fontWeight--semibold",{"nds-fieldToken--disabled":disabled}]),"data-testid":testId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"whiteSpace--truncate",style:{userSelect:"none"},children:label}),!disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"narmi-icon-x margin--left--xs",role:"button","aria-label":"Remove ".concat(label),tabIndex:0,onClick:e=>{e.stopPropagation(),onDismiss(label)},onKeyUp:_ref2=>{let{key}=_ref2;"Enter"!==key&&" "!=key||onDismiss(label)}})]})}));FieldToken.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired,onDismiss:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,testId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const __WEBPACK_DEFAULT_EXPORT__=FieldToken;FieldToken.__docgenInfo={description:'Shared component to render "tokens" inside inputs, active filters,\nor other user selections we want to tokenize.',methods:[],displayName:"FieldToken",props:{onDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback for user dismissal action,\ncalled with token label as the argument",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disabled state for FieldToken",type:{name:"bool"},required:!1},label:{description:"Label text of tag.",type:{name:"string"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children,...rest}=_ref;if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,{...rest,children})};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);