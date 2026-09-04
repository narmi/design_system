import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-CmAoFXIH.js";import{n as r,t as i}from"./Button-C9FWrYaS.js";import{a,i as o,o as s,r as c,s as l,t as u}from"./Select-uAU9EGta.js";import{n as d,t as f}from"./Dialog-BYbHb8BU.js";import{n as p,t as m}from"./Drawer-BAgUyX53.js";function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(null,arguments)}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{g=e(n()),c(),l(),a(),r(),d(),p(),{expect:_,screen:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b=e=>g.createElement(u,e),x=[g.createElement(u.Item,{value:`coffee`,searchValue:`coffee`},g.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`),g.createElement(u.Item,{value:`film`,searchValue:`film`},g.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),g.createElement(u.Item,{value:`truck`,searchValue:`truck`},g.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),g.createElement(u.Item,{value:`blob`,searchValue:`blob`},g.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`)],S=b.bind({}),S.args={id:`overviewStory`,label:`Favorite icon`,children:x},C={name:`Interaction: Opens on click`,render:()=>g.createElement(u,{id:`chromaticOpen`,label:`Favorite icon`},x),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`,{name:/favorite icon/i})),await y(()=>_(v.getByRole(`option`,{name:/coffee/i})).toBeVisible())}},w={name:`Interaction: Selects an option`,render:()=>g.createElement(u,{id:`chromaticSelect`,label:`Favorite icon`},x),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`,{name:/favorite icon/i})),await y(()=>_(v.getByRole(`option`,{name:/film/i})).toBeVisible()),await t.click(v.getByRole(`option`,{name:/film/i})),await y(()=>_(v.queryByRole(`option`,{name:/film/i})).not.toBeInTheDocument()),_(e.getByRole(`combobox`,{name:/favorite icon/i})).toHaveTextContent(`Film`)}},T=b.bind({}),T.args={id:`defaultSelection`,label:`Favorite icon`,children:x,defaultValue:`film`},E=b.bind({}),E.args={disabled:!0,id:`disabledSelection`,label:`Account`,children:[g.createElement(u.Item,{value:`checking0001`,searchValue:`checking0001`},`Checking - 0001`)],value:`checking0001`},D=b.bind({}),D.args={id:`errorState`,label:`Account`,children:[g.createElement(u.Item,{value:`checking1234`,searchValue:`checking1234`},`Checking (1234)`),g.createElement(u.Item,{value:`checking4321`,searchValue:`checking4321`},`Checking (4321)`)],defaultValue:`checking1234`,errorText:`Checking (1234) is not eligible`},O=b.bind({}),O.args={label:`Account`,id:`account-field`,children:[...x,g.createElement(u.Action,{onSelect:()=>{alert(`side effect triggered - no option selected`)}},g.createElement(`span`,{className:`fontColor--pine fontWeight--bold`},g.createElement(`span`,{className:`narmi-icon-plus padding--right--xs`}),` Add new icon`))]},O.parameters={docs:{description:{story:"If you need an option that triggers a side effect, use a `<Select.Action>` child. An action item will not update selection and con not be selected by default."}}},k=b.bind({}),k.args={label:`Account`,id:`account-field`,clearSelectionOnAction:!0,children:[...x,g.createElement(u.Action,{onSelect:()=>{alert(`side effect triggered`)}},g.createElement(`span`,{className:`fontColor--pine fontWeight--bold`},g.createElement(`span`,{className:`narmi-icon-plus padding--right--xs`}),` Add new icon`))]},O.parameters={docs:{description:{story:"Use `clearSelectionOnAction` to clear any existing selection when any action is selected."}}},A=b.bind({}),A.args={id:`withCategories`,label:`Select an Icon`,children:[g.createElement(u.Category,{label:`Transportation`},g.createElement(u.Item,{value:`truck`,searchValue:`truck`},g.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),g.createElement(u.Item,{value:`anchor`,searchValue:`anchor`},g.createElement(`span`,{className:`narmi-icon-anchor padding--right--xs`}),` Anchor`),g.createElement(u.Item,{value:`car-outline`,searchValue:`car-outline`},g.createElement(`span`,{className:`narmi-icon-car-outline padding--right--xs`}),` Car`)),g.createElement(u.Category,{label:`Art`},g.createElement(u.Item,{value:`film`,searchValue:`film`},g.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),g.createElement(u.Item,{value:`aperture`,searchValue:`aperture`},g.createElement(`span`,{className:`narmi-icon-aperture padding--right--xs`}),` Aperture`),g.createElement(u.Item,{value:`pen`,searchValue:`pen`},g.createElement(`span`,{className:`narmi-icon-pen-tool padding--right--xs`}),` Pen`),g.createElement(u.Item,{value:`blob`,searchValue:`blob`},g.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`)),g.createElement(u.Category,{label:`Communication & Messaging`},g.createElement(u.Item,{value:`mail`,searchValue:`mail`},g.createElement(`span`,{className:`narmi-icon-mail padding--right--xs`}),` Mail`),g.createElement(u.Item,{value:`phone`,searchValue:`phone`},g.createElement(`span`,{className:`narmi-icon-phone padding--right--xs`}),` Phone`),g.createElement(u.Item,{value:`send`,searchValue:`send`},g.createElement(`span`,{className:`narmi-icon-send padding--right--xs`}),` Send`)),g.createElement(u.Category,{label:`Weather & Natural Phenomena`},g.createElement(u.Item,{value:`cloud`,searchValue:`cloud`},g.createElement(`span`,{className:`narmi-icon-cloud padding--right--xs`}),` Cloud`),g.createElement(u.Item,{value:`sun`,searchValue:`sun`},g.createElement(`span`,{className:`narmi-icon-sun padding--right--xs`}),` Sun`),g.createElement(u.Item,{value:`wind`,searchValue:`wind`},g.createElement(`span`,{className:`narmi-icon-wind padding--right--xs`}),` Wind`),g.createElement(u.Item,{value:`umbrella`,searchValue:`umbrella`},g.createElement(`span`,{className:`narmi-icon-umbrella padding--right--xs`}),` Umbrella`)),g.createElement(u.Category,{label:`Financial Services & Banking`},g.createElement(u.Item,{value:`credit-card`,searchValue:`credit-card`},g.createElement(`span`,{className:`narmi-icon-credit-card padding--right--xs`}),` Credit Card`),g.createElement(u.Item,{value:`dollar-sign`,searchValue:`dollar-sign`},g.createElement(`span`,{className:`narmi-icon-dollar-sign padding--right--xs`}),` Dollar Sign`),g.createElement(u.Item,{value:`piggy-bank`,searchValue:`piggy-bank`},g.createElement(`span`,{className:`narmi-icon-piggy-bank padding--right--xs`}),` Piggy Bank`))]},A.parameters={docs:{description:{story:"You may group `Select.Item` elements by category with `Select.Category`. When using categories, you **must** make all direct children of `Select` a `Select.Category`; no orphan items are allowed when using categories."}}},j=b.bind({}),j.args={id:`expandedCategories`,label:`Select an Icon`,children:[g.createElement(u.Category,{label:`Transportation`,isFlat:!0},g.createElement(u.Item,{value:`truck`,searchValue:`truck`},g.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),g.createElement(u.Item,{value:`anchor`,searchValue:`anchor`},g.createElement(`span`,{className:`narmi-icon-anchor padding--right--xs`}),` Anchor`),g.createElement(u.Item,{value:`car-outline`,searchValue:`car-outline`},g.createElement(`span`,{className:`narmi-icon-car-outline padding--right--xs`}),` Car`)),g.createElement(u.Category,{label:`Art`,isFlat:!0},g.createElement(u.Item,{value:`film`,searchValue:`film`},g.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),g.createElement(u.Item,{value:`aperture`,searchValue:`aperture`},g.createElement(`span`,{className:`narmi-icon-aperture padding--right--xs`}),` Aperture`),g.createElement(u.Item,{value:`pen`,searchValue:`pen`},g.createElement(`span`,{className:`narmi-icon-pen-tool padding--right--xs`}),` Pen`),g.createElement(u.Item,{value:`blob`,searchValue:`blob`},g.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`)),g.createElement(u.Action,{onSelect:()=>{alert(`action taken`)}},g.createElement(`span`,{className:`fontColor--pine fontWeight--bold`},g.createElement(`span`,{className:`narmi-icon-plus padding--right--xs`}),` Add new`))]},j.parameters={docs:{description:{story:"Categories may be set to always be open with the `isFlat` prop."}}},M=b.bind({}),M.args={id:`categoryLabels`,label:`Select an Icon`,children:[g.createElement(u.Category,{label:`Recently used`,isFlat:!0,kind:`label`},g.createElement(u.Item,{value:`truck`,searchValue:`truck`},g.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),g.createElement(u.Item,{value:`anchor`,searchValue:`anchor`},g.createElement(`span`,{className:`narmi-icon-anchor padding--right--xs`}),` Anchor`),g.createElement(u.Item,{value:`car-outline`,searchValue:`car-outline`},g.createElement(`span`,{className:`narmi-icon-car-outline padding--right--xs`}),` Car`))]},j.parameters={docs:{description:{story:"Categories may be set to always be open with the `expand` prop."}}},N=b.bind({}),N.args={id:`customTypeaheadString`,label:`Select an Industry`,children:[{name:`Agriculture`,code:`12345`},{name:`Manufacturing`,code:`55555`},{name:`Logistics`,code:`32144`},{name:`Hospitality`,code:`22147`}].map(({name:e,code:t})=>g.createElement(u.Item,{key:t,value:t,searchValue:e},e))},N.parameters={docs:{description:{story:"By default, typeahead highlights items based on `value`. You may pass a `searchValue` to customize the string users search against when using typeahead. In this example, the value is a numeric code, but we'd like the user to filter on industry name"}}},P=b.bind({}),P.args={id:`customTypeaheadBehavior`,label:`Select an Industry`,getTypeaheadString:(e,t)=>{console.info(`User typed: "${e}"`);let n=t.props.searchValue||t.props.value||``;return/\d/.test(e)&&(n=t.props.value,console.info(`Searching by NAICS code instead of name`)),n},children:[{name:`Agriculture`,code:`12345`},{name:`Manufacturing`,code:`55555`},{name:`Logistics`,code:`32144`},{name:`Hospitality`,code:`22147`}].map(({name:e,code:t})=>g.createElement(u.Item,{key:t,value:t,searchValue:e},e,` - `,t))},P.parameters={docs:{description:{story:"You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha"}}},F=()=>g.createElement(`main`,{style:{height:`200vh`}},g.createElement(`div`,{className:`margin--bottom`,style:{marginTop:`100vh`}}),g.createElement(u,{id:`product-field`,label:`Account`},g.createElement(u.Item,{value:`checking1234`,searchValue:`checking1234`},`Checking (1234)`),g.createElement(u.Item,{value:`savings4321`,searchValue:`savings4321`},`Savings (4321)`),g.createElement(u.Item,{value:`checking5678`,searchValue:`checking5678`},`Checking (5678)`),g.createElement(u.Item,{value:`savings9876`,searchValue:`savings9876`},`Savings (9876)`),g.createElement(u.Item,{value:`money_market2468`,searchValue:`money_market2468`},`Money Market (2468)`),g.createElement(u.Item,{value:`cd1357`,searchValue:`cd1357`},`Certificate of Deposit (1357)`),g.createElement(u.Item,{value:`checking9999`,searchValue:`checking9999`},`Checking (9999)`),g.createElement(u.Item,{value:`savings1111`,searchValue:`savings1111`},`Savings (1111)`),g.createElement(u.Item,{value:`ira8642`,searchValue:`ira8642`},`IRA (8642)`),g.createElement(u.Item,{value:`checking7531`,searchValue:`checking7531`},`Checking (7531)`),g.createElement(u.Item,{value:`savings0246`,searchValue:`savings0246`},`Savings (0246)`),g.createElement(u.Item,{value:`money_market8024`,searchValue:`money_market8024`},`Money Market (8024)`),g.createElement(u.Item,{value:`checking3698`,searchValue:`checking3698`},`Checking (3698)`),g.createElement(u.Item,{value:`savings7410`,searchValue:`savings7410`},`Savings (7410)`),g.createElement(u.Item,{value:`cd9630`,searchValue:`cd9630`},`Certificate of Deposit (9630)`),g.createElement(u.Item,{value:`checking1593`,searchValue:`checking1593`},`Checking (1593)`),g.createElement(u.Item,{value:`savings7529`,searchValue:`savings7529`},`Savings (7529)`),g.createElement(u.Item,{value:`ira4816`,searchValue:`ira4816`},`IRA (4816)`),g.createElement(u.Item,{value:`money_market3571`,searchValue:`money_market3571`},`Money Market (3571)`),g.createElement(u.Item,{value:`checking8642`,searchValue:`checking8642`},`Checking (8642)`))),I=()=>{let[e,t]=(0,g.useState)(``);return g.createElement(g.Fragment,null,g.createElement(`div`,{className:`margin--bottom`},g.createElement(`input`,{type:`text`,name:`account`,value:e,readOnly:!0}),g.createElement(`p`,{className:`fontSize--xs`},`(`,g.createElement(`i`,null,`Typically this would be a `,g.createElement(`code`,null,`hidden`),` input.`),`)`)),g.createElement(u,{id:`product-field`,label:`Account`,onChange:t},g.createElement(u.Item,{value:`checking1234`,searchValue:`checking1234`},`Checking (1234)`),g.createElement(u.Item,{value:`savings4321`,searchValue:`savings4321`},`Savings (4321)`),g.createElement(u.Item,{value:`checking5678`,searchValue:`checking5678`},`Checking (5678)`),g.createElement(u.Item,{value:`savings9876`,searchValue:`savings9876`},`Savings (9876)`),g.createElement(u.Item,{value:`money_market2468`,searchValue:`money_market2468`},`Money Market (2468)`),g.createElement(u.Item,{value:`cd1357`,searchValue:`cd1357`},`Certificate of Deposit (1357)`),g.createElement(u.Item,{value:`checking9999`,searchValue:`checking9999`},`Checking (9999)`),g.createElement(u.Item,{value:`savings1111`,searchValue:`savings1111`},`Savings (1111)`),g.createElement(u.Item,{value:`ira8642`,searchValue:`ira8642`},`IRA (8642)`),g.createElement(u.Item,{value:`checking7531`,searchValue:`checking7531`},`Checking (7531)`),g.createElement(u.Item,{value:`savings0246`,searchValue:`savings0246`},`Savings (0246)`),g.createElement(u.Item,{value:`money_market8024`,searchValue:`money_market8024`},`Money Market (8024)`),g.createElement(u.Item,{value:`checking3698`,searchValue:`checking3698`},`Checking (3698)`),g.createElement(u.Item,{value:`savings7410`,searchValue:`savings7410`},`Savings (7410)`),g.createElement(u.Item,{value:`cd9630`,searchValue:`cd9630`},`Certificate of Deposit (9630)`),g.createElement(u.Item,{value:`checking1593`,searchValue:`checking1593`},`Checking (1593)`),g.createElement(u.Item,{value:`savings7529`,searchValue:`savings7529`},`Savings (7529)`),g.createElement(u.Item,{value:`ira4816`,searchValue:`ira4816`},`IRA (4816)`),g.createElement(u.Item,{value:`money_market3571`,searchValue:`money_market3571`},`Money Market (3571)`),g.createElement(u.Item,{value:`checking8642`,searchValue:`checking8642`},`Checking (8642)`)))},I.parameters={docs:{description:{story:"A hidden input works natively in a `form`, or as a bridge to a form management library of your choice."}}},L=()=>{let[e,t]=(0,g.useState)(null),[n,r]=(0,g.useState)([{value:`checking1234`,label:`Checking (1234)`},{value:`savings4321`,label:`Savings (4321)`}]);return g.createElement(g.Fragment,null,g.createElement(u,{id:`controlled-product-field`,label:`Account`,value:e,onChange:e=>t(e)},n.map(({value:e,label:t})=>g.createElement(u.Item,{key:`${e}-${t}`,value:e,searchValue:e},t))),g.createElement(`div`,{className:`margin--top`},g.createElement(i,{label:`Clear selection`,kind:`negative`,onClick:()=>{t(null)}})),g.createElement(`div`,{className:`margin--top`},g.createElement(i,{label:`Add an item`,kind:`negative`,onClick:()=>{r(e=>[{value:`extra`,label:`Extra Item!`},...e])}})))},L.parameters={docs:{description:{story:"You can programmatically select selection by updating the `value` prop. When `value` is passed, the component becomes **fully controlled** and you must use the `onChange` prop to update the `value`. Clear the selection by passing an empty string as the `value`."}}},R=e=>{let[t,n]=(0,g.useState)(!1);return g.createElement(g.Fragment,null,g.createElement(i,{label:`Open Dialog`,onClick:()=>{n(!0)}}),g.createElement(f,{title:`Dialog with a Select`,isOpen:t,onUserDismiss:()=>{n(!1)}},g.createElement(`div`,{className:`padding--y--s`},g.createElement(`div`,null,`The floating menu list will render portaled near the bottom of the`,` `,`<body>`,` HTML element.`),g.createElement(`div`,{className:`padding--y--l`},g.createElement(u,e)))))},R.args={label:`Favorite icon`,children:x},z=()=>g.createElement(`div`,{style:{width:`80px`}},g.createElement(u,{label:`Age`},g.createElement(u.Item,{value:`checking1234`},`Checking (1234) alol haha what`,` `),g.createElement(u.Item,{value:`checking1224`},`Checking (1234) alol haha what`,` `))),B=()=>g.createElement(u,{label:`Account`},g.createElement(u.Item,{value:`checking1234`,searchValue:`checking1234`},`Checking (1234)`)),V=()=>g.createElement(u,{label:`Account`},g.createElement(u.Action,{onSelect:()=>{}},g.createElement(`span`,{className:`fontColor--pine fontWeight--bold`},g.createElement(`span`,{className:`narmi-icon-plus padding--right--xs`}),` Add new account`))),H={title:`Components/Select`,component:u,subcomponents:{SelectItem:s,SelectAction:o},argTypes:{children:{control:!1}}},U=b.bind({}),U.args={id:`overviewStory`,label:`Favorite icon (short menu)`,children:x},W=e=>{let[t,n]=(0,g.useState)(!1);return g.createElement(g.Fragment,null,g.createElement(i,{onClick:()=>{n(!0)}},`Open Drawer`),g.createElement(m,h({},e,{isOpen:t,onUserDismiss:()=>n(!1)}),g.createElement(`div`,{style:{marginTop:`600px`,width:`300px`}},g.createElement(u,{id:`product-field`,label:`Account`},g.createElement(u.Item,{value:`checking1234`,searchValue:`checking1234`},`Checking (1234)`),g.createElement(u.Item,{value:`savings4321`,searchValue:`savings4321`},`Savings (4321)`),g.createElement(u.Item,{value:`checking5678`,searchValue:`checking5678`},`Checking (5678)`),g.createElement(u.Item,{value:`savings9876`,searchValue:`savings9876`},`Savings (9876)`),g.createElement(u.Item,{value:`money_market2468`,searchValue:`money_market2468`},`Money Market (2468)`),g.createElement(u.Item,{value:`cd1357`,searchValue:`cd1357`},`Certificate of Deposit (1357)`),g.createElement(u.Item,{value:`checking9999`,searchValue:`checking9999`},`Checking (9999)`),g.createElement(u.Item,{value:`savings1111`,searchValue:`savings1111`},`Savings (1111)`),g.createElement(u.Item,{value:`ira8642`,searchValue:`ira8642`},`IRA (8642)`),g.createElement(u.Item,{value:`checking7531`,searchValue:`checking7531`},`Checking (7531)`),g.createElement(u.Item,{value:`savings0246`,searchValue:`savings0246`},`Savings (0246)`),g.createElement(u.Item,{value:`money_market8024`,searchValue:`money_market8024`},`Money Market (8024)`),g.createElement(u.Item,{value:`checking3698`,searchValue:`checking3698`},`Checking (3698)`),g.createElement(u.Item,{value:`savings7410`,searchValue:`savings7410`},`Savings (7410)`),g.createElement(u.Item,{value:`cd9630`,searchValue:`cd9630`},`Certificate of Deposit (9630)`),g.createElement(u.Item,{value:`checking1593`,searchValue:`checking1593`},`Checking (1593)`),g.createElement(u.Item,{value:`savings7529`,searchValue:`savings7529`},`Savings (7529)`),g.createElement(u.Item,{value:`ira4816`,searchValue:`ira4816`},`IRA (4816)`),g.createElement(u.Item,{value:`money_market3571`,searchValue:`money_market3571`},`Money Market (3571)`),g.createElement(u.Item,{value:`checking8642`,searchValue:`checking8642`},`Checking (8642)`)))))},G=[`Checking`,`Savings`,`Money Market`,`Certificate of Deposit`,`IRA`],K=b.bind({}),K.args={id:`manyItems`,label:`Account`,children:Array.from({length:60},(e,t)=>{let n=G[t%G.length],r=String(1e3+t*7).slice(-4),i=`account-${t}`,a=`${n} (${r})`;return g.createElement(u.Item,{key:i,value:i,searchValue:a},a)})},K.parameters={docs:{description:{story:`A dropdown with a large number of items, useful for testing scrolling, typeahead, and dropdown positioning with long lists.`}}},q=b.bind({}),q.args={id:`withLongOptionLabels`,label:`Select an Account`,children:[g.createElement(u.Item,{value:`checking1234`,searchValue:`checking1234`},`Checking Account - 1234 - Primary account for daily transactions and bill payments`),g.createElement(u.Item,{value:`savings5678`,searchValue:`savings5678`},`High-Yield Savings Account - 5678 - Earns interest on deposits with competitive rates`),g.createElement(u.Item,{value:`money_market9012`,searchValue:`money_market9012`},`Money Market Account - 9012 - Flexible access with check-writing privileges`),g.createElement(u.Item,{value:`cd3456`,searchValue:`cd3456`},`Certificate of Deposit - 3456 - Fixed-term investment with guaranteed returns`)]},F.__docgenInfo={description:``,methods:[],displayName:`ScrollingBehavior`},I.__docgenInfo={description:``,methods:[],displayName:`InAForm`},L.__docgenInfo={description:``,methods:[],displayName:`Controlled`},R.__docgenInfo={description:``,methods:[],displayName:`InADialog`},z.__docgenInfo={description:``,methods:[],displayName:`SmallWidthLongItem`},B.__docgenInfo={description:``,methods:[],displayName:`OneItem`},V.__docgenInfo={description:``,methods:[],displayName:`OneAction`},W.__docgenInfo={description:``,methods:[],displayName:`InADrawer`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on click",
  render: () => <Select id="chromaticOpen" label="Favorite icon">
      {children}
    </Select>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("combobox", {
      name: /favorite icon/i
    }));
    await waitFor(() => expect(screen.getByRole("option", {
      name: /coffee/i
    })).toBeVisible());
  }
}`,...C.parameters?.docs?.source},description:{story:`Interaction test that opens the Select so Chromatic can snapshot
the dropdown's placement.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Selects an option",
  render: () => <Select id="chromaticSelect" label="Favorite icon">
      {children}
    </Select>,
  play: async ({
    canvas,
    userEvent
  }) => {
    // open the dropdown
    await userEvent.click(canvas.getByRole("combobox", {
      name: /favorite icon/i
    }));
    await waitFor(() => expect(screen.getByRole("option", {
      name: /film/i
    })).toBeVisible());

    // select the "Film" option
    await userEvent.click(screen.getByRole("option", {
      name: /film/i
    }));

    // menu closes and options unmount
    await waitFor(() => expect(screen.queryByRole("option", {
      name: /film/i
    })).not.toBeInTheDocument());

    // trigger now reflects the selection
    expect(canvas.getByRole("combobox", {
      name: /favorite icon/i
    })).toHaveTextContent("Film");
  }
}`,...w.parameters?.docs?.source},description:{story:`Interaction test for the full selection flow: open the dropdown, pick an
option, and verify the trigger updates and the menu closes.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <Select label="Account">
      <Select.Item value="checking1234" searchValue="checking1234">
        Checking (1234)
      </Select.Item>
    </Select>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <Select label="Account">
      <Select.Action onSelect={() => {}}>
        <span className="fontColor--pine fontWeight--bold">
          <span className="narmi-icon-plus padding--right--xs" /> Add new
          account
        </span>
      </Select.Action>
    </Select>;
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
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
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => <Select {...args} />`,...q.parameters?.docs?.source}}},J=[`Overview`,`Open`,`SelectOption`,`DefaultSelection`,`DisabledSelection`,`ErrorState`,`WithAction`,`ClearingSelectionWithAction`,`WithCategories`,`FlatCategories`,`CategoryLabels`,`CustomTypeahead`,`ChangingTypeaheadBehavior`,`ScrollingBehavior`,`InAForm`,`Controlled`,`InADialog`,`SmallWidthLongItem`,`OneItem`,`OneAction`,`OverridingMenuHeight`,`InADrawer`,`ManyItems`,`WithLongOptionLabels`]}))();export{M as CategoryLabels,P as ChangingTypeaheadBehavior,k as ClearingSelectionWithAction,L as Controlled,N as CustomTypeahead,T as DefaultSelection,E as DisabledSelection,D as ErrorState,j as FlatCategories,R as InADialog,W as InADrawer,I as InAForm,K as ManyItems,V as OneAction,B as OneItem,C as Open,U as OverridingMenuHeight,S as Overview,F as ScrollingBehavior,w as SelectOption,z as SmallWidthLongItem,O as WithAction,A as WithCategories,q as WithLongOptionLabels,J as __namedExportsOrder,H as default};