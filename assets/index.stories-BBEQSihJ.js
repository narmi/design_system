import{e,r as g}from"./iframe-CWvcjpEt.js";import{R as c}from"./index-DTa5lqc6.js";import{P as o}from"./index-CLTdY825.js";import{c as b}from"./index-RvS1aOr8.js";import"./preload-helper-PPVm8Dsz.js";import"./AsElement-YuO2GXgf.js";const f=()=>{},r=({kind:s="subdued",onDismiss:t=f,dismissible:a,label:n,testId:p})=>e.createElement("div",{className:b(["nds-typography","nds-tag",`nds-tag--${s}`]),"data-testid":p},e.createElement("div",{className:"whiteSpace--truncate"},n),(a||s==="dismissible")&&e.createElement("div",{className:"narmi-icon-x margin--left--xs",role:"button",tabIndex:0,onClick:t,onKeyUp:({key:u})=>{(u==="Enter"||u==" ")&&t()}}));r.propTypes={kind:o.oneOf(["subdued","subdued-secondary","dismissible","outline","success","warn","error"]),onDismiss:o.func,dismissible:o.bool,label:o.string,testId:o.string};r.__docgenInfo={description:`A rounded rectangle inline label.
The user has the option of firing a callback for 'dismissible' Tags.`,methods:[],displayName:"Tag",props:{kind:{defaultValue:{value:'"subdued"',computed:!1},description:'Variant of Tag. The "dismissible" kind is deprecated in favor of the dismissible property.',type:{name:"enum",value:[{value:'"subdued"',computed:!1},{value:'"subdued-secondary"',computed:!1},{value:'"dismissible"',computed:!1},{value:'"outline"',computed:!1},{value:'"success"',computed:!1},{value:'"warn"',computed:!1},{value:'"error"',computed:!1}]},required:!1},onDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"Callback for user dismissal action\n(only applicable for `dismissible` kind)",type:{name:"func"},required:!1},dismissible:{description:"Whether the tag is dismissible",type:{name:"bool"},required:!1},label:{description:"Label text of tag.",type:{name:"string"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};function m(){return m=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(s[n]=a[n])}return s},m.apply(null,arguments)}const T=s=>e.createElement(r,s),h=s=>{const[t,a]=g.useState(!0);return e.createElement("div",null,t?e.createElement(r,m({label:"Label",kind:"dismissible",onDismiss:()=>{a(!1)}},s)):e.createElement("button",{onClick:()=>{a(!0)}},"Make tag come back"))},l=T.bind({});l.args={kind:"subdued",label:"Label"};const d=h.bind({}),i=()=>e.createElement(c,{alignItems:"center",gapSize:"s"},e.createElement(c.Item,{shrink:!0},e.createElement("p",null,"Transfer from Wells Fargo-9876")),e.createElement(c.Item,{shrink:!0},e.createElement(r,{label:"Pending",kind:"outline"})));i.parameters={docs:{description:{story:"The `Tag` is designed to match the height of default body text"}}};const x={title:"Components/Tag",component:r};i.__docgenInfo={description:"",methods:[],displayName:"TagWithText"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <Tag {...args} />",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Row alignItems="center" gapSize="s">
    <Row.Item shrink>
      <p>Transfer from Wells Fargo-9876</p>
    </Row.Item>
    <Row.Item shrink>
      <Tag label="Pending" kind="outline" />
    </Row.Item>
  </Row>`,...i.parameters?.docs?.source}}};const S=["Overview","UsingWithState","TagWithText"];export{l as Overview,i as TagWithText,d as UsingWithState,S as __namedExportsOrder,x as default};
