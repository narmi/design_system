"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[3029],{"./src/TextInput/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsColorInput:()=>AsColorInput,CustomStartAndEndContent:()=>CustomStartAndEndContent,DateTime:()=>DateTime,Example:()=>Example,MultiLine:()=>MultiLine,Overview:()=>Overview,PasswordShowHide:()=>PasswordShowHide,Search:()=>Search,Time:()=>Time,WithClearInputIcon:()=>WithClearInputIcon,WithClearInputIconAndOnChange:()=>WithClearInputIconAndOnChange,WithIcon:()=>WithIcon,WithMaxLength:()=>WithMaxLength,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var _Overview$parameters,_Overview$parameters2,_Example$parameters,_Example$parameters2,_MultiLine$parameters,_MultiLine$parameters2,_WithIcon$parameters,_WithIcon$parameters2,_CustomStartAndEndCon,_CustomStartAndEndCon2,_AsColorInput$paramet,_AsColorInput$paramet2,_Search$parameters,_Search$parameters2,_WithClearInputIcon$p,_WithClearInputIcon$p2,_WithClearInputIconAn,_WithClearInputIconAn2,_DateTime$parameters,_DateTime$parameters2,_Time$parameters,_Time$parameters2,_PasswordShowHide$par,_PasswordShowHide$par2,_WithMaxLength$parame,_WithMaxLength$parame2,react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/TextInput/index.js"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{...args});Template.displayName="Template";const Overview=Template.bind({});Overview.args={label:"TextInput Label"};const Example=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"nds-typography",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"storybook-4col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{label:"Label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{label:"Label",defaultValue:"Text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{label:"Label",defaultValue:"Text",error:"Error message"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{label:"Label",defaultValue:"Disabled",disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{label:"Phone number",defaultValue:"(555) 867-5309",type:"tel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{type:"date",label:"Test Quotes",formatter:text=>text.replace("“",'"').replace("”",'"')}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{label:"Test Quotes",formatter:text=>text.replace("“",'"').replace("”",'"')}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("form",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{label:"Secret phrase",type:"password",autoComplete:"on"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{type:"text",label:"Text",maxLength:10}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{type:"text",label:"Text",maxLength:10,error:"Error message"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{type:"text",label:"Text",defaultValue:"Text input that is too long",maxLength:10})]})});Example.displayName="Example";const MultiLine=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{multiline:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{multiline:!0,label:"Multiline with label"})]}),WithIcon=Template.bind({});WithIcon.args={label:"Search",startIcon:"search"};const CustomStartAndEndContent=Template.bind({});CustomStartAndEndContent.args={label:"Search",endContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{className:"button--reset",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i",{className:"narmi-icon-info"})})};const AsColorInput=()=>{const[color,setColor]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("#915F6D");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"nds-typography",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1",{style:{marginBottom:"1em"},children:"Edit Primary Accessible Color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{label:"Hex Code",defaultValue:"915F6D",formatter:text=>text.replace("#",""),onBlur:e=>{setColor("#"+e.target.value)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"narmi-icon-solid-circle",style:{marginLeft:"20px",color,fontSize:"50px"}})]})]})};AsColorInput.displayName="AsColorInput";const Search=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{search:!0});Search.displayName="Search";const WithClearInputIcon=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{showClearButton:!0});WithClearInputIcon.displayName="WithClearInputIcon";const WithClearInputIconAndOnChange=()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{onChange:e=>setText(e.target.value),showClearButton:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:["Your text is: ",text]})]})},DateTime=()=>{const[dateTime,setDateTime]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{type:"datetime-local",label:"Start datetime",onChange:e=>setDateTime(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"margin--top--xxs",children:["Value: ",dateTime]})]})},Time=()=>{const[time,setTime]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{type:"time",label:"Start time",onChange:e=>setTime(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"margin--top--xxs",children:["Value: ",time]})]})},PasswordShowHide=()=>{const[showInputVal,setShowInputVal]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{type:showInputVal?"text":"password",label:"Password",endContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.A,{kind:"plain",label:showInputVal?"Hide":"Show",onClick:()=>{setShowInputVal((curr=>!curr))}})})})},WithMaxLength=()=>{const[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Default value");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.A,{label:"Limited to 20 chars",maxLength:20,value:inputValue,onChange:e=>{setInputValue(e.target.value)}})})},__WEBPACK_DEFAULT_EXPORT__={title:"Components/TextInput",component:___WEBPACK_IMPORTED_MODULE_3__.A,argTypes:{startIcon:{options:["",...___WEBPACK_IMPORTED_MODULE_3__.y]},endIcon:{options:["",...___WEBPACK_IMPORTED_MODULE_3__.y]}}};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <TextInput {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:'() => {\n  return <div className={"nds-typography"}>\n      <div className="storybook-4col">\n        <TextInput label={"Label"} />\n        <TextInput />\n        <TextInput label={"Label"} defaultValue={"Text"} />\n        <TextInput label={"Label"} defaultValue={"Text"} error={"Error message"} />\n        <TextInput label={"Label"} defaultValue={"Disabled"} disabled />\n        <TextInput label={"Phone number"} defaultValue={"(555) 867-5309"} type={"tel"} />\n        <TextInput type={"date"} label={"Test Quotes"} formatter={text => text.replace("“", \'"\').replace("”", \'"\')} />\n        <TextInput label={"Test Quotes"} formatter={text => text.replace("“", \'"\').replace("”", \'"\')} />\n        <form>\n          <TextInput label={"Secret phrase"} type="password" autoComplete="on" />\n        </form>\n        <TextInput type="text" label="Text" maxLength={10} />\n        <TextInput type="text" label="Text" maxLength={10} error={"Error message"} />\n        <TextInput type="text" label="Text" defaultValue="Text input that is too long" maxLength={10} />\n      </div>\n    </div>;\n}',...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}},MultiLine.parameters={...MultiLine.parameters,docs:{...null===(_MultiLine$parameters=MultiLine.parameters)||void 0===_MultiLine$parameters?void 0:_MultiLine$parameters.docs,source:{originalSource:'() => {\n  return <>\n      <TextInput multiline />\n      <TextInput multiline label="Multiline with label" />\n    </>;\n}',...null===(_MultiLine$parameters2=MultiLine.parameters)||void 0===_MultiLine$parameters2||null===(_MultiLine$parameters2=_MultiLine$parameters2.docs)||void 0===_MultiLine$parameters2?void 0:_MultiLine$parameters2.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...null===(_WithIcon$parameters=WithIcon.parameters)||void 0===_WithIcon$parameters?void 0:_WithIcon$parameters.docs,source:{originalSource:"args => <TextInput {...args} />",...null===(_WithIcon$parameters2=WithIcon.parameters)||void 0===_WithIcon$parameters2||null===(_WithIcon$parameters2=_WithIcon$parameters2.docs)||void 0===_WithIcon$parameters2?void 0:_WithIcon$parameters2.source}}},CustomStartAndEndContent.parameters={...CustomStartAndEndContent.parameters,docs:{...null===(_CustomStartAndEndCon=CustomStartAndEndContent.parameters)||void 0===_CustomStartAndEndCon?void 0:_CustomStartAndEndCon.docs,source:{originalSource:"args => <TextInput {...args} />",...null===(_CustomStartAndEndCon2=CustomStartAndEndContent.parameters)||void 0===_CustomStartAndEndCon2||null===(_CustomStartAndEndCon2=_CustomStartAndEndCon2.docs)||void 0===_CustomStartAndEndCon2?void 0:_CustomStartAndEndCon2.source}}},AsColorInput.parameters={...AsColorInput.parameters,docs:{...null===(_AsColorInput$paramet=AsColorInput.parameters)||void 0===_AsColorInput$paramet?void 0:_AsColorInput$paramet.docs,source:{originalSource:'() => {\n  const [color, setColor] = useState("#915F6D");\n  return <div className={"nds-typography"}>\n      <h1 style={{\n      marginBottom: "1em"\n    }}>Edit Primary Accessible Color</h1>\n      <div style={{\n      display: "flex",\n      alignItems: "center"\n    }}>\n        <TextInput label={"Hex Code"} defaultValue="915F6D" formatter={text => text.replace("#", "")} onBlur={e => {\n        setColor("#" + e.target.value);\n      }} />\n        <span className="narmi-icon-solid-circle" style={{\n        marginLeft: "20px",\n        color: color,\n        fontSize: "50px"\n      }}></span>\n      </div>\n    </div>;\n}',...null===(_AsColorInput$paramet2=AsColorInput.parameters)||void 0===_AsColorInput$paramet2||null===(_AsColorInput$paramet2=_AsColorInput$paramet2.docs)||void 0===_AsColorInput$paramet2?void 0:_AsColorInput$paramet2.source}}},Search.parameters={...Search.parameters,docs:{...null===(_Search$parameters=Search.parameters)||void 0===_Search$parameters?void 0:_Search$parameters.docs,source:{originalSource:"() => {\n  return <TextInput search />;\n}",...null===(_Search$parameters2=Search.parameters)||void 0===_Search$parameters2||null===(_Search$parameters2=_Search$parameters2.docs)||void 0===_Search$parameters2?void 0:_Search$parameters2.source}}},WithClearInputIcon.parameters={...WithClearInputIcon.parameters,docs:{...null===(_WithClearInputIcon$p=WithClearInputIcon.parameters)||void 0===_WithClearInputIcon$p?void 0:_WithClearInputIcon$p.docs,source:{originalSource:"() => {\n  return <TextInput showClearButton />;\n}",...null===(_WithClearInputIcon$p2=WithClearInputIcon.parameters)||void 0===_WithClearInputIcon$p2||null===(_WithClearInputIcon$p2=_WithClearInputIcon$p2.docs)||void 0===_WithClearInputIcon$p2?void 0:_WithClearInputIcon$p2.source}}},WithClearInputIconAndOnChange.parameters={...WithClearInputIconAndOnChange.parameters,docs:{...null===(_WithClearInputIconAn=WithClearInputIconAndOnChange.parameters)||void 0===_WithClearInputIconAn?void 0:_WithClearInputIconAn.docs,source:{originalSource:'() => {\n  const [text, setText] = useState("");\n  return <>\n      <TextInput onChange={e => setText(e.target.value)} showClearButton />\n      <div>Your text is: {text}</div>\n    </>;\n}',...null===(_WithClearInputIconAn2=WithClearInputIconAndOnChange.parameters)||void 0===_WithClearInputIconAn2||null===(_WithClearInputIconAn2=_WithClearInputIconAn2.docs)||void 0===_WithClearInputIconAn2?void 0:_WithClearInputIconAn2.source}}},DateTime.parameters={...DateTime.parameters,docs:{...null===(_DateTime$parameters=DateTime.parameters)||void 0===_DateTime$parameters?void 0:_DateTime$parameters.docs,source:{originalSource:'() => {\n  const [dateTime, setDateTime] = useState(null);\n  return <>\n      <TextInput type="datetime-local" label="Start datetime" onChange={e => setDateTime(e.target.value)} />\n      <div className="margin--top--xxs">Value: {dateTime}</div>\n    </>;\n}',...null===(_DateTime$parameters2=DateTime.parameters)||void 0===_DateTime$parameters2||null===(_DateTime$parameters2=_DateTime$parameters2.docs)||void 0===_DateTime$parameters2?void 0:_DateTime$parameters2.source}}},Time.parameters={...Time.parameters,docs:{...null===(_Time$parameters=Time.parameters)||void 0===_Time$parameters?void 0:_Time$parameters.docs,source:{originalSource:'() => {\n  const [time, setTime] = useState(null);\n  return <>\n      <TextInput type="time" label="Start time" onChange={e => setTime(e.target.value)} />\n      <div className="margin--top--xxs">Value: {time}</div>\n    </>;\n}',...null===(_Time$parameters2=Time.parameters)||void 0===_Time$parameters2||null===(_Time$parameters2=_Time$parameters2.docs)||void 0===_Time$parameters2?void 0:_Time$parameters2.source}}},PasswordShowHide.parameters={...PasswordShowHide.parameters,docs:{...null===(_PasswordShowHide$par=PasswordShowHide.parameters)||void 0===_PasswordShowHide$par?void 0:_PasswordShowHide$par.docs,source:{originalSource:'() => {\n  const [showInputVal, setShowInputVal] = useState(false);\n  return <>\n      <TextInput type={showInputVal ? "text" : "password"} label="Password" endContent={<Button kind="plain" label={showInputVal ? "Hide" : "Show"} onClick={() => {\n      setShowInputVal(curr => !curr);\n    }} />} />\n    </>;\n}',...null===(_PasswordShowHide$par2=PasswordShowHide.parameters)||void 0===_PasswordShowHide$par2||null===(_PasswordShowHide$par2=_PasswordShowHide$par2.docs)||void 0===_PasswordShowHide$par2?void 0:_PasswordShowHide$par2.source}}},WithMaxLength.parameters={...WithMaxLength.parameters,docs:{...null===(_WithMaxLength$parame=WithMaxLength.parameters)||void 0===_WithMaxLength$parame?void 0:_WithMaxLength$parame.docs,source:{originalSource:'() => {\n  const [inputValue, setInputValue] = useState("Default value");\n  return <>\n      <TextInput label="Limited to 20 chars" maxLength={20} value={inputValue} onChange={e => {\n      setInputValue(e.target.value);\n    }} />\n    </>;\n}',...null===(_WithMaxLength$parame2=WithMaxLength.parameters)||void 0===_WithMaxLength$parame2||null===(_WithMaxLength$parame2=_WithMaxLength$parame2.docs)||void 0===_WithMaxLength$parame2?void 0:_WithMaxLength$parame2.source}}};const __namedExportsOrder=["Overview","Example","MultiLine","WithIcon","CustomStartAndEndContent","AsColorInput","Search","WithClearInputIcon","WithClearInputIconAndOnChange","DateTime","Time","PasswordShowHide","WithMaxLength"];Example.__docgenInfo={description:"",methods:[],displayName:"Example"},MultiLine.__docgenInfo={description:"",methods:[],displayName:"MultiLine"},AsColorInput.__docgenInfo={description:"",methods:[],displayName:"AsColorInput"},Search.__docgenInfo={description:"",methods:[],displayName:"Search"},WithClearInputIcon.__docgenInfo={description:"",methods:[],displayName:"WithClearInputIcon"},WithClearInputIconAndOnChange.__docgenInfo={description:"",methods:[],displayName:"WithClearInputIconAndOnChange"},DateTime.__docgenInfo={description:"",methods:[],displayName:"DateTime"},Time.__docgenInfo={description:"",methods:[],displayName:"Time"},PasswordShowHide.__docgenInfo={description:"",methods:[],displayName:"PasswordShowHide"},WithMaxLength.__docgenInfo={description:"",methods:[],displayName:"WithMaxLength"}},"./src/Error/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Error=_ref=>{let{error,marginTop="xxs"}=_ref;return error?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"nds-input-error margin--top--".concat(marginTop),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"fontSize--s margin--right--xxs narmi-icon-x-circle"}),error]}):null};Error.displayName="Error",Error.propTypes={error:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,marginTop:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","s","m","l","xl","xxl","none"])},Error.__docgenInfo={description:"",methods:[],displayName:"Error",props:{marginTop:{defaultValue:{value:'"xxs"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"xxl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},error:{description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Error},"./src/TextInput/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>VALID_ICON_NAMES,A:()=>src_TextInput});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Error=__webpack_require__("./src/Error/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=_ref=>{let{id,label,startIconClass,endIconClass,startContent,endContent,tailContent,showClearButton,clearInput,disabled,multiline=!1,decoration,error,search,onClick,style,children,...props}=_ref;const className=["nds-input",disabled?"disabled":"",props.multiline?"multiline":"",error?"error":"",search?"search":""].join(" "),endIconJsx=showClearButton?(0,jsx_runtime.jsx)("div",{className:"nds-input-icon nds-input-close narmi-icon-x",onClick:clearInput,role:"button",tabIndex:"0","aria-label":"Clear Input"}):(0,jsx_runtime.jsx)("div",{className:"nds-input-icon nds-input-icon--faded ".concat(endIconClass)});return(0,jsx_runtime.jsxs)("div",{className,onClick,style,children:[(0,jsx_runtime.jsxs)("div",{className:"nds-input-box",children:[startContent&&(0,jsx_runtime.jsx)("div",{children:startContent}),startIconClass&&(0,jsx_runtime.jsx)("div",{className:"nds-input-icon nds-input-icon--faded ".concat(startIconClass)}),(0,jsx_runtime.jsxs)("div",{className:"nds-input-column ".concat(!label||startIconClass&&!multiline?"no-label":""),children:[children,decoration,multiline?"":(0,jsx_runtime.jsx)("label",{htmlFor:id,children:label})]}),(endIconClass||showClearButton)&&endIconJsx,endContent&&(0,jsx_runtime.jsx)("div",{children:endContent})]}),(0,jsx_runtime.jsxs)("div",{className:"nds-input-subline",children:[tailContent&&(0,jsx_runtime.jsx)("div",{className:"nds-input-tail margin--top--xxs",children:tailContent}),(0,jsx_runtime.jsx)(Error.A,{error})]})]})};Input.displayName="Input",Input.propTypes={id:prop_types_default().string,label:prop_types_default().string,startIconClass:prop_types_default().string,endIconClass:prop_types_default().string,startContent:prop_types_default().node,endContent:prop_types_default().node,tailContent:prop_types_default().node,showClearButton:prop_types_default().bool,clearInput:prop_types_default().func,decoration:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().element]),multiline:prop_types_default().bool,disabled:prop_types_default().bool,search:prop_types_default().bool,onClick:prop_types_default().func,style:prop_types_default().object,error:prop_types_default().string,children:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().arrayOf(prop_types_default().node)])},Input.__docgenInfo={description:"PRIVATE\n\nThis component has no stories because it is only used internally by NDS.\nIn a future release, this base Input component will be merged with TextInput.",methods:[],displayName:"Input",props:{multiline:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},id:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},startIconClass:{description:"full `narmi-icon-<shape>` className for icon at start of input",type:{name:"string"},required:!1},endIconClass:{description:"full `narmi-icon-<shape>` className for icon at end of input",type:{name:"string"},required:!1},startContent:{description:"arbitrary JSX to place at the start of the input",type:{name:"node"},required:!1},endContent:{description:"arbitrary JSX to place at the end of the input",type:{name:"node"},required:!1},tailContent:{description:"arbitrary JSX to place at the end of the subtitle/error",type:{name:"node"},required:!1},showClearButton:{description:"",type:{name:"bool"},required:!1},clearInput:{description:"",type:{name:"func"},required:!1},decoration:{description:"",type:{name:"union",value:[{name:"node"},{name:"element"}]},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},search:{description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},style:{description:"",type:{name:"object"},required:!1},error:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};const src_Input=Input;const VALID_ICON_NAMES=__webpack_require__("./src/icons/selection.json").icons.map((icon=>icon.properties.name)),TextInput=react.forwardRef(((props,forwardedRef)=>{const{startIcon,endIcon,startContent,endContent,showClearButton,formatter,multiline,defaultValue,onChange,onBlur,maxLength,testId,type="text",error,...nativeElementProps}=props,[inputValue,setInputValue]=(0,react.useState)(defaultValue||"");function _onBlur(e){onBlur&&onBlur(e),setInputValue(formatter(e.target.value))}function _onChange(e){onChange&&onChange(e),setInputValue(e.target.value)}const charCount=((null==nativeElementProps?void 0:nativeElementProps.value)||inputValue).length,characterCounter=maxLength&&charCount>0?(0,jsx_runtime.jsxs)("div",{className:"nds-input-character-counter",children:[charCount,"/",maxLength]}):null,inputError=error||(maxLength&&inputValue.length>maxLength?"Exceeds character limits.":void 0);return(0,jsx_runtime.jsx)(src_Input,{...props,error:inputError,startIconClass:startIcon?"narmi-icon-".concat(startIcon):void 0,endIconClass:endIcon?"narmi-icon-".concat(endIcon):void 0,startContent,endContent,showClearButton:showClearButton&&inputValue,clearInput:function _onClearInput(e){_onChange(e),setInputValue("")},tailContent:characterCounter,children:multiline?(0,jsx_runtime.jsx)("div",{className:"nds-input-multiline-grid","data-textarea-value":inputValue,children:(0,jsx_runtime.jsx)("textarea",{wrap:"soft",ref:forwardedRef,value:inputValue,onChange:_onChange,onBlur:_onBlur,required:props.required,placeholder:props.label,"aria-label":props.label,"data-testid":testId,error:inputError,...nativeElementProps},"nds-text")}):(0,jsx_runtime.jsx)("input",{value:inputValue,onChange:_onChange,onBlur:_onBlur,ref:forwardedRef,type,required:props.required,"aria-label":props.label,placeholder:props.label,"data-testid":testId,error:inputError,...nativeElementProps},"nds-text")})}));TextInput.displayName="TextInput",TextInput.propTypes={label:prop_types_default().string.isRequired,onChange:prop_types_default().func,onBlur:prop_types_default().func,defaultValue:prop_types_default().string,multiline:prop_types_default().bool,formatter:prop_types_default().func,startIcon:prop_types_default().oneOf(VALID_ICON_NAMES),endIcon:prop_types_default().oneOf(VALID_ICON_NAMES),startContent:prop_types_default().node,endContent:prop_types_default().node,showClearButton:prop_types_default().bool,error:prop_types_default().string,maxLength:prop_types_default().number,testId:prop_types_default().string,type:prop_types_default().oneOf(["text","tel","number","email","password","search","time","datetime-local"]),required:prop_types_default().bool},TextInput.defaultProps={multiline:!1,formatter:x=>x,required:!0},TextInput.__docgenInfo={description:"Narmi flavored text input with floating label",methods:[],displayName:"TextInput",props:{multiline:{defaultValue:{value:"false",computed:!1},description:"When true, the input is displayed as an auto-growing textarea",type:{name:"bool"},required:!1},formatter:{defaultValue:{value:"(x) => x",computed:!1},description:"function that formats the input value on blur",type:{name:"func"},required:!1},required:{defaultValue:{value:"true",computed:!1},description:"Native element prop passed to the underlying input/textarea element. Defaults to true.",type:{name:"bool"},required:!1},label:{description:"Label used as input placeholder _and_ floating label",type:{name:"string"},required:!0},onChange:{description:"Callback invoked with event object on input change",type:{name:"func"},required:!1},onBlur:{description:"Callback invoked with event object on input blur",type:{name:"func"},required:!1},defaultValue:{description:"Sets the [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) value of the input",type:{name:"string"},required:!1},startIcon:{description:"Name of Narmi icon to place at the start of the input box",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},endIcon:{description:"Name of Narmi icon to place at the end of the input box",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},startContent:{description:"JSX content slot at input start for custom buttons and icons",type:{name:"node"},required:!1},endContent:{description:"JSX content slot at input end for custom buttons and icons",type:{name:"node"},required:!1},showClearButton:{description:"Display an X at the end of label that clears input and calls onChange on click.",type:{name:"bool"},required:!1},error:{description:"Text of error message to display under the input",type:{name:"string"},required:!1},maxLength:{description:"Maximum number of characters allowed in the input",type:{name:"number"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},type:{description:"",type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"tel"',computed:!1},{value:'"number"',computed:!1},{value:'"email"',computed:!1},{value:'"password"',computed:!1},{value:'"search"',computed:!1},{value:'"time"',computed:!1},{value:'"datetime-local"',computed:!1}]},required:!1}}};const src_TextInput=TextInput},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);