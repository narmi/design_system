import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-sqE9WaiT.js";import{n as r,t as i}from"./classcat-BMx3V7o4.js";import{n as a,t as o}from"./selection-CvWrpGAP.js";import{n as s,t as c}from"./Tooltip-MSMbjcYf.js";var l,u,d,f=e((()=>{l=t(n()),a(),r(),s(),u=o.icons.map(e=>e.properties.name),d=({kind:e=`node`,icon:t,imgUrl:n,initial:r,tooltip:a,children:o,renderNode:s})=>{let u=!t&&!n&&r;return l.createElement(`div`,{className:i([`nds-timeline-event`,{"nds-timeline-event--pending":e===`pending`}])},l.createElement(`div`,{className:`nds-timeline-track`},typeof s==`function`?l.createElement(`div`,{className:`nds-timeline-node--custom`},s()):l.createElement(`div`,{className:i([`nds-timeline-node`,{"nds-timeline-node--hasAvatar":!!n}]),style:{backgroundImage:n?`url(${n})`:`none`}},u&&(a?l.createElement(c,{text:a},l.createElement(`span`,null,r)):l.createElement(`span`,null,r)),t&&(a?l.createElement(c,{text:a},l.createElement(`span`,{className:`narmi-icon-${t}`})):l.createElement(`span`,{className:`narmi-icon-${t}`}))),e!==`start`&&l.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,xmlnsXlink:`http://www.w3.org/1999/xlink`,className:`nds-timeline-line`},l.createElement(`line`,{x1:`50%`,y1:`0%`,x2:`50%`,y2:`100%`,stroke:`var(--theme-primary)`,strokeWidth:`1`,strokeDashoffset:3}))),l.createElement(`div`,{className:`nds-timeline-content`},o))},d.__docgenInfo={description:``,methods:[],displayName:`TimelineEvent`,props:{kind:{defaultValue:{value:`"node"`,computed:!1},description:`Timeline node variant.`,type:{name:`enum`,value:[{value:`"node"`,computed:!1},{value:`"start"`,computed:!1},{value:`"pending"`,computed:!1}]},required:!1},icon:{description:`Name of NDS icon to render inside the timeline node`,type:{name:`enum`,computed:!0,value:`VALID_ICON_NAMES`},required:!1},imgUrl:{description:`Pass an image url to render the timeline node
as an avatar`,type:{name:`string`},required:!1},initial:{description:`Initial to render in the timeline node
Overridden by:
- icon
- imgUrl`,type:{name:`string`},required:!1},children:{description:`Timeline event content (any JSX)`,type:{name:`union`,value:[{name:`node`},{name:`arrayOf`,value:{name:`node`}}]},required:!1},tooltip:{description:`Hover tooltip content for the icon`,type:{name:`string`},required:!1},renderNode:{description:`Render a custom circle node on the line`,type:{name:`func`},required:!1}}}})),p,m,h,g,_,v,y;e((()=>{p=t(n()),f(),m=e=>p.createElement(d,e),h=m.bind({}),h.args={children:`This is a timeline event`},g=()=>p.createElement(p.Fragment,null,p.createElement(d,{kind:`pending`},`We are still waiting on this one`),p.createElement(d,null,`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.`),p.createElement(d,{imgUrl:`https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg`},p.createElement(`b`,null,`The Cat`),` has been consulted`),p.createElement(d,{icon:`user`,tooltip:`John Doe`},p.createElement(`h3`,null,`Communication update`),p.createElement(`div`,null,`We talked about it.`)),p.createElement(d,{kind:`start`},`Something kicked off this whole process`)),_=()=>p.createElement(p.Fragment,null,p.createElement(d,{kind:`pending`},`We are still waiting on this one`),p.createElement(d,{renderNode:()=>p.createElement(`div`,{className:`fontSize--xl`},`❤️`)},`This event has a custom node`),p.createElement(d,{kind:`start`},`Something kicked off this whole process`)),v={title:`Components/TimelineEvent`,component:d,argTypes:{icon:{options:[``,...u]}}},g.__docgenInfo={description:``,methods:[],displayName:`StackingTimelineEvents`},_.__docgenInfo={description:``,methods:[],displayName:`CustomNode`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <TimelineEvent {...args} />`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <>
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
  </>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <>
    <TimelineEvent kind="pending">
      We are still waiting on this one
    </TimelineEvent>
    <TimelineEvent renderNode={() => <div className="fontSize--xl">❤️</div>}>
      This event has a custom node
    </TimelineEvent>
    <TimelineEvent kind="start">
      Something kicked off this whole process
    </TimelineEvent>
  </>`,..._.parameters?.docs?.source}}},y=[`Overview`,`StackingTimelineEvents`,`CustomNode`]}))();export{_ as CustomNode,h as Overview,g as StackingTimelineEvents,y as __namedExportsOrder,v as default};