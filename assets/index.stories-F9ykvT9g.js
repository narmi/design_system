import{e,r as c}from"./iframe-C3nPEcQ0.js";import{A as n}from"./index-C7QJx7Hd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./index-z6idFDj1.js";import"./AsElement-Dw3joSjZ.js";import"./index-BALe7Hct.js";const a=i=>e.createElement(n,i),s=a.bind({});s.args={isActive:!0,children:e.createElement("span",null,"I like turtles. Turtles are good. I like turtles. Turtles are good.")};const t=()=>{const[i,o]=c.useState(!0);return e.createElement(e.Fragment,null,e.createElement("div",{className:"margin--bottom"},e.createElement(n,{kind:"success",isActive:i,onUserDismiss:()=>{o(!1)}},"You can dismiss this alert!")),!i&&e.createElement("button",{onClick:()=>{o(!0)}},"Show alert again"))};t.parameters={docs:{description:{story:"Visibility of an alert should be controlled by the `isActive` prop instead of conditional rendering. This enables every `Alert` to be announced when it becomes active via an `aria-live` region."}}};const r=a.bind({});r.args={isActive:!0,kind:"error",isDismissable:!1,children:e.createElement("span",null,"The user can not dismiss this Alert when ",e.createElement("code",null,"isDismissable")," is set to ",e.createElement("code",null,"false"))};const A={title:"Components/Alert",component:n};t.__docgenInfo={description:"",methods:[],displayName:"ControllingVisibility"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <Alert {...args} />",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Alert {...args} />",...r.parameters?.docs?.source}}};const b=["Overview","ControllingVisibility","WithoutDismiss"];export{t as ControllingVisibility,s as Overview,r as WithoutDismiss,b as __namedExportsOrder,A as default};
