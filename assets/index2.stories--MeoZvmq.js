import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-B5brrW0I.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./iconNames-BuGAwI5s.js";import{n as s,t as c}from"./Tooltip-CFxbKtCE.js";var l,u,d=t((()=>{l=e(n()),a(),r(),s(),u=({kind:e=`node`,icon:t,imgUrl:n,initial:r,tooltip:a,children:o,renderNode:s})=>{let u=!t&&!n&&r;return l.createElement(`div`,{className:i([`nds-timeline-event`,{"nds-timeline-event--pending":e===`pending`}])},l.createElement(`div`,{className:`nds-timeline-track`},typeof s==`function`?l.createElement(`div`,{className:`nds-timeline-node--custom`},s()):l.createElement(`div`,{className:i([`nds-timeline-node`,{"nds-timeline-node--hasAvatar":!!n}]),style:{backgroundImage:n?`url(${n})`:`none`}},u&&(a?l.createElement(c,{text:a},l.createElement(`span`,null,r)):l.createElement(`span`,null,r)),t&&(a?l.createElement(c,{text:a},l.createElement(`span`,{className:`narmi-icon-${t}`})):l.createElement(`span`,{className:`narmi-icon-${t}`}))),e!==`start`&&l.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,xmlnsXlink:`http://www.w3.org/1999/xlink`,className:`nds-timeline-line`},l.createElement(`line`,{x1:`50%`,y1:`0%`,x2:`50%`,y2:`100%`,stroke:`var(--theme-primary)`,strokeWidth:`1`,strokeDashoffset:3}))),l.createElement(`div`,{className:`nds-timeline-content`},o))},u.__docgenInfo={description:``,methods:[],displayName:`TimelineEvent`,props:{kind:{defaultValue:{value:`"node"`,computed:!1},description:`Timeline node variant.`,type:{name:`enum`,value:[{value:`"node"`,computed:!1},{value:`"start"`,computed:!1},{value:`"pending"`,computed:!1}]},required:!1},icon:{description:`Name of NDS icon to render inside the timeline node`,type:{name:`enum`,computed:!0,value:`VALID_ICON_NAMES`},required:!1},imgUrl:{description:`Pass an image url to render the timeline node
as an avatar`,type:{name:`string`},required:!1},initial:{description:`Initial to render in the timeline node
Overridden by:
- icon
- imgUrl`,type:{name:`string`},required:!1},children:{description:`Timeline event content (any JSX)`,type:{name:`union`,value:[{name:`node`},{name:`arrayOf`,value:{name:`node`}}]},required:!1},tooltip:{description:`Hover tooltip content for the icon`,type:{name:`string`},required:!1},renderNode:{description:`Render a custom circle node on the line`,type:{name:`func`},required:!1}}}})),f,p,m,h,g,_,v;t((()=>{f=e(n()),d(),p=e=>f.createElement(u,e),m=p.bind({}),m.args={children:`This is a timeline event`},h=()=>f.createElement(f.Fragment,null,f.createElement(u,{kind:`pending`},`We are still waiting on this one`),f.createElement(u,null,`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.`),f.createElement(u,{imgUrl:`https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg`},f.createElement(`b`,null,`The Cat`),` has been consulted`),f.createElement(u,{icon:`user`,tooltip:`John Doe`},f.createElement(`h3`,null,`Communication update`),f.createElement(`div`,null,`We talked about it.`)),f.createElement(u,{kind:`start`},`Something kicked off this whole process`)),g=()=>f.createElement(f.Fragment,null,f.createElement(u,{kind:`pending`},`We are still waiting on this one`),f.createElement(u,{renderNode:()=>f.createElement(`div`,{className:`fontSize--xl`},`❤️`)},`This event has a custom node`),f.createElement(u,{kind:`start`},`Something kicked off this whole process`)),_={title:`Components/TimelineEvent`,component:u,argTypes:{icon:{options:[``,...o]}}},h.__docgenInfo={description:``,methods:[],displayName:`StackingTimelineEvents`},g.__docgenInfo={description:``,methods:[],displayName:`CustomNode`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <TimelineEvent {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <>
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
  </>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <>
    <TimelineEvent kind="pending">
      We are still waiting on this one
    </TimelineEvent>
    <TimelineEvent renderNode={() => <div className="fontSize--xl">❤️</div>}>
      This event has a custom node
    </TimelineEvent>
    <TimelineEvent kind="start">
      Something kicked off this whole process
    </TimelineEvent>
  </>`,...g.parameters?.docs?.source}}},v=[`Overview`,`StackingTimelineEvents`,`CustomNode`]}))();export{g as CustomNode,m as Overview,h as StackingTimelineEvents,v as __namedExportsOrder,_ as default};