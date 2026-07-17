import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-BOevXIh5.js";import{i as r,n as i,r as a,t as o}from"./Row-Cn7xdH9O.js";import{n as s,t as c}from"./Button-BIxX7iif.js";var l,u,d,f,p,m,h,g,_;t((()=>{l=e(n()),s(),i(),r(),u=e=>l.createElement(`div`,{className:`nds-typography`},l.createElement(o,e)),d=u.bind({}),d.args={children:[l.createElement(o.Item,{shrink:!0},l.createElement(`img`,{alt:`demo`,src:`https://via.placeholder.com/60`})),l.createElement(o.Item,null,`The image row item is set to `,l.createElement(`code`,null,`shrink`)," to content width. This item grows to fill remaining space. Adjust the `gapSize` prop on `Row` to adjust the gutters between items.")]},f=()=>l.createElement(l.Fragment,null,l.createElement(`style`,{dangerouslySetInnerHTML:{__html:`
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
  `}}),l.createElement(`div`,{className:`sb-nds-row-debug nds-typography fontSize--s`},l.createElement(o,null,l.createElement(o.Item,{shrink:!0},l.createElement(`code`,null,`Row.Item shrink`)),l.createElement(o.Item,null,l.createElement(`code`,null,`Row.Item`))),l.createElement(o,null,l.createElement(o.Item,null,l.createElement(`code`,null,`Row.Item`)),l.createElement(o.Item,{shrink:!0},l.createElement(`code`,null,`Row.Item shrink`))),l.createElement(o,null,l.createElement(o.Item,null,l.createElement(`code`,null,`Row.Item`)),l.createElement(o.Item,null,l.createElement(`code`,null,`Row.Item`)),l.createElement(o.Item,{shrink:!0},l.createElement(`code`,null,`Row.Item shrink`)),l.createElement(o.Item,{shrink:!0},l.createElement(`code`,null,`Row.Item shrink`))),l.createElement(o,null,l.createElement(o.Item,null,l.createElement(`code`,null,`Row.Item`)),l.createElement(o.Item,null,l.createElement(`code`,null,`Row.Item`)),l.createElement(o.Item,null,l.createElement(`code`,null,`Row.Item`)),l.createElement(o.Item,null,l.createElement(`code`,null,`Row.Item`))),l.createElement(o,null,l.createElement(o.Item,{shrink:!0},l.createElement(`code`,null,`Row.Item shrink`)),l.createElement(o.Item,{shrink:!0},l.createElement(`code`,null,`Row.Item shrink`)),l.createElement(o.Item,{shrink:!0},l.createElement(`code`,null,`Row.Item shrink`)),l.createElement(o.Item,{shrink:!0},l.createElement(`code`,null,`Row.Item shrink`))))),f.parameters={docs:{description:{story:"Extra styles have been added to visualize elements rendered by `Row` and `Row.Item`. Try resizing your browser window to see how the layout changes."}}},p=()=>l.createElement(`div`,{className:`nds-typography`},l.createElement(o,{alignItems:`center`},l.createElement(o.Item,null,l.createElement(`h3`,{className:`fontFamily--body fontSize--xl`},`Account details`)),l.createElement(o.Item,{shrink:!0},l.createElement(`a`,{className:`fontColor--pine`,href:`#`},`More details`)),l.createElement(o.Item,{shrink:!0},l.createElement(`a`,{className:`fontColor--pine`,href:`#`},`Edit`)))),p.parameters={docs:{description:{story:"The first `Row.Item` fills the space while the last two shrink to the width of the links. The `alignItems` prop is used to vertically center the row item content."}}},m=()=>l.createElement(`div`,{className:`nds-typography`},l.createElement(o,{justifyContent:`end`,alignItems:`center`},l.createElement(o.Item,{shrink:!0},l.createElement(c,{kind:`plain`},`Cancel`)),l.createElement(o.Item,{shrink:!0},l.createElement(c,null,`Continue`)))),m.parameters={docs:{description:{story:"If a Row contains only shrink items, they will be justified to `flex-start` by default. To right-align them, set the `justifyContent` prop to `end`."}}},h=()=>l.createElement(`div`,{className:`nds-typography`},l.createElement(o,{as:`ul`},l.createElement(o.Item,{as:`li`},`Row item as a `,l.createElement(`code`,null,`li`),` inside a `,l.createElement(`code`,null,`ul`),` Row`),l.createElement(o.Item,{as:`li`},`Row item as a `,l.createElement(`code`,null,`li`),` inside a `,l.createElement(`code`,null,`ul`),` Row`))),h.parameters={docs:{description:{story:"The `as` prop is used to control the html element type that renders of the root nodes of `Row` and `Row.Item`"}}},g={title:`Components/Row`,component:o,subcomponents:{RowItem:a}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div className="nds-typography">
    <Row {...args} />
  </div>`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <>
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
  </>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <div className="nds-typography">
    <Row alignItems="center">
      <Row.Item>
        <h3 className="fontFamily--body fontSize--xl">Account details</h3>
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
  </div>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <div className="nds-typography">
    <Row justifyContent="end" alignItems="center">
      <Row.Item shrink>
        <Button kind="plain">Cancel</Button>
      </Row.Item>
      <Row.Item shrink>
        <Button>Continue</Button>
      </Row.Item>
    </Row>
  </div>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <div className="nds-typography">
    <Row as="ul">
      <Row.Item as="li">
        Row item as a <code>li</code> inside a <code>ul</code> Row
      </Row.Item>
      <Row.Item as="li">
        Row item as a <code>li</code> inside a <code>ul</code> Row
      </Row.Item>
    </Row>
  </div>`,...h.parameters?.docs?.source}}},_=[`Overview`,`DebugView`,`SectionHeaderExample`,`JustifyingContent`,`AsProp`]}))();export{h as AsProp,f as DebugView,m as JustifyingContent,d as Overview,p as SectionHeaderExample,_ as __namedExportsOrder,g as default};