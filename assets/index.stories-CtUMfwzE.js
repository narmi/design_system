import{r as p,e as t}from"./iframe-CNTuh7st.js";import{u as i}from"./index-B1OfU0O1.js";import{B as c}from"./index-D3F_iNdt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-CfiOa8X9.js";import"./index-B3wedqNW.js";import"./index-tIaVPSBG.js";function a(){return a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},a.apply(null,arguments)}const s=()=>{const[n,e]=p.useState(!1),{anchorProps:r,layerProps:o}=i({isOpen:n,setIsOpen:e});return t.createElement(t.Fragment,null,t.createElement(c,a({},r,{onClick:()=>e(!n)}),"Toggle Dropdown"),t.createElement("div",a({},o,{className:"bgColor--white border padding--all--s"}),"Dropdown content"))},f={title:"Hooks/useDropdownLayer",tags:["autodocs","!dev"]};s.__docgenInfo={description:"",methods:[],displayName:"Overview"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const y=["Overview"];export{s as Overview,y as __namedExportsOrder,f as default};
