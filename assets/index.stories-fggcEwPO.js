import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BaMbJCVv.js";import{n as r,t as i}from"./Alert-BPB9Zq1P.js";import{n as a,t as o}from"./Button-h46UhkwP.js";import{n as s,t as c}from"./Popover-DVWswYfY.js";import{n as l,t as u}from"./Dialog-BioTzbwC.js";function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(null,arguments)}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{f=e(n()),l(),a(),s(),r(),{expect:p,screen:m,waitFor:h}=__STORYBOOK_MODULE_TEST__,g=e=>f.createElement(u,e),_=e=>{let[t,n]=(0,f.useState)(!1);return f.createElement(f.Fragment,null,f.createElement(o,{onClick:()=>{n(!0)}},`Open Dialog`),f.createElement(u,d({},e,{isOpen:t,onUserDismiss:()=>{n(!1)},footer:f.createElement(`div`,{style:{textAlign:`right`}},f.createElement(o,{onClick:()=>{n(!1)}},`Close Dialog`))})))},v=g.bind({}),v.args={isOpen:!1,title:`Dialog title`,children:f.createElement(`div`,null,`Dialog content`),footer:f.createElement(`div`,{style:{textAlign:`right`}},f.createElement(o,null,`Accept`)),headerStyle:`bordered`,onUserDismiss:()=>{},width:`500px`},v.argTypes={footer:{control:!1}},y=e=>{let[t,n]=(0,f.useState)(!1);return f.createElement(f.Fragment,null,f.createElement(o,{onClick:()=>n(!0)},`Open Dialog`),f.createElement(u,d({},e,{isOpen:t,onUserDismiss:()=>n(!1)}),f.createElement(`div`,null,`Dialog content`)))},b={name:`Interaction: Opens on click`,render:()=>f.createElement(y,{title:`Confirm action`}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open dialog/i})),await h(()=>p(m.getByRole(`dialog`)).toBeVisible()),p(m.getByText(`Confirm action`)).toBeVisible()}},x={name:`Interaction: Closes via close button`,render:()=>f.createElement(y,{title:`Confirm action`}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open dialog/i})),await h(()=>p(m.getByRole(`dialog`)).toBeVisible()),await t.click(m.getByRole(`button`,{name:/^close$/i})),await h(()=>p(m.queryByRole(`dialog`)).not.toBeInTheDocument())}},S={name:`Interaction: Closes on Escape key`,render:()=>f.createElement(y,{title:`Confirm action`}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open dialog/i})),await h(()=>p(m.getByRole(`dialog`)).toBeVisible()),await t.keyboard(`{Escape}`),await h(()=>p(m.queryByRole(`dialog`)).not.toBeInTheDocument())}},C=_.bind({}),C.args={title:`Dialog controlled by external state`,children:f.createElement(`div`,null,`Dialog content`)},C.parameters={docs:{description:{story:"The `Dialog` will render open our closed based on the `isOpen` prop passed in. Use the `onUserDismiss` callback to determine when to change the value of `isOpen`."}}},w=_.bind({}),w.args={title:"This shows how the `title` will look like for the banner header style",headerStyle:`banner`,width:`800px`,children:f.createElement(f.Fragment,null,f.createElement(`h4`,{className:`margin--top--l`},`Lorem ipsum`),f.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),f.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`))},w.parameters={docs:{description:{story:`Works the same way as above, but its title is a banner instead. Note that the width might need to be set to be larger than the default depending on the length of title.`}}},T=_.bind({}),T.args={title:`Resize your window`,children:f.createElement(f.Fragment,null,f.createElement(`p`,null,`This content area will become scrollable whenever the content overflows its container.`),f.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),f.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),f.createElement(`input`,{type:`text`}),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`))},T.parameters={docs:{description:{story:"The `Dialog` will grow in height to fit content until it reaches edges of the viewport, at which point, the content area will become scrollable and a gradient border appears between the footer and content area."}}},E=_.bind({}),E.args={title:`Tab through this Dialog`,children:f.createElement(`div`,null,`Focus will be trapped to`,` `,f.createElement(`a`,{target:`blank`,href:`http://narmi.com`},`focusable elements`),` `,`within the Dialog. Background content is marked as hidden via ARIA attributes.`)},E.parameters={docs:{description:{story:`For accessibility purposes, only elements within the Dialog can be focused while the Dialog is open.`}}},D=()=>{let[e,t]=(0,f.useState)(!1);return f.createElement(f.Fragment,null,f.createElement(`style`,null,`
        .popover-content > div:hover {
          cursor: pointer;
          background-color: rgba(26, 67, 56, 0.05);
        }
        `),f.createElement(c,{closeOnContentClick:!0,content:f.createElement(`div`,{className:`popover-content`},f.createElement(`div`,{className:`padding--all--s`,tabIndex:`0`,role:`button`,onClick:()=>{t(!0)},onKeyDown:()=>{}},`Open Modal`),f.createElement(`div`,{className:`padding--all--s`,tabIndex:`0`,role:`button`,onClick:()=>{},onKeyDown:()=>{}},`Does Nothing`))},f.createElement(`span`,{className:`narmi-icon-more-horizontal`})),f.createElement(u,{isOpen:e,title:`Remove account`,onUserDismiss:()=>{t(!1)}},f.createElement(o,{onClick:()=>{t(!1)}},`Close`)))},O=_.bind({}),O.args={title:`Dialog controlled by external state`,children:f.createElement(`div`,null,`Dialog content`),notification:f.createElement(i,{kind:`error`,isActive:!0},`This alert is pinned to the top of the dialog`)},k={title:`Components/Dialog`,component:u},D.__docgenInfo={description:``,methods:[],displayName:`PopoverDialog`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Dialog {...args} />`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on click",
  render: () => <InteractiveDialog title="Confirm action" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /open dialog/i
    }));
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());
    expect(screen.getByText("Confirm action")).toBeVisible();
  }
}`,...b.parameters?.docs?.source},description:{story:`Interaction test that opens the Dialog so Chromatic can snapshot the
open modal. The Dialog renders in a portal, so its content is queried
from the document via \`screen\`.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Closes via close button",
  render: () => <InteractiveDialog title="Confirm action" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /open dialog/i
    }));
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());
    await userEvent.click(screen.getByRole("button", {
      name: /^close$/i
    }));
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  }
}`,...x.parameters?.docs?.source},description:{story:`Interaction test verifying the close (X) button dismisses the Dialog.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Closes on Escape key",
  render: () => <InteractiveDialog title="Confirm action" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /open dialog/i
    }));
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  }
}`,...S.parameters?.docs?.source},description:{story:`Interaction test verifying the Escape key dismisses the Dialog.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDialogOpen(true);
    }}>
        Open Dialog
      </Button>
      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {
      setIsDialogOpen(false);
    }} footer={<div style={{
      textAlign: "right"
    }}>
            <Button onClick={() => {
        setIsDialogOpen(false);
      }}>
              Close Dialog
            </Button>
          </div>} />
    </>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDialogOpen(true);
    }}>
        Open Dialog
      </Button>
      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {
      setIsDialogOpen(false);
    }} footer={<div style={{
      textAlign: "right"
    }}>
            <Button onClick={() => {
        setIsDialogOpen(false);
      }}>
              Close Dialog
            </Button>
          </div>} />
    </>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDialogOpen(true);
    }}>
        Open Dialog
      </Button>
      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {
      setIsDialogOpen(false);
    }} footer={<div style={{
      textAlign: "right"
    }}>
            <Button onClick={() => {
        setIsDialogOpen(false);
      }}>
              Close Dialog
            </Button>
          </div>} />
    </>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDialogOpen(true);
    }}>
        Open Dialog
      </Button>
      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {
      setIsDialogOpen(false);
    }} footer={<div style={{
      textAlign: "right"
    }}>
            <Button onClick={() => {
        setIsDialogOpen(false);
      }}>
              Close Dialog
            </Button>
          </div>} />
    </>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return <>
      <style>
        {\`
        .popover-content > div:hover {
          cursor: pointer;
          background-color: rgba(26, 67, 56, 0.05);
        }
        \`}
      </style>
      <Popover closeOnContentClick content={<div className="popover-content">
            <div className="padding--all--s" tabIndex="0" role="button" onClick={() => {
        setIsDialogOpen(true);
      }} onKeyDown={() => {}}>
              Open Modal
            </div>
            <div className="padding--all--s" tabIndex="0" role="button" onClick={() => {}} onKeyDown={() => {}}>
              Does Nothing
            </div>
          </div>}>
        <span className="narmi-icon-more-horizontal"></span>
      </Popover>
      <Dialog isOpen={isDialogOpen} title={\`Remove account\`} onUserDismiss={() => {
      setIsDialogOpen(false);
    }}>
        <Button onClick={() => {
        setIsDialogOpen(false);
      }}>
          Close
        </Button>
      </Dialog>
    </>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDialogOpen(true);
    }}>
        Open Dialog
      </Button>
      <Dialog {...args} isOpen={isDialogOpen} onUserDismiss={() => {
      setIsDialogOpen(false);
    }} footer={<div style={{
      textAlign: "right"
    }}>
            <Button onClick={() => {
        setIsDialogOpen(false);
      }}>
              Close Dialog
            </Button>
          </div>} />
    </>;
}`,...O.parameters?.docs?.source}}},A=[`Overview`,`Opens`,`ClosesViaButton`,`ClosesViaEscape`,`UsingWithState`,`BannerType`,`ScrollingContent`,`FocusManagement`,`PopoverDialog`,`WithNotification`]}))();export{w as BannerType,x as ClosesViaButton,S as ClosesViaEscape,E as FocusManagement,b as Opens,v as Overview,D as PopoverDialog,T as ScrollingContent,C as UsingWithState,O as WithNotification,A as __namedExportsOrder,k as default};