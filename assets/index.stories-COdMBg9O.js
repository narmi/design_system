import{r as p,e as s}from"./iframe-DxB44bOA.js";import{u as i}from"./index-BoMkS0d5.js";import{B as c}from"./index-DZSPUIIh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-DslpDmhl.js";import"./index-DP_XItfu.js";import"./index-BDQtPaWv.js";import"./index-CzHB0EJU.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(null,arguments)}const t=()=>{const[e,r]=p.useState(!1),{anchorProps:n,layerProps:o}=i({isOpen:e});return s.createElement(s.Fragment,null,s.createElement(c,a({},n,{onClick:()=>r(!e)}),"Toggle Dropdown"),s.createElement("div",a({},o,{className:"bgColor--white border padding--all--s"}),"Dropdown content"))},y={title:"Hooks/useDropdownLayer",tags:["autodocs","!dev"]};t.__docgenInfo={description:"",methods:[],displayName:"Overview"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    anchorProps,
    layerProps
  } = useDropdownLayer({
    isOpen
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
