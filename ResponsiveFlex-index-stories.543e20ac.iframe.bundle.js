"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[2703],{"./src/ResponsiveFlex/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useBreakpoints=__webpack_require__("./src/hooks/useBreakpoints/index.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VALID_SIZES=["s","m","l","xl"],ResponsiveFlex=_ref2=>{let{children,direction="column",gapSize="m",reverseAt,toColumnAt,toRowAt}=_ref2;const flexDirection=(_ref=>{let{viewportMatches,direction,toColumnAt,toRowAt,reverseAt}=_ref,flexDirection=direction;return viewportMatches[toRowAt]&&(flexDirection="row"),viewportMatches[toColumnAt]&&(flexDirection="column"),viewportMatches[reverseAt]&&(flexDirection="".concat(flexDirection,"-reverse")),flexDirection})({viewportMatches:(0,useBreakpoints.A)(),direction,toColumnAt,toRowAt,reverseAt}),style={display:"flex",flexDirection,gap:"var(--space-".concat(gapSize,")"),justifyContent:flexDirection.includes("reverse")?"flex-end":"flex-start"};return(0,jsx_runtime.jsx)("div",{className:"nds-responsiveFlex",style,children})};ResponsiveFlex.displayName="ResponsiveFlex",ResponsiveFlex.propTypes={children:prop_types_default().arrayOf(prop_types_default().node),gapSize:prop_types_default().oneOf(["xs","s","m","l","xl"]),direction:prop_types_default().oneOf(["row","column"]),reverseAt:prop_types_default().oneOf(VALID_SIZES),toColumnAt:prop_types_default().oneOf(VALID_SIZES),toRowAt:prop_types_default().oneOf(VALID_SIZES)};const src_ResponsiveFlex=ResponsiveFlex;var _Overview$parameters,_Overview$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}ResponsiveFlex.__docgenInfo={description:"Responsive layout helper that allows developers to declaratively control\nhow flex items behave at different standard viewport sizes.",methods:[],displayName:"ResponsiveFlex",props:{direction:{defaultValue:{value:'"column"',computed:!1},description:"Initial flex direction",type:{name:"enum",value:[{value:'"row"',computed:!1},{value:'"column"',computed:!1}]},required:!1},gapSize:{defaultValue:{value:'"m"',computed:!1},description:'Size of flex gap by token size (e.g. "xl")',type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},children:{description:"Implicit flex children",type:{name:"arrayOf",value:{name:"node"}},required:!1},reverseAt:{description:"Breakpoint at which to reverse order of flex items",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},toColumnAt:{description:"Breakpoint at which to change flex direction to column",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},toRowAt:{description:"Breakpoint at which to change flex direction to row",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1}]},required:!1}}};const debugStyle={minHeight:"140px",minWidth:"140px",fontSize:"56px"},Overview=args=>(0,jsx_runtime.jsx)("div",{className:"fontWeight--thin fontColor--white",children:(0,jsx_runtime.jsxs)(src_ResponsiveFlex,_objectSpread(_objectSpread({},args),{},{children:[(0,jsx_runtime.jsx)("div",{style:debugStyle,className:"alignChild--center--center bgColor--cactus",children:"1"}),(0,jsx_runtime.jsx)("div",{style:debugStyle,className:"alignChild--center--center bgColor--moss",children:"2"}),(0,jsx_runtime.jsx)("div",{style:debugStyle,className:"alignChild--center--center bgColor--pine",children:"3"})]}))});Overview.displayName="Overview",Overview.args={direction:"column",toRowAt:"m",toColumnAt:"xl",reverseAt:"l"};const index_stories={title:"Components/ResponsiveFlex",component:src_ResponsiveFlex};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:'args => {\n  return <div className="fontWeight--thin fontColor--white">\n      <ResponsiveFlex {...args}>\n        <div style={debugStyle} className="alignChild--center--center bgColor--cactus">\n          1\n        </div>\n        <div style={debugStyle} className="alignChild--center--center bgColor--moss">\n          2\n        </div>\n        <div style={debugStyle} className="alignChild--center--center bgColor--pine">\n          3\n        </div>\n      </ResponsiveFlex>\n    </div>;\n}'},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})});const __namedExportsOrder=["Overview"]},"./src/hooks/useBreakpoints/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var usehooks_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/usehooks-ts/dist/esm/index.js");const MQ_MAP_s="480px",MQ_MAP_m="768px",MQ_MAP_l="1280px",MQ_MAP_xl="1440px",getMq=size=>"(min-width: ".concat(size,")"),__WEBPACK_DEFAULT_EXPORT__=function(){let queries=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{s:getMq(MQ_MAP_s),m:getMq(MQ_MAP_m),l:getMq(MQ_MAP_l),xl:getMq(MQ_MAP_xl)};return{s:(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_0__.Ub)(queries.s),m:(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_0__.Ub)(queries.m),l:(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_0__.Ub)(queries.l),xl:(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_0__.Ub)(queries.xl)}}}}]);