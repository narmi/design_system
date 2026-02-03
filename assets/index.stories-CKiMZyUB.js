import{e,r as c}from"./iframe-egc1RhaK.js";import{V as P,a as M,b as B,C as a}from"./index-D-nx254s.js";import{R as F}from"./index-BM68rNZF.js";import{D as _}from"./index-DjvJNpIe.js";import{D as O}from"./index-CbrXrp1F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./selection-CAkQuomx.js";import"./downshift.esm-D4ddSFlz.js";import"./extends-DDykod_l.js";import"./index-y0eQ9PaH.js";import"./index-Chjiymov.js";import"./tslib.es6-rrx6G-_s.js";import"./index-Cm7ZJAd8.js";import"./index-bOdn6Nzm.js";import"./index-DbM_lQfC.js";import"./AsElement-CTkMlSz0.js";import"./index-BfGbdkHH.js";import"./index-Cz77OTmu.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-Bqrl3fTr.js";import"./index-Bwvn6IgC.js";import"./index-PF0g2-q8.js";import"./index-_ZDHxcKp.js";import"./Combination-BlTato3R.js";import"./inheritsLoose-CWawPfk8.js";import"./CSSTransition-CyhBsjtZ.js";import"./index-DgJv6pex.js";const w=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},E.apply(null,arguments)}const i=n=>e.createElement(a,n),D=w.map(n=>e.createElement(a.Item,{key:n,value:n,searchValue:n},n)),C=i.bind({});C.args={label:"Select your state",children:D};const b=i.bind({});b.args={label:"Select your state",icon:"search",children:D};const l=n=>e.createElement(a,E({label:'Favorite Emoji (e.g. "Cactus")'},n),e.createElement(a.Item,{value:"🐪",searchValue:"Camel"}),e.createElement(a.Item,{value:"📷",searchValue:"Camera"}),e.createElement(a.Item,{value:"🌵",searchValue:"Cactus"}),e.createElement(a.Item,{value:"🚬",searchValue:"Cigarette"}),e.createElement(a.Item,{value:"⭕️",searchValue:"Circle Mark"}),e.createElement(a.Item,{value:"🥒",searchValue:"Cucumber"}),e.createElement(a.Item,{value:"🇨🇺",searchValue:"Cuban Flag"}),e.createElement(a.Item,{value:"🥌",searchValue:"Curling Stone"}),e.createElement(a.Item,{value:"🐓",searchValue:"Chicken"}),e.createElement(a.Item,{value:"🎊",searchValue:"Confetti Ball"}),e.createElement(a.Item,{value:"🧥",searchValue:"Coat"}),e.createElement(a.Item,{value:"🧁",searchValue:"Cupcake"}));l.parameters={docs:{description:{story:"By default typeahead is based on `value`. You may use `searchValue` to explicitly set the string the typeahead should match against."}}};const v=n=>e.createElement(a,E({label:"Select Account"},n),e.createElement(a.Heading,{text:"Checking"}),e.createElement(a.Item,{value:"Primary Checking - 4567",searchValue:"Primary Checking - 4567"}),e.createElement(a.Item,{value:"Secondary Checking - 9876",searchValue:"Secondary Checking - 9876"}),e.createElement(a.Heading,{text:"Savings"}),e.createElement(a.Item,{value:"Primary Savings - 1234",searchValue:"Primary Savings - 1234"}),e.createElement(a.Item,{value:"Cheese Fund - 5432",searchValue:"Cheese Fund - 5432"})),d=n=>e.createElement(a,E({label:"Select Account"},n),e.createElement(a.Heading,{text:"Checking",kind:"hint"}),e.createElement(a.Item,{value:"Primary Checking - 4567",searchValue:"Primary Checking - 4567"}),e.createElement(a.Item,{value:"Secondary Checking - 9876",searchValue:"Secondary Checking - 9876"}),e.createElement(a.Heading,{text:"Savings",kind:"hint"}),e.createElement(a.Item,{value:"Primary Savings - 1234",searchValue:"Primary Savings - 1234"}),e.createElement(a.Item,{value:"Cheese Fund - 5432",searchValue:"Cheese Fund - 5432"})),p=i.bind({});p.args={label:"Select your state",errorText:"Can not be blank",children:D};const m=i.bind({});m.args={label:"State",children:null};m.parameters={docs:{description:{story:"If no children are passed, the `Combobox` will render a plain input"}}};const u=()=>{const[n,t]=c.useState(""),[r,s]=c.useState(["Primary Checking - 4567","Secondary Checking - 9876","Primary Savings - 1234","Cheese Fund - 5432"]);return e.createElement("div",null,e.createElement(a,{label:"Select Account",inputValue:n,onInputChange:o=>t(o)},r.map((o,A)=>e.createElement(a.Item,{key:`${A}-${o}`,value:o,searchValue:o}))),e.createElement("div",{className:"margin--top"},e.createElement(F,null,e.createElement(F.Item,{shrink:!0},e.createElement("button",{className:"margin--top",onClick:()=>{t("")}},"Clear input value")),e.createElement(F.Item,{shrink:!0},e.createElement("button",{className:"margin--top",onClick:()=>{s(o=>["Extra Item!",...o])}},"Add an item to the top of the list")))))};u.parameters={docs:{description:{story:"To fully control the value input, use `inputValue` and `onInputChange`."}}};const I=()=>{const[n,t]=c.useState(!1);return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>{t(!0)}},"Open dialog"),e.createElement(_,{title:"Dialog with a Combobox",isOpen:n,onUserDismiss:()=>t(!1)},e.createElement(a,{label:"Select Account"},e.createElement(a.Heading,{text:"Checking"}),e.createElement(a.Item,{value:"Primary Checking - 4567",searchValue:"Primary Checking - 4567"}),e.createElement(a.Item,{value:"Secondary Checking - 9876",searchValue:"Secondary Checking - 9876"}),e.createElement(a.Item,{value:"Other Checking - 1112",searchValue:"Other Checking - 1112"}),e.createElement(a.Item,{value:"Wow, more Checking - 3112",searchValue:"Wow, more Checking - 3112"}),e.createElement(a.Heading,{text:"Savings"}),e.createElement(a.Item,{value:"Primary Savings - 1234",searchValue:"Primary Savings - 1234"}),e.createElement(a.Item,{value:"Cheese Fund - 5432",searchValue:"Cheese Fund - 5432"}))))},h=i.bind({});h.args={id:"withCategories",label:"Transfer to",children:[e.createElement(a.Category,{label:"Checking"},e.createElement(a.Item,{searchValue:"Business Checking",value:"checking1"},"Business Checking - 11234"),e.createElement(a.Item,{searchValue:"Main Checking",value:"checking2"},"Main Checking - 13989"),e.createElement(a.Item,{searchValue:"Joint Checking",value:"checking3"},"Joint Checking - 14857")),e.createElement(a.Category,{label:"Savings"},e.createElement(a.Item,{searchValue:"Business Checking",value:"savings1"},"Business Savings - 13938"),e.createElement(a.Item,{searchValue:"Main Savings",value:"savings2"},"Main Savings - 48274"),e.createElement(a.Item,{searchValue:"Joint Savings",value:"savings3"},"Joint Savings - 48284")),e.createElement(a.Category,{label:"External Accounts"},e.createElement(a.Item,{value:"Sasha",searchValue:"Sasha"},"Sasha - 84839"),e.createElement(a.Item,{value:"Joan",searchValue:"Joan"},"Joan - 36183"),e.createElement(a.Item,{value:"Benoit",searchValue:"Benoit"},"Benoit - 53261"))]};h.parameters={docs:{description:{story:"You may group `Combobox.Item` elements by category with `Combobox.Category`. When using categories, you **must** make all direct children of `Combobox` a `Combobox.Category`; no orphan items are allowed when using categories."}}};const g=i.bind({});g.args={id:"customFiltering",label:"Transfer to",children:[e.createElement(a.Item,{searchValue:"Main Checking - 67289",value:"checking2"},"Main Checking - 67289"),e.createElement(a.Item,{searchValue:"Joint Checking - 14857",value:"checking3"},"Joint Checking - 14857"),e.createElement(a.Item,{searchValue:"Business Checking - 11234",value:"checking1"},"Business Checking - 11234"),e.createElement(a.Item,{searchValue:"Business Savings - 62947",value:"savings1"},"Business Savings - 62947")],filterItemsByInput:(n,t)=>n.filter(r=>(r.props.searchValue||r.props.value).toLowerCase().includes(t))};g.parameters={docs:{description:{story:"In this example, a custom `filterItemsByInput` function is used to enable search by either account name OR first four."}}};const k=()=>{const[n,t]=c.useState(!1),[r,s]=c.useState("");return e.createElement(e.Fragment,null,e.createElement(a,{label:"Select Account",inputValue:r,onInputChange:o=>s(o)},e.createElement(a.Item,{value:"Primary Checking - 4567",searchValue:"Primary Checking - 4567"}),e.createElement(a.Item,{value:"Cheese Fund - 5432",searchValue:"Cheese Fund - 5432"}),e.createElement(a.Item,{value:"Primary Savings - 1234",searchValue:"Primary Savings - 1234"}),e.createElement(a.Item,{value:"Secondary Checking - 7892",searchValue:"Secondary Checking - 7892"}),e.createElement(a.Action,{onSelect:()=>{t(!0)},label:"Do Action"})),e.createElement(O,{isOpen:n,onUserDismiss:()=>t(!1)},e.createElement("div",{className:"padding--y--s"},"🎬 Action!")))},V=()=>e.createElement("main",{style:{height:"200vh"}},e.createElement("div",{className:"margin--bottom",style:{marginTop:"100vh"}}),e.createElement(a,{label:"Account"},e.createElement(a.Item,{value:"checking1234",searchValue:"checking1234"},"Checking (1234)"),e.createElement(a.Item,{value:"savings4321",searchValue:"savings4321"},"Savings (4321)"),e.createElement(a.Item,{value:"checking5678",searchValue:"checking5678"},"Checking (5678)"),e.createElement(a.Item,{value:"savings9876",searchValue:"savings9876"},"Savings (9876)"),e.createElement(a.Item,{value:"money_market2468",searchValue:"money_market2468"},"Money Market (2468)"),e.createElement(a.Item,{value:"cd1357",searchValue:"cd1357"},"Certificate of Deposit (1357)"),e.createElement(a.Item,{value:"checking9999",searchValue:"checking9999"},"Checking (9999)"),e.createElement(a.Item,{value:"savings1111",searchValue:"savings1111"},"Savings (1111)"),e.createElement(a.Item,{value:"ira8642",searchValue:"ira8642"},"IRA (8642)"),e.createElement(a.Item,{value:"checking7531",searchValue:"checking7531"},"Checking (7531)"),e.createElement(a.Item,{value:"savings0246",searchValue:"savings0246"},"Savings (0246)"),e.createElement(a.Item,{value:"money_market8024",searchValue:"money_market8024"},"Money Market (8024)"),e.createElement(a.Item,{value:"checking3698",searchValue:"checking3698"},"Checking (3698)"),e.createElement(a.Item,{value:"savings7410",searchValue:"savings7410"},"Savings (7410)"),e.createElement(a.Item,{value:"cd9630",searchValue:"cd9630"},"Certificate of Deposit (9630)"),e.createElement(a.Item,{value:"checking1593",searchValue:"checking1593"},"Checking (1593)"),e.createElement(a.Item,{value:"savings7529",searchValue:"savings7529"},"Savings (7529)"),e.createElement(a.Item,{value:"ira4816",searchValue:"ira4816"},"IRA (4816)"),e.createElement(a.Item,{value:"money_market3571",searchValue:"money_market3571"},"Money Market (3571)"),e.createElement(a.Item,{value:"checking8642",searchValue:"checking8642"},"Checking (8642)"))),x=()=>{const[n,t]=c.useState(!1),[r,s]=c.useState("");return e.createElement(e.Fragment,null,e.createElement(a,{label:"Select Account",inputValue:r,onInputChange:o=>s(o),clearSelectionOnAction:!0},e.createElement(a.Item,{value:"Primary Checking - 4567",searchValue:"Primary Checking - 4567"}),e.createElement(a.Item,{value:"Cheese Fund - 5432",searchValue:"Cheese Fund - 5432"}),e.createElement(a.Item,{value:"Primary Savings - 1234",searchValue:"Primary Savings - 1234"}),e.createElement(a.Item,{value:"Secondary Checking - 7892",searchValue:"Secondary Checking - 7892"}),e.createElement(a.Action,{onSelect:()=>{t(!0)},label:"Do Action"})),e.createElement(O,{isOpen:n,onUserDismiss:()=>t(!1)},e.createElement("div",{className:"padding--y--s"},"🎬 Action!")))},ue={title:"Components/Combobox",component:a,subcomponents:{ComboboxItem:B,ComboboxHeading:M},argTypes:{icon:{options:["",...P]}}},S=()=>{const[n,t]=c.useState(""),[r,s]=c.useState("");return e.createElement(e.Fragment,null,e.createElement("div",null,"selected value ",r),e.createElement(a,{label:"Select item",inputValue:n,onChange:o=>{s(o)},filterItemsByInput:(o,A)=>o.filter(f=>f?(f.props.searchValue||f.props.value).toLowerCase().includes(A):!1),onInputChange:o=>{t(o)}},e.createElement(a.Category,{label:"Checking"},e.createElement(a.Item,{searchValue:"Business Checking",value:"checking1"},"Business Checking - 11234"),e.createElement(a.Item,{searchValue:"Main Checking",value:"checking2"},"Main Checking - 13989"),e.createElement(a.Item,{searchValue:"Joint Checking",value:"checking3"},"Joint Checking - 14857")),e.createElement(a.Category,{label:"Savings"},e.createElement(a.Item,{searchValue:"Business Checking",value:"savings1"},"Business Savings - 13938"),e.createElement(a.Item,{searchValue:"Main Savings",value:"savings2"},"Main Savings - 48274"),e.createElement(a.Item,{searchValue:"Joint Savings",value:"savings3"},"Joint Savings - 48284")),e.createElement(a.Category,{label:"External Accounts"},e.createElement(a.Item,{value:"Sasha",searchValue:"Sasha"},"Sasha - 84839"),e.createElement(a.Item,{value:"Joan",searchValue:"Joan"},"Joan - 36183"),e.createElement(a.Item,{value:"Benoit",searchValue:"Benoit"},"Benoit - 53261"))))},y=i.bind({});y.args={label:"Select your state (10vh menu)",icon:"search",maxMenuHeight:"10vh",children:D};l.__docgenInfo={description:"",methods:[],displayName:"CustomSearchStrings"};v.__docgenInfo={description:"",methods:[],displayName:"WithHeadings"};d.__docgenInfo={description:"",methods:[],displayName:"WithHintHeadings"};u.__docgenInfo={description:"",methods:[],displayName:"FullyControlled"};I.__docgenInfo={description:"",methods:[],displayName:"InADialog"};k.__docgenInfo={description:"",methods:[],displayName:"WithActions"};V.__docgenInfo={description:"",methods:[],displayName:"ScrollingBehavior"};x.__docgenInfo={description:"",methods:[],displayName:"ClearingSelctionWithAction"};S.__docgenInfo={description:"",methods:[],displayName:"WithCategoriesInForm"};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...b.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Combobox label={\`Favorite Emoji (e.g. "Cactus")\`} {...args}>
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
    <Combobox.Item value="Primary Checking - 4567" searchValue="Primary Checking - 4567" />
    <Combobox.Item value="Secondary Checking - 9876" searchValue="Secondary Checking - 9876" />
    <Combobox.Heading text="Savings" />
    <Combobox.Item value="Primary Savings - 1234" searchValue="Primary Savings - 1234" />
    <Combobox.Item value="Cheese Fund - 5432" searchValue="Cheese Fund - 5432" />
  </Combobox>`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <Combobox label="Select Account" {...args}>
    <Combobox.Heading text="Checking" kind="hint" />
    <Combobox.Item value="Primary Checking - 4567" searchValue="Primary Checking - 4567" />
    <Combobox.Item value="Secondary Checking - 9876" searchValue="Secondary Checking - 9876" />
    <Combobox.Heading text="Savings" kind="hint" />
    <Combobox.Item value="Primary Savings - 1234" searchValue="Primary Savings - 1234" />
    <Combobox.Item value="Cheese Fund - 5432" searchValue="Cheese Fund - 5432" />
  </Combobox>`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState("");
  const [allItems, setAllItems] = useState(["Primary Checking - 4567", "Secondary Checking - 9876", "Primary Savings - 1234", "Cheese Fund - 5432"]);
  return <div>
      <Combobox label="Select Account" inputValue={inputValue} onInputChange={val => setInputValue(val)}>
        {allItems.map((item, i) => <Combobox.Item key={\`\${i}-\${item}\`} value={item} searchValue={item} />)}
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
}`,...u.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
          <Combobox.Item value="Primary Checking - 4567" searchValue="Primary Checking - 4567" />
          <Combobox.Item value="Secondary Checking - 9876" searchValue="Secondary Checking - 9876" />
          <Combobox.Item value="Other Checking - 1112" searchValue="Other Checking - 1112" />
          <Combobox.Item value="Wow, more Checking - 3112" searchValue="Wow, more Checking - 3112" />
          <Combobox.Heading text="Savings" />
          <Combobox.Item value="Primary Savings - 1234" searchValue="Primary Savings - 1234" />
          <Combobox.Item value="Cheese Fund - 5432" searchValue="Cheese Fund - 5432" />
        </Combobox>
      </Dialog>
    </>;
}`,...I.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return <>
      <Combobox label="Select Account" inputValue={inputValue} onInputChange={val => setInputValue(val)}>
        <Combobox.Item value="Primary Checking - 4567" searchValue="Primary Checking - 4567" />
        <Combobox.Item value="Cheese Fund - 5432" searchValue="Cheese Fund - 5432" />
        <Combobox.Item value="Primary Savings - 1234" searchValue="Primary Savings - 1234" />
        <Combobox.Item value="Secondary Checking - 7892" searchValue="Secondary Checking - 7892" />
        <Combobox.Action onSelect={() => {
        setIsOpen(true);
      }} label="Do Action" />
      </Combobox>
      <Drawer isOpen={isOpen} onUserDismiss={() => setIsOpen(false)}>
        <div className="padding--y--s">🎬 Action!</div>
      </Drawer>
    </>;
}`,...k.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <main style={{
    height: "200vh"
  }}>
      <div className="margin--bottom" style={{
      marginTop: "100vh"
    }} />
      <Combobox label="Account">
        <Combobox.Item value="checking1234" searchValue="checking1234">
          Checking (1234)
        </Combobox.Item>
        <Combobox.Item value="savings4321" searchValue="savings4321">
          Savings (4321)
        </Combobox.Item>
        <Combobox.Item value="checking5678" searchValue="checking5678">
          Checking (5678)
        </Combobox.Item>
        <Combobox.Item value="savings9876" searchValue="savings9876">
          Savings (9876)
        </Combobox.Item>
        <Combobox.Item value="money_market2468" searchValue="money_market2468">
          Money Market (2468)
        </Combobox.Item>
        <Combobox.Item value="cd1357" searchValue="cd1357">
          Certificate of Deposit (1357)
        </Combobox.Item>
        <Combobox.Item value="checking9999" searchValue="checking9999">
          Checking (9999)
        </Combobox.Item>
        <Combobox.Item value="savings1111" searchValue="savings1111">
          Savings (1111)
        </Combobox.Item>
        <Combobox.Item value="ira8642" searchValue="ira8642">
          IRA (8642)
        </Combobox.Item>
        <Combobox.Item value="checking7531" searchValue="checking7531">
          Checking (7531)
        </Combobox.Item>
        <Combobox.Item value="savings0246" searchValue="savings0246">
          Savings (0246)
        </Combobox.Item>
        <Combobox.Item value="money_market8024" searchValue="money_market8024">
          Money Market (8024)
        </Combobox.Item>
        <Combobox.Item value="checking3698" searchValue="checking3698">
          Checking (3698)
        </Combobox.Item>
        <Combobox.Item value="savings7410" searchValue="savings7410">
          Savings (7410)
        </Combobox.Item>
        <Combobox.Item value="cd9630" searchValue="cd9630">
          Certificate of Deposit (9630)
        </Combobox.Item>
        <Combobox.Item value="checking1593" searchValue="checking1593">
          Checking (1593)
        </Combobox.Item>
        <Combobox.Item value="savings7529" searchValue="savings7529">
          Savings (7529)
        </Combobox.Item>
        <Combobox.Item value="ira4816" searchValue="ira4816">
          IRA (4816)
        </Combobox.Item>
        <Combobox.Item value="money_market3571" searchValue="money_market3571">
          Money Market (3571)
        </Combobox.Item>
        <Combobox.Item value="checking8642" searchValue="checking8642">
          Checking (8642)
        </Combobox.Item>
      </Combobox>
    </main>;
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return <>
      <Combobox label="Select Account" inputValue={inputValue} onInputChange={val => setInputValue(val)} clearSelectionOnAction={true}>
        <Combobox.Item value="Primary Checking - 4567" searchValue="Primary Checking - 4567" />
        <Combobox.Item value="Cheese Fund - 5432" searchValue="Cheese Fund - 5432" />
        <Combobox.Item value="Primary Savings - 1234" searchValue="Primary Savings - 1234" />
        <Combobox.Item value="Secondary Checking - 7892" searchValue="Secondary Checking - 7892" />
        <Combobox.Action onSelect={() => {
        setIsOpen(true);
      }} label="Do Action" />
      </Combobox>
      <Drawer isOpen={isOpen} onUserDismiss={() => setIsOpen(false)}>
        <div className="padding--y--s">🎬 Action!</div>
      </Drawer>
    </>;
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
          <Combobox.Item value="Sasha" searchValue="Sasha">
            Sasha - 84839
          </Combobox.Item>
          <Combobox.Item value="Joan" searchValue="Joan">
            Joan - 36183
          </Combobox.Item>
          <Combobox.Item value="Benoit" searchValue="Benoit">
            Benoit - 53261
          </Combobox.Item>
        </Combobox.Category>
      </Combobox>
    </>;
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <Combobox {...args} />",...y.parameters?.docs?.source}}};const he=["Overview","WithIcon","CustomSearchStrings","WithHeadings","WithHintHeadings","WithError","NoChildren","FullyControlled","InADialog","WithCategories","CustomFiltering","WithActions","ScrollingBehavior","ClearingSelctionWithAction","WithCategoriesInForm","OverridingMenuHeight"];export{x as ClearingSelctionWithAction,g as CustomFiltering,l as CustomSearchStrings,u as FullyControlled,I as InADialog,m as NoChildren,y as OverridingMenuHeight,C as Overview,V as ScrollingBehavior,k as WithActions,h as WithCategories,S as WithCategoriesInForm,p as WithError,v as WithHeadings,d as WithHintHeadings,b as WithIcon,he as __namedExportsOrder,ue as default};
