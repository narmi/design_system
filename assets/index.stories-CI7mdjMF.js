import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-qpe1Svy0.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-DsORCcZo.js";import{t as s}from"./prop-types-GrRLOqjJ.js";import{n as c,t as l}from"./useDropdownLayer-0anrfOys.js";import{n as u,r as d}from"./Button-C_9oMbaL.js";import{i as f,r as p,t as m}from"./downshift.esm-B8MNjamt.js";import{n as h,t as g}from"./DropdownTrigger-RO2hl_br.js";import{n as _,t as v}from"./FieldToken-9qR3iTpx.js";var y,b,x,S=t((()=>{y=e(n()),b=e(s()),x=({children:e})=>y.createElement(y.Fragment,null,e),x.displayName=`MultiSelect.Item`,x.propTypes={value:b.default.string.isRequired,searchValue:b.default.string,tokenLabel:b.default.string,children:b.default.oneOfType([b.default.node,b.default.arrayOf(b.default.node)])};try{MultiSelect.Item.displayName=`MultiSelect.Item`,MultiSelect.Item.__docgenInfo={description:``,displayName:`MultiSelect.Item`,filePath:`/home/runner/work/design_system/design_system/src/MultiSelect/MultiSelectItem.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`}],description:`String representation of the option.

This value is also used as a typeahead; if a user types "n" while
the Select is open, highlight will move to the first item with a
value starting with \`n\`.`,name:`value`,parent:{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`},required:!0,tags:{},type:{name:`string`}},searchValue:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`}],description:`String to use for typeahead behavior`,name:`searchValue`,parent:{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`},required:!1,tags:{},type:{name:`string`}},tokenLabel:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`}],description:"Text to display in the token and summary for this item.\nFalls back to `searchValue`, then `value`, when not provided.",name:`tokenLabel`,parent:{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`},required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`}],description:`JSX representation of item`,name:`children`,parent:{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}}));function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(null,arguments)}function w({name:e,label:t,children:n,selectedItems:r,onSelectedItemsChange:a=E,disabled:s=!1,fieldValue:l,errorText:d,testId:m,clearLabel:h=`Clear all`,isClearable:_=!1,summaryFormatter:v=j,getTypeaheadString:y=A}){let b=(0,T.useMemo)(()=>T.Children.toArray(n),[n]),x=r!==void 0,{getSelectedItemProps:S,addSelectedItem:w,removeSelectedItem:M,selectedItems:N,setSelectedItems:P}=p({initialSelectedItems:k(r||[],b),stateReducer:(e,t)=>{let{type:n,changes:r}=t;switch(n){case p.stateChangeTypes.FunctionRemoveSelectedItem:case p.stateChangeTypes.FunctionAddSelectedItem:return a((r.selectedItems??[]).map(D)),r;default:return r}}});(0,T.useEffect)(()=>{x&&P(k(r,b))},[x,r,b,P]);let{isOpen:F,getToggleButtonProps:I,getLabelProps:L,getMenuProps:R,highlightedIndex:z,getItemProps:B,inputValue:V,closeMenu:H}=f({id:e||`nds-multiselect-${t}`,items:b,itemToString:e=>y(V||``,e),stateReducer:(e,t)=>{let{changes:n,type:r}=t;switch(r){case f.stateChangeTypes.ToggleButtonKeyDownEnter:case f.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case f.stateChangeTypes.ItemClick:return{...n,isOpen:!0,highlightedIndex:e.highlightedIndex};default:return n}},onStateChange:({type:e,selectedItem:t})=>{switch(e){case f.stateChangeTypes.ItemClick:case f.stateChangeTypes.ToggleButtonKeyDownEnter:case f.stateChangeTypes.ToggleButtonKeyDownSpaceButton:O(N,t)?M(t):t&&w(t);return;default:return}}}),{anchorProps:U,layerProps:W}=c({isOpen:F,setIsOpen:e=>{e||H()}}),G=(0,T.useMemo)(()=>_&&N.length>0?T.createElement(`span`,{className:`nds-multiselect-clearAll`},T.createElement(u,{kind:`plain`,size:`xs`,onClick:e=>{e.stopPropagation(),x?a([]):P([])}},h)):null,[_,N,x,a,P,h]),K=(0,T.useMemo)(()=>v({selectedItems:N,getSelectedItemProps:S,removeSelectedItem:M,disabled:s,label:t}),[N,S,M,s,t,v]);return T.createElement(`div`,{className:`nds-multiselect`,"data-testid":m},T.createElement(`input`,{type:`hidden`,name:e,id:e,value:l||N.map(D).join(`,`)}),T.createElement(`div`,C({},U,{ref:U.ref}),T.createElement(g,C({disabled:s,isOpen:F,labelText:K,endContent:G,errorText:d,labelProps:{...L(),style:_?{display:`block`,paddingRight:80}:void 0}},I()))),T.createElement(`div`,C({className:i([`nds-multiselect-list`,{"nds-multiselect-list--error":!!d}])},W,{ref:W.ref}),T.createElement(`div`,C({className:`bgColor--white`},R()),F&&T.createElement(`ul`,{className:`list--reset`},b.map((e,t)=>T.createElement(`li`,C({key:`item-${t}`,className:i([`nds-multiselect-item`,`alignChild--left--center padding--x--s padding--y--xs`,{"nds-select-item--highlighted":z===t,"rounded--top":t===0,"rounded--bottom":t===b.length-1}])},B({item:e,index:t}),{role:`option`,"aria-selected":O(N,e)}),T.createElement(o,{as:`span`},T.createElement(o.Item,{as:`span`},e),O(N,e)&&T.createElement(o.Item,{as:`span`,shrink:!0},T.createElement(`span`,{className:`narmi-icon-check fontSize--xl fontWeight--bold`})))))))))}var T,E,D,O,k,A,j,M=t((()=>{T=e(n()),m(),l(),r(),h(),d(),S(),_(),a(),E=()=>{},D=e=>e?.props?e.props.searchValue||e.props.value:``,O=(e,t)=>e.map(D).includes(D(t)),k=(e,t)=>t.filter(t=>e.includes(t.props.value)),A=(e=``,t)=>t.props.searchValue||t.props.value,j=({selectedItems:e,getSelectedItemProps:t,removeSelectedItem:n,disabled:r,label:i})=>e.length===0?i:T.createElement(`div`,{className:`nds-multiselect-tokensList`},e.map((e,i)=>{let a=e.props.tokenLabel||D(e);return T.createElement(v,C({key:`${i}-${a}`,label:a,onDismiss:()=>n(e),disabled:r},t({selectedItem:e})))})),w.Item=x;try{w.displayName=`MultiSelect`,w.__docgenInfo={description:`Accessible multiple select control for giving users the ability to select
multiple options from a list of options.

Typeahead is enabled based on the \`value\` prop of \`MultiSelect.Item\`
elements passed in. You may also set a custom \`searchValue\`
on each \`MultiSelect.Item\` for control over typeahead behavior.

- isClearable: if true, a "Clear all" button is rendered on the right side of the input.
- clearLabel: overridable text for the clear all button.
- summaryFormatter: an optional function that receives the number of selected items and an array of labels,
        and returns a string summary.`,displayName:`MultiSelect`,filePath:`/home/runner/work/design_system/design_system/src/MultiSelect/index.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:"unique name attribute for the input (used for `id` and `name`).\nThe trigger id falls back to a value derived from `label`.",name:`name`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:`Label for the select control`,name:`label`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:`MultiSelect.Item children`,name:`children`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},selectedItems:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:"When passed, the MultiSelect becomes fully controlled.\nUse `onSelectedItemsChange` to manage this value.",name:`selectedItems`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`Value[]`}},onSelectedItemsChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:`Change callback for user actions that select or deselect items.
Called with an array of selected item values.`,name:`onSelectedItemsChange`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`(values: Value[]) => void`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:`Disables the input and all user interaction.
You may still pass in \`selectedItems\` if items need to be selected
when the input is disabled.`,name:`disabled`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},fieldValue:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:"Value for the input with the given `name` prop.\nThis should be the value of the field in the submitted form.",name:`fieldValue`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},errorText:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:`Error message.
When passed, this will cause the trigger to render in error state.`,name:`errorText`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},clearLabel:{defaultValue:{value:`Clear all`},declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:`Optional label override for the clear all button`,name:`clearLabel`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},isClearable:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:`If true, renders a "Clear all" button on the right side of the trigger`,name:`isClearable`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},summaryFormatter:{defaultValue:{value:`({
  selectedItems,
  getSelectedItemProps,
  removeSelectedItem,
  disabled,
  label,
}: MultiSelectSummaryFormatterArgs): React.ReactNode => {
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
            {...getSelectedItemProps({ selectedItem: item })}
          />
        );
      })}
    </div>
  );
}`},declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:`Optional function to format the summary content shown in the trigger.
Must return a React node.`,name:`summaryFormatter`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`(args: MultiSelectSummaryFormatterArgs) => ReactNode`}},getTypeaheadString:{defaultValue:{value:`(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userInput = "",
  selectItem: MultiSelectItemElement,
) => {
  return selectItem.props.searchValue || selectItem.props.value;
}`},declarations:[{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`}],description:`Function with signature \`(userInputValue, selectItemNode) => {}\`,
used to customize typeahead filtering behavior.
See "Changing Typeahead Behavior" story for example.`,name:`getTypeaheadString`,parent:{fileName:`design_system/src/MultiSelect/index.tsx`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`(userInput: string, selectItem: MultiSelectItemElement) => string`}}},tags:{}}}catch{}try{w.Item.displayName=`MultiSelect.Item`,w.Item.__docgenInfo={description:``,displayName:`MultiSelect.Item`,filePath:`/home/runner/work/design_system/design_system/src/MultiSelect/index.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`}],description:`String representation of the option.

This value is also used as a typeahead; if a user types "n" while
the Select is open, highlight will move to the first item with a
value starting with \`n\`.`,name:`value`,parent:{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`},required:!0,tags:{},type:{name:`string`}},searchValue:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`}],description:`String to use for typeahead behavior`,name:`searchValue`,parent:{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`},required:!1,tags:{},type:{name:`string`}},tokenLabel:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`}],description:"Text to display in the token and summary for this item.\nFalls back to `searchValue`, then `value`, when not provided.",name:`tokenLabel`,parent:{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`},required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`}],description:`JSX representation of item`,name:`children`,parent:{fileName:`design_system/src/MultiSelect/MultiSelectItem.tsx`,name:`MultiSelectItemProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{N=e(n()),M(),S(),{expect:P,screen:F,waitFor:I}=__STORYBOOK_MODULE_TEST__,L=e=>N.createElement(w,e),R=[N.createElement(w.Item,{value:`coffee`,tokenLabel:`Coffee`,searchValue:`coffee`},N.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`),N.createElement(w.Item,{value:`film`,tokenLabel:`Film`,searchValue:`film`},N.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),N.createElement(w.Item,{value:`truck`,tokenLabel:`Truck`,searchValue:`truck`},N.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),N.createElement(w.Item,{value:`blob`,tokenLabel:`Blob`,searchValue:`blob`},N.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`)],z=L.bind({}),z.args={name:`overviewStory`,label:`Favorite icons`,children:R,isClearable:!0},B={name:`Interaction: Opens on click`,render:()=>N.createElement(w,{name:`chromaticOpen`,label:`Favorite icons`},R),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`)),await I(()=>P(F.getByRole(`option`,{name:/coffee/i})).toBeVisible())}},V={name:`Interaction: Selects multiple options`,render:()=>N.createElement(w,{name:`chromaticSelectMultiple`,label:`Favorite icons`},R),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`)),await I(()=>P(F.getByRole(`option`,{name:/coffee/i})).toBeVisible()),await t.click(F.getByRole(`option`,{name:/coffee/i})),await t.click(F.getByRole(`option`,{name:/film/i})),await I(()=>P(F.getByRole(`option`,{name:/coffee/i})).toHaveAttribute(`aria-selected`,`true`)),P(F.getByRole(`option`,{name:/film/i})).toHaveAttribute(`aria-selected`,`true`)}},H={name:`Interaction: Clears all selections`,render:()=>N.createElement(w,{name:`chromaticClearAll`,label:`Favorite icons`,isClearable:!0},R),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`)),await t.click(F.getByRole(`option`,{name:/coffee/i})),await I(()=>P(F.getByRole(`option`,{name:/coffee/i})).toHaveAttribute(`aria-selected`,`true`)),await t.click(e.getByRole(`button`,{name:/clear all/i})),await I(()=>P(F.getByRole(`option`,{name:/coffee/i})).toHaveAttribute(`aria-selected`,`false`))}},U=L.bind({}),U.args={name:`overviewSummaryStory`,label:`Favorite icons`,children:R,summaryFormatter:({selectedItems:e,label:t})=>{if(e.length===0)return t;let n=e.map(e=>e.props.tokenLabel||Q(e));return e.length===R.length?`All selected`:`${e.length} selected: ${n.join(`, `)}`},isClearable:!1},W=L.bind({}),W.args={disabled:!0,name:`overviewStory`,label:`Favorite icons`,selectedItems:[`blob`,`coffee`],children:R},G=L.bind({}),G.args={name:`errorState`,label:`Account`,children:[N.createElement(w.Item,{value:`checking1234`,tokenLabel:`Checking (1234)`,searchValue:`checking1234`},`Checking (1234)`),N.createElement(w.Item,{value:`checking4321`,tokenLabel:`Checking (4321)`,searchValue:`checking4321`},`Checking (4321)`)],errorText:`Required`},K=()=>{let[e,t]=(0,N.useState)(``);return N.createElement(w,{name:`controlled-product-field`,fieldValue:e,label:`Favorite Icons`,onSelectedItemsChange:e=>{t(e.join(`,`))}},N.createElement(w.Item,{value:`coffee`,tokenLabel:`Coffee`,searchValue:`coffee`},N.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`),N.createElement(w.Item,{value:`film`,tokenLabel:`Film`,searchValue:`film`},N.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),N.createElement(w.Item,{value:`truck`,tokenLabel:`Truck`,searchValue:`truck`},N.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),N.createElement(w.Item,{value:`blob`,tokenLabel:`Blob`,searchValue:`blob`},N.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`))},K.parameters={docs:{description:{story:"By default, `fieldValue` populates the hidden input as a comma-separated string of selected values. You may customize this via the `fieldValue` prop."}}},q=()=>{let[e,t]=(0,N.useState)([`truck`,`coffee`]);return N.createElement(w,{name:`controlled-product-field`,label:`Favorite Icons`,selectedItems:e,onSelectedItemsChange:e=>{t(e)},isClearable:!0},N.createElement(w.Item,{value:`coffee`,tokenLabel:`Coffee`,searchValue:`coffee`},N.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`),N.createElement(w.Item,{value:`film`,tokenLabel:`Film`,searchValue:`film`},N.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),N.createElement(w.Item,{value:`truck`,tokenLabel:`Truck`,searchValue:`truck`},N.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),N.createElement(w.Item,{value:`blob`,tokenLabel:`Blob`,searchValue:`blob`},N.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`))},J=()=>{let[e,t]=(0,N.useState)([`film`]);return N.createElement(w,{name:`custom-token-labels`,label:`Favorite Icons`,selectedItems:e,onSelectedItemsChange:e=>{t(e)}},N.createElement(w.Item,{value:`film`,tokenLabel:`Movies`,searchValue:`film`},N.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),N.createElement(w.Item,{value:`coffee`,tokenLabel:`Hot Bean Water`,searchValue:`coffee`},N.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`))},Y=()=>{let[e,t]=(0,N.useState)([`coffee`,`truck`]),n=e=>{t(e)},r=[{label:`Coffee`,icon:`coffee`,value:`coffee`},{label:`Film`,icon:`film`,value:`film`},{label:`Truck`,icon:`truck`,value:`truck`},{label:`Blob`,icon:`blob`,value:`blob`}].map(({label:e,icon:t,value:n})=>N.createElement(w.Item,{key:n,value:n,tokenLabel:e,searchValue:n},N.createElement(`span`,{className:`narmi-icon-${t} padding--right--xs`}),e));return N.createElement(w,{name:`custom-summary-formatter`,label:`Favorite Icons`,selectedItems:e,onSelectedItemsChange:n,isClearable:!0,summaryFormatter:({selectedItems:e,label:t})=>{if(e.length===0)return t;let n=e.map(e=>e.props.tokenLabel||Q(e));return`Selected (${e.length}): ${n.join(`, `)}`}},r)},Y.parameters={docs:{description:{story:`This story demonstrates a MultiSelect with a custom summaryFormatter that returns a summary string using tokenLabel. The formatter receives an object with the current selected items and returns a custom summary string.`}}},X=L.bind({}),X.args={id:`customTypeaheadBehavior`,label:`Select an Industry`,getTypeaheadString:(e,t)=>{let n=t.props.searchValue||t.props.value||``;return/\d/.test(e)&&(n=t.props.value),n},children:[{name:`Agriculture`,code:`12345`},{name:`Manufacturing`,code:`55555`},{name:`Logistics`,code:`32144`},{name:`Hospitality`,code:`22147`}].map(({name:e,code:t})=>N.createElement(w.Item,{key:t,value:t,searchValue:e},e,` - `,t))},X.parameters={docs:{description:{story:"You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha"}}},Z={title:`Components/MultiSelect`,component:w,subcomponents:{MultiSelectItem:x},argTypes:{children:{control:!1}}},Q=e=>e?.props?e.props.searchValue||e.props.value:``,K.__docgenInfo={description:``,methods:[],displayName:`SettingTheFieldValue`},q.__docgenInfo={description:``,methods:[],displayName:`ControlledSelectedItems`},J.__docgenInfo={description:``,methods:[],displayName:`CustomTokenValues`},Y.__docgenInfo={description:``,methods:[],displayName:`CustomSummaryFormatter`},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on click",
  render: () => <MultiSelect name="chromaticOpen" label="Favorite icons">
      {children}
    </MultiSelect>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("combobox"));
    await waitFor(() => expect(screen.getByRole("option", {
      name: /coffee/i
    })).toBeVisible());
  }
}`,...B.parameters?.docs?.source},description:{story:`Interaction test that opens the MultiSelect so Chromatic can snapshot
the dropdown's placement.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Selects multiple options",
  render: () => <MultiSelect name="chromaticSelectMultiple" label="Favorite icons">
      {children}
    </MultiSelect>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("combobox"));
    await waitFor(() => expect(screen.getByRole("option", {
      name: /coffee/i
    })).toBeVisible());

    // select two options; the menu stays open for further selections
    await userEvent.click(screen.getByRole("option", {
      name: /coffee/i
    }));
    await userEvent.click(screen.getByRole("option", {
      name: /film/i
    }));
    await waitFor(() => expect(screen.getByRole("option", {
      name: /coffee/i
    })).toHaveAttribute("aria-selected", "true"));
    expect(screen.getByRole("option", {
      name: /film/i
    })).toHaveAttribute("aria-selected", "true");
  }
}`,...V.parameters?.docs?.source},description:{story:`Interaction test for the multi-selection flow: select two options
(the menu stays open by design) and verify both are marked selected.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Clears all selections",
  render: () => <MultiSelect name="chromaticClearAll" label="Favorite icons" isClearable>
      {children}
    </MultiSelect>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("combobox"));
    await userEvent.click(screen.getByRole("option", {
      name: /coffee/i
    }));
    await waitFor(() => expect(screen.getByRole("option", {
      name: /coffee/i
    })).toHaveAttribute("aria-selected", "true"));

    // clear all selections
    await userEvent.click(canvas.getByRole("button", {
      name: /clear all/i
    }));
    await waitFor(() => expect(screen.getByRole("option", {
      name: /coffee/i
    })).toHaveAttribute("aria-selected", "false"));
  }
}`,...H.parameters?.docs?.source},description:{story:`Interaction test verifying the "Clear all" button deselects all items.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => <MultiSelect {...args} />`,...X.parameters?.docs?.source}}},$=[`Overview`,`Open`,`SelectMultiple`,`ClearsAll`,`OverviewSummary`,`Disabled`,`ErrorState`,`SettingTheFieldValue`,`ControlledSelectedItems`,`CustomTokenValues`,`CustomSummaryFormatter`,`ChangingTypeaheadBehavior`]}))();export{X as ChangingTypeaheadBehavior,H as ClearsAll,q as ControlledSelectedItems,Y as CustomSummaryFormatter,J as CustomTokenValues,W as Disabled,G as ErrorState,B as Open,z as Overview,U as OverviewSummary,V as SelectMultiple,K as SettingTheFieldValue,$ as __namedExportsOrder,Z as default};