import{r as p,e as s}from"./iframe-DQe78WBg.js";import{u as i}from"./index-BULvtSho.js";import{B as c}from"./index-DhAOrH-p.js";import"./preload-helper-PPVm8Dsz.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-RvS1aOr8.js";import"./AsElement-BOfhS4lO.js";import"./index-BC-Fou_T.js";import"./index-CGCj2oKp.js";function a(){return a=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(r[o]=n[o])}return r},a.apply(null,arguments)}const t=()=>{const[r,e]=p.useState(!1),{anchorProps:n,layerProps:o}=i({isOpen:r,setIsOpen:e});return s.createElement(s.Fragment,null,s.createElement(c,a({},n,{onClick:()=>e(!r)}),"Toggle Dropdown"),s.createElement("div",a({},o,{className:"bgColor--white border padding--all--s"}),"Dropdown content"))},y={title:"Hooks/useDropdownLayer",tags:["autodocs","!dev"]};t.__docgenInfo={description:"",methods:[],displayName:"Overview"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const h=["Overview"];export{t as Overview,h as __namedExportsOrder,y as default};
