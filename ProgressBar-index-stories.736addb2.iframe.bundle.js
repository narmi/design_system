"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[8038],{"./src/ProgressBar/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProgressBar=_ref=>{let{totalWidth="100%",percentComplete=0}=_ref;return(0,jsx_runtime.jsx)("div",{className:"nds-progressbar",style:{width:"".concat(totalWidth),height:"var(--font-size-default)"},children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("line",{x1:"0%",y1:"50%",x2:"".concat(percentComplete,"%"),y2:"50%",strokeWidth:"100%"})})})};ProgressBar.displayName="ProgressBar",ProgressBar.propTypes={totalWidth:prop_types_default().string,percentComplete:prop_types_default().number.isRequired};const src_ProgressBar=ProgressBar;var _Overview$parameters,_Overview$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}ProgressBar.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{totalWidth:{defaultValue:{value:'"100%"',computed:!1},description:'CSS Value; Total width of progress bar.\n(e.g. "50%" or "200px")',type:{name:"string"},required:!1},percentComplete:{defaultValue:{value:"0",computed:!1},description:"Percent complete",type:{name:"number"},required:!1}}};const Template=args=>(0,jsx_runtime.jsx)(src_ProgressBar,_objectSpread({},args));Template.displayName="Template";const Overview=Template.bind({});Overview.args={percentComplete:25};const index_stories={title:"Components/ProgressBar",component:src_ProgressBar};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ProgressBar {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})});const __namedExportsOrder=["Overview"]}}]);