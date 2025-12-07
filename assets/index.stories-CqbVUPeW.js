import{e,r as m}from"./iframe-D-UXRf5F.js";import{u as j,a as f}from"./downshift.esm-CwJtaJI1.js";import{u as oe}from"./index-DQBXPPTy.js";import{c as Y}from"./index-RvS1aOr8.js";import{D as ie}from"./index-Co1W-Jys.js";import{B as ce}from"./index-B1I_qJfO.js";import{P as h}from"./index-CThef_M3.js";import{F as me}from"./index-CStLZhjs.js";import{R as P}from"./index-CoeQiwh5.js";import"./preload-helper-PPVm8Dsz.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-C8nKdo25.js";import"./AsElement-B5ZMfSCl.js";import"./index-DXDwmObX.js";import"./index-Chjiymov.js";const x=({children:t})=>e.createElement(e.Fragment,null,t);x.displayName="MultiSelect.Item";x.propTypes={value:h.string.isRequired,searchValue:h.string,children:h.oneOfType([h.node,h.arrayOf(h.node)])};x.__docgenInfo={description:"",methods:[],displayName:"MultiSelect.Item",props:{value:{description:`String representation of the option.

This value is also used as a typeahead; if a user types "n" while
the Select is open, highlight will move to the first item with a
value starting with \`n\`.`,type:{name:"string"},required:!0},searchValue:{description:"Optional prop that takes a string to use for typeahead behavior",type:{name:"string"},required:!1},children:{description:"JSX representation of item",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};function v(){return v=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var l in s)({}).hasOwnProperty.call(s,l)&&(t[l]=s[l])}return t},v.apply(null,arguments)}const ue=()=>{},F=t=>t?.props?t.props.searchValue||t.props.value:"",A=(t,a)=>t.map(F).includes(F(a)),H=(t,a)=>a.filter(s=>t.includes(s.props.value)),de=(t="",a)=>a.props.searchValue||a.props.value,pe=({selectedItems:t,getSelectedItemProps:a,removeSelectedItem:s,disabled:l,label:p})=>t.length===0?p:e.createElement("div",{className:"nds-multiselect-tokensList"},t.map((r,u)=>{const c=r.props.tokenLabel||F(r);return e.createElement(me,v({key:`${u}-${c}`,label:c,onDismiss:()=>s(r),disabled:l},a({selectedItem:r,i:u})))})),n=({name:t,label:a,children:s,selectedItems:l,onSelectedItemsChange:p=ue,disabled:r=!1,fieldValue:u,errorText:c,testId:V,clearLabel:R="Clear all",isClearable:D=!1,summaryFormatter:z=pe,getTypeaheadString:J=de})=>{const g=m.useMemo(()=>m.Children.toArray(s),[s]),w=l!==void 0,{getSelectedItemProps:W,addSelectedItem:U,removeSelectedItem:_,selectedItems:d,setSelectedItems:B}=j({initialSelectedItems:H(l||[],g),stateReducer:(o,i)=>{const{type:O,changes:y}=i;switch(O){case j.stateChangeTypes.FunctionRemoveSelectedItem:case j.stateChangeTypes.FunctionAddSelectedItem:return p(y.selectedItems.map(F)),y;default:return y}}});m.useEffect(()=>{if(w){const o=H(l,g);B(o)}},[w,l,g,B]);const{isOpen:$,getToggleButtonProps:X,getLabelProps:K,getMenuProps:Q,highlightedIndex:Z,getItemProps:ee,inputValue:te,closeMenu:ae}=f({disabled:r,id:t||`nds-multiselect-${a}`,items:g,itemToString:o=>J(te||"",o),stateReducer:(o,i)=>{const{changes:O,type:y}=i;switch(y){case f.stateChangeTypes.MenuKeyDownEnter:case f.stateChangeTypes.MenuKeyDownSpaceButton:case f.stateChangeTypes.ItemClick:return{...O,isOpen:!0,highlightedIndex:o.highlightedIndex};default:return O}},onStateChange:({type:o,selectedItem:i})=>{switch(o){case f.stateChangeTypes.MenuKeyDownEnter:case f.stateChangeTypes.ItemClick:case f.stateChangeTypes.ToggleButtonKeyDownEnter:A(d,i)?_(i):i&&U(i);return;default:return}}}),{anchorProps:ne,layerProps:se}=oe({isOpen:$,setIsOpen:o=>{o||ae()}}),le=m.useMemo(()=>D&&d.length>0?e.createElement("span",{className:"nds-multiselect-clearAll"},e.createElement(ce,{kind:"plain",size:"xs",onClick:o=>{o.stopPropagation(),w?p([]):B([])}},R)):null,[D,d,w,p,B,R]),re=m.useMemo(()=>z({selectedItems:d,getSelectedItemProps:W,removeSelectedItem:_,disabled:r,label:a}),[d,W,_,r,a,z]);return e.createElement("div",{className:"nds-multiselect","data-testid":V},e.createElement("input",{type:"hidden",name:t,id:t,value:u||d.map(F).join(",")}),e.createElement("div",ne,e.createElement(ie,v({disabled:r,isOpen:$,labelText:re,endContent:le,errorText:c,labelProps:{...K(),style:{...K().style,...D?{display:"block",paddingRight:80}:{}}}},X()))),e.createElement("div",se,e.createElement("div",v({className:Y(["nds-multiselect-list","bgColor--white",{"nds-multiselect-list--error":!!c}])},Q()),$&&e.createElement("ul",{className:"list--reset"},g.map((o,i)=>e.createElement("li",v({key:`item-${i}`,className:Y(["nds-multiselect-item","alignChild--left--center padding--x--s padding--y--xs",{"nds-select-item--highlighted":Z===i,"rounded--top":i===0,"rounded--bottom":i===g.length-1}])},ee({item:o,index:i}),{role:"option","aria-selected":A(d,o).toString()}),e.createElement(P,{as:"span"},e.createElement(P.Item,{as:"span"},o),A(d,o)&&e.createElement(P.Item,{as:"span",shrink:!0},e.createElement("span",{className:"narmi-icon-check fontSize--l fontWeight--bold"})))))))))};n.Item=x;n.__docgenInfo={description:`Accessible multiple select control for giving users the ability to select
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
When passed, this will cause the trigger to render in error state.`,type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},fieldValue:{description:"Value for the input with the given `name` prop.\nThis should be the value of the field in the submitted form.",type:{name:"string"},required:!1}}};const N=t=>e.createElement(n,t),q=[e.createElement(n.Item,{value:"coffee",tokenLabel:"Coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(n.Item,{value:"film",tokenLabel:"Film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"truck",tokenLabel:"Truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(n.Item,{value:"blob",tokenLabel:"Blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob")],k=N.bind({});k.args={name:"overviewStory",label:"Favorite icons",children:q,isClearable:!0};const C=N.bind({});C.args={name:"overviewSummaryStory",label:"Favorite icons",children:q,summaryFormatter:({selectedItems:t,label:a})=>{if(t.length===0)return a;const s=t.map(l=>l.props.tokenLabel||G(l));return t.length===q.length?"All selected":`${t.length} selected: ${s.join(", ")}`},isClearable:!1};const E=N.bind({});E.args={disabled:!0,name:"overviewStory",label:"Favorite icons",selectedItems:["blob","coffee"],children:q};const M=N.bind({});M.args={name:"errorState",label:"Account",children:[e.createElement(n.Item,{value:"checking1234",tokenLabel:"Checking (1234)"},"Checking (1234)"),e.createElement(n.Item,{value:"checking4321",tokenLabel:"Checking (4321)"},"Checking (4321)")],errorText:"Required"};const b=()=>{const[t,a]=m.useState(""),s=l=>{a(l.join(","))};return e.createElement(n,{name:"controlled-product-field",fieldValue:t,label:"Favorite Icons",onSelectedItemsChange:s},e.createElement(n.Item,{value:"coffee",tokenLabel:"Coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(n.Item,{value:"film",tokenLabel:"Film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"truck",tokenLabel:"Truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(n.Item,{value:"blob",tokenLabel:"Blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"))};b.parameters={docs:{description:{story:"By default, `fieldValue` populates the hidden input as a comma-separated string of selected values. You may customize this via the `fieldValue` prop."}}};const T=()=>{const[t,a]=m.useState(["truck","coffee"]),s=l=>{a(l)};return e.createElement(n,{name:"controlled-product-field",label:"Favorite Icons",selectedItems:t,onSelectedItemsChange:s,isClearable:!0},e.createElement(n.Item,{value:"coffee",tokenLabel:"Coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(n.Item,{value:"film",tokenLabel:"Film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"truck",tokenLabel:"Truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(n.Item,{value:"blob",tokenLabel:"Blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"))},L=()=>{const[t,a]=m.useState(["film"]),s=l=>{a(l)};return e.createElement(n,{name:"custom-token-labels",label:"Favorite Icons",selectedItems:t,onSelectedItemsChange:s},e.createElement(n.Item,{value:"film",tokenLabel:"Movies"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"coffee",tokenLabel:"Hot Bean Water"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"))},I=()=>{const[t,a]=m.useState(["coffee","truck"]),s=r=>{a(r)},l=[{label:"Coffee",icon:"coffee",value:"coffee"},{label:"Film",icon:"film",value:"film"},{label:"Truck",icon:"truck",value:"truck"},{label:"Blob",icon:"blob",value:"blob"}].map(({label:r,icon:u,value:c})=>e.createElement(n.Item,{key:c,value:c,tokenLabel:r},e.createElement("span",{className:`narmi-icon-${u} padding--right--xs`}),r)),p=({selectedItems:r,label:u})=>{if(r.length===0)return u;const c=r.map(V=>V.props.tokenLabel||G(V));return`Selected (${r.length}): ${c.join(", ")}`};return e.createElement(n,{name:"custom-summary-formatter",label:"Favorite Icons",selectedItems:t,onSelectedItemsChange:s,isClearable:!0,summaryFormatter:p},l)};I.parameters={docs:{description:{story:"This story demonstrates a MultiSelect with a custom summaryFormatter that returns a summary string using tokenLabel. The formatter receives an object with the current selected items and returns a custom summary string."}}};const S=N.bind({});S.args={id:"customTypeaheadBehavior",label:"Select an Industry",getTypeaheadString:(t,a)=>{let s=a.props.searchValue||a.props.value||"";return/\d/.test(t)&&(s=a.props.value),s},children:[{name:"Agriculture",code:"12345"},{name:"Manufacturing",code:"55555"},{name:"Logistics",code:"32144"},{name:"Hospitality",code:"22147"}].map(({name:t,code:a})=>e.createElement(n.Item,{key:a,value:a,searchValue:t},t," - ",a))};S.parameters={docs:{description:{story:"You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha"}}};const Ve={title:"Components/MultiSelect",component:n,subcomponents:{MultiSelectItem:x},argTypes:{children:{control:!1}}},G=t=>t?.props?t.props.searchValue||t.props.value:"";b.__docgenInfo={description:"",methods:[],displayName:"SettingTheFieldValue"};T.__docgenInfo={description:"",methods:[],displayName:"ControlledSelectedItems"};L.__docgenInfo={description:"",methods:[],displayName:"CustomTokenValues"};I.__docgenInfo={description:"",methods:[],displayName:"CustomSummaryFormatter"};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...M.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  // Demonstrates how fieldValue can be used to override the hidden input value.
  const [fieldValue, setFieldValue] = useState("");
  const handleSelectedItemsChange = selectedItems => {
    setFieldValue(selectedItems.join(","));
  };
  return <MultiSelect name="controlled-product-field" fieldValue={fieldValue} label="Favorite Icons" onSelectedItemsChange={handleSelectedItemsChange}>
      <MultiSelect.Item value="coffee" tokenLabel="Coffee">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
      <MultiSelect.Item value="film" tokenLabel="Film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="truck" tokenLabel="Truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </MultiSelect.Item>
      <MultiSelect.Item value="blob" tokenLabel="Blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </MultiSelect.Item>
    </MultiSelect>;
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  // Demonstrates a fully controlled MultiSelect using external state.
  const [selectedItems, setSelectedItems] = useState(["truck", "coffee"]);
  const handleSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };
  return <MultiSelect name="controlled-product-field" label="Favorite Icons" selectedItems={selectedItems} onSelectedItemsChange={handleSelectedItemsChange} isClearable>
      <MultiSelect.Item value="coffee" tokenLabel="Coffee">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
      <MultiSelect.Item value="film" tokenLabel="Film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="truck" tokenLabel="Truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </MultiSelect.Item>
      <MultiSelect.Item value="blob" tokenLabel="Blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </MultiSelect.Item>
    </MultiSelect>;
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  // Demonstrates usage of tokenLabel to override token display text.
  const [selectedItems, setSelectedItems] = useState(["film"]);
  const handleSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };
  return <MultiSelect name="custom-token-labels" label="Favorite Icons" selectedItems={selectedItems} onSelectedItemsChange={handleSelectedItemsChange}>
      <MultiSelect.Item value="film" tokenLabel="Movies">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="coffee" tokenLabel="Hot Bean Water">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
    </MultiSelect>;
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
  }) => <MultiSelect.Item key={value} value={value} tokenLabel={label}>
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
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...S.parameters?.docs?.source}}};const we=["Overview","OverviewSummary","Disabled","ErrorState","SettingTheFieldValue","ControlledSelectedItems","CustomTokenValues","CustomSummaryFormatter","ChangingTypeaheadBehavior"];export{S as ChangingTypeaheadBehavior,T as ControlledSelectedItems,I as CustomSummaryFormatter,L as CustomTokenValues,E as Disabled,M as ErrorState,k as Overview,C as OverviewSummary,b as SettingTheFieldValue,we as __namedExportsOrder,Ve as default};
