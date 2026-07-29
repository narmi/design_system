import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BtF9CSCi.js";import{n as r,t as i}from"./useBreakpoints-Bc2gGorQ.js";var a,o,s,c=t((()=>{a=e(n()),i(),o=({viewportMatches:e,direction:t,toColumnAt:n,toRowAt:r,reverseAt:i})=>{let a=t;return r&&e[r]&&(a=`row`),n&&e[n]&&(a=`column`),i&&e[i]&&(a=`${a}-reverse`),a},s=({children:e,direction:t=`column`,gapSize:n=`m`,reverseAt:i,toColumnAt:s,toRowAt:c})=>{let l=o({viewportMatches:r(),direction:t,toColumnAt:s,toRowAt:c,reverseAt:i}),u={display:`flex`,flexDirection:l,gap:`var(--space-${n})`,justifyContent:l.includes(`reverse`)?`flex-end`:`flex-start`};return a.createElement(`div`,{className:`nds-responsiveFlex`,style:u},e)}})),l,u,d,f,p;t((()=>{l=e(n()),c(),u={minHeight:`140px`,minWidth:`140px`,fontSize:`56px`},d=e=>l.createElement(`div`,{className:`fontWeight--thin fontColor--white`},l.createElement(s,e,l.createElement(`div`,{style:u,className:`alignChild--center--center bgColor--cactus`},`1`),l.createElement(`div`,{style:u,className:`alignChild--center--center bgColor--moss`},`2`),l.createElement(`div`,{style:u,className:`alignChild--center--center bgColor--pine`},`3`))),d.args={direction:`column`,toRowAt:`m`,toColumnAt:`xl`,reverseAt:`l`},f={title:`Components/ResponsiveFlex`,component:s},d.__docgenInfo={description:``,methods:[],displayName:`Overview`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  return <div className="fontWeight--thin fontColor--white">
      <ResponsiveFlex {...args}>
        <div style={debugStyle} className="alignChild--center--center bgColor--cactus">
          1
        </div>
        <div style={debugStyle} className="alignChild--center--center bgColor--moss">
          2
        </div>
        <div style={debugStyle} className="alignChild--center--center bgColor--pine">
          3
        </div>
      </ResponsiveFlex>
    </div>;
}`,...d.parameters?.docs?.source}}},p=[`Overview`]}))();export{d as Overview,p as __namedExportsOrder,f as default};