"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[4910],{"./src/hooks/useBreakpoints/index.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useBreakpoints/index.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Overview=()=>{const{s,m,l,xl}=(0,___WEBPACK_IMPORTED_MODULE_1__.A)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{className:"fontColor--heading fontFamily--heading margin--bottom--l",children:"Resize your browser"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul",{className:"list--reset padding--all rounded--all bgColor--blueGrey fontColor--azul fontSize--l",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"s or larger: "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{className:"fontColor--"+(s?"success":"error"),children:s.toString()})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"m or larger: "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{className:"fontColor--"+(m?"success":"error"),children:m.toString()})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"l or larger: "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{className:"fontColor--"+(l?"success":"error"),children:l.toString()})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"xl or larger: "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{className:"fontColor--"+(xl?"success":"error"),children:xl.toString()})]})]})]})},__WEBPACK_DEFAULT_EXPORT__={title:"Hooks/useBreakpoints"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'() => {\n  const {\n    s,\n    m,\n    l,\n    xl\n  } = useBreakpoints();\n  return <>\n      <h1 className="fontColor--heading fontFamily--heading margin--bottom--l">\n        Resize your browser\n      </h1>\n      <ul className="list--reset padding--all rounded--all bgColor--blueGrey fontColor--azul fontSize--l">\n        <li>\n          <code>s or larger:&nbsp;</code>\n          <code className={`fontColor--${s ? "success" : "error"}`}>\n            {s.toString()}\n          </code>\n        </li>\n        <li>\n          <code>m or larger:&nbsp;</code>\n          <code className={`fontColor--${m ? "success" : "error"}`}>\n            {m.toString()}\n          </code>\n        </li>\n        <li>\n          <code>l or larger:&nbsp;</code>\n          <code className={`fontColor--${l ? "success" : "error"}`}>\n            {l.toString()}\n          </code>\n        </li>\n        <li>\n          <code>xl or larger:&nbsp;</code>\n          <code className={`fontColor--${xl ? "success" : "error"}`}>\n            {xl.toString()}\n          </code>\n        </li>\n      </ul>\n    </>;\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"./src/hooks/useBreakpoints/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var usehooks_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/usehooks-ts/dist/esm/index.js");const MQ_MAP_s="480px",MQ_MAP_m="768px",MQ_MAP_l="1280px",MQ_MAP_xl="1440px",getMq=size=>`(min-width: ${size})`,__WEBPACK_DEFAULT_EXPORT__=function(){let queries=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{s:getMq(MQ_MAP_s),m:getMq(MQ_MAP_m),l:getMq(MQ_MAP_l),xl:getMq(MQ_MAP_xl)};return{s:(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_0__.Ub)(queries.s),m:(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_0__.Ub)(queries.m),l:(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_0__.Ub)(queries.l),xl:(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_0__.Ub)(queries.xl)}}}}]);