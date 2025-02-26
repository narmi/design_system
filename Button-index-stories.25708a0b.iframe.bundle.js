(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[2640],{"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const _excluded=["elementType","children"];const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children}=_ref,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Element,rest,children)};AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./src/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>src_Button});var react=__webpack_require__("./node_modules/react/index.js"),classcat=__webpack_require__("./node_modules/classcat/index.js"),AsElement=__webpack_require__("./src/util/AsElement.js"),Row=__webpack_require__("./src/Row/index.tsx");const Spinner=_ref=>{let{size=28,strokeWidth=3,color="var(--color-white)"}=_ref;return react.createElement("div",{className:"nds-spinner",style:{height:size,width:size}},react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",height:size,width:size,viewBox:"0 0 ".concat(size," ").concat(size)},react.createElement("circle",{fill:"none",stroke:color,strokeWidth,strokeLinecap:"round",className:"nds-spinner-circle",cx:"50%",cy:"50%",r:"25%"})))},Button_Spinner=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"28"},description:"Square size of spinner as unitless number",name:"size",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"3"},description:"Width of animated stroke",name:"strokeWidth",required:!1,type:{name:"number"}},color:{defaultValue:{value:"var(--color-white)"},description:"CSS color value",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/Button/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}const _excluded=["isLoading","disabled","kind","type","size","startIcon","endIcon","testId","children","label","onClick","as","ariaLabel"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Button=_ref=>{let{isLoading=!1,disabled=!1,kind="primary",type,size="m",startIcon=null,endIcon=null,testId,children,label,onClick=()=>{},as="button",ariaLabel=null}=_ref,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);const isButtonElement="button"===as,buttonLabel=label||children,Icon=_ref2=>{let{name}=_ref2;return react.createElement("div",{className:"alignChild--center--center"},react.createElement("i",{role:"img","aria-label":ariaLabel||name,className:"narmi-icon-".concat(name)}))};return react.createElement(AsElement.A,_extends({elementType:as,tabIndex:0,onClick,type},otherProps,{className:(0,classcat.A)(["nds-typography","nds-button","nds-button--".concat(kind),"nds-button--".concat(size),{resetButton:"button"===as,"nds-button--disabled":disabled,"nds-button--loading":isLoading}]),disabled:!!(isButtonElement&&disabled||isLoading)||void 0,"aria-label":ariaLabel||buttonLabel,"data-testid":testId||"nds-button"}),react.createElement("div",{className:"nds-button-content"},isLoading&&react.createElement("div",{className:"nds-button-spinner"},react.createElement(Button_Spinner,{color:"primary"!==kind?"var(--color-lightGrey)":void 0})),react.createElement("div",{style:{visibility:isLoading?"hidden":"visible"}},react.createElement(Row.A,{gapSize:{xs:"xs",s:"xs",m:"s"}[size],alignItems:"center"},startIcon&&react.createElement(Row.A.Item,{shrink:!0},react.createElement(Icon,{name:startIcon})),react.createElement(Row.A.Item,null,react.createElement("span",{className:"nds-button-label"},buttonLabel)),endIcon&&react.createElement(Row.A.Item,{shrink:!0},react.createElement(Icon,{name:endIcon}))))))},src_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"Narmi style action buttons.\n\nButton renders as a `button` element by default, but can render as an `a` element\nvia the `as` prop.\n\nThis component supports rest props; any additional props on button will be\npassed through to the root node of `Button`.",displayName:"Button",props:{label:{defaultValue:null,description:"Renders the button label",name:"label",required:!1,type:{name:"string"}},kind:{defaultValue:{value:"primary"},description:"style of button to render",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tonal"'},{value:'"negative"'},{value:'"menu"'},{value:'"plain"'}]}},onClick:{defaultValue:{value:"() => {}"},description:"Click callback, with event object passed as argument",name:"onClick",required:!1,type:{name:"(e: any) => void"}},as:{defaultValue:{value:"button"},description:'The html element to render as the root node of `Button`.\n\nWhen rendering as an "a" you **MUST** pass an `href` attribute\nfor the anchor to be valid.',name:"as",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"a"'}]}},disabled:{defaultValue:{value:"false"},description:"disables the button when set to `true`",name:"disabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"disables the button and adds a loading spinner when set to `true`",name:"isLoading",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"type attribute of button element",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'},{value:'"reset"'}]}},size:{defaultValue:{value:"m"},description:"size variant of button",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'}]}},startIcon:{defaultValue:{value:"null"},description:"Name of Narmi icon to place at the start of the label",name:"startIcon",required:!1,type:{name:"enum",value:[{value:'"menu"'},{value:'"type"'},{value:'"bank"'},{value:'"loan"'},{value:'"logo-remitly"'},{value:'"zelle-outline"'},{value:'"question"'},{value:'"signal"'},{value:'"car"'},{value:'"check-front"'},{value:'"dollar-bill-line"'},{value:'"wires"'},{value:'"m2m"'},{value:'"venmo-logo"'},{value:'"face-id"'},{value:'"library"'},{value:'"profile"'},{value:'"filter-2"'},{value:'"business"'},{value:'"profiles"'},{value:'"star-filled"'},{value:'"car-outline"'},{value:'"dining"'},{value:'"fingerprint"'},{value:'"heart-pulse"'},{value:'"paw"'},{value:'"receipt"'},{value:'"self-care"'},{value:'"stroller"'},{value:'"security, narmi-fat-security"'},{value:'"feed, narmi-feed"'},{value:'"activity"'},{value:'"airplay"'},{value:'"alert-circle"'},{value:'"alert-octagon"'},{value:'"alert-triangle"'},{value:'"align-center"'},{value:'"align-justify"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"anchor"'},{value:'"aperture"'},{value:'"archive"'},{value:'"arrow-down"'},{value:'"arrow-down-circle"'},{value:'"arrow-down-left"'},{value:'"arrow-down-right"'},{value:'"arrow-left"'},{value:'"arrow-left-circle"'},{value:'"arrow-right"'},{value:'"arrow-right-circle"'},{value:'"arrow-up"'},{value:'"arrow-up-circle"'},{value:'"arrow-up-left"'},{value:'"arrow-up-right"'},{value:'"arrow-up-down"'},{value:'"at-sign"'},{value:'"award"'},{value:'"bar-chart"'},{value:'"bar-chart-2"'},{value:'"battery"'},{value:'"battery-charging"'},{value:'"bell"'},{value:'"bell-off"'},{value:'"bluetooth"'},{value:'"bold"'},{value:'"book"'},{value:'"book-open"'},{value:'"bookmark"'},{value:'"box"'},{value:'"briefcase"'},{value:'"calendar"'},{value:'"camera"'},{value:'"camera-off"'},{value:'"cast"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"chevrons-down"'},{value:'"chevrons-left"'},{value:'"chevrons-right"'},{value:'"chevrons-up"'},{value:'"chrome"'},{value:'"circle"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"cloud"'},{value:'"cloud-drizzle"'},{value:'"cloud-lightning"'},{value:'"cloud-off"'},{value:'"cloud-rain"'},{value:'"cloud-snow"'},{value:'"code"'},{value:'"codepen"'},{value:'"codesandbox"'},{value:'"coffee"'},{value:'"columns"'},{value:'"command"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-left"'},{value:'"corner-down-right"'},{value:'"corner-left-down"'},{value:'"corner-left-up"'},{value:'"corner-right-down"'},{value:'"corner-right-up"'},{value:'"corner-up-left"'},{value:'"corner-up-right"'},{value:'"cpu"'},{value:'"credit-card1"'},{value:'"crop"'},{value:'"crosshair"'},{value:'"database"'},{value:'"delete"'},{value:'"disc"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"download-cloud"'},{value:'"droplet"'},{value:'"edit"'},{value:'"edit-2"'},{value:'"edit-3"'},{value:'"external-link"'},{value:'"eye"'},{value:'"eye-off"'},{value:'"facebook"'},{value:'"fast-forward"'},{value:'"feather"'},{value:'"figma"'},{value:'"file"'},{value:'"file-minus"'},{value:'"file-plus"'},{value:'"file-text1"'},{value:'"film"'},{value:'"filter"'},{value:'"flag"'},{value:'"folder"'},{value:'"folder-minus"'},{value:'"folder-plus"'},{value:'"framer"'},{value:'"frown"'},{value:'"gift"'},{value:'"git-branch"'},{value:'"git-commit"'},{value:'"git-merge"'},{value:'"git-pull-request"'},{value:'"github"'},{value:'"gitlab"'},{value:'"globe"'},{value:'"grid"'},{value:'"hard-drive"'},{value:'"hash"'},{value:'"headphones"'},{value:'"heart"'},{value:'"help-circle"'},{value:'"hexagon"'},{value:'"home"'},{value:'"image"'},{value:'"inbox"'},{value:'"info"'},{value:'"instagram"'},{value:'"italic"'},{value:'"key"'},{value:'"layers"'},{value:'"layout"'},{value:'"life-buoy"'},{value:'"link"'},{value:'"link-2"'},{value:'"linkedin"'},{value:'"list"'},{value:'"loader"'},{value:'"lock"'},{value:'"log-in"'},{value:'"log-out"'},{value:'"mail"'},{value:'"map"'},{value:'"map-pin"'},{value:'"maximize"'},{value:'"maximize-2"'},{value:'"meh"'},{value:'"message-circle"'},{value:'"message-square"'},{value:'"mic"'},{value:'"mic-off"'},{value:'"minimize"'},{value:'"minimize-2"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"minus-square"'},{value:'"monitor"'},{value:'"moon"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"mouse-pointer"'},{value:'"move"'},{value:'"music"'},{value:'"navigation"'},{value:'"navigation-2"'},{value:'"octagon"'},{value:'"package"'},{value:'"paperclip"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen-tool"'},{value:'"percent"'},{value:'"phone"'},{value:'"phone-call"'},{value:'"phone-forwarded"'},{value:'"phone-incoming"'},{value:'"phone-missed"'},{value:'"phone-off"'},{value:'"phone-outgoing"'},{value:'"pie-chart"'},{value:'"play"'},{value:'"play-circle"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"pocket"'},{value:'"power"'},{value:'"printer"'},{value:'"radio"'},{value:'"refresh-ccw"'},{value:'"refresh-cw"'},{value:'"repeat"'},{value:'"rewind"'},{value:'"rotate-ccw"'},{value:'"rotate-cw"'},{value:'"rss"'},{value:'"save"'},{value:'"scissors"'},{value:'"search"'},{value:'"send"'},{value:'"server"'},{value:'"settings"'},{value:'"share"'},{value:'"share-2"'},{value:'"shield"'},{value:'"shield-off"'},{value:'"shopping-bag"'},{value:'"shopping-cart"'},{value:'"shuffle"'},{value:'"sidebar"'},{value:'"skip-back"'},{value:'"skip-forward"'},{value:'"slack"'},{value:'"slash"'},{value:'"sliders"'},{value:'"smartphone"'},{value:'"smile"'},{value:'"speaker"'},{value:'"square"'},{value:'"star"'},{value:'"stop-circle"'},{value:'"sun"'},{value:'"sunrise"'},{value:'"sunset"'},{value:'"tablet"'},{value:'"tag"'},{value:'"target"'},{value:'"terminal"'},{value:'"thermometer"'},{value:'"thumbs-down"'},{value:'"thumbs-up"'},{value:'"toggle-left"'},{value:'"toggle-right"'},{value:'"tool"'},{value:'"trash"'},{value:'"trash-2"'},{value:'"trello"'},{value:'"trending-down"'},{value:'"trending-up"'},{value:'"triangle"'},{value:'"truck"'},{value:'"tv"'},{value:'"twitch"'},{value:'"twitter"'},{value:'"umbrella"'},{value:'"underline"'},{value:'"unlock"'},{value:'"upload"'},{value:'"upload-cloud"'},{value:'"user"'},{value:'"user-check"'},{value:'"user-minus"'},{value:'"user-plus"'},{value:'"user-x"'},{value:'"users"'},{value:'"video"'},{value:'"video-off"'},{value:'"voicemail"'},{value:'"volume"'},{value:'"volume-1"'},{value:'"volume-2"'},{value:'"volume-x"'},{value:'"watch"'},{value:'"wifi"'},{value:'"wifi-off"'},{value:'"wind"'},{value:'"x"'},{value:'"x-circle"'},{value:'"x-octagon"'},{value:'"x-square"'},{value:'"youtube"'},{value:'"zap"'},{value:'"zap-off"'},{value:'"zoom-in"'},{value:'"zoom-out"'},{value:'"student"'},{value:'"hand-spock"'},{value:'"solid-circle"'},{value:'"GroupOutlined"'},{value:'"LocalAtm"'},{value:'"MonetizationOnOutlined"'},{value:'"SyncAlt"'},{value:'"p2p"'},{value:'"check-endorsed"'},{value:'"piggy-bank"'},{value:'"venmo"'},{value:'"folder-open"'},{value:'"group"'},{value:'"settings-gear"'},{value:'"admin-user"'},{value:'"transfer-arrows, narmi-transfer"'},{value:'"blob"'},{value:'"bill"'},{value:'"credit-card"'},{value:'"office"'},{value:'"file-text"'}]}},endIcon:{defaultValue:{value:"null"},description:"Name of Narmi icon to place at the end of the label",name:"endIcon",required:!1,type:{name:"enum",value:[{value:'"menu"'},{value:'"type"'},{value:'"bank"'},{value:'"loan"'},{value:'"logo-remitly"'},{value:'"zelle-outline"'},{value:'"question"'},{value:'"signal"'},{value:'"car"'},{value:'"check-front"'},{value:'"dollar-bill-line"'},{value:'"wires"'},{value:'"m2m"'},{value:'"venmo-logo"'},{value:'"face-id"'},{value:'"library"'},{value:'"profile"'},{value:'"filter-2"'},{value:'"business"'},{value:'"profiles"'},{value:'"star-filled"'},{value:'"car-outline"'},{value:'"dining"'},{value:'"fingerprint"'},{value:'"heart-pulse"'},{value:'"paw"'},{value:'"receipt"'},{value:'"self-care"'},{value:'"stroller"'},{value:'"security, narmi-fat-security"'},{value:'"feed, narmi-feed"'},{value:'"activity"'},{value:'"airplay"'},{value:'"alert-circle"'},{value:'"alert-octagon"'},{value:'"alert-triangle"'},{value:'"align-center"'},{value:'"align-justify"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"anchor"'},{value:'"aperture"'},{value:'"archive"'},{value:'"arrow-down"'},{value:'"arrow-down-circle"'},{value:'"arrow-down-left"'},{value:'"arrow-down-right"'},{value:'"arrow-left"'},{value:'"arrow-left-circle"'},{value:'"arrow-right"'},{value:'"arrow-right-circle"'},{value:'"arrow-up"'},{value:'"arrow-up-circle"'},{value:'"arrow-up-left"'},{value:'"arrow-up-right"'},{value:'"arrow-up-down"'},{value:'"at-sign"'},{value:'"award"'},{value:'"bar-chart"'},{value:'"bar-chart-2"'},{value:'"battery"'},{value:'"battery-charging"'},{value:'"bell"'},{value:'"bell-off"'},{value:'"bluetooth"'},{value:'"bold"'},{value:'"book"'},{value:'"book-open"'},{value:'"bookmark"'},{value:'"box"'},{value:'"briefcase"'},{value:'"calendar"'},{value:'"camera"'},{value:'"camera-off"'},{value:'"cast"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"chevrons-down"'},{value:'"chevrons-left"'},{value:'"chevrons-right"'},{value:'"chevrons-up"'},{value:'"chrome"'},{value:'"circle"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"cloud"'},{value:'"cloud-drizzle"'},{value:'"cloud-lightning"'},{value:'"cloud-off"'},{value:'"cloud-rain"'},{value:'"cloud-snow"'},{value:'"code"'},{value:'"codepen"'},{value:'"codesandbox"'},{value:'"coffee"'},{value:'"columns"'},{value:'"command"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-left"'},{value:'"corner-down-right"'},{value:'"corner-left-down"'},{value:'"corner-left-up"'},{value:'"corner-right-down"'},{value:'"corner-right-up"'},{value:'"corner-up-left"'},{value:'"corner-up-right"'},{value:'"cpu"'},{value:'"credit-card1"'},{value:'"crop"'},{value:'"crosshair"'},{value:'"database"'},{value:'"delete"'},{value:'"disc"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"download-cloud"'},{value:'"droplet"'},{value:'"edit"'},{value:'"edit-2"'},{value:'"edit-3"'},{value:'"external-link"'},{value:'"eye"'},{value:'"eye-off"'},{value:'"facebook"'},{value:'"fast-forward"'},{value:'"feather"'},{value:'"figma"'},{value:'"file"'},{value:'"file-minus"'},{value:'"file-plus"'},{value:'"file-text1"'},{value:'"film"'},{value:'"filter"'},{value:'"flag"'},{value:'"folder"'},{value:'"folder-minus"'},{value:'"folder-plus"'},{value:'"framer"'},{value:'"frown"'},{value:'"gift"'},{value:'"git-branch"'},{value:'"git-commit"'},{value:'"git-merge"'},{value:'"git-pull-request"'},{value:'"github"'},{value:'"gitlab"'},{value:'"globe"'},{value:'"grid"'},{value:'"hard-drive"'},{value:'"hash"'},{value:'"headphones"'},{value:'"heart"'},{value:'"help-circle"'},{value:'"hexagon"'},{value:'"home"'},{value:'"image"'},{value:'"inbox"'},{value:'"info"'},{value:'"instagram"'},{value:'"italic"'},{value:'"key"'},{value:'"layers"'},{value:'"layout"'},{value:'"life-buoy"'},{value:'"link"'},{value:'"link-2"'},{value:'"linkedin"'},{value:'"list"'},{value:'"loader"'},{value:'"lock"'},{value:'"log-in"'},{value:'"log-out"'},{value:'"mail"'},{value:'"map"'},{value:'"map-pin"'},{value:'"maximize"'},{value:'"maximize-2"'},{value:'"meh"'},{value:'"message-circle"'},{value:'"message-square"'},{value:'"mic"'},{value:'"mic-off"'},{value:'"minimize"'},{value:'"minimize-2"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"minus-square"'},{value:'"monitor"'},{value:'"moon"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"mouse-pointer"'},{value:'"move"'},{value:'"music"'},{value:'"navigation"'},{value:'"navigation-2"'},{value:'"octagon"'},{value:'"package"'},{value:'"paperclip"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen-tool"'},{value:'"percent"'},{value:'"phone"'},{value:'"phone-call"'},{value:'"phone-forwarded"'},{value:'"phone-incoming"'},{value:'"phone-missed"'},{value:'"phone-off"'},{value:'"phone-outgoing"'},{value:'"pie-chart"'},{value:'"play"'},{value:'"play-circle"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"pocket"'},{value:'"power"'},{value:'"printer"'},{value:'"radio"'},{value:'"refresh-ccw"'},{value:'"refresh-cw"'},{value:'"repeat"'},{value:'"rewind"'},{value:'"rotate-ccw"'},{value:'"rotate-cw"'},{value:'"rss"'},{value:'"save"'},{value:'"scissors"'},{value:'"search"'},{value:'"send"'},{value:'"server"'},{value:'"settings"'},{value:'"share"'},{value:'"share-2"'},{value:'"shield"'},{value:'"shield-off"'},{value:'"shopping-bag"'},{value:'"shopping-cart"'},{value:'"shuffle"'},{value:'"sidebar"'},{value:'"skip-back"'},{value:'"skip-forward"'},{value:'"slack"'},{value:'"slash"'},{value:'"sliders"'},{value:'"smartphone"'},{value:'"smile"'},{value:'"speaker"'},{value:'"square"'},{value:'"star"'},{value:'"stop-circle"'},{value:'"sun"'},{value:'"sunrise"'},{value:'"sunset"'},{value:'"tablet"'},{value:'"tag"'},{value:'"target"'},{value:'"terminal"'},{value:'"thermometer"'},{value:'"thumbs-down"'},{value:'"thumbs-up"'},{value:'"toggle-left"'},{value:'"toggle-right"'},{value:'"tool"'},{value:'"trash"'},{value:'"trash-2"'},{value:'"trello"'},{value:'"trending-down"'},{value:'"trending-up"'},{value:'"triangle"'},{value:'"truck"'},{value:'"tv"'},{value:'"twitch"'},{value:'"twitter"'},{value:'"umbrella"'},{value:'"underline"'},{value:'"unlock"'},{value:'"upload"'},{value:'"upload-cloud"'},{value:'"user"'},{value:'"user-check"'},{value:'"user-minus"'},{value:'"user-plus"'},{value:'"user-x"'},{value:'"users"'},{value:'"video"'},{value:'"video-off"'},{value:'"voicemail"'},{value:'"volume"'},{value:'"volume-1"'},{value:'"volume-2"'},{value:'"volume-x"'},{value:'"watch"'},{value:'"wifi"'},{value:'"wifi-off"'},{value:'"wind"'},{value:'"x"'},{value:'"x-circle"'},{value:'"x-octagon"'},{value:'"x-square"'},{value:'"youtube"'},{value:'"zap"'},{value:'"zap-off"'},{value:'"zoom-in"'},{value:'"zoom-out"'},{value:'"student"'},{value:'"hand-spock"'},{value:'"solid-circle"'},{value:'"GroupOutlined"'},{value:'"LocalAtm"'},{value:'"MonetizationOnOutlined"'},{value:'"SyncAlt"'},{value:'"p2p"'},{value:'"check-endorsed"'},{value:'"piggy-bank"'},{value:'"venmo"'},{value:'"folder-open"'},{value:'"group"'},{value:'"settings-gear"'},{value:'"admin-user"'},{value:'"transfer-arrows, narmi-transfer"'},{value:'"blob"'},{value:'"bill"'},{value:'"credit-card"'},{value:'"office"'},{value:'"file-text"'}]}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"null"},description:"Optional value for setting the aria-label. If unset label will be used.",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"**⚠️ DEPRECATED**\n\nPassing children to render the button label will be removed\nin a future release. Use the `label` prop instead.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/Row/RowItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId},children)},__WEBPACK_DEFAULT_EXPORT__=RowItem;try{RowItem.displayName="RowItem",RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"RowItem",props:{shrink:{defaultValue:{value:"false"},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",name:"shrink",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"li"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/RowItem.tsx#RowItem"]={docgenInfo:RowItem.__docgenInfo,name:"RowItem",path:"src/Row/RowItem.tsx#RowItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/Row/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.tsx"),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{const result={gap:"var(--space-".concat(gapSize,")"),alignItems:"flex-start",justifyContent:"flex-".concat(justifyContent)};return gapSize&&"none"===gapSize&&(result.gap="0"),"top"!==alignItems&&(result.alignItems=alignItems),"space-between"===justifyContent&&(result.justifyContent=justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId},children)};Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A;const __WEBPACK_DEFAULT_EXPORT__=Row;try{Row.displayName="Row",Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width with its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"Row",props:{alignItems:{defaultValue:{value:"top"},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},justifyContent:{defaultValue:{value:"start"},description:"Controls vertical alignment of items within the row",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"space-between"'}]}},gapSize:{defaultValue:{value:"l"},description:"Controls horizontal flex justification",name:"gapSize",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"ul"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children must be of type `Row.Item`",name:"children",required:!0,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/index.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/Row/index.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}},"./src/Button/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonSizes:()=>ButtonSizes,ConfirmAndCancel:()=>ConfirmAndCancel,Overview:()=>Overview,PlainButton:()=>PlainButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Button/index.tsx"),_icons_selection_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/icons/selection.json"),_Row__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Row/index.tsx");const VALID_ICON_NAMES=_icons_selection_json__WEBPACK_IMPORTED_MODULE_2__.Pt.map((icon=>icon.properties.name)),Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,args),Overview=Template.bind({});Overview.args={label:"Submit"};const PlainButton=Template.bind({});PlainButton.args={label:"Edit",kind:"plain"},PlainButton.parameters={docs:{description:{story:'A Button of `kind="plain"` is a button styled to look like a link.'}}};const ConfirmAndCancel=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center",justifyContent:"end"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{shrink:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{kind:"negative",label:"Cancel"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{shrink:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{kind:"primary",label:"Confirm"})));ConfirmAndCancel.parameters={docs:{description:{story:"When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right."}}};const ButtonSizes=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"margin--bottom--l"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center"},["m","s","xs"].map((size=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{key:size},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{label:`${size} Button`,size})))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"margin--bottom--l"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center"},["m","s","xs"].map((size=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{key:size},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{kind:"secondary",label:`${size} Button`,size})))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"margin--bottom--l"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center"},["m","s","xs"].map((size=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{key:size},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{kind:"tonal",label:`${size} Button`,size})))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"margin--bottom--l"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A,{alignItems:"center"},["m","s","xs"].map((size=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.A.Item,{key:size},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{kind:"plain",label:`${size} Button`,size}))))))),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:___WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{startIcon:{options:["",...VALID_ICON_NAMES]},endIcon:{options:["",...VALID_ICON_NAMES]}}},__namedExportsOrder=["Overview","PlainButton","ConfirmAndCancel","ButtonSizes"];Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Overview.parameters?.docs?.source}}},PlainButton.parameters={...PlainButton.parameters,docs:{...PlainButton.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...PlainButton.parameters?.docs?.source}}},ConfirmAndCancel.parameters={...ConfirmAndCancel.parameters,docs:{...ConfirmAndCancel.parameters?.docs,source:{originalSource:'() => <Row alignItems="center" justifyContent="end">\n    <Row.Item shrink>\n      <Button kind="negative" label="Cancel" />\n    </Row.Item>\n    <Row.Item shrink>\n      <Button kind="primary" label="Confirm" />\n    </Row.Item>\n  </Row>',...ConfirmAndCancel.parameters?.docs?.source}}},ButtonSizes.parameters={...ButtonSizes.parameters,docs:{...ButtonSizes.parameters?.docs,source:{originalSource:'() => <>\n    <div className="margin--bottom--l">\n      <Row alignItems="center">\n        {["m", "s", "xs"].map(size => <Row.Item key={size}>\n            <Button label={`${size} Button`} size={size} />\n          </Row.Item>)}\n      </Row>\n    </div>\n    <div className="margin--bottom--l">\n      <Row alignItems="center">\n        {["m", "s", "xs"].map(size => <Row.Item key={size}>\n            <Button kind="secondary" label={`${size} Button`} size={size} />\n          </Row.Item>)}\n      </Row>\n    </div>\n    <div className="margin--bottom--l">\n      <Row alignItems="center">\n        {["m", "s", "xs"].map(size => <Row.Item key={size}>\n            <Button kind="tonal" label={`${size} Button`} size={size} />\n          </Row.Item>)}\n      </Row>\n    </div>\n    <div className="margin--bottom--l">\n      <Row alignItems="center">\n        {["m", "s", "xs"].map(size => <Row.Item key={size}>\n            <Button kind="plain" label={`${size} Button`} size={size} />\n          </Row.Item>)}\n      </Row>\n    </div>\n  </>',...ButtonSizes.parameters?.docs?.source}}}},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);