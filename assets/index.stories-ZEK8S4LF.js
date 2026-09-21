import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-pRI8RQc4.js";import{n as r,t as i}from"./FieldToken-BvJnvvvs.js";var a,o,s,c,l,u,d,f;t((()=>{a=e(n()),r(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c=e=>a.createElement(i,e),l=c.bind({}),l.args={label:`Label`},u={name:`Interaction: Removes token on dismiss`,render:()=>a.createElement(()=>{let[e,t]=(0,a.useState)(!0);return e?a.createElement(i,{label:`Chicago`,onDismiss:()=>t(!1)}):a.createElement(`div`,null,`Token removed`)},null),play:async({canvas:e,userEvent:t})=>{o(e.getByText(`Chicago`)).toBeVisible(),await t.click(e.getByRole(`button`,{name:/remove chicago/i})),await s(()=>o(e.queryByText(`Chicago`)).not.toBeInTheDocument()),o(e.getByText(`Token removed`)).toBeVisible()}},d={title:`Components/FieldToken`,component:i},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <FieldToken {...args} />`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Removes token on dismiss",
  render: () => {
    const Wrapper = () => {
      const [visible, setVisible] = useState(true);
      return visible ? <FieldToken label="Chicago" onDismiss={() => setVisible(false)} /> : <div>Token removed</div>;
    };
    return <Wrapper />;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    expect(canvas.getByText("Chicago")).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: /remove chicago/i
    }));
    await waitFor(() => expect(canvas.queryByText("Chicago")).not.toBeInTheDocument());
    expect(canvas.getByText("Token removed")).toBeVisible();
  }
}`,...u.parameters?.docs?.source},description:{story:"Interaction test verifying the dismiss button fires `onDismiss`,\nremoving the token.",...u.parameters?.docs?.description}}},f=[`Overview`,`Dismisses`]}))();export{u as Dismisses,l as Overview,f as __namedExportsOrder,d as default};