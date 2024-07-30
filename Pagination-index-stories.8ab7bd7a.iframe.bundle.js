"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[9544],{"./src/Pagination/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullyControlled:()=>FullyControlled,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),classcat=__webpack_require__("./node_modules/classcat/index.js"),Row=__webpack_require__("./src/Row/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var noop=function noop(){},_getAttributes=function _getAttributes(totalPages,selectedPage){var segmentSize=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,pageSegments=_toConsumableArray(new Array(totalPages)).map((function(p,i){return i+1})).reduce((function(segments,page,i){var segmentIndex=Math.floor(i/segmentSize);return segments[segmentIndex]||(segments[segmentIndex]=[]),segments[segmentIndex].push(page),segments}),[]),visiblePages=pageSegments.filter((function(segment){return segment.includes(selectedPage)}))[0]||pageSegments[0],selectedIndex=visiblePages.indexOf(selectedPage),showPrev=!visiblePages.includes(1),showNext=!visiblePages.includes(totalPages),firstPage=!visiblePages.includes(1)&&1,lastPage=!visiblePages.includes(totalPages)&&totalPages;return{visiblePages,selectedIndex:selectedIndex>=0?selectedIndex:0,firstPage,lastPage,showPrev,showNext}},Pagination=function Pagination(_ref){var _ref$onPageChange=_ref.onPageChange,onPageChange=void 0===_ref$onPageChange?noop:_ref$onPageChange,_ref$totalPages=_ref.totalPages,totalPages=void 0===_ref$totalPages?1:_ref$totalPages,_ref$defaultSelectedP=_ref.defaultSelectedPage,defaultSelectedPage=void 0===_ref$defaultSelectedP?1:_ref$defaultSelectedP,selectedPageControlled=_ref.selectedPage,testId=_ref.testId,isControlled=void 0!==selectedPageControlled,_useState2=_slicedToArray((0,react.useState)(defaultSelectedPage),2),selectedPage=_useState2[0],setSelectedPage=_useState2[1],_useState4=_slicedToArray((0,react.useState)(_getAttributes(totalPages,selectedPage)),2),paginationAttributes=_useState4[0],setPaginationAttributes=_useState4[1];(0,react.useEffect)((function(){isControlled?(setSelectedPage(totalPages<selectedPageControlled?1:selectedPageControlled),setPaginationAttributes(_getAttributes(totalPages,selectedPageControlled))):setPaginationAttributes(_getAttributes(totalPages,selectedPage))}),[totalPages,selectedPageControlled,selectedPage]);var visiblePages=paginationAttributes.visiblePages,selectedIndex=paginationAttributes.selectedIndex,showPrev=paginationAttributes.showPrev,showNext=paginationAttributes.showNext,firstPage=paginationAttributes.firstPage,lastPage=paginationAttributes.lastPage,handlePageClick=function handlePageClick(_ref2){var target=_ref2.target,page=parseInt(target.dataset.page,10);isControlled||setSelectedPage(page),onPageChange(page)},handlePrevClick=function handlePrevClick(){var newSelectedPage=selectedPage-1;isControlled||setSelectedPage(newSelectedPage),onPageChange(newSelectedPage)},handleNextClick=function handleNextClick(){var newSelectedPage=selectedPage+1;isControlled||setSelectedPage(newSelectedPage),onPageChange(newSelectedPage)},pagination=(0,jsx_runtime.jsx)("div",{className:"nds-typography nds-pagination","data-testid":testId,children:(0,jsx_runtime.jsx)("nav",{"aria-label":"pagination",children:(0,jsx_runtime.jsxs)(Row.A,{gapSize:"xxs",alignItems:"center",as:"ul",children:[(0,jsx_runtime.jsx)(Row.A.Item,{as:"li",shrink:!0,children:(0,jsx_runtime.jsx)("span",{role:"button",tabIndex:0,"aria-disabled":!showPrev,"aria-label":"Previous page",onClick:handlePrevClick,onKeyUp:function onKeyUp(_ref3){"Enter"===_ref3.key&&handlePrevClick()},className:(0,classcat.A)(["nds-pagination-page","padding--none",{"nds-pagination-page--disabled":!showPrev}]),children:(0,jsx_runtime.jsx)("i",{role:"img",className:"narmi-icon-chevron-left fontSize--l"})})}),firstPage&&(0,jsx_runtime.jsx)(Row.A.Item,{as:"li",shrink:!0,children:(0,jsx_runtime.jsx)("span",{role:"button",tabIndex:0,"aria-label":"First page",onClick:handlePageClick,onKeyUp:function onKeyUp(e){"Enter"===e.key&&handlePageClick(e)},"data-page":firstPage,className:"nds-pagination-page",children:firstPage.toString()})}),firstPage&&(0,jsx_runtime.jsx)(Row.A.Item,{as:"li",shrink:!0,children:(0,jsx_runtime.jsx)("div",{className:"nds-pagination-ellipsis",children:"…"})}),visiblePages.map((function(page,i){return(0,jsx_runtime.jsx)(Row.A.Item,{as:"li",shrink:!0,children:(0,jsx_runtime.jsx)("span",{role:"button",tabIndex:0,className:(0,classcat.A)(["nds-pagination-page",{"nds-pagination-page--selected":i===selectedIndex}]),"data-page":page,onClick:handlePageClick,onKeyUp:function onKeyUp(e){"Enter"===e.key&&handlePageClick(e)},"aria-label":"Page ".concat(page),"aria-current":i===selectedIndex&&"page",children:page.toString()})},page)})),lastPage&&(0,jsx_runtime.jsx)(Row.A.Item,{as:"li",shrink:!0,children:(0,jsx_runtime.jsx)("div",{className:"nds-pagination-ellipsis",children:"…"})}),lastPage&&(0,jsx_runtime.jsx)(Row.A.Item,{as:"li",shrink:!0,children:(0,jsx_runtime.jsx)("span",{role:"button",tabIndex:0,"aria-label":"Last page",onClick:handlePageClick,onKeyUp:function onKeyUp(e){"Enter"===e.key&&handlePageClick(e)},"data-page":lastPage,className:"nds-pagination-page",children:lastPage.toString()})}),(0,jsx_runtime.jsx)(Row.A.Item,{as:"li",shrink:!0,children:(0,jsx_runtime.jsx)("span",{role:"button",tabIndex:0,"aria-disabled":!showNext,"aria-label":"Next page",onClick:handleNextClick,onKeyUp:function onKeyUp(_ref4){"Enter"===_ref4.key&&handleNextClick()},className:(0,classcat.A)(["nds-pagination-page","padding--none",{"nds-pagination-page--disabled":!showNext}]),children:(0,jsx_runtime.jsx)("i",{role:"img",className:"narmi-icon-chevron-right fontSize--l"})})})]})})});return totalPages>1?pagination:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})};Pagination.propTypes={totalPages:prop_types_default().number.isRequired,defaultSelectedPage:prop_types_default().number,selectedPage:prop_types_default().number,onPageChange:prop_types_default().func,testId:prop_types_default().string},Pagination.__docgenInfo={description:"Component that allows users to navigate between pages of information.\nYour application is responsible for setting the total number of pages and\nresponding to the `onPageChange` callback.\n\nThe component will handle which page numbers to render, next and previous arrows,\nand conditionally rendering first and last pages.\n\nIf your pagination setup expectes a fully controlled component, you may set `defaultSelectedPage` on every `onPageChange` call.",methods:[],displayName:"Pagination",props:{onPageChange:{defaultValue:{value:"() => {}",computed:!1},description:"Callback invoked when user selects a new page via page numbers or\nprevious/next arrows.\n\nInvoked with selected page number as the argument.",type:{name:"func"},required:!1},totalPages:{defaultValue:{value:"1",computed:!1},description:"Total number of pages\nIf the number of pages is 1, pagination will not render",type:{name:"number"},required:!1},defaultSelectedPage:{defaultValue:{value:"1",computed:!1},description:"Default selected page by page number (uncontrolled)",type:{name:"number"},required:!1},selectedPage:{description:"Selected page by page number (controlled).\nIn fully controlled mode, you **must** define an `onPageChange`\nhandler to update the value of the `selectedPage` prop.",type:{name:"number"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const src_Pagination=Pagination;var _Overview$parameters,_Overview$parameters2,_FullyControlled$para,_FullyControlled$para2;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function index_stories_slicedToArray(arr,i){return function index_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function index_stories_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function index_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return index_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_stories_arrayLikeToArray(o,minLen)}(arr,i)||function index_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Template=function Template(args){return(0,jsx_runtime.jsx)(src_Pagination,_objectSpread({},args))};Template.displayName="Template";var Overview=Template.bind({});Overview.args={totalPages:40,defaultSelectedPage:3};var FullyControlled=function FullyControlled(){var _useState2=index_stories_slicedToArray((0,react.useState)(1),2),selectedPage=_useState2[0],setSelectedPage=_useState2[1],_useState4=index_stories_slicedToArray((0,react.useState)(40),2),totalPages=_useState4[0],setTotalPages=_useState4[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src_Pagination,{totalPages,selectedPage,onPageChange:function handlePageChange(page){setSelectedPage(parseInt(page,10))}}),(0,jsx_runtime.jsxs)("div",{className:"padding--all border--top margin--top",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"totalPages",children:"Total pages"}),(0,jsx_runtime.jsxs)("select",{className:"margin--left",id:"totalPages",onChange:function onChange(e){return setTotalPages(parseInt(e.target.value),10)},children:[(0,jsx_runtime.jsx)("option",{value:"1",children:"1"}),(0,jsx_runtime.jsx)("option",{value:"3",children:"3"}),(0,jsx_runtime.jsx)("option",{value:"25",children:"25"}),(0,jsx_runtime.jsx)("option",{value:"40",selected:!0,children:"40"})]})]})]})};const index_stories={title:"Components/Pagination",component:src_Pagination};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Pagination {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),FullyControlled.parameters=_objectSpread(_objectSpread({},FullyControlled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FullyControlled$para=FullyControlled.parameters)||void 0===_FullyControlled$para?void 0:_FullyControlled$para.docs),{},{source:_objectSpread({originalSource:'() => {\n  const [selectedPage, setSelectedPage] = useState(1);\n  const [totalPages, setTotalPages] = useState(40);\n  const handlePageChange = page => {\n    setSelectedPage(parseInt(page, 10));\n  };\n  return <>\n      <Pagination totalPages={totalPages} selectedPage={selectedPage} onPageChange={handlePageChange} />\n      <div className="padding--all border--top margin--top">\n        <label htmlFor="totalPages">Total pages</label>\n        <select className="margin--left" id="totalPages" onChange={e => setTotalPages(parseInt(e.target.value), 10)}>\n          <option value="1">1</option>\n          <option value="3">3</option>\n          <option value="25">25</option>\n          <option value="40" selected>\n            40\n          </option>\n        </select>\n      </div>\n    </>;\n}'},null===(_FullyControlled$para2=FullyControlled.parameters)||void 0===_FullyControlled$para2||null===(_FullyControlled$para2=_FullyControlled$para2.docs)||void 0===_FullyControlled$para2?void 0:_FullyControlled$para2.source)})});var __namedExportsOrder=["Overview","FullyControlled"];FullyControlled.__docgenInfo={description:"",methods:[],displayName:"FullyControlled"}},"./src/Row/RowItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),RowItem=function RowItem(_ref){var _ref$shrink=_ref.shrink,shrink=void 0!==_ref$shrink&&_ref$shrink,_ref$as=_ref.as,as=void 0===_ref$as?"div":_ref$as,children=_ref.children,testId=_ref.testId;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId,children})};RowItem.displayName="RowItem",RowItem.propTypes={shrink:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["div","li"]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.",methods:[],displayName:"RowItem",props:{shrink:{defaultValue:{value:"false",computed:!1},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",type:{name:"bool"},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"li"',computed:!1}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=RowItem},"./src/Row/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_getRowStyle=function _getRowStyle(alignItems,justifyContent,gapSize){var result={};return gapSize&&(result.gap="none"===gapSize?"0":"var(--space-".concat(gapSize,")")),result.alignItems="top"===alignItems?"flex-start":alignItems,result.justifyContent="flex-".concat(justifyContent),result},Row=function Row(_ref){var _ref$alignItems=_ref.alignItems,alignItems=void 0===_ref$alignItems?"top":_ref$alignItems,_ref$justifyContent=_ref.justifyContent,justifyContent=void 0===_ref$justifyContent?"start":_ref$justifyContent,_ref$gapSize=_ref.gapSize,gapSize=void 0===_ref$gapSize?"l":_ref$gapSize,_ref$as=_ref.as,as=void 0===_ref$as?"div":_ref$as,children=_ref.children,testId=_ref.testId;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:"nds-row",style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId,children})};Row.displayName="Row",Row.propTypes={gapSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["xxs","xs","s","m","l","xl","none"]),alignItems:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["top","center"]),justifyContent:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["start","end"]),as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["div","ul"]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired,testId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A,Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width of its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.",methods:[],displayName:"Row",props:{alignItems:{defaultValue:{value:'"top"',computed:!1},description:"Controls vertical alignment of items within the row",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"center"',computed:!1}]},required:!1},justifyContent:{defaultValue:{value:'"start"',computed:!1},description:"Controls horizontal flex justification",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1}]},required:!1},gapSize:{defaultValue:{value:'"l"',computed:!1},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',type:{name:"enum",value:[{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"none"',computed:!1}]},required:!1},as:{defaultValue:{value:'"div"',computed:!1},description:"The html element to render as the root node of `Row`",type:{name:"enum",value:[{value:'"div"',computed:!1},{value:'"ul"',computed:!1}]},required:!1},children:{description:"Children must be of type `Row.Item`",type:{name:"arrayOf",value:{name:"node"}},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Row},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js");var react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["elementType","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=function AsElement(_ref){var _ref$elementType=_ref.elementType,elementType=void 0===_ref$elementType?"div":_ref$elementType,children=_ref.children,rest=_objectWithoutProperties(_ref,_excluded);if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_19__.createElement(elementType,rest,children);var Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(Element,_objectSpread(_objectSpread({},rest),{},{children}))};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_21___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_21___default().func,prop_types__WEBPACK_IMPORTED_MODULE_21___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_21___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_21___default().node,prop_types__WEBPACK_IMPORTED_MODULE_21___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_21___default().node)])},AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=AsElement}}]);