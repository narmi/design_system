import{e}from"./iframe-du4X1prS.js";import{B as s}from"./index-CCqBTLvV.js";import{a as c,R as t}from"./index-F7sdeD-M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-CX5QnIxx.js";import"./index-_3s9vH5v.js";import"./index-Cu-38e61.js";const i=l=>e.createElement("div",{className:"nds-typography"},e.createElement(t,l)),n=i.bind({});n.args={children:[e.createElement(t.Item,{shrink:!0},e.createElement("img",{alt:"demo",src:"https://via.placeholder.com/60"})),e.createElement(t.Item,null,"The image row item is set to ",e.createElement("code",null,"shrink")," to content width. This item grows to fill remaining space. Adjust the `gapSize` prop on `Row` to adjust the gutters between items.")]};const o=()=>e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:`
  .sb-nds-row-debug .nds-row {
    outline: 1px dashed hotpink;
    margin: var(--space-m);
  }
  .sb-nds-row-debug .nds-row-item {
    background: antiquewhite;
  }
  .sb-nds-row-debug .nds-row-item--shrink {
    background: aquamarine;
  }
  `}}),e.createElement("div",{className:"sb-nds-row-debug nds-typography fontSize--s"},e.createElement(t,null,e.createElement(t.Item,{shrink:!0},e.createElement("code",null,"Row.Item shrink")),e.createElement(t.Item,null,e.createElement("code",null,"Row.Item"))),e.createElement(t,null,e.createElement(t.Item,null,e.createElement("code",null,"Row.Item")),e.createElement(t.Item,{shrink:!0},e.createElement("code",null,"Row.Item shrink"))),e.createElement(t,null,e.createElement(t.Item,null,e.createElement("code",null,"Row.Item")),e.createElement(t.Item,null,e.createElement("code",null,"Row.Item")),e.createElement(t.Item,{shrink:!0},e.createElement("code",null,"Row.Item shrink")),e.createElement(t.Item,{shrink:!0},e.createElement("code",null,"Row.Item shrink"))),e.createElement(t,null,e.createElement(t.Item,null,e.createElement("code",null,"Row.Item")),e.createElement(t.Item,null,e.createElement("code",null,"Row.Item")),e.createElement(t.Item,null,e.createElement("code",null,"Row.Item")),e.createElement(t.Item,null,e.createElement("code",null,"Row.Item"))),e.createElement(t,null,e.createElement(t.Item,{shrink:!0},e.createElement("code",null,"Row.Item shrink")),e.createElement(t.Item,{shrink:!0},e.createElement("code",null,"Row.Item shrink")),e.createElement(t.Item,{shrink:!0},e.createElement("code",null,"Row.Item shrink")),e.createElement(t.Item,{shrink:!0},e.createElement("code",null,"Row.Item shrink")))));o.parameters={docs:{description:{story:"Extra styles have been added to visualize elements rendered by `Row` and `Row.Item`. Try resizing your browser window to see how the layout changes."}}};const r=()=>e.createElement("div",{className:"nds-typography"},e.createElement(t,{alignItems:"center"},e.createElement(t.Item,null,e.createElement("h3",{className:"fontFamily--body fontSize--l"},"Account details")),e.createElement(t.Item,{shrink:!0},e.createElement("a",{className:"fontColor--pine",href:"#"},"More details")),e.createElement(t.Item,{shrink:!0},e.createElement("a",{className:"fontColor--pine",href:"#"},"Edit"))));r.parameters={docs:{description:{story:"The first `Row.Item` fills the space while the last two shrink to the width of the links. The `alignItems` prop is used to vertically center the row item content."}}};const m=()=>e.createElement("div",{className:"nds-typography"},e.createElement(t,{justifyContent:"end",alignItems:"center"},e.createElement(t.Item,{shrink:!0},e.createElement(s,{kind:"plain"},"Cancel")),e.createElement(t.Item,{shrink:!0},e.createElement(s,null,"Continue"))));m.parameters={docs:{description:{story:"If a Row contains only shrink items, they will be justified to `flex-start` by default. To right-align them, set the `justifyContent` prop to `end`."}}};const a=()=>e.createElement("div",{className:"nds-typography"},e.createElement(t,{as:"ul"},e.createElement(t.Item,{as:"li"},"Row item as a ",e.createElement("code",null,"li")," inside a ",e.createElement("code",null,"ul")," Row"),e.createElement(t.Item,{as:"li"},"Row item as a ",e.createElement("code",null,"li")," inside a ",e.createElement("code",null,"ul")," Row")));a.parameters={docs:{description:{story:"The `as` prop is used to control the html element type that renders of the root nodes of `Row` and `Row.Item`"}}};const k={title:"Components/Row",component:t,subcomponents:{RowItem:c}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div className="nds-typography">
    <Row {...args} />
  </div>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <>
    <style dangerouslySetInnerHTML={{
    __html: \`
  .sb-nds-row-debug .nds-row {
    outline: 1px dashed hotpink;
    margin: var(--space-m);
  }
  .sb-nds-row-debug .nds-row-item {
    background: antiquewhite;
  }
  .sb-nds-row-debug .nds-row-item--shrink {
    background: aquamarine;
  }
  \`
  }} />
    <div className="sb-nds-row-debug nds-typography fontSize--s">
      <Row>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
      </Row>
      <Row>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
      </Row>
      <Row>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
      </Row>
      <Row>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
      </Row>
      <Row>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
      </Row>
    </div>
  </>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div className="nds-typography">
    <Row alignItems="center">
      <Row.Item>
        <h3 className="fontFamily--body fontSize--l">Account details</h3>
      </Row.Item>
      <Row.Item shrink>
        <a className="fontColor--pine" href="#">
          More details
        </a>
      </Row.Item>
      <Row.Item shrink>
        <a className="fontColor--pine" href="#">
          Edit
        </a>
      </Row.Item>
    </Row>
  </div>`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <div className="nds-typography">
    <Row justifyContent="end" alignItems="center">
      <Row.Item shrink>
        <Button kind="plain">Cancel</Button>
      </Row.Item>
      <Row.Item shrink>
        <Button>Continue</Button>
      </Row.Item>
    </Row>
  </div>`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <div className="nds-typography">
    <Row as="ul">
      <Row.Item as="li">
        Row item as a <code>li</code> inside a <code>ul</code> Row
      </Row.Item>
      <Row.Item as="li">
        Row item as a <code>li</code> inside a <code>ul</code> Row
      </Row.Item>
    </Row>
  </div>`,...a.parameters?.docs?.source}}};const g=["Overview","DebugView","SectionHeaderExample","JustifyingContent","AsProp"];export{a as AsProp,o as DebugView,m as JustifyingContent,n as Overview,r as SectionHeaderExample,g as __namedExportsOrder,k as default};
