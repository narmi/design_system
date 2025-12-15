import{e,r as h}from"./iframe-C762j3-v.js";import{R as t}from"./index-BYh3Q6aQ.js";import{R as y}from"./index-dhqnOXJl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./index-W8RWD5jo.js";import"./AsElement-DWQ6Qyat.js";const f=n=>e.createElement(t,n),c=f.bind({});c.args={name:"overview",value:"test",children:e.createElement(e.Fragment,null,"A single Radio input that allows ",e.createElement("strong",null,"custom")," ",e.createElement("code",{className:"fontColor--azul"},"JSX")," labels")};const m=()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-default)"}},e.createElement(t,{name:"frequency",value:"daily"},"Repeats ",e.createElement("strong",null,"Daily")),e.createElement(t,{name:"frequency",value:"weekly"},"Repeats ",e.createElement("strong",null,"Weekly")),e.createElement(t,{name:"frequency",value:"monthly"},"Repeats ",e.createElement("strong",null,"Monthly"))),p=()=>{const n="freq",[a,r]=h.useState("");return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-default)"}},["daily","weekly"].map(s=>e.createElement(t,{key:s,name:n,value:s,onCheck:r,checked:a===s},"Repeats ",e.createElement("strong",null,s))))},o=()=>{const[n,a]=h.useState("");return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-s)",maxWidth:"400px"}},["option-a","option-b","option-c"].map(r=>e.createElement(t,{key:r,name:"card-demo",value:r,kind:"card",onCheck:a,checked:n===r},"Option ",r.split("-")[1].toUpperCase())))};o.parameters={docs:{description:{story:"Card variant displays the radio as a toggleable card with a checkmark icon when selected. Cards include padding, borders, and background color changes on selection."}}};const l=()=>{const[n,a]=h.useState("");return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-s)",maxWidth:"400px"}},["complete-myself","owner-completes"].map((r,s)=>e.createElement(t,{key:r,name:"input-card-demo",value:r,kind:"input-card",onCheck:a,checked:n===r},s===0?"You will complete the form":"Owner will complete the form")))};l.parameters={docs:{description:{story:"Input-card variant displays as a card but includes a traditional radio input dot positioned inside the card. This provides extra visual affordance for busy interfaces."}}};const d=()=>{const[n,a]=h.useState("");return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-s)",maxWidth:"300px"}},["Red","Blue","Green"].map(r=>e.createElement(t,{key:r,name:"checkmark-demo",value:r,kind:"checkmark",onCheck:a,checked:n===r},r)))};d.parameters={docs:{description:{story:"Checkmark variant displays with a simple checkmark icon that appears on hover and selection. The layout is reversed with the checkmark on the right side."}}};const u=()=>e.createElement(y,{gapSize:"xs"},[...Array(10)].map((n,a)=>e.createElement(y.Item,{key:a,shrink:!0},e.createElement(t,{name:"rating-demo",value:(a+1).toString(),kind:"rating"},a+1)))),i=()=>{const n=["default","card","input-card"];return e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--space-l)",maxWidth:"800px"}},n.map(a=>e.createElement("div",{key:a,style:{display:"flex",flexDirection:"column",gap:"var(--space-s)"}},e.createElement("h4",{style:{margin:0,textTransform:"capitalize"}},a==="default"?"Default":a," Kind"),e.createElement(t,{name:`error-${a}`,value:"no-error",kind:a==="default"?void 0:a},"Normal state"),e.createElement(t,{name:`error-${a}`,value:"has-error",kind:a==="default"?void 0:a,hasError:!0},"With hasError"),e.createElement(t,{name:`error-${a}`,value:"with-message",kind:a==="default"?void 0:a,hasError:!0,error:"This field is required"},"With error message"))))};i.parameters={docs:{description:{story:"Demonstrates error states across all Radio kinds. Shows normal state, hasError prop, and error prop with custom message."}}};const w={title:"Components/Radio",component:t};m.__docgenInfo={description:"",methods:[],displayName:"RadioGroups"};p.__docgenInfo={description:"",methods:[],displayName:"FullyControlled"};o.__docgenInfo={description:"",methods:[],displayName:"AsCard"};l.__docgenInfo={description:"",methods:[],displayName:"AsInputCard"};d.__docgenInfo={description:"",methods:[],displayName:"AsCheckmark"};u.__docgenInfo={description:"",methods:[],displayName:"AsRating"};i.__docgenInfo={description:"",methods:[],displayName:"ErrorStates"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <Radio {...args} />",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Row gapSize="xs">
      {[...Array(10)].map((_, index) => <Row.Item key={index} shrink>
          <Radio name="rating-demo" value={(index + 1).toString()} kind="rating">
            {index + 1}
          </Radio>
        </Row.Item>)}
    </Row>;
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const C=["Overview","RadioGroups","FullyControlled","AsCard","AsInputCard","AsCheckmark","AsRating","ErrorStates"];export{o as AsCard,d as AsCheckmark,l as AsInputCard,u as AsRating,i as ErrorStates,p as FullyControlled,c as Overview,m as RadioGroups,C as __namedExportsOrder,w as default};
