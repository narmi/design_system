import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-C7Fk7Dgi.js";import{r,t as i}from"./dist-CO6rvTxt.js";import{n as a,t as o}from"./es2015-C64Y1PgI.js";import{n as s,t as c}from"./useDropdownLayer-DGA8Db1r.js";import{n as l,t as u}from"./Button-ChPHr9LD.js";import{n as d,t as f}from"./Checkbox-DsuB-n3g.js";var p,m,h=t((()=>{p=e(n()),i(),a(),c(),m=({isOpen:e=!1,onUserDismiss:t=()=>{},renderHeader:n,renderFooter:i,isPortalled:a=!1,children:c,testId:l,trigger:u})=>{let{anchorProps:d,layerProps:f}=s({isOpen:e,setIsOpen:t,matchWidth:!1,isPortalled:a,ariaPopupType:`dialog`,alignment:`start`});r(f.ref,()=>{t()});let m=e=>{e.key===`Escape`&&t()};if((0,p.useEffect)(()=>{if(e)return document.addEventListener(`keydown`,m),()=>{document.removeEventListener(`keydown`,m)}},[e,t]),!e&&!u)return null;let h=u&&p.cloneElement(u,{"aria-haspopup":d[`aria-haspopup`],"aria-expanded":d[`aria-expanded`]});return p.createElement(p.Fragment,null,u&&p.createElement(`div`,{ref:d.ref,style:d.style},h),e&&p.createElement(`div`,{ref:f.ref,className:`nds-anchoredDialog`,"data-testid":l,style:f.style},p.createElement(o,{returnFocus:!0,autoFocus:!0,className:`nds-anchoredDialog-inner`},n&&p.createElement(`div`,{className:`nds-anchoredDialog-header border--bottom`},n()),p.createElement(`div`,{className:`nds-anchoredDialog-content`},c),i&&p.createElement(`div`,{className:`nds-anchoredDialog-footer border--top`},i()))))};try{m.displayName=`AnchoredDialog`,m.__docgenInfo={description:`A dialog component that can anchor to a trigger element.
Supports positioning and z-index customization via layout options.`,displayName:`AnchoredDialog`,filePath:`/home/runner/work/design_system/design_system/src/AnchoredDialog/index.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Renders the dialog content`,name:`children`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!0,tags:{},type:{name:`ReactNode`}},renderHeader:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Optional header content to render at the top of the dialog`,name:`renderHeader`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`() => ReactNode`}},renderFooter:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Optional footer content to render at the bottom of the dialog`,name:`renderFooter`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`() => ReactNode`}},isOpen:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Controls open/close state of the dialog`,name:`isOpen`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`boolean`}},onUserDismiss:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Callback to handle user dismissing the dialog`,name:`onUserDismiss`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`() => void`}},isPortalled:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Whether the dialog is rendered in a Portal with fixed positioning and higher z-index`,name:`isPortalled`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`boolean`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`string`}},trigger:{defaultValue:null,declarations:[{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`}],description:`Trigger element (button, etc.) that anchors this dialog`,name:`trigger`,parent:{fileName:`design_system/src/AnchoredDialog/index.tsx`,name:`AnchoredDialogProps`},required:!1,tags:{},type:{name:`ReactElement<any, string | JSXElementConstructor<any>>`}}},tags:{}}}catch{}}));function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(null,arguments)}var _,v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{_=e(n()),h(),l(),d(),{expect:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b=e=>_.createElement(m,e),x=e=>{let[t,n]=(0,_.useState)(!1);return _.createElement(m,g({},e,{isOpen:t,onUserDismiss:()=>n(!1),trigger:_.createElement(u,{onClick:()=>n(!0)},`Open Dialog`),renderFooter:()=>_.createElement(`div`,{style:{textAlign:`right`}},_.createElement(u,{size:`s`,kind:`plain`,onClick:()=>n(!1)},`Close`))}))},S=b.bind({}),S.args={isOpen:!0,renderHeader:()=>_.createElement(`div`,null,`Custom JSX Header`),children:_.createElement(`div`,null,`Dialog content goes here`),renderFooter:()=>_.createElement(`div`,null,`Custom JSX Footer`)},C=x.bind({}),C.args={renderHeader:()=>_.createElement(`div`,null,`Custom JSX Header`),children:_.createElement(`div`,null,`Dialog content goes here`)},w={name:`Interaction: Opens on trigger click`,render:()=>_.createElement(x,C.args),play:async({canvas:e,userEvent:t})=>{v(e.queryByText(`Dialog content goes here`)).not.toBeInTheDocument(),await t.click(e.getByRole(`button`,{name:/open dialog/i})),await y(()=>v(e.getByText(`Dialog content goes here`)).toBeVisible())}},T={name:`Interaction: Closes via footer button`,render:()=>_.createElement(x,C.args),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open dialog/i})),await y(()=>v(e.getByText(`Dialog content goes here`)).toBeVisible()),await t.click(e.getByRole(`button`,{name:/^close$/i})),await y(()=>v(e.queryByText(`Dialog content goes here`)).not.toBeInTheDocument())}},E=e=>{let[t,n]=(0,_.useState)(!1),r=Array.from({length:15},(e,t)=>({id:t,label:`Checklist item ${t+1}`}));return _.createElement(m,g({},e,{isOpen:t,onUserDismiss:()=>n(!1),trigger:_.createElement(u,{onClick:()=>n(!0)},`Open Dialog`),renderFooter:()=>_.createElement(`div`,{style:{textAlign:`right`}},_.createElement(u,{size:`xs`,kind:`secondary`,onClick:()=>n(!1),label:`Apply`}))}),_.createElement(`ul`,{style:{listStyle:`none`,padding:0,margin:0}},r.map(e=>_.createElement(`li`,{key:e.id,style:{marginBottom:`12px`}},_.createElement(f,{label:e.label})))))},D=E.bind({}),D.args={renderHeader:()=>_.createElement(`div`,null,`Select Items`),renderFooter:()=>_.createElement(`div`,null,`Sticky footer`)},O={title:`Components/AnchoredDialog`,component:m},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <AnchoredDialog {...args} />`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <AnchoredDialog {...args} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>} renderFooter={() => <div style={{
    textAlign: "right"
  }}>
          <Button size="s" kind="plain" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>} />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Interaction test that opens the AnchoredDialog on trigger click so
Chromatic can snapshot the anchored placement.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`Interaction test verifying the dialog closes via its footer button.`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
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
}`,...D.parameters?.docs?.source}}},k=[`Overview`,`Interactive`,`Opens`,`Closes`,`Checklist`]}))();export{D as Checklist,T as Closes,C as Interactive,w as Opens,S as Overview,k as __namedExportsOrder,O as default};