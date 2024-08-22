"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[1489],{"./src/LoadingShim/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Overview$parameters,_Overview$parameters2,___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/LoadingShim/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});Template.displayName="Template";const Overview=Template.bind({});Overview.args={isLoading:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"nds-typography",style:{outline:"1px dashed hotpink"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"This area has a LoadingShim wrapper"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{children:["Toggle the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"isLoading"})," prop below to see the shim appear."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"})]})};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/LoadingShim",component:___WEBPACK_IMPORTED_MODULE_1__.A};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <LoadingShim {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}};const __namedExportsOrder=["Overview"]},"./src/LoadingShim/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LoadingShim=_ref=>{let{isLoading=!1,children,testId,size="l"}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{"data-testid":testId||"nds-loadingshim","aria-live":"polite","aria-busy":isLoading.toString(),style:{position:"relative"},children:[isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)(["nds-loadingShim",{"nds-loadingShim--small":"s"===size}]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{title:"Loading...",role:"img",className:"nds-loadingShim-indicator",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:" "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:" "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:" "})]})}),children]})};LoadingShim.displayName="LoadingShim",LoadingShim.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,isLoading:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["s","l"])},LoadingShim.__docgenInfo={description:"Used to wrap a block of loadable content. When `isLoading` is set to true,\nthe content area will have an overlay and loading animation.",methods:[],displayName:"LoadingShim",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"When `true`, the loading shim appears over child content",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"l"',computed:!1},description:"Size of the loading indicator",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"l"',computed:!1}]},required:!1},children:{description:"Loadable content area - will render normally unless `isLoading` is true",type:{name:"node"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=LoadingShim},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);