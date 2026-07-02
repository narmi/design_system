import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-E1S1JOCR.js";import{n as r,t as i}from"./AsElement-QdHAwq4Z.js";import{n as a,t as o}from"./classcat-BMx3V7o4.js";import{n as s,t as c}from"./Row-BPjkXgKU.js";import{r as l,t as u}from"./Count-CFniQKb2.js";var d,f,p,m=e((()=>{d=t(n()),a(),s(),l(),r(),f=[`info`,`success`,`warn`,`error`,`primary`,`secondary`],p=({label:e,kind:t=`primary`,count:n,onDismiss:r,onClick:a,startIcon:s,endIcon:l,hasBorder:f=!1,isLabelVisible:p=!0})=>{let m=typeof a==`function`,h=!m&&typeof r==`function`,g=t===`primary`||t===`secondary`?`theme`:t;return d.createElement(i,{elementType:m?`button`:`div`,onClick:m?a:void 0,type:m?`button`:void 0,"aria-label":p?void 0:e,className:o([`nds-chip`,`fontSize--s`,`nds-chip--${t}`,`fontColor--${t}`,{"button--reset":m,"nds-chip--button":m,"nds-chip--hasBorder":f,"padding--x--xxs":!p}])},d.createElement(c,{alignItems:`center`,gapSize:`xs`},s&&d.createElement(c.Item,{shrink:!0},d.createElement(`span`,{className:o([`nds-chip-icon`,`narmi-icon-${s}`])})),p&&d.createElement(c.Item,{shrink:!0},d.createElement(`div`,{className:`nds-chip-label whiteSpace--truncate`},e)),n&&d.createElement(c.Item,{shrink:!0},d.createElement(u,{kind:g,value:n})),l&&d.createElement(c.Item,{shrink:!0},d.createElement(`span`,{className:o([`nds-chip-icon`,`narmi-icon-${l}`])})),h&&d.createElement(c.Item,{shrink:!0},d.createElement(`button`,{onClick:r,"aria-label":`Remove chip`,className:o([`nds-chip-dismiss`,`nds-chip-icon`,`button--reset`,`fontColor--${t}`])},d.createElement(`span`,{className:`narmi-icon-x`})))))}}));function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(null,arguments)}var g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{g=t(n()),s(),m(),_=e=>g.createElement(p,e),v=_.bind({}),v.args={label:`Label`,onDismiss:()=>{},count:5},y=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`When an `,g.createElement(`code`,null,`onDismiss`),` handler is passed, a close icon will render as a button at the end of the Chip`),g.createElement(p,{label:`Dismissable`,onDismiss:()=>{}})),b=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`When an `,g.createElement(`code`,null,`onClick`),` handler is passed, the entire chip becomes clickable.`),g.createElement(p,{label:`Clickable Chip`,onClick:()=>{}})),x=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`When the `,g.createElement(`code`,null,`hasBorder`)," prop is set to true, a border will be rendered based on the `kind` of the Chip."),g.createElement(p,{kind:`warn`,label:`Bordered`,hasBorder:!0})),S=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`Chip accepts both a `,g.createElement(`code`,null,`startIcon`),` and `,g.createElement(`code`,null,`endIcon`),` prop.`),g.createElement(p,{kind:`info`,label:`Trigger Dropdown`,onClick:()=>{},endIcon:`chevron-down`})),C=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`Chip accepts both a `,g.createElement(`code`,null,`startIcon`),` and `,g.createElement(`code`,null,`endIcon`),` prop.`),g.createElement(p,{kind:`info`,isLabelVisible:!1,onClick:()=>{},endIcon:`zap`})),w=[`anchor`,`wifi`,`sun`,`phone-off`,`moon`,`music`],T=()=>g.createElement(`ul`,{className:`list--reset`},f.map((e,t)=>g.createElement(`li`,{key:`${e}-${t}`,className:`margin--bottom`},g.createElement(c,{alignItems:`center`,gapSize:`xs`},g.createElement(c.Item,{shrink:!0},g.createElement(p,{kind:e,label:`Label`})),g.createElement(c.Item,{shrink:!0},g.createElement(p,{kind:e,label:`Label`,startIcon:w[t]})),g.createElement(c.Item,{shrink:!0},g.createElement(p,{kind:e,label:`Label`,count:`5`})),g.createElement(c.Item,{shrink:!0},g.createElement(p,h({kind:e},v.args))),g.createElement(c.Item,{shrink:!0},g.createElement(`div`,{style:{textTransform:`capitalize`},className:`padding--right--xl`},e)))))),E={title:`Components/Chip`,component:p},y.__docgenInfo={description:``,methods:[],displayName:`WithDismiss`},b.__docgenInfo={description:``,methods:[],displayName:`AsButton`},x.__docgenInfo={description:``,methods:[],displayName:`WithBorder`},S.__docgenInfo={description:``,methods:[],displayName:`CustomIcon`},C.__docgenInfo={description:``,methods:[],displayName:`IconOnly`},T.__docgenInfo={description:``,methods:[],displayName:`Kinds`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Chip {...args} />`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <>
    <p>
      When an <code>onDismiss</code> handler is passed, a close icon will render
      as a button at the end of the Chip
    </p>
    <Chip label="Dismissable" onDismiss={() => {}} />
  </>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <>
    <p>
      When an <code>onClick</code> handler is passed, the entire chip becomes
      clickable.
    </p>
    <Chip label="Clickable Chip" onClick={() => {}} />
  </>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <>
    <p>
      When the <code>hasBorder</code> prop is set to true, a border will be
      rendered based on the \`kind\` of the Chip.
    </p>
    <Chip kind="warn" label="Bordered" hasBorder={true} />
  </>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => <>
    <p>
      Chip accepts both a <code>startIcon</code> and <code>endIcon</code> prop.
    </p>
    <Chip kind="info" label="Trigger Dropdown" onClick={() => {}} endIcon="chevron-down" />
  </>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <>
    <p>
      Chip accepts both a <code>startIcon</code> and <code>endIcon</code> prop.
    </p>
    <Chip kind="info" isLabelVisible={false} onClick={() => {}} endIcon="zap" />
  </>`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => <ul className="list--reset">
    {VALID_KINDS.map((k, i) => <li key={\`\${k}-\${i}\`} className="margin--bottom">
        <Row alignItems="center" gapSize="xs">
          <Row.Item shrink>
            <Chip kind={k} label="Label" />
          </Row.Item>
          <Row.Item shrink>
            <Chip kind={k} label="Label" startIcon={storyIcons[i]} />
          </Row.Item>
          <Row.Item shrink>
            <Chip kind={k} label="Label" count="5" />
          </Row.Item>
          <Row.Item shrink>
            <Chip kind={k} {...Overview.args} />
          </Row.Item>
          <Row.Item shrink>
            <div style={{
          textTransform: "capitalize"
        }} className="padding--right--xl">
              {k}
            </div>
          </Row.Item>
        </Row>
      </li>)}
  </ul>`,...T.parameters?.docs?.source}}},D=[`Overview`,`WithDismiss`,`AsButton`,`WithBorder`,`CustomIcon`,`IconOnly`,`Kinds`]}))();export{b as AsButton,S as CustomIcon,C as IconOnly,T as Kinds,v as Overview,x as WithBorder,y as WithDismiss,D as __namedExportsOrder,E as default};