import{e}from"./iframe-D0X-AFll.js";import{A as a}from"./index-D0H5RfeT.js";import{C as n}from"./index-4DLJMoCW.js";import{R as t}from"./index-C8N6sq9t.js";/* empty css              */import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./index-B7bOFJLy.js";import"./index-BIi44vXn.js";import"./AsElement-CqeSJfYv.js";const o=()=>e.createElement("div",{className:"productCard bgColor--cloudGrey rounded--all--l"},e.createElement("div",{className:"productCard-content bgColor--white rounded--top--l padding--all--s border--top border--left border--right"},e.createElement(t,null,e.createElement(t.Item,null,"Content area"),e.createElement(t.Item,{shrink:!0},e.createElement(n,{label:"",kind:"table"}))),e.createElement("div",null,"Any content can go in here.")),e.createElement(a,{renderSummary:r=>e.createElement("div",{style:{background:"transparent"}},e.createElement("div",{className:"productCard-summary bgColor--white rounded--bottom--l padding--all--s border--bottom border--left border--right"},e.createElement("span",null,r?"Close accordion":"Open accordion")))},e.createElement("div",{className:"rounded--bottom--l padding--top--l bgColor--cloudGrey padding--all--s"},"Surprise!")));o.parameters={docs:{description:{story:`
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
`}}};const g={title:"Examples/Cards",parameters:{docs:{description:{component:`
Most content in the Narmi UI is contained within a "card" of some kind. Some are toggles,
some are buttons, some expand, and some are just rounded rectagles that simply hold content.

It's important to know which card to use, and when.
`}}}};o.__docgenInfo={description:"",methods:[],displayName:"ProductCard"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <div className="productCard bgColor--cloudGrey rounded--all--l">
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
  </div>`,...o.parameters?.docs?.source}}};const C=["ProductCard"];export{o as ProductCard,C as __namedExportsOrder,g as default};
