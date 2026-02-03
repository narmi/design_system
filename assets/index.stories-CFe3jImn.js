import{e,r as h}from"./iframe-egc1RhaK.js";import{D as d}from"./index-DjvJNpIe.js";import{B as m}from"./index-CQTyckRH.js";import{P as v}from"./index-DvJw-zp9.js";import{A as f}from"./index-BQmvYhkP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bwvn6IgC.js";import"./index-PF0g2-q8.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-RvS1aOr8.js";import"./index-_ZDHxcKp.js";import"./Combination-BlTato3R.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./inheritsLoose-CWawPfk8.js";import"./CSSTransition-CyhBsjtZ.js";import"./AsElement-CTkMlSz0.js";import"./index-BM68rNZF.js";import"./index-gIFxcf-5.js";import"./dom-D4ygy2Iw.js";function D(){return D=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var g in i)({}).hasOwnProperty.call(i,g)&&(n[g]=i[g])}return n},D.apply(null,arguments)}const b=n=>e.createElement(d,n),p=n=>{const[t,i]=h.useState(!1);return e.createElement(e.Fragment,null,e.createElement(m,{onClick:()=>{i(!0)}},"Open Dialog"),e.createElement(d,D({},n,{isOpen:t,onUserDismiss:()=>{i(!1)},footer:e.createElement("div",{style:{textAlign:"right"}},e.createElement(m,{onClick:()=>{i(!1)}},"Close Dialog"))})))},o=b.bind({});o.args={isOpen:!1,title:"Dialog title",children:e.createElement("div",null,"Dialog content"),footer:e.createElement("div",{style:{textAlign:"right"}},e.createElement(m,null,"Accept")),headerStyle:"bordered",onUserDismiss:()=>{},width:"500px"};o.argTypes={footer:{control:!1}};const s=p.bind({});s.args={title:"Dialog controlled by external state",children:e.createElement("div",null,"Dialog content")};s.parameters={docs:{description:{story:"The `Dialog` will render open our closed based on the `isOpen` prop passed in. Use the `onUserDismiss` callback to determine when to change the value of `isOpen`."}}};const a=p.bind({});a.args={title:"This shows how the `title` will look like for the banner header style",headerStyle:"banner",width:"800px",children:e.createElement(e.Fragment,null,e.createElement("h4",{className:"margin--top--l"},"Lorem ipsum"),e.createElement("p",null,"Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi."),e.createElement("p",null,"Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium."),e.createElement("p",null,"Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?"))};a.parameters={docs:{description:{story:"Works the same way as above, but its title is a banner instead. Note that the width might need to be set to be larger than the default depending on the length of title."}}};const l=p.bind({});l.args={title:"Resize your window",children:e.createElement(e.Fragment,null,e.createElement("p",null,"This content area will become scrollable whenever the content overflows its container."),e.createElement("p",null,"Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est quidem consequatur At voluptatum debitis et laborum ducimus aut eaque eligendi."),e.createElement("p",null,"Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas sapiente in molestiae accusantium."),e.createElement("input",{type:"text"}),e.createElement("p",null,"Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?"),e.createElement("p",null,"Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?"),e.createElement("p",null,"Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?"),e.createElement("p",null,"Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis eveniet deleniti qui sapiente quia At repellendus veritatis. Qui voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis quia?"))};l.parameters={docs:{description:{story:"The `Dialog` will grow in height to fit content until it reaches edges of the viewport, at which point, the content area will become scrollable and a gradient border appears betwen the footer and content area."}}};const r=p.bind({});r.args={title:"Tab through this Dialog",children:e.createElement("div",null,"Focus will be trapped to"," ",e.createElement("a",{target:"blank",href:"http://narmi.com"},"focusable elements")," ","within the Dialog. Background content is marked as hidden via ARIA attributes.")};r.parameters={docs:{description:{story:"For accessibility purposes, only elements within the Dialog can be focused while the Dialog is open."}}};const u=()=>{const[n,t]=h.useState(!1);return e.createElement(e.Fragment,null,e.createElement("style",null,`
        .popover-content > div:hover {
          cursor: pointer;
          background-color: rgba(26, 67, 56, 0.05);
        }
        `),e.createElement(v,{closeOnContentClick:!0,content:e.createElement("div",{className:"popover-content"},e.createElement("div",{className:"padding--all--s",tabIndex:"0",role:"button",onClick:()=>{t(!0)},onKeyDown:()=>{}},"Open Modal"),e.createElement("div",{className:"padding--all--s",tabIndex:"0",role:"button",onClick:()=>{},onKeyDown:()=>{}},"Does Nothing"))},e.createElement("span",{className:"narmi-icon-more-horizontal"})),e.createElement(d,{isOpen:n,title:"Remove account",onUserDismiss:()=>{t(!1)}},e.createElement(m,{onClick:()=>{t(!1)}},"Close")))},c=p.bind({});c.args={title:"Dialog controlled by external state",children:e.createElement("div",null,"Dialog content"),notification:e.createElement(f,{kind:"error",isActive:!0},"This alert is pinned to the top of the dialog")};const K={title:"Components/Dialog",component:d};u.__docgenInfo={description:"",methods:[],displayName:"PopoverDialog"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Dialog {...args} />",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
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
}`,...c.parameters?.docs?.source}}};const M=["Overview","UsingWithState","BannerType","ScrollingContent","FocusManagement","PopoverDialog","WithNotification"];export{a as BannerType,r as FocusManagement,o as Overview,u as PopoverDialog,l as ScrollingContent,s as UsingWithState,c as WithNotification,M as __namedExportsOrder,K as default};
