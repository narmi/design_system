import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DW8SnL8O.js";import{n as r,t as i}from"./Row-CesaJ_5C.js";import{n as a,t as o}from"./Radio-DHWkcouf.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;t((()=>{s=e(n()),a(),r(),{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u=e=>s.createElement(o,e),d=u.bind({}),d.args={name:`overview`,value:`test`,children:s.createElement(s.Fragment,null,`A single Radio input that allows `,s.createElement(`strong`,null,`custom`),` `,s.createElement(`code`,{className:`fontColor--azul`},`JSX`),` labels`)},f={name:`Interaction: Selects on click`,render:()=>s.createElement(()=>{let[e,t]=(0,s.useState)(``);return s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-default)`}},[`daily`,`weekly`].map(n=>s.createElement(o,{key:n,name:`frequency`,value:n,onCheck:t,checked:e===n},`Repeats `,n)))},null),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`radio`,{name:/repeats daily/i}),r=e.getByRole(`radio`,{name:/repeats weekly/i});c(n).not.toBeChecked(),await t.click(n),await l(()=>c(n).toBeChecked()),await t.click(r),await l(()=>c(r).toBeChecked()),c(n).not.toBeChecked()}},p=()=>s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-default)`}},s.createElement(o,{name:`frequency`,value:`daily`},`Repeats `,s.createElement(`strong`,null,`Daily`)),s.createElement(o,{name:`frequency`,value:`weekly`},`Repeats `,s.createElement(`strong`,null,`Weekly`)),s.createElement(o,{name:`frequency`,value:`monthly`},`Repeats `,s.createElement(`strong`,null,`Monthly`))),m=()=>{let[e,t]=(0,s.useState)(``);return s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-default)`}},[`daily`,`weekly`].map(n=>s.createElement(o,{key:n,name:`freq`,value:n,onCheck:t,checked:e===n},`Repeats `,s.createElement(`strong`,null,n))))},h=()=>{let[e,t]=(0,s.useState)(``);return s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-s)`,maxWidth:`400px`}},[`option-a`,`option-b`,`option-c`].map(n=>s.createElement(o,{key:n,name:`card-demo`,value:n,kind:`card`,onCheck:t,checked:e===n},`Option `,n.split(`-`)[1].toUpperCase())))},h.parameters={docs:{description:{story:`Card variant displays the radio as a toggleable card with a checkmark icon when selected. Cards include padding, borders, and background color changes on selection.`}}},g=()=>{let[e,t]=(0,s.useState)(``);return s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-s)`,maxWidth:`400px`}},[`complete-myself`,`owner-completes`].map((n,r)=>s.createElement(o,{key:n,name:`input-card-demo`,value:n,kind:`input-card`,onCheck:t,checked:e===n},r===0?`You will complete the form`:`Owner will complete the form`)))},g.parameters={docs:{description:{story:`Input-card variant displays as a card but includes a traditional radio input dot positioned inside the card. This provides extra visual affordance for busy interfaces.`}}},_=()=>{let[e,t]=(0,s.useState)(``);return s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-s)`,maxWidth:`300px`}},[`Red`,`Blue`,`Green`].map(n=>s.createElement(o,{key:n,name:`checkmark-demo`,value:n,kind:`checkmark`,onCheck:t,checked:e===n},n)))},_.parameters={docs:{description:{story:`Checkmark variant displays with a simple checkmark icon that appears on hover and selection. The layout is reversed with the checkmark on the right side.`}}},v=()=>s.createElement(i,{gapSize:`xs`},[...Array(10)].map((e,t)=>s.createElement(i.Item,{key:t,shrink:!0},s.createElement(o,{name:`rating-demo`,value:(t+1).toString(),kind:`rating`},t+1)))),y=()=>s.createElement(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`var(--space-l)`,maxWidth:`800px`}},[`default`,`card`,`input-card`].map(e=>s.createElement(`div`,{key:e,style:{display:`flex`,flexDirection:`column`,gap:`var(--space-s)`}},s.createElement(`h4`,{style:{margin:0,textTransform:`capitalize`}},e==="default"?`Default`:e,` Kind`),s.createElement(o,{name:`error-${e}`,value:`no-error`,kind:e==="default"?void 0:e},`Normal state`),s.createElement(o,{name:`error-${e}`,value:`has-error`,kind:e==="default"?void 0:e,hasError:!0},`With hasError`),s.createElement(o,{name:`error-${e}`,value:`with-message`,kind:e==="default"?void 0:e,hasError:!0,error:`This field is required`},`With error message`)))),y.parameters={docs:{description:{story:`Demonstrates error states across all Radio kinds. Shows normal state, hasError prop, and error prop with custom message.`}}},b={title:`Components/Radio`,component:o},p.__docgenInfo={description:``,methods:[],displayName:`RadioGroups`},m.__docgenInfo={description:``,methods:[],displayName:`FullyControlled`},h.__docgenInfo={description:``,methods:[],displayName:`AsCard`},g.__docgenInfo={description:``,methods:[],displayName:`AsInputCard`},_.__docgenInfo={description:``,methods:[],displayName:`AsCheckmark`},v.__docgenInfo={description:``,methods:[],displayName:`AsRating`},y.__docgenInfo={description:``,methods:[],displayName:`ErrorStates`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <Radio {...args} />`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Selects on click",
  render: () => {
    const RadioGroup = () => {
      const [selected, setSelected] = useState("");
      return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-default)"
      }}>
          {["daily", "weekly"].map(value => <Radio key={value} name="frequency" value={value} onCheck={setSelected} checked={selected === value}>
              Repeats {value}
            </Radio>)}
        </div>;
    };
    return <RadioGroup />;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const daily = canvas.getByRole("radio", {
      name: /repeats daily/i
    });
    const weekly = canvas.getByRole("radio", {
      name: /repeats weekly/i
    });
    expect(daily).not.toBeChecked();

    // select the first radio
    await userEvent.click(daily);
    await waitFor(() => expect(daily).toBeChecked());

    // selecting the second radio moves the selection
    await userEvent.click(weekly);
    await waitFor(() => expect(weekly).toBeChecked());
    expect(daily).not.toBeChecked();
  }
}`,...f.parameters?.docs?.source},description:{story:`Interaction test verifying that clicking a radio selects it and that
selecting another radio in the same group moves the selection.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-default)"
}}>
    <Radio name="frequency" value="daily">
      Repeats <strong>Daily</strong>
    </Radio>
    <Radio name="frequency" value="weekly">
      Repeats <strong>Weekly</strong>
    </Radio>
    <Radio name="frequency" value="monthly">
      Repeats <strong>Monthly</strong>
    </Radio>
  </div>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const SET_NAME = "freq";
  const [selectedRadioVal, setSelectedRadioVal] = useState("");
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-default)"
  }}>
      {["daily", "weekly"].map(value => <Radio key={value} name={SET_NAME} value={value} onCheck={setSelectedRadioVal} checked={selectedRadioVal === value}>
          Repeats <strong>{value}</strong>
        </Radio>)}
    </div>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("");
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-s)",
    maxWidth: "400px"
  }}>
      {["option-a", "option-b", "option-c"].map(value => <Radio key={value} name="card-demo" value={value} kind="card" onCheck={setSelectedValue} checked={selectedValue === value}>
          Option {value.split("-")[1].toUpperCase()}
        </Radio>)}
    </div>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("");
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-s)",
    maxWidth: "400px"
  }}>
      {["complete-myself", "owner-completes"].map((value, index) => <Radio key={value} name="input-card-demo" value={value} kind="input-card" onCheck={setSelectedValue} checked={selectedValue === value}>
          {index === 0 ? "You will complete the form" : "Owner will complete the form"}
        </Radio>)}
    </div>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("");
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-s)",
    maxWidth: "300px"
  }}>
      {["Red", "Blue", "Green"].map(value => <Radio key={value} name="checkmark-demo" value={value} kind="checkmark" onCheck={setSelectedValue} checked={selectedValue === value}>
          {value}
        </Radio>)}
    </div>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Row gapSize="xs">
      {[...Array(10)].map((_, index) => <Row.Item key={index} shrink>
          <Radio name="rating-demo" value={(index + 1).toString()} kind="rating">
            {index + 1}
          </Radio>
        </Row.Item>)}
    </Row>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const kinds = ["default", "card", "input-card"];
  return <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "var(--space-l)",
    maxWidth: "800px"
  }}>
      {kinds.map(kind => <div key={kind} style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-s)"
    }}>
          <h4 style={{
        margin: 0,
        textTransform: "capitalize"
      }}>
            {kind === "default" ? "Default" : kind} Kind
          </h4>
          <Radio name={\`error-\${kind}\`} value="no-error" kind={kind === "default" ? undefined : kind}>
            Normal state
          </Radio>
          <Radio name={\`error-\${kind}\`} value="has-error" kind={kind === "default" ? undefined : kind} hasError>
            With hasError
          </Radio>
          <Radio name={\`error-\${kind}\`} value="with-message" kind={kind === "default" ? undefined : kind} hasError error="This field is required">
            With error message
          </Radio>
        </div>)}
    </div>;
}`,...y.parameters?.docs?.source}}},x=[`Overview`,`Selects`,`RadioGroups`,`FullyControlled`,`AsCard`,`AsInputCard`,`AsCheckmark`,`AsRating`,`ErrorStates`]}))();export{h as AsCard,_ as AsCheckmark,g as AsInputCard,v as AsRating,y as ErrorStates,m as FullyControlled,d as Overview,p as RadioGroups,f as Selects,x as __namedExportsOrder,b as default};