import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-Bulwfw7W.js";import{n as r,t as i}from"./RadioButtons-DIsGpQzx.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{a=e(n()),r(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c=e=>a.createElement(i,e),l=c.bind({}),l.args={options:{OptionA:`A`,OptionB:`B`,OptionC:`C`},name:`options`},u={name:`Interaction: Selects an option`,render:()=>a.createElement(i,{options:{OptionA:`A`,OptionB:`B`,OptionC:`C`},name:`interaction-options`}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`radio`,{name:/optionb/i});o(n).not.toBeChecked(),await t.click(n),await s(()=>o(n).toBeChecked());let r=e.getByRole(`radio`,{name:/optionc/i});await t.click(r),await s(()=>o(r).toBeChecked()),o(n).not.toBeChecked()}},d={name:`Interaction: Reveals details on selection`,render:()=>a.createElement(i,{options:{OptionA:{value:`A`,details:`Details for option A`},OptionB:{value:`B`,details:`Details for option B`}},name:`interaction-details`,kind:`card`}),play:async({canvas:e,userEvent:t})=>{o(e.queryByText(`Details for option A`)).not.toBeInTheDocument(),await t.click(e.getByRole(`radio`,{name:/optiona/i})),await s(()=>o(e.getByText(`Details for option A`)).toBeVisible())}},f=()=>{let[e,t]=(0,a.useState)();return a.createElement(`div`,{className:`nds-typography`},a.createElement(`h3`,{className:`margin--bottom--l`},` What is your favourite colour? `),a.createElement(i,{options:{Red:`red`,Blue:`blue`,Green:`green`,Yellow:`yellow`},name:`colours`,onChange:e=>{t(e.target.value)}}),a.createElement(`div`,null,e&&`You have selected ${e}`))},p=c.bind({}),p.args={options:{OptionA:`A`,OptionB:`B`,OptionC:`C`},name:`options`,error:`Selection required`},m=()=>{let[e,t]=(0,a.useState)(`blue`);return a.createElement(a.Fragment,null,a.createElement(i,{options:{Red:`red`,Blue:`blue`,Green:`green`,Yellow:`yellow`},name:`colours`,onChange:e=>{t(e.target.value)},value:e}),a.createElement(`div`,{className:`margin--top`},a.createElement(`button`,{onClick:()=>{t(null)}},`Clear selection`)))},m.parameters={docs:{description:{story:"Passing a `value` prop makes the component fully controlled; you must manage the value of `value` with the `onChange` handler. To clear selection, pass `null` or an empty string to `value`."}}},h=c.bind({}),h.args={options:{OptionA:{value:`A`,details:`Option A details. The Option A details are very long and will wrap to the next line. The Option A details are very long and will wrap to the next line.`},OptionB:{value:`B`,details:`Option B details`},OptionC:{value:`C`,details:`Option C details`}},name:`card_options_with_details`},h.parameters={docs:{description:{story:"Renders a radio group styled as a cards. The cards will grow to fill the width of their parent container. Each card can have a `details` property to show additional information when the card is selected."}}},g=c.bind({}),g.args={options:{OptionA:{value:`A`,details:`Option A details. The Option A details are very long and will wrap to the next line. The Option A details are very long and will wrap to the next line.`},OptionB:{value:`B`,details:`Option B details`},OptionC:{value:`C`,details:`Option C details`}},alwaysShowDetails:!0,name:`card_options_with_details`},g.parameters={docs:{description:{story:"Renders a radio group styled as a cards. The cards will grow to fill the width of their parent container. Each card can have a `details` property to show additional information when the card is selected."}}},_=c.bind({}),_.args={options:{OptionA:`A`,OptionB:`B`,OptionC:`C`},name:`card_options`,kind:`checkmark`},_.parameters={docs:{description:{story:`Renders a radio group styled as labels with a checkmark indicating selection`}}},v=c.bind({}),v.args={options:{OptionA:`A`,OptionB:`B`,OptionC:`C`},name:`card_options`,kind:`card`},v.parameters={docs:{description:{story:`Renders a radio group styled as a cards. The cards will grow to fill the width of their parent container.`}}},y=c.bind({}),y.args={alwaysShowDetails:!0,options:{"You will complete the form":{value:`A`,details:`You'll enter all necessary details for this owner.`},"Owner will complete the form":{value:`B`,details:`Enter the owner's name and email and they'll securely input their own information.`}},name:`card_options`,kind:`input-card`},y.parameters={docs:{description:{story:"When radio options are displayed as cards on a busier screen, use `input-card` to render a faux radio input inside a card as an extra affordance, helping the user recognize it as an interactive element."}}},b=c.bind({}),b.args={options:{OptionA:{value:`A`,details:`Option A details. The Option A details are very long and will wrap to the next line. The Option A details are very long and will wrap to the next line.`},OptionB:{value:`B`,details:`Option B details`},OptionC:{value:`C`,details:`Option C details`}},name:`card_options_with_details`,kind:`card`},b.parameters={docs:{description:{story:"Renders a radio group styled as a cards. The cards will grow to fill the width of their parent container. Each card can have a `details` property to show additional information when the card is selected."}}},x=c.bind({}),x.args={options:{OptionA:`A`,OptionB:`B`,OptionC:`C`},name:`row_options`,kind:`row`},x.parameters={docs:{description:{story:`Renders a radio group styled as a row.`}}},S=c.bind({}),S.args={options:{OptionA:{value:`A`,details:`Option A details`},OptionB:{value:`B`,details:`Option B details`},OptionC:{value:`C`,details:`Option C details`}},name:`row_options_with_details`,kind:`row`},S.parameters={docs:{description:{story:"Renders a radio group styled as a row. Each radio button can have a `details` property to show additional information when the radio button is selected."}}},C={title:`Components/RadioButtons`,component:i},f.__docgenInfo={description:``,methods:[],displayName:`Example`},m.__docgenInfo={description:``,methods:[],displayName:`FullyControlled`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Selects an option",
  render: () => <RadioButtons options={{
    OptionA: "A",
    OptionB: "B",
    OptionC: "C"
  }} name="interaction-options" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const optionB = canvas.getByRole("radio", {
      name: /optionb/i
    });
    expect(optionB).not.toBeChecked();
    await userEvent.click(optionB);
    await waitFor(() => expect(optionB).toBeChecked());

    // selecting another option moves the selection
    const optionC = canvas.getByRole("radio", {
      name: /optionc/i
    });
    await userEvent.click(optionC);
    await waitFor(() => expect(optionC).toBeChecked());
    expect(optionB).not.toBeChecked();
  }
}`,...u.parameters?.docs?.source},description:{story:`Interaction test verifying that selecting an option checks its radio
and moves the selection away from any previously selected option.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Reveals details on selection",
  render: () => <RadioButtons options={{
    OptionA: {
      value: "A",
      details: "Details for option A"
    },
    OptionB: {
      value: "B",
      details: "Details for option B"
    }
  }} name="interaction-details" kind="card" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    // details are hidden until an option is selected
    expect(canvas.queryByText("Details for option A")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("radio", {
      name: /optiona/i
    }));
    await waitFor(() => expect(canvas.getByText("Details for option A")).toBeVisible());
  }
}`,...d.parameters?.docs?.source},description:{story:`Interaction test verifying that an option's details are revealed only
once that option is selected.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [color, setColor] = useState();
  return <div className="nds-typography">
      <h3 className="margin--bottom--l"> What is your favourite colour? </h3>
      <RadioButtons options={{
      Red: "red",
      Blue: "blue",
      Green: "green",
      Yellow: "yellow"
    }} name="colours" onChange={e => {
      setColor(e.target.value);
    }} />
      <div>{color && \`You have selected \${color}\`}</div>
    </div>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("blue");
  return <>
      <RadioButtons options={{
      Red: "red",
      Blue: "blue",
      Green: "green",
      Yellow: "yellow"
    }} name="colours" onChange={e => {
      setValue(e.target.value);
    }} value={value} />
      <div className="margin--top">
        <button onClick={() => {
        setValue(null);
      }}>
          Clear selection
        </button>
      </div>
    </>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <RadioButtons {...args} />`,...S.parameters?.docs?.source}}},w=[`Overview`,`Selects`,`RevealsDetails`,`Example`,`ErrorState`,`FullyControlled`,`AsRadioButtonsWithDetails`,`AsRadioButtonsWithDetailsAlwaysShown`,`AsCheckmark`,`AsCard`,`AsCardWithInput`,`AsCardWithDetails`,`AsRow`,`AsRowWithDetails`]}))();export{v as AsCard,b as AsCardWithDetails,y as AsCardWithInput,_ as AsCheckmark,h as AsRadioButtonsWithDetails,g as AsRadioButtonsWithDetailsAlwaysShown,x as AsRow,S as AsRowWithDetails,p as ErrorState,f as Example,m as FullyControlled,l as Overview,d as RevealsDetails,u as Selects,w as __namedExportsOrder,C as default};