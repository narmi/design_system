import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-D1Hsg7E_.js";import{n as r,t as i}from"./Row-BVb3vGaB.js";import{n as a,r as o}from"./Button-CbpRoIwf.js";import{n as s,t as c}from"./Popover-JCpYnFmi.js";import{r as l,t as u}from"./Select-Cpd8NjW5.js";import{n as d,t as f}from"./Tooltip-Cbx-41tp.js";import{n as p,t as m}from"./Dialog-DjyyCY-M.js";import{n as h,t as g}from"./Combobox-DQJAgocS.js";import{n as _,t as v}from"./Drawer-xxyh0PxV.js";import{n as y,t as b}from"./ContextMenu-Ds9RYoT_.js";import{n as x,t as S}from"./MenuButton-DDYVmB0p.js";function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(null,arguments)}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;t((()=>{w=e(n()),_(),o(),s(),p(),r(),y(),x(),l(),h(),d(),{expect:T,screen:E,waitFor:D}=__STORYBOOK_MODULE_TEST__,O=[w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Title #1`),w.createElement(`div`,null,`Content #1 of 4`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Title #2`),w.createElement(`div`,null,`Content #2 of 4`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Title #3`),w.createElement(`div`,null,`Content #3 of 4`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Title #4`),w.createElement(`div`,null,`Content #4 of 4`))],k=e=>{let[t,n]=(0,w.useState)(!1);return w.createElement(w.Fragment,null,w.createElement(a,{onClick:()=>{n(!0)}},`Open Drawer`),w.createElement(v,C({},e,{isOpen:t,onUserDismiss:()=>n(!1)}),e.children))},A=e=>{let[t,n]=(0,w.useState)(!1),[r,i]=(0,w.useState)(0);return w.createElement(w.Fragment,null,w.createElement(a,{onClick:()=>{n(!0)}},`Open Drawer`),w.createElement(v,C({},e,{isOpen:t,onUserDismiss:()=>n(!1),onNext:r<O.length-1?()=>i(r+1):null,onPrev:r>0?()=>i(r-1):null}),O[r]))},j=A.bind({}),M={name:`Interaction: Opens on click`,render:()=>w.createElement(A,null),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open drawer/i})),await D(()=>T(E.getByRole(`dialog`)).toBeVisible()),T(E.getByText(`Title #1`)).toBeVisible()}},N={name:`Interaction: Navigates content with controls`,render:()=>w.createElement(A,null),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open drawer/i})),await D(()=>T(E.getByText(`Title #1`)).toBeVisible()),await t.click(E.getByRole(`button`,{name:`Next`})),await D(()=>T(E.getByText(`Title #2`)).toBeVisible()),await t.click(E.getByRole(`button`,{name:`Previous`})),await D(()=>T(E.getByText(`Title #1`)).toBeVisible())}},P={name:`Interaction: Closes via close button`,render:()=>w.createElement(A,null),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open drawer/i})),await D(()=>T(E.getByRole(`dialog`)).toBeVisible()),await t.click(E.getByRole(`button`,{name:`Close`})),await D(()=>T(E.queryByRole(`dialog`)).not.toBeInTheDocument(),{timeout:2e3})}},F={name:`Interaction: Closes on Escape key`,render:()=>w.createElement(A,null),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/open drawer/i})),await D(()=>T(E.getByRole(`dialog`)).toBeVisible()),await t.keyboard(`{Escape}`),await D(()=>T(E.queryByRole(`dialog`)).not.toBeInTheDocument(),{timeout:2e3})}},I=A.bind({}),I.parameters={docs:{description:{story:"The navigation buttons become disabled if the respective `onNext` or `onPrev` props are null. "}}},L=k.bind({}),L.args={showControls:!1,children:w.createElement(w.Fragment,null,w.createElement(`h3`,null,`This content area will become scrollable whenever the content overflows its container`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`))},L.parameters={docs:{description:{story:`The Drawer will render open or closed based on the isOpen prop passed in. Use the onUserDismiss callback to determine when to change the value of isOpen.`}}},R=k.bind({}),R.args={showClose:!1},R.parameters={docs:{description:{story:"The Drawer will hide the close button when `showClose` is set to false."}}},z=k.bind({}),z.args={showControls:!1,children:w.createElement(`div`,{style:{height:`200px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`}},w.createElement(c,{content:w.createElement(`div`,{className:`padding--all--m`},`📦 Any content`)},w.createElement(a,{kind:`secondary`},`Click to show Popover`)))},B=()=>{let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(!1),[i,o]=(0,w.useState)(!1);return w.createElement(w.Fragment,null,w.createElement(a,{onClick:()=>{t(!0)},label:`Open Drawer`}),w.createElement(v,{isOpen:e,onUserDismiss:()=>t(!1)},w.createElement(`div`,{style:{marginBottom:`var(--space-l)`}},w.createElement(a,{label:`Open Dialog with ContextMenu`,onClick:()=>{r(!0)}})),w.createElement(a,{label:`Open Dialog with Select`,onClick:()=>{o(!0)}}),w.createElement(m,{title:`Dialog launched from a Drawer`,isOpen:n,onUserDismiss:()=>{r(!1)}},w.createElement(`p`,null,`Dialog with ContextMenu overlapping a Drawer`),w.createElement(b,{menuItems:[w.createElement(S.Item,{key:`edit`,id:`random-edit-uuid`,label:`Edit`,onSelect:()=>{},startIcon:`edit-2`}),w.createElement(S.Item,{key:`screenshot`,id:`screenshot`,label:`Screenshot`,onSelect:()=>{},startIcon:`camera`})]},w.createElement(`h1`,{style:{border:`1px dashed black`}},`Context Menu`))),w.createElement(m,{title:`Dialog launched from a Drawer`,isOpen:i,onUserDismiss:()=>{o(!1)}},w.createElement(f,{text:`I am a tooltip, which is a tool for tips`},w.createElement(`p`,null,`Dialog with Select overlapping a Drawer`)),w.createElement(u,{id:`overviewStory`,label:`Favorite icon`},w.createElement(u.Item,{value:`coffee`},w.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`),w.createElement(u.Item,{value:`film`},w.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),w.createElement(u.Item,{value:`truck`},w.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),w.createElement(u.Item,{value:`blob`},w.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`)),w.createElement(`br`,null),w.createElement(g,{label:`Select your state`},w.createElement(g.Item,{value:`Alabama`},`Alabama`),w.createElement(g.Item,{value:`Alaska`},`Alaska`)))))},V=e=>{let[t,n]=(0,w.useState)(!1);return w.createElement(w.Fragment,null,w.createElement(a,{onClick:()=>n(!0)},`Open Drawer`),w.createElement(v,C({isOpen:t,onUserDismiss:()=>n(!1),footer:w.createElement(i,{alignItems:`center`,justifyContent:`space-between`},w.createElement(i.Item,{shrink:!0},w.createElement(a,{kind:`negative`,label:`Cancel`})),w.createElement(i.Item,{shrink:!0},w.createElement(a,{kind:`primary`,label:`Save`})))},e),w.createElement(`h3`,null,`This content area will become scrollable whenever the content overflows its container`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`)))},H=()=>{let[e,t]=(0,w.useState)(!1);return w.createElement(w.Fragment,null,w.createElement(a,{onClick:()=>t(!0)},`Open Drawer`),w.createElement(v,{isOpen:e,onUserDismiss:()=>t(!1)},({isVisible:e})=>e?w.createElement(`div`,null,w.createElement(`h2`,null,`Lazy Loaded Content`),w.createElement(`p`,null,`Content that was loaded after the Drawer was opened`)):null))},H.parameters={docs:{description:{story:"The Drawer component accepts a render prop for its children with argument `isVisible`. This can be used to lazy load content or to render content conditionally."}}},U={title:`Components/Drawer`,component:v,parameters:{actions:{argTypesRegex:null}}},B.__docgenInfo={description:``,methods:[],displayName:`ContentWithDialog`},V.__docgenInfo={description:``,methods:[],displayName:`WithFooter`},H.__docgenInfo={description:``,methods:[],displayName:`LazyLoadedContent`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [contentIdxToDisplay, setContentIdxToDisplay] = useState(0);
  const onPrev = () => {
    if (contentIdxToDisplay > 0) return () => setContentIdxToDisplay(contentIdxToDisplay - 1);
    return null;
  };
  const onNext = () => {
    if (contentIdxToDisplay < CONTENTS.length - 1) return () => setContentIdxToDisplay(contentIdxToDisplay + 1);
    return null;
  };
  return <>
      <Button onClick={() => {
      setIsDrawerOpen(true);
    }}>
        Open Drawer
      </Button>
      <Drawer {...args} isOpen={isDrawerOpen} onUserDismiss={() => setIsDrawerOpen(false)} onNext={onNext()} onPrev={onPrev()}>
        {CONTENTS[contentIdxToDisplay]}
      </Drawer>
    </>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Opens on click",
  render: () => <InteractiveTemplate />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /open drawer/i
    }));
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());
    expect(screen.getByText("Title #1")).toBeVisible();
  }
}`,...M.parameters?.docs?.source},description:{story:`Interaction test that opens the Drawer so Chromatic can snapshot the
open panel. The Drawer renders in a portal, so its content is queried
from the document via \`screen\`.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Navigates content with controls",
  render: () => <InteractiveTemplate />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /open drawer/i
    }));
    await waitFor(() => expect(screen.getByText("Title #1")).toBeVisible());

    // advance to the next content
    await userEvent.click(screen.getByRole("button", {
      name: "Next"
    }));
    await waitFor(() => expect(screen.getByText("Title #2")).toBeVisible());

    // go back to the previous content
    await userEvent.click(screen.getByRole("button", {
      name: "Previous"
    }));
    await waitFor(() => expect(screen.getByText("Title #1")).toBeVisible());
  }
}`,...N.parameters?.docs?.source},description:{story:`Interaction test verifying the next/previous controls page through the
Drawer's contents.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Closes via close button",
  render: () => <InteractiveTemplate />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /open drawer/i
    }));
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());
    await userEvent.click(screen.getByRole("button", {
      name: "Close"
    }));
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument(), {
      timeout: 2000
    });
  }
}`,...P.parameters?.docs?.source},description:{story:`Interaction test verifying the close button dismisses the Drawer.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Closes on Escape key",
  render: () => <InteractiveTemplate />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /open drawer/i
    }));
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument(), {
      timeout: 2000
    });
  }
}`,...F.parameters?.docs?.source},description:{story:`Interaction test verifying the Escape key dismisses the Drawer.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [contentIdxToDisplay, setContentIdxToDisplay] = useState(0);
  const onPrev = () => {
    if (contentIdxToDisplay > 0) return () => setContentIdxToDisplay(contentIdxToDisplay - 1);
    return null;
  };
  const onNext = () => {
    if (contentIdxToDisplay < CONTENTS.length - 1) return () => setContentIdxToDisplay(contentIdxToDisplay + 1);
    return null;
  };
  return <>
      <Button onClick={() => {
      setIsDrawerOpen(true);
    }}>
        Open Drawer
      </Button>
      <Drawer {...args} isOpen={isDrawerOpen} onUserDismiss={() => setIsDrawerOpen(false)} onNext={onNext()} onPrev={onPrev()}>
        {CONTENTS[contentIdxToDisplay]}
      </Drawer>
    </>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDrawerOpen(true);
    }}>
        Open Drawer
      </Button>
      <Drawer {...args} isOpen={isDrawerOpen} onUserDismiss={() => setIsDrawerOpen(false)}>
        {args.children}
      </Drawer>
    </>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDrawerOpen(true);
    }}>
        Open Drawer
      </Button>
      <Drawer {...args} isOpen={isDrawerOpen} onUserDismiss={() => setIsDrawerOpen(false)}>
        {args.children}
      </Drawer>
    </>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDrawerOpen(true);
    }}>
        Open Drawer
      </Button>
      <Drawer {...args} isOpen={isDrawerOpen} onUserDismiss={() => setIsDrawerOpen(false)}>
        {args.children}
      </Drawer>
    </>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogWithContextMenuOpen, setIsDialogWithContextMenuOpen] = useState(false);
  const [isDialogWithSelectOpen, setIsDialogWithSelectOpen] = useState(false);
  return <>
      <Button onClick={() => {
      setIsDrawerOpen(true);
    }} label="Open Drawer" />
      <Drawer isOpen={isDrawerOpen} onUserDismiss={() => setIsDrawerOpen(false)}>
        <div style={{
        marginBottom: "var(--space-l)"
      }}>
          <Button label="Open Dialog with ContextMenu" onClick={() => {
          setIsDialogWithContextMenuOpen(true);
        }} />
        </div>

        <Button label="Open Dialog with Select" onClick={() => {
        setIsDialogWithSelectOpen(true);
      }} />

        <Dialog title="Dialog launched from a Drawer" isOpen={isDialogWithContextMenuOpen} onUserDismiss={() => {
        setIsDialogWithContextMenuOpen(false);
      }}>
          <p>Dialog with ContextMenu overlapping a Drawer</p>
          <ContextMenu menuItems={[<MenuButton.Item key="edit" id="random-edit-uuid" label="Edit" onSelect={() => {}} startIcon="edit-2" />, <MenuButton.Item key="screenshot" id="screenshot" label="Screenshot" onSelect={() => {}} startIcon="camera" />]}>
            <h1 style={{
            border: "1px dashed black"
          }}>
              Context Menu
            </h1>
          </ContextMenu>
        </Dialog>
        <Dialog title="Dialog launched from a Drawer" isOpen={isDialogWithSelectOpen} onUserDismiss={() => {
        setIsDialogWithSelectOpen(false);
      }}>
          <Tooltip text="I am a tooltip, which is a tool for tips">
            <p>Dialog with Select overlapping a Drawer</p>
          </Tooltip>

          <Select id="overviewStory" label="Favorite icon">
            <Select.Item value="coffee">
              <span className="narmi-icon-coffee padding--right--xs" /> Coffee
            </Select.Item>
            <Select.Item value="film">
              <span className="narmi-icon-film padding--right--xs" /> Film
            </Select.Item>
            <Select.Item value="truck">
              <span className="narmi-icon-truck padding--right--xs" /> Truck
            </Select.Item>
            <Select.Item value="blob">
              <span className="narmi-icon-blob padding--right--xs" /> Blob
            </Select.Item>
          </Select>
          <br />
          <Combobox label="Select your state">
            <Combobox.Item value="Alabama">Alabama</Combobox.Item>
            <Combobox.Item value="Alaska">Alaska</Combobox.Item>
          </Combobox>
        </Dialog>
      </Drawer>
    </>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return <>
      <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
      <Drawer isOpen={isDrawerOpen} onUserDismiss={() => setIsDrawerOpen(false)} footer={<Row alignItems="center" justifyContent="space-between">
            <Row.Item shrink>
              <Button kind="negative" label="Cancel" />
            </Row.Item>
            <Row.Item shrink>
              <Button kind="primary" label="Save" />
            </Row.Item>
          </Row>} {...args}>
        <h3>
          This content area will become scrollable whenever the content
          overflows its container
        </h3>
        <p>
          Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est
          ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo
          nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero
          est quidem consequatur At voluptatum debitis et laborum ducimus aut
          eaque eligendi.
        </p>
        <p>
          Ut alias eligendi ut dolorem eius rem consectetur ullam et natus
          nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum
          qui quas sapiente in molestiae accusantium.
        </p>
        <p>
          Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
          eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
          voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt
          qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut
          facilis quia?
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est
          ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo
          nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero
          est quidem consequatur At voluptatum debitis et laborum ducimus aut
          eaque eligendi.
        </p>
        <p>
          Ut alias eligendi ut dolorem eius rem consectetur ullam et natus
          nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum
          qui quas sapiente in molestiae accusantium.
        </p>
        <p>
          Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
          eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
          voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt
          qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut
          facilis quia?
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est
          ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo
          nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero
          est quidem consequatur At voluptatum debitis et laborum ducimus aut
          eaque eligendi.
        </p>
        <p>
          Ut alias eligendi ut dolorem eius rem consectetur ullam et natus
          nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum
          qui quas sapiente in molestiae accusantium.
        </p>
        <p>
          Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
          eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
          voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt
          qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut
          facilis quia?
        </p>
      </Drawer>
    </>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return <>
      <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
      <Drawer isOpen={isDrawerOpen} onUserDismiss={() => setIsDrawerOpen(false)}>
        {({
        isVisible
      }) => {
        if (!isVisible) {
          return null;
        }
        return <div>
              <h2>Lazy Loaded Content</h2>
              <p>Content that was loaded after the Drawer was opened</p>
            </div>;
      }}
      </Drawer>
    </>;
}`,...H.parameters?.docs?.source}}},W=[`Overview`,`Opens`,`NavigatesContent`,`ClosesViaButton`,`ClosesViaEscape`,`WithNavigation`,`ScrollingContentWithoutNavigation`,`WithoutClose`,`ContentWithPopover`,`ContentWithDialog`,`WithFooter`,`LazyLoadedContent`]}))();export{P as ClosesViaButton,F as ClosesViaEscape,B as ContentWithDialog,z as ContentWithPopover,H as LazyLoadedContent,N as NavigatesContent,M as Opens,j as Overview,L as ScrollingContentWithoutNavigation,V as WithFooter,I as WithNavigation,R as WithoutClose,W as __namedExportsOrder,U as default};