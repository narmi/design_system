import{e}from"./iframe-Y1x1tuQU.js";import{c as I}from"./index-RvS1aOr8.js";import{A as k}from"./AsElement-rDk3pDkz.js";import{R as t}from"./index-DBAl-tlK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDnsBicE.js";const a=({label:r,size:n="s",kind:l="primary",initials:i,imgurl:o,linkurl:g})=>{const b=o?{backgroundImage:`url(${o})`,backgroundSize:"cover"}:{},h=!o&&i,f=!o&&!i;return e.createElement(k,{elementType:g?"a":"div",href:g,className:I(["nds-avatar",`nds-avatar--${n}`,`nds-avatar--${l}`,"alignChild--center--center"]),style:b,"aria-label":r},h&&i,f&&e.createElement("span",{className:"narmi-icon-user fontSize--heading3"}))};try{a.displayName="Avatar",a.__docgenInfo={description:"",displayName:"Avatar",props:{label:{defaultValue:null,description:"aria-label for accessibility",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"s"},description:'Fixed height and width of the avatar. Default: "s".',name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'}]}},kind:{defaultValue:{value:"primary"},description:"Style variant of avatar",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tonal"'}]}},initials:{defaultValue:null,description:"String to display in the avatar. If imgurl is provided, this will be ignored.",name:"initials",required:!1,type:{name:"string"}},imgurl:{defaultValue:null,description:"Optional: URL of the image to display in the avatar. If provided, initials will be ignored.",name:"imgurl",required:!1,type:{name:"string"}},linkurl:{defaultValue:null,description:"Optional: URL to navigate to when the avatar is clicked",name:"linkurl",required:!1,type:{name:"string"}}}}}catch{}function v(){return v=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var i in l)({}).hasOwnProperty.call(l,i)&&(r[i]=l[i])}return r},v.apply(null,arguments)}const m=({initials:r="CP",label:n="Christian Paz",...l})=>e.createElement(a,v({initials:r,label:n},l)),c=()=>e.createElement(a,{imgurl:"https://media.licdn.com/dms/image/v2/D4E0BAQHnVTkZjhvlQg/company-logo_200_200/company-logo_200_200/0/1680295112021?e=2147483647&v=beta&t=-4A2TRSHuDiBT_anhoqTULvjXfzVh7_vZApmdXUVzsc",label:"Narmi linked in logo"}),u=()=>e.createElement(a,{initials:"NM",label:"Narmi",linkurl:"https://narmi.com"}),d=()=>e.createElement(a,{kind:"tonal",initials:"NM",label:"Narmi",linkurl:"https://narmi.com"}),s=()=>e.createElement(a,{label:"Narmi"});s.parameters={docs:{description:{story:"Avatar will render a fallback user icon when `initials` or `imgurl` are not passed."}}};const p=()=>e.createElement(e.Fragment,null,e.createElement(t,null,e.createElement(t.Item,null,e.createElement(a,{initials:"xs",label:"extra small",size:"xs"})),e.createElement(t.Item,null,e.createElement(a,{initials:"s",label:"small",size:"s"})),e.createElement(t.Item,null,e.createElement(a,{initials:"m",label:"medium",size:"m"}))),e.createElement(t,{className:"margin--top"},e.createElement(t.Item,null,e.createElement(a,{kind:"tonal",initials:"xs",label:"extra small",size:"xs"})),e.createElement(t.Item,null,e.createElement(a,{kind:"tonal",initials:"s",label:"small",size:"s"})),e.createElement(t.Item,null,e.createElement(a,{kind:"tonal",initials:"m",label:"medium",size:"m"})))),R={title:"Components/Avatar",component:a};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  initials = "CP",
  label = "Christian Paz",
  ...otherProps
}) => {
  return <Avatar initials={initials} label={label} {...otherProps} />;
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Avatar imgurl="https://media.licdn.com/dms/image/v2/D4E0BAQHnVTkZjhvlQg/company-logo_200_200/company-logo_200_200/0/1680295112021?e=2147483647&v=beta&t=-4A2TRSHuDiBT_anhoqTULvjXfzVh7_vZApmdXUVzsc" label="Narmi linked in logo" />;
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Avatar initials="NM" label="Narmi" linkurl="https://narmi.com" />;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Avatar kind="tonal" initials="NM" label="Narmi" linkurl="https://narmi.com" />;
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Avatar label="Narmi" />;
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Row>
        <Row.Item>
          <Avatar initials="xs" label="extra small" size="xs" />
        </Row.Item>
        <Row.Item>
          <Avatar initials="s" label="small" size="s" />
        </Row.Item>
        <Row.Item>
          <Avatar initials="m" label="medium" size="m" />
        </Row.Item>
      </Row>
      <Row className="margin--top">
        <Row.Item>
          <Avatar kind="tonal" initials="xs" label="extra small" size="xs" />
        </Row.Item>
        <Row.Item>
          <Avatar kind="tonal" initials="s" label="small" size="s" />
        </Row.Item>
        <Row.Item>
          <Avatar kind="tonal" initials="m" label="medium" size="m" />
        </Row.Item>
      </Row>
    </>;
}`,...p.parameters?.docs?.source}}};const x=["Overview","WithImage","WithLink","Tonal","WithFallbackIcon","Sizes"];export{m as Overview,p as Sizes,d as Tonal,s as WithFallbackIcon,c as WithImage,u as WithLink,x as __namedExportsOrder,R as default};
