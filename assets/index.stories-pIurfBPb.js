import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BDRfJ9MV.js";import{r,t as i}from"./AsElement-DeQSZAye.js";import{n as a,t as o}from"./classcat-DVVzD5_p.js";import{n as s,t as c}from"./Row-DP6eBM22.js";import{r as l,t as u}from"./Count-CqyDX6Bq.js";var d,f,p,m=t((()=>{d=e(n()),a(),s(),l(),r(),f=[`info`,`success`,`warn`,`error`,`primary`,`secondary`],p=({label:e,kind:t=`primary`,count:n,onDismiss:r,onClick:a,startIcon:s,endIcon:l,hasBorder:f=!1,isLabelVisible:p=!0,isLabelSelectable:m=!1})=>{let h=typeof a==`function`,g=!h&&typeof r==`function`,_=t===`primary`||t===`secondary`?`theme`:t;return d.createElement(i,{elementType:h?`button`:`div`,onClick:h?a:void 0,type:h?`button`:void 0,"aria-label":p?void 0:e,className:o([`nds-chip`,`fontSize--s`,`nds-chip--${t}`,`fontColor--${t}`,{"button--reset":h,"nds-chip--button":h,"nds-chip--hasBorder":f,"padding--x--xxs":!p}])},d.createElement(c,{alignItems:`center`,gapSize:`xs`},s&&d.createElement(c.Item,{shrink:!0},d.createElement(`span`,{className:o([`nds-chip-icon`,`narmi-icon-${s}`])})),p&&d.createElement(c.Item,{shrink:!0},d.createElement(`div`,{className:o([`nds-chip-label`,`whiteSpace--truncate`,{"nds-chip-label--selectable":m}])},e)),n&&d.createElement(c.Item,{shrink:!0},d.createElement(u,{kind:_,value:n})),l&&d.createElement(c.Item,{shrink:!0},d.createElement(`span`,{className:o([`nds-chip-icon`,`narmi-icon-${l}`])})),g&&d.createElement(c.Item,{shrink:!0},d.createElement(`button`,{onClick:r,"aria-label":`Remove chip`,className:o([`nds-chip-dismiss`,`nds-chip-icon`,`button--reset`,`fontColor--${t}`])},d.createElement(`span`,{className:`narmi-icon-x`})))))};try{p.displayName=`Chip`,p.__docgenInfo={description:"Component for rendering status, filters, selection, and more.\nA `Chip` may contain between 0 and 1 click targets - never more.\n\nSupersedes `Tag`.",displayName:`Chip`,filePath:`/home/runner/work/design_system/design_system/src/Chip/index.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:`String to render within chip`,name:`label`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!0,tags:{},type:{name:`string`}},kind:{defaultValue:{value:`primary`},declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:`Variant of Chip`,name:`kind`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!1,tags:{},type:{name:`"info" | "error" | "success" | "warn" | "primary" | "secondary"`}},onDismiss:{defaultValue:null,declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:"When an `onDismiss` handler is passed, the Chip will render a close button",name:`onDismiss`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!1,tags:{},type:{name:`(e: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void`}},onClick:{defaultValue:null,declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:"When an `onClick` handler is passed, renders the entire Chip as a button.\nOVERRIDES `onDismiss` - only one click target per chip is allowed.",name:`onClick`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!1,tags:{},type:{name:`(e: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void`}},startIcon:{defaultValue:null,declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:`Icon by name, rendered at Chip start`,name:`startIcon`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!1,tags:{},type:{name:`IconName`}},endIcon:{defaultValue:null,declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:`Icon by name, rendered at Chip end`,name:`endIcon`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!1,tags:{},type:{name:`IconName`}},count:{defaultValue:null,declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:"Displays a Count after the `label`",name:`count`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!1,tags:{},type:{name:`string | number`}},hasBorder:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:"Adds a border to the badge when `true`",name:`hasBorder`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!1,tags:{},type:{name:`boolean`}},isLabelVisible:{defaultValue:{value:`true`},declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:`Defines if the label is visible`,name:`isLabelVisible`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!1,tags:{},type:{name:`boolean`}},isLabelSelectable:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`}],description:`Allows the label text to be selected/copied when \`true\`. Off by default since Chips are
typically short filter/status tags where accidental text selection is undesirable, but
some Chips (e.g. surfacing an error message) carry content a user may want to copy.`,name:`isLabelSelectable`,parent:{fileName:`design_system/src/Chip/index.tsx`,name:`ChipProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}}));function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(null,arguments)}var g,_,v,y,b,x,S,C,w,T,E,D,O;t((()=>{g=e(n()),s(),m(),_=e=>g.createElement(p,e),v=_.bind({}),v.args={label:`Label`,onDismiss:()=>{},count:5},y=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`When an `,g.createElement(`code`,null,`onDismiss`),` handler is passed, a close icon will render as a button at the end of the Chip`),g.createElement(p,{label:`Dismissable`,onDismiss:()=>{}})),b=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`When an `,g.createElement(`code`,null,`onClick`),` handler is passed, the entire chip becomes clickable.`),g.createElement(p,{label:`Clickable Chip`,onClick:()=>{}})),x=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`When the `,g.createElement(`code`,null,`hasBorder`)," prop is set to true, a border will be rendered based on the `kind` of the Chip."),g.createElement(p,{kind:`warn`,label:`Bordered`,hasBorder:!0})),S=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`By default a Chip's label is not selectable, since Chips are typically short filter/status tags. When the`,` `,g.createElement(`code`,null,`isLabelSelectable`),` prop is set to true, the label text can be selected/copied — useful when a Chip surfaces content like an error message.`),g.createElement(p,{kind:`error`,label:`Selectable error text`,isLabelSelectable:!0})),C=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`Chip accepts both a `,g.createElement(`code`,null,`startIcon`),` and `,g.createElement(`code`,null,`endIcon`),` prop.`),g.createElement(p,{kind:`info`,label:`Trigger Dropdown`,onClick:()=>{},endIcon:`chevron-down`})),w=()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`Chip accepts both a `,g.createElement(`code`,null,`startIcon`),` and `,g.createElement(`code`,null,`endIcon`),` prop.`),g.createElement(p,{kind:`info`,isLabelVisible:!1,onClick:()=>{},endIcon:`zap`})),T=[`anchor`,`wifi`,`sun`,`phone-off`,`moon`,`music`],E=()=>g.createElement(`ul`,{className:`list--reset`},f.map((e,t)=>g.createElement(`li`,{key:`${e}-${t}`,className:`margin--bottom`},g.createElement(c,{alignItems:`center`,gapSize:`xs`},g.createElement(c.Item,{shrink:!0},g.createElement(p,{kind:e,label:`Label`})),g.createElement(c.Item,{shrink:!0},g.createElement(p,{kind:e,label:`Label`,startIcon:T[t]})),g.createElement(c.Item,{shrink:!0},g.createElement(p,{kind:e,label:`Label`,count:`5`})),g.createElement(c.Item,{shrink:!0},g.createElement(p,h({kind:e},v.args))),g.createElement(c.Item,{shrink:!0},g.createElement(`div`,{style:{textTransform:`capitalize`},className:`padding--right--xl`},e)))))),D={title:`Components/Chip`,component:p},y.__docgenInfo={description:``,methods:[],displayName:`WithDismiss`},b.__docgenInfo={description:``,methods:[],displayName:`AsButton`},x.__docgenInfo={description:``,methods:[],displayName:`WithBorder`},S.__docgenInfo={description:``,methods:[],displayName:`SelectableLabel`},C.__docgenInfo={description:``,methods:[],displayName:`CustomIcon`},w.__docgenInfo={description:``,methods:[],displayName:`IconOnly`},E.__docgenInfo={description:``,methods:[],displayName:`Kinds`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Chip {...args} />`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <>
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
      By default a Chip&apos;s label is not selectable, since Chips are
      typically short filter/status tags. When the{" "}
      <code>isLabelSelectable</code> prop is set to true, the label text can be
      selected/copied — useful when a Chip surfaces content like an error
      message.
    </p>
    <Chip kind="error" label="Selectable error text" isLabelSelectable={true} />
  </>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <>
    <p>
      Chip accepts both a <code>startIcon</code> and <code>endIcon</code> prop.
    </p>
    <Chip kind="info" label="Trigger Dropdown" onClick={() => {}} endIcon="chevron-down" />
  </>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <>
    <p>
      Chip accepts both a <code>startIcon</code> and <code>endIcon</code> prop.
    </p>
    <Chip kind="info" isLabelVisible={false} onClick={() => {}} endIcon="zap" />
  </>`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => <ul className="list--reset">
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
  </ul>`,...E.parameters?.docs?.source}}},O=[`Overview`,`WithDismiss`,`AsButton`,`WithBorder`,`SelectableLabel`,`CustomIcon`,`IconOnly`,`Kinds`]}))();export{b as AsButton,C as CustomIcon,w as IconOnly,E as Kinds,v as Overview,S as SelectableLabel,x as WithBorder,y as WithDismiss,O as __namedExportsOrder,D as default};