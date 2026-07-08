import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-CNe7ZBVf.js";import{n as r,t as i}from"./Alert-Bsrg7e_y.js";import{n as a,t as o}from"./Button-CK7Jy6h1.js";import{n as s,t as c}from"./Popover-FmqlMbA5.js";import{n as l,t as u}from"./Dialog-O_VdFJO_.js";function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(null,arguments)}var f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{f=t(n()),l(),a(),s(),r(),p=e=>f.createElement(u,e),m=e=>{let[t,n]=(0,f.useState)(!1);return f.createElement(f.Fragment,null,f.createElement(o,{onClick:()=>{n(!0)}},`Open Dialog`),f.createElement(u,d({},e,{isOpen:t,onUserDismiss:()=>{n(!1)},footer:f.createElement(`div`,{style:{textAlign:`right`}},f.createElement(o,{onClick:()=>{n(!1)}},`Close Dialog`))})))},h=p.bind({}),h.args={isOpen:!1,title:`Dialog title`,children:f.createElement(`div`,null,`Dialog content`),footer:f.createElement(`div`,{style:{textAlign:`right`}},f.createElement(o,null,`Accept`)),headerStyle:`bordered`,onUserDismiss:()=>{},width:`500px`},h.argTypes={footer:{control:!1}},g=m.bind({}),g.args={title:`Dialog controlled by external state`,children:f.createElement(`div`,null,`Dialog content`)},g.parameters={docs:{description:{story:"The `Dialog` will render open our closed based on the `isOpen` prop passed in. Use the `onUserDismiss` callback to determine when to change the value of `isOpen`."}}},_=m.bind({}),_.args={title:"This shows how the `title` will look like for the banner header style",headerStyle:`banner`,width:`800px`,children:f.createElement(f.Fragment,null,f.createElement(`h4`,{className:`margin--top--l`},`Lorem ipsum`),f.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),f.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`))},_.parameters={docs:{description:{story:`Works the same way as above, but its title is a banner instead. Note that the width might need to be set to be larger than the default depending on the length of title.`}}},v=m.bind({}),v.args={title:`Resize your window`,children:f.createElement(f.Fragment,null,f.createElement(`p`,null,`This content area will become scrollable whenever the content overflows its container.`),f.createElement(`p`,null,`Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi.`),f.createElement(`p`,null,`Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium.`),f.createElement(`input`,{type:`text`}),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`),f.createElement(`p`,null,`Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?`))},v.parameters={docs:{description:{story:"The `Dialog` will grow in height to fit content until it reaches edges of the viewport, at which point, the content area will become scrollable and a gradient border appears betwen the footer and content area."}}},y=m.bind({}),y.args={title:`Tab through this Dialog`,children:f.createElement(`div`,null,`Focus will be trapped to`,` `,f.createElement(`a`,{target:`blank`,href:`http://narmi.com`},`focusable elements`),` `,`within the Dialog. Background content is marked as hidden via ARIA attributes.`)},y.parameters={docs:{description:{story:`For accessibility purposes, only elements within the Dialog can be focused while the Dialog is open.`}}},b=()=>{let[e,t]=(0,f.useState)(!1);return f.createElement(f.Fragment,null,f.createElement(`style`,null,`
        .popover-content > div:hover {
          cursor: pointer;
          background-color: rgba(26, 67, 56, 0.05);
        }
        `),f.createElement(c,{closeOnContentClick:!0,content:f.createElement(`div`,{className:`popover-content`},f.createElement(`div`,{className:`padding--all--s`,tabIndex:`0`,role:`button`,onClick:()=>{t(!0)},onKeyDown:()=>{}},`Open Modal`),f.createElement(`div`,{className:`padding--all--s`,tabIndex:`0`,role:`button`,onClick:()=>{},onKeyDown:()=>{}},`Does Nothing`))},f.createElement(`span`,{className:`narmi-icon-more-horizontal`})),f.createElement(u,{isOpen:e,title:`Remove account`,onUserDismiss:()=>{t(!1)}},f.createElement(o,{onClick:()=>{t(!1)}},`Close`)))},x=m.bind({}),x.args={title:`Dialog controlled by external state`,children:f.createElement(`div`,null,`Dialog content`),notification:f.createElement(i,{kind:`error`,isActive:!0},`This alert is pinned to the top of the dialog`)},S={title:`Components/Dialog`,component:u},b.__docgenInfo={description:``,methods:[],displayName:`PopoverDialog`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Dialog {...args} />`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
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
}`,...x.parameters?.docs?.source}}},C=[`Overview`,`UsingWithState`,`BannerType`,`ScrollingContent`,`FocusManagement`,`PopoverDialog`,`WithNotification`]}))();export{_ as BannerType,y as FocusManagement,h as Overview,b as PopoverDialog,v as ScrollingContent,g as UsingWithState,x as WithNotification,C as __namedExportsOrder,S as default};