import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-B5brrW0I.js";import{n as r,t as i}from"./Row-Cap37LTZ.js";import{n as a,t as o}from"./Button-B8GNiJxS.js";import{n as s,t as c}from"./Popover-eE6ZjJEX.js";import{r as l,t as u}from"./Select-D0UEJRcN.js";import{n as d,t as f}from"./Dialog-BWkbUnV7.js";import{n as p,t as m}from"./Combobox-Cm7AfbjT.js";import{n as h,t as g}from"./Drawer-tKWg17I8.js";import{n as _,t as v}from"./ContextMenu-tA1td76j.js";import{n as y,t as b}from"./MenuButton-DLr70Zd_.js";import{n as x,t as S}from"./Tooltip-CFxbKtCE.js";function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(null,arguments)}var w,T,E,D,O,k,A,j,M,N,P,F,I,L;t((()=>{w=e(n()),h(),a(),s(),d(),r(),_(),y(),l(),p(),x(),T=[w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Title #1`),w.createElement(`div`,null,`Content #1 of 4`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Title #2`),w.createElement(`div`,null,`Content #2 of 4`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Title #3`),w.createElement(`div`,null,`Content #3 of 4`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Title #4`),w.createElement(`div`,null,`Content #4 of 4`))],E=e=>{let[t,n]=(0,w.useState)(!1);return w.createElement(w.Fragment,null,w.createElement(o,{onClick:()=>{n(!0)}},`Open Drawer`),w.createElement(g,C({},e,{isOpen:t,onUserDismiss:()=>n(!1)}),e.children))},D=e=>{let[t,n]=(0,w.useState)(!1),[r,i]=(0,w.useState)(0);return w.createElement(w.Fragment,null,w.createElement(o,{onClick:()=>{n(!0)}},`Open Drawer`),w.createElement(g,C({},e,{isOpen:t,onUserDismiss:()=>n(!1),onNext:r<T.length-1?()=>i(r+1):null,onPrev:r>0?()=>i(r-1):null}),T[r]))},O=D.bind({}),k=D.bind({}),k.parameters={docs:{description:{story:"The navigation buttons become disabled if the respective `onNext` or `onPrev` props are null. "}}},A=E.bind({}),A.args={showControls:!1,children:w.createElement(w.Fragment,null,w.createElement(`h3`,null,`This content area will become scrollable whenever the content overflows its container`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`))},A.parameters={docs:{description:{story:`The Drawer will render open or closed based on the isOpen prop passed in. Use the onUserDismiss callback to determine when to change the value of isOpen.`}}},j=E.bind({}),j.args={showClose:!1},j.parameters={docs:{description:{story:"The Drawer will hide the close button when `showClose` is set to false."}}},M=E.bind({}),M.args={showControls:!1,children:w.createElement(`div`,{style:{height:`200px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`}},w.createElement(c,{content:w.createElement(`div`,{className:`padding--all--m`},`📦 Any content`)},w.createElement(o,{kind:`secondary`},`Click to show Popover`)))},N=()=>{let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(!1),[i,a]=(0,w.useState)(!1);return w.createElement(w.Fragment,null,w.createElement(o,{onClick:()=>{t(!0)},label:`Open Drawer`}),w.createElement(g,{isOpen:e,onUserDismiss:()=>t(!1)},w.createElement(`div`,{style:{marginBottom:`var(--space-l)`}},w.createElement(o,{label:`Open Dialog with ContextMenu`,onClick:()=>{r(!0)}})),w.createElement(o,{label:`Open Dialog with Select`,onClick:()=>{a(!0)}}),w.createElement(f,{title:`Dialog launched from a Drawer`,isOpen:n,onUserDismiss:()=>{r(!1)}},w.createElement(`p`,null,`Dialog with ContextMenu overlapping a Drawer`),w.createElement(v,{menuItems:[w.createElement(b.Item,{key:`edit`,id:`random-edit-uuid`,label:`Edit`,onSelect:()=>{},startIcon:`edit-2`}),w.createElement(b.Item,{key:`screenshot`,id:`screenshot`,label:`Screenshot`,onSelect:()=>{},startIcon:`camera`})]},w.createElement(`h1`,{style:{border:`1px dashed black`}},`Context Menu`))),w.createElement(f,{title:`Dialog launched from a Drawer`,isOpen:i,onUserDismiss:()=>{a(!1)}},w.createElement(S,{text:`I am a tooltip, which is a tool for tips`},w.createElement(`p`,null,`Dialog with Select overlapping a Drawer`)),w.createElement(u,{id:`overviewStory`,label:`Favorite icon`},w.createElement(u.Item,{value:`coffee`},w.createElement(`span`,{className:`narmi-icon-coffee padding--right--xs`}),` Coffee`),w.createElement(u.Item,{value:`film`},w.createElement(`span`,{className:`narmi-icon-film padding--right--xs`}),` Film`),w.createElement(u.Item,{value:`truck`},w.createElement(`span`,{className:`narmi-icon-truck padding--right--xs`}),` Truck`),w.createElement(u.Item,{value:`blob`},w.createElement(`span`,{className:`narmi-icon-blob padding--right--xs`}),` Blob`)),w.createElement(`br`,null),w.createElement(m,{label:`Select your state`},w.createElement(m.Item,{value:`Alabama`},`Alabama`),w.createElement(m.Item,{value:`Alaska`},`Alaska`)))))},P=e=>{let[t,n]=(0,w.useState)(!1);return w.createElement(w.Fragment,null,w.createElement(o,{onClick:()=>n(!0)},`Open Drawer`),w.createElement(g,C({isOpen:t,onUserDismiss:()=>n(!1),footer:w.createElement(i,{alignItems:`center`,justifyContent:`space-between`},w.createElement(i.Item,{shrink:!0},w.createElement(o,{kind:`negative`,label:`Cancel`})),w.createElement(i.Item,{shrink:!0},w.createElement(o,{kind:`primary`,label:`Save`})))},e),w.createElement(`h3`,null,`This content area will become scrollable whenever the content overflows its container`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),w.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),w.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),w.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`)))},F=()=>{let[e,t]=(0,w.useState)(!1);return w.createElement(w.Fragment,null,w.createElement(o,{onClick:()=>t(!0)},`Open Drawer`),w.createElement(g,{isOpen:e,onUserDismiss:()=>t(!1)},({isVisible:e})=>e?w.createElement(`div`,null,w.createElement(`h2`,null,`Lazy Loaded Content`),w.createElement(`p`,null,`Content that was loaded after the Drawer was opened`)):null))},F.parameters={docs:{description:{story:"The Drawer component accepts a render prop for its children with argument `isVisible`. This can be used to lazy load content or to render content conditionally."}}},I={title:`Components/Drawer`,component:g,parameters:{actions:{argTypesRegex:null}}},N.__docgenInfo={description:``,methods:[],displayName:`ContentWithDialog`},P.__docgenInfo={description:``,methods:[],displayName:`WithFooter`},F.__docgenInfo={description:``,methods:[],displayName:`LazyLoadedContent`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},L=[`Overview`,`WithNavigation`,`ScrollingContentWithoutNavigation`,`WithoutClose`,`ContentWithPopover`,`ContentWithDialog`,`WithFooter`,`LazyLoadedContent`]}))();export{N as ContentWithDialog,M as ContentWithPopover,F as LazyLoadedContent,O as Overview,A as ScrollingContentWithoutNavigation,P as WithFooter,k as WithNavigation,j as WithoutClose,L as __namedExportsOrder,I as default};