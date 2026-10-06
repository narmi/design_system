import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DYSQF0Z1.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-Ck713OJ8.js";import{n as s,t as c}from"./useDropdownLayer-CFQLS0eM.js";import{n as l,t as u}from"./downshift.esm-BH2mQ2el.js";import{n as d,t as f}from"./util-CcWqdfm7.js";import{i as p,n as m,r as h,t as g}from"./Errors-BOcTBU84.js";import{n as _,t as v}from"./Select-DkyOLjdm.js";import{i as y,n as b,r as x,t as S}from"./selection-r8eh004Z.js";var C,w,T=t((()=>{C=e(n()),w=({children:e})=>C.createElement(C.Fragment,null,e),w.displayName=`Field.Combobox.Item`;try{Field.Combobox.Item.displayName=`Field.Combobox.Item`,Field.Combobox.Item.__docgenInfo={description:`Compound child for Field.Combobox.
Renders its children directly — all filtering and interaction
is handled by the parent FieldCombobox via downshift.`,displayName:`Field.Combobox.Item`,filePath:`/home/runner/work/design_system/design_system/src/Field/Combobox/ComboboxItem.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Combobox/ComboboxItem.tsx`,name:`FieldComboboxItemProps`}],description:"The value passed to `onChange` when this item is selected",name:`value`,parent:{fileName:`design_system/src/Field/Combobox/ComboboxItem.tsx`,name:`FieldComboboxItemProps`},required:!0,tags:{},type:{name:`string`}},searchValue:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Combobox/ComboboxItem.tsx`,name:`FieldComboboxItemProps`}],description:"Text shown in the input when this item is selected, and matched against\nas the user types. Defaults to `children` when it's a string,\notherwise `value`.",name:`searchValue`,parent:{fileName:`design_system/src/Field/Combobox/ComboboxItem.tsx`,name:`FieldComboboxItemProps`},required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Combobox/ComboboxItem.tsx`,name:`FieldComboboxItemProps`}],description:`Display content for the option`,name:`children`,parent:{fileName:`design_system/src/Field/Combobox/ComboboxItem.tsx`,name:`FieldComboboxItemProps`},required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}}));function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(null,arguments)}var D,O,k,A,j=t((()=>{D=e(n()),u(),r(),h(),c(),m(),a(),T(),{stateChangeTypes:O}=l,k=({props:e})=>e.searchValue??(typeof e.children==`string`?e.children:e.value),A=({label:e,id:t,value:n,onChange:r,placeholder:a,startIcon:c,errors:u=[],isDisabled:d=!1,renderHelperText:f,children:m})=>{let{errorId:h,labelId:_,controlProps:v}=p({id:t,errors:u,isDisabled:d}),[y,b]=(0,D.useState)(``),x=(0,D.useMemo)(()=>new Map(D.Children.toArray(m).filter(e=>D.isValidElement(e)).map(e=>[e.props.value,e])),[m]),S=e=>{let t=e?x.get(e):void 0;return t?k(t):``},C=e=>[...x.keys()].filter(t=>S(t).toLowerCase().startsWith(e.toLowerCase())),w=e=>e&&C(e).length?0:-1,T=C(y),A=x.has(n)?n:null,{isOpen:j,inputValue:M,highlightedIndex:N,setHighlightedIndex:P,setInputValue:F,closeMenu:I,getLabelProps:L,getInputProps:R,getToggleButtonProps:z,getMenuProps:B,getItemProps:V}=l({items:T,selectedItem:A,itemToString:S,inputId:v.id,labelId:_,onSelectedItemChange:({selectedItem:e})=>r(e??``),onIsOpenChange:({isOpen:e})=>{e||b(``)},stateReducer:(e,{type:t,changes:n})=>{let r=n;switch(t){case O.InputChange:return{...n,highlightedIndex:w(n.inputValue)};case O.MenuMouseLeave:return y?e:n;case O.InputClick:return e.isOpen?e:n;case O.InputKeyDownEscape:if(!e.isOpen)return e;break;case O.ControlledPropUpdatedSelectedItem:return{...n,isOpen:!1,highlightedIndex:-1};case O.InputBlur:case O.InputKeyDownEnter:r={...n,selectedItem:T[e.highlightedIndex]??(e.inputValue?n.selectedItem:null)}}return e.isOpen&&r.isOpen===!1?{...r,inputValue:S(r.selectedItem??null)}:r}});(0,D.useEffect)(()=>{j&&P(w(y))},[T.join(`
`)]);let H=S(A);(0,D.useEffect)(()=>{if(j||M===H)return;let e=setTimeout(()=>F(H));return()=>clearTimeout(e)},[j,M,H]),(0,D.useEffect)(()=>{d&&I()},[d]);let U=j&&T.length>0,{anchorProps:W,layerProps:G}=s({isOpen:U,ariaPopupType:`listbox`});return D.createElement(`div`,{className:i([`nds-field`,{"nds-field--isDisabled":d,"nds-field--hasError":u.length>0}])},D.createElement(o,{alignItems:`center`},D.createElement(o.Item,null,D.createElement(`label`,E({className:`nds-field-label`},L()),e)),D.createElement(o.Item,{shrink:!0},D.createElement(`div`,{className:`fontColor--secondary fontSize--s`},f?.()))),D.createElement(`div`,{className:`nds-field-input-box`,ref:W.ref,style:W.style},D.createElement(o,{alignItems:`center`,gapSize:`xs`},c&&D.createElement(o.Item,{shrink:!0},D.createElement(`i`,{role:`img`,className:`narmi-icon-${c}`,"aria-hidden":`true`})),D.createElement(o.Item,null,D.createElement(`input`,R({...v,placeholder:a,onChange:e=>b(e.currentTarget.value),"aria-expanded":U}))),D.createElement(o.Item,{shrink:!0},D.createElement(`button`,E({type:`button`,className:`nds-field-combobox-toggle button--reset`,"aria-hidden":`true`},z({disabled:d,onMouseDown:e=>e.preventDefault()})),D.createElement(`i`,{className:`narmi-icon-chevron-${U?`up`:`down`}`,"aria-hidden":`true`}))))),D.createElement(`div`,E({},B({ref:G.ref}),{className:`nds-field-listbox nds-field-combobox-listbox`,style:G.style}),D.createElement(`ul`,{className:`list--reset`,role:`presentation`},j&&T.map((e,t)=>D.createElement(`li`,E({key:e,className:i([`nds-field-option`,{"nds-field-option--highlighted":N===t}])},V({item:e,index:t})),x.get(e))))),D.createElement(g,{id:h,errors:u}))},A.displayName=`Field.Combobox`,A.Item=w;try{A.displayName=`Field.Combobox`,A.__docgenInfo={description:`Field.Combobox renders a text input that filters a list of options,
styled consistently with Field.Text and Field.Select.
It uses downshift's \`useCombobox\` for keyboard navigation and ARIA,
and \`useDropdownLayer\` for dropdown positioning.

Typing highlights the first matching option, and Enter, Tab or clicking
away selects it. Leaving the field with text that matches nothing puts
back the current selection; emptying the input clears it.`,displayName:`Field.Combobox`,filePath:`/home/runner/work/design_system/design_system/src/Field/Combobox/index.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Combobox/index.tsx`,name:`FieldComboboxProps`}],description:`Currently selected value (controlled). Empty string when nothing is selected.`,name:`value`,parent:{fileName:`design_system/src/Field/Combobox/index.tsx`,name:`FieldComboboxProps`},required:!0,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Combobox/index.tsx`,name:`FieldComboboxProps`}],description:'Called with the new value when the selection changes, or `""` when it\'s cleared',name:`onChange`,parent:{fileName:`design_system/src/Field/Combobox/index.tsx`,name:`FieldComboboxProps`},required:!0,tags:{},type:{name:`(value: string) => void`}},placeholder:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Combobox/index.tsx`,name:`FieldComboboxProps`}],description:`Placeholder text when the input is empty`,name:`placeholder`,parent:{fileName:`design_system/src/Field/Combobox/index.tsx`,name:`FieldComboboxProps`},required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Combobox/index.tsx`,name:`FieldComboboxProps`}],description:`Field.Combobox.Item elements`,name:`children`,parent:{fileName:`design_system/src/Field/Combobox/index.tsx`,name:`FieldComboboxProps`},required:!0,tags:{},type:{name:`ReactNode`}},id:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`id`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`label`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!0,tags:{},type:{name:`string`}},errors:{defaultValue:{value:`[]`},declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`errors`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`string[]`}},isDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`isDisabled`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`boolean`}},renderHelperText:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`renderHelperText`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`() => ReactNode`}},startIcon:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldDecorationProps`}],description:``,name:`startIcon`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldDecorationProps`},required:!1,tags:{},type:{name:`IconName`}}},tags:{}}}catch{}}));function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(null,arguments)}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;t((()=>{N=e(n()),j(),_(),y(),f(),b(),{expect:P,screen:F,waitFor:I}=__STORYBOOK_MODULE_TEST__,L=S.icons.map(e=>e.properties.name).filter(Boolean),R={title:`Components/Field/Field.Combobox`,component:A,args:{errors:[]},argTypes:{startIcon:{control:`select`,options:[null,...L]}}},z=d.map(e=>({value:e,label:e})),B=e=>{let[t,n]=(0,N.useState)(e.value||``);return N.createElement(A,M({},e,{value:t,onChange:n}),z.map(({value:e,label:t})=>N.createElement(A.Item,{key:e,value:e},t)))},V=B.bind({}),V.args={label:`State`,placeholder:`Select a state`},H={name:`Interaction: Filters as you type`,render:()=>N.createElement(B,{label:`State`,placeholder:`Select a state`}),play:async({canvas:e,userEvent:t})=>{await t.type(e.getByRole(`combobox`,{name:/state/i}),`new`),await I(()=>P(F.getAllByRole(`option`)).toHaveLength(4))}},U={name:`Interaction: Selects the first match on Tab`,render:()=>N.createElement(B,{label:`State`,placeholder:`Select a state`}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`combobox`,{name:/state/i});await t.type(n,`mo`),await t.tab(),await I(()=>P(n).toHaveValue(`Montana`))}},W={name:`Interaction: Keeps the highlighted option in view`,render:()=>N.createElement(B,{label:`State`,placeholder:`Select a state`}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`,{name:/state/i})),await t.keyboard(`{ArrowDown>20/}`),await I(()=>{let e=F.getByRole(`option`,{name:`Maryland`}),t=e.closest(`.nds-field-listbox`).getBoundingClientRect(),{top:n,bottom:r}=e.getBoundingClientRect();P(n).toBeGreaterThanOrEqual(t.top),P(r).toBeLessThanOrEqual(t.bottom)})}},G=B.bind({}),G.args={label:`State`,value:`Colorado`},K=B.bind({}),K.args={label:`State`,placeholder:`Select a state`,startIcon:`map-pin`},q=B.bind({}),q.args={label:`State`,placeholder:`Select a state`,errors:[`Please select a state`]},J=B.bind({}),J.args={label:`State`,value:`Colorado`,isDisabled:!0},Y=B.bind({}),Y.args={label:`State`,placeholder:`Select a state`,renderHelperText:()=>N.createElement(`span`,null,`Where you currently live`)},X=()=>{let[e,t]=(0,N.useState)(``);return N.createElement(A,{label:`Country`,value:e,onChange:t,placeholder:`Select a country`,renderHelperText:()=>N.createElement(`span`,null,`Value: `,e||`(none)`)},N.createElement(A.Item,{value:`us`},`United States`),N.createElement(A.Item,{value:`ca`},`Canada`),N.createElement(A.Item,{value:`mx`,searchValue:`Mexico`},N.createElement(`strong`,null,`Mexico`)))},Z=()=>{let[e,t]=(0,N.useState)(``),[n,r]=(0,N.useState)(``),[i,a]=(0,N.useState)(``);return N.createElement(`div`,{style:{display:`flex`,gap:`var(--space-m)`,maxWidth:900}},N.createElement(`div`,{style:{flex:1}},N.createElement(x,{label:`City`,value:i,onChange:a,placeholder:`Enter a city`})),N.createElement(`div`,{style:{flex:1}},N.createElement(A,{label:`State`,value:e,onChange:t,placeholder:`Select a state`},z.map(({value:e,label:t})=>N.createElement(A.Item,{key:e,value:e},t)))),N.createElement(`div`,{style:{flex:1}},N.createElement(v,{label:`Country`,value:n,onChange:r,placeholder:`Select a country`},N.createElement(v.Item,{value:`us`},`United States`),N.createElement(v.Item,{value:`ca`},`Canada`))))},Z.parameters={docs:{description:{story:`Field.Combobox shares its shell, label and input box with Field.Text, and its dropdown with Field.Select.`}}},X.__docgenInfo={description:"`value` is what `onChange` receives; the input shows the item's text.\nUse `searchValue` when an item's children aren't a plain string.",methods:[],displayName:`ValuesAndSearchValue`},Z.__docgenInfo={description:``,methods:[],displayName:`SideBySide`},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldCombobox {...args} value={value} onChange={setValue}>
      {STATES.map(({
      value,
      label
    }) => <FieldCombobox.Item key={value} value={value}>
          {label}
        </FieldCombobox.Item>)}
    </FieldCombobox>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Filters as you type",
  render: () => <Template label="State" placeholder="Select a state" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByRole("combobox", {
      name: /state/i
    }), "new");
    await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(4));
  }
}`,...H.parameters?.docs?.source},description:{story:`Interaction test that types into the Field.Combobox so Chromatic can
snapshot the filtered dropdown. Options render in a dropdown layer,
queried via \`screen\`.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Selects the first match on Tab",
  render: () => <Template label="State" placeholder="Select a state" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole("combobox", {
      name: /state/i
    });
    await userEvent.type(input, "mo");
    await userEvent.tab();
    await waitFor(() => expect(input).toHaveValue("Montana"));
  }
}`,...U.parameters?.docs?.source},description:{story:`Interaction test for the keyboard selection flow: typing highlights the
first match, and Tab selects it.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Keeps the highlighted option in view",
  render: () => <Template label="State" placeholder="Select a state" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("combobox", {
      name: /state/i
    }));
    await userEvent.keyboard("{ArrowDown>20/}");
    await waitFor(() => {
      const option = screen.getByRole("option", {
        name: "Maryland"
      });
      // Measure against the visible dropdown, not the full height of the list
      const layer = option.closest(".nds-field-listbox").getBoundingClientRect();
      const {
        top,
        bottom
      } = option.getBoundingClientRect();
      expect(top).toBeGreaterThanOrEqual(layer.top);
      expect(bottom).toBeLessThanOrEqual(layer.bottom);
    });
  }
}`,...W.parameters?.docs?.source},description:{story:`Interaction test that arrows past the visible options, checking the
dropdown scrolls to keep the highlighted option in view.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldCombobox {...args} value={value} onChange={setValue}>
      {STATES.map(({
      value,
      label
    }) => <FieldCombobox.Item key={value} value={value}>
          {label}
        </FieldCombobox.Item>)}
    </FieldCombobox>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldCombobox {...args} value={value} onChange={setValue}>
      {STATES.map(({
      value,
      label
    }) => <FieldCombobox.Item key={value} value={value}>
          {label}
        </FieldCombobox.Item>)}
    </FieldCombobox>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldCombobox {...args} value={value} onChange={setValue}>
      {STATES.map(({
      value,
      label
    }) => <FieldCombobox.Item key={value} value={value}>
          {label}
        </FieldCombobox.Item>)}
    </FieldCombobox>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldCombobox {...args} value={value} onChange={setValue}>
      {STATES.map(({
      value,
      label
    }) => <FieldCombobox.Item key={value} value={value}>
          {label}
        </FieldCombobox.Item>)}
    </FieldCombobox>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldCombobox {...args} value={value} onChange={setValue}>
      {STATES.map(({
      value,
      label
    }) => <FieldCombobox.Item key={value} value={value}>
          {label}
        </FieldCombobox.Item>)}
    </FieldCombobox>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <FieldCombobox label="Country" value={value} onChange={setValue} placeholder="Select a country" renderHelperText={() => <span>Value: {value || "(none)"}</span>}>
      <FieldCombobox.Item value="us">United States</FieldCombobox.Item>
      <FieldCombobox.Item value="ca">Canada</FieldCombobox.Item>
      <FieldCombobox.Item value="mx" searchValue="Mexico">
        <strong>Mexico</strong>
      </FieldCombobox.Item>
    </FieldCombobox>;
}`,...X.parameters?.docs?.source},description:{story:"`value` is what `onChange` receives; the input shows the item's text.\nUse `searchValue` when an item's children aren't a plain string.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  return <div style={{
    display: "flex",
    gap: "var(--space-m)",
    maxWidth: 900
  }}>
      <div style={{
      flex: 1
    }}>
        <FieldText label="City" value={city} onChange={setCity} placeholder="Enter a city" />
      </div>
      <div style={{
      flex: 1
    }}>
        <FieldCombobox label="State" value={state} onChange={setState} placeholder="Select a state">
          {STATES.map(({
          value,
          label
        }) => <FieldCombobox.Item key={value} value={value}>
              {label}
            </FieldCombobox.Item>)}
        </FieldCombobox>
      </div>
      <div style={{
      flex: 1
    }}>
        <FieldSelect label="Country" value={country} onChange={setCountry} placeholder="Select a country">
          <FieldSelect.Item value="us">United States</FieldSelect.Item>
          <FieldSelect.Item value="ca">Canada</FieldSelect.Item>
        </FieldSelect>
      </div>
    </div>;
}`,...Z.parameters?.docs?.source}}},Q=[`Overview`,`Filters`,`SelectsOnTab`,`ScrollsToHighlight`,`WithValue`,`WithStartIcon`,`WithErrors`,`Disabled`,`WithHelperText`,`ValuesAndSearchValue`,`SideBySide`]}))();export{J as Disabled,H as Filters,V as Overview,W as ScrollsToHighlight,U as SelectsOnTab,Z as SideBySide,X as ValuesAndSearchValue,q as WithErrors,Y as WithHelperText,K as WithStartIcon,G as WithValue,Q as __namedExportsOrder,R as default};