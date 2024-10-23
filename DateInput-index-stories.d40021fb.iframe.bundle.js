"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[8902],{"./src/DateInput/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AltInput:()=>AltInput,DisablePortal:()=>DisablePortal,Overview:()=>Overview,WithDefaultDate:()=>WithDefaultDate,WithDisabledDates:()=>WithDisabledDates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),TextInput=__webpack_require__("./src/TextInput/index.js"),l10n_default=__webpack_require__("./node_modules/flatpickr/dist/l10n/default.js"),esm=__webpack_require__("./node_modules/flatpickr/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},DateInput=_ref=>{let{disableDates,minDate,dateFormat,altInput,altFormat,defaultDate,onChange:onChangeProp=noop,useIsoOnChange=!0,disableMobile=!1,testId,disablePortal,...props}=_ref;const input=(0,react.useRef)();l10n_default.english.weekdays.shorthand=l10n_default.english.weekdays.shorthand.map((abbrev=>abbrev.substr(0,2)));const flatpickrOptions={monthSelectorType:"static",locale:l10n_default.english,allowInput:!0,dateFormat,minDate,altInput,altFormat,disableMobile,disable:disableDates,defaultDate,onChange:flatpickrVal=>{let locale=useIsoOnChange?"en-CA":"en-US";const selectedDate=new Date(flatpickrVal);if(isNaN(selectedDate))return;const formattedDate=new Intl.DateTimeFormat(locale).format(selectedDate);onChangeProp(formattedDate)}};return(0,react.useEffect)((()=>{disablePortal&&(flatpickrOptions.static=!0),(0,esm.A)(input.current,flatpickrOptions)}),[flatpickrOptions,input,disablePortal]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TextInput.A,{...props,label:props.label,ref:input,type:"date",required:!0,"data-testid":testId,...props})})};DateInput.propTypes={label:prop_types_default().string.isRequired,onChange:prop_types_default().func,disableDates:prop_types_default().array,minDate:prop_types_default().bool,altFormat:prop_types_default().string,altInput:prop_types_default().bool,defaultDate:prop_types_default().string,dateFormat:prop_types_default().string,useIsoOnChange:prop_types_default().bool,disableMobile:prop_types_default().bool,testId:prop_types_default().string,disablePortal:prop_types_default().bool},DateInput.defaultProps={onChange:()=>{},disableDates:[],dateFormat:"Y-m-d"};const src_DateInput=DateInput;DateInput.__docgenInfo={description:"Single day picker.\nComposes NDS input with a [flatpickr](http://flatpickrjs.org) calendar UI.",methods:[],displayName:"DateInput",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},description:"Fired with 'YYYY-MM-DD' selected date string when selected date changes",type:{name:"func"},required:!1},useIsoOnChange:{defaultValue:{value:"true",computed:!1},description:"If the `onChange` callback should pass the date string in ISO8601 format",type:{name:"bool"},required:!1},disableMobile:{defaultValue:{value:"false",computed:!1},description:"Disable mobile text inputs on mobile web",type:{name:"bool"},required:!1},disableDates:{defaultValue:{value:"[]",computed:!1},description:"Disables dates. See [flatpickr docs](https://flatpickr.js.org/examples/#disabling-dates) for usage instructions",type:{name:"array"},required:!1},dateFormat:{defaultValue:{value:'"Y-m-d"',computed:!1},description:"Changes date format used in input. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options",type:{name:"string"},required:!1},label:{description:"Placeholder of the input",type:{name:"string"},required:!0},minDate:{description:"Sets the minimum selectable date (inclusive)",type:{name:"bool"},required:!1},altFormat:{description:"Alternate date format to show in input when a date is selected (e.g. 'm/d/Y')",type:{name:"string"},required:!1},altInput:{description:"When true, the input value will follow an alternate format defined by the `altFormat` prop",type:{name:"bool"},required:!1},defaultDate:{description:"Sets a default selected date.\nDateInput uses the format 'YYYY-MM-DD' by default.",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},disablePortal:{description:"When true, appends the calendar popup to the parent of the input instead of to document body",type:{name:"bool"},required:!1}}};var Popover=__webpack_require__("./src/Popover/index.js");const toFPString=function(date){let dayOffset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+dayOffset}`},Template=args=>(0,jsx_runtime.jsx)(src_DateInput,{...args});Template.displayName="Template";const Overview=Template.bind({});Overview.args={label:"Date of Birth"};const WithDisabledDates=Template.bind({});WithDisabledDates.args={label:"Select any date (except for today or tomorrow)",disableDates:[toFPString(new Date),toFPString(new Date,1)]};const WithDefaultDate=()=>(0,jsx_runtime.jsx)(src_DateInput,{label:"Select a date",defaultDate:"2021-10-22"});WithDefaultDate.displayName="WithDefaultDate";const AltInput=Template.bind({});AltInput.args={altInput:!0,altFormat:"m/d/Y",label:"Date in input will follow m/d/Y format"},AltInput.parameters={docs:{description:{story:"The `altInput` prop will make the input show a date in an alternate format defined by `altFormat`. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options."}}};const DisablePortal=()=>{const content=(0,jsx_runtime.jsxs)("div",{className:"padding--all",children:[(0,jsx_runtime.jsx)("div",{className:"padding--bottom",children:(0,jsx_runtime.jsx)(src_DateInput,{label:"Start Date",placeholder:"YYYY-MM-DD",disablePortal:!0})}),(0,jsx_runtime.jsx)("div",{className:"padding--bottom",children:(0,jsx_runtime.jsx)(src_DateInput,{label:"End Date",placeholder:"YYYY-MM-DD",disablePortal:!0})})]});return(0,jsx_runtime.jsx)("div",{style:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,jsx_runtime.jsx)(Popover.A,{content,children:(0,jsx_runtime.jsx)("button",{children:"Click to show popover"})})})};DisablePortal.displayName="DisablePortal",DisablePortal.parameters={docs:{description:{story:"By default, `DateInput` appends to the document body. Most of the time, this is fine, but when using inside of another modal that uses 'click outside' behavior, it can be helpful to render the `DateInput` calendar in-place by passing `disablePortal={true}`"}}};const index_stories={title:"Components/DateInput",component:src_DateInput};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"args => <DateInput {...args} />",...Overview.parameters?.docs?.source}}},WithDisabledDates.parameters={...WithDisabledDates.parameters,docs:{...WithDisabledDates.parameters?.docs,source:{originalSource:"args => <DateInput {...args} />",...WithDisabledDates.parameters?.docs?.source}}},WithDefaultDate.parameters={...WithDefaultDate.parameters,docs:{...WithDefaultDate.parameters?.docs,source:{originalSource:'() => {\n  return <DateInput label={"Select a date"} defaultDate="2021-10-22" />;\n}',...WithDefaultDate.parameters?.docs?.source}}},AltInput.parameters={...AltInput.parameters,docs:{...AltInput.parameters?.docs,source:{originalSource:"args => <DateInput {...args} />",...AltInput.parameters?.docs?.source}}},DisablePortal.parameters={...DisablePortal.parameters,docs:{...DisablePortal.parameters?.docs,source:{originalSource:'() => {\n  const content = <div className="padding--all">\n      <div className="padding--bottom">\n        <DateInput label="Start Date" placeholder="YYYY-MM-DD" disablePortal={true} />\n      </div>\n      <div className="padding--bottom">\n        <DateInput label="End Date" placeholder="YYYY-MM-DD" disablePortal={true} />\n      </div>\n    </div>;\n  return <div style={{\n    height: "200px",\n    display: "flex",\n    flexDirection: "column",\n    justifyContent: "center",\n    alignItems: "center"\n  }}>\n      <Popover content={content}>\n        <button>Click to show popover</button>\n      </Popover>\n    </div>;\n}',...DisablePortal.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","WithDisabledDates","WithDefaultDate","AltInput","DisablePortal"]},"./src/Popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react_laag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),react_focus_lock__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},Popover=_ref=>{let{side="bottom",alignment="center",content,children,wrapperDisplay="inline-flex",offset=2,disableAutoPlacement=!1,matchTriggerWidth=!1,testId,closeOnContentClick=!1,isOpen,autoFocus=!1,hasShadow=!0,onUserDismiss=noop,onUserEnable=noop}=_ref;const isControlled=!0===isOpen||!1===isOpen,[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),shouldRenderPopover=isControlled?isOpen:open,popoverContent=closeOnContentClick?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(content,{onClick:()=>{content.onClick&&content.onClick(),setOpen(!1),onUserDismiss()}}):content,closePopover=()=>{setOpen(!1),onUserDismiss()},handleKeyUp=_ref3=>{let{key}=_ref3;"Escape"===key&&shouldRenderPopover&&(setOpen(!1),onUserDismiss())},{renderLayer,triggerProps,triggerBounds,layerProps}=(0,react_laag__WEBPACK_IMPORTED_MODULE_2__.Z4)({isOpen:shouldRenderPopover,onOutsideClick:closePopover,onDisappear:closePopover,auto:!disableAutoPlacement,placement:`${side}-${alignment}`,preferX:"left",preferY:"bottom",container:"undefined"!=typeof document?document.body:void 0,triggerOffset:offset});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(window.addEventListener("keydown",handleKeyUp),()=>{window.removeEventListener("keydown",handleKeyUp)})),[handleKeyUp]);let layerStyle=layerProps.style;return triggerBounds&&matchTriggerWidth&&(layerStyle={width:triggerBounds.width,...layerProps.style}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...triggerProps,style:{display:wrapperDisplay},onClick:event=>{event.stopPropagation(),isControlled?isOpen?onUserDismiss():onUserEnable():setOpen((open=>!open))},onKeyDown:_ref2=>{let{key}=_ref2;"Enter"===key&&(setOpen(!0),onUserEnable())},role:"button",tabIndex:"0","data-testid":"nds-popover-trigger","aria-haspopup":"true","aria-expanded":shouldRenderPopover.toString(),children}),renderLayer((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:shouldRenderPopover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...layerProps,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)(["nds-typography nds-popover","rounded--all bgColor--white",{"nds-popover--elevated":hasShadow}]),style:layerStyle,"data-testid":testId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{tabIndex:-1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_focus_lock__WEBPACK_IMPORTED_MODULE_4__.Ay,{autoFocus,children:popoverContent})})})}))]})};Popover.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired,content:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired,side:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["top","right","bottom","left"]),alignment:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["start","center","end"]),wrapperDisplay:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["inline-flex","inline-block","inline","block","flex"]),offset:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,matchTriggerWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,disableAutoPlacement:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,testId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,closeOnContentClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,onUserDismiss:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onUserEnable:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,autoFocus:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,hasShadow:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool};const __WEBPACK_DEFAULT_EXPORT__=Popover;Popover.__docgenInfo={description:'Generic Popover component. Renders a floating element that can contain any content,\npositioned relatively to its triggering element.\n\nThis Popover only appears on "click" (focus + activate or mouse click) interactions.\nThe Escape key and clicking outside of the Popover will dismiss it.\nFor a hover-based informative popover, use `Tooltip`.\n\nThe popover will position itself based on the `side` prop, but will\nautomatically reposition to avoid collisions with viewport edges.',methods:[],displayName:"Popover",props:{side:{defaultValue:{value:'"bottom"',computed:!1},description:"Sets preferred side of the trigger the tooltip should appear",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"right"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1}]},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},description:"Sets preferred alignment of the tooltip relative to the trigger",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1}]},required:!1},wrapperDisplay:{defaultValue:{value:'"inline-flex"',computed:!1},description:"CSS `display` value for the element that wraps the Tooltip children",type:{name:"enum",value:[{value:'"inline-flex"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"flex"',computed:!1}]},required:!1},offset:{defaultValue:{value:"2",computed:!1},description:"Distance of Popover from trigger element in number of pixels",type:{name:"number"},required:!1},disableAutoPlacement:{defaultValue:{value:"false",computed:!1},description:"By default, the Popover will automatically reposition itself to avoid viewport edges.\nSetting this prop to `true` will disable this behavior so that the Popover will\nalways be placed on the given `side` prop.",type:{name:"bool"},required:!1},matchTriggerWidth:{defaultValue:{value:"false",computed:!1},description:"When `true`, the Popover container will match the width of its triggering element",type:{name:"bool"},required:!1},closeOnContentClick:{defaultValue:{value:"false",computed:!1},description:"Close the popover if the User clicks on the content",type:{name:"bool"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"When set to `true`, the first focusable element will automatically receive focus\nwhenever the popover opens",type:{name:"bool"},required:!1},hasShadow:{defaultValue:{value:"true",computed:!1},description:"When set to `false` the popover positioned element will not have a box shadow.\nUseful for adding a custom box shadow.",type:{name:"bool"},required:!1},onUserDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to __dismiss__ the popover\n(click outside, Escape key)",type:{name:"func"},required:!1},onUserEnable:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to handle user taking an action to __enable__ the popover\n(click or key interaction on the trigger button rendered in Popover)",type:{name:"func"},required:!1},children:{description:"The root node of JSX passed into Tooltip as children will act as the tooltip trigger",type:{name:"node"},required:!0},content:{description:"Content of popover",type:{name:"node"},required:!0},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},isOpen:{description:"If isOpen is set the component becomes a controlled component. Use the `onUserDismiss` callback to update.",type:{name:"bool"},required:!1}}}},"./src/util/AsElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VALID_ELEMENTS=["span","div","ul","ol","li","p","nav","article","section","h1","h2","h3","h4","h5","h6","button","a"],AsElement=_ref=>{let{elementType="div",children,...rest}=_ref;if("function"==typeof elementType||"function"==typeof elementType.type)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(elementType,rest,children);let Element="div";return VALID_ELEMENTS.includes(elementType)&&(Element=elementType),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,{...rest,children})};AsElement.displayName="AsElement",AsElement.propTypes={elementType:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(VALID_ELEMENTS)]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=AsElement;AsElement.__docgenInfo={description:'Utility to conditionally render different HTML elements\nin our components. Useful for exposing `as` props:\n\n`<Row as="ul"><Row.Item as="li" /></Row>\n\n@usage <AsElement elementName="ul" otherProp="this gets passed through">',methods:[],displayName:"AsElement",props:{elementType:{defaultValue:{value:'"div"',computed:!1},description:"element to render",type:{name:"union",value:[{name:"func"},{name:"enum",value:[{value:'"span"',computed:!1},{value:'"div"',computed:!1},{value:'"ul"',computed:!1},{value:'"ol"',computed:!1},{value:'"li"',computed:!1},{value:'"p"',computed:!1},{value:'"nav"',computed:!1},{value:'"article"',computed:!1},{value:'"section"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1},{value:'"button"',computed:!1},{value:'"a"',computed:!1}]}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}}}]);