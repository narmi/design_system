import{e,r as D}from"./iframe-D80IBRsk.js";import{a as O,b as T,S as a}from"./index-DzZJGHFG.js";import{B as N}from"./index-BQ7Yfwa6.js";import{D as F}from"./index-DgjBo7xE.js";import{D as B}from"./index-DnU693Hf.js";import"./preload-helper-PPVm8Dsz.js";import"./downshift.esm-DLBpPMjh.js";import"./extends-DDykod_l.js";import"./index-DHmkb4WY.js";import"./index-Chjiymov.js";import"./tslib.es6-rrx6G-_s.js";import"./index-BB4QpSGE.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-RvS1aOr8.js";import"./index-CIPjToQ0.js";import"./AsElement-ClXycHB4.js";import"./index-BT1LWC5y.js";import"./index-D7Jq8OLj.js";import"./index-qdesG-MM.js";import"./index-C2dul6Ds.js";import"./index-BVOF0ewB.js";import"./index-fCyk2AET.js";import"./Combination-DWwPObgR.js";import"./inheritsLoose-CWawPfk8.js";import"./CSSTransition-DFwVAPVZ.js";import"./index-BtHjbXr6.js";function x(){return x=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var v in c)({}).hasOwnProperty.call(c,v)&&(n[v]=c[v])}return n},x.apply(null,arguments)}const r=n=>e.createElement(a,n),p=[e.createElement(a.Item,{value:"coffee",searchValue:"coffee"},e.createElement("span",{className:"narmi-icon-coffee padding--right--xs"})," Coffee"),e.createElement(a.Item,{value:"film",searchValue:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(a.Item,{value:"truck",searchValue:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(a.Item,{value:"blob",searchValue:"blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob")],I=r.bind({});I.args={id:"overviewStory",label:"Favorite icon",children:p};const S=r.bind({});S.args={id:"defaultSelection",label:"Favorite icon",children:p,defaultValue:"film"};const k=r.bind({});k.args={disabled:!0,id:"disabledSelection",label:"Account",children:[e.createElement(a.Item,{value:"checking0001",searchValue:"checking0001"},"Checking - 0001")],value:"checking0001"};const E=r.bind({});E.args={id:"errorState",label:"Account",children:[e.createElement(a.Item,{value:"checking1234",searchValue:"checking1234"},"Checking (1234)"),e.createElement(a.Item,{value:"checking4321",searchValue:"checking4321"},"Checking (4321)")],defaultValue:"checking1234",errorText:"Checking (1234) is not eligible"};const s=r.bind({});s.args={label:"Account",id:"account-field",children:[...p,e.createElement(a.Action,{onSelect:()=>{alert("side effect triggered - no option selected")}},e.createElement("span",{className:"fontColor--pine fontWeight--bold"},e.createElement("span",{className:"narmi-icon-plus padding--right--xs"})," Add new icon"))]};s.parameters={docs:{description:{story:"If you need an option that triggers a side effect, use a `<Select.Action>` child. An action item will not update selection and con not be selected by default."}}};const V=r.bind({});V.args={label:"Account",id:"account-field",clearSelectionOnAction:!0,children:[...p,e.createElement(a.Action,{onSelect:()=>{alert("side effect triggered")}},e.createElement("span",{className:"fontColor--pine fontWeight--bold"},e.createElement("span",{className:"narmi-icon-plus padding--right--xs"})," Add new icon"))]};s.parameters={docs:{description:{story:"Use `clearSelectionOnAction` to clear any existing selection when any action is selected."}}};const m=r.bind({});m.args={id:"withCategories",label:"Select an Icon",children:[e.createElement(a.Category,{label:"Transportation"},e.createElement(a.Item,{value:"truck",searchValue:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(a.Item,{value:"anchor",searchValue:"anchor"},e.createElement("span",{className:"narmi-icon-anchor padding--right--xs"})," Anchor"),e.createElement(a.Item,{value:"car-outline",searchValue:"car-outline"},e.createElement("span",{className:"narmi-icon-car-outline padding--right--xs"})," Car")),e.createElement(a.Category,{label:"Art"},e.createElement(a.Item,{value:"film",searchValue:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(a.Item,{value:"aperture",searchValue:"aperture"},e.createElement("span",{className:"narmi-icon-aperture padding--right--xs"})," Aperture"),e.createElement(a.Item,{value:"pen",searchValue:"pen"},e.createElement("span",{className:"narmi-icon-pen-tool padding--right--xs"})," Pen"),e.createElement(a.Item,{value:"blob",searchValue:"blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob"))]};m.parameters={docs:{description:{story:"You may group `Select.Item` elements by category with `Select.Category`. When using categories, you **must** make all direct children of `Select` a `Select.Category`; no orphan items are allowed when using categories."}}};const i=r.bind({});i.args={id:"expandedCategories",label:"Select an Icon",children:[e.createElement(a.Category,{label:"Transportation",isFlat:!0},e.createElement(a.Item,{value:"truck",searchValue:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(a.Item,{value:"anchor",searchValue:"anchor"},e.createElement("span",{className:"narmi-icon-anchor padding--right--xs"})," Anchor"),e.createElement(a.Item,{value:"car-outline",searchValue:"car-outline"},e.createElement("span",{className:"narmi-icon-car-outline padding--right--xs"})," Car")),e.createElement(a.Category,{label:"Art",isFlat:!0},e.createElement(a.Item,{value:"film",searchValue:"film"},e.createElement("span",{className:"narmi-icon-film padding--right--xs"})," Film"),e.createElement(a.Item,{value:"aperture",searchValue:"aperture"},e.createElement("span",{className:"narmi-icon-aperture padding--right--xs"})," Aperture"),e.createElement(a.Item,{value:"pen",searchValue:"pen"},e.createElement("span",{className:"narmi-icon-pen-tool padding--right--xs"})," Pen"),e.createElement(a.Item,{value:"blob",searchValue:"blob"},e.createElement("span",{className:"narmi-icon-blob padding--right--xs"})," Blob")),e.createElement(a.Action,{onSelect:()=>{alert("action taken")}},e.createElement("span",{className:"fontColor--pine fontWeight--bold"},e.createElement("span",{className:"narmi-icon-plus padding--right--xs"})," Add new"))]};i.parameters={docs:{description:{story:"Categories may be set to always be open with the `isFlat` prop."}}};const y=r.bind({});y.args={id:"categoryLabels",label:"Select an Icon",children:[e.createElement(a.Category,{label:"Recently used",isFlat:!0,kind:"label"},e.createElement(a.Item,{value:"truck",searchValue:"truck"},e.createElement("span",{className:"narmi-icon-truck padding--right--xs"})," Truck"),e.createElement(a.Item,{value:"anchor",searchValue:"anchor"},e.createElement("span",{className:"narmi-icon-anchor padding--right--xs"})," Anchor"),e.createElement(a.Item,{value:"car-outline",searchValue:"car-outline"},e.createElement("span",{className:"narmi-icon-car-outline padding--right--xs"})," Car"))]};i.parameters={docs:{description:{story:"Categories may be set to always be open with the `expand` prop."}}};const o=r.bind({});o.args={id:"customTypeaheadString",label:"Select an Industry",children:[{name:"Agriculture",code:"12345"},{name:"Manufacturing",code:"55555"},{name:"Logistics",code:"32144"},{name:"Hospitality",code:"22147"}].map(({name:n,code:t})=>e.createElement(a.Item,{key:t,value:t,searchValue:n},n))};o.parameters={docs:{description:{story:"By default, typeahead highlights items based on `value`. You may pass a `searchValue` to customize the string users search against when using typeahead. In this example, the value is a numeric code, but we'd like the user to filter on industry name"}}};const u=r.bind({});u.args={id:"customTypeaheadBehavior",label:"Select an Industry",getTypeaheadString:(n,t)=>{console.info(`User typed: "${n}"`);let c=t.props.searchValue||t.props.value||"";return/\d/.test(n)&&(c=t.props.value,console.info("Searching by NAICS code instead of name")),c},children:[{name:"Agriculture",code:"12345"},{name:"Manufacturing",code:"55555"},{name:"Logistics",code:"32144"},{name:"Hospitality",code:"22147"}].map(({name:n,code:t})=>e.createElement(a.Item,{key:t,value:t,searchValue:n},n," - ",t))};u.parameters={docs:{description:{story:"You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha"}}};const b=()=>e.createElement("main",{style:{height:"200vh"}},e.createElement("div",{className:"margin--bottom",style:{marginTop:"100vh"}}),e.createElement(a,{id:"product-field",label:"Account"},e.createElement(a.Item,{value:"checking1234",searchValue:"checking1234"},"Checking (1234)"),e.createElement(a.Item,{value:"savings4321",searchValue:"savings4321"},"Savings (4321)"),e.createElement(a.Item,{value:"checking5678",searchValue:"checking5678"},"Checking (5678)"),e.createElement(a.Item,{value:"savings9876",searchValue:"savings9876"},"Savings (9876)"),e.createElement(a.Item,{value:"money_market2468",searchValue:"money_market2468"},"Money Market (2468)"),e.createElement(a.Item,{value:"cd1357",searchValue:"cd1357"},"Certificate of Deposit (1357)"),e.createElement(a.Item,{value:"checking9999",searchValue:"checking9999"},"Checking (9999)"),e.createElement(a.Item,{value:"savings1111",searchValue:"savings1111"},"Savings (1111)"),e.createElement(a.Item,{value:"ira8642",searchValue:"ira8642"},"IRA (8642)"),e.createElement(a.Item,{value:"checking7531",searchValue:"checking7531"},"Checking (7531)"),e.createElement(a.Item,{value:"savings0246",searchValue:"savings0246"},"Savings (0246)"),e.createElement(a.Item,{value:"money_market8024",searchValue:"money_market8024"},"Money Market (8024)"),e.createElement(a.Item,{value:"checking3698",searchValue:"checking3698"},"Checking (3698)"),e.createElement(a.Item,{value:"savings7410",searchValue:"savings7410"},"Savings (7410)"),e.createElement(a.Item,{value:"cd9630",searchValue:"cd9630"},"Certificate of Deposit (9630)"),e.createElement(a.Item,{value:"checking1593",searchValue:"checking1593"},"Checking (1593)"),e.createElement(a.Item,{value:"savings7529",searchValue:"savings7529"},"Savings (7529)"),e.createElement(a.Item,{value:"ira4816",searchValue:"ira4816"},"IRA (4816)"),e.createElement(a.Item,{value:"money_market3571",searchValue:"money_market3571"},"Money Market (3571)"),e.createElement(a.Item,{value:"checking8642",searchValue:"checking8642"},"Checking (8642)"))),g=()=>{const[n,t]=D.useState("");return e.createElement(e.Fragment,null,e.createElement("div",{className:"margin--bottom"},e.createElement("input",{type:"text",name:"account",value:n,readOnly:!0}),e.createElement("p",{className:"fontSize--xs"},"(",e.createElement("i",null,"Typically this would be a ",e.createElement("code",null,"hidden")," input."),")")),e.createElement(a,{id:"product-field",label:"Account",onChange:t},e.createElement(a.Item,{value:"checking1234",searchValue:"checking1234"},"Checking (1234)"),e.createElement(a.Item,{value:"savings4321",searchValue:"savings4321"},"Savings (4321)"),e.createElement(a.Item,{value:"checking5678",searchValue:"checking5678"},"Checking (5678)"),e.createElement(a.Item,{value:"savings9876",searchValue:"savings9876"},"Savings (9876)"),e.createElement(a.Item,{value:"money_market2468",searchValue:"money_market2468"},"Money Market (2468)"),e.createElement(a.Item,{value:"cd1357",searchValue:"cd1357"},"Certificate of Deposit (1357)"),e.createElement(a.Item,{value:"checking9999",searchValue:"checking9999"},"Checking (9999)"),e.createElement(a.Item,{value:"savings1111",searchValue:"savings1111"},"Savings (1111)"),e.createElement(a.Item,{value:"ira8642",searchValue:"ira8642"},"IRA (8642)"),e.createElement(a.Item,{value:"checking7531",searchValue:"checking7531"},"Checking (7531)"),e.createElement(a.Item,{value:"savings0246",searchValue:"savings0246"},"Savings (0246)"),e.createElement(a.Item,{value:"money_market8024",searchValue:"money_market8024"},"Money Market (8024)"),e.createElement(a.Item,{value:"checking3698",searchValue:"checking3698"},"Checking (3698)"),e.createElement(a.Item,{value:"savings7410",searchValue:"savings7410"},"Savings (7410)"),e.createElement(a.Item,{value:"cd9630",searchValue:"cd9630"},"Certificate of Deposit (9630)"),e.createElement(a.Item,{value:"checking1593",searchValue:"checking1593"},"Checking (1593)"),e.createElement(a.Item,{value:"savings7529",searchValue:"savings7529"},"Savings (7529)"),e.createElement(a.Item,{value:"ira4816",searchValue:"ira4816"},"IRA (4816)"),e.createElement(a.Item,{value:"money_market3571",searchValue:"money_market3571"},"Money Market (3571)"),e.createElement(a.Item,{value:"checking8642",searchValue:"checking8642"},"Checking (8642)")))};g.parameters={docs:{description:{story:"A hidden input works natively in a `form`, or as a bridge to a form management library of your choice."}}};const h=()=>{const[n,t]=D.useState(null),[c,v]=D.useState([{value:"checking1234",label:"Checking (1234)"},{value:"savings4321",label:"Savings (4321)"}]);return e.createElement(e.Fragment,null,e.createElement(a,{id:"controlled-product-field",label:"Account",value:n,onChange:l=>t(l)},c.map(({value:l,label:M})=>e.createElement(a.Item,{key:`${l}-${M}`,value:l,searchValue:l},M))),e.createElement("div",{className:"margin--top"},e.createElement(N,{label:"Clear selection",kind:"negative",onClick:()=>{t(null)}})),e.createElement("div",{className:"margin--top"},e.createElement(N,{label:"Add an item",kind:"negative",onClick:()=>{v(l=>[{value:"extra",label:"Extra Item!"},...l])}})))};h.parameters={docs:{description:{story:"You can programmatically select selection by updating the `value` prop. When `value` is passed, the component becomes **fully controlled** and you must use the `onChange` prop to update the `value`. Clear the selection by passing an empty string as the `value`."}}};const d=n=>{const[t,c]=D.useState(!1);return e.createElement(e.Fragment,null,e.createElement(N,{label:"Open Dialog",onClick:()=>{c(!0)}}),e.createElement(F,{title:"Dialog with a Select",isOpen:t,onUserDismiss:()=>{c(!1)}},e.createElement("div",{className:"padding--y--s"},e.createElement("div",null,"The floating menu list will render portaled near the bottom of the"," ","<body>"," HTML element."),e.createElement("div",{className:"padding--y--l"},e.createElement(a,n)))))};d.args={label:"Favorite icon",children:p};const f=()=>e.createElement("div",{style:{width:"80px"}},e.createElement(a,{label:"Age"},e.createElement(a.Item,{value:"checking1234"},"Checking (1234) alol haha what"," "),e.createElement(a.Item,{value:"checking1224"},"Checking (1234) alol haha what"," "))),C=()=>e.createElement(a,{label:"Account"},e.createElement(a.Item,{value:"checking1234",searchValue:"checking1234"},"Checking (1234)")),A=()=>e.createElement(a,{label:"Account"},e.createElement(a.Action,{onSelect:()=>{}},e.createElement("span",{className:"fontColor--pine fontWeight--bold"},e.createElement("span",{className:"narmi-icon-plus padding--right--xs"})," Add new account"))),me={title:"Components/Select",component:a,subcomponents:{SelectItem:T,SelectAction:O},argTypes:{children:{control:!1}}},w=r.bind({});w.args={id:"overviewStory",label:"Favorite icon (short menu)",maxMenuHeight:"10vh",children:p};const _=n=>{const[t,c]=D.useState(!1);return e.createElement(e.Fragment,null,e.createElement(N,{onClick:()=>{c(!0)}},"Open Drawer"),e.createElement(B,x({},n,{isOpen:t,onUserDismiss:()=>c(!1)}),e.createElement("div",{style:{marginTop:"600px",width:"300px"}},e.createElement(a,{id:"product-field",label:"Account"},e.createElement(a.Item,{value:"checking1234",searchValue:"checking1234"},"Checking (1234)"),e.createElement(a.Item,{value:"savings4321",searchValue:"savings4321"},"Savings (4321)"),e.createElement(a.Item,{value:"checking5678",searchValue:"checking5678"},"Checking (5678)"),e.createElement(a.Item,{value:"savings9876",searchValue:"savings9876"},"Savings (9876)"),e.createElement(a.Item,{value:"money_market2468",searchValue:"money_market2468"},"Money Market (2468)"),e.createElement(a.Item,{value:"cd1357",searchValue:"cd1357"},"Certificate of Deposit (1357)"),e.createElement(a.Item,{value:"checking9999",searchValue:"checking9999"},"Checking (9999)"),e.createElement(a.Item,{value:"savings1111",searchValue:"savings1111"},"Savings (1111)"),e.createElement(a.Item,{value:"ira8642",searchValue:"ira8642"},"IRA (8642)"),e.createElement(a.Item,{value:"checking7531",searchValue:"checking7531"},"Checking (7531)"),e.createElement(a.Item,{value:"savings0246",searchValue:"savings0246"},"Savings (0246)"),e.createElement(a.Item,{value:"money_market8024",searchValue:"money_market8024"},"Money Market (8024)"),e.createElement(a.Item,{value:"checking3698",searchValue:"checking3698"},"Checking (3698)"),e.createElement(a.Item,{value:"savings7410",searchValue:"savings7410"},"Savings (7410)"),e.createElement(a.Item,{value:"cd9630",searchValue:"cd9630"},"Certificate of Deposit (9630)"),e.createElement(a.Item,{value:"checking1593",searchValue:"checking1593"},"Checking (1593)"),e.createElement(a.Item,{value:"savings7529",searchValue:"savings7529"},"Savings (7529)"),e.createElement(a.Item,{value:"ira4816",searchValue:"ira4816"},"IRA (4816)"),e.createElement(a.Item,{value:"money_market3571",searchValue:"money_market3571"},"Money Market (3571)"),e.createElement(a.Item,{value:"checking8642",searchValue:"checking8642"},"Checking (8642)")))))};b.__docgenInfo={description:"",methods:[],displayName:"ScrollingBehavior"};g.__docgenInfo={description:"",methods:[],displayName:"InAForm"};h.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.__docgenInfo={description:"",methods:[],displayName:"InADialog"};f.__docgenInfo={description:"",methods:[],displayName:"SmallWidthLongItem"};C.__docgenInfo={description:"",methods:[],displayName:"OneItem"};A.__docgenInfo={description:"",methods:[],displayName:"OneAction"};_.__docgenInfo={description:"",methods:[],displayName:"InADrawer"};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...E.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...s.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...V.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...i.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...y.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <main style={{
    height: "200vh"
  }}>
      <div className="margin--bottom" style={{
      marginTop: "100vh"
    }} />
      <Select id="product-field" label="Account">
        <Select.Item value="checking1234" searchValue="checking1234">
          Checking (1234)
        </Select.Item>
        <Select.Item value="savings4321" searchValue="savings4321">
          Savings (4321)
        </Select.Item>
        <Select.Item value="checking5678" searchValue="checking5678">
          Checking (5678)
        </Select.Item>
        <Select.Item value="savings9876" searchValue="savings9876">
          Savings (9876)
        </Select.Item>
        <Select.Item value="money_market2468" searchValue="money_market2468">
          Money Market (2468)
        </Select.Item>
        <Select.Item value="cd1357" searchValue="cd1357">
          Certificate of Deposit (1357)
        </Select.Item>
        <Select.Item value="checking9999" searchValue="checking9999">
          Checking (9999)
        </Select.Item>
        <Select.Item value="savings1111" searchValue="savings1111">
          Savings (1111)
        </Select.Item>
        <Select.Item value="ira8642" searchValue="ira8642">
          IRA (8642)
        </Select.Item>
        <Select.Item value="checking7531" searchValue="checking7531">
          Checking (7531)
        </Select.Item>
        <Select.Item value="savings0246" searchValue="savings0246">
          Savings (0246)
        </Select.Item>
        <Select.Item value="money_market8024" searchValue="money_market8024">
          Money Market (8024)
        </Select.Item>
        <Select.Item value="checking3698" searchValue="checking3698">
          Checking (3698)
        </Select.Item>
        <Select.Item value="savings7410" searchValue="savings7410">
          Savings (7410)
        </Select.Item>
        <Select.Item value="cd9630" searchValue="cd9630">
          Certificate of Deposit (9630)
        </Select.Item>
        <Select.Item value="checking1593" searchValue="checking1593">
          Checking (1593)
        </Select.Item>
        <Select.Item value="savings7529" searchValue="savings7529">
          Savings (7529)
        </Select.Item>
        <Select.Item value="ira4816" searchValue="ira4816">
          IRA (4816)
        </Select.Item>
        <Select.Item value="money_market3571" searchValue="money_market3571">
          Money Market (3571)
        </Select.Item>
        <Select.Item value="checking8642" searchValue="checking8642">
          Checking (8642)
        </Select.Item>
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
        <Select.Item value="checking1234" searchValue="checking1234">
          Checking (1234)
        </Select.Item>
        <Select.Item value="savings4321" searchValue="savings4321">
          Savings (4321)
        </Select.Item>
        <Select.Item value="checking5678" searchValue="checking5678">
          Checking (5678)
        </Select.Item>
        <Select.Item value="savings9876" searchValue="savings9876">
          Savings (9876)
        </Select.Item>
        <Select.Item value="money_market2468" searchValue="money_market2468">
          Money Market (2468)
        </Select.Item>
        <Select.Item value="cd1357" searchValue="cd1357">
          Certificate of Deposit (1357)
        </Select.Item>
        <Select.Item value="checking9999" searchValue="checking9999">
          Checking (9999)
        </Select.Item>
        <Select.Item value="savings1111" searchValue="savings1111">
          Savings (1111)
        </Select.Item>
        <Select.Item value="ira8642" searchValue="ira8642">
          IRA (8642)
        </Select.Item>
        <Select.Item value="checking7531" searchValue="checking7531">
          Checking (7531)
        </Select.Item>
        <Select.Item value="savings0246" searchValue="savings0246">
          Savings (0246)
        </Select.Item>
        <Select.Item value="money_market8024" searchValue="money_market8024">
          Money Market (8024)
        </Select.Item>
        <Select.Item value="checking3698" searchValue="checking3698">
          Checking (3698)
        </Select.Item>
        <Select.Item value="savings7410" searchValue="savings7410">
          Savings (7410)
        </Select.Item>
        <Select.Item value="cd9630" searchValue="cd9630">
          Certificate of Deposit (9630)
        </Select.Item>
        <Select.Item value="checking1593" searchValue="checking1593">
          Checking (1593)
        </Select.Item>
        <Select.Item value="savings7529" searchValue="savings7529">
          Savings (7529)
        </Select.Item>
        <Select.Item value="ira4816" searchValue="ira4816">
          IRA (4816)
        </Select.Item>
        <Select.Item value="money_market3571" searchValue="money_market3571">
          Money Market (3571)
        </Select.Item>
        <Select.Item value="checking8642" searchValue="checking8642">
          Checking (8642)
        </Select.Item>
      </Select>
    </>;
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
      }) => <Select.Item key={\`\${value}-\${label}\`} value={value} searchValue={value}>
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
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
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
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    width: "80px"
  }}>
      <Select label="Age">
        <Select.Item value="checking1234">
          Checking (1234) alol haha what{" "}
        </Select.Item>
        <Select.Item value="checking1224">
          Checking (1234) alol haha what{" "}
        </Select.Item>
      </Select>
    </div>;
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Select label="Account">
      <Select.Item value="checking1234" searchValue="checking1234">
        Checking (1234)
      </Select.Item>
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
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"args => <Select {...args} />",...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
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
            <Select.Item value="checking1234" searchValue="checking1234">
              Checking (1234)
            </Select.Item>
            <Select.Item value="savings4321" searchValue="savings4321">
              Savings (4321)
            </Select.Item>
            <Select.Item value="checking5678" searchValue="checking5678">
              Checking (5678)
            </Select.Item>
            <Select.Item value="savings9876" searchValue="savings9876">
              Savings (9876)
            </Select.Item>
            <Select.Item value="money_market2468" searchValue="money_market2468">
              Money Market (2468)
            </Select.Item>
            <Select.Item value="cd1357" searchValue="cd1357">
              Certificate of Deposit (1357)
            </Select.Item>
            <Select.Item value="checking9999" searchValue="checking9999">
              Checking (9999)
            </Select.Item>
            <Select.Item value="savings1111" searchValue="savings1111">
              Savings (1111)
            </Select.Item>
            <Select.Item value="ira8642" searchValue="ira8642">
              IRA (8642)
            </Select.Item>
            <Select.Item value="checking7531" searchValue="checking7531">
              Checking (7531)
            </Select.Item>
            <Select.Item value="savings0246" searchValue="savings0246">
              Savings (0246)
            </Select.Item>
            <Select.Item value="money_market8024" searchValue="money_market8024">
              Money Market (8024)
            </Select.Item>
            <Select.Item value="checking3698" searchValue="checking3698">
              Checking (3698)
            </Select.Item>
            <Select.Item value="savings7410" searchValue="savings7410">
              Savings (7410)
            </Select.Item>
            <Select.Item value="cd9630" searchValue="cd9630">
              Certificate of Deposit (9630)
            </Select.Item>
            <Select.Item value="checking1593" searchValue="checking1593">
              Checking (1593)
            </Select.Item>
            <Select.Item value="savings7529" searchValue="savings7529">
              Savings (7529)
            </Select.Item>
            <Select.Item value="ira4816" searchValue="ira4816">
              IRA (4816)
            </Select.Item>
            <Select.Item value="money_market3571" searchValue="money_market3571">
              Money Market (3571)
            </Select.Item>
            <Select.Item value="checking8642" searchValue="checking8642">
              Checking (8642)
            </Select.Item>
          </Select>
        </div>
      </Drawer>
    </>;
}`,..._.parameters?.docs?.source}}};const oe=["Overview","DefaultSelection","DisabledSelection","ErrorState","WithAction","ClearingSelectionWithAction","WithCategories","FlatCategories","CategoryLabels","CustomTypeahead","ChangingTypeaheadBehavior","ScrollingBehavior","InAForm","Controlled","InADialog","SmallWidthLongItem","OneItem","OneAction","OverridingMenuHeight","InADrawer"];export{y as CategoryLabels,u as ChangingTypeaheadBehavior,V as ClearingSelectionWithAction,h as Controlled,o as CustomTypeahead,S as DefaultSelection,k as DisabledSelection,E as ErrorState,i as FlatCategories,d as InADialog,_ as InADrawer,g as InAForm,A as OneAction,C as OneItem,w as OverridingMenuHeight,I as Overview,b as ScrollingBehavior,f as SmallWidthLongItem,s as WithAction,m as WithCategories,oe as __namedExportsOrder,me as default};
