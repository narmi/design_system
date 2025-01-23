"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[4227],{"./src/ContentCard/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classcat__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classcat/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ContentCard=_ref=>{let{kind="plain",paddingSize="l",onClick=()=>{},isSelected=!1,children,testId,radiusSize="s"}=_ref;const isInteractive=["interactive","toggle","button"].some((interactiveKinds=>kind===interactiveKinds)),isToggle=isInteractive&&"button"!==kind;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({"data-testid":testId||"ndsContentCard",className:(0,classcat__WEBPACK_IMPORTED_MODULE_1__.A)(["nds-contentCard","nds-contentCard--".concat(kind),"padding--all--".concat(paddingSize),"rounded--all--".concat(radiusSize," bgColor--white"),{"button--reset":isInteractive}])},(()=>{const props={};return isInteractive&&(props.role="button",props.onClick=onClick,props.tabIndex="0",props.onKeyUp=_ref2=>{let{key}=_ref2;"Enter"!==key&&" "!==key||onClick()}),isToggle&&(props["aria-pressed"]=isSelected),props})()),children)};ContentCard.propTypes={onClick:(props,propName)=>{const isInteractive=["interactive","toggle","button"].some((kind=>kind===props.kind));return isInteractive&&"function"!=typeof props[propName]?new Error("ContentCard: `onClick` must be a function"):isInteractive&&void 0===props[propName]?new Error("ContentCard: `onClick` is required for `interactive` type"):"function"!=props[propName]||isInteractive?void 0:new Error("ContentCard: `onClick` is only valid for `toggle` and `button` types")}};const __WEBPACK_DEFAULT_EXPORT__=ContentCard;try{ContentCard.displayName="ContentCard",ContentCard.__docgenInfo={description:"Narmi style content containers, with support for rendering as an interactive button.",displayName:"ContentCard",props:{children:{defaultValue:null,description:"Accepts any content as children",name:"children",required:!0,type:{name:"ReactNode"}},paddingSize:{defaultValue:{value:"l"},description:"Amount of padding to add on all sides of card.\nFor custom padding control, use `none` and compose your own element(s)\nin ContentCard children.",name:"paddingSize",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}},kind:{defaultValue:{value:"plain"},description:"Kind of card to render.\n\n`plain`: flat, rounded rect\n\n`elevated`: rounded rect with shadow\n\n`toggle`: toggle button (checkbox-like)\n\n`button`: action button (button-like)\n\n`bordered`: flat, rounded rect with border",name:"kind",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"button"'},{value:'"bordered"'},{value:'"elevated"'},{value:'"toggle"'},{value:'"interactive"'}]}},radiusSize:{defaultValue:{value:"s"},description:"Amount of border radius to add on all sides of card.",name:"radiusSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"() => void"}},isSelected:{defaultValue:{value:"false"},description:"Only applicable for `toggle` type.\nRenders card in visually selected state with appropriate attributes.",name:"isSelected",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Only applicable for `toggle` type.\nRenders card in visually selected state with appropriate attributes.",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ContentCard/index.tsx#ContentCard"]={docgenInfo:ContentCard.__docgenInfo,name:"ContentCard",path:"src/ContentCard/index.tsx#ContentCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/ContentCard/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonCard:()=>ButtonCard,Overview:()=>Overview,ToggleCard:()=>ToggleCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ContentCard/index.tsx");const Overview=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bgColor--snowGrey alignChild--center--center padding--all--xl"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,args))).bind({});Overview.args={children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"fontSize--heading4 padding--bottom--s"},"Anything can go in here"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"The card will grow to fit the width of its parent container"))};const ButtonCard=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{kind:"button",onClick:()=>{alert("button card clicked")}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"fontSize--heading4 padding--bottom--xs"},"Button card"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"fontSize--s fontColor--secondary"},"This card behaves like an html ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"button"),"."));ButtonCard.parameters={docs:{description:{story:"Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop."}}};const ToggleCard=()=>{const[isCardSelected,setIsCardSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{kind:"toggle",onClick:()=>{setIsCardSelected((isCardSelected=>!isCardSelected))},isSelected:isCardSelected},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"fontSize--heading4 padding--bottom--xs"},"Toggle card"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"fontSize--s fontColor--secondary"},"This card is currently"," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,isCardSelected?"selected":"not selected")))};ToggleCard.parameters={docs:{description:{story:"Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop."}}};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ContentCard",component:___WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{type:{table:{disable:!0}}}},__namedExportsOrder=["Overview","ButtonCard","ToggleCard"];Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'args => <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">\n    <ContentCard {...args} />\n  </div>',...Overview.parameters?.docs?.source}}},ButtonCard.parameters={...ButtonCard.parameters,docs:{...ButtonCard.parameters?.docs,source:{originalSource:'() => <ContentCard kind="button" onClick={() => {\n  alert("button card clicked");\n}}>\n    <h3 className="fontSize--heading4 padding--bottom--xs">Button card</h3>\n    <div className="fontSize--s fontColor--secondary">\n      This card behaves like an html <code>button</code>.\n    </div>\n  </ContentCard>',...ButtonCard.parameters?.docs?.source}}},ToggleCard.parameters={...ToggleCard.parameters,docs:{...ToggleCard.parameters?.docs,source:{originalSource:'() => {\n  const [isCardSelected, setIsCardSelected] = useState(false);\n  const handleClick = () => {\n    setIsCardSelected(isCardSelected => !isCardSelected);\n  };\n  return <ContentCard kind="toggle" onClick={handleClick} isSelected={isCardSelected}>\n      <h3 className="fontSize--heading4 padding--bottom--xs">Toggle card</h3>\n      <div className="fontSize--s fontColor--secondary">\n        This card is currently{" "}\n        <em>{isCardSelected ? "selected" : "not selected"}</em>\n      </div>\n    </ContentCard>;\n}',...ToggleCard.parameters?.docs?.source}}}},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);