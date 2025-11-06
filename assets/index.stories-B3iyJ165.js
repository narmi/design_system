import{e}from"./iframe-du4X1prS.js";import{P as t}from"./index-_3s9vH5v.js";import{i as E}from"./selection-CAkQuomx.js";import{c as u}from"./index-RvS1aOr8.js";import{T as p}from"./index-Bhp7Nn7J.js";import"./preload-helper-PPVm8Dsz.js";import"./dom-CT-IFtS0.js";import"./index-D6hM7Sim.js";import"./index-BcDK1_tn.js";const v=E.icons.map(i=>i.properties.name),n=({kind:i="node",icon:r,imgUrl:m,initial:d,tooltip:l,children:f,renderNode:c})=>{const g=!r&&!m&&d;return e.createElement("div",{className:u(["nds-timeline-event",{"nds-timeline-event--pending":i==="pending"}])},e.createElement("div",{className:"nds-timeline-track"},typeof c=="function"?e.createElement("div",{className:"nds-timeline-node--custom"},c()):e.createElement("div",{className:u(["nds-timeline-node",{"nds-timeline-node--hasAvatar":!!m}]),style:{backgroundImage:m?`url(${m})`:"none"}},g&&(l?e.createElement(p,{text:l},e.createElement("span",null,d)):e.createElement("span",null,d)),r&&(l?e.createElement(p,{text:l},e.createElement("span",{className:`narmi-icon-${r}`})):e.createElement("span",{className:`narmi-icon-${r}`}))),i!=="start"&&e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"nds-timeline-line"},e.createElement("line",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",stroke:"var(--theme-primary)",strokeWidth:"1",strokeDashoffset:3}))),e.createElement("div",{className:"nds-timeline-content"},f))};n.propTypes={kind:t.oneOf(["node","start","pending"]),icon:t.oneOf(v),imgUrl:t.string,initial:t.string,children:t.oneOfType([t.node,t.arrayOf(t.node)]),tooltip:t.string,renderNode:t.func};n.__docgenInfo={description:"",methods:[],displayName:"TimelineEvent",props:{kind:{defaultValue:{value:'"node"',computed:!1},description:"Timeline node variant.",type:{name:"enum",value:[{value:'"node"',computed:!1},{value:'"start"',computed:!1},{value:'"pending"',computed:!1}]},required:!1},icon:{description:"Name of NDS icon to render inside the timeline node",type:{name:"enum",computed:!0,value:"VALID_ICON_NAMES"},required:!1},imgUrl:{description:`Pass an image url to render the timeline node
as an avatar`,type:{name:"string"},required:!1},initial:{description:`Initial to render in the timeline node
Overridden by:
- icon
- imgUrl`,type:{name:"string"},required:!1},children:{description:"Timeline event content (any JSX)",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},tooltip:{description:"Hover tooltip content for the icon",type:{name:"string"},required:!1},renderNode:{description:"Render a custom circle node on the line",type:{name:"func"},required:!1}}};const h=i=>e.createElement(n,i),a=h.bind({});a.args={children:"This is a timeline event"};const s=()=>e.createElement(e.Fragment,null,e.createElement(n,{kind:"pending"},"We are still waiting on this one"),e.createElement(n,null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."),e.createElement(n,{imgUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"},e.createElement("b",null,"The Cat")," has been consulted"),e.createElement(n,{icon:"user",tooltip:"John Doe"},e.createElement("h3",null,"Communication update"),e.createElement("div",null,"We talked about it.")),e.createElement(n,{kind:"start"},"Something kicked off this whole process")),o=()=>e.createElement(e.Fragment,null,e.createElement(n,{kind:"pending"},"We are still waiting on this one"),e.createElement(n,{renderNode:()=>e.createElement("div",{className:"fontSize--l"},"❤️")},"This event has a custom node"),e.createElement(n,{kind:"start"},"Something kicked off this whole process")),x={title:"Components/TimelineEvent",component:n,argTypes:{icon:{options:["",...v]}}};s.__docgenInfo={description:"",methods:[],displayName:"StackingTimelineEvents"};o.__docgenInfo={description:"",methods:[],displayName:"CustomNode"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <TimelineEvent {...args} />",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <>
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
  </>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <>
    <TimelineEvent kind="pending">
      We are still waiting on this one
    </TimelineEvent>
    <TimelineEvent renderNode={() => <div className="fontSize--l">❤️</div>}>
      This event has a custom node
    </TimelineEvent>
    <TimelineEvent kind="start">
      Something kicked off this whole process
    </TimelineEvent>
  </>`,...o.parameters?.docs?.source}}};const O=["Overview","StackingTimelineEvents","CustomNode"];export{o as CustomNode,a as Overview,s as StackingTimelineEvents,O as __namedExportsOrder,x as default};
