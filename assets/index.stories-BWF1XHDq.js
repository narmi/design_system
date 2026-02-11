import{e,r as m}from"./iframe-D4iMpBO7.js";import{b as j,a as h}from"./downshift.esm-CRKHonK9.js";import{u as oe}from"./index-ZkiAqpsx.js";import{c as Y}from"./index-RvS1aOr8.js";import{D as ie}from"./index-B6wdp4i_.js";import{B as ce}from"./index-CZ21z5WG.js";import{P as g}from"./index-Dd_fmoIA.js";import{F as me}from"./index-Ck1IIbni.js";import{R as P}from"./index-N8lINMnz.js";import"./preload-helper-PPVm8Dsz.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-Cdo6WU0B.js";import"./AsElement-I3MfNm4w.js";import"./index-Q0tyzMG3.js";import"./index-Chjiymov.js";const F=({children:t})=>e.createElement(e.Fragment,null,t);F.displayName="MultiSelect.Item";F.propTypes={value:g.string.isRequired,searchValue:g.string.isRequired,children:g.oneOfType([g.node,g.arrayOf(g.node)])};F.__docgenInfo={description:"",methods:[],displayName:"MultiSelect.Item",props:{value:{description:`String representation of the option.

This value is also used as a typeahead; if a user types "n" while
the Select is open, highlight will move to the first item with a
value starting with \`n\`.`,type:{name:"string"},required:!0},searchValue:{description:"String to use for typeahead behavior",type:{name:"string"},required:!0},children:{description:"JSX representation of item",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};function v(){return v=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)({}).hasOwnProperty.call(l,s)&&(t[s]=l[s])}return t},v.apply(null,arguments)}const ue=()=>{},L=t=>t?.props?t.props.searchValue||t.props.value:"",R=(t,a)=>t.map(L).includes(L(a)),H=(t,a)=>a.filter(l=>t.includes(l.props.value)),de=(t="",a)=>a.props.searchValue||a.props.value,pe=({selectedItems:t,getSelectedItemProps:a,removeSelectedItem:l,disabled:s,label:p})=>t.length===0?p:e.createElement("div",{className:"nds-multiselect-tokensList"},t.map((r,u)=>{const c=r.props.tokenLabel||L(r);return e.createElement(me,v({key:`${u}-${c}`,label:c,onDismiss:()=>l(r),disabled:s},a({selectedItem:r,i:u})))})),n=({name:t,label:a,children:l,selectedItems:s,onSelectedItemsChange:p=ue,disabled:r=!1,fieldValue:u,errorText:c,testId:N,clearLabel:A="Clear all",isClearable:D=!1,summaryFormatter:z=pe,getTypeaheadString:J=de})=>{const f=m.useMemo(()=>m.Children.toArray(l),[l]),w=s!==void 0,{getSelectedItemProps:W,addSelectedItem:U,removeSelectedItem:_,selectedItems:d,setSelectedItems:B}=j({initialSelectedItems:H(s||[],f),stateReducer:(o,i)=>{const{type:q,changes:y}=i;switch(q){case j.stateChangeTypes.FunctionRemoveSelectedItem:case j.stateChangeTypes.FunctionAddSelectedItem:return p(y.selectedItems.map(L)),y;default:return y}}});m.useEffect(()=>{if(w){const o=H(s,f);B(o)}},[w,s,f,B]);const{isOpen:$,getToggleButtonProps:X,getLabelProps:K,getMenuProps:Q,highlightedIndex:Z,getItemProps:ee,inputValue:te,closeMenu:ae}=h({disabled:r,id:t||`nds-multiselect-${a}`,items:f,itemToString:o=>J(te||"",o),stateReducer:(o,i)=>{const{changes:q,type:y}=i;switch(y){case h.stateChangeTypes.MenuKeyDownEnter:case h.stateChangeTypes.MenuKeyDownSpaceButton:case h.stateChangeTypes.ItemClick:return{...q,isOpen:!0,highlightedIndex:o.highlightedIndex};default:return q}},onStateChange:({type:o,selectedItem:i})=>{switch(o){case h.stateChangeTypes.MenuKeyDownEnter:case h.stateChangeTypes.ItemClick:case h.stateChangeTypes.ToggleButtonKeyDownEnter:R(d,i)?_(i):i&&U(i);return;default:return}}}),{anchorProps:ne,layerProps:le}=oe({isOpen:$,setIsOpen:o=>{o||ae()}}),se=m.useMemo(()=>D&&d.length>0?e.createElement("span",{className:"nds-multiselect-clearAll"},e.createElement(ce,{kind:"plain",size:"xs",onClick:o=>{o.stopPropagation(),w?p([]):B([])}},A)):null,[D,d,w,p,B,A]),re=m.useMemo(()=>z({selectedItems:d,getSelectedItemProps:W,removeSelectedItem:_,disabled:r,label:a}),[d,W,_,r,a,z]);return e.createElement("div",{className:"nds-multiselect","data-testid":N},e.createElement("input",{type:"hidden",name:t,id:t,value:u||d.map(L).join(",")}),e.createElement("div",ne,e.createElement(ie,v({disabled:r,isOpen:$,labelText:re,endContent:se,errorText:c,labelProps:{...K(),style:{...K().style,...D?{display:"block",paddingRight:80}:{}}}},X()))),e.createElement("div",le,e.createElement("div",v({className:Y(["nds-multiselect-list","bgColor--white",{"nds-multiselect-list--error":!!c}])},Q()),$&&e.createElement("ul",{className:"list--reset"},f.map((o,i)=>e.createElement("li",v({key:`item-${i}`,className:Y(["nds-multiselect-item","alignChild--left--center padding--x--s padding--y--xs",{"nds-select-item--highlighted":Z===i,"rounded--top":i===0,"rounded--bottom":i===f.length-1}])},ee({item:o,index:i}),{role:"option","aria-selected":R(d,o).toString()}),e.createElement(P,{as:"span"},e.createElement(P.Item,{as:"span"},o),R(d,o)&&e.createElement(P.Item,{as:"span",shrink:!0},e.createElement("span",{className:"narmi-icon-check fontSize--xl fontWeight--bold"})))))))))};n.Item=F;n.__docgenInfo={description:`Accessible multiple select control for giving users the ability to select
multiple options from a list of options.

Typeahead is enabled based on the \`value\` prop of \`MultiSelect.Item\`
elements passed in. You may also set a custom \`searchValue\`
on each \`MultiSelect.Item\` for control over typeahead behavior.

- isClearable: if true, a "Clear all" button is rendered on the right side of the input.
- clearLabel: overridable text for the clear all button.
- summaryFormatter: an optional function that receives the number of selected items and an array of labels,
        and returns a string summary.`,methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"MultiSelect",props:{onSelectedItemsChange:{defaultValue:{value:"() => {}",computed:!1},description:`Change callback for user actions that select or deselect items.
Called with an array of selected item values.`,type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disables the input and all user interaction.\nYou may still pass in `selectedItems` if items need to be selected\nwhen the input is disabled.",type:{name:"bool"},required:!1},clearLabel:{defaultValue:{value:'"Clear all"',computed:!1},description:"Optional label override for the clear all button",type:{name:"string"},required:!1},isClearable:{defaultValue:{value:"false",computed:!1},description:'If true, renders a "Clear all" button on the right side of the trigger',type:{name:"bool"},required:!1},summaryFormatter:{defaultValue:{value:`({
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
and returns a string summary.`,type:{name:"func"},required:!1},getTypeaheadString:{defaultValue:{value:`(userInput = "", selectItem) => {
  return selectItem.props.searchValue || selectItem.props.value;
}`,computed:!1},description:'Function with signature `(userInputValue, selectItemNode) => {}`,\nused to customize typeahead filtering behavior.\nSee "Changing Typeahead Behavior" story for example.',type:{name:"func"},required:!1},name:{description:"unique name attribute for the input (used for `id` and `name`)",type:{name:"string"},required:!0},label:{description:"Label for the select control",type:{name:"string"},required:!0},selectedItems:{description:"When passed, the MultiSelect becomes fully controlled.\nUse `onSelectedItemsChange` to manage this value.",type:{name:"arrayOf",value:{name:"string"}},required:!1},errorText:{description:`Error message.
When passed, this will cause the trigger to render in error state.`,type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},fieldValue:{description:"Value for the input with the given `name` prop.\nThis should be the value of the field in the submitted form.",type:{name:"string"},required:!1}}};const x=t=>e.createElement(n,t),O=[e.createElement(n.Item,{value:"coffee",tokenLabel:"Coffee",searchValue:"coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(n.Item,{value:"film",tokenLabel:"Film",searchValue:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"truck",tokenLabel:"Truck",searchValue:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(n.Item,{value:"blob",tokenLabel:"Blob",searchValue:"blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob")],k=x.bind({});k.args={name:"overviewStory",label:"Favorite icons",children:O,isClearable:!0};const C=x.bind({});C.args={name:"overviewSummaryStory",label:"Favorite icons",children:O,summaryFormatter:({selectedItems:t,label:a})=>{if(t.length===0)return a;const l=t.map(s=>s.props.tokenLabel||G(s));return t.length===O.length?"All selected":`${t.length} selected: ${l.join(", ")}`},isClearable:!1};const E=x.bind({});E.args={disabled:!0,name:"overviewStory",label:"Favorite icons",selectedItems:["blob","coffee"],children:O};const V=x.bind({});V.args={name:"errorState",label:"Account",children:[e.createElement(n.Item,{value:"checking1234",tokenLabel:"Checking (1234)",searchValue:"checking1234"},"Checking (1234)"),e.createElement(n.Item,{value:"checking4321",tokenLabel:"Checking (4321)",searchValue:"checking4321"},"Checking (4321)")],errorText:"Required"};const b=()=>{const[t,a]=m.useState(""),l=s=>{a(s.join(","))};return e.createElement(n,{name:"controlled-product-field",fieldValue:t,label:"Favorite Icons",onSelectedItemsChange:l},e.createElement(n.Item,{value:"coffee",tokenLabel:"Coffee",searchValue:"coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(n.Item,{value:"film",tokenLabel:"Film",searchValue:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"truck",tokenLabel:"Truck",searchValue:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(n.Item,{value:"blob",tokenLabel:"Blob",searchValue:"blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"))};b.parameters={docs:{description:{story:"By default, `fieldValue` populates the hidden input as a comma-separated string of selected values. You may customize this via the `fieldValue` prop."}}};const M=()=>{const[t,a]=m.useState(["truck","coffee"]),l=s=>{a(s)};return e.createElement(n,{name:"controlled-product-field",label:"Favorite Icons",selectedItems:t,onSelectedItemsChange:l,isClearable:!0},e.createElement(n.Item,{value:"coffee",tokenLabel:"Coffee",searchValue:"coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(n.Item,{value:"film",tokenLabel:"Film",searchValue:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"truck",tokenLabel:"Truck",searchValue:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(n.Item,{value:"blob",tokenLabel:"Blob",searchValue:"blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"))},T=()=>{const[t,a]=m.useState(["film"]),l=s=>{a(s)};return e.createElement(n,{name:"custom-token-labels",label:"Favorite Icons",selectedItems:t,onSelectedItemsChange:l},e.createElement(n.Item,{value:"film",tokenLabel:"Movies",searchValue:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"coffee",tokenLabel:"Hot Bean Water",searchValue:"coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"))},I=()=>{const[t,a]=m.useState(["coffee","truck"]),l=r=>{a(r)},s=[{label:"Coffee",icon:"coffee",value:"coffee"},{label:"Film",icon:"film",value:"film"},{label:"Truck",icon:"truck",value:"truck"},{label:"Blob",icon:"blob",value:"blob"}].map(({label:r,icon:u,value:c})=>e.createElement(n.Item,{key:c,value:c,tokenLabel:r,searchValue:c},e.createElement("span",{className:`narmi-icon-${u} padding--right--xs`}),r)),p=({selectedItems:r,label:u})=>{if(r.length===0)return u;const c=r.map(N=>N.props.tokenLabel||G(N));return`Selected (${r.length}): ${c.join(", ")}`};return e.createElement(n,{name:"custom-summary-formatter",label:"Favorite Icons",selectedItems:t,onSelectedItemsChange:l,isClearable:!0,summaryFormatter:p},s)};I.parameters={docs:{description:{story:"This story demonstrates a MultiSelect with a custom summaryFormatter that returns a summary string using tokenLabel. The formatter receives an object with the current selected items and returns a custom summary string."}}};const S=x.bind({});S.args={id:"customTypeaheadBehavior",label:"Select an Industry",getTypeaheadString:(t,a)=>{let l=a.props.searchValue||a.props.value||"";return/\d/.test(t)&&(l=a.props.value),l},children:[{name:"Agriculture",code:"12345"},{name:"Manufacturing",code:"55555"},{name:"Logistics",code:"32144"},{name:"Hospitality",code:"22147"}].map(({name:t,code:a})=>e.createElement(n.Item,{key:a,value:a,searchValue:t},t," - ",a))};S.parameters={docs:{description:{story:"You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha"}}};const Ne={title:"Components/MultiSelect",component:n,subcomponents:{MultiSelectItem:F},argTypes:{children:{control:!1}}},G=t=>t?.props?t.props.searchValue||t.props.value:"";b.__docgenInfo={description:"",methods:[],displayName:"SettingTheFieldValue"};M.__docgenInfo={description:"",methods:[],displayName:"ControlledSelectedItems"};T.__docgenInfo={description:"",methods:[],displayName:"CustomTokenValues"};I.__docgenInfo={description:"",methods:[],displayName:"CustomSummaryFormatter"};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...V.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...S.parameters?.docs?.source}}};const we=["Overview","OverviewSummary","Disabled","ErrorState","SettingTheFieldValue","ControlledSelectedItems","CustomTokenValues","CustomSummaryFormatter","ChangingTypeaheadBehavior"];export{S as ChangingTypeaheadBehavior,M as ControlledSelectedItems,I as CustomSummaryFormatter,T as CustomTokenValues,E as Disabled,V as ErrorState,k as Overview,C as OverviewSummary,b as SettingTheFieldValue,we as __namedExportsOrder,Ne as default};
