import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-x8KF2Ae3.js";import{t as r}from"./prop-types-KQKEvljm.js";import{n as i,t as a}from"./classcat-BMx3V7o4.js";import{n as o,t as s}from"./Row-BcIRHhFt.js";import{n as c,t as l}from"./useDropdownLayer-DWYdcEh8.js";import{n as u,t as d}from"./Button-DfBntpey.js";import{i as f,r as p,t as m}from"./downshift.esm-CJbjFaV1.js";import{n as h,t as g}from"./DropdownTrigger-BdbtNwmK.js";import{n as _,t as v}from"./FieldToken-pSWjw1iK.js";var y,b,x,S=e((()=>{y=t(n()),b=t(r()),x=({children:e})=>y.createElement(y.Fragment,null,e),x.displayName=`MultiSelect.Item`,x.propTypes={value:b.default.string.isRequired,searchValue:b.default.string.isRequired,children:b.default.oneOfType([b.default.node,b.default.arrayOf(b.default.node)])},x.__docgenInfo={description:``,methods:[],displayName:`MultiSelect.Item`,props:{value:{description:`String representation of the option.

This value is also used as a typeahead; if a user types "n" while
the Select is open, highlight will move to the first item with a
value starting with \`n\`.`,type:{name:`string`},required:!0},searchValue:{description:`String to use for typeahead behavior`,type:{name:`string`},required:!0},children:{description:`JSX representation of item`,type:{name:`union`,value:[{name:`node`},{name:`arrayOf`,value:{name:`node`}}]},required:!1}}}}));function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(null,arguments)}var w,T,E,D,O,k,A,j,M=e((()=>{w=t(n()),m(),l(),i(),h(),u(),S(),_(),o(),T=()=>{},E=e=>e?.props?e.props.searchValue||e.props.value:``,D=(e,t)=>e.map(E).includes(E(t)),O=(e,t)=>t.filter(t=>e.includes(t.props.value)),k=(e=``,t)=>t.props.searchValue||t.props.value,A=({selectedItems:e,getSelectedItemProps:t,removeSelectedItem:n,disabled:r,label:i})=>e.length===0?i:w.createElement(`div`,{className:`nds-multiselect-tokensList`},e.map((e,i)=>{let a=e.props.tokenLabel||E(e);return w.createElement(v,C({key:`${i}-${a}`,label:a,onDismiss:()=>n(e),disabled:r},t({selectedItem:e,i})))})),j=({name:e,label:t,children:n,selectedItems:r,onSelectedItemsChange:i=T,disabled:o=!1,fieldValue:l,errorText:u,testId:m,clearLabel:h=`Clear all`,isClearable:_=!1,summaryFormatter:v=A,getTypeaheadString:y=k})=>{let b=(0,w.useMemo)(()=>w.Children.toArray(n),[n]),x=r!==void 0,{getSelectedItemProps:S,addSelectedItem:j,removeSelectedItem:M,selectedItems:N,setSelectedItems:P}=p({initialSelectedItems:O(r||[],b),stateReducer:(e,t)=>{let{type:n,changes:r}=t;switch(n){case p.stateChangeTypes.FunctionRemoveSelectedItem:case p.stateChangeTypes.FunctionAddSelectedItem:return i(r.selectedItems.map(E)),r;default:return r}}});(0,w.useEffect)(()=>{x&&P(O(r,b))},[x,r,b,P]);let{isOpen:F,getToggleButtonProps:I,getLabelProps:L,getMenuProps:R,highlightedIndex:z,getItemProps:B,inputValue:V,closeMenu:H}=f({disabled:o,id:e||`nds-multiselect-${t}`,items:b,itemToString:e=>y(V||``,e),stateReducer:(e,t)=>{let{changes:n,type:r}=t;switch(r){case f.stateChangeTypes.MenuKeyDownEnter:case f.stateChangeTypes.MenuKeyDownSpaceButton:case f.stateChangeTypes.ItemClick:return{...n,isOpen:!0,highlightedIndex:e.highlightedIndex};default:return n}},onStateChange:({type:e,selectedItem:t})=>{switch(e){case f.stateChangeTypes.MenuKeyDownEnter:case f.stateChangeTypes.ItemClick:case f.stateChangeTypes.ToggleButtonKeyDownEnter:D(N,t)?M(t):t&&j(t);return;default:return}}}),{anchorProps:U,layerProps:W}=c({isOpen:F,setIsOpen:e=>{e||H()},polyfillScrollBug:!0}),G=(0,w.useMemo)(()=>_&&N.length>0?w.createElement(`span`,{className:`nds-multiselect-clearAll`},w.createElement(d,{kind:`plain`,size:`xs`,onClick:e=>{e.stopPropagation(),x?i([]):P([])}},h)):null,[_,N,x,i,P,h]),K=(0,w.useMemo)(()=>v({selectedItems:N,getSelectedItemProps:S,removeSelectedItem:M,disabled:o,label:t}),[N,S,M,o,t,v]);return w.createElement(`div`,{className:`nds-multiselect`,"data-testid":m},w.createElement(`input`,{type:`hidden`,name:e,id:e,value:l||N.map(E).join(`,`)}),w.createElement(`div`,U,w.createElement(g,C({disabled:o,isOpen:F,labelText:K,endContent:G,errorText:u,labelProps:{...L(),style:{...L().style,..._?{display:`block`,paddingRight:80}:{}}}},I()))),w.createElement(`div`,W,w.createElement(`div`,C({className:a([`nds-multiselect-list`,`bgColor--white`,{"nds-multiselect-list--error":!!u}])},R()),F&&w.createElement(`ul`,{className:`list--reset`},b.map((e,t)=>w.createElement(`li`,C({key:`item-${t}`,className:a([`nds-multiselect-item`,`alignChild--left--center padding--x--s padding--y--xs`,{"nds-select-item--highlighted":z===t,"rounded--top":t===0,"rounded--bottom":t===b.length-1}])},B({item:e,index:t}),{role:`option`,"aria-selected":D(N,e).toString()}),w.createElement(s,{as:`span`},w.createElement(s.Item,{as:`span`},e),D(N,e)&&w.createElement(s.Item,{as:`span`,shrink:!0},w.createElement(`span`,{className:`narmi-icon-check fontSize--xl fontWeight--bold`})))))))))},j.Item=x,j.__docgenInfo={description:`Accessible multiple select control for giving users the ability to select
multiple options from a list of options.

Typeahead is enabled based on the \`value\` prop of \`MultiSelect.Item\`
elements passed in. You may also set a custom \`searchValue\`
on each \`MultiSelect.Item\` for control over typeahead behavior.

- isClearable: if true, a "Clear all" button is rendered on the right side of the input.
- clearLabel: overridable text for the clear all button.
- summaryFormatter: an optional function that receives the number of selected items and an array of labels,
        and returns a string summary.`,methods:[{name:`Item`,docblock:null,modifiers:[`static`],params:[{name:`{ children }`,optional:!1,type:null}],returns:null}],displayName:`MultiSelect`,props:{onSelectedItemsChange:{defaultValue:{value:`() => {}`,computed:!1},description:`Change callback for user actions that select or deselect items.
Called with an array of selected item values.`,type:{name:`func`},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},description:`Disables the input and all user interaction.
You may still pass in \`selectedItems\` if items need to be selected
when the input is disabled.`,type:{name:`bool`},required:!1},clearLabel:{defaultValue:{value:`"Clear all"`,computed:!1},description:`Optional label override for the clear all button`,type:{name:`string`},required:!1},isClearable:{defaultValue:{value:`false`,computed:!1},description:`If true, renders a "Clear all" button on the right side of the trigger`,type:{name:`bool`},required:!1},summaryFormatter:{defaultValue:{value:`({
  selectedItems,
  getSelectedItemProps,
  removeSelectedItem,
  disabled,
  label,
}) => {
  if (selectedItems.length === 0) {
    return label;
  }
  return (
    <div className="nds-multiselect-tokensList">
      {selectedItems.map((item, i) => {
        const tokenLabel = item.props.tokenLabel || itemToString(item);
        return (
          <FieldToken
            key={\`\${i}-\${tokenLabel}\`}
            label={tokenLabel}
            onDismiss={() => removeSelectedItem(item)}
            disabled={disabled}
            {...getSelectedItemProps({ selectedItem: item, i })}
          />
        );
      })}
    </div>
  );
}`,computed:!1},description:`Optional function to format the summary text when kind is "summary".
The function is passed the number of selected items and an array of labels,
and returns a string summary.`,type:{name:`func`},required:!1},getTypeaheadString:{defaultValue:{value:`(userInput = "", selectItem) => {
  return selectItem.props.searchValue || selectItem.props.value;
}`,computed:!1},description:`Function with signature \`(userInputValue, selectItemNode) => {}\`,
used to customize typeahead filtering behavior.
See "Changing Typeahead Behavior" story for example.`,type:{name:`func`},required:!1},name:{description:"unique name attribute for the input (used for `id` and `name`)",type:{name:`string`},required:!0},label:{description:`Label for the select control`,type:{name:`string`},required:!0},selectedItems:{description:"When passed, the MultiSelect becomes fully controlled.\nUse `onSelectedItemsChange` to manage this value.",type:{name:`arrayOf`,value:{name:`string`}},required:!1},errorText:{description:`Error message.
When passed, this will cause the trigger to render in error state.`,type:{name:`string`},required:!1},children:{description:``,type:{name:`union`,value:[{name:`node`},{name:`arrayOf`,value:{name:`node`}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:`string`},required:!1},fieldValue:{description:"Value for the input with the given `name` prop.\nThis should be the value of the field in the submitted form.",type:{name:`string`},required:!1}}}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{N=t(n()),M(),S(),P=e=>N.createElement(j,e),F=[N.createElement(j.Item,{value:`coffee`,tokenLabel:`Coffee`,searchValue:`coffee`},N.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`),N.createElement(j.Item,{value:`film`,tokenLabel:`Film`,searchValue:`film`},N.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),N.createElement(j.Item,{value:`truck`,tokenLabel:`Truck`,searchValue:`truck`},N.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),N.createElement(j.Item,{value:`blob`,tokenLabel:`Blob`,searchValue:`blob`},N.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`)],I=P.bind({}),I.args={name:`overviewStory`,label:`Favorite icons`,children:F,isClearable:!0},L=P.bind({}),L.args={name:`overviewSummaryStory`,label:`Favorite icons`,children:F,summaryFormatter:({selectedItems:e,label:t})=>{if(e.length===0)return t;let n=e.map(e=>e.props.tokenLabel||K(e));return e.length===F.length?`All selected`:`${e.length} selected: ${n.join(`, `)}`},isClearable:!1},R=P.bind({}),R.args={disabled:!0,name:`overviewStory`,label:`Favorite icons`,selectedItems:[`blob`,`coffee`],children:F},z=P.bind({}),z.args={name:`errorState`,label:`Account`,children:[N.createElement(j.Item,{value:`checking1234`,tokenLabel:`Checking (1234)`,searchValue:`checking1234`},`Checking (1234)`),N.createElement(j.Item,{value:`checking4321`,tokenLabel:`Checking (4321)`,searchValue:`checking4321`},`Checking (4321)`)],errorText:`Required`},B=()=>{let[e,t]=(0,N.useState)(``);return N.createElement(j,{name:`controlled-product-field`,fieldValue:e,label:`Favorite Icons`,onSelectedItemsChange:e=>{t(e.join(`,`))}},N.createElement(j.Item,{value:`coffee`,tokenLabel:`Coffee`,searchValue:`coffee`},N.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`),N.createElement(j.Item,{value:`film`,tokenLabel:`Film`,searchValue:`film`},N.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),N.createElement(j.Item,{value:`truck`,tokenLabel:`Truck`,searchValue:`truck`},N.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),N.createElement(j.Item,{value:`blob`,tokenLabel:`Blob`,searchValue:`blob`},N.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`))},B.parameters={docs:{description:{story:"By default, `fieldValue` populates the hidden input as a comma-separated string of selected values. You may customize this via the `fieldValue` prop."}}},V=()=>{let[e,t]=(0,N.useState)([`truck`,`coffee`]);return N.createElement(j,{name:`controlled-product-field`,label:`Favorite Icons`,selectedItems:e,onSelectedItemsChange:e=>{t(e)},isClearable:!0},N.createElement(j.Item,{value:`coffee`,tokenLabel:`Coffee`,searchValue:`coffee`},N.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`),N.createElement(j.Item,{value:`film`,tokenLabel:`Film`,searchValue:`film`},N.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),N.createElement(j.Item,{value:`truck`,tokenLabel:`Truck`,searchValue:`truck`},N.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),N.createElement(j.Item,{value:`blob`,tokenLabel:`Blob`,searchValue:`blob`},N.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`))},H=()=>{let[e,t]=(0,N.useState)([`film`]);return N.createElement(j,{name:`custom-token-labels`,label:`Favorite Icons`,selectedItems:e,onSelectedItemsChange:e=>{t(e)}},N.createElement(j.Item,{value:`film`,tokenLabel:`Movies`,searchValue:`film`},N.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),N.createElement(j.Item,{value:`coffee`,tokenLabel:`Hot Bean Water`,searchValue:`coffee`},N.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`))},U=()=>{let[e,t]=(0,N.useState)([`coffee`,`truck`]),n=e=>{t(e)},r=[{label:`Coffee`,icon:`coffee`,value:`coffee`},{label:`Film`,icon:`film`,value:`film`},{label:`Truck`,icon:`truck`,value:`truck`},{label:`Blob`,icon:`blob`,value:`blob`}].map(({label:e,icon:t,value:n})=>N.createElement(j.Item,{key:n,value:n,tokenLabel:e,searchValue:n},N.createElement(`span`,{className:`narmi-icon-${t} padding--right--xs`}),e));return N.createElement(j,{name:`custom-summary-formatter`,label:`Favorite Icons`,selectedItems:e,onSelectedItemsChange:n,isClearable:!0,summaryFormatter:({selectedItems:e,label:t})=>{if(e.length===0)return t;let n=e.map(e=>e.props.tokenLabel||K(e));return`Selected (${e.length}): ${n.join(`, `)}`}},r)},U.parameters={docs:{description:{story:`This story demonstrates a MultiSelect with a custom summaryFormatter that returns a summary string using tokenLabel. The formatter receives an object with the current selected items and returns a custom summary string.`}}},W=P.bind({}),W.args={id:`customTypeaheadBehavior`,label:`Select an Industry`,getTypeaheadString:(e,t)=>{let n=t.props.searchValue||t.props.value||``;return/\d/.test(e)&&(n=t.props.value),n},children:[{name:`Agriculture`,code:`12345`},{name:`Manufacturing`,code:`55555`},{name:`Logistics`,code:`32144`},{name:`Hospitality`,code:`22147`}].map(({name:e,code:t})=>N.createElement(j.Item,{key:t,value:t,searchValue:e},e,` - `,t))},W.parameters={docs:{description:{story:"You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha"}}},G={title:`Components/MultiSelect`,component:j,subcomponents:{MultiSelectItem:x},argTypes:{children:{control:!1}}},K=e=>e?.props?e.props.searchValue||e.props.value:``,B.__docgenInfo={description:``,methods:[],displayName:`SettingTheFieldValue`},V.__docgenInfo={description:``,methods:[],displayName:`ControlledSelectedItems`},H.__docgenInfo={description:``,methods:[],displayName:`CustomTokenValues`},U.__docgenInfo={description:``,methods:[],displayName:`CustomSummaryFormatter`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  // Demonstrates how fieldValue can be used to override the hidden input value.
  const [fieldValue, setFieldValue] = useState("");
  const handleSelectedItemsChange = selectedItems => {
    setFieldValue(selectedItems.join(","));
  };
  return <MultiSelect name="controlled-product-field" fieldValue={fieldValue} label="Favorite Icons" onSelectedItemsChange={handleSelectedItemsChange}>
      <MultiSelect.Item value="coffee" tokenLabel="Coffee" searchValue="coffee">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
      <MultiSelect.Item value="film" tokenLabel="Film" searchValue="film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="truck" tokenLabel="Truck" searchValue="truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </MultiSelect.Item>
      <MultiSelect.Item value="blob" tokenLabel="Blob" searchValue="blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </MultiSelect.Item>
    </MultiSelect>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  // Demonstrates a fully controlled MultiSelect using external state.
  const [selectedItems, setSelectedItems] = useState(["truck", "coffee"]);
  const handleSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };
  return <MultiSelect name="controlled-product-field" label="Favorite Icons" selectedItems={selectedItems} onSelectedItemsChange={handleSelectedItemsChange} isClearable>
      <MultiSelect.Item value="coffee" tokenLabel="Coffee" searchValue="coffee">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
      <MultiSelect.Item value="film" tokenLabel="Film" searchValue="film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="truck" tokenLabel="Truck" searchValue="truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </MultiSelect.Item>
      <MultiSelect.Item value="blob" tokenLabel="Blob" searchValue="blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </MultiSelect.Item>
    </MultiSelect>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  // Demonstrates usage of tokenLabel to override token display text.
  const [selectedItems, setSelectedItems] = useState(["film"]);
  const handleSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };
  return <MultiSelect name="custom-token-labels" label="Favorite Icons" selectedItems={selectedItems} onSelectedItemsChange={handleSelectedItemsChange}>
      <MultiSelect.Item value="film" tokenLabel="Movies" searchValue="film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="coffee" tokenLabel="Hot Bean Water" searchValue="coffee">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
    </MultiSelect>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  // Demonstrates a custom summary formatter that returns a summary string.
  const [selectedItems, setSelectedItems] = useState(["coffee", "truck"]);
  const handleSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };
  const mainItems = [{
    label: "Coffee",
    icon: "coffee",
    value: "coffee"
  }, {
    label: "Film",
    icon: "film",
    value: "film"
  }, {
    label: "Truck",
    icon: "truck",
    value: "truck"
  }, {
    label: "Blob",
    icon: "blob",
    value: "blob"
  }].map(({
    label,
    icon,
    value
  }) => <MultiSelect.Item key={value} value={value} tokenLabel={label} searchValue={value}>
      <span className={\`narmi-icon-\${icon} padding--right--xs\`} />
      {label}
    </MultiSelect.Item>);

  // Custom summary formatter that returns a summary string using tokenLabel.
  const formatter = ({
    selectedItems,
    label
  }) => {
    if (selectedItems.length === 0) {
      return label;
    }
    const selectedLabels = selectedItems.map(item => item.props.tokenLabel || itemToString(item));
    return \`Selected (\${selectedItems.length}): \${selectedLabels.join(", ")}\`;
  };
  return <MultiSelect name="custom-summary-formatter" label="Favorite Icons" selectedItems={selectedItems} onSelectedItemsChange={handleSelectedItemsChange} isClearable summaryFormatter={formatter}>
      {mainItems}
    </MultiSelect>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...W.parameters?.docs?.source}}},q=[`Overview`,`OverviewSummary`,`Disabled`,`ErrorState`,`SettingTheFieldValue`,`ControlledSelectedItems`,`CustomTokenValues`,`CustomSummaryFormatter`,`ChangingTypeaheadBehavior`]}))();export{W as ChangingTypeaheadBehavior,V as ControlledSelectedItems,U as CustomSummaryFormatter,H as CustomTokenValues,R as Disabled,z as ErrorState,I as Overview,L as OverviewSummary,B as SettingTheFieldValue,q as __namedExportsOrder,G as default};