import{e,r as i}from"./iframe-CTHFVwiB.js";import{P as d}from"./index-B3NVBfVJ.js";import{P as k}from"./index-CHQQxabs.js";import{c as w}from"./index-RvS1aOr8.js";import{u as U}from"./downshift.esm-BZnkhwRr.js";import{T as P}from"./index-CVSVgkUV.js";import{R as V}from"./index-DZf7ozVt.js";import{B as S}from"./index-UI0I0XKB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Chjiymov.js";import"./dom-B7XutmAi.js";import"./index-DChBguUb.js";import"./index-CmwxXSSA.js";import"./Combination-Cq1vjbzM.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";import"./index-Cgg46ZS3.js";import"./index-DdYFg9QH.js";import"./selection-CAkQuomx.js";import"./AsElement-BZSYqSPH.js";import"./index-Bl5gE4QZ.js";const N=({children:a,value:n})=>e.createElement(e.Fragment,null,a||n);N.displayName="Combobox.Item";N.propTypes={value:d.string.isRequired,searchValue:d.string,children:d.oneOfType([d.node,d.arrayOf(d.node)])};try{Combobox.Item.displayName="Combobox.Item",Combobox.Item.__docgenInfo={description:"",displayName:"Combobox.Item",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}}}}}catch{}function A(){return A=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var o in l)({}).hasOwnProperty.call(l,o)&&(a[o]=l[o])}return a},A.apply(null,arguments)}const b=a=>a.props.searchValue||a.props.value||"",x=(a,n)=>a.filter(l=>b(l).toLowerCase().includes(n.toLowerCase())),_=({label:a,items:n,selectedItem:l,onChange:o=()=>{},onInputChange:g=()=>{},footerContent:u})=>{const[s,m]=i.useState(n);i.useEffect(()=>{m(n)},[m,n]);const{selectedItem:h,highlightedIndex:E,getMenuProps:y,getInputProps:M,getItemProps:C}=U({items:s,initialSelectedItem:l,initialInputValue:"",onInputValueChange({inputValue:r}){m(r?.length>0?x(n,r):n),g(r)},onSelectedItemChange({selectedItem:r}){r&&o(r)},itemToString(r){return b(r)}});return e.createElement("div",{className:w(["nds-autocompleteModal-autocomplete","rounded--all"])},e.createElement("div",{className:"nds-autocompleteModal-input"},e.createElement(P,A({label:a},M()))),e.createElement("ul",A({className:"nds-autocompleteModal-menu list--reset"},y()),s.length===0&&!h&&e.createElement("li",{className:"nds-autocompleteModal-item padding--x--s padding--y--xs"},"No results found"),s.map((r,c)=>e.createElement("li",A({className:w(["nds-autocompleteModal-item","padding--x--s padding--y--xs",{"nds-autocompleteModal-item--highlighted":E===c}]),key:`${r?.props.value}-${c}`},C({item:r,index:c})),e.createElement(V,null,e.createElement(V.Item,null,r),h&&h.props.value===r.props.value&&e.createElement(V.Item,{as:"span",shrink:!0},e.createElement("span",{className:"narmi-icon-check fontSize--l fontWeight--bold"})))))),u&&e.createElement("div",{className:"nds-autocompleteModal-footer padding--all--s border--top"},u))};try{b.displayName="itemToString",b.__docgenInfo={description:"",displayName:"itemToString",props:{}}}catch{}try{_.displayName="AutoComplete",_.__docgenInfo={description:`A simplified Combobox component that renders in a Popup.
Useful for inline editing of things like table items where we want to
provide an autocomplete of possible values.

Allows single selection only. The selected value is controlled, allowing the selection to render in the trigger.
trigger area.`,displayName:"AutoComplete",props:{label:{defaultValue:null,description:"Input label",name:"label",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"ComboboxModal.Item children",name:"items",required:!0,type:{name:"AutoCompleteItem[]"}},selectedItem:{defaultValue:null,description:"",name:"selectedItem",required:!0,type:{name:"AutoCompleteItem"}},onChange:{defaultValue:{value:"() => {}"},description:"Selection change event callback",name:"onChange",required:!1,type:{name:"(item: AutoCompleteItem) => void"}},onInputChange:{defaultValue:{value:"() => {}"},description:"Input change event callback",name:"onInputChange",required:!1,type:{name:"(e: string) => void"}},footerContent:{defaultValue:null,description:"Optional pinned footer content; use for action buttons",name:"footerContent",required:!1,type:{name:"ReactNode"}}}}}catch{}const t=({inputLabel:a,children:n,trigger:l,onChange:o=()=>{},onInputChange:g=()=>{},footerContent:u})=>{const[s,m]=i.useState(!1),[h,E]=i.useState(null),y=i.useMemo(()=>e.Children.toArray(n),[n]),M=c=>{m(!1),E(c),o(c.props.value)},C=()=>{m(c=>!c)},r=()=>{m(!1)};return e.createElement(k,{isOpen:s,onUserDismiss:r,onUserEnable:C,alignment:"center",side:"top",autoFocus:!0,hasShadow:!1,content:e.createElement("div",{className:"nds-autocompleteModal-positionedEl"},e.createElement(_,{items:y,label:a,onChange:M,onInputChange:g,footerContent:u,selectedItem:h}))},e.createElement("span",{style:{cursor:"pointer"}},typeof l=="function"?l(s):l))};t.Item=N;try{t.displayName="AutocompleteModal",t.__docgenInfo={description:`A simplified Combobox component that renders in a Popup.
Useful for inline editing of things like table items where we want to
provide an autocomplete of possible values.

Allows single selection only. The selected value will be rendered in the
trigger area.`,displayName:"AutocompleteModal",props:{inputLabel:{defaultValue:null,description:"Input label",name:"inputLabel",required:!0,type:{name:"string"}},trigger:{defaultValue:null,description:"Trigger element",name:"trigger",required:!0,type:{name:"ReactNode | ((isActive: boolean) => ReactNode)"}},children:{defaultValue:null,description:"AutocompleteModal.Item children",name:"children",required:!0,type:{name:"ReactNode[]"}},onChange:{defaultValue:{value:"() => {}"},description:"Selection change event callback",name:"onChange",required:!1,type:{name:"(value: string) => void"}},onInputChange:{defaultValue:{value:"() => {}"},description:"Input change event callback - called with value of selected item",name:"onInputChange",required:!1,type:{name:"(value: string) => void"}},footerContent:{defaultValue:null,description:"Optional pinned footer content; use for action buttons",name:"footerContent",required:!1,type:{name:"ReactNode"}}}}}catch{}const v=()=>{const[a,n]=i.useState("Unassigned"),l=e.createElement("span",null,a);return e.createElement("div",{style:{margin:"8rem"}},e.createElement(t,{inputLabel:"Assignee",trigger:l,onChange:o=>n(o)},e.createElement(t.Item,{value:"Unassigned"}),e.createElement(t.Item,{value:"Chris"}),e.createElement(t.Item,{value:"Nikhil"}),e.createElement(t.Item,{value:"James"}),e.createElement(t.Item,{value:"Phil"}),e.createElement(t.Item,{value:"Batman Robin"}),e.createElement(t.Item,{value:"Reshav"}),e.createElement(t.Item,{value:"Ethan"}),e.createElement(t.Item,{value:"Xihao"}),e.createElement(t.Item,{value:"Alana"}),e.createElement(t.Item,{value:"Yaro"}),e.createElement(t.Item,{value:"Jeff"}),e.createElement(t.Item,{value:"Johnathan"})))},I=()=>e.createElement("div",{style:{margin:"8rem"}},e.createElement(t,{inputLabel:"Search",trigger:e.createElement(S,{label:"Assign to"}),onChange:a=>alert(`POST request with UUID ${a}`)},e.createElement(t.Item,{value:"dd0bb6a2-af23-4d5e-a2ae-8c57ecd6bc07",searchValue:"Adam D."},"Adam D."),e.createElement(t.Item,{value:"ac6d94fc-fab2-4670-ae30-a8756955f563",searchValue:"Adam U."},"Adam U."),e.createElement(t.Item,{value:"f24b720d-681d-40e9-bdfc-52a7e807aea5",searchValue:"Ayesha"},"Ayesha"),e.createElement(t.Item,{value:"d9f428ee-6287-4ac1-8e05-e7b5874a568d",searchValue:"James"},"James"),e.createElement(t.Item,{value:"aad8f0a4-2b2a-4540-8976-54c75e6b23d8",searchValue:"Martin"},"Martin"))),f=()=>{const[a,n]=i.useState("Unassigned"),[l,o]=i.useState(["Unassigned","Chris","Nikhil","James","Phil","Batman","Reshav","Ethan","Xihao","Alana","Yaro","Jeff","Johnathan"]),g=e.createElement("span",null,a),u=()=>{const s="Victor (NEW)";o(m=>[...m,s])};return e.createElement("div",{style:{margin:"8rem"}},e.createElement(t,{inputLabel:"Assignee",trigger:g,onChange:s=>n(s),footerContent:e.createElement(S,{kind:"plain",label:"Add a new employee",startIcon:"plus",onClick:u})},l.map((s,m)=>e.createElement(t.Item,{key:`${s}-${m}`,value:s}))))},p=()=>{const[a,n]=i.useState("Unassigned"),l=o=>e.createElement("div",{className:"padding--all--xxs rounded--all",style:{background:o?"yellow":"transparent"}},a);return e.createElement("div",{style:{margin:"8rem"}},e.createElement(t,{inputLabel:"Assignee",trigger:l,onChange:o=>n(o),footerContent:e.createElement(S,{kind:"plain",label:"Add a new employee",startIcon:"plus"})},e.createElement(t.Item,{value:"Unassigned"}),e.createElement(t.Item,{value:"Chris"}),e.createElement(t.Item,{value:"Nikhil"}),e.createElement(t.Item,{value:"James"}),e.createElement(t.Item,{value:"Phil"}),e.createElement(t.Item,{value:"Batman"}),e.createElement(t.Item,{value:"Reshav"}),e.createElement(t.Item,{value:"Ethan"}),e.createElement(t.Item,{value:"Xihao"}),e.createElement(t.Item,{value:"Alana"}),e.createElement(t.Item,{value:"Yaro"}),e.createElement(t.Item,{value:"Jeff"}),e.createElement(t.Item,{value:"Johnathan"})))};p.parameters={docs:{description:{story:"The `trigger` prop takes either a ReactNode, or a render function. The render function makes the active state of the popover available to the trigger for conditional styling."}}};const ae={title:"Components/AutocompleteModal",component:t};v.__docgenInfo={description:"",methods:[],displayName:"Overview"};I.__docgenInfo={description:"",methods:[],displayName:"WithSearchValue"};f.__docgenInfo={description:"",methods:[],displayName:"WithAction"};p.__docgenInfo={description:"",methods:[],displayName:"TriggerRenderProp"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("Unassigned");
  const trigger = <span>{selectedValue}</span>;
  return <div style={{
    margin: "8rem"
  }}>
      <AutocompleteModal inputLabel="Assignee" trigger={trigger} onChange={val => setSelectedValue(val)}>
        <AutocompleteModal.Item value="Unassigned" />
        <AutocompleteModal.Item value="Chris" />
        <AutocompleteModal.Item value="Nikhil" />
        <AutocompleteModal.Item value="James" />
        <AutocompleteModal.Item value="Phil" />
        <AutocompleteModal.Item value="Batman Robin" />
        <AutocompleteModal.Item value="Reshav" />
        <AutocompleteModal.Item value="Ethan" />
        <AutocompleteModal.Item value="Xihao" />
        <AutocompleteModal.Item value="Alana" />
        <AutocompleteModal.Item value="Yaro" />
        <AutocompleteModal.Item value="Jeff" />
        <AutocompleteModal.Item value="Johnathan" />
      </AutocompleteModal>
    </div>;
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    margin: "8rem"
  }}>
      <AutocompleteModal inputLabel="Search" trigger={<Button label="Assign to" />} onChange={val => alert(\`POST request with UUID \${val}\`)}>
        <AutocompleteModal.Item value="dd0bb6a2-af23-4d5e-a2ae-8c57ecd6bc07" searchValue="Adam D.">
          Adam D.
        </AutocompleteModal.Item>
        <AutocompleteModal.Item value="ac6d94fc-fab2-4670-ae30-a8756955f563" searchValue="Adam U.">
          Adam U.
        </AutocompleteModal.Item>
        <AutocompleteModal.Item value="f24b720d-681d-40e9-bdfc-52a7e807aea5" searchValue="Ayesha">
          Ayesha
        </AutocompleteModal.Item>
        <AutocompleteModal.Item value="d9f428ee-6287-4ac1-8e05-e7b5874a568d" searchValue="James">
          James
        </AutocompleteModal.Item>
        <AutocompleteModal.Item value="aad8f0a4-2b2a-4540-8976-54c75e6b23d8" searchValue="Martin">
          Martin
        </AutocompleteModal.Item>
      </AutocompleteModal>
    </div>;
}`,...I.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("Unassigned");
  const [items, setItems] = useState(["Unassigned", "Chris", "Nikhil", "James", "Phil", "Batman", "Reshav", "Ethan", "Xihao", "Alana", "Yaro", "Jeff", "Johnathan"]);
  const trigger = <span>{selectedValue}</span>;
  const handleAdd = () => {
    const newItem = "Victor (NEW)";
    setItems(it => [...it, newItem]);
  };
  return <div style={{
    margin: "8rem"
  }}>
      <AutocompleteModal inputLabel="Assignee" trigger={trigger} onChange={val => setSelectedValue(val)} footerContent={<Button kind="plain" label="Add a new employee" startIcon="plus" onClick={handleAdd} />}>
        {items.map((it, i) => <AutocompleteModal.Item key={\`\${it}-\${i}\`} value={it} />)}
      </AutocompleteModal>
    </div>;
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("Unassigned");
  const trigger = isActive => <div className="padding--all--xxs rounded--all" style={{
    background: isActive ? "yellow" : "transparent"
  }}>
      {selectedValue}
    </div>;
  return <div style={{
    margin: "8rem"
  }}>
      <AutocompleteModal inputLabel="Assignee" trigger={trigger} onChange={val => setSelectedValue(val)} footerContent={<Button kind="plain" label="Add a new employee" startIcon="plus" />}>
        <AutocompleteModal.Item value="Unassigned" />
        <AutocompleteModal.Item value="Chris" />
        <AutocompleteModal.Item value="Nikhil" />
        <AutocompleteModal.Item value="James" />
        <AutocompleteModal.Item value="Phil" />
        <AutocompleteModal.Item value="Batman" />
        <AutocompleteModal.Item value="Reshav" />
        <AutocompleteModal.Item value="Ethan" />
        <AutocompleteModal.Item value="Xihao" />
        <AutocompleteModal.Item value="Alana" />
        <AutocompleteModal.Item value="Yaro" />
        <AutocompleteModal.Item value="Jeff" />
        <AutocompleteModal.Item value="Johnathan" />
      </AutocompleteModal>
    </div>;
}`,...p.parameters?.docs?.source}}};const ne=["Overview","WithSearchValue","WithAction","TriggerRenderProp"];export{v as Overview,p as TriggerRenderProp,f as WithAction,I as WithSearchValue,ne as __namedExportsOrder,ae as default};
