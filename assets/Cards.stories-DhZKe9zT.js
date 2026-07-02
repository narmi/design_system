import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-E1S1JOCR.js";import{n as r,t as i}from"./Accordion-89T1QYZM.js";import{n as a,t as o}from"./Row-BPjkXgKU.js";import{n as s,t as c}from"./Checkbox-DuWThOek.js";import{t as l}from"./Cards-CYMTP4aj.js";var u,d,f,p;e((()=>{u=t(n()),r(),s(),a(),l(),d=()=>u.createElement(`div`,{className:`productCard bgColor--cloudGrey rounded--all--l`},u.createElement(`div`,{className:`productCard-content bgColor--white rounded--top--l padding--all--s border--top border--left border--right`},u.createElement(o,null,u.createElement(o.Item,null,`Content area`),u.createElement(o.Item,{shrink:!0},u.createElement(c,{label:``,kind:`table`}))),u.createElement(`div`,null,`Any content can go in here.`)),u.createElement(i,{renderSummary:e=>u.createElement(`div`,{style:{background:`transparent`}},u.createElement(`div`,{className:`productCard-summary bgColor--white rounded--bottom--l padding--all--s border--bottom border--left border--right`},u.createElement(`span`,null,e?`Close accordion`:`Open accordion`)))},u.createElement(`div`,{className:`rounded--bottom--l padding--top--l bgColor--cloudGrey padding--all--s`},`Surprise!`))),d.parameters={docs:{description:{story:`
## Making multiple elements look like part of the same card
This is a complex card containing multiple interactive elements within, but responds
as a single visual unit. Helper classes are used to visually attach an \`Accordion\` to the bottom of the card.

#### Why do this?
If the entire card were clickable as one unit, interactive controls would become nested, which is invalid.
A key principle of accessibility is keeping interactive elements valid in the navigation tree.

#### How does it work?
- The top of the card is a div with a flat bottom.
- The bottom of the card is an \`Accordion\` summary with a flat top.
- The wrapping container has the same background color as the accordion content to create the overlap effect.

#### Custom CSS for selection-aware outline
\`\`\`css
.productCard:has(:checked) :is(.productCard-content, .productCard-summary) {
  border-color: var(--theme-primary);
}
\`\`\`
`}}},f={title:`Examples/Cards`,parameters:{docs:{description:{component:`
Most content in the Narmi UI is contained within a "card" of some kind. Some are toggles,
some are buttons, some expand, and some are just rounded rectagles that simply hold content.

It's important to know which card to use, and when.
`}}}},d.__docgenInfo={description:``,methods:[],displayName:`ProductCard`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <div className="productCard bgColor--cloudGrey rounded--all--l">
    <div className="productCard-content bgColor--white rounded--top--l padding--all--s border--top border--left border--right">
      <Row>
        <Row.Item>Content area</Row.Item>
        <Row.Item shrink>
          <Checkbox label="" kind="table" />
        </Row.Item>
      </Row>
      <div>Any content can go in here.</div>
    </div>
    <Accordion renderSummary={isOpen => <div style={{
    background: "transparent"
  }}>
          <div className="productCard-summary bgColor--white rounded--bottom--l padding--all--s border--bottom border--left border--right">
            <span>{isOpen ? "Close accordion" : "Open accordion"}</span>
          </div>
        </div>}>
      <div className="rounded--bottom--l padding--top--l bgColor--cloudGrey padding--all--s">
        Surprise!
      </div>
    </Accordion>
  </div>`,...d.parameters?.docs?.source}}},p=[`ProductCard`]}))();export{d as ProductCard,p as __namedExportsOrder,f as default};