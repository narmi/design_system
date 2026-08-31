import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BL-x6hHN.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-B7Nz1b8k.js";import{n as s,t as c}from"./useDropdownLayer-BUCZyCPO.js";import{n as l,t as u}from"./Error-BXAfQLiu.js";import{i as d,t as f}from"./downshift.esm-UVcuOeEZ.js";import{n as p,t as m}from"./useField-6YyyHnF8.js";function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(null,arguments)}var g,_,v=t((()=>{g=e(n()),r(),_=(0,g.forwardRef)(({children:e,isActive:t=!1,isDisabled:n=!1,hasError:r=!1,className:a,...o},s)=>g.createElement(`button`,h({ref:s,type:`button`,disabled:n,className:i([`nds-field-input-box`,`nds-field-faux-input`,{"nds-field-faux-input--active":t,"nds-field-faux-input--hasError":r},a])},o),e)),_.displayName=`FauxInput`;try{_.displayName=`FauxInput`,_.__docgenInfo={description:`Internal presentational component.
Renders a \`<button>\` styled to look like \`.nds-field-input-box\`.
Used by Field.Select (and future dropdown-based Field variants)
as the anchor/trigger element.

Accepts arbitrary props (e.g. from downshift's getToggleButtonProps)
which are spread onto the underlying \`<button>\`.`,displayName:`FauxInput`,filePath:`/home/runner/work/design_system/design_system/src/Field/FauxInput/index.tsx`,methods:[],props:{isActive:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/Field/FauxInput/index.tsx`,name:`FauxInputProps`}],description:`When true, renders active (focused) border styling`,name:`isActive`,parent:{fileName:`design_system/src/Field/FauxInput/index.tsx`,name:`FauxInputProps`},required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/Field/FauxInput/index.tsx`,name:`FauxInputProps`}],description:``,name:`isDisabled`,parent:{fileName:`design_system/src/Field/FauxInput/index.tsx`,name:`FauxInputProps`},required:!1,tags:{},type:{name:`boolean`}},hasError:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/Field/FauxInput/index.tsx`,name:`FauxInputProps`}],description:``,name:`hasError`,parent:{fileName:`design_system/src/Field/FauxInput/index.tsx`,name:`FauxInputProps`},required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/FauxInput/index.tsx`,name:`FauxInputProps`}],description:``,name:`className`,parent:{fileName:`design_system/src/Field/FauxInput/index.tsx`,name:`FauxInputProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),y,b,x=t((()=>{y=e(n()),b=({children:e})=>y.createElement(y.Fragment,null,e),b.displayName=`Field.Select.Item`;try{Field.Select.Item.displayName=`Field.Select.Item`,Field.Select.Item.__docgenInfo={description:`Compound child for Field.Select.
Renders its children directly — all positioning and interaction
is handled by the parent FieldSelect via downshift.`,displayName:`Field.Select.Item`,filePath:`/home/runner/work/design_system/design_system/src/Field/Select/SelectItem.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Select/SelectItem.tsx`,name:`FieldSelectItemProps`}],description:`The value submitted when this item is selected`,name:`value`,parent:{fileName:`design_system/src/Field/Select/SelectItem.tsx`,name:`FieldSelectItemProps`},required:!0,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Select/SelectItem.tsx`,name:`FieldSelectItemProps`}],description:`Display content for the option`,name:`children`,parent:{fileName:`design_system/src/Field/Select/SelectItem.tsx`,name:`FieldSelectItemProps`},required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}}));function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(null,arguments)}var C,w,T,E=t((()=>{C=e(n()),f(),r(),m(),c(),v(),l(),a(),x(),w=(e,t)=>t.find(t=>t.props.value===e)??null,T=({label:e,id:t,value:n,onChange:r,placeholder:a,errors:c=[],isDisabled:l=!1,renderHelperText:f,children:m})=>{let{errorId:h,controlProps:g}=p({id:t,errors:c,isDisabled:l}),[v,y]=(0,C.useState)(!1),b=(0,C.useMemo)(()=>C.Children.toArray(m).filter(e=>C.isValidElement(e)),[m]),x=w(n,b),{getToggleButtonProps:T,getLabelProps:E,getMenuProps:D,getItemProps:O,highlightedIndex:k}=d({items:b,selectedItem:x,isOpen:v,onIsOpenChange:({isOpen:e})=>y(e??!1),onSelectedItemChange:({selectedItem:e})=>{e&&r(e.props.value)},itemToString:e=>e?e.props.value:``}),{anchorProps:A,layerProps:j}=s({isOpen:v,setIsOpen:y,ariaPopupType:`listbox`});return C.createElement(`div`,{className:i([`nds-field`,{"nds-field--isDisabled":l,"nds-field--hasError":c.length>0}])},C.createElement(o,{alignItems:`center`},C.createElement(o.Item,null,C.createElement(`label`,S({className:`nds-field-label`},E()),e)),C.createElement(o.Item,{shrink:!0},C.createElement(`div`,{className:`fontColor--secondary fontSize--s`},f?.()))),C.createElement(`div`,{ref:A.ref,style:A.style,"aria-haspopup":A[`aria-haspopup`],"aria-expanded":A[`aria-expanded`]},C.createElement(_,S({},T(),g,{isActive:v,isDisabled:l,hasError:c.length>0}),C.createElement(`span`,{className:`nds-field-select-value`},x?x.props.children:a),C.createElement(`i`,{className:`narmi-icon-chevron-${v?`up`:`down`}`,"aria-hidden":`true`}))),C.createElement(`div`,{ref:j.ref,style:j.style},C.createElement(`ul`,S({},D(),{className:`nds-field-select-listbox`}),v&&b.map((e,t)=>C.createElement(`li`,S({key:e.props.value,className:i([`nds-field-select-item`,{"nds-field-select-item--highlighted":k===t}])},O({item:e,index:t})),e)))),C.createElement(`div`,{className:`nds-field-errors`,id:h,"aria-live":`polite`},c.map((e,t)=>C.createElement(u,{key:`${t}-${e}`,error:e,marginTop:`none`}))))},T.displayName=`Field.Select`,T.Item=b;try{T.displayName=`Field.Select`,T.__docgenInfo={description:"Field.Select renders a dropdown select styled consistently with Field.Text.\nIt uses downshift's `useSelect` for keyboard navigation and ARIA,\nand `useDropdownLayer` for dropdown positioning.",displayName:`Field.Select`,filePath:`/home/runner/work/design_system/design_system/src/Field/Select/index.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Select/index.tsx`,name:`FieldSelectProps`}],description:`Currently selected value (controlled)`,name:`value`,parent:{fileName:`design_system/src/Field/Select/index.tsx`,name:`FieldSelectProps`},required:!0,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Select/index.tsx`,name:`FieldSelectProps`}],description:`Called with the new value when selection changes`,name:`onChange`,parent:{fileName:`design_system/src/Field/Select/index.tsx`,name:`FieldSelectProps`},required:!0,tags:{},type:{name:`(value: string) => void`}},placeholder:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Select/index.tsx`,name:`FieldSelectProps`}],description:`Placeholder text when no value is selected`,name:`placeholder`,parent:{fileName:`design_system/src/Field/Select/index.tsx`,name:`FieldSelectProps`},required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Select/index.tsx`,name:`FieldSelectProps`}],description:`Field.Select.Item elements`,name:`children`,parent:{fileName:`design_system/src/Field/Select/index.tsx`,name:`FieldSelectProps`},required:!0,tags:{},type:{name:`ReactNode`}},id:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`id`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`label`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!0,tags:{},type:{name:`string`}},errors:{defaultValue:{value:`[]`},declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`errors`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`string[]`}},isDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`isDisabled`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`boolean`}},renderHelperText:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`renderHelperText`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`() => ReactNode`}}},tags:{}}}catch{}}));function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(null,arguments)}var O,k,A,j,M,N,P,F,I,L,R;t((()=>{O=e(n()),E(),k={title:`Components/Field/Field.Select`,component:T},A=[{value:`us`,label:`United States`},{value:`ca`,label:`Canada`},{value:`mx`,label:`Mexico`},{value:`gb`,label:`United Kingdom`},{value:`de`,label:`Germany`}],j=e=>{let[t,n]=(0,O.useState)(e.value||``);return O.createElement(T,D({},e,{value:t,onChange:n}),A.map(({value:e,label:t})=>O.createElement(T.Item,{key:e,value:e},t)))},M=j.bind({}),M.args={label:`Country`,placeholder:`Select a country`},N=j.bind({}),N.args={label:`Country`,value:`ca`},P=j.bind({}),P.args={label:`Country`,placeholder:`Select a country`,errors:[`Please select a country`]},F=j.bind({}),F.args={label:`Country`,value:`us`,isDisabled:!0},I=()=>{let[e,t]=(0,O.useState)(``);return O.createElement(T,{label:`Country`,value:e,onChange:t,placeholder:`Select a country`,renderHelperText:()=>O.createElement(`span`,null,`Choose the country where you currently reside`)},A.map(({value:e,label:t})=>O.createElement(T.Item,{key:e,value:e},t)))},I.parameters={docs:{description:{story:"`renderHelperText` accepts a function returning a ReactNode. The node is rendered at the end of the label row."}}},L=()=>{let[e,t]=(0,O.useState)(``),[n,r]=(0,O.useState)(``);return O.createElement(`div`,{style:{display:`flex`,gap:`var(--space-m)`,maxWidth:600}},O.createElement(`div`,{style:{flex:1}},O.createElement(T,{label:`Country`,value:e,onChange:t,placeholder:`Select a country`},A.map(({value:e,label:t})=>O.createElement(T.Item,{key:e,value:e},t)))),O.createElement(`div`,{style:{flex:1}},O.createElement(`div`,{className:`nds-field`},O.createElement(`label`,{className:`nds-field-label`,htmlFor:`city-input`},`City`),O.createElement(`div`,{className:`nds-field-input-box`},O.createElement(`input`,{id:`city-input`,value:n,onChange:e=>r(e.target.value),placeholder:`Enter city name`,style:{width:`100%`,border:`none`,outline:0,padding:`0 var(--space-xs)`,fontSize:`var(--font-size-s)`}})))))},L.parameters={docs:{description:{story:`Field.Select is designed to visually align with Field.Text. Both share the same shell, label, and input box styles.`}}},I.__docgenInfo={description:``,methods:[],displayName:`WithHelperText`},L.__docgenInfo={description:``,methods:[],displayName:`SideBySideWithText`},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldSelect {...args} value={value} onChange={setValue}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldSelect {...args} value={value} onChange={setValue}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldSelect {...args} value={value} onChange={setValue}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <FieldSelect {...args} value={value} onChange={setValue}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <FieldSelect label="Country" value={value} onChange={setValue} placeholder="Select a country" renderHelperText={() => <span>Choose the country where you currently reside</span>}>
      {COUNTRIES.map(({
      value,
      label
    }) => <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>)}
    </FieldSelect>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  return <div style={{
    display: "flex",
    gap: "var(--space-m)",
    maxWidth: 600
  }}>
      <div style={{
      flex: 1
    }}>
        <FieldSelect label="Country" value={country} onChange={setCountry} placeholder="Select a country">
          {COUNTRIES.map(({
          value,
          label
        }) => <FieldSelect.Item key={value} value={value}>
              {label}
            </FieldSelect.Item>)}
        </FieldSelect>
      </div>
      <div style={{
      flex: 1
    }}>
        {/* Using a plain input here to show visual alignment */}
        <div className="nds-field">
          <label className="nds-field-label" htmlFor="city-input">
            City
          </label>
          <div className="nds-field-input-box">
            <input id="city-input" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city name" style={{
            width: "100%",
            border: "none",
            outline: 0,
            padding: "0 var(--space-xs)",
            fontSize: "var(--font-size-s)"
          }} />
          </div>
        </div>
      </div>
    </div>;
}`,...L.parameters?.docs?.source}}},R=[`Overview`,`WithValue`,`WithErrors`,`Disabled`,`WithHelperText`,`SideBySideWithText`]}))();export{F as Disabled,M as Overview,L as SideBySideWithText,P as WithErrors,I as WithHelperText,N as WithValue,R as __namedExportsOrder,k as default};