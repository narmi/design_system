import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-CiAHTIhJ.js";import{n as r,t as i}from"./Row-BolV-G0f.js";import{t as a}from"./iconNames-BuGAwI5s.js";import{n as o,t as s}from"./Dialog-r3pH6xoN.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Combobox-6ztIZp0t.js";import{n as m,t as h}from"./Drawer-Ddmum3Ox.js";var g,_=t((()=>{g=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`)}));function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(null,arguments)}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;t((()=>{y=e(n()),u(),d(),l(),r(),o(),m(),_(),b=e=>y.createElement(p,e),x=g.map(e=>y.createElement(p.Item,{key:e,value:e,searchValue:e},e)),S=b.bind({}),S.args={label:`Select your state`,children:x},C=b.bind({}),C.args={label:`Select your state`,icon:`search`,children:x},w=e=>y.createElement(p,v({label:`Favorite Emoji (e.g. "Cactus")`},e),y.createElement(p.Item,{value:`🐪`,searchValue:`Camel`}),y.createElement(p.Item,{value:`📷`,searchValue:`Camera`}),y.createElement(p.Item,{value:`🌵`,searchValue:`Cactus`}),y.createElement(p.Item,{value:`🚬`,searchValue:`Cigarette`}),y.createElement(p.Item,{value:`⭕️`,searchValue:`Circle Mark`}),y.createElement(p.Item,{value:`🥒`,searchValue:`Cucumber`}),y.createElement(p.Item,{value:`🇨🇺`,searchValue:`Cuban Flag`}),y.createElement(p.Item,{value:`🥌`,searchValue:`Curling Stone`}),y.createElement(p.Item,{value:`🐓`,searchValue:`Chicken`}),y.createElement(p.Item,{value:`🎊`,searchValue:`Confetti Ball`}),y.createElement(p.Item,{value:`🧥`,searchValue:`Coat`}),y.createElement(p.Item,{value:`🧁`,searchValue:`Cupcake`})),w.parameters={docs:{description:{story:"By default typeahead is based on `value`. You may use `searchValue` to explicitly set the string the typeahead should match against."}}},T=e=>y.createElement(p,v({label:`Select Account`},e),y.createElement(p.Heading,{text:`Checking`}),y.createElement(p.Item,{value:`Primary Checking - 4567`,searchValue:`Primary Checking - 4567`}),y.createElement(p.Item,{value:`Secondary Checking - 9876`,searchValue:`Secondary Checking - 9876`}),y.createElement(p.Heading,{text:`Savings`}),y.createElement(p.Item,{value:`Primary Savings - 1234`,searchValue:`Primary Savings - 1234`}),y.createElement(p.Item,{value:`Cheese Fund - 5432`,searchValue:`Cheese Fund - 5432`})),E=e=>y.createElement(p,v({label:`Select Account`},e),y.createElement(p.Heading,{text:`Checking`,kind:`hint`}),y.createElement(p.Item,{value:`Primary Checking - 4567`,searchValue:`Primary Checking - 4567`}),y.createElement(p.Item,{value:`Secondary Checking - 9876`,searchValue:`Secondary Checking - 9876`}),y.createElement(p.Heading,{text:`Savings`,kind:`hint`}),y.createElement(p.Item,{value:`Primary Savings - 1234`,searchValue:`Primary Savings - 1234`}),y.createElement(p.Item,{value:`Cheese Fund - 5432`,searchValue:`Cheese Fund - 5432`})),D=b.bind({}),D.args={label:`Select your state`,errorText:`Can not be blank`,children:x},O=b.bind({}),O.args={label:`State`,children:null},O.parameters={docs:{description:{story:"If no children are passed, the `Combobox` will render a plain input"}}},k=()=>{let[e,t]=(0,y.useState)(``),[n,r]=(0,y.useState)([`Primary Checking - 4567`,`Secondary Checking - 9876`,`Primary Savings - 1234`,`Cheese Fund - 5432`]);return y.createElement(`div`,null,y.createElement(p,{label:`Select Account`,inputValue:e,onInputChange:e=>t(e)},n.map((e,t)=>y.createElement(p.Item,{key:`${t}-${e}`,value:e,searchValue:e}))),y.createElement(`div`,{className:`margin--top`},y.createElement(i,null,y.createElement(i.Item,{shrink:!0},y.createElement(`button`,{className:`margin--top`,onClick:()=>{t(``)}},`Clear input value`)),y.createElement(i.Item,{shrink:!0},y.createElement(`button`,{className:`margin--top`,onClick:()=>{r(e=>[`Extra Item!`,...e])}},`Add an item to the top of the list`)))))},k.parameters={docs:{description:{story:"To fully control the value input, use `inputValue` and `onInputChange`."}}},A=()=>{let[e,t]=(0,y.useState)(!1);return y.createElement(y.Fragment,null,y.createElement(`button`,{onClick:()=>{t(!0)}},`Open dialog`),y.createElement(s,{title:`Dialog with a Combobox`,isOpen:e,onUserDismiss:()=>t(!1)},y.createElement(p,{label:`Select Account`},y.createElement(p.Heading,{text:`Checking`}),y.createElement(p.Item,{value:`Primary Checking - 4567`,searchValue:`Primary Checking - 4567`}),y.createElement(p.Item,{value:`Secondary Checking - 9876`,searchValue:`Secondary Checking - 9876`}),y.createElement(p.Item,{value:`Other Checking - 1112`,searchValue:`Other Checking - 1112`}),y.createElement(p.Item,{value:`Wow, more Checking - 3112`,searchValue:`Wow, more Checking - 3112`}),y.createElement(p.Heading,{text:`Savings`}),y.createElement(p.Item,{value:`Primary Savings - 1234`,searchValue:`Primary Savings - 1234`}),y.createElement(p.Item,{value:`Cheese Fund - 5432`,searchValue:`Cheese Fund - 5432`}))))},j=b.bind({}),j.args={id:`withCategories`,label:`Transfer to`,children:[y.createElement(p.Category,{label:`Checking`},y.createElement(p.Item,{searchValue:`Business Checking`,value:`checking1`},`Business Checking - 11234`),y.createElement(p.Item,{searchValue:`Main Checking`,value:`checking2`},`Main Checking - 13989`),y.createElement(p.Item,{searchValue:`Joint Checking`,value:`checking3`},`Joint Checking - 14857`)),y.createElement(p.Category,{label:`Savings`},y.createElement(p.Item,{searchValue:`Business Checking`,value:`savings1`},`Business Savings - 13938`),y.createElement(p.Item,{searchValue:`Main Savings`,value:`savings2`},`Main Savings - 48274`),y.createElement(p.Item,{searchValue:`Joint Savings`,value:`savings3`},`Joint Savings - 48284`)),y.createElement(p.Category,{label:`External Accounts`},y.createElement(p.Item,{value:`Sasha`,searchValue:`Sasha`},`Sasha - 84839`),y.createElement(p.Item,{value:`Joan`,searchValue:`Joan`},`Joan - 36183`),y.createElement(p.Item,{value:`Benoit`,searchValue:`Benoit`},`Benoit - 53261`))]},j.parameters={docs:{description:{story:"You may group `Combobox.Item` elements by category with `Combobox.Category`. When using categories, you **must** make all direct children of `Combobox` a `Combobox.Category`; no orphan items are allowed when using categories."}}},M=b.bind({}),M.args={id:`customFiltering`,label:`Transfer to`,children:[y.createElement(p.Item,{searchValue:`Main Checking - 67289`,value:`checking2`},`Main Checking - 67289`),y.createElement(p.Item,{searchValue:`Joint Checking - 14857`,value:`checking3`},`Joint Checking - 14857`),y.createElement(p.Item,{searchValue:`Business Checking - 11234`,value:`checking1`},`Business Checking - 11234`),y.createElement(p.Item,{searchValue:`Business Savings - 62947`,value:`savings1`},`Business Savings - 62947`)],filterItemsByInput:(e,t)=>e.filter(e=>(e.props.searchValue||e.props.value).toLowerCase().includes(t))},M.parameters={docs:{description:{story:"In this example, a custom `filterItemsByInput` function is used to enable search by either account name OR first four."}}},N=()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(``);return y.createElement(y.Fragment,null,y.createElement(p,{label:`Select Account`,inputValue:n,onInputChange:e=>r(e)},y.createElement(p.Item,{value:`Primary Checking - 4567`,searchValue:`Primary Checking - 4567`}),y.createElement(p.Item,{value:`Cheese Fund - 5432`,searchValue:`Cheese Fund - 5432`}),y.createElement(p.Item,{value:`Primary Savings - 1234`,searchValue:`Primary Savings - 1234`}),y.createElement(p.Item,{value:`Secondary Checking - 7892`,searchValue:`Secondary Checking - 7892`}),y.createElement(p.Action,{onSelect:()=>{t(!0)},label:`Do Action`})),y.createElement(h,{isOpen:e,onUserDismiss:()=>t(!1)},y.createElement(`div`,{className:`padding--y--s`},`🎬 Action!`)))},P=()=>y.createElement(`main`,{style:{height:`200vh`}},y.createElement(`div`,{className:`margin--bottom`,style:{marginTop:`100vh`}}),y.createElement(p,{label:`Account`},y.createElement(p.Item,{value:`checking1234`,searchValue:`checking1234`},`Checking (1234)`),y.createElement(p.Item,{value:`savings4321`,searchValue:`savings4321`},`Savings (4321)`),y.createElement(p.Item,{value:`checking5678`,searchValue:`checking5678`},`Checking (5678)`),y.createElement(p.Item,{value:`savings9876`,searchValue:`savings9876`},`Savings (9876)`),y.createElement(p.Item,{value:`money_market2468`,searchValue:`money_market2468`},`Money Market (2468)`),y.createElement(p.Item,{value:`cd1357`,searchValue:`cd1357`},`Certificate of Deposit (1357)`),y.createElement(p.Item,{value:`checking9999`,searchValue:`checking9999`},`Checking (9999)`),y.createElement(p.Item,{value:`savings1111`,searchValue:`savings1111`},`Savings (1111)`),y.createElement(p.Item,{value:`ira8642`,searchValue:`ira8642`},`IRA (8642)`),y.createElement(p.Item,{value:`checking7531`,searchValue:`checking7531`},`Checking (7531)`),y.createElement(p.Item,{value:`savings0246`,searchValue:`savings0246`},`Savings (0246)`),y.createElement(p.Item,{value:`money_market8024`,searchValue:`money_market8024`},`Money Market (8024)`),y.createElement(p.Item,{value:`checking3698`,searchValue:`checking3698`},`Checking (3698)`),y.createElement(p.Item,{value:`savings7410`,searchValue:`savings7410`},`Savings (7410)`),y.createElement(p.Item,{value:`cd9630`,searchValue:`cd9630`},`Certificate of Deposit (9630)`),y.createElement(p.Item,{value:`checking1593`,searchValue:`checking1593`},`Checking (1593)`),y.createElement(p.Item,{value:`savings7529`,searchValue:`savings7529`},`Savings (7529)`),y.createElement(p.Item,{value:`ira4816`,searchValue:`ira4816`},`IRA (4816)`),y.createElement(p.Item,{value:`money_market3571`,searchValue:`money_market3571`},`Money Market (3571)`),y.createElement(p.Item,{value:`checking8642`,searchValue:`checking8642`},`Checking (8642)`))),F=()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(``);return y.createElement(y.Fragment,null,y.createElement(p,{label:`Select Account`,inputValue:n,onInputChange:e=>r(e),clearSelectionOnAction:!0},y.createElement(p.Item,{value:`Primary Checking - 4567`,searchValue:`Primary Checking - 4567`}),y.createElement(p.Item,{value:`Cheese Fund - 5432`,searchValue:`Cheese Fund - 5432`}),y.createElement(p.Item,{value:`Primary Savings - 1234`,searchValue:`Primary Savings - 1234`}),y.createElement(p.Item,{value:`Secondary Checking - 7892`,searchValue:`Secondary Checking - 7892`}),y.createElement(p.Action,{onSelect:()=>{t(!0)},label:`Do Action`})),y.createElement(h,{isOpen:e,onUserDismiss:()=>t(!1)},y.createElement(`div`,{className:`padding--y--s`},`🎬 Action!`)))},I={title:`Components/Combobox`,component:p,subcomponents:{ComboboxItem:c,ComboboxHeading:f},argTypes:{icon:{options:[``,...a]}}},L=()=>{let[e,t]=(0,y.useState)(``),[n,r]=(0,y.useState)(``);return y.createElement(y.Fragment,null,y.createElement(`div`,null,`selected value `,n),y.createElement(p,{label:`Select item`,inputValue:e,onChange:e=>{r(e)},filterItemsByInput:(e,t)=>e.filter(e=>e?(e.props.searchValue||e.props.value).toLowerCase().includes(t):!1),onInputChange:e=>{t(e)}},y.createElement(p.Category,{label:`Checking`},y.createElement(p.Item,{searchValue:`Business Checking`,value:`checking1`},`Business Checking - 11234`),y.createElement(p.Item,{searchValue:`Main Checking`,value:`checking2`},`Main Checking - 13989`),y.createElement(p.Item,{searchValue:`Joint Checking`,value:`checking3`},`Joint Checking - 14857`)),y.createElement(p.Category,{label:`Savings`},y.createElement(p.Item,{searchValue:`Business Checking`,value:`savings1`},`Business Savings - 13938`),y.createElement(p.Item,{searchValue:`Main Savings`,value:`savings2`},`Main Savings - 48274`),y.createElement(p.Item,{searchValue:`Joint Savings`,value:`savings3`},`Joint Savings - 48284`)),y.createElement(p.Category,{label:`External Accounts`},y.createElement(p.Item,{value:`Sasha`,searchValue:`Sasha`},`Sasha - 84839`),y.createElement(p.Item,{value:`Joan`,searchValue:`Joan`},`Joan - 36183`),y.createElement(p.Item,{value:`Benoit`,searchValue:`Benoit`},`Benoit - 53261`))))},R=()=>y.createElement(`div`,{style:{width:`300px`}},y.createElement(p,{label:`Select an account with a very long label`},y.createElement(p.Item,{value:`business_checking_12345`,searchValue:`Business Checking - 12345678901234567890`},`This is a very long business checking account name that might wrap to multiple lines - 12345678901234567890`),y.createElement(p.Item,{value:`personal_savings_abcde`,searchValue:`Personal Savings - ABCDEFGHIJKLMNOPQRSTUVWXYZ`},`A personal savings account with an exceptionally long descriptive label for testing width constraints and text wrapping behavior`),y.createElement(p.Item,{value:`joint_account_xyz`,searchValue:`Joint Account - XYZ`},`Joint Family Account - Main Household Banking with Extended Description for Financial Planning`),y.createElement(p.Item,{value:`investment_portfolio`,searchValue:`Investment Portfolio - Retirement Planning 2050`},`Investment Portfolio & Retirement Planning Account with Very Long Name for Testing Dropdown Width Constraints`))),R.parameters={docs:{description:{story:`Test how the dropdown handles very long display labels and values. This story verifies width constraints and text wrapping behavior.`}}},z=b.bind({}),z.args={label:`Select your state`,icon:`search`,children:x},w.__docgenInfo={description:``,methods:[],displayName:`CustomSearchStrings`},T.__docgenInfo={description:``,methods:[],displayName:`WithHeadings`},E.__docgenInfo={description:``,methods:[],displayName:`WithHintHeadings`},k.__docgenInfo={description:``,methods:[],displayName:`FullyControlled`},A.__docgenInfo={description:``,methods:[],displayName:`InADialog`},N.__docgenInfo={description:``,methods:[],displayName:`WithActions`},P.__docgenInfo={description:``,methods:[],displayName:`ScrollingBehavior`},F.__docgenInfo={description:``,methods:[],displayName:`ClearingSelctionWithAction`},L.__docgenInfo={description:``,methods:[],displayName:`WithCategoriesInForm`},R.__docgenInfo={description:``,methods:[],displayName:`WithLongLabels`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Combobox {...args} />`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <Combobox {...args} />`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <Combobox label={\`Favorite Emoji (e.g. "Cactus")\`} {...args}>
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
  </Combobox>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <Combobox label="Select Account" {...args}>
    <Combobox.Heading text="Checking" />
    <Combobox.Item value="Primary Checking - 4567" searchValue="Primary Checking - 4567" />
    <Combobox.Item value="Secondary Checking - 9876" searchValue="Secondary Checking - 9876" />
    <Combobox.Heading text="Savings" />
    <Combobox.Item value="Primary Savings - 1234" searchValue="Primary Savings - 1234" />
    <Combobox.Item value="Cheese Fund - 5432" searchValue="Cheese Fund - 5432" />
  </Combobox>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <Combobox label="Select Account" {...args}>
    <Combobox.Heading text="Checking" kind="hint" />
    <Combobox.Item value="Primary Checking - 4567" searchValue="Primary Checking - 4567" />
    <Combobox.Item value="Secondary Checking - 9876" searchValue="Secondary Checking - 9876" />
    <Combobox.Heading text="Savings" kind="hint" />
    <Combobox.Item value="Primary Savings - 1234" searchValue="Primary Savings - 1234" />
    <Combobox.Item value="Cheese Fund - 5432" searchValue="Cheese Fund - 5432" />
  </Combobox>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => <Combobox {...args} />`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <Combobox {...args} />`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <Combobox {...args} />`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <Combobox {...args} />`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => <div style={{
  width: "300px"
}}>
    <Combobox label="Select an account with a very long label">
      <Combobox.Item value="business_checking_12345" searchValue="Business Checking - 12345678901234567890">
        This is a very long business checking account name that might wrap to
        multiple lines - 12345678901234567890
      </Combobox.Item>
      <Combobox.Item value="personal_savings_abcde" searchValue="Personal Savings - ABCDEFGHIJKLMNOPQRSTUVWXYZ">
        A personal savings account with an exceptionally long descriptive label
        for testing width constraints and text wrapping behavior
      </Combobox.Item>
      <Combobox.Item value="joint_account_xyz" searchValue="Joint Account - XYZ">
        Joint Family Account - Main Household Banking with Extended Description
        for Financial Planning
      </Combobox.Item>
      <Combobox.Item value="investment_portfolio" searchValue="Investment Portfolio - Retirement Planning 2050">
        Investment Portfolio & Retirement Planning Account with Very Long Name
        for Testing Dropdown Width Constraints
      </Combobox.Item>
    </Combobox>
  </div>`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => <Combobox {...args} />`,...z.parameters?.docs?.source}}},B=[`Overview`,`WithIcon`,`CustomSearchStrings`,`WithHeadings`,`WithHintHeadings`,`WithError`,`NoChildren`,`FullyControlled`,`InADialog`,`WithCategories`,`CustomFiltering`,`WithActions`,`ScrollingBehavior`,`ClearingSelctionWithAction`,`WithCategoriesInForm`,`WithLongLabels`,`OverridingMenuHeight`]}))();export{F as ClearingSelctionWithAction,M as CustomFiltering,w as CustomSearchStrings,k as FullyControlled,A as InADialog,O as NoChildren,z as OverridingMenuHeight,S as Overview,P as ScrollingBehavior,N as WithActions,j as WithCategories,L as WithCategoriesInForm,D as WithError,T as WithHeadings,E as WithHintHeadings,C as WithIcon,R as WithLongLabels,B as __namedExportsOrder,I as default};