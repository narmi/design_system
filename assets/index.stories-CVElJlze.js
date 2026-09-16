import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-DW8SnL8O.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";var a,o,s,c,l,u=t((()=>{a=e(n()),o=5,s=(e,t)=>[...Array(t-e+1)].map((t,n)=>e+n),c=(e,t,n)=>{if(e<=n+1)return s(1,e);let r=[t>Math.ceil(n/2),t<=e-Math.floor(n/2)].filter(Boolean).length===2?n-2:n,i=t-Math.floor(r/2),a=i+r-1;return i<1?(i=1,a=r):a>e&&(a=e,i=e-r+1),s(i,a)},l=({totalPages:e,selectedPageNumber:t=1,windowSize:n=o})=>{let r=Math.max(1,e),i=Math.max(1,Math.min(t,r)),s=(0,a.useMemo)(()=>c(r,i,n),[r,i,n]);return{visiblePages:s,selectedPage:i,selectedIndex:s.indexOf(i),showFirstPage:s[0]>1,showLastPage:s[s.length-1]<r,showPrev:i>1,showNext:i<r}}})),d,f,p,m=t((()=>{d=e(n()),r(),u(),f=()=>{},p=({onPageChange:e=f,totalPages:t=1,defaultSelectedPage:n=1,selectedPage:r,testId:a})=>{let o=r!==void 0,[s,c]=(0,d.useState)(n),{visiblePages:u,selectedPage:p,selectedIndex:m,showPrev:h,showNext:g,showFirstPage:_,showLastPage:v}=l({totalPages:t,selectedPageNumber:o?r:s}),y=({target:t})=>{let n=parseInt(t.dataset.page,10);o||c(n),e(n)},b=()=>{if(!h)return;let t=p-1;o||c(t),e(t)},x=()=>{if(!g)return;let t=p+1;o||c(t),e(t)},S=d.createElement(`div`,{className:`nds-typography nds-pagination`,"data-testid":a},d.createElement(`nav`,{"aria-label":`pagination`},d.createElement(`ul`,null,d.createElement(`li`,null,d.createElement(`span`,{role:`button`,tabIndex:0,"aria-disabled":!h,"aria-label":`Previous page`,onClick:b,onKeyUp:({key:e})=>{e===`Enter`&&b()},className:i([`nds-pagination-page`,`padding--none`,{"nds-pagination-page--disabled":!h}])},d.createElement(`i`,{role:`img`,className:`narmi-icon-chevron-left fontSize--xl`}))),_&&d.createElement(`li`,null,d.createElement(`span`,{role:`button`,tabIndex:0,"aria-label":`First page`,onClick:y,onKeyUp:e=>{e.key===`Enter`&&y(e)},"data-page":1,className:`nds-pagination-page`},`1`)),_&&d.createElement(`li`,null,d.createElement(`div`,{className:`nds-pagination-ellipsis`},`…`)),u.map((e,t)=>d.createElement(`li`,{key:`page-${e}`},d.createElement(`span`,{role:`button`,tabIndex:0,className:i([`nds-pagination-page`,{"nds-pagination-page--selected":t===m}]),"data-page":e,onClick:y,onKeyUp:e=>{e.key===`Enter`&&y(e)},"aria-label":`Page ${e}`,"aria-current":t===m?`page`:!1},e.toString()))),v&&d.createElement(`li`,null,d.createElement(`div`,{className:`nds-pagination-ellipsis`},`…`)),v&&d.createElement(`li`,null,d.createElement(`span`,{role:`button`,tabIndex:0,"aria-label":`Last page`,onClick:y,onKeyUp:e=>{e.key===`Enter`&&y(e)},"data-page":t,className:`nds-pagination-page`},t.toString())),d.createElement(`li`,null,d.createElement(`span`,{role:`button`,tabIndex:0,"aria-disabled":!g,"aria-label":`Next page`,onClick:x,onKeyUp:({key:e})=>{e===`Enter`&&x()},className:i([`nds-pagination-page`,`padding--none`,{"nds-pagination-page--disabled":!g}])},d.createElement(`i`,{role:`img`,className:`narmi-icon-chevron-right fontSize--xl`}))))));return t>1?S:d.createElement(d.Fragment,null)};try{p.displayName=`Pagination`,p.__docgenInfo={description:`Component that allows users to navigate between pages of information.
Your application is responsible for setting the total number of pages and
responding to the \`onPageChange\` callback.

The component will handle which page numbers to render, next and previous arrows,
and conditionally rendering first and last pages.

If your pagination setup expects a fully controlled component, you may set \`defaultSelectedPage\` on every \`onPageChange\` call.`,displayName:`Pagination`,filePath:`/home/runner/work/design_system/design_system/src/Pagination/index.tsx`,methods:[],props:{totalPages:{defaultValue:{value:`1`},declarations:[{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`}],description:`Total number of pages
If the number of pages is 1, pagination will not render`,name:`totalPages`,parent:{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`},required:!1,tags:{},type:{name:`number`}},defaultSelectedPage:{defaultValue:{value:`1`},declarations:[{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`}],description:`Default selected page by page number (uncontrolled)`,name:`defaultSelectedPage`,parent:{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`},required:!1,tags:{},type:{name:`number`}},selectedPage:{defaultValue:null,declarations:[{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`}],description:"Selected page by page number (controlled).\nIn fully controlled mode, you **must** define an `onPageChange`\nhandler to update the value of the `selectedPage` prop.",name:`selectedPage`,parent:{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`},required:!1,tags:{},type:{name:`number`}},onPageChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`}],description:`Callback invoked when user selects a new page via page numbers or
previous/next arrows.

Invoked with selected page number as the argument.`,name:`onPageChange`,parent:{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`},required:!1,tags:{},type:{name:`(page: number) => void`}},testId:{defaultValue:null,declarations:[{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`}],description:"Optional value for `data-testid` attribute",name:`testId`,parent:{fileName:`design_system/src/Pagination/index.tsx`,name:`PaginationProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),h,g,_,v,y,b,x,S,C,w;t((()=>{h=e(n()),m(),{expect:g,waitFor:_}=__STORYBOOK_MODULE_TEST__,v=e=>h.createElement(p,e),y=v.bind({}),y.args={totalPages:40,defaultSelectedPage:3},b={name:`Interaction: Navigates with next/previous arrows`,render:()=>h.createElement(p,{totalPages:10,defaultSelectedPage:3}),play:async({canvas:e,userEvent:t})=>{g(e.getByRole(`button`,{name:`Page 3`})).toHaveAttribute(`aria-current`,`page`),await t.click(e.getByRole(`button`,{name:`Next page`})),await _(()=>g(e.getByRole(`button`,{name:`Page 4`})).toHaveAttribute(`aria-current`,`page`)),await t.click(e.getByRole(`button`,{name:`Previous page`})),await _(()=>g(e.getByRole(`button`,{name:`Page 3`})).toHaveAttribute(`aria-current`,`page`))}},x={name:`Interaction: Selects a page by number`,render:()=>h.createElement(p,{totalPages:10,defaultSelectedPage:3}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Page 4`})),await _(()=>g(e.getByRole(`button`,{name:`Page 4`})).toHaveAttribute(`aria-current`,`page`)),g(e.getByRole(`button`,{name:`Page 3`})).not.toHaveAttribute(`aria-current`,`page`)}},S=()=>{let[e,t]=(0,h.useState)(1),[n,r]=(0,h.useState)(40);return h.createElement(h.Fragment,null,h.createElement(p,{totalPages:n,selectedPage:e,onPageChange:e=>{t(parseInt(e,10))}}),h.createElement(`div`,{className:`padding--all border--top margin--top`},h.createElement(`label`,{htmlFor:`totalPages`},`Total pages`),h.createElement(`select`,{className:`margin--left`,id:`totalPages`,onChange:e=>r(parseInt(e.target.value,10))},h.createElement(`option`,{value:`1`},`1`),h.createElement(`option`,{value:`3`},`3`),h.createElement(`option`,{value:`25`},`25`),h.createElement(`option`,{value:`40`,selected:!0},`40`))))},C={title:`Components/Pagination`,component:p},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Pagination {...args} />`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Navigates with next/previous arrows",
  render: () => <Pagination totalPages={10} defaultSelectedPage={3} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    expect(canvas.getByRole("button", {
      name: "Page 3"
    })).toHaveAttribute("aria-current", "page");

    // advance to the next page
    await userEvent.click(canvas.getByRole("button", {
      name: "Next page"
    }));
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Page 4"
    })).toHaveAttribute("aria-current", "page"));

    // go back to the previous page
    await userEvent.click(canvas.getByRole("button", {
      name: "Previous page"
    }));
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Page 3"
    })).toHaveAttribute("aria-current", "page"));
  }
}`,...b.parameters?.docs?.source},description:{story:"Interaction test verifying the next/previous arrows move the selected\npage (tracked via `aria-current`).",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Selects a page by number",
  render: () => <Pagination totalPages={10} defaultSelectedPage={3} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Page 4"
    }));
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Page 4"
    })).toHaveAttribute("aria-current", "page"));
    expect(canvas.getByRole("button", {
      name: "Page 3"
    })).not.toHaveAttribute("aria-current", "page");
  }
}`,...x.parameters?.docs?.source},description:{story:`Interaction test verifying clicking a page number selects that page.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalPages, setTotalPages] = useState(40);
  const handlePageChange = page => {
    setSelectedPage(parseInt(page, 10));
  };
  return <>
      <Pagination totalPages={totalPages} selectedPage={selectedPage} onPageChange={handlePageChange} />
      <div className="padding--all border--top margin--top">
        <label htmlFor="totalPages">Total pages</label>
        <select className="margin--left" id="totalPages" onChange={e => setTotalPages(parseInt(e.target.value, 10))}>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="25">25</option>
          <option value="40" selected>
            40
          </option>
        </select>
      </div>
    </>;
}`,...S.parameters?.docs?.source}}},w=[`Overview`,`NavigatesWithArrows`,`SelectsPageNumber`,`FullyControlled`]}))();export{S as FullyControlled,b as NavigatesWithArrows,y as Overview,x as SelectsPageNumber,w as __namedExportsOrder,C as default};