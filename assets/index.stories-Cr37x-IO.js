import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DQMr4rIs.js";import{n as r,t as i}from"./useOnClickOutside-CApIAwcB.js";import{n as a,t as o}from"./useFocusTrap-Dj04s8A_.js";import{n as s,t as c}from"./useDropdownLayer-CGRcoZxH.js";import{n as l,r as u}from"./Button-BqXI5TAC.js";import{n as d,t as f}from"./Checkbox-CBBMooNE.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(null,arguments)}var m,h,g=t((()=>{m=e(n()),i(),o(),c(),h=({isOpen:e=!1,onUserDismiss:t=()=>{},renderHeader:n,renderFooter:i,isPortalled:o=!1,children:c,testId:l,trigger:u})=>{let{anchorProps:d,layerProps:f}=s({isOpen:e,setIsOpen:t,matchWidth:!1,isPortalled:o,ariaPopupType:`dialog`,alignment:`start`}),h=(0,m.useRef)(null),{trapProps:g}=a({ref:h,isActive:e});r(f.ref,()=>{t()});let _=e=>{e.key===`Escape`&&t()};if((0,m.useEffect)(()=>{if(e)return document.addEventListener(`keydown`,_),()=>{document.removeEventListener(`keydown`,_)}},[e,t]),!e&&!u)return null;let v=u&&m.cloneElement(u,{"aria-haspopup":d[`aria-haspopup`],"aria-expanded":e});return m.createElement(m.Fragment,null,u&&m.createElement(`div`,{ref:d.ref,style:d.style},v),e&&m.createElement(`div`,{ref:f.ref,className:`nds-anchoredDialog`,"data-testid":l,style:f.style},m.createElement(`div`,p({className:`nds-anchoredDialog-inner`,ref:h},g),n&&m.createElement(`div`,{className:`nds-anchoredDialog-header border--bottom`},n()),m.createElement(`div`,{className:`nds-anchoredDialog-content`},c),i&&m.createElement(`div`,{className:`nds-anchoredDialog-footer border--top`},i()))))};try{h.displayName=`AnchoredDialog`,h.__docgenInfo={description:`A dialog component that can anchor to a trigger element.
Supports positioning and z-index customization via layout options.`,displayName:`AnchoredDialog`,filePath:`/home/runner/work/design_system/design_system/src/AnchoredDialog/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Renders the dialog content`,name:`children`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!0,tags:{},type:{name:`ReactNode`}},renderHeader:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Optional header content to render at the top of the dialog`,name:`renderHeader`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`() => ReactNode`}},renderFooter:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Optional footer content to render at the bottom of the dialog`,name:`renderFooter`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`() => ReactNode`}},isOpen:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Controls open/close state of the dialog`,name:`isOpen`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`boolean`}},onUserDismiss:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Callback to handle user dismissing the dialog`,name:`onUserDismiss`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`() => void`}},isPortalled:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Whether the dialog is rendered in a Portal with fixed positioning and higher z-index`,name:`isPortalled`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`boolean`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`string`}},trigger:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Trigger element (button, etc.) that anchors this dialog`,name:`trigger`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`ReactElement<any, string | JSXElementConstructor<any>>`}}},tags:{}}}catch{}}));function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(null,arguments)}var v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{v=e(n()),g(),u(),d(),{expect:y,waitFor:b}=__STORYBOOK_MODULE_TEST__,x=e=>v.createElement(h,e),S=e=>{let[t,n]=(0,v.useState)(!1);return v.createElement(h,_({},e,{isOpen:t,onUserDismiss:()=>n(!1),trigger:v.createElement(l,{onClick:()=>n(!0)},`Open Dialog`),renderFooter:()=>v.createElement(`div`,{style:{textAlign:`right`}},v.createElement(l,{size:`s`,kind:`plain`,onClick:()=>n(!1)},`Close`))}))},C=x.bind({}),C.args={isOpen:!0,renderHeader:()=>v.createElement(`div`,null,`Custom JSX Header`),children:v.createElement(`div`,null,`Dialog content goes here`),renderFooter:()=>v.createElement(`div`,null,`Custom JSX Footer`)},w=S.bind({}),w.args={renderHeader:()=>v.createElement(`div`,null,`Custom JSX Header`),children:v.createElement(`div`,null,`Dialog content goes here`)},T={name:`Interaction: Opens on trigger click`,render:()=>v.createElement(S,w.args),play:async({canvas:e,userEvent:t})=>{y(e.queryByText(`Dialog content goes here`)).not.toBeInTheDocument(),await t.click(e.getByRole(`button`,{name:/open dialog/i})),await b(()=>y(e.getByText(`Dialog content goes here`)).toBeVisible())}},E={name:`Interaction: Closes via footer button`,render:()=>v.createElement(S,w.args),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open dialog/i})),await b(()=>y(e.getByText(`Dialog content goes here`)).toBeVisible()),await t.click(e.getByRole(`button`,{name:/^close$/i})),await b(()=>y(e.queryByText(`Dialog content goes here`)).not.toBeInTheDocument())}},D=e=>{let[t,n]=(0,v.useState)(!1),r=Array.from({length:15},(e,t)=>({id:t,label:`Checklist item ${t+1}`}));return v.createElement(h,_({},e,{isOpen:t,onUserDismiss:()=>n(!1),trigger:v.createElement(l,{onClick:()=>n(!0)},`Open Dialog`),renderFooter:()=>v.createElement(`div`,{style:{textAlign:`right`}},v.createElement(l,{size:`xs`,kind:`secondary`,onClick:()=>n(!1),label:`Apply`}))}),v.createElement(`ul`,{style:{listStyle:`none`,padding:0,margin:0}},r.map(e=>v.createElement(`li`,{key:e.id,style:{marginBottom:`12px`}},v.createElement(f,{label:e.label})))))},O=D.bind({}),O.args={renderHeader:()=>v.createElement(`div`,null,`Select Items`),renderFooter:()=>v.createElement(`div`,null,`Sticky footer`)},k={title:`Components/AnchoredDialog`,component:h},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <AnchoredDialog {...args} />`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <AnchoredDialog {...args} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>} renderFooter={() => <div style={{
    textAlign: "right"
  }}>
          <Button size="s" kind="plain" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>} />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on trigger click",
  render: () => <InteractiveTemplate {...Interactive.args} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    // content is not rendered until the dialog opens
    expect(canvas.queryByText("Dialog content goes here")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: /open dialog/i
    }));
    await waitFor(() => expect(canvas.getByText("Dialog content goes here")).toBeVisible());
  }
}`,...T.parameters?.docs?.source},description:{story:`Interaction test that opens the AnchoredDialog on trigger click so
Chromatic can snapshot the anchored placement.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Closes via footer button",
  render: () => <InteractiveTemplate {...Interactive.args} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /open dialog/i
    }));
    await waitFor(() => expect(canvas.getByText("Dialog content goes here")).toBeVisible());
    await userEvent.click(canvas.getByRole("button", {
      name: /^close$/i
    }));
    await waitFor(() => expect(canvas.queryByText("Dialog content goes here")).not.toBeInTheDocument());
  }
}`,...E.parameters?.docs?.source},description:{story:`Interaction test verifying the dialog closes via its footer button.`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const items = Array.from({
    length: 15
  }, (_, i) => ({
    id: i,
    label: \`Checklist item \${i + 1}\`
  }));
  return <AnchoredDialog {...args} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>} renderFooter={() => <div style={{
    textAlign: "right"
  }}>
          <Button size="xs" kind="secondary" onClick={() => setIsOpen(false)} label="Apply" />
        </div>}>
      <ul style={{
      listStyle: "none",
      padding: 0,
      margin: 0
    }}>
        {items.map(item => <li key={item.id} style={{
        marginBottom: "12px"
      }}>
            <Checkbox label={item.label} />
          </li>)}
      </ul>
    </AnchoredDialog>;
}`,...O.parameters?.docs?.source}}},A=[`Overview`,`Interactive`,`Opens`,`Closes`,`Checklist`]}))();export{O as Checklist,E as Closes,w as Interactive,T as Opens,C as Overview,A as __namedExportsOrder,k as default};