import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-Bulwfw7W.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-CWtOGINK.js";import{t as s}from"./prop-types-GrRLOqjJ.js";import{n as c,t as l}from"./Button-DzpiDvx6.js";import{n as u,t as d}from"./Popover-DLC9nnED.js";import{n as f,t as p}from"./downshift.esm-C6P5U1ym.js";import{n as m,t as h}from"./TextInput-CloBIBrJ.js";var g,_,v,y=t((()=>{g=e(n()),_=e(s()),v=({children:e,value:t})=>g.createElement(g.Fragment,null,e||t),v.displayName=`Combobox.Item`,v.propTypes={value:_.default.string.isRequired,searchValue:_.default.string,children:_.default.oneOfType([_.default.node,_.default.arrayOf(_.default.node)])};try{Combobox.Item.displayName=`Combobox.Item`,Combobox.Item.__docgenInfo={description:``,displayName:`Combobox.Item`,filePath:`/home/runner/work/design_system/design_system/src/AutocompleteModal/Item.tsx`,methods:[],props:{value:{defaultValue:null,description:``,name:`value`,required:!0,tags:{},type:{name:`any`}}},tags:{}}}catch{}}));function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(null,arguments)}var x,S,C,w,T=t((()=>{x=e(n()),r(),p(),m(),a(),S=e=>e.props.searchValue||e.props.value||``,C=(e,t)=>e.filter(e=>S(e).toLowerCase().includes(t.toLowerCase())),w=({label:e,items:t,selectedItem:n,onChange:r=()=>{},onInputChange:a=()=>{},footerContent:s})=>{let[c,l]=(0,x.useState)(t);(0,x.useEffect)(()=>{l(t)},[l,t]);let{selectedItem:u,highlightedIndex:d,getMenuProps:p,getInputProps:m,getItemProps:g}=f({items:c,initialSelectedItem:n,initialInputValue:``,onInputValueChange({inputValue:e}){l(e?.length>0?C(t,e):t),a(e)},onSelectedItemChange({selectedItem:e}){e&&r(e)},itemToString(e){return S(e)}});return x.createElement(`div`,{className:i([`nds-autocompleteModal-autocomplete`,`rounded--all`])},x.createElement(`div`,{className:`nds-autocompleteModal-input`},x.createElement(h,b({label:e},m()))),x.createElement(`ul`,b({className:`nds-autocompleteModal-menu list--reset`},p()),c.length===0&&!u&&x.createElement(`li`,{className:`nds-autocompleteModal-item padding--x--s padding--y--xs`},`No results found`),c.map((e,t)=>x.createElement(`li`,b({className:i([`nds-autocompleteModal-item`,`padding--x--s padding--y--xs`,{"nds-autocompleteModal-item--highlighted":d===t}]),key:`${e?.props.value}-${t}`},g({item:e,index:t})),x.createElement(o,null,x.createElement(o.Item,null,e),u&&u.props.value===e.props.value&&x.createElement(o.Item,{as:`span`,shrink:!0},x.createElement(`span`,{className:`narmi-icon-check fontSize--xl fontWeight--bold`})))))),s&&x.createElement(`div`,{className:`nds-autocompleteModal-footer padding--all--s border--top`},s))};try{S.displayName=`itemToString`,S.__docgenInfo={description:``,displayName:`itemToString`,filePath:`/home/runner/work/design_system/design_system/src/AutocompleteModal/AutoComplete.tsx`,methods:[],props:{},tags:{}}}catch{}try{w.displayName=`AutoComplete`,w.__docgenInfo={description:`A simplified Combobox component that renders in a Popup.
Useful for inline editing of things like table items where we want to
provide an autocomplete of possible values.

Allows single selection only. The selected value is controlled, allowing the selection to render in the trigger.
trigger area.`,displayName:`AutoComplete`,filePath:`/home/runner/work/design_system/design_system/src/AutocompleteModal/AutoComplete.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`}],description:`Input label`,name:`label`,parent:{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`},required:!0,tags:{},type:{name:`string`}},items:{defaultValue:null,declarations:[{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`}],description:`ComboboxModal.Item children`,name:`items`,parent:{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`},required:!0,tags:{},type:{name:`AutoCompleteItem[]`}},selectedItem:{defaultValue:null,declarations:[{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`}],description:``,name:`selectedItem`,parent:{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`},required:!0,tags:{},type:{name:`AutoCompleteItem`}},onChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`}],description:`Selection change event callback`,name:`onChange`,parent:{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`},required:!1,tags:{},type:{name:`(item: AutoCompleteItem) => void`}},onInputChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`}],description:`Input change event callback`,name:`onInputChange`,parent:{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`},required:!1,tags:{},type:{name:`(e: string) => void`}},footerContent:{defaultValue:null,declarations:[{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`}],description:`Optional pinned footer content; use for action buttons`,name:`footerContent`,parent:{fileName:`design_system/src/AutocompleteModal/AutoComplete.tsx`,name:`AutoCompleteProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})),E,D,O=t((()=>{E=e(n()),y(),u(),T(),D=({inputLabel:e,children:t,trigger:n,onChange:r=()=>{},onInputChange:i=()=>{},footerContent:a})=>{let[o,s]=(0,E.useState)(!1),[c,l]=(0,E.useState)(null),u=(0,E.useMemo)(()=>E.Children.toArray(t),[t]);return E.createElement(d,{isOpen:o,onUserDismiss:()=>{s(!1)},onUserEnable:()=>{s(e=>!e)},side:`top`,autoFocus:!0,hasShadow:!1,content:E.createElement(`div`,{className:`nds-autocompleteModal-positionedEl`},E.createElement(w,{items:u,label:e,onChange:e=>{s(!1),l(e),r(e.props.value)},onInputChange:i,footerContent:a,selectedItem:c}))},E.createElement(`span`,{style:{cursor:`pointer`}},typeof n==`function`?n(o):n))},D.Item=v;try{D.displayName=`AutocompleteModal`,D.__docgenInfo={description:`A simplified Combobox component that renders in a Popup.
Useful for inline editing of things like table items where we want to
provide an autocomplete of possible values.

Allows single selection only. The selected value will be rendered in the
trigger area.`,displayName:`AutocompleteModal`,filePath:`/home/runner/work/design_system/design_system/src/AutocompleteModal/index.tsx`,methods:[],props:{inputLabel:{defaultValue:null,declarations:[{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`}],description:`Input label`,name:`inputLabel`,parent:{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`},required:!0,tags:{},type:{name:`string`}},trigger:{defaultValue:null,declarations:[{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`}],description:`Trigger element`,name:`trigger`,parent:{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`},required:!0,tags:{},type:{name:`ReactNode | ((isActive: boolean) => ReactNode)`}},children:{defaultValue:null,declarations:[{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`}],description:`AutocompleteModal.Item children`,name:`children`,parent:{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`},required:!0,tags:{},type:{name:`ReactNode[]`}},onChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`}],description:`Selection change event callback`,name:`onChange`,parent:{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`},required:!1,tags:{},type:{name:`(value: string) => void`}},onInputChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`}],description:`Input change event callback - called with value of selected item`,name:`onInputChange`,parent:{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`},required:!1,tags:{},type:{name:`(value: string) => void`}},footerContent:{defaultValue:null,declarations:[{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`}],description:`Optional pinned footer content; use for action buttons`,name:`footerContent`,parent:{fileName:`design_system/src/AutocompleteModal/index.tsx`,name:`AutocompleteModalProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{D.Item.displayName=`AutocompleteModal.Item`,D.Item.__docgenInfo={description:``,displayName:`AutocompleteModal.Item`,filePath:`/home/runner/work/design_system/design_system/src/AutocompleteModal/index.tsx`,methods:[],props:{value:{defaultValue:null,description:``,name:`value`,required:!0,tags:{},type:{name:`any`}}},tags:{}}}catch{}})),k,A,j,M,N,P,F,I,L,R,z,B,V;t((()=>{k=e(n()),O(),c(),{expect:A,screen:j,waitFor:M}=__STORYBOOK_MODULE_TEST__,N=()=>{let[e,t]=(0,k.useState)(`Unassigned`);return k.createElement(`div`,{style:{margin:`8rem`}},k.createElement(D,{inputLabel:`Assignee`,trigger:k.createElement(`span`,null,e),onChange:e=>t(e)},k.createElement(D.Item,{value:`Unassigned`}),k.createElement(D.Item,{value:`Chris`}),k.createElement(D.Item,{value:`Nikhil`}),k.createElement(D.Item,{value:`James`}),k.createElement(D.Item,{value:`Phil`})))},P={name:`Interaction: Opens on click`,render:()=>k.createElement(N,null),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`nds-popover-trigger`)),await M(()=>A(j.getByRole(`combobox`)).toBeVisible())}},F={name:`Interaction: Filters and selects an item`,render:()=>k.createElement(N,null),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`nds-popover-trigger`));let n=await j.findByRole(`combobox`);await t.type(n,`Chris`),await t.click(await j.findByRole(`option`,{name:/chris/i})),await M(()=>A(e.getByTestId(`nds-popover-trigger`)).toHaveTextContent(`Chris`))}},I=()=>{let[e,t]=(0,k.useState)(`Unassigned`),n=k.createElement(`span`,null,e);return k.createElement(`div`,{style:{margin:`8rem`}},k.createElement(D,{inputLabel:`Assignee`,trigger:n,onChange:e=>t(e)},k.createElement(D.Item,{value:`Unassigned`}),k.createElement(D.Item,{value:`Chris`}),k.createElement(D.Item,{value:`Nikhil`}),k.createElement(D.Item,{value:`James`}),k.createElement(D.Item,{value:`Phil`}),k.createElement(D.Item,{value:`Batman Robin`}),k.createElement(D.Item,{value:`Reshav`}),k.createElement(D.Item,{value:`Ethan`}),k.createElement(D.Item,{value:`Xihao`}),k.createElement(D.Item,{value:`Alana`}),k.createElement(D.Item,{value:`Yaro`}),k.createElement(D.Item,{value:`Jeff`}),k.createElement(D.Item,{value:`Johnathan`})))},L=()=>k.createElement(`div`,{style:{margin:`8rem`}},k.createElement(D,{inputLabel:`Search`,trigger:k.createElement(l,{label:`Assign to`}),onChange:e=>alert(`POST request with UUID ${e}`)},k.createElement(D.Item,{value:`dd0bb6a2-af23-4d5e-a2ae-8c57ecd6bc07`,searchValue:`Adam D.`},`Adam D.`),k.createElement(D.Item,{value:`ac6d94fc-fab2-4670-ae30-a8756955f563`,searchValue:`Adam U.`},`Adam U.`),k.createElement(D.Item,{value:`f24b720d-681d-40e9-bdfc-52a7e807aea5`,searchValue:`Ayesha`},`Ayesha`),k.createElement(D.Item,{value:`d9f428ee-6287-4ac1-8e05-e7b5874a568d`,searchValue:`James`},`James`),k.createElement(D.Item,{value:`aad8f0a4-2b2a-4540-8976-54c75e6b23d8`,searchValue:`Martin`},`Martin`))),R=()=>{let[e,t]=(0,k.useState)(`Unassigned`),[n,r]=(0,k.useState)([`Unassigned`,`Chris`,`Nikhil`,`James`,`Phil`,`Batman`,`Reshav`,`Ethan`,`Xihao`,`Alana`,`Yaro`,`Jeff`,`Johnathan`]),i=k.createElement(`span`,null,e);return k.createElement(`div`,{style:{margin:`8rem`}},k.createElement(D,{inputLabel:`Assignee`,trigger:i,onChange:e=>t(e),footerContent:k.createElement(l,{kind:`plain`,label:`Add a new employee`,startIcon:`plus`,onClick:()=>{r(e=>[...e,`Victor (NEW)`])}})},n.map((e,t)=>k.createElement(D.Item,{key:`${e}-${t}`,value:e}))))},z=()=>{let[e,t]=(0,k.useState)(`Unassigned`);return k.createElement(`div`,{style:{margin:`8rem`}},k.createElement(D,{inputLabel:`Assignee`,trigger:t=>k.createElement(`div`,{className:`padding--all--xxs rounded--all`,style:{background:t?`yellow`:`transparent`}},e),onChange:e=>t(e),footerContent:k.createElement(l,{kind:`plain`,label:`Add a new employee`,startIcon:`plus`})},k.createElement(D.Item,{value:`Unassigned`}),k.createElement(D.Item,{value:`Chris`}),k.createElement(D.Item,{value:`Nikhil`}),k.createElement(D.Item,{value:`James`}),k.createElement(D.Item,{value:`Phil`}),k.createElement(D.Item,{value:`Batman`}),k.createElement(D.Item,{value:`Reshav`}),k.createElement(D.Item,{value:`Ethan`}),k.createElement(D.Item,{value:`Xihao`}),k.createElement(D.Item,{value:`Alana`}),k.createElement(D.Item,{value:`Yaro`}),k.createElement(D.Item,{value:`Jeff`}),k.createElement(D.Item,{value:`Johnathan`})))},z.parameters={docs:{description:{story:"The `trigger` prop takes either a ReactNode, or a render function. The render function makes the active state of the popover available to the trigger for conditional styling."}}},B={title:`Components/AutocompleteModal`,component:D},I.__docgenInfo={description:``,methods:[],displayName:`Overview`},L.__docgenInfo={description:``,methods:[],displayName:`WithSearchValue`},R.__docgenInfo={description:``,methods:[],displayName:`WithAction`},z.__docgenInfo={description:``,methods:[],displayName:`TriggerRenderProp`},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on click",
  render: () => <AssigneePicker />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("nds-popover-trigger"));
    await waitFor(() => expect(screen.getByRole("combobox")).toBeVisible());
  }
}`,...P.parameters?.docs?.source},description:{story:"Interaction test that opens the AutocompleteModal so Chromatic can\nsnapshot the popup. Popup content is queried via `screen`.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Filters and selects an item",
  render: () => <AssigneePicker />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("nds-popover-trigger"));
    const input = await screen.findByRole("combobox");
    await userEvent.type(input, "Chris");
    await userEvent.click(await screen.findByRole("option", {
      name: /chris/i
    }));

    // popup closes and the trigger reflects the selection
    await waitFor(() => expect(canvas.getByTestId("nds-popover-trigger")).toHaveTextContent("Chris"));
  }
}`,...F.parameters?.docs?.source},description:{story:`Interaction test for the full flow: open, type to filter, select an
item, and verify the trigger reflects the selection.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}},V=[`Open`,`FiltersAndSelects`,`Overview`,`WithSearchValue`,`WithAction`,`TriggerRenderProp`]}))();export{F as FiltersAndSelects,P as Open,I as Overview,z as TriggerRenderProp,R as WithAction,L as WithSearchValue,V as __namedExportsOrder,B as default};