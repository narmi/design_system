import{e}from"./iframe-CxRISNmR.js";import{i as f}from"./selection-CAkQuomx.js";import{c}from"./index-RvS1aOr8.js";import{T as u}from"./index-CUkOPG4h.js";import"./preload-helper-PPVm8Dsz.js";import"./dom-D-9KMNWC.js";import"./index-de_731F5.js";import"./index-DH52X8pW.js";const E=f.icons.map(t=>t.properties.name),n=({kind:t="node",icon:o,imgUrl:r,initial:l,tooltip:m,children:p,renderNode:d})=>{const v=!o&&!r&&l;return e.createElement("div",{className:c(["nds-timeline-event",{"nds-timeline-event--pending":t==="pending"}])},e.createElement("div",{className:"nds-timeline-track"},typeof d=="function"?e.createElement("div",{className:"nds-timeline-node--custom"},d()):e.createElement("div",{className:c(["nds-timeline-node",{"nds-timeline-node--hasAvatar":!!r}]),style:{backgroundImage:r?`url(${r})`:"none"}},v&&(m?e.createElement(u,{text:m},e.createElement("span",null,l)):e.createElement("span",null,l)),o&&(m?e.createElement(u,{text:m},e.createElement("span",{className:`narmi-icon-${o}`})):e.createElement("span",{className:`narmi-icon-${o}`}))),t!=="start"&&e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"nds-timeline-line"},e.createElement("line",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",stroke:"var(--theme-primary)",strokeWidth:"1",strokeDashoffset:3}))),e.createElement("div",{className:"nds-timeline-content"},p))};n.__docgenInfo={description:"",methods:[],displayName:"TimelineEvent",props:{kind:{defaultValue:{value:'"node"',computed:!1},description:"Timeline node variant.",type:{name:"enum",value:[{value:'"node"',computed:!1},{value:'"start"',computed:!1},{value:'"pending"',computed:!1}]},required:!1},icon:{description:"Name of NDS icon to render inside the timeline node",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},imgUrl:{description:`Pass an image url to render the timeline node
as an avatar`,type:{name:"string"},required:!1},initial:{description:`Initial to render in the timeline node
Overridden by:
- icon
- imgUrl`,type:{name:"string"},required:!1},children:{description:"Timeline event content (any JSX)",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},tooltip:{description:"Hover tooltip content for the icon",type:{name:"string"},required:!1},renderNode:{description:"Render a custom circle node on the line",type:{name:"func"},required:!1}}};const h=t=>e.createElement(n,t),i=h.bind({});i.args={children:"This is a timeline event"};const a=()=>e.createElement(e.Fragment,null,e.createElement(n,{kind:"pending"},"We are still waiting on this one"),e.createElement(n,null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."),e.createElement(n,{imgUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"},e.createElement("b",null,"The Cat")," has been consulted"),e.createElement(n,{icon:"user",tooltip:"John Doe"},e.createElement("h3",null,"Communication update"),e.createElement("div",null,"We talked about it.")),e.createElement(n,{kind:"start"},"Something kicked off this whole process")),s=()=>e.createElement(e.Fragment,null,e.createElement(n,{kind:"pending"},"We are still waiting on this one"),e.createElement(n,{renderNode:()=>e.createElement("div",{className:"fontSize--l"},"❤️")},"This event has a custom node"),e.createElement(n,{kind:"start"},"Something kicked off this whole process")),S={title:"Components/TimelineEvent",component:n,argTypes:{icon:{options:["",...E]}}};a.__docgenInfo={description:"",methods:[],displayName:"StackingTimelineEvents"};s.__docgenInfo={description:"",methods:[],displayName:"CustomNode"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <TimelineEvent {...args} />",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <>
    <TimelineEvent kind="pending">
      We are still waiting on this one
    </TimelineEvent>
    <TimelineEvent>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
      officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
      repudiandae sint et molestiae non recusandae.
    </TimelineEvent>
    <TimelineEvent imgUrl="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg">
      <b>The Cat</b> has been consulted
    </TimelineEvent>
    <TimelineEvent icon="user" tooltip={"John Doe"}>
      <h3>Communication update</h3>
      <div>We talked about it.</div>
    </TimelineEvent>
    <TimelineEvent kind="start">
      Something kicked off this whole process
    </TimelineEvent>
  </>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <>
    <TimelineEvent kind="pending">
      We are still waiting on this one
    </TimelineEvent>
    <TimelineEvent renderNode={() => <div className="fontSize--l">❤️</div>}>
      This event has a custom node
    </TimelineEvent>
    <TimelineEvent kind="start">
      Something kicked off this whole process
    </TimelineEvent>
  </>`,...s.parameters?.docs?.source}}};const _=["Overview","StackingTimelineEvents","CustomNode"];export{s as CustomNode,i as Overview,a as StackingTimelineEvents,_ as __namedExportsOrder,S as default};
