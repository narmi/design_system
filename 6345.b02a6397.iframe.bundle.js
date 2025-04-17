"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[6345],{"./src/DropdownTrigger/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),_Error__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Error/index.js");const _excluded=["isOpen","showOpenIndicator","disabled","labelText","labelProps","displayValue","errorText","minWidth","testId","startContent","endContent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DropdownTrigger=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{isOpen=!1,showOpenIndicator=!0,disabled=!1,labelText,labelProps,displayValue,errorText,minWidth="auto",testId,startContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),endContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)}=_ref,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"nds-dropdownTrigger",style:{minWidth}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({disabled,ref,"data-testid":testId||"dropdownTriggerButton",className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)(["nds-dropdownTrigger-button button--reset","padding--x--s rounded--all",{"nds-dropdownTrigger-button--hasValue":Boolean(displayValue),"nds-dropdownTrigger-button--hasError":Boolean(errorText),"nds-dropdownTrigger-button--isActive":isOpen,"nds-dropdownTrigger-button--disabled":disabled}]),"aria-expanded":isOpen?"true":"false",type:"button"},otherProps),startContent,labelText&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_extends({className:"nds-dropdownTrigger-label"},labelProps),labelText),displayValue&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"nds-dropdownTrigger-value"},displayValue),endContent,showOpenIndicator&&!disabled&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{role:"img","aria-label":isOpen?"popup open":"popup closed",className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)(["nds-dropdownTrigger-chevron fontSize--l fontColor--secondary","narmi-icon-chevron-".concat(isOpen?"up":"down")])}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Error__WEBPACK_IMPORTED_MODULE_1__.A,{error:errorText}))}));DropdownTrigger.displayName="DropdownTrigger",DropdownTrigger.propTypes={isOpen:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,showOpenIndicator:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,labelText:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,labelProps:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,displayValue:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,prop_types__WEBPACK_IMPORTED_MODULE_3___default().node]),errorText:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,minWidth:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,testId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,tokens:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),onTokensChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,startContent:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,endContent:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const __WEBPACK_DEFAULT_EXPORT__=DropdownTrigger;DropdownTrigger.__docgenInfo={description:"Generic trigger button for dropdowns. `DropdownTrigger` can be composed with\nother components like `Popover` to create a wide range of dropdown, popover, and menu components.\n\nThe entire clickable area is a `button` element to ensure dropdown triggers are accessible.\n\n **Additional props will be spread on the `button` element.**",methods:[],displayName:"DropdownTrigger",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"Set this to `true` when the associated popup is open",type:{name:"bool"},required:!1},showOpenIndicator:{defaultValue:{value:"true",computed:!1},description:"Set to `false` to hide the chevron icon indicating open state",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Renders the button with the appearance of a disabled input and\nprevents user interaction.",type:{name:"bool"},required:!1},minWidth:{defaultValue:{value:'"auto"',computed:!1},description:'Sets a minimum width.\nUse the full CSS value with the unit (e.g. "400px")',type:{name:"string"},required:!1},startContent:{defaultValue:{value:"<></>",computed:!1},description:"arbitrary JSX to place at the start of the faux input",type:{name:"node"},required:!1},endContent:{defaultValue:{value:"<></>",computed:!1},description:"arbitrary JSX to place at the end of the faux input",type:{name:"node"},required:!1},labelText:{description:"Text of `label` element",type:{name:"string"},required:!1},labelProps:{description:"Props to spread onto the `label` element",type:{name:"object"},required:!1},displayValue:{description:"Renders a string or node as the value displayed in the `DropdownTrigger`\nUsually, this represents the name of a selected option",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},errorText:{description:"Error message. When this prop is passed, an error state is displayed",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},tokens:{description:"Pass labels to show a token list of current selections",type:{name:"arrayOf",value:{name:"string"}},required:!1},onTokensChange:{description:"Called with new list of tokens. Called whenever a user\nadds or dismisses a token.\n`onTokensChange={(tokens) => setTokens(tokens)}`",type:{name:"func"},required:!1}}}},"./src/Select/SelectAction.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const SelectAction=_ref=>{let{children}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)};SelectAction.displayName="Select.Action",SelectAction.propTypes={onSelect:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=SelectAction;SelectAction.__docgenInfo={description:"",methods:[],displayName:"Select.Action",props:{onSelect:{description:"Side effect to run on selection",type:{name:"func"},required:!0},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./src/Select/SelectItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const SelectItem=_ref=>{let{children}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)};SelectItem.displayName="Select.Item",SelectItem.propTypes={value:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,searchValue:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)])};const __WEBPACK_DEFAULT_EXPORT__=SelectItem;SelectItem.__docgenInfo={description:"",methods:[],displayName:"Select.Item",props:{value:{description:'String representation of the option.\n\nThis value is also used as a typeahead; if a user types "n" while\nthe Select is open, highlight will move to the first item with a\nvalue starting with `n`.',type:{name:"string"},required:!0},searchValue:{description:"Custom typeahead string. By default typeahead uses `value`.\nUse this prop to pass in a custom string you'd like the user to search\nagainst when using typeahead.",type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}}},"./src/Select/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>src_Select,m8:()=>getItemIndex});__webpack_require__("./node_modules/core-js/modules/es.array.flat-map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.unscopables.flat-map.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),react_laag_esm=__webpack_require__("./node_modules/react-laag/dist/react-laag.esm.js"),classcat=__webpack_require__("./node_modules/classcat/index.js"),Row=__webpack_require__("./src/Row/index.tsx"),DropdownTrigger=__webpack_require__("./src/DropdownTrigger/index.js"),SelectItem=__webpack_require__("./src/Select/SelectItem.js"),SelectAction=__webpack_require__("./src/Select/SelectAction.js");const SelectCategory=_ref=>{let{children}=_ref;return react.createElement(react.Fragment,null,children)};SelectCategory.displayName="Select.Category",SelectCategory.propTypes={label:prop_types_default().string,kind:prop_types_default().oneOf(["heading","label"]),children:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().arrayOf(prop_types_default().node)]),isFlat:prop_types_default().bool};const Select_SelectCategory=SelectCategory;SelectCategory.__docgenInfo={description:"",methods:[],displayName:"Select.Category",props:{label:{description:"",type:{name:"string"},required:!1},kind:{description:"heading: default bold heading\nlabel: match input floating label",type:{name:"enum",value:[{value:'"heading"',computed:!1},{value:'"label"',computed:!1}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},isFlat:{description:"",type:{name:"bool"},required:!1}}};var dom=__webpack_require__("./src/util/dom.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const noop=()=>{},isAction=item=>{let result=!1;return item&&item.props&&(result="onSelect"in item.props),result},getSelectedItemDisplay=item=>{let result="";return item&&!isAction(item)&&(result=item.props.children),result},getItemByValue=(value,items)=>items.filter((item=>!isAction(item))).filter((_ref=>{let{props}=_ref;return props.value===value})).pop()||"",getItemIndex=(item,items)=>{let result=0;return result=isAction(item)?items.map((_ref2=>{let{props}=_ref2;return props.onSelect})).indexOf(item.props.onSelect):items.map((_ref3=>{let{props}=_ref3;return props.value})).indexOf(item.props.value),result},defaultGetTypeAheadString=function(){let selectItem=arguments.length>1?arguments[1]:void 0;return isAction(selectItem)?"":selectItem.props.searchValue||selectItem.props.value},Select=_ref4=>{let{id,label,children,onChange=noop,value,defaultValue,defaultOpen=!1,disabled=!1,getTypeaheadString=defaultGetTypeAheadString,errorText,testId}=_ref4,items=[],categories=[];const options=(0,react.useMemo)((()=>react.Children.toArray(children).filter((item=>!isAction(item)))),[children]),actions=react.Children.toArray(children).filter(isAction),[userInput,setUserInput]=(0,react.useState)("");options.some((_ref5=>{let{type}=_ref5;return"Select.Category"===type.displayName}))?(items=[...options.flatMap((_ref6=>{let{props}=_ref6;return react.Children.toArray(props.children)})),...actions],categories=options.map((_ref7=>{let{props}=_ref7;return{label:props.label,categoryChildren:react.Children.toArray(props.children),kind:props.kind,isFlat:props.isFlat}}))):items=[...options,...actions];const downshiftOpts={id:id||"nds-select-".concat(label),items,disabled,initialSelectedItem:defaultValue&&getItemByValue(defaultValue,items),initialIsOpen:defaultOpen,itemToString:item=>getTypeaheadString(userInput,item),onSelectedItemChange:_ref8=>{let{selectedItem}=_ref8;isAction(selectedItem)?selectedItem.props.onSelect():onChange(selectedItem.props?selectedItem.props.value:"")},stateReducer:(state,actionAndChanges)=>{const{type,changes}=actionAndChanges;let isOpen=changes.isOpen;if(type===downshift_esm.WM.stateChangeTypes.ToggleButtonKeyDownCharacter){const{inputValue}=changes;setUserInput(inputValue),isOpen=!0}else setUserInput("");return _objectSpread(_objectSpread({},changes),{},{isOpen})}};void 0!==value&&(downshiftOpts.selectedItem=getItemByValue(value,items));const{isOpen,selectedItem,getToggleButtonProps,getLabelProps,getMenuProps,highlightedIndex,getItemProps}=(0,downshift_esm.WM)(downshiftOpts),hasCategories=categories.length>0,hasSelectedItem=null!==selectedItem&&selectedItem.props,showMenu=isOpen&&items.length>0,{renderLayer,triggerProps,triggerBounds,layerProps,layerSide}=(0,react_laag_esm.Z4)({isOpen:showMenu,auto:!0,snap:!0,triggerOffset:0,containerOffset:0,placement:"bottom-start",possiblePlacements:["top-start","bottom-start"],container:dom.u}),renderItem=(item,items)=>{const index=getItemIndex(item,items);return react.createElement("li",_extends({key:"item-".concat(index),className:(0,classcat.A)(["nds-select-item","alignChild--left--center padding--x--s padding--y--xs",{"nds-select-item--highlighted":highlightedIndex===index,"rounded--top":0===index,"rounded--bottom":index===items.length-1,"nds-select-item--hasGutter":hasCategories}])},getItemProps({item,index})),react.createElement(Row.A,{as:"span"},react.createElement(Row.A.Item,{as:"span"},item),hasSelectedItem&&selectedItem.props.value===item.props.value&&react.createElement(Row.A.Item,{as:"span",shrink:!0},react.createElement("span",{className:"narmi-icon-check fontSize--l fontWeight--bold"}))))},getDetailsProps=categoryChildren=>{let detailsExtraProps={};return(((highlightedIndex,categoryChildren,items)=>{if(highlightedIndex<0)return!1;const highlightedValue=items[highlightedIndex].props.value;return categoryChildren.map((child=>child.props.value)).includes(highlightedValue)})(highlightedIndex,categoryChildren,items)||((selectedItem,categoryChildren)=>{if(!selectedItem||isAction(selectedItem))return!1;const selectedValue=selectedItem.props.value;return categoryChildren.map((child=>child.props.value)).includes(selectedValue)})(selectedItem,categoryChildren))&&(detailsExtraProps.open=!0),detailsExtraProps};return react.createElement("div",{className:"nds-select","data-testid":testId},react.createElement(DropdownTrigger.A,_extends({isOpen:showMenu,labelText:label,disabled,displayValue:getSelectedItemDisplay(selectedItem)||userInput,labelProps:_objectSpread({},getLabelProps()),errorText},getToggleButtonProps(triggerProps),{style:_objectSpread({},triggerProps.style)})),renderLayer(react.createElement("div",_extends({className:(0,classcat.A)(["nds-select-list","bgColor--white",{"rounded--bottom":"bottom"===layerSide,"rounded--top":"top"===layerSide,["nds-select-list--active--".concat(layerSide)]:showMenu,"nds-select-list--error":!!errorText}])},getMenuProps(layerProps),{style:_objectSpread({width:null==triggerBounds?void 0:triggerBounds.width,transform:"translateY(".concat("top"==layerSide?"3px":"-3px",")")},layerProps.style)}),showMenu&&hasCategories&&categories.map((_ref9=>{let{label,kind,categoryChildren,isFlat}=_ref9;return isFlat?react.createElement(react.Fragment,null,label&&react.createElement("h4",{id:"select-category-".concat(label),className:(0,classcat.A)(["fontFamily--default","padding--x--s padding--y--xs",{"select-category-title--label":"label"===kind,"select-category-title--heading":"heading"===kind}])},label),react.createElement("ul",{className:"list--reset","aria-labelledby":"select-category-".concat(label)},categoryChildren.map((item=>renderItem(item,items))))):react.createElement("details",_extends({key:label,className:"nds-select-category"},getDetailsProps(categoryChildren)),react.createElement("summary",{className:(0,classcat.A)(["alignChild--left--center","padding--x--s",{"select-category-title--label":"label"===kind,"select-category-title--heading":"heading"===kind||!kind}])},react.createElement("span",{id:"select-category-".concat(label)},label),react.createElement("span",{className:"nds-category-icon narmi-icon-chevron-down"}),react.createElement("span",{className:"nds-category-icon narmi-icon-chevron-up"})),react.createElement("ul",{className:"list--reset","aria-labelledby":"select-category-".concat(label)},categoryChildren.map((item=>renderItem(item,items)))))})),showMenu&&hasCategories&&react.createElement("ul",{className:"list--reset"},actions.map((action=>renderItem(action,items)))),showMenu&&!hasCategories&&react.createElement("ul",{className:"list--reset"},options.map((option=>renderItem(option,items))),actions.map((action=>renderItem(action,items)))))))};Select.propTypes={id:prop_types_default().string.isRequired,label:prop_types_default().string.isRequired,onChange:prop_types_default().func,value:prop_types_default().string,getTypeaheadString:prop_types_default().func,defaultValue:prop_types_default().string,defaultOpen:prop_types_default().bool,errorText:prop_types_default().string,children:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().arrayOf(prop_types_default().node)]),testId:prop_types_default().string,disabled:prop_types_default().bool},Select.Item=SelectItem.A,Select.Action=SelectAction.A,Select.Category=Select_SelectCategory;const src_Select=Select;Select.__docgenInfo={description:"Accessible custom select control for giving users the ability to select one option from a list of options.\n`Select` also supports the ability to pass in a `<Select.Action>` that acts as an option that only triggers a side effect.\nTypeahead is enabled based on the `value` prop of `<Select.Item>` elements passed in.",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Action",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Category",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"Select",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},description:"Change callback. Called with value string from the selected item",type:{name:"func"},required:!1},defaultOpen:{defaultValue:{value:"false",computed:!1},description:"Open the dropdown on render if `true`",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"When true, Select renders a disabled button with the appearance\nof a disabled input. User interaction is disabled.",type:{name:"bool"},required:!1},getTypeaheadString:{defaultValue:{value:'(userInput = "", selectItem) => {\n  if (isAction(selectItem)) return "";\n  return selectItem.props.searchValue || selectItem.props.value;\n}',computed:!1},description:'Function with signature `(userInputValue, selectItemNode) => {}`,\nused to customize typeahead filtering behavior.\nSee "Changing Typeahead Behavior" story for example.',type:{name:"func"},required:!1},id:{description:"unique id attribute of the input (used for `htmlFor`)",type:{name:"string"},required:!0},label:{description:"Label for the select control",type:{name:"string"},required:!0},value:{description:"Sets selected item by value and makes the Select **fully controlled**.\n\nWhen passing a `value`, you must provide an `onChange` handler to update it",type:{name:"string"},required:!1},defaultValue:{description:"Use to set a default selection by passing the `value` prop\nof one of the `<Select.Item>` children.\nThe Select will remain uncontrolled.",type:{name:"string"},required:!1},errorText:{description:"Error message.\nWhen passed, this will cause the trigger to render in error state.",type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}}},"./src/Row/RowItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classcat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classcat/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js");const RowItem=_ref=>{let{shrink=!1,as="div",className="",children,testId}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_2__.A)([className,"nds-row-item",{"nds-row-item--shrink":shrink}]),"data-testid":testId},children)},__WEBPACK_DEFAULT_EXPORT__=RowItem;try{RowItem.displayName="RowItem",RowItem.__docgenInfo={description:"Child component of `Row`.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"RowItem",props:{shrink:{defaultValue:{value:"false"},description:"When `true`, the row item shrinks to content size of its children.\nOtherwise, the item will expand to fill remaining space in the row.",name:"shrink",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"li"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row-item styling if left unspecified",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/RowItem.tsx#RowItem"]={docgenInfo:RowItem.__docgenInfo,name:"RowItem",path:"src/Row/RowItem.tsx#RowItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/Row/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util_AsElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/AsElement.js"),_RowItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Row/RowItem.tsx"),classcat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classcat/index.js");const _getRowStyle=(alignItems,justifyContent,gapSize)=>{const result={gap:"var(--space-".concat(gapSize,")"),alignItems:"flex-start",justifyContent:"flex-".concat(justifyContent)};return gapSize&&"none"===gapSize&&(result.gap="0"),"top"!==alignItems&&(result.alignItems=alignItems),"space-between"===justifyContent&&(result.justifyContent=justifyContent),result},Row=_ref=>{let{alignItems="top",justifyContent="start",gapSize="l",as="div",className="",children,testId}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_AsElement__WEBPACK_IMPORTED_MODULE_1__.A,{elementType:as,className:(0,classcat__WEBPACK_IMPORTED_MODULE_3__.A)([className,"nds-row"]),style:_getRowStyle(alignItems,justifyContent,gapSize),"data-testid":testId},children)};Row.Item=_RowItem__WEBPACK_IMPORTED_MODULE_2__.A;const __WEBPACK_DEFAULT_EXPORT__=Row;try{Row.displayName="Row",Row.__docgenInfo={description:"Basic flexbox helper that arranges content into a non-wrapping row.\n`Row` will grow to fill the width with its parent container.\nItems of `Row` will grow to fit remaining space by default.\nWhen a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.",displayName:"Row",props:{alignItems:{defaultValue:{value:"top"},description:'Adjusts size of gap between row items.\nSizes map to `var(--space-<size>)` variables.\nSet `gapSize="none"` to remove gaps between all row items.',name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},justifyContent:{defaultValue:{value:"start"},description:"Controls vertical alignment of items within the row",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"space-between"'}]}},gapSize:{defaultValue:{value:"l"},description:"Controls horizontal flex justification",name:"gapSize",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"none"'}]}},as:{defaultValue:{value:"div"},description:"The html element to render as the root node of `Row`",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"ul"'}]}},className:{defaultValue:{value:""},description:"Optional: controls className while maintaining default nds-row styling if left unspecified",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children must be of type `Row.Item`",name:"children",required:!0,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/index.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/Row/index.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}},"./src/util/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createUseLayerContainer(){if("undefined"!=typeof document){const container=document.getElementById("outlet");if(container)return container;{const outlet=document.createElement("div");return outlet.setAttribute("id","outlet"),outlet.setAttribute("class","outlet"),document.body.appendChild(outlet),outlet}}}__webpack_require__.d(__webpack_exports__,{u:()=>createUseLayerContainer})}}]);