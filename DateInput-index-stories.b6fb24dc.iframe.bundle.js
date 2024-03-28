"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[79],{"./src/DateInput/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AltInput:()=>AltInput,DisablePortal:()=>DisablePortal,Overview:()=>Overview,WithDefaultDate:()=>WithDefaultDate,WithDisabledDates:()=>WithDisabledDates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),TextInput=__webpack_require__("./src/TextInput/index.js"),l10n_default=__webpack_require__("./node_modules/flatpickr/dist/l10n/default.js"),esm=__webpack_require__("./node_modules/flatpickr/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["disableDates","minDate","dateFormat","altInput","altFormat","defaultDate","onChange","useIsoOnChange","disableMobile","testId","disablePortal"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var noop=function noop(){},DateInput=function DateInput(_ref){var disableDates=_ref.disableDates,minDate=_ref.minDate,dateFormat=_ref.dateFormat,altInput=_ref.altInput,altFormat=_ref.altFormat,defaultDate=_ref.defaultDate,_ref$onChange=_ref.onChange,onChangeProp=void 0===_ref$onChange?noop:_ref$onChange,_ref$useIsoOnChange=_ref.useIsoOnChange,useIsoOnChange=void 0===_ref$useIsoOnChange||_ref$useIsoOnChange,_ref$disableMobile=_ref.disableMobile,disableMobile=void 0!==_ref$disableMobile&&_ref$disableMobile,testId=_ref.testId,disablePortal=_ref.disablePortal,props=_objectWithoutProperties(_ref,_excluded),input=(0,react.useRef)();l10n_default.english.weekdays.shorthand=l10n_default.english.weekdays.shorthand.map((function(abbrev){return abbrev.substr(0,2)}));var flatpickrOptions={monthSelectorType:"static",locale:l10n_default.english,allowInput:!0,dateFormat,minDate,altInput,altFormat,disableMobile,disable:disableDates,defaultDate,onChange:function onChange(flatpickrVal){var locale=useIsoOnChange?"en-CA":"en-US",selectedDate=new Date(flatpickrVal);if(!isNaN(selectedDate)){var formattedDate=new Intl.DateTimeFormat(locale).format(selectedDate);onChangeProp(formattedDate)}}};return(0,react.useEffect)((function(){disablePortal&&(flatpickrOptions.static=!0),(0,esm.Z)(input.current,flatpickrOptions)}),[flatpickrOptions,input,disablePortal]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TextInput.Z,_objectSpread(_objectSpread({},props),{},{label:props.label,ref:input,type:"date",required:!0,"data-testid":testId},props))})};DateInput.propTypes={label:prop_types_default().string.isRequired,onChange:prop_types_default().func,disableDates:prop_types_default().array,minDate:prop_types_default().bool,altFormat:prop_types_default().string,altInput:prop_types_default().bool,defaultDate:prop_types_default().string,dateFormat:prop_types_default().string,useIsoOnChange:prop_types_default().bool,disableMobile:prop_types_default().bool,testId:prop_types_default().string,disablePortal:prop_types_default().bool},DateInput.defaultProps={onChange:function onChange(){},disableDates:[],dateFormat:"Y-m-d"},DateInput.__docgenInfo={description:"Single day picker.\nComposes NDS input with a [flatpickr](http://flatpickrjs.org) calendar UI.",methods:[],displayName:"DateInput",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},description:"Fired with 'YYYY-MM-DD' selected date string when selected date changes",type:{name:"func"},required:!1},useIsoOnChange:{defaultValue:{value:"true",computed:!1},description:"If the `onChange` callback should pass the date string in ISO8601 format",type:{name:"bool"},required:!1},disableMobile:{defaultValue:{value:"false",computed:!1},description:"Disable mobile text inputs on mobile web",type:{name:"bool"},required:!1},disableDates:{defaultValue:{value:"[]",computed:!1},description:"Disables dates. See [flatpickr docs](https://flatpickr.js.org/examples/#disabling-dates) for usage instructions",type:{name:"array"},required:!1},dateFormat:{defaultValue:{value:'"Y-m-d"',computed:!1},description:"Changes date format used in input. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options",type:{name:"string"},required:!1},label:{description:"Placeholder of the input",type:{name:"string"},required:!0},minDate:{description:"Sets the minimum selectable date (inclusive)",type:{name:"bool"},required:!1},altFormat:{description:"Alternate date format to show in input when a date is selected (e.g. 'm/d/Y')",type:{name:"string"},required:!1},altInput:{description:"When true, the input value will follow an alternate format defined by the `altFormat` prop",type:{name:"bool"},required:!1},defaultDate:{description:"Sets a default selected date.\nDateInput uses the format 'YYYY-MM-DD' by default.",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},disablePortal:{description:"When true, appends the calendar popup to the parent of the input instead of to document body",type:{name:"bool"},required:!1}}};const src_DateInput=DateInput;var _Overview$parameters,_Overview$parameters2,_WithDisabledDates$pa,_WithDisabledDates$pa2,_WithDefaultDate$para,_WithDefaultDate$para2,_AltInput$parameters,_AltInput$parameters2,_DisablePortal$parame,_DisablePortal$parame2,Popover=__webpack_require__("./src/Popover/index.js");function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(arg){var key=function index_stories_toPrimitive(input,hint){if("object"!==index_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==index_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===index_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var toFPString=function toFPString(date){var dayOffset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"".concat(date.getFullYear(),"-").concat(date.getMonth()+1,"-").concat(date.getDate()+dayOffset)},Template=function Template(args){return(0,jsx_runtime.jsx)(src_DateInput,index_stories_objectSpread({},args))};Template.displayName="Template";var Overview=Template.bind({});Overview.args={label:"Date of Birth"};var WithDisabledDates=Template.bind({});WithDisabledDates.args={label:"Select any date (except for today or tomorrow)",disableDates:[toFPString(new Date),toFPString(new Date,1)]};var WithDefaultDate=function WithDefaultDate(){return(0,jsx_runtime.jsx)(src_DateInput,{label:"Select a date",defaultDate:"2021-10-22"})};WithDefaultDate.displayName="WithDefaultDate";var AltInput=Template.bind({});AltInput.args={altInput:!0,altFormat:"m/d/Y",label:"Date in input will follow m/d/Y format"},AltInput.parameters={docs:{description:{story:"The `altInput` prop will make the input show a date in an alternat format defined by `altFormat`. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options."}}};var DisablePortal=function DisablePortal(){var content=(0,jsx_runtime.jsxs)("div",{className:"padding--all",children:[(0,jsx_runtime.jsx)("div",{className:"padding--bottom",children:(0,jsx_runtime.jsx)(src_DateInput,{label:"Start Date",placeholder:"YYYY-MM-DD",disablePortal:!0})}),(0,jsx_runtime.jsx)("div",{className:"padding--bottom",children:(0,jsx_runtime.jsx)(src_DateInput,{label:"End Date",placeholder:"YYYY-MM-DD",disablePortal:!0})})]});return(0,jsx_runtime.jsx)("div",{style:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,jsx_runtime.jsx)(Popover.Z,{content,children:(0,jsx_runtime.jsx)("button",{children:"Click to show popover"})})})};DisablePortal.displayName="DisablePortal",DisablePortal.parameters={docs:{description:{story:"By default, `DateInput` appends to the document body. Most of the time, this is fine, but when using inside of another modal that uses 'click outside' behavior, it can be helpful to render the `DateInput` calendar in-place by passing `disablePortal={true}`"}}};const index_stories={title:"Components/DateInput",component:src_DateInput};Overview.parameters=index_stories_objectSpread(index_stories_objectSpread({},Overview.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:index_stories_objectSpread({originalSource:"args => <DateInput {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),WithDisabledDates.parameters=index_stories_objectSpread(index_stories_objectSpread({},WithDisabledDates.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_WithDisabledDates$pa=WithDisabledDates.parameters)||void 0===_WithDisabledDates$pa?void 0:_WithDisabledDates$pa.docs),{},{source:index_stories_objectSpread({originalSource:"args => <DateInput {...args} />"},null===(_WithDisabledDates$pa2=WithDisabledDates.parameters)||void 0===_WithDisabledDates$pa2||null===(_WithDisabledDates$pa2=_WithDisabledDates$pa2.docs)||void 0===_WithDisabledDates$pa2?void 0:_WithDisabledDates$pa2.source)})}),WithDefaultDate.parameters=index_stories_objectSpread(index_stories_objectSpread({},WithDefaultDate.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_WithDefaultDate$para=WithDefaultDate.parameters)||void 0===_WithDefaultDate$para?void 0:_WithDefaultDate$para.docs),{},{source:index_stories_objectSpread({originalSource:'() => {\n  return <DateInput label={"Select a date"} defaultDate="2021-10-22" />;\n}'},null===(_WithDefaultDate$para2=WithDefaultDate.parameters)||void 0===_WithDefaultDate$para2||null===(_WithDefaultDate$para2=_WithDefaultDate$para2.docs)||void 0===_WithDefaultDate$para2?void 0:_WithDefaultDate$para2.source)})}),AltInput.parameters=index_stories_objectSpread(index_stories_objectSpread({},AltInput.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_AltInput$parameters=AltInput.parameters)||void 0===_AltInput$parameters?void 0:_AltInput$parameters.docs),{},{source:index_stories_objectSpread({originalSource:"args => <DateInput {...args} />"},null===(_AltInput$parameters2=AltInput.parameters)||void 0===_AltInput$parameters2||null===(_AltInput$parameters2=_AltInput$parameters2.docs)||void 0===_AltInput$parameters2?void 0:_AltInput$parameters2.source)})}),DisablePortal.parameters=index_stories_objectSpread(index_stories_objectSpread({},DisablePortal.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_DisablePortal$parame=DisablePortal.parameters)||void 0===_DisablePortal$parame?void 0:_DisablePortal$parame.docs),{},{source:index_stories_objectSpread({originalSource:'() => {\n  const content = <div className="padding--all">\n      <div className="padding--bottom">\n        <DateInput label="Start Date" placeholder="YYYY-MM-DD" disablePortal={true} />\n      </div>\n      <div className="padding--bottom">\n        <DateInput label="End Date" placeholder="YYYY-MM-DD" disablePortal={true} />\n      </div>\n    </div>;\n  return <div style={{\n    height: "200px",\n    display: "flex",\n    flexDirection: "column",\n    justifyContent: "center",\n    alignItems: "center"\n  }}>\n      <Popover content={content}>\n        <button>Click to show popover</button>\n      </Popover>\n    </div>;\n}'},null===(_DisablePortal$parame2=DisablePortal.parameters)||void 0===_DisablePortal$parame2||null===(_DisablePortal$parame2=_DisablePortal$parame2.docs)||void 0===_DisablePortal$parame2?void 0:_DisablePortal$parame2.source)})});var __namedExportsOrder=["Overview","WithDisabledDates","WithDefaultDate","AltInput","DisablePortal"];WithDefaultDate.__docgenInfo={description:"",methods:[],displayName:"WithDefaultDate"},DisablePortal.__docgenInfo={description:"",methods:[],displayName:"DisablePortal"}},"./src/Popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js");var react__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_27___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_27__),react_laag__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),lodash__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_23___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_23__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Popover=function Popover(_ref){var _ref$side=_ref.side,side=void 0===_ref$side?"bottom":_ref$side,_ref$alignment=_ref.alignment,alignment=void 0===_ref$alignment?"center":_ref$alignment,content=_ref.content,children=_ref.children,_ref$wrapperDisplay=_ref.wrapperDisplay,wrapperDisplay=void 0===_ref$wrapperDisplay?"inline-flex":_ref$wrapperDisplay,_ref$offset=_ref.offset,offset=void 0===_ref$offset?2:_ref$offset,_ref$disableAutoPlace=_ref.disableAutoPlacement,disableAutoPlacement=void 0!==_ref$disableAutoPlace&&_ref$disableAutoPlace,_ref$matchTriggerWidt=_ref.matchTriggerWidth,matchTriggerWidth=void 0!==_ref$matchTriggerWidt&&_ref$matchTriggerWidt,testId=_ref.testId,_ref$closeOnContentCl=_ref.closeOnContentClick,closeOnContentClick=void 0!==_ref$closeOnContentCl&&_ref$closeOnContentCl,isOpen=_ref.isOpen,_ref$onUserDismiss=_ref.onUserDismiss,onUserDismiss=void 0===_ref$onUserDismiss?lodash__WEBPACK_IMPORTED_MODULE_23___default():_ref$onUserDismiss,isControlled=!0===isOpen||!1===isOpen,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1],shouldRenderPopover=isControlled?isOpen:open,popoverContent=closeOnContentClick?react__WEBPACK_IMPORTED_MODULE_22__.cloneElement(content,{onClick:function onClick(){content.onClick&&content.onClick(),setOpen(!1),onUserDismiss()}}):content,closePopover=function closePopover(){setOpen(!1),onUserDismiss()},handleKeyUp=function handleKeyUp(_ref3){"Escape"===_ref3.key&&shouldRenderPopover&&(setOpen(!1),onUserDismiss())},_useLayer=(0,react_laag__WEBPACK_IMPORTED_MODULE_25__.sJ)({isOpen:shouldRenderPopover,onOutsideClick:closePopover,onDisappear:closePopover,auto:!disableAutoPlacement,placement:"".concat(side,"-").concat(alignment),preferX:"left",preferY:"bottom",container:"undefined"!=typeof document?document.body:void 0,triggerOffset:offset}),renderLayer=_useLayer.renderLayer,triggerProps=_useLayer.triggerProps,triggerBounds=_useLayer.triggerBounds,layerProps=_useLayer.layerProps;(0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)((function(){return window.addEventListener("keydown",handleKeyUp),function(){window.removeEventListener("keydown",handleKeyUp)}}),[handleKeyUp]);var layerStyle=layerProps.style;return triggerBounds&&matchTriggerWidth&&(layerStyle=_objectSpread({width:triggerBounds.width},layerProps.style)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div",_objectSpread(_objectSpread({},triggerProps),{},{style:{display:wrapperDisplay},onClick:function togglePopover(event){event.stopPropagation(),setOpen(!open)},onKeyDown:function handleKeyDown(_ref2){"Enter"===_ref2.key&&setOpen(!0)},role:"button",tabIndex:"0","data-testid":"nds-popover-trigger","aria-haspopup":"true","aria-expanded":shouldRenderPopover.toString(),children})),renderLayer((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.Fragment,{children:shouldRenderPopover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div",_objectSpread(_objectSpread({},layerProps),{},{className:"nds-typography nds-popover rounded--all bgColor--white",style:layerStyle,"data-testid":testId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div",{tabIndex:-1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(react_focus_lock__WEBPACK_IMPORTED_MODULE_26__.ZP,{autoFocus:!1,children:popoverContent})})}))}))]})};Popover.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_27___default().node.isRequired,content:prop_types__WEBPACK_IMPORTED_MODULE_27___default().node.isRequired,side:prop_types__WEBPACK_IMPORTED_MODULE_27___default().oneOf(["top","right","bottom","left"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_27___default().oneOf(["start","center","end"]),wrapperDisplay:prop_types__WEBPACK_IMPORTED_MODULE_27___default().oneOf(["inline-flex","inline-block","inline","block","flex"]),offset:prop_types__WEBPACK_IMPORTED_MODULE_27___default().number,matchTriggerWidth:prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool,disableAutoPlacement:prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_27___default().string,closeOnContentClick:prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_27___default().func},Popover.__docgenInfo={description:'Generic Popover component. Renders a floating element that can contain any content,\npositioned relatively to its triggering element.\n\nThis Popover only appears on "click" (focus + activate or mouse click) interactions.\nThe Escape key and clicking outside of the Popover will dismiss it.\nFor a hover-based informative popover, use `Tooltip`.\n\nThe popover will position itself based on the `side` prop, but will\nautomatically reposition to avoid collisions with viewport edges.',methods:[],displayName:"Popover",props:{side:{defaultValue:{value:'"bottom"',computed:!1},description:"Sets prefferred side of the trigger the tooltip should appear",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"right"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},description:"Sets preferred alignment of the tooltip relative to the trigger",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1}]},required:!1},wrapperDisplay:{defaultValue:{value:'"inline-flex"',computed:!1},description:"CSS `display` value for the element that wraps the Tooltip children",type:{name:"enum",value:[{value:'"inline-flex"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"flex"',computed:!1}]},required:!1},offset:{defaultValue:{value:"2",computed:!1},description:"Distance of Popover from trigger element in number of pixels",type:{name:"number"},required:!1},disableAutoPlacement:{defaultValue:{value:"false",computed:!1},description:"By default, the Popover will automatically reposition itself to avoid viewport edges.\nSetting this prop to `true` will disable this behavior so that the Popover will\nalways be placed on the given `side` prop.",type:{name:"bool"},required:!1},matchTriggerWidth:{defaultValue:{value:"false",computed:!1},description:"When `true`, the Popover container will match the width of its triggering element",type:{name:"bool"},required:!1},closeOnContentClick:{defaultValue:{value:"false",computed:!1},description:"Close the popover if the User clicks on the content",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"noop",computed:!0},description:"Callback to handle user taking an action to dismiss the popover\n(click outside, Escape key)",type:{name:"func"},required:!1},children:{description:"The root node of JSX passed into Tooltip as children will act as the tooltip trigger",type:{name:"node"},required:!0},content:{description:"Content of popover",type:{name:"node"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},isOpen:{description:"If isOpen is set the component becomes a controlled component. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Popover}}]);