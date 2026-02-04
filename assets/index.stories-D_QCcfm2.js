import{r as h,e}from"./iframe-BZmXFcks.js";import{c as b}from"./index-RvS1aOr8.js";import"./preload-helper-PPVm8Dsz.js";const F=5,k=(t,l)=>[...Array(l-t+1)].map((s,o)=>t+o),_=(t,l,s)=>{if(t<=s+1)return k(1,t);const o=l>Math.ceil(s/2),r=l<=t-Math.floor(s/2),c=[o,r].filter(Boolean).length===2?s-2:s,g=Math.floor(c/2);let i=l-g,d=i+c-1;return i<1?(i=1,d=c):d>t&&(d=t,i=t-c+1),k(i,d)},T=({totalPages:t,selectedPageNumber:l=1,windowSize:s=F})=>{const o=Math.max(1,t),r=Math.max(1,Math.min(l,o)),n=h.useMemo(()=>_(o,r,s),[o,r,s]);return{visiblePages:n,selectedPage:r,selectedIndex:n.indexOf(r),showFirstPage:n[0]>1,showLastPage:n[n.length-1]<o,showPrev:r>1,showNext:r<o}},M=()=>{},P=({onPageChange:t=M,totalPages:l=1,defaultSelectedPage:s=1,selectedPage:o,testId:r})=>{const n=o!==void 0,[c,g]=h.useState(s),i=n?o:c,{visiblePages:d,selectedIndex:v,showPrev:E,showNext:y,showFirstPage:C,showLastPage:I}=T({totalPages:l,selectedPageNumber:i}),p=({target:a})=>{const m=parseInt(a.dataset.page,10);n||g(m),t(m)},x=()=>{const a=i-1;n||g(a),t(a)},N=()=>{const a=i+1;n||g(a),t(a)},w=e.createElement("div",{className:"nds-typography nds-pagination","data-testid":r},e.createElement("nav",{"aria-label":"pagination"},e.createElement("ul",null,e.createElement("li",null,e.createElement("span",{role:"button",tabIndex:0,"aria-disabled":!E,"aria-label":"Previous page",onClick:x,onKeyUp:({key:a})=>{a==="Enter"&&x()},className:b(["nds-pagination-page","padding--none",{"nds-pagination-page--disabled":!E}])},e.createElement("i",{role:"img",className:"narmi-icon-chevron-left fontSize--l"}))),C&&e.createElement("li",null,e.createElement("span",{role:"button",tabIndex:0,"aria-label":"First page",onClick:p,onKeyUp:a=>{a.key==="Enter"&&p(a)},"data-page":1,className:"nds-pagination-page"},"1")),C&&e.createElement("li",null,e.createElement("div",{className:"nds-pagination-ellipsis"},"…")),d.map((a,m)=>e.createElement("li",{key:`page-${a}`},e.createElement("span",{role:"button",tabIndex:0,className:b(["nds-pagination-page",{"nds-pagination-page--selected":m===v}]),"data-page":a,onClick:p,onKeyUp:S=>{S.key==="Enter"&&p(S)},"aria-label":`Page ${a}`,"aria-current":m===v&&"page"},a.toString()))),I&&e.createElement("li",null,e.createElement("div",{className:"nds-pagination-ellipsis"},"…")),I&&e.createElement("li",null,e.createElement("span",{role:"button",tabIndex:0,"aria-label":"Last page",onClick:p,onKeyUp:a=>{a.key==="Enter"&&p(a)},"data-page":l,className:"nds-pagination-page"},l.toString())),e.createElement("li",null,e.createElement("span",{role:"button",tabIndex:0,"aria-disabled":!y,"aria-label":"Next page",onClick:N,onKeyUp:({key:a})=>{a==="Enter"&&N()},className:b(["nds-pagination-page","padding--none",{"nds-pagination-page--disabled":!y}])},e.createElement("i",{role:"img",className:"narmi-icon-chevron-right fontSize--l"}))))));return l>1?w:e.createElement(e.Fragment,null)};P.__docgenInfo={description:`Component that allows users to navigate between pages of information.
Your application is responsible for setting the total number of pages and
responding to the \`onPageChange\` callback.

The component will handle which page numbers to render, next and previous arrows,
and conditionally rendering first and last pages.

If your pagination setup expects a fully controlled component, you may set \`defaultSelectedPage\` on every \`onPageChange\` call.`,methods:[],displayName:"Pagination",props:{onPageChange:{defaultValue:{value:"() => {}",computed:!1},description:`Callback invoked when user selects a new page via page numbers or
previous/next arrows.

Invoked with selected page number as the argument.`,type:{name:"func"},required:!1},totalPages:{defaultValue:{value:"1",computed:!1},description:`Total number of pages
If the number of pages is 1, pagination will not render`,type:{name:"number"},required:!1},defaultSelectedPage:{defaultValue:{value:"1",computed:!1},description:"Default selected page by page number (uncontrolled)",type:{name:"number"},required:!1},selectedPage:{description:"Selected page by page number (controlled).\nIn fully controlled mode, you **must** define an `onPageChange`\nhandler to update the value of the `selectedPage` prop.",type:{name:"number"},required:!1},testId:{description:"Optional value for `data-testid` attribute",type:{name:"string"},required:!1}}};const q=t=>e.createElement(P,t),u=q.bind({});u.args={totalPages:40,defaultSelectedPage:3};const f=()=>{const[t,l]=h.useState(1),[s,o]=h.useState(40),r=n=>{l(parseInt(n,10))};return e.createElement(e.Fragment,null,e.createElement(P,{totalPages:s,selectedPage:t,onPageChange:r}),e.createElement("div",{className:"padding--all border--top margin--top"},e.createElement("label",{htmlFor:"totalPages"},"Total pages"),e.createElement("select",{className:"margin--left",id:"totalPages",onChange:n=>o(parseInt(n.target.value),10)},e.createElement("option",{value:"1"},"1"),e.createElement("option",{value:"3"},"3"),e.createElement("option",{value:"25"},"25"),e.createElement("option",{value:"40",selected:!0},"40"))))},U={title:"Components/Pagination",component:P};f.__docgenInfo={description:"",methods:[],displayName:"FullyControlled"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <Pagination {...args} />",...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalPages, setTotalPages] = useState(40);
  const handlePageChange = page => {
    setSelectedPage(parseInt(page, 10));
  };
  return <>
      <Pagination totalPages={totalPages} selectedPage={selectedPage} onPageChange={handlePageChange} />
      <div className="padding--all border--top margin--top">
        <label htmlFor="totalPages">Total pages</label>
        <select className="margin--left" id="totalPages" onChange={e => setTotalPages(parseInt(e.target.value), 10)}>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="25">25</option>
          <option value="40" selected>
            40
          </option>
        </select>
      </div>
    </>;
}`,...f.parameters?.docs?.source}}};const V=["Overview","FullyControlled"];export{f as FullyControlled,u as Overview,V as __namedExportsOrder,U as default};
