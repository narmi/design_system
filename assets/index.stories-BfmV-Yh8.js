import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-J6DUEc5C.js";import{n as r,t as i}from"./Row-CDWigKpT.js";import{n as a,t as o}from"./Radio-bdCM7Lgp.js";var s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{s=t(n()),a(),r(),c=e=>s.createElement(o,e),l=c.bind({}),l.args={name:`overview`,value:`test`,children:s.createElement(s.Fragment,null,`A single Radio input that allows `,s.createElement(`strong`,null,`custom`),` `,s.createElement(`code`,{className:`fontColor--azul`},`JSX`),` labels`)},u=()=>s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-default)`}},s.createElement(o,{name:`frequency`,value:`daily`},`Repeats `,s.createElement(`strong`,null,`Daily`)),s.createElement(o,{name:`frequency`,value:`weekly`},`Repeats `,s.createElement(`strong`,null,`Weekly`)),s.createElement(o,{name:`frequency`,value:`monthly`},`Repeats `,s.createElement(`strong`,null,`Monthly`))),d=()=>{let[e,t]=(0,s.useState)(``);return s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-default)`}},[`daily`,`weekly`].map(n=>s.createElement(o,{key:n,name:`freq`,value:n,onCheck:t,checked:e===n},`Repeats `,s.createElement(`strong`,null,n))))},f=()=>{let[e,t]=(0,s.useState)(``);return s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-s)`,maxWidth:`400px`}},[`option-a`,`option-b`,`option-c`].map(n=>s.createElement(o,{key:n,name:`card-demo`,value:n,kind:`card`,onCheck:t,checked:e===n},`Option `,n.split(`-`)[1].toUpperCase())))},f.parameters={docs:{description:{story:`Card variant displays the radio as a toggleable card with a checkmark icon when selected. Cards include padding, borders, and background color changes on selection.`}}},p=()=>{let[e,t]=(0,s.useState)(``);return s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-s)`,maxWidth:`400px`}},[`complete-myself`,`owner-completes`].map((n,r)=>s.createElement(o,{key:n,name:`input-card-demo`,value:n,kind:`input-card`,onCheck:t,checked:e===n},r===0?`You will complete the form`:`Owner will complete the form`)))},p.parameters={docs:{description:{story:`Input-card variant displays as a card but includes a traditional radio input dot positioned inside the card. This provides extra visual affordance for busy interfaces.`}}},m=()=>{let[e,t]=(0,s.useState)(``);return s.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-s)`,maxWidth:`300px`}},[`Red`,`Blue`,`Green`].map(n=>s.createElement(o,{key:n,name:`checkmark-demo`,value:n,kind:`checkmark`,onCheck:t,checked:e===n},n)))},m.parameters={docs:{description:{story:`Checkmark variant displays with a simple checkmark icon that appears on hover and selection. The layout is reversed with the checkmark on the right side.`}}},h=()=>s.createElement(i,{gapSize:`xs`},[...Array(10)].map((e,t)=>s.createElement(i.Item,{key:t,shrink:!0},s.createElement(o,{name:`rating-demo`,value:(t+1).toString(),kind:`rating`},t+1)))),g=()=>s.createElement(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`var(--space-l)`,maxWidth:`800px`}},[`default`,`card`,`input-card`].map(e=>s.createElement(`div`,{key:e,style:{display:`flex`,flexDirection:`column`,gap:`var(--space-s)`}},s.createElement(`h4`,{style:{margin:0,textTransform:`capitalize`}},e==="default"?`Default`:e,` Kind`),s.createElement(o,{name:`error-${e}`,value:`no-error`,kind:e==="default"?void 0:e},`Normal state`),s.createElement(o,{name:`error-${e}`,value:`has-error`,kind:e==="default"?void 0:e,hasError:!0},`With hasError`),s.createElement(o,{name:`error-${e}`,value:`with-message`,kind:e==="default"?void 0:e,hasError:!0,error:`This field is required`},`With error message`)))),g.parameters={docs:{description:{story:`Demonstrates error states across all Radio kinds. Shows normal state, hasError prop, and error prop with custom message.`}}},_={title:`Components/Radio`,component:o},u.__docgenInfo={description:``,methods:[],displayName:`RadioGroups`},d.__docgenInfo={description:``,methods:[],displayName:`FullyControlled`},f.__docgenInfo={description:``,methods:[],displayName:`AsCard`},p.__docgenInfo={description:``,methods:[],displayName:`AsInputCard`},m.__docgenInfo={description:``,methods:[],displayName:`AsCheckmark`},h.__docgenInfo={description:``,methods:[],displayName:`AsRating`},g.__docgenInfo={description:``,methods:[],displayName:`ErrorStates`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Radio {...args} />`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Row gapSize="xs">
      {[...Array(10)].map((_, index) => <Row.Item key={index} shrink>
          <Radio name="rating-demo" value={(index + 1).toString()} kind="rating">
            {index + 1}
          </Radio>
        </Row.Item>)}
    </Row>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},v=[`Overview`,`RadioGroups`,`FullyControlled`,`AsCard`,`AsInputCard`,`AsCheckmark`,`AsRating`,`ErrorStates`]}))();export{f as AsCard,m as AsCheckmark,p as AsInputCard,h as AsRating,g as ErrorStates,d as FullyControlled,l as Overview,u as RadioGroups,v as __namedExportsOrder,_ as default};