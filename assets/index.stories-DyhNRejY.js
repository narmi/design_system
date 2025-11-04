import{e,r as u}from"./iframe-DSvbt7lh.js";import{P as l}from"./index-CbeCyaLM.js";import{u as R,a as f}from"./downshift.esm-BDRvQ3Yg.js";import{u as me,c as ue}from"./dom-ChUatxKC.js";import{c as G}from"./index-RvS1aOr8.js";import{D as de}from"./index-Dsk-RY6S.js";import{B as pe}from"./index-CHyWXZgB.js";import{F as ge}from"./index-Cch_RBfa.js";import{R as j}from"./index-BFk8a3t2.js";import"./preload-helper-PPVm8Dsz.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./index-sBZdIAEa.js";import"./index-q5TytY9b.js";import"./index-BMBHvG_c.js";import"./AsElement-ClAA5b4v.js";import"./index-zempZG5m.js";const F=({children:t})=>e.createElement(e.Fragment,null,t);F.displayName="MultiSelect.Item";F.propTypes={value:l.string.isRequired,searchValue:l.string,children:l.oneOfType([l.node,l.arrayOf(l.node)])};F.__docgenInfo={description:"",methods:[],displayName:"MultiSelect.Item",props:{value:{description:`String representation of the option.

This value is also used as a typeahead; if a user types "n" while
the Select is open, highlight will move to the first item with a
value starting with \`n\`.`,type:{name:"string"},required:!0},searchValue:{description:"Optional prop that takes a string to use for typeahead behavior",type:{name:"string"},required:!1},children:{description:"JSX representation of item",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};function y(){return y=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var r in s)({}).hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},y.apply(null,arguments)}const fe=()=>{},x=t=>t?.props?t.props.searchValue||t.props.value:"",A=(t,a)=>t.map(x).includes(x(a)),J=(t,a)=>a.filter(s=>t.includes(s.props.value)),he=(t="",a)=>a.props.searchValue||a.props.value,be=({selectedItems:t,getSelectedItemProps:a,removeSelectedItem:s,disabled:r,label:g})=>t.length===0?g:e.createElement("div",{className:"nds-multiselect-tokensList"},t.map((o,d)=>{const m=o.props.tokenLabel||x(o);return e.createElement(ge,y({key:`${d}-${m}`,label:m,onDismiss:()=>s(o),disabled:r},a({selectedItem:o,i:d})))})),n=({name:t,label:a,children:s,selectedItems:r,onSelectedItemsChange:g=fe,disabled:o=!1,fieldValue:d,errorText:m,testId:V,clearLabel:z="Clear all",isClearable:D=!1,summaryFormatter:W=be,getTypeaheadString:Q=he})=>{const h=u.useMemo(()=>u.Children.toArray(s),[s]),w=r!==void 0,{getSelectedItemProps:Y,addSelectedItem:Z,removeSelectedItem:P,selectedItems:p,setSelectedItems:B}=R({initialSelectedItems:J(r||[],h),stateReducer:(i,c)=>{const{type:$,changes:v}=c;switch($){case R.stateChangeTypes.FunctionRemoveSelectedItem:case R.stateChangeTypes.FunctionAddSelectedItem:return g(v.selectedItems.map(x)),v;default:return v}}});u.useEffect(()=>{if(w){const i=J(r,h);B(i)}},[w,r,h,B]);const{isOpen:O,getToggleButtonProps:ee,getLabelProps:K,getMenuProps:te,highlightedIndex:ae,getItemProps:ne,inputValue:se}=f({disabled:o,id:t||`nds-multiselect-${a}`,items:h,itemToString:i=>Q(se||"",i),stateReducer:(i,c)=>{const{changes:$,type:v}=c;switch(v){case f.stateChangeTypes.MenuKeyDownEnter:case f.stateChangeTypes.MenuKeyDownSpaceButton:case f.stateChangeTypes.ItemClick:return{...$,isOpen:!0,highlightedIndex:i.highlightedIndex};default:return $}},onStateChange:({type:i,selectedItem:c})=>{switch(i){case f.stateChangeTypes.MenuKeyDownEnter:case f.stateChangeTypes.ItemClick:case f.stateChangeTypes.ToggleButtonKeyDownEnter:A(p,c)?P(c):c&&Z(c);return;default:return}}}),{renderLayer:le,triggerProps:H,triggerBounds:re,layerProps:U,layerSide:q}=me({isOpen:O,auto:!0,snap:!0,triggerOffset:0,containerOffset:0,placement:"bottom-start",possiblePlacements:["top-start","bottom-start"],container:ue}),oe=u.useMemo(()=>D&&p.length>0?e.createElement("span",{className:"nds-multiselect-clearAll"},e.createElement(pe,{kind:"plain",size:"xs",onClick:i=>{i.stopPropagation(),w?g([]):B([])}},z)):null,[D,p,w,g,B,z]),ie=H.style,ce=u.useMemo(()=>W({selectedItems:p,getSelectedItemProps:Y,removeSelectedItem:P,disabled:o,label:a}),[p,Y,P,o,a,W]);return e.createElement("div",{className:"nds-multiselect","data-testid":V},e.createElement("input",{type:"hidden",name:t,id:t,value:d||p.map(x).join(",")}),e.createElement("div",H,e.createElement(de,y({disabled:o,isOpen:O,labelText:ce,endContent:oe,errorText:m,labelProps:{...K(),style:{...K().style,...D?{display:"block",paddingRight:80}:{}}}},ee(),{style:{...ie,padding:"4px 90px 4px 8px"}}))),le(e.createElement("div",y({className:G(["nds-multiselect-list","bgColor--white",{"rounded--bottom":q==="bottom","rounded--top":q==="top",[`nds-select-list--active--${q}`]:O}])},te(U),{style:{width:re?.width,transform:`translateY(${q==="top"?"3px":"-3px"})`,...U.style}}),O&&e.createElement("ul",{className:"list--reset"},h.map((i,c)=>e.createElement("li",y({key:`item-${c}`,className:G(["nds-multiselect-item","alignChild--left--center padding--x--s padding--y--xs",{"nds-select-item--highlighted":ae===c,"rounded--top":c===0,"rounded--bottom":c===h.length-1}])},ne({item:i,index:c}),{role:"option","aria-selected":A(p,i).toString()}),e.createElement(j,{as:"span"},e.createElement(j.Item,{as:"span"},i),A(p,i)&&e.createElement(j.Item,{as:"span",shrink:!0},e.createElement("span",{className:"narmi-icon-check fontSize--l fontWeight--bold"})))))))))};n.propTypes={name:l.string.isRequired,label:l.string.isRequired,selectedItems:l.arrayOf(l.string),onSelectedItemsChange:l.func,errorText:l.string,children:l.oneOfType([l.node,l.arrayOf(l.node)]),testId:l.string,fieldValue:l.string,disabled:l.bool,isClearable:l.bool,clearLabel:l.string,summaryFormatter:l.func,getTypeaheadString:l.func};n.Item=F;n.__docgenInfo={description:`Accessible multiple select control for giving users the ability to select
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
When passed, this will cause the trigger to render in error state.`,type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1},fieldValue:{description:"Value for the input with the given `name` prop.\nThis should be the value of the field in the submitted form.",type:{name:"string"},required:!1}}};const N=t=>e.createElement(n,t),_=[e.createElement(n.Item,{value:"coffee",tokenLabel:"Coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(n.Item,{value:"film",tokenLabel:"Film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"truck",tokenLabel:"Truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(n.Item,{value:"blob",tokenLabel:"Blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob")],k=N.bind({});k.args={name:"overviewStory",label:"Favorite icons",children:_,isClearable:!0};const C=N.bind({});C.args={name:"overviewSummaryStory",label:"Favorite icons",children:_,summaryFormatter:({selectedItems:t,label:a})=>{if(t.length===0)return a;const s=t.map(r=>r.props.tokenLabel||X(r));return t.length===_.length?"All selected":`${t.length} selected: ${s.join(", ")}`},isClearable:!1};const E=N.bind({});E.args={disabled:!0,name:"overviewStory",label:"Favorite icons",selectedItems:["blob","coffee"],children:_};const T=N.bind({});T.args={name:"errorState",label:"Account",children:[e.createElement(n.Item,{value:"checking1234",tokenLabel:"Checking (1234)"},"Checking (1234)"),e.createElement(n.Item,{value:"checking4321",tokenLabel:"Checking (4321)"},"Checking (4321)")],errorText:"Required"};const b=()=>{const[t,a]=u.useState(""),s=r=>{a(r.join(","))};return e.createElement(n,{name:"controlled-product-field",fieldValue:t,label:"Favorite Icons",onSelectedItemsChange:s},e.createElement(n.Item,{value:"coffee",tokenLabel:"Coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(n.Item,{value:"film",tokenLabel:"Film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"truck",tokenLabel:"Truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(n.Item,{value:"blob",tokenLabel:"Blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"))};b.parameters={docs:{description:{story:"By default, `fieldValue` populates the hidden input as a comma-separated string of selected values. You may customize this via the `fieldValue` prop."}}};const M=()=>{const[t,a]=u.useState(["truck","coffee"]),s=r=>{a(r)};return e.createElement(n,{name:"controlled-product-field",label:"Favorite Icons",selectedItems:t,onSelectedItemsChange:s,isClearable:!0},e.createElement(n.Item,{value:"coffee",tokenLabel:"Coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(n.Item,{value:"film",tokenLabel:"Film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"truck",tokenLabel:"Truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(n.Item,{value:"blob",tokenLabel:"Blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"))},L=()=>{const[t,a]=u.useState(["film"]),s=r=>{a(r)};return e.createElement(n,{name:"custom-token-labels",label:"Favorite Icons",selectedItems:t,onSelectedItemsChange:s},e.createElement(n.Item,{value:"film",tokenLabel:"Movies"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(n.Item,{value:"coffee",tokenLabel:"Hot Bean Water"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"))},I=()=>{const[t,a]=u.useState(["coffee","truck"]),s=o=>{a(o)},r=[{label:"Coffee",icon:"coffee",value:"coffee"},{label:"Film",icon:"film",value:"film"},{label:"Truck",icon:"truck",value:"truck"},{label:"Blob",icon:"blob",value:"blob"}].map(({label:o,icon:d,value:m})=>e.createElement(n.Item,{key:m,value:m,tokenLabel:o},e.createElement("span",{className:`narmi-icon-${d} padding--right--xs`}),o)),g=({selectedItems:o,label:d})=>{if(o.length===0)return d;const m=o.map(V=>V.props.tokenLabel||X(V));return`Selected (${o.length}): ${m.join(", ")}`};return e.createElement(n,{name:"custom-summary-formatter",label:"Favorite Icons",selectedItems:t,onSelectedItemsChange:s,isClearable:!0,summaryFormatter:g},r)};I.parameters={docs:{description:{story:"This story demonstrates a MultiSelect with a custom summaryFormatter that returns a summary string using tokenLabel. The formatter receives an object with the current selected items and returns a custom summary string."}}};const S=N.bind({});S.args={id:"customTypeaheadBehavior",label:"Select an Industry",getTypeaheadString:(t,a)=>{let s=a.props.searchValue||a.props.value||"";return/\d/.test(t)&&(s=a.props.value),s},children:[{name:"Agriculture",code:"12345"},{name:"Manufacturing",code:"55555"},{name:"Logistics",code:"32144"},{name:"Hospitality",code:"22147"}].map(({name:t,code:a})=>e.createElement(n.Item,{key:a,value:a,searchValue:t},t," - ",a))};S.parameters={docs:{description:{story:"You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha"}}};const qe={title:"Components/MultiSelect",component:n,subcomponents:{MultiSelectItem:F},argTypes:{children:{control:!1}}},X=t=>t?.props?t.props.searchValue||t.props.value:"";b.__docgenInfo={description:"",methods:[],displayName:"SettingTheFieldValue"};M.__docgenInfo={description:"",methods:[],displayName:"ControlledSelectedItems"};L.__docgenInfo={description:"",methods:[],displayName:"CustomTokenValues"};I.__docgenInfo={description:"",methods:[],displayName:"CustomSummaryFormatter"};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <MultiSelect {...args} />",...S.parameters?.docs?.source}}};const $e=["Overview","OverviewSummary","Disabled","ErrorState","SettingTheFieldValue","ControlledSelectedItems","CustomTokenValues","CustomSummaryFormatter","ChangingTypeaheadBehavior"];export{S as ChangingTypeaheadBehavior,M as ControlledSelectedItems,I as CustomSummaryFormatter,L as CustomTokenValues,E as Disabled,T as ErrorState,k as Overview,C as OverviewSummary,b as SettingTheFieldValue,$e as __namedExportsOrder,qe as default};
