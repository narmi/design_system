import{e,r as w}from"./iframe-CTHFVwiB.js";import{a as _,b as T,S as t}from"./index-Dy2NcgGp.js";import{B as x}from"./index-UI0I0XKB.js";import{D as F}from"./index-lKrPyIv3.js";import{D as B}from"./index-Hdp_oEEW.js";import"./preload-helper-PPVm8Dsz.js";import"./downshift.esm-BZnkhwRr.js";import"./extends-DDykod_l.js";import"./index-B3NVBfVJ.js";import"./index-Chjiymov.js";import"./tslib.es6-rrx6G-_s.js";import"./index-Bz2bHirU.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-RvS1aOr8.js";import"./index-DZf7ozVt.js";import"./AsElement-BZSYqSPH.js";import"./index-AIaUF-6N.js";import"./index-Cgg46ZS3.js";import"./index-Bl5gE4QZ.js";import"./index-DChBguUb.js";import"./index-CmwxXSSA.js";import"./index-BZ4vRZwm.js";import"./Combination-Cq1vjbzM.js";import"./inheritsLoose-CWawPfk8.js";import"./CSSTransition-d2nVOe3D.js";import"./index-BYSOu1SS.js";function M(){return M=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var I in c)({}).hasOwnProperty.call(c,I)&&(n[I]=c[I])}return n},M.apply(null,arguments)}const r=n=>e.createElement(t,n),v=[e.createElement(t.Item,{value:"coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(t.Item,{value:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(t.Item,{value:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(t.Item,{value:"blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob")],S=r.bind({});S.args={id:"overviewStory",label:"Favorite icon",children:v};const h=r.bind({});h.args={id:"defaultSelection",label:"Favorite icon",children:v,defaultValue:"film"};const k=r.bind({});k.args={disabled:!0,id:"disabledSelection",label:"Account",children:[e.createElement(t.Item,{value:"checking0001"},"Checking - 0001")],value:"checking0001"};const E=r.bind({});E.args={id:"errorState",label:"Account",children:[e.createElement(t.Item,{value:"checking1234"},"Checking (1234)"),e.createElement(t.Item,{value:"checking4321"},"Checking (4321)")],defaultValue:"checking1234",errorText:"Checking (1234) is not eligible"};const l=r.bind({});l.args={label:"Account",id:"account-field",children:[...v,e.createElement(t.Action,{onSelect:()=>{alert("side effect triggered - no option selected")}},e.createElement("span",{className:"fontColor--pine fontWeight--bold"},e.createElement("span",{className:"narmi-icon-plus padding--right--xs"})," Add new icon"))]};l.parameters={docs:{description:{story:"If you need an option that triggers a side effect, use a `<Select.Action>` child. An action item will not update selection and con not be selected by default."}}};const y=r.bind({});y.args={label:"Account",id:"account-field",clearSelectionOnAction:!0,children:[...v,e.createElement(t.Action,{onSelect:()=>{alert("side effect triggered")}},e.createElement("span",{className:"fontColor--pine fontWeight--bold"},e.createElement("span",{className:"narmi-icon-plus padding--right--xs"})," Add new icon"))]};l.parameters={docs:{description:{story:"Use `clearSelectionOnAction` to clear any existing selection when any action is selected."}}};const m=r.bind({});m.args={id:"withCategories",label:"Select an Icon",children:[e.createElement(t.Category,{label:"Transportation"},e.createElement(t.Item,{value:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(t.Item,{value:"anchor"},e.createElement("span",{className:"narmi-icon-anchor padding--right--xs"})," Anchor"),e.createElement(t.Item,{value:"car-outline"},e.createElement("span",{className:"narmi-icon-car-outline padding--right--xs"})," Car")),e.createElement(t.Category,{label:"Art"},e.createElement(t.Item,{value:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(t.Item,{value:"aperture"},e.createElement("span",{className:"narmi-icon-aperture padding--right--xs"})," Aperture"),e.createElement(t.Item,{value:"pen"},e.createElement("span",{className:"narmi-icon-pen-tool padding--right--xs"})," Pen"),e.createElement(t.Item,{value:"blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"))]};m.parameters={docs:{description:{story:"You may group `Select.Item` elements by category with `Select.Category`. When using categories, you **must** make all direct children of `Select` a `Select.Category`; no orphan items are allowed when using categories."}}};const i=r.bind({});i.args={id:"expandedCategories",label:"Select an Icon",children:[e.createElement(t.Category,{label:"Transportation",isFlat:!0},e.createElement(t.Item,{value:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(t.Item,{value:"anchor"},e.createElement("span",{className:"narmi-icon-anchor padding--right--xs"})," Anchor"),e.createElement(t.Item,{value:"car-outline"},e.createElement("span",{className:"narmi-icon-car-outline padding--right--xs"})," Car")),e.createElement(t.Category,{label:"Art",isFlat:!0},e.createElement(t.Item,{value:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(t.Item,{value:"aperture"},e.createElement("span",{className:"narmi-icon-aperture padding--right--xs"})," Aperture"),e.createElement(t.Item,{value:"pen"},e.createElement("span",{className:"narmi-icon-pen-tool padding--right--xs"})," Pen"),e.createElement(t.Item,{value:"blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob")),e.createElement(t.Action,{onSelect:()=>{alert("action taken")}},e.createElement("span",{className:"fontColor--pine fontWeight--bold"},e.createElement("span",{className:"narmi-icon-plus padding--right--xs"})," Add new"))]};i.parameters={docs:{description:{story:"Categories may be set to always be open with the `isFlat` prop."}}};const f=r.bind({});f.args={id:"categoryLabels",label:"Select an Icon",children:[e.createElement(t.Category,{label:"Recently used",isFlat:!0,kind:"label"},e.createElement(t.Item,{value:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(t.Item,{value:"anchor"},e.createElement("span",{className:"narmi-icon-anchor padding--right--xs"})," Anchor"),e.createElement(t.Item,{value:"car-outline"},e.createElement("span",{className:"narmi-icon-car-outline padding--right--xs"})," Car"))]};i.parameters={docs:{description:{story:"Categories may be set to always be open with the `expand` prop."}}};const o=r.bind({});o.args={id:"customTypeaheadString",label:"Select an Industry",children:[{name:"Agriculture",code:"12345"},{name:"Manufacturing",code:"55555"},{name:"Logistics",code:"32144"},{name:"Hospitality",code:"22147"}].map(({name:n,code:a})=>e.createElement(t.Item,{key:a,value:a,searchValue:n},n))};o.parameters={docs:{description:{story:"By default, typeahead highlights items based on `value`. You may pass a `searchValue` to customize the string users search against when using typeahead. In this example, the value is a numeric code, but we'd like the user to filter on industry name"}}};const u=r.bind({});u.args={id:"customTypeaheadBehavior",label:"Select an Industry",getTypeaheadString:(n,a)=>{console.info(`User typed: "${n}"`);let c=a.props.searchValue||a.props.value||"";return/\d/.test(n)&&(c=a.props.value,console.info("Searching by NAICS code instead of name")),c},children:[{name:"Agriculture",code:"12345"},{name:"Manufacturing",code:"55555"},{name:"Logistics",code:"32144"},{name:"Hospitality",code:"22147"}].map(({name:n,code:a})=>e.createElement(t.Item,{key:a,value:a,searchValue:n},n," - ",a))};u.parameters={docs:{description:{story:"You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha"}}};const b=()=>e.createElement("main",{style:{height:"200vh"}},e.createElement("div",{className:"margin--bottom",style:{marginTop:"100vh"}}),e.createElement(t,{id:"product-field",label:"Account"},e.createElement(t.Item,{value:"checking1234"},"Checking (1234)"),e.createElement(t.Item,{value:"savings4321"},"Savings (4321)"),e.createElement(t.Item,{value:"checking5678"},"Checking (5678)"),e.createElement(t.Item,{value:"savings9876"},"Savings (9876)"),e.createElement(t.Item,{value:"money_market2468"},"Money Market (2468)"),e.createElement(t.Item,{value:"cd1357"},"Certificate of Deposit (1357)"),e.createElement(t.Item,{value:"checking9999"},"Checking (9999)"),e.createElement(t.Item,{value:"savings1111"},"Savings (1111)"),e.createElement(t.Item,{value:"ira8642"},"IRA (8642)"),e.createElement(t.Item,{value:"checking7531"},"Checking (7531)"),e.createElement(t.Item,{value:"savings0246"},"Savings (0246)"),e.createElement(t.Item,{value:"money_market8024"},"Money Market (8024)"),e.createElement(t.Item,{value:"checking3698"},"Checking (3698)"),e.createElement(t.Item,{value:"savings7410"},"Savings (7410)"),e.createElement(t.Item,{value:"cd9630"},"Certificate of Deposit (9630)"),e.createElement(t.Item,{value:"checking1593"},"Checking (1593)"),e.createElement(t.Item,{value:"savings7529"},"Savings (7529)"),e.createElement(t.Item,{value:"ira4816"},"IRA (4816)"),e.createElement(t.Item,{value:"money_market3571"},"Money Market (3571)"),e.createElement(t.Item,{value:"checking8642"},"Checking (8642)"))),g=()=>{const[n,a]=w.useState("");return e.createElement(e.Fragment,null,e.createElement("div",{className:"margin--bottom"},e.createElement("input",{type:"text",name:"account",value:n,readOnly:!0}),e.createElement("p",{className:"fontSize--xs"},"(",e.createElement("i",null,"Typically this would be a ",e.createElement("code",null,"hidden")," input."),")")),e.createElement(t,{id:"product-field",label:"Account",onChange:a},e.createElement(t.Item,{value:"checking1234"},"Checking (1234)"),e.createElement(t.Item,{value:"savings4321"},"Savings (4321)"),e.createElement(t.Item,{value:"checking5678"},"Checking (5678)"),e.createElement(t.Item,{value:"savings9876"},"Savings (9876)"),e.createElement(t.Item,{value:"money_market2468"},"Money Market (2468)"),e.createElement(t.Item,{value:"cd1357"},"Certificate of Deposit (1357)"),e.createElement(t.Item,{value:"checking9999"},"Checking (9999)"),e.createElement(t.Item,{value:"savings1111"},"Savings (1111)"),e.createElement(t.Item,{value:"ira8642"},"IRA (8642)"),e.createElement(t.Item,{value:"checking7531"},"Checking (7531)"),e.createElement(t.Item,{value:"savings0246"},"Savings (0246)"),e.createElement(t.Item,{value:"money_market8024"},"Money Market (8024)"),e.createElement(t.Item,{value:"checking3698"},"Checking (3698)"),e.createElement(t.Item,{value:"savings7410"},"Savings (7410)"),e.createElement(t.Item,{value:"cd9630"},"Certificate of Deposit (9630)"),e.createElement(t.Item,{value:"checking1593"},"Checking (1593)"),e.createElement(t.Item,{value:"savings7529"},"Savings (7529)"),e.createElement(t.Item,{value:"ira4816"},"IRA (4816)"),e.createElement(t.Item,{value:"money_market3571"},"Money Market (3571)"),e.createElement(t.Item,{value:"checking8642"},"Checking (8642)")))};g.parameters={docs:{description:{story:"A hidden input works natively in a `form`, or as a bridge to a form management library of your choice."}}};const d=()=>{const[n,a]=w.useState(null),[c,I]=w.useState([{value:"checking1234",label:"Checking (1234)"},{value:"savings4321",label:"Savings (4321)"}]);return e.createElement(e.Fragment,null,e.createElement(t,{id:"controlled-product-field",label:"Account",value:n,onChange:s=>a(s)},c.map(({value:s,label:O})=>e.createElement(t.Item,{key:`${s}-${O}`,value:s},O))),e.createElement("div",{className:"margin--top"},e.createElement(x,{label:"Clear selection",kind:"negative",onClick:()=>{a(null)}})),e.createElement("div",{className:"margin--top"},e.createElement(x,{label:"Add an item",kind:"negative",onClick:()=>{I(s=>[{value:"extra",label:"Extra Item!"},...s])}})))};d.parameters={docs:{description:{story:"You can programmatically select selection by updating the `value` prop. When `value` is passed, the component becomes **fully controlled** and you must use the `onChange` prop to update the `value`. Clear the selection by passing an empty string as the `value`."}}};const p=n=>{const[a,c]=w.useState(!1);return e.createElement(e.Fragment,null,e.createElement(x,{label:"Open Dialog",onClick:()=>{c(!0)}}),e.createElement(F,{title:"Dialog with a Select",isOpen:a,onUserDismiss:()=>{c(!1)}},e.createElement("div",{className:"padding--y--s"},e.createElement("div",null,"The floating menu list will render portaled near the bottom of the"," ","<body>"," HTML element."),e.createElement("div",{className:"padding--y--l"},e.createElement(t,n)))))};p.args={label:"Favorite icon",children:v};const C=()=>e.createElement(t,{label:"Account"},e.createElement(t.Item,{value:"checking1234"},"Checking (1234)")),A=()=>e.createElement(t,{label:"Account"},e.createElement(t.Action,{onSelect:()=>{}},e.createElement("span",{className:"fontColor--pine fontWeight--bold"},e.createElement("span",{className:"narmi-icon-plus padding--right--xs"})," Add new account"))),se={title:"Components/Select",component:t,subcomponents:{SelectItem:T,SelectAction:_},argTypes:{children:{control:!1}}},D=r.bind({});D.args={id:"overviewStory",label:"Favorite icon (short menu)",maxMenuHeight:"10vh",children:v};const N=n=>{const[a,c]=w.useState(!1);return e.createElement(e.Fragment,null,e.createElement(x,{onClick:()=>{c(!0)}},"Open Drawer"),e.createElement(B,M({},n,{isOpen:a,onUserDismiss:()=>c(!1)}),e.createElement("div",{style:{marginTop:"600px",width:"300px"}},e.createElement(t,{id:"product-field",label:"Account"},e.createElement(t.Item,{value:"checking1234"},"Checking (1234)"),e.createElement(t.Item,{value:"savings4321"},"Savings (4321)"),e.createElement(t.Item,{value:"checking5678"},"Checking (5678)"),e.createElement(t.Item,{value:"savings9876"},"Savings (9876)"),e.createElement(t.Item,{value:"money_market2468"},"Money Market (2468)"),e.createElement(t.Item,{value:"cd1357"},"Certificate of Deposit (1357)"),e.createElement(t.Item,{value:"checking9999"},"Checking (9999)"),e.createElement(t.Item,{value:"savings1111"},"Savings (1111)"),e.createElement(t.Item,{value:"ira8642"},"IRA (8642)"),e.createElement(t.Item,{value:"checking7531"},"Checking (7531)"),e.createElement(t.Item,{value:"savings0246"},"Savings (0246)"),e.createElement(t.Item,{value:"money_market8024"},"Money Market (8024)"),e.createElement(t.Item,{value:"checking3698"},"Checking (3698)"),e.createElement(t.Item,{value:"savings7410"},"Savings (7410)"),e.createElement(t.Item,{value:"cd9630"},"Certificate of Deposit (9630)"),e.createElement(t.Item,{value:"checking1593"},"Checking (1593)"),e.createElement(t.Item,{value:"savings7529"},"Savings (7529)"),e.createElement(t.Item,{value:"ira4816"},"IRA (4816)"),e.createElement(t.Item,{value:"money_market3571"},"Money Market (3571)"),e.createElement(t.Item,{value:"checking8642"},"Checking (8642)")))))};b.__docgenInfo={description:"",methods:[],displayName:"ScrollingBehavior"};g.__docgenInfo={description:"",methods:[],displayName:"InAForm"};d.__docgenInfo={description:"",methods:[],displayName:"Controlled"};p.__docgenInfo={description:"",methods:[],displayName:"InADialog"};C.__docgenInfo={description:"",methods:[],displayName:"OneItem"};A.__docgenInfo={description:"",methods:[],displayName:"OneAction"};N.__docgenInfo={description:"",methods:[],displayName:"InADrawer"};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...E.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...i.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...f.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <main style={{
    height: "200vh"
  }}>
      <div className="margin--bottom" style={{
      marginTop: "100vh"
    }} />
      <Select id="product-field" label="Account">
        <Select.Item value="checking1234">Checking (1234)</Select.Item>
        <Select.Item value="savings4321">Savings (4321)</Select.Item>
        <Select.Item value="checking5678">Checking (5678)</Select.Item>
        <Select.Item value="savings9876">Savings (9876)</Select.Item>
        <Select.Item value="money_market2468">Money Market (2468)</Select.Item>
        <Select.Item value="cd1357">Certificate of Deposit (1357)</Select.Item>
        <Select.Item value="checking9999">Checking (9999)</Select.Item>
        <Select.Item value="savings1111">Savings (1111)</Select.Item>
        <Select.Item value="ira8642">IRA (8642)</Select.Item>
        <Select.Item value="checking7531">Checking (7531)</Select.Item>
        <Select.Item value="savings0246">Savings (0246)</Select.Item>
        <Select.Item value="money_market8024">Money Market (8024)</Select.Item>
        <Select.Item value="checking3698">Checking (3698)</Select.Item>
        <Select.Item value="savings7410">Savings (7410)</Select.Item>
        <Select.Item value="cd9630">Certificate of Deposit (9630)</Select.Item>
        <Select.Item value="checking1593">Checking (1593)</Select.Item>
        <Select.Item value="savings7529">Savings (7529)</Select.Item>
        <Select.Item value="ira4816">IRA (4816)</Select.Item>
        <Select.Item value="money_market3571">Money Market (3571)</Select.Item>
        <Select.Item value="checking8642">Checking (8642)</Select.Item>
      </Select>
    </main>;
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState("");
  return <>
      <div className="margin--bottom">
        <input type="text" name="account" value={inputValue} readOnly />
        <p className="fontSize--xs">
          (
          <i>
            Typically this would be a <code>hidden</code> input.
          </i>
          )
        </p>
      </div>
      <Select id="product-field" label="Account" onChange={setInputValue}>
        <Select.Item value="checking1234">Checking (1234)</Select.Item>
        <Select.Item value="savings4321">Savings (4321)</Select.Item>
        <Select.Item value="checking5678">Checking (5678)</Select.Item>
        <Select.Item value="savings9876">Savings (9876)</Select.Item>
        <Select.Item value="money_market2468">Money Market (2468)</Select.Item>
        <Select.Item value="cd1357">Certificate of Deposit (1357)</Select.Item>
        <Select.Item value="checking9999">Checking (9999)</Select.Item>
        <Select.Item value="savings1111">Savings (1111)</Select.Item>
        <Select.Item value="ira8642">IRA (8642)</Select.Item>
        <Select.Item value="checking7531">Checking (7531)</Select.Item>
        <Select.Item value="savings0246">Savings (0246)</Select.Item>
        <Select.Item value="money_market8024">Money Market (8024)</Select.Item>
        <Select.Item value="checking3698">Checking (3698)</Select.Item>
        <Select.Item value="savings7410">Savings (7410)</Select.Item>
        <Select.Item value="cd9630">Certificate of Deposit (9630)</Select.Item>
        <Select.Item value="checking1593">Checking (1593)</Select.Item>
        <Select.Item value="savings7529">Savings (7529)</Select.Item>
        <Select.Item value="ira4816">IRA (4816)</Select.Item>
        <Select.Item value="money_market3571">Money Market (3571)</Select.Item>
        <Select.Item value="checking8642">Checking (8642)</Select.Item>
      </Select>
    </>;
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{
    value: "checking1234",
    label: "Checking (1234)"
  }, {
    value: "savings4321",
    label: "Savings (4321)"
  }]);
  return <>
      <Select id="controlled-product-field" label="Account" value={value} onChange={v => setValue(v)}>
        {items.map(({
        value,
        label
      }) => <Select.Item key={\`\${value}-\${label}\`} value={value}>
            {label}
          </Select.Item>)}
      </Select>
      <div className="margin--top">
        <Button label="Clear selection" kind="negative" onClick={() => {
        setValue(null);
      }} />
      </div>
      <div className="margin--top">
        <Button label="Add an item" kind="negative" onClick={() => {
        setItems(items => [{
          value: "extra",
          label: "Extra Item!"
        }, ...items]);
      }} />
      </div>
    </>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return <>
      <Button label="Open Dialog" onClick={() => {
      setIsDialogOpen(true);
    }} />
      <Dialog title="Dialog with a Select" isOpen={isDialogOpen} onUserDismiss={() => {
      setIsDialogOpen(false);
    }}>
        <div className="padding--y--s">
          <div>
            The floating menu list will render portaled near the bottom of the{" "}
            {"<body>"} HTML element.
          </div>
          <div className="padding--y--l">
            <Select {...args} />
          </div>
        </div>
      </Dialog>
    </>;
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Select label="Account">
      <Select.Item value="checking1234">Checking (1234)</Select.Item>
    </Select>;
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <Select label="Account">
      <Select.Action onSelect={() => {}}>
        <span className="fontColor--pine fontWeight--bold">
          <span className="narmi-icon-plus padding--right--xs" /> Add new
          account
        </span>
      </Select.Action>
    </Select>;
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDrawerOpen(true);
    }}>
        Open Drawer
      </Button>
      <Drawer {...args} isOpen={isDrawerOpen} onUserDismiss={() => setIsDrawerOpen(false)}>
        <div style={{
        marginTop: "600px",
        width: "300px"
      }}>
          <Select id="product-field" label="Account">
            <Select.Item value="checking1234">Checking (1234)</Select.Item>
            <Select.Item value="savings4321">Savings (4321)</Select.Item>
            <Select.Item value="checking5678">Checking (5678)</Select.Item>
            <Select.Item value="savings9876">Savings (9876)</Select.Item>
            <Select.Item value="money_market2468">
              Money Market (2468)
            </Select.Item>
            <Select.Item value="cd1357">
              Certificate of Deposit (1357)
            </Select.Item>
            <Select.Item value="checking9999">Checking (9999)</Select.Item>
            <Select.Item value="savings1111">Savings (1111)</Select.Item>
            <Select.Item value="ira8642">IRA (8642)</Select.Item>
            <Select.Item value="checking7531">Checking (7531)</Select.Item>
            <Select.Item value="savings0246">Savings (0246)</Select.Item>
            <Select.Item value="money_market8024">
              Money Market (8024)
            </Select.Item>
            <Select.Item value="checking3698">Checking (3698)</Select.Item>
            <Select.Item value="savings7410">Savings (7410)</Select.Item>
            <Select.Item value="cd9630">
              Certificate of Deposit (9630)
            </Select.Item>
            <Select.Item value="checking1593">Checking (1593)</Select.Item>
            <Select.Item value="savings7529">Savings (7529)</Select.Item>
            <Select.Item value="ira4816">IRA (4816)</Select.Item>
            <Select.Item value="money_market3571">
              Money Market (3571)
            </Select.Item>
            <Select.Item value="checking8642">Checking (8642)</Select.Item>
          </Select>
        </div>
      </Drawer>
    </>;
}`,...N.parameters?.docs?.source}}};const me=["Overview","DefaultSelection","DisabledSelection","ErrorState","WithAction","ClearingSelectionWithAction","WithCategories","FlatCategories","CategoryLabels","CustomTypeahead","ChangingTypeaheadBehavior","ScrollingBehavior","InAForm","Controlled","InADialog","OneItem","OneAction","OverridingMenuHeight","InADrawer"];export{f as CategoryLabels,u as ChangingTypeaheadBehavior,y as ClearingSelectionWithAction,d as Controlled,o as CustomTypeahead,h as DefaultSelection,k as DisabledSelection,E as ErrorState,i as FlatCategories,p as InADialog,N as InADrawer,g as InAForm,A as OneAction,C as OneItem,D as OverridingMenuHeight,S as Overview,b as ScrollingBehavior,l as WithAction,m as WithCategories,me as __namedExportsOrder,se as default};
