"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[8145],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Tn,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,om:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/base-styles/Typography.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_design_system_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",strong:"strong",ul:"ul",li:"li"},(0,_home_runner_work_design_system_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Style/Typography"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"typography",children:"Typography"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"setting-a-typography-context",children:"Setting a typography context"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Adding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"nds-typography"})," class to an element enables Narmi typesetting defaults\non child elements:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{isExpanded:!0,mdxSource:'<><div className="nds-typography"><h2>{"Heading inside typography context"}</h2><p>{"Paragraph inside of typography context"}</p></div><h2>{"Heading outside of typography context"}</h2><p>{"Paragraph outside of typography context"}</p></>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"nds-typography",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Heading inside typography context"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Paragraph inside of typography context"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Heading outside of typography context"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Paragraph outside of typography context"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"elements-styled-by-typography-context",children:"Elements styled by typography context"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"nds-typography"})," context targets heading and paragraph elements:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{isExpanded:!0,mdxSource:'<div className="nds-typography"><h1>{"Heading level 1"}</h1><h2>{"Heading level 2"}</h2><h3>{"Heading level 3"}</h3><h4>{"Heading level 4"}</h4><h5>{"Heading level 5"}</h5><h6>{"Heading level 6"}</h6><p>{"Paragraph"}</p></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"nds-typography",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"Heading level 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Heading level 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:"Heading level 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4",{children:"Heading level 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5",{children:"Heading level 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6",{children:"Heading level 6"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Paragraph"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"typesetting-with-helper-classes",children:"Typesetting with helper classes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["This design system also provides ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"?path=/docs/style-helper-classes--using-helper-classes",children:"Helper Classes"}),"\nto tweak style rules of individual elements. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.strong,{children:"These classes will work regardless of context"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Font styles can be modified with classes following these signatures:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"fontFamily--<family>"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"fontSize--<size>"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"fontColor--<color>"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"fontWeight--<weight>"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["📖 For a full list of font helper classes, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"?path=/docs/style-helper-classes--using-helper-classes#font",children:"Helper Class Documentation"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{isExpanded:!0,mdxSource:'<div className="nds-typography"><h3 className="fontColor--azul"><p>{"Heading level 3 inside context with \\"azul\\" color override"}</p></h3><p className="fontSize--xs fontWeight--semibold"><p>{"Paragraph with \\"xs\\" size override and \\"semibold\\" weight override"}</p></p></div><h1 className="fontFamily--heading fontSize--xl fontWeight--bold fontColor--heading"><p>{"Heading outside of typography context; styled with helpers only"}</p></h1>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"nds-typography",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{className:"fontColor--azul",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:'Heading level 3 inside context with "azul" color override'})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"fontSize--xs fontWeight--semibold",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:'Paragraph with "xs" size override and "semibold" weight override'})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{className:"fontFamily--heading fontSize--xl fontWeight--bold fontColor--heading",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Heading outside of typography context; styled with helpers only"})})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Style/Typography",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_design_system_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);