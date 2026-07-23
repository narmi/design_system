import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-1G208DMR.js";import{n as r,t as i}from"./useDropdownLayer-Bnu-ud7_.js";import{n as a,t as o}from"./Button-C2jKooT7.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var c,l,u,d;t((()=>{c=e(n()),i(),a(),l=()=>{let[e,t]=(0,c.useState)(!1),{anchorProps:n,layerProps:i}=r({isOpen:e,setIsOpen:t});return c.createElement(c.Fragment,null,c.createElement(o,s({},n,{onClick:()=>t(!e)}),`Toggle Dropdown`),c.createElement(`div`,s({},i,{className:`bgColor--white border padding--all--s`}),`Dropdown content`))},u={title:`Hooks/useDropdownLayer`,tags:[`autodocs`,`!dev`]},l.__docgenInfo={description:``,methods:[],displayName:`Overview`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    anchorProps,
    layerProps
  } = useDropdownLayer({
    isOpen,
    setIsOpen
  });
  return <>
      <Button {...anchorProps} onClick={() => setIsOpen(!isOpen)}>
        Toggle Dropdown
      </Button>

      <div {...layerProps} className="bgColor--white border padding--all--s">
        Dropdown content
      </div>
    </>;
}`,...l.parameters?.docs?.source}}},d=[`Overview`]}))();export{l as Overview,d as __namedExportsOrder,u as default};