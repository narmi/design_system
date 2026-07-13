import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-Bq-TlzUC.js";import{n as r,t as i}from"./Alert-DhRRjGTM.js";var a,o,s,c,l,u,d;e((()=>{a=t(n()),r(),o=e=>a.createElement(i,e),s=o.bind({}),s.args={isActive:!0,children:a.createElement(`span`,null,`I like turtles. Turtles are good. I like turtles. Turtles are good.`)},c=()=>{let[e,t]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(`div`,{className:`margin--bottom`},a.createElement(i,{kind:`success`,isActive:e,onUserDismiss:()=>{t(!1)}},`You can dismiss this alert!`)),!e&&a.createElement(`button`,{onClick:()=>{t(!0)}},`Show alert again`))},c.parameters={docs:{description:{story:"Visibility of an alert should be controlled by the `isActive` prop instead of conditional rendering. This enables every `Alert` to be announced when it becomes active via an `aria-live` region."}}},l=o.bind({}),l.args={isActive:!0,kind:`error`,isDismissable:!1,children:a.createElement(`span`,null,`The user can not dismiss this Alert when `,a.createElement(`code`,null,`isDismissable`),` is set to `,a.createElement(`code`,null,`false`))},u={title:`Components/Alert`,component:i},c.__docgenInfo={description:``,methods:[],displayName:`ControllingVisibility`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <Alert {...args} />`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [isActive, setIsActive] = useState(true);
  return <>
      <div className="margin--bottom">
        <Alert kind="success" isActive={isActive} onUserDismiss={() => {
        setIsActive(false);
      }}>
          You can dismiss this alert!
        </Alert>
      </div>
      {!isActive && <button onClick={() => {
      setIsActive(true);
    }}>
          Show alert again
        </button>}
    </>;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Alert {...args} />`,...l.parameters?.docs?.source}}},d=[`Overview`,`ControllingVisibility`,`WithoutDismiss`]}))();export{c as ControllingVisibility,s as Overview,l as WithoutDismiss,d as __namedExportsOrder,u as default};