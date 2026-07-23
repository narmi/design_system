import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-B5brrW0I.js";import{r,t as i}from"./dist-CVI7hxSl.js";import{n as a,t as o}from"./es2015-COPA1Jiv.js";import{n as s,t as c}from"./useDropdownLayer-BSsR8YPd.js";import{n as l,t as u}from"./Button-B8GNiJxS.js";import{n as d,t as f}from"./Checkbox-C1FjKUtw.js";var p,m,h=t((()=>{p=e(n()),i(),a(),c(),m=({isOpen:e=!1,onUserDismiss:t=()=>{},renderHeader:n,renderFooter:i,isPortalled:a=!1,children:c,testId:l,trigger:u})=>{let{anchorProps:d,layerProps:f}=s({isOpen:e,setIsOpen:t,matchWidth:!1,isPortalled:a,ariaPopupType:`dialog`,alignment:`start`});r(f.ref,()=>{t()});let m=e=>{e.key===`Escape`&&t()};if((0,p.useEffect)(()=>{if(e)return document.addEventListener(`keydown`,m),()=>{document.removeEventListener(`keydown`,m)}},[e,t]),!e&&!u)return null;let h=u&&p.cloneElement(u,{"aria-haspopup":d[`aria-haspopup`],"aria-expanded":d[`aria-expanded`]});return p.createElement(p.Fragment,null,u&&p.createElement(`div`,{ref:d.ref,style:d.style},h),e&&p.createElement(`div`,{ref:f.ref,className:`nds-anchoredDialog`,"data-testid":l,style:f.style},p.createElement(o,{returnFocus:!0,autoFocus:!0,className:`nds-anchoredDialog-inner`},n&&p.createElement(`div`,{className:`nds-anchoredDialog-header border--bottom`},n()),p.createElement(`div`,{className:`nds-anchoredDialog-content`},c),i&&p.createElement(`div`,{className:`nds-anchoredDialog-footer border--top`},i()))))}}));function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(null,arguments)}var _,v,y,b,x,S,C,w,T;t((()=>{_=e(n()),h(),l(),d(),v=e=>_.createElement(m,e),y=e=>{let[t,n]=(0,_.useState)(!1);return _.createElement(m,g({},e,{isOpen:t,onUserDismiss:()=>n(!1),trigger:_.createElement(u,{onClick:()=>n(!0)},`Open Dialog`),renderFooter:()=>_.createElement(`div`,{style:{textAlign:`right`}},_.createElement(u,{size:`s`,kind:`plain`,onClick:()=>n(!1)},`Close`))}))},b=v.bind({}),b.args={isOpen:!0,renderHeader:()=>_.createElement(`div`,null,`Custom JSX Header`),children:_.createElement(`div`,null,`Dialog content goes here`),renderFooter:()=>_.createElement(`div`,null,`Custom JSX Footer`)},x=y.bind({}),x.args={renderHeader:()=>_.createElement(`div`,null,`Custom JSX Header`),children:_.createElement(`div`,null,`Dialog content goes here`)},S=e=>{let[t,n]=(0,_.useState)(!1),r=Array.from({length:15},(e,t)=>({id:t,label:`Checklist item ${t+1}`}));return _.createElement(m,g({},e,{isOpen:t,onUserDismiss:()=>n(!1),trigger:_.createElement(u,{onClick:()=>n(!0)},`Open Dialog`),renderFooter:()=>_.createElement(`div`,{style:{textAlign:`right`}},_.createElement(u,{size:`xs`,kind:`secondary`,onClick:()=>n(!1),label:`Apply`}))}),_.createElement(`ul`,{style:{listStyle:`none`,padding:0,margin:0}},r.map(e=>_.createElement(`li`,{key:e.id,style:{marginBottom:`12px`}},_.createElement(f,{label:e.label})))))},C=S.bind({}),C.args={renderHeader:()=>_.createElement(`div`,null,`Select Items`),renderFooter:()=>_.createElement(`div`,null,`Sticky footer`)},w={title:`Components/AnchoredDialog`,component:m},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <AnchoredDialog {...args} />`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <AnchoredDialog {...args} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)} trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>} renderFooter={() => <div style={{
    textAlign: "right"
  }}>
          <Button size="s" kind="plain" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>} />;
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
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
}`,...C.parameters?.docs?.source}}},T=[`Overview`,`Interactive`,`Checklist`]}))();export{C as Checklist,x as Interactive,b as Overview,T as __namedExportsOrder,w as default};