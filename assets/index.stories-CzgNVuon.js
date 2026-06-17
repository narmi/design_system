import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-x8KF2Ae3.js";import{t as r}from"./prop-types-KQKEvljm.js";import{n as i,t as a}from"./classcat-BMx3V7o4.js";import{n as o,t as s}from"./Row-BcIRHhFt.js";import{n as c,t as l}from"./Button-DfBntpey.js";import{n as u,t as d}from"./Popover-DqLyQ-9T.js";import{n as f,t as p}from"./downshift.esm-CJbjFaV1.js";import{r as m,t as h}from"./TextInput-vlffZm_7.js";var g,_,v,y=e((()=>{g=t(n()),_=t(r()),v=({children:e,value:t})=>g.createElement(g.Fragment,null,e||t),v.displayName=`Combobox.Item`,v.propTypes={value:_.default.string.isRequired,searchValue:_.default.string.isRequired,children:_.default.oneOfType([_.default.node,_.default.arrayOf(_.default.node)])}}));function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(null,arguments)}var x,S,C,w,T=e((()=>{x=t(n()),i(),p(),m(),o(),S=e=>e.props.searchValue||e.props.value||``,C=(e,t)=>e.filter(e=>S(e).toLowerCase().includes(t.toLowerCase())),w=({label:e,items:t,selectedItem:n,onChange:r=()=>{},onInputChange:i=()=>{},footerContent:o})=>{let[c,l]=(0,x.useState)(t);(0,x.useEffect)(()=>{l(t)},[l,t]);let{selectedItem:u,highlightedIndex:d,getMenuProps:p,getInputProps:m,getItemProps:g}=f({items:c,initialSelectedItem:n,initialInputValue:``,onInputValueChange({inputValue:e}){l(e?.length>0?C(t,e):t),i(e)},onSelectedItemChange({selectedItem:e}){e&&r(e)},itemToString(e){return S(e)}});return x.createElement(`div`,{className:a([`nds-autocompleteModal-autocomplete`,`rounded--all`])},x.createElement(`div`,{className:`nds-autocompleteModal-input`},x.createElement(h,b({label:e},m()))),x.createElement(`ul`,b({className:`nds-autocompleteModal-menu list--reset`},p()),c.length===0&&!u&&x.createElement(`li`,{className:`nds-autocompleteModal-item padding--x--s padding--y--xs`},`No results found`),c.map((e,t)=>x.createElement(`li`,b({className:a([`nds-autocompleteModal-item`,`padding--x--s padding--y--xs`,{"nds-autocompleteModal-item--highlighted":d===t}]),key:`${e?.props.value}-${t}`},g({item:e,index:t})),x.createElement(s,null,x.createElement(s.Item,null,e),u&&u.props.value===e.props.value&&x.createElement(s.Item,{as:`span`,shrink:!0},x.createElement(`span`,{className:`narmi-icon-check fontSize--xl fontWeight--bold`})))))),o&&x.createElement(`div`,{className:`nds-autocompleteModal-footer padding--all--s border--top`},o))}})),E,D,O=e((()=>{E=t(n()),y(),u(),T(),D=({inputLabel:e,children:t,trigger:n,onChange:r=()=>{},onInputChange:i=()=>{},footerContent:a})=>{let[o,s]=(0,E.useState)(!1),[c,l]=(0,E.useState)(null),u=(0,E.useMemo)(()=>E.Children.toArray(t),[t]);return E.createElement(d,{isOpen:o,onUserDismiss:()=>{s(!1)},onUserEnable:()=>{s(e=>!e)},alignment:`center`,side:`top`,autoFocus:!0,hasShadow:!1,content:E.createElement(`div`,{className:`nds-autocompleteModal-positionedEl`},E.createElement(w,{items:u,label:e,onChange:e=>{s(!1),l(e),r(e.props.value)},onInputChange:i,footerContent:a,selectedItem:c}))},E.createElement(`span`,{style:{cursor:`pointer`}},typeof n==`function`?n(o):n))},D.Item=v})),k,A,j,M,N,P,F;e((()=>{k=t(n()),O(),c(),A=()=>{let[e,t]=(0,k.useState)(`Unassigned`),n=k.createElement(`span`,null,e);return k.createElement(`div`,{style:{margin:`8rem`}},k.createElement(D,{inputLabel:`Assignee`,trigger:n,onChange:e=>t(e)},k.createElement(D.Item,{value:`Unassigned`}),k.createElement(D.Item,{value:`Chris`}),k.createElement(D.Item,{value:`Nikhil`}),k.createElement(D.Item,{value:`James`}),k.createElement(D.Item,{value:`Phil`}),k.createElement(D.Item,{value:`Batman Robin`}),k.createElement(D.Item,{value:`Reshav`}),k.createElement(D.Item,{value:`Ethan`}),k.createElement(D.Item,{value:`Xihao`}),k.createElement(D.Item,{value:`Alana`}),k.createElement(D.Item,{value:`Yaro`}),k.createElement(D.Item,{value:`Jeff`}),k.createElement(D.Item,{value:`Johnathan`})))},j=()=>k.createElement(`div`,{style:{margin:`8rem`}},k.createElement(D,{inputLabel:`Search`,trigger:k.createElement(l,{label:`Assign to`}),onChange:e=>alert(`POST request with UUID ${e}`)},k.createElement(D.Item,{value:`dd0bb6a2-af23-4d5e-a2ae-8c57ecd6bc07`,searchValue:`Adam D.`},`Adam D.`),k.createElement(D.Item,{value:`ac6d94fc-fab2-4670-ae30-a8756955f563`,searchValue:`Adam U.`},`Adam U.`),k.createElement(D.Item,{value:`f24b720d-681d-40e9-bdfc-52a7e807aea5`,searchValue:`Ayesha`},`Ayesha`),k.createElement(D.Item,{value:`d9f428ee-6287-4ac1-8e05-e7b5874a568d`,searchValue:`James`},`James`),k.createElement(D.Item,{value:`aad8f0a4-2b2a-4540-8976-54c75e6b23d8`,searchValue:`Martin`},`Martin`))),M=()=>{let[e,t]=(0,k.useState)(`Unassigned`),[n,r]=(0,k.useState)([`Unassigned`,`Chris`,`Nikhil`,`James`,`Phil`,`Batman`,`Reshav`,`Ethan`,`Xihao`,`Alana`,`Yaro`,`Jeff`,`Johnathan`]),i=k.createElement(`span`,null,e);return k.createElement(`div`,{style:{margin:`8rem`}},k.createElement(D,{inputLabel:`Assignee`,trigger:i,onChange:e=>t(e),footerContent:k.createElement(l,{kind:`plain`,label:`Add a new employee`,startIcon:`plus`,onClick:()=>{r(e=>[...e,`Victor (NEW)`])}})},n.map((e,t)=>k.createElement(D.Item,{key:`${e}-${t}`,value:e}))))},N=()=>{let[e,t]=(0,k.useState)(`Unassigned`);return k.createElement(`div`,{style:{margin:`8rem`}},k.createElement(D,{inputLabel:`Assignee`,trigger:t=>k.createElement(`div`,{className:`padding--all--xxs rounded--all`,style:{background:t?`yellow`:`transparent`}},e),onChange:e=>t(e),footerContent:k.createElement(l,{kind:`plain`,label:`Add a new employee`,startIcon:`plus`})},k.createElement(D.Item,{value:`Unassigned`}),k.createElement(D.Item,{value:`Chris`}),k.createElement(D.Item,{value:`Nikhil`}),k.createElement(D.Item,{value:`James`}),k.createElement(D.Item,{value:`Phil`}),k.createElement(D.Item,{value:`Batman`}),k.createElement(D.Item,{value:`Reshav`}),k.createElement(D.Item,{value:`Ethan`}),k.createElement(D.Item,{value:`Xihao`}),k.createElement(D.Item,{value:`Alana`}),k.createElement(D.Item,{value:`Yaro`}),k.createElement(D.Item,{value:`Jeff`}),k.createElement(D.Item,{value:`Johnathan`})))},N.parameters={docs:{description:{story:"The `trigger` prop takes either a ReactNode, or a render function. The render function makes the active state of the popover available to the trigger for conditional styling."}}},P={title:`Components/AutocompleteModal`,component:D},A.__docgenInfo={description:``,methods:[],displayName:`Overview`},j.__docgenInfo={description:``,methods:[],displayName:`WithSearchValue`},M.__docgenInfo={description:``,methods:[],displayName:`WithAction`},N.__docgenInfo={description:``,methods:[],displayName:`TriggerRenderProp`},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}},F=[`Overview`,`WithSearchValue`,`WithAction`,`TriggerRenderProp`]}))();export{A as Overview,N as TriggerRenderProp,M as WithAction,j as WithSearchValue,F as __namedExportsOrder,P as default};