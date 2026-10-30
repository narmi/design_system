import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BZG9rCTm.js";import{i as r,n as i,r as a,t as o}from"./useDismiss-DjI6Q99z.js";import{n as s,t as c}from"./useFocusTrap-6Nqggc55.js";import{n as l,t as u}from"./useDropdownLayer-Dlrkqw4r.js";import{n as d,r as f}from"./Button-Dbdw2zw_.js";import{n as p,t as m}from"./Checkbox-BPUEegmM.js";function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(null,arguments)}var g,_,v=t((()=>{g=e(n()),a(),o(),c(),u(),_=({isOpen:e=!1,onUserDismiss:t=()=>{},renderHeader:n,renderFooter:a,isPortalled:o=!1,children:c,testId:u,trigger:d})=>{let{anchorProps:f,layerProps:p}=l({isOpen:e,setIsOpen:t,matchWidth:!1,isPortalled:o,ariaPopupType:`dialog`,alignment:`start`}),m=(0,g.useRef)(null),{trapProps:_}=s({ref:m,isActive:e});if(i({isOpen:e,onDismiss:()=>t()}),r(p.ref,()=>{t()}),!e&&!d)return null;let v=d&&g.cloneElement(d,{"aria-haspopup":f[`aria-haspopup`],"aria-expanded":e});return g.createElement(g.Fragment,null,d&&g.createElement(`div`,{ref:f.ref,style:f.style},v),e&&g.createElement(`div`,{ref:p.ref,className:`nds-anchoredDialog`,"data-testid":u,style:p.style},g.createElement(`div`,h({className:`nds-anchoredDialog-inner`,ref:m},_),n&&g.createElement(`div`,{className:`nds-anchoredDialog-header border--bottom`},n()),g.createElement(`div`,{className:`nds-anchoredDialog-content`},c),a&&g.createElement(`div`,{className:`nds-anchoredDialog-footer border--top`},a()))))};try{_.displayName=`AnchoredDialog`,_.__docgenInfo={description:`A dialog component that can anchor to a trigger element.
Supports positioning and z-index customization via layout options.`,displayName:`AnchoredDialog`,filePath:`/home/runner/work/design_system/design_system/src/AnchoredDialog/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Renders the dialog content`,name:`children`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!0,tags:{},type:{name:`ReactNode`}},renderHeader:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Optional header content to render at the top of the dialog`,name:`renderHeader`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`() => ReactNode`}},renderFooter:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Optional footer content to render at the bottom of the dialog`,name:`renderFooter`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`() => ReactNode`}},isOpen:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Controls open/close state of the dialog`,name:`isOpen`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`boolean`}},onUserDismiss:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Callback to handle user dismissing the dialog`,name:`onUserDismiss`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`() => void`}},isPortalled:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Whether the dialog is rendered in a Portal with fixed positioning and higher z-index`,name:`isPortalled`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`boolean`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`string`}},trigger:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Trigger element (button, etc.) that anchors this dialog`,name:`trigger`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`ReactElement<any, string | JSXElementConstructor<any>>`}}},tags:{}}}catch{}}));function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}var b,x,S,C,w,T,E,D,O,k,A,j,M;t((()=>{b=e(n()),v(),f(),p(),{expect:x,waitFor:S}=__STORYBOOK_MODULE_TEST__,C=e=>b.createElement(_,e),w=e=>{let[t,n]=(0,b.useState)(!1);return b.createElement(_,y({},e,{isOpen:t,onUserDismiss:()=>n(!1),trigger:b.createElement(d,{onClick:()=>n(!0)},`Open Dialog`),renderFooter:()=>b.createElement(`div`,{style:{textAlign:`right`}},b.createElement(d,{size:`s`,kind:`plain`,onClick:()=>n(!1)},`Close`))}))},T=C.bind({}),T.args={isOpen:!0,renderHeader:()=>b.createElement(`div`,null,`Custom JSX Header`),children:b.createElement(`div`,null,`Dialog content goes here`),renderFooter:()=>b.createElement(`div`,null,`Custom JSX Footer`)},E=w.bind({}),E.args={renderHeader:()=>b.createElement(`div`,null,`Custom JSX Header`),children:b.createElement(`div`,null,`Dialog content goes here`)},D={name:`Interaction: Opens on trigger click`,render:()=>b.createElement(w,E.args),play:async({canvas:e,userEvent:t})=>{x(e.queryByText(`Dialog content goes here`)).not.toBeInTheDocument(),await t.click(e.getByRole(`button`,{name:/open dialog/i})),await S(()=>x(e.getByText(`Dialog content goes here`)).toBeVisible())}},O={name:`Interaction: Closes via footer button`,render:()=>b.createElement(w,E.args),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open dialog/i})),await S(()=>x(e.getByText(`Dialog content goes here`)).toBeVisible()),await t.click(e.getByRole(`button`,{name:/^close$/i})),await S(()=>x(e.queryByText(`Dialog content goes here`)).not.toBeInTheDocument())}},k=e=>{let[t,n]=(0,b.useState)(!1),r=Array.from({length:15},(e,t)=>({id:t,label:`Checklist item ${t+1}`}));return b.createElement(_,y({},e,{isOpen:t,onUserDismiss:()=>n(!1),trigger:b.createElement(d,{onClick:()=>n(!0)},`Open Dialog`),renderFooter:()=>b.createElement(`div`,{style:{textAlign:`right`}},b.createElement(d,{size:`xs`,kind:`secondary`,onClick:()=>n(!1),label:`Apply`}))}),b.createElement(`ul`,{style:{listStyle:`none`,padding:0,margin:0}},r.map(e=>b.createElement(`li`,{key:e.id,style:{marginBottom:`12px`}},b.createElement(m,{label:e.label})))))},A=k.bind({}),A.args={renderHeader:()=>b.createElement(`div`,null,`Select Items`),renderFooter:()=>b.createElement(`div`,null,`Sticky footer`)},j={title:`Components/AnchoredDialog`,component:_},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <AnchoredDialog {...args} />`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <AnchoredDialog {...args} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>} renderFooter={() => <div style={{
    textAlign: "right"
  }}>
          <Button size="s" kind="plain" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>} />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Interaction test that opens the AnchoredDialog on trigger click so
Chromatic can snapshot the anchored placement.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Interaction test verifying the dialog closes via its footer button.`,...O.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
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
}`,...A.parameters?.docs?.source}}},M=[`Overview`,`Interactive`,`Opens`,`Closes`,`Checklist`]}))();export{A as Checklist,O as Closes,E as Interactive,D as Opens,T as Overview,M as __namedExportsOrder,j as default};