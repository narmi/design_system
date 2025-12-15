import{e,r as p}from"./iframe-C762j3-v.js";import{R as d}from"./index-dhqnOXJl.js";import{c as g}from"./index-RvS1aOr8.js";import"./preload-helper-PPVm8Dsz.js";import"./AsElement-DWQ6Qyat.js";const b=()=>{},o=({kind:t="subdued",onDismiss:a=b,dismissible:s,label:r,testId:u})=>e.createElement("div",{className:g(["nds-typography","nds-tag",`nds-tag--${t}`]),"data-testid":u},e.createElement("div",{className:"whiteSpace--truncate"},r),(s||t==="dismissible")&&e.createElement("div",{className:"narmi-icon-x margin--left--xs",role:"button",tabIndex:0,onClick:a,onKeyUp:({key:m})=>{(m==="Enter"||m==" ")&&a()}}));o.__docgenInfo={description:`A rounded rectangle inline label.
The user has the option of firing a callback for 'dismissible' Tags.`,methods:[],displayName:"Tag",props:{kind:{defaultValue:{value:'"subdued"',computed:!1},description:'Variant of Tag. The "dismissible" kind is deprecated in favor of the dismissible property.',type:{name:"enum",value:[{value:'"subdued"',computed:!1},{value:'"subdued-secondary"',computed:!1},{value:'"dismissible"',computed:!1},{value:'"outline"',computed:!1},{value:'"success"',computed:!1},{value:'"warn"',computed:!1},{value:'"error"',computed:!1}]},required:!1},onDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback for user dismissal action\n(only applicable for `dismissible` kind)",type:{name:"func"},required:!1},dismissible:{description:"Whether the tag is dismissible",type:{name:"bool"},required:!1},label:{description:"Label text of tag.",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};function c(){return c=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var r in s)({}).hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},c.apply(null,arguments)}const f=t=>e.createElement(o,t),T=t=>{const[a,s]=p.useState(!0);return e.createElement("div",null,a?e.createElement(o,c({label:"Label",kind:"dismissible",onDismiss:()=>{s(!1)}},t)):e.createElement("button",{onClick:()=>{s(!0)}},"Make tag come back"))},n=f.bind({});n.args={kind:"subdued",label:"Label"};const l=T.bind({}),i=()=>e.createElement(d,{alignItems:"center",gapSize:"s"},e.createElement(d.Item,{shrink:!0},e.createElement("p",null,"Transfer from Wells Fargo-9876")),e.createElement(d.Item,{shrink:!0},e.createElement(o,{label:"Pending",kind:"outline"})));i.parameters={docs:{description:{story:"The `Tag` is designed to match the height of default body text"}}};const x={title:"Components/Tag",component:o};i.__docgenInfo={description:"",methods:[],displayName:"TagWithText"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <Tag {...args} />",...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [isTagVisible, setTagVisible] = useState(true);
  return <div>
      {isTagVisible ? <Tag label={"Label"} kind={"dismissible"} onDismiss={() => {
      setTagVisible(false);
    }} {...args} /> : <button onClick={() => {
      setTagVisible(true);
    }}>
          Make tag come back
        </button>}
    </div>;
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Row alignItems="center" gapSize="s">
    <Row.Item shrink>
      <p>Transfer from Wells Fargo-9876</p>
    </Row.Item>
    <Row.Item shrink>
      <Tag label="Pending" kind="outline" />
    </Row.Item>
  </Row>`,...i.parameters?.docs?.source}}};const I=["Overview","UsingWithState","TagWithText"];export{n as Overview,i as TagWithText,l as UsingWithState,I as __namedExportsOrder,x as default};
