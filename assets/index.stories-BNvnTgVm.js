import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-D0FPaLQ2.js";import{n as r,t as i}from"./AsElement-B9mPMKmK.js";import{n as a,t as o}from"./classcat-BMx3V7o4.js";import{n as s,t as c}from"./Row-CoAdUw40.js";var l,u,d=e((()=>{l=t(n()),a(),r(),u=({label:e,size:t=`s`,kind:n=`primary`,initials:r,imgurl:a,linkurl:s})=>{let c=a?{backgroundImage:`url(${a})`,backgroundSize:`cover`}:{},u=!a&&r,d=!a&&!r;return l.createElement(i,{elementType:s?`a`:`div`,href:s,className:o([`nds-avatar`,`nds-avatar--${t}`,`nds-avatar--${n}`,`alignChild--center--center`]),style:c,"aria-label":e},u&&r,d&&l.createElement(`span`,{className:`narmi-icon-user fontSize--heading3`}))}}));function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(null,arguments)}var p,m,h,g,_,v,y,b,x;e((()=>{p=t(n()),d(),s(),m=({initials:e=`CP`,label:t=`Christian Paz`,...n})=>p.createElement(u,f({initials:e,label:t},n)),h=()=>p.createElement(u,{imgurl:`https://media.licdn.com/dms/image/v2/D4E0BAQHnVTkZjhvlQg/company-logo_200_200/company-logo_200_200/0/1680295112021?e=2147483647&v=beta&t=-4A2TRSHuDiBT_anhoqTULvjXfzVh7_vZApmdXUVzsc`,label:`Narmi linked in logo`}),g=()=>p.createElement(u,{initials:`NM`,label:`Narmi`,linkurl:`https://narmi.com`}),_=()=>p.createElement(u,{kind:`tonal`,initials:`NM`,label:`Narmi`,linkurl:`https://narmi.com`}),v=()=>p.createElement(u,{label:`Narmi`}),v.parameters={docs:{description:{story:"Avatar will render a fallback user icon when `initials` or `imgurl` are not passed."}}},y=()=>p.createElement(p.Fragment,null,p.createElement(c,null,p.createElement(c.Item,null,p.createElement(u,{initials:`xs`,label:`extra small`,size:`xs`})),p.createElement(c.Item,null,p.createElement(u,{initials:`s`,label:`small`,size:`s`})),p.createElement(c.Item,null,p.createElement(u,{initials:`m`,label:`medium`,size:`m`}))),p.createElement(c,{className:`margin--top`},p.createElement(c.Item,null,p.createElement(u,{kind:`tonal`,initials:`xs`,label:`extra small`,size:`xs`})),p.createElement(c.Item,null,p.createElement(u,{kind:`tonal`,initials:`s`,label:`small`,size:`s`})),p.createElement(c.Item,null,p.createElement(u,{kind:`tonal`,initials:`m`,label:`medium`,size:`m`})))),b={title:`Components/Avatar`,component:u},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  initials = "CP",
  label = "Christian Paz",
  ...otherProps
}) => {
  return <Avatar initials={initials} label={label} {...otherProps} />;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Avatar imgurl="https://media.licdn.com/dms/image/v2/D4E0BAQHnVTkZjhvlQg/company-logo_200_200/company-logo_200_200/0/1680295112021?e=2147483647&v=beta&t=-4A2TRSHuDiBT_anhoqTULvjXfzVh7_vZApmdXUVzsc" label="Narmi linked in logo" />;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Avatar initials="NM" label="Narmi" linkurl="https://narmi.com" />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Avatar kind="tonal" initials="NM" label="Narmi" linkurl="https://narmi.com" />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Avatar label="Narmi" />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},x=[`Overview`,`WithImage`,`WithLink`,`Tonal`,`WithFallbackIcon`,`Sizes`]}))();export{m as Overview,y as Sizes,_ as Tonal,v as WithFallbackIcon,h as WithImage,g as WithLink,x as __namedExportsOrder,b as default};