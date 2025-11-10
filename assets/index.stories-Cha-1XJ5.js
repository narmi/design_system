import{e,r as i}from"./iframe-BD9xPE55.js";import{V as M,a as w,b as B,C as t}from"./index-CwQ_cMmy.js";import{R as F}from"./index-BQsz6hJp.js";import{D as N}from"./index-ByU6uvgY.js";import{D as O}from"./index-U0BtE1x6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./selection-CAkQuomx.js";import"./downshift.esm-DNvNitNB.js";import"./extends-DDykod_l.js";import"./index-BM9MvhC5.js";import"./index-Chjiymov.js";import"./tslib.es6-rrx6G-_s.js";import"./index-pAH3eAjO.js";import"./index-uLzVu14E.js";import"./index-BqFrOAaE.js";import"./AsElement-CC8Aul3_.js";import"./index-BTynpg56.js";import"./index-vj2HOufV.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-DYv-zTKw.js";import"./index-DAtj_Sye.js";import"./index-BUGbNYdP.js";import"./index-B4xRpz2F.js";import"./Combination-DMcdvswo.js";import"./inheritsLoose-CWawPfk8.js";import"./CSSTransition-ftzRpRNf.js";import"./index-BiJ3-8lL.js";const _=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];function D(){return D=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)({}).hasOwnProperty.call(r,s)&&(a[s]=r[s])}return a},D.apply(null,arguments)}const m=a=>e.createElement(t,a),V=_.map(a=>e.createElement(t.Item,{key:a,value:a},a)),C=m.bind({});C.args={label:"Select your state",children:V};const h=m.bind({});h.args={label:"Select your state",icon:"search",children:V};const l=a=>e.createElement(t,D({label:'Favorite Emoji (e.g. "Cactus")'},a),e.createElement(t.Item,{value:"🐪",searchValue:"Camel"}),e.createElement(t.Item,{value:"📷",searchValue:"Camera"}),e.createElement(t.Item,{value:"🌵",searchValue:"Cactus"}),e.createElement(t.Item,{value:"🚬",searchValue:"Cigarette"}),e.createElement(t.Item,{value:"⭕️",searchValue:"Circle Mark"}),e.createElement(t.Item,{value:"🥒",searchValue:"Cucumber"}),e.createElement(t.Item,{value:"🇨🇺",searchValue:"Cuban Flag"}),e.createElement(t.Item,{value:"🥌",searchValue:"Curling Stone"}),e.createElement(t.Item,{value:"🐓",searchValue:"Chicken"}),e.createElement(t.Item,{value:"🎊",searchValue:"Confetti Ball"}),e.createElement(t.Item,{value:"🧥",searchValue:"Coat"}),e.createElement(t.Item,{value:"🧁",searchValue:"Cupcake"}));l.parameters={docs:{description:{story:"By default typeahead is based on `value`. You may use `searchValue` to explicitly set the string the typeahead should match against."}}};const v=a=>e.createElement(t,D({label:"Select Account"},a),e.createElement(t.Heading,{text:"Checking"}),e.createElement(t.Item,{value:"Primary Checking - 4567"}),e.createElement(t.Item,{value:"Secondary Checking - 9876"}),e.createElement(t.Heading,{text:"Savings"}),e.createElement(t.Item,{value:"Primary Savings - 1234"}),e.createElement(t.Item,{value:"Cheese Fund - 5432"})),p=a=>e.createElement(t,D({label:"Select Account"},a),e.createElement(t.Heading,{text:"Checking",kind:"hint"}),e.createElement(t.Item,{value:"Primary Checking - 4567"}),e.createElement(t.Item,{value:"Secondary Checking - 9876"}),e.createElement(t.Heading,{text:"Savings",kind:"hint"}),e.createElement(t.Item,{value:"Primary Savings - 1234"}),e.createElement(t.Item,{value:"Cheese Fund - 5432"})),I=m.bind({});I.args={label:"Select your state",errorText:"Can not be blank",children:V};const c=m.bind({});c.args={label:"State",children:null};c.parameters={docs:{description:{story:"If no children are passed, the `Combobox` will render a plain input"}}};const u=()=>{const[a,n]=i.useState(""),[r,s]=i.useState(["Primary Checking - 4567","Secondary Checking - 9876","Primary Savings - 1234","Cheese Fund - 5432"]);return e.createElement("div",null,e.createElement(t,{label:"Select Account",inputValue:a,onInputChange:o=>n(o)},r.map((o,A)=>e.createElement(t.Item,{key:`${A}-${o}`,value:o}))),e.createElement("div",{className:"margin--top"},e.createElement(F,null,e.createElement(F.Item,{shrink:!0},e.createElement("button",{className:"margin--top",onClick:()=>{n("")}},"Clear input value")),e.createElement(F.Item,{shrink:!0},e.createElement("button",{className:"margin--top",onClick:()=>{s(o=>["Extra Item!",...o])}},"Add an item to the top of the list")))))};u.parameters={docs:{description:{story:"To fully control the value input, use `inputValue` and `onInputChange`."}}};const d=()=>{const[a,n]=i.useState(!1);return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>{n(!0)}},"Open dialog"),e.createElement(N,{title:"Dialog with a Combobox",isOpen:a,onUserDismiss:()=>n(!1)},e.createElement(t,{label:"Select Account"},e.createElement(t.Heading,{text:"Checking"}),e.createElement(t.Item,{value:"Primary Checking - 4567"}),e.createElement(t.Item,{value:"Secondary Checking - 9876"}),e.createElement(t.Item,{value:"Other Checking - 1112"}),e.createElement(t.Item,{value:"Wow, more Checking - 3112"}),e.createElement(t.Heading,{text:"Savings"}),e.createElement(t.Item,{value:"Primary Savings - 1234"}),e.createElement(t.Item,{value:"Cheese Fund - 5432"}))))},b=m.bind({});b.args={id:"withCategories",label:"Transfer to",children:[e.createElement(t.Category,{label:"Checking"},e.createElement(t.Item,{searchValue:"Business Checking",value:"checking1"},"Business Checking - 11234"),e.createElement(t.Item,{searchValue:"Main Checking",value:"checking2"},"Main Checking - 13989"),e.createElement(t.Item,{searchValue:"Joint Checking",value:"checking3"},"Joint Checking - 14857")),e.createElement(t.Category,{label:"Savings"},e.createElement(t.Item,{searchValue:"Business Checking",value:"savings1"},"Business Savings - 13938"),e.createElement(t.Item,{searchValue:"Main Savings",value:"savings2"},"Main Savings - 48274"),e.createElement(t.Item,{searchValue:"Joint Savings",value:"savings3"},"Joint Savings - 48284")),e.createElement(t.Category,{label:"External Accounts"},e.createElement(t.Item,{value:"Sasha"},"Sasha - 84839"),e.createElement(t.Item,{value:"Joan"},"Joan - 36183"),e.createElement(t.Item,{value:"Benoit"},"Benoit - 53261"))]};b.parameters={docs:{description:{story:"You may group `Combobox.Item` elements by category with `Combobox.Category`. When using categories, you **must** make all direct children of `Combobox` a `Combobox.Category`; no orphan items are allowed when using categories."}}};const g=m.bind({});g.args={id:"customFiltering",label:"Transfer to",children:[e.createElement(t.Item,{searchValue:"Main Checking - 67289",value:"checking2"},"Main Checking - 67289"),e.createElement(t.Item,{searchValue:"Joint Checking - 14857",value:"checking3"},"Joint Checking - 14857"),e.createElement(t.Item,{searchValue:"Business Checking - 11234",value:"checking1"},"Business Checking - 11234"),e.createElement(t.Item,{searchValue:"Business Savings - 62947",value:"savings1"},"Business Savings - 62947")],filterItemsByInput:(a,n)=>a.filter(r=>(r.props.searchValue||r.props.value).toLowerCase().includes(n))};g.parameters={docs:{description:{story:"In this example, a custom `filterItemsByInput` function is used to enable search by either account name OR first four."}}};const x=()=>{const[a,n]=i.useState(!1),[r,s]=i.useState("");return e.createElement(e.Fragment,null,e.createElement(t,{label:"Select Account",inputValue:r,onInputChange:o=>s(o)},e.createElement(t.Item,{value:"Primary Checking - 4567"}),e.createElement(t.Item,{value:"Cheese Fund - 5432"}),e.createElement(t.Item,{value:"Primary Savings - 1234"}),e.createElement(t.Item,{value:"Secondary Checking - 7892"}),e.createElement(t.Action,{onSelect:()=>{n(!0)},label:"Do Action"})),e.createElement(O,{isOpen:a,onUserDismiss:()=>n(!1)},e.createElement("div",{className:"padding--y--s"},"🎬 Action!")))},E=()=>e.createElement("main",{style:{height:"200vh"}},e.createElement("div",{className:"margin--bottom",style:{marginTop:"100vh"}}),e.createElement(t,{label:"Account"},e.createElement(t.Item,{value:"checking1234"},"Checking (1234)"),e.createElement(t.Item,{value:"savings4321"},"Savings (4321)"),e.createElement(t.Item,{value:"checking5678"},"Checking (5678)"),e.createElement(t.Item,{value:"savings9876"},"Savings (9876)"),e.createElement(t.Item,{value:"money_market2468"},"Money Market (2468)"),e.createElement(t.Item,{value:"cd1357"},"Certificate of Deposit (1357)"),e.createElement(t.Item,{value:"checking9999"},"Checking (9999)"),e.createElement(t.Item,{value:"savings1111"},"Savings (1111)"),e.createElement(t.Item,{value:"ira8642"},"IRA (8642)"),e.createElement(t.Item,{value:"checking7531"},"Checking (7531)"),e.createElement(t.Item,{value:"savings0246"},"Savings (0246)"),e.createElement(t.Item,{value:"money_market8024"},"Money Market (8024)"),e.createElement(t.Item,{value:"checking3698"},"Checking (3698)"),e.createElement(t.Item,{value:"savings7410"},"Savings (7410)"),e.createElement(t.Item,{value:"cd9630"},"Certificate of Deposit (9630)"),e.createElement(t.Item,{value:"checking1593"},"Checking (1593)"),e.createElement(t.Item,{value:"savings7529"},"Savings (7529)"),e.createElement(t.Item,{value:"ira4816"},"IRA (4816)"),e.createElement(t.Item,{value:"money_market3571"},"Money Market (3571)"),e.createElement(t.Item,{value:"checking8642"},"Checking (8642)"))),k=()=>{const[a,n]=i.useState(!1),[r,s]=i.useState("");return e.createElement(e.Fragment,null,e.createElement(t,{label:"Select Account",inputValue:r,onInputChange:o=>s(o),clearSelectionOnAction:!0},e.createElement(t.Item,{value:"Primary Checking - 4567"}),e.createElement(t.Item,{value:"Cheese Fund - 5432"}),e.createElement(t.Item,{value:"Primary Savings - 1234"}),e.createElement(t.Item,{value:"Secondary Checking - 7892"}),e.createElement(t.Action,{onSelect:()=>{n(!0)},label:"Do Action"})),e.createElement(O,{isOpen:a,onUserDismiss:()=>n(!1)},e.createElement("div",{className:"padding--y--s"},"🎬 Action!")))},ue={title:"Components/Combobox",component:t,subcomponents:{ComboboxItem:B,ComboboxHeading:w},argTypes:{icon:{options:["",...M]}}},S=()=>{const[a,n]=i.useState(""),[r,s]=i.useState("");return e.createElement(e.Fragment,null,e.createElement("div",null,"selected value ",r),e.createElement(t,{label:"Select item",inputValue:a,onChange:o=>{s(o)},filterItemsByInput:(o,A)=>o.filter(f=>f?(f.props.searchValue||f.props.value).toLowerCase().includes(A):!1),onInputChange:o=>{n(o)}},e.createElement(t.Category,{label:"Checking"},e.createElement(t.Item,{searchValue:"Business Checking",value:"checking1"},"Business Checking - 11234"),e.createElement(t.Item,{searchValue:"Main Checking",value:"checking2"},"Main Checking - 13989"),e.createElement(t.Item,{searchValue:"Joint Checking",value:"checking3"},"Joint Checking - 14857")),e.createElement(t.Category,{label:"Savings"},e.createElement(t.Item,{searchValue:"Business Checking",value:"savings1"},"Business Savings - 13938"),e.createElement(t.Item,{searchValue:"Main Savings",value:"savings2"},"Main Savings - 48274"),e.createElement(t.Item,{searchValue:"Joint Savings",value:"savings3"},"Joint Savings - 48284")),e.createElement(t.Category,{label:"External Accounts"},e.createElement(t.Item,{value:"Sasha"},"Sasha - 84839"),e.createElement(t.Item,{value:"Joan"},"Joan - 36183"),e.createElement(t.Item,{value:"Benoit"},"Benoit - 53261"))))},y=m.bind({});y.args={label:"Select your state (10vh menu)",icon:"search",maxMenuHeight:"10vh",children:V};l.__docgenInfo={description:"",methods:[],displayName:"CustomSearchStrings"};v.__docgenInfo={description:"",methods:[],displayName:"WithHeadings"};p.__docgenInfo={description:"",methods:[],displayName:"WithHintHeadings"};u.__docgenInfo={description:"",methods:[],displayName:"FullyControlled"};d.__docgenInfo={description:"",methods:[],displayName:"InADialog"};x.__docgenInfo={description:"",methods:[],displayName:"WithActions"};E.__docgenInfo={description:"",methods:[],displayName:"ScrollingBehavior"};k.__docgenInfo={description:"",methods:[],displayName:"ClearingSelctionWithAction"};S.__docgenInfo={description:"",methods:[],displayName:"WithCategoriesInForm"};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Combobox label={\`Favorite Emoji (e.g. "Cactus")\`} {...args}>
    <Combobox.Item value="🐪" searchValue="Camel" />
    <Combobox.Item value="📷" searchValue="Camera" />
    <Combobox.Item value="🌵" searchValue="Cactus" />
    <Combobox.Item value="🚬" searchValue="Cigarette" />
    <Combobox.Item value="⭕️" searchValue="Circle Mark" />
    <Combobox.Item value="🥒" searchValue="Cucumber" />
    <Combobox.Item value="🇨🇺" searchValue="Cuban Flag" />
    <Combobox.Item value="🥌" searchValue="Curling Stone" />
    <Combobox.Item value="🐓" searchValue="Chicken" />
    <Combobox.Item value="🎊" searchValue="Confetti Ball" />
    <Combobox.Item value="🧥" searchValue="Coat" />
    <Combobox.Item value="🧁" searchValue="Cupcake" />
  </Combobox>`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Combobox label="Select Account" {...args}>
    <Combobox.Heading text="Checking" />
    <Combobox.Item value="Primary Checking - 4567" />
    <Combobox.Item value="Secondary Checking - 9876" />
    <Combobox.Heading text="Savings" />
    <Combobox.Item value="Primary Savings - 1234" />
    <Combobox.Item value="Cheese Fund - 5432" />
  </Combobox>`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Combobox label="Select Account" {...args}>
    <Combobox.Heading text="Checking" kind="hint" />
    <Combobox.Item value="Primary Checking - 4567" />
    <Combobox.Item value="Secondary Checking - 9876" />
    <Combobox.Heading text="Savings" kind="hint" />
    <Combobox.Item value="Primary Savings - 1234" />
    <Combobox.Item value="Cheese Fund - 5432" />
  </Combobox>`,...p.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...I.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState("");
  const [allItems, setAllItems] = useState(["Primary Checking - 4567", "Secondary Checking - 9876", "Primary Savings - 1234", "Cheese Fund - 5432"]);
  return <div>
      <Combobox label="Select Account" inputValue={inputValue} onInputChange={val => setInputValue(val)}>
        {allItems.map((item, i) => <Combobox.Item key={\`\${i}-\${item}\`} value={item} />)}
      </Combobox>
      <div className="margin--top">
        <Row>
          <Row.Item shrink>
            <button className="margin--top" onClick={() => {
            setInputValue("");
          }}>
              Clear input value
            </button>
          </Row.Item>
          <Row.Item shrink>
            <button className="margin--top" onClick={() => {
            setAllItems(items => ["Extra Item!", ...items]);
          }}>
              Add an item to the top of the list
            </button>
          </Row.Item>
        </Row>
      </div>
    </div>;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <button onClick={() => {
      setIsOpen(true);
    }}>
        Open dialog
      </button>
      <Dialog title="Dialog with a Combobox" isOpen={isOpen} onUserDismiss={() => setIsOpen(false)}>
        <Combobox label="Select Account">
          <Combobox.Heading text="Checking" />
          <Combobox.Item value="Primary Checking - 4567" />
          <Combobox.Item value="Secondary Checking - 9876" />
          <Combobox.Item value="Other Checking - 1112" />
          <Combobox.Item value="Wow, more Checking - 3112" />
          <Combobox.Heading text="Savings" />
          <Combobox.Item value="Primary Savings - 1234" />
          <Combobox.Item value="Cheese Fund - 5432" />
        </Combobox>
      </Dialog>
    </>;
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return <>
      <Combobox label="Select Account" inputValue={inputValue} onInputChange={val => setInputValue(val)}>
        <Combobox.Item value="Primary Checking - 4567" />
        <Combobox.Item value="Cheese Fund - 5432" />
        <Combobox.Item value="Primary Savings - 1234" />
        <Combobox.Item value="Secondary Checking - 7892" />
        <Combobox.Action onSelect={() => {
        setIsOpen(true);
      }} label="Do Action" />
      </Combobox>
      <Drawer isOpen={isOpen} onUserDismiss={() => setIsOpen(false)}>
        <div className="padding--y--s">🎬 Action!</div>
      </Drawer>
    </>;
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <main style={{
    height: "200vh"
  }}>
      <div className="margin--bottom" style={{
      marginTop: "100vh"
    }} />
      <Combobox label="Account">
        <Combobox.Item value="checking1234">Checking (1234)</Combobox.Item>
        <Combobox.Item value="savings4321">Savings (4321)</Combobox.Item>
        <Combobox.Item value="checking5678">Checking (5678)</Combobox.Item>
        <Combobox.Item value="savings9876">Savings (9876)</Combobox.Item>
        <Combobox.Item value="money_market2468">
          Money Market (2468)
        </Combobox.Item>
        <Combobox.Item value="cd1357">
          Certificate of Deposit (1357)
        </Combobox.Item>
        <Combobox.Item value="checking9999">Checking (9999)</Combobox.Item>
        <Combobox.Item value="savings1111">Savings (1111)</Combobox.Item>
        <Combobox.Item value="ira8642">IRA (8642)</Combobox.Item>
        <Combobox.Item value="checking7531">Checking (7531)</Combobox.Item>
        <Combobox.Item value="savings0246">Savings (0246)</Combobox.Item>
        <Combobox.Item value="money_market8024">
          Money Market (8024)
        </Combobox.Item>
        <Combobox.Item value="checking3698">Checking (3698)</Combobox.Item>
        <Combobox.Item value="savings7410">Savings (7410)</Combobox.Item>
        <Combobox.Item value="cd9630">
          Certificate of Deposit (9630)
        </Combobox.Item>
        <Combobox.Item value="checking1593">Checking (1593)</Combobox.Item>
        <Combobox.Item value="savings7529">Savings (7529)</Combobox.Item>
        <Combobox.Item value="ira4816">IRA (4816)</Combobox.Item>
        <Combobox.Item value="money_market3571">
          Money Market (3571)
        </Combobox.Item>
        <Combobox.Item value="checking8642">Checking (8642)</Combobox.Item>
      </Combobox>
    </main>;
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return <>
      <Combobox label="Select Account" inputValue={inputValue} onInputChange={val => setInputValue(val)} clearSelectionOnAction={true}>
        <Combobox.Item value="Primary Checking - 4567" />
        <Combobox.Item value="Cheese Fund - 5432" />
        <Combobox.Item value="Primary Savings - 1234" />
        <Combobox.Item value="Secondary Checking - 7892" />
        <Combobox.Action onSelect={() => {
        setIsOpen(true);
      }} label="Do Action" />
      </Combobox>
      <Drawer isOpen={isOpen} onUserDismiss={() => setIsOpen(false)}>
        <div className="padding--y--s">🎬 Action!</div>
      </Drawer>
    </>;
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  return <>
      <div>selected value {selectedValue}</div>
      <Combobox label="Select item" inputValue={inputValue} onChange={selected => {
      setSelectedValue(selected);
    }} filterItemsByInput={(items, inputVal) => {
      return items.filter(item => {
        if (!item) return false;
        const query = (item.props.searchValue || item.props.value).toLowerCase();
        return query.includes(inputVal);
      });
    }} onInputChange={selected => {
      setInputValue(selected);
    }}>
        <Combobox.Category label="Checking">
          <Combobox.Item searchValue="Business Checking" value="checking1">
            Business Checking - 11234
          </Combobox.Item>
          <Combobox.Item searchValue="Main Checking" value="checking2">
            Main Checking - 13989
          </Combobox.Item>
          <Combobox.Item searchValue="Joint Checking" value="checking3">
            Joint Checking - 14857
          </Combobox.Item>
        </Combobox.Category>
        <Combobox.Category label="Savings">
          <Combobox.Item searchValue="Business Checking" value="savings1">
            Business Savings - 13938
          </Combobox.Item>
          <Combobox.Item searchValue="Main Savings" value="savings2">
            Main Savings - 48274
          </Combobox.Item>
          <Combobox.Item searchValue="Joint Savings" value="savings3">
            Joint Savings - 48284
          </Combobox.Item>
        </Combobox.Category>
        <Combobox.Category label="External Accounts">
          <Combobox.Item value="Sasha">Sasha - 84839</Combobox.Item>
          <Combobox.Item value="Joan">Joan - 36183</Combobox.Item>
          <Combobox.Item value="Benoit">Benoit - 53261</Combobox.Item>
        </Combobox.Category>
      </Combobox>
    </>;
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...y.parameters?.docs?.source}}};const be=["Overview","WithIcon","CustomSearchStrings","WithHeadings","WithHintHeadings","WithError","NoChildren","FullyControlled","InADialog","WithCategories","CustomFiltering","WithActions","ScrollingBehavior","ClearingSelctionWithAction","WithCategoriesInForm","OverridingMenuHeight"];export{k as ClearingSelctionWithAction,g as CustomFiltering,l as CustomSearchStrings,u as FullyControlled,d as InADialog,c as NoChildren,y as OverridingMenuHeight,C as Overview,E as ScrollingBehavior,x as WithActions,b as WithCategories,S as WithCategoriesInForm,I as WithError,v as WithHeadings,p as WithHintHeadings,h as WithIcon,be as __namedExportsOrder,ue as default};
