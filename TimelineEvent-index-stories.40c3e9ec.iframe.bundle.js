"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[4757],{"./src/TimelineEvent/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,StackingTimelineEvents:()=>StackingTimelineEvents,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),selection=__webpack_require__("./src/icons/selection.json"),classcat=__webpack_require__("./node_modules/classcat/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VALID_ICON_NAMES=selection.icons.map((icon=>icon.properties.name)),TimelineEvent=_ref=>{let{kind="node",icon,imgUrl,initial,children}=_ref;const useInitial=!icon&&!imgUrl&&initial;return(0,jsx_runtime.jsxs)("div",{className:(0,classcat.A)(["nds-timeline-event",{"nds-timeline-event--pending":"pending"===kind}]),children:[(0,jsx_runtime.jsxs)("div",{className:"nds-timeline-track",children:[(0,jsx_runtime.jsxs)("div",{className:(0,classcat.A)(["nds-timeline-node",{"nds-timeline-node--hasAvatar":Boolean(imgUrl)}]),style:{backgroundImage:imgUrl?"url(".concat(imgUrl,")"):"none"},children:[useInitial&&(0,jsx_runtime.jsx)("span",{children:initial}),icon&&(0,jsx_runtime.jsx)("span",{className:"narmi-icon-".concat(icon)})]}),"start"!==kind&&(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"nds-timeline-line",children:(0,jsx_runtime.jsx)("line",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",stroke:"var(--theme-primary)",strokeWidth:"1",strokeDashoffset:3})})]}),(0,jsx_runtime.jsx)("div",{className:"nds-timeline-content",children})]})};TimelineEvent.displayName="TimelineEvent",TimelineEvent.propTypes={kind:prop_types_default().oneOf(["node","start","pending"]),icon:prop_types_default().oneOf(VALID_ICON_NAMES),imgUrl:prop_types_default().string,initial:prop_types_default().string,children:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().arrayOf(prop_types_default().node)])},TimelineEvent.__docgenInfo={description:"",methods:[],displayName:"TimelineEvent",props:{kind:{defaultValue:{value:'"node"',computed:!1},description:"Timline node variant.",type:{name:"enum",value:[{value:'"node"',computed:!1},{value:'"start"',computed:!1},{value:'"pending"',computed:!1}]},required:!1},icon:{description:"Name of NDS icon to render inside the timeline node",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},imgUrl:{description:"Pass an image url to render the timeline node\nas an avatar",type:{name:"string"},required:!1},initial:{description:"Initial to render in the timeline node\nOverridden by:\n- icon\n- imgUrl",type:{name:"string"},required:!1},children:{description:"Timline event content (any JSX)",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1}}};const src_TimelineEvent=TimelineEvent;var _Overview$parameters,_Overview$parameters2,_StackingTimelineEven,_StackingTimelineEven2;const Template=args=>(0,jsx_runtime.jsx)(src_TimelineEvent,{...args});Template.displayName="Template";const Overview=Template.bind({});Overview.args={children:"This is a timeline event"};const StackingTimelineEvents=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src_TimelineEvent,{kind:"pending",children:"We are still waiting on this one"}),(0,jsx_runtime.jsx)(src_TimelineEvent,{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."}),(0,jsx_runtime.jsxs)(src_TimelineEvent,{imgUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",children:[(0,jsx_runtime.jsx)("b",{children:"The Cat"})," has been consulted"]}),(0,jsx_runtime.jsxs)(src_TimelineEvent,{icon:"user",children:[(0,jsx_runtime.jsx)("h3",{children:"Communication update"}),(0,jsx_runtime.jsx)("div",{children:"We talked about it."})]}),(0,jsx_runtime.jsx)(src_TimelineEvent,{kind:"start",children:"Something kicked off this whole process"})]}),index_stories={title:"Components/TimelineEvent",component:src_TimelineEvent,argTypes:{icon:{options:["",...VALID_ICON_NAMES]}}};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs,source:{originalSource:"args => <TimelineEvent {...args} />",...null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source}}},StackingTimelineEvents.parameters={...StackingTimelineEvents.parameters,docs:{...null===(_StackingTimelineEven=StackingTimelineEvents.parameters)||void 0===_StackingTimelineEven?void 0:_StackingTimelineEven.docs,source:{originalSource:'() => <>\n    <TimelineEvent kind="pending">\n      We are still waiting on this one\n    </TimelineEvent>\n    <TimelineEvent>\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n      praesentium voluptatum deleniti atque corrupti quos dolores et quas\n      molestias excepturi sint occaecati cupiditate non provident, similique\n      sunt in culpa qui officia deserunt mollitia animi, id est laborum et\n      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil\n      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas\n      assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut\n      officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates\n      repudiandae sint et molestiae non recusandae.\n    </TimelineEvent>\n    <TimelineEvent imgUrl="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg">\n      <b>The Cat</b> has been consulted\n    </TimelineEvent>\n    <TimelineEvent icon="user">\n      <h3>Communication update</h3>\n      <div>We talked about it.</div>\n    </TimelineEvent>\n    <TimelineEvent kind="start">\n      Something kicked off this whole process\n    </TimelineEvent>\n  </>',...null===(_StackingTimelineEven2=StackingTimelineEvents.parameters)||void 0===_StackingTimelineEven2||null===(_StackingTimelineEven2=_StackingTimelineEven2.docs)||void 0===_StackingTimelineEven2?void 0:_StackingTimelineEven2.source}}};const __namedExportsOrder=["Overview","StackingTimelineEvents"];StackingTimelineEvents.__docgenInfo={description:"",methods:[],displayName:"StackingTimelineEvents"}},"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})}}]);