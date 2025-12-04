import{e,r as w}from"./iframe-D9Vtpn5B.js";import{c as O}from"./index-RvS1aOr8.js";import{b as G}from"./downshift.esm-DU__exMM.js";import{u as U,c as Y}from"./dom-uReOM9XU.js";import{R as A}from"./index-KULlJJRY.js";import{T as $}from"./index-MacpygiE.js";import{B as K}from"./index-BpbsuIVI.js";import"./preload-helper-PPVm8Dsz.js";import"./extends-DDykod_l.js";import"./index-DjTd0aFh.js";import"./index-Chjiymov.js";import"./tslib.es6-rrx6G-_s.js";import"./index-DZ38PWZO.js";import"./index-C-GI_UnO.js";import"./AsElement-BRabLzva.js";import"./index-Sk_pf9NS.js";const q=({children:t,value:a})=>e.createElement(e.Fragment,null,t||a);q.displayName="TableAutocomplete.Item";try{TableAutocomplete.Item.displayName="TableAutocomplete.Item",TableAutocomplete.Item.__docgenInfo={description:"",displayName:"TableAutocomplete.Item",props:{value:{defaultValue:null,description:"String representation of the option.",name:"value",required:!0,type:{name:"string"}},searchValue:{defaultValue:null,description:"Custom typeahead string. By default, typeahead uses `value`.",name:"searchValue",required:!1,type:{name:"string"}}}}}catch{}function m(){return m=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var s in n)({}).hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},m.apply(null,arguments)}const h=t=>t?.props.searchValue||t?.props.value||"",H=(t,a)=>t.filter(n=>h(n).toLowerCase().startsWith(a.toLowerCase())),o=({label:t,children:a,onChange:n=()=>{},onInputChange:s=()=>{},filterItemsByInput:E=H,footerContent:S,placeholder:P,isDisabled:V=!1,hasError:B=!1,inputValue:c})=>{const u=c!==void 0,i=w.useMemo(()=>e.Children.toArray(a),[a]),[W,_]=e.useState(i);e.useEffect(()=>{u||_(i)},[i,u]);const y=u?c?.length>0?E(i,c):i:W,f=w.useMemo(()=>!u||!c?null:i.find(l=>h(l)===c)||null,[c,i,u]),{highlightedIndex:L,getMenuProps:z,getInputProps:D,getItemProps:M,isOpen:k}=G({items:y,selectedItem:f,inputValue:c,onInputValueChange({inputValue:l}){u||_(l?.length>0?E(i,l):i),s(l||"")},onSelectedItemChange({selectedItem:l}){l&&n(l.props.value)},itemToString(l){return e.isValidElement(l)?h(l):""}}),{renderLayer:R,triggerProps:j,layerProps:N,triggerBounds:F}=U({isOpen:k,overflowContainer:!0,auto:!0,snap:!0,placement:"bottom-start",possiblePlacements:["top-start","bottom-start"],preferY:"bottom",triggerOffset:2,container:Y});return e.createElement("div",{className:"nds-tableAutocomplete"},e.createElement("div",j,e.createElement($,m({label:t,placeholder:V?void 0:P,isDisabled:V,hasError:B},D({"aria-labelledby":void 0})))),k&&R(e.createElement("div",m({className:O(["nds-tableAutocomplete-dropdown","rounded--all"])},N,{style:{...N.style,width:F?.width||"max-content"}}),e.createElement("ul",m({className:"nds-tableAutocomplete-menu list--reset rounded--all"},z()),y.length===0&&!f&&e.createElement("li",{className:"nds-tableAutocomplete-item padding--x--s padding--y--xs",role:"status","aria-live":"polite"},"No results found"),y.map((l,x)=>e.createElement("li",m({className:O(["nds-tableAutocomplete-item","padding--x--s padding--y--xs",{"nds-tableAutocomplete-item--highlighted":L===x}]),key:l?.props.value},M({item:l,index:x})),e.createElement(A,null,e.createElement(A.Item,null,l),f&&f.props.value===l.props.value&&e.createElement(A.Item,{as:"span",shrink:!0},e.createElement("span",{className:"narmi-icon-check fontSize--l fontWeight--bold"})))))),S&&e.createElement("div",{className:"nds-tableAutocomplete-footer padding--x--s padding--y--xs border--top"},S))))};o.Item=q;try{h.displayName="itemToString",h.__docgenInfo={description:"",displayName:"itemToString",props:{}}}catch{}try{o.displayName="TableAutocomplete",o.__docgenInfo={description:`A simplified Combobox component for table inline editing.
Useful for inline editing of table items where we want to
provide an autocomplete of possible values with a native input.

Allows single selection only.`,displayName:"TableAutocomplete",props:{label:{defaultValue:null,description:"Input label for accessibility",name:"label",required:!0,type:{name:"string"}},children:{defaultValue:null,description:`TableAutocomplete.Item children
Children must be an array of TableAutocomplete.Item components.`,name:"children",required:!0,type:{name:"TableAutocompleteItem[]"}},onChange:{defaultValue:{value:"() => {}"},description:"Selection change event callback - called with value of selected item",name:"onChange",required:!1,type:{name:"(value: string) => void"}},onInputChange:{defaultValue:{value:"() => {}"},description:"Input change event callback",name:"onInputChange",required:!1,type:{name:"(value: string) => void"}},filterItemsByInput:{defaultValue:{value:`(
  items: TableAutocompleteItem[],
  inputValue: string,
) =>
  items.filter((item) =>
    itemToString(item).toLowerCase().startsWith(inputValue.toLowerCase()),
  )`},description:"Optional custom filter function for items. Signature: (items, inputValue) => filteredItems[]",name:"filterItemsByInput",required:!1,type:{name:"(items: TableAutocompleteItem[], inputValue: string) => TableAutocompleteItem[]"}},footerContent:{defaultValue:null,description:"Optional pinned footer content; use for action buttons",name:"footerContent",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Input placeholder text",name:"placeholder",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"Whether the input is disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},inputValue:{defaultValue:null,description:"Optional controlled input value",name:"inputValue",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"false"},description:"Whether the input has an error",name:"hasError",required:!1,type:{name:"boolean"}}}}}catch{}function T(){return T=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var s in n)({}).hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},T.apply(null,arguments)}const{action:r}=__STORYBOOK_MODULE_ACTIONS__,pe={title:"Components/TableAutocomplete",component:o},g=["Apple","Apricot","Banana","Blueberry","Cherry","Grape","Grapefruit","Lemon","Lime","Mango","Orange","Peach","Pear"],p=t=>e.createElement(o,T({onChange:r("onChange"),onInputChange:r("onInputChange")},t),g.map(a=>e.createElement(o.Item,{key:a,value:a},a)));p.args={label:"Select a fruit",placeholder:"Type to search...",isDisabled:!1,hasError:!1};const b=()=>e.createElement(o,{label:"Select an account",placeholder:"Type to search...",onChange:r("onChange"),onInputChange:r("onInputChange")},e.createElement(o.Item,{value:"checking-001",searchValue:"Checking - ***001"},e.createElement("div",null,e.createElement("div",null,"Checking Account"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***001"))),e.createElement(o.Item,{value:"savings-001",searchValue:"Savings - ***001"},e.createElement("div",null,e.createElement("div",null,"Savings Account"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***001"))),e.createElement(o.Item,{value:"credit-003",searchValue:"Credit - ***003"},e.createElement("div",null,e.createElement("div",null,"Credit Card"),e.createElement("div",{className:"fontSize--xs fontColor--secondary"},"***003")))),C=()=>e.createElement(o,{label:"Select a fruit",placeholder:"Type to search...",onChange:r("onChange"),onInputChange:r("onInputChange"),footerContent:e.createElement(K,{size:"s",kind:"plain",label:"Add new item",onClick:r("Add new item")})},g.map(t=>e.createElement(o.Item,{key:t,value:t},t))),I=()=>e.createElement(o,{label:"Select a fruit",placeholder:"Type to search...",isDisabled:!0,inputValue:"Can't change this",onChange:r("onChange"),onInputChange:r("onInputChange")},g.map(t=>e.createElement(o.Item,{key:t,value:t},t))),v=()=>e.createElement(o,{label:"Select a fruit",placeholder:"Type to search...",hasError:!0,onChange:r("onChange"),onInputChange:r("onInputChange")},g.map(t=>e.createElement(o.Item,{key:t,value:t},t))),d=()=>{const[t,a]=e.useState("Grape");return e.createElement(o,{label:"Select a fruit",placeholder:"Type to search...",inputValue:t,onChange:r("onChange"),onInputChange:n=>{r("onInputChange")(n),a(n)}},g.map(n=>e.createElement(o.Item,{key:n,value:n},n)))};d.parameters={docs:{description:{story:"If the `inputValue` matches an item value, that item will be selected."}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  return <TableAutocomplete onChange={action("onChange")} onInputChange={action("onInputChange")} {...args}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select an account" placeholder="Type to search..." onChange={action("onChange")} onInputChange={action("onInputChange")}>
      <TableAutocomplete.Item value="checking-001" searchValue="Checking - ***001">
        <div>
          <div>Checking Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableAutocomplete.Item>
      <TableAutocomplete.Item value="savings-001" searchValue="Savings - ***001">
        <div>
          <div>Savings Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableAutocomplete.Item>
      <TableAutocomplete.Item value="credit-003" searchValue="Credit - ***003">
        <div>
          <div>Credit Card</div>
          <div className="fontSize--xs fontColor--secondary">***003</div>
        </div>
      </TableAutocomplete.Item>
    </TableAutocomplete>;
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." onChange={action("onChange")} onInputChange={action("onInputChange")} footerContent={<Button size="s" kind="plain" label="Add new item" onClick={action("Add new item")} />}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." isDisabled={true} inputValue="Can't change this" onChange={action("onChange")} onInputChange={action("onInputChange")}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." hasError={true} onChange={action("onChange")} onInputChange={action("onInputChange")}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState("Grape");
  return <TableAutocomplete label="Select a fruit" placeholder="Type to search..." inputValue={inputValue} onChange={action("onChange")} onInputChange={value => {
    action("onInputChange")(value);
    setInputValue(value);
  }}>
      {mockItems.map(item => <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>)}
    </TableAutocomplete>;
}`,...d.parameters?.docs?.source}}};const de=["Basic","WithCustomContent","WithFooter","Disabled","WithError","PreSelectedValue"];export{p as Basic,I as Disabled,d as PreSelectedValue,b as WithCustomContent,v as WithError,C as WithFooter,de as __namedExportsOrder,pe as default};
