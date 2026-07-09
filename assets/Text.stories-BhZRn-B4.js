import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-MdneOW6q.js";import{t as r}from"./Cards-CYMTP4aj.js";var i,a,o,s;e((()=>{i=t(n()),r(),a=()=>{let[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,i.createElement(`h3`,{className:`margin--bottom`},`Tap to reveal`),i.createElement(`div`,{className:`bgColor--white rounded--all--l padding--all`,style:{maxWidth:`300px`}},i.createElement(`button`,{style:{textAlign:`start`},className:`button--reset`,onClick:()=>t(!e)},i.createElement(`div`,{className:e?``:`whiteSpace--truncate--multiLine--2`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`))))},a.parameters={docs:{description:{story:`
## Reveal more text on tap or click
NDS provides truncation helper classes that allow us to truncate one line or to
multiple lines. This example shows how to use a basic HTML button wrapper to implement
a "tap to reveal" pattern.

We use a standard HTML button reset by the \`button--reset\` helper class for interactivity.

The button adds or remove a truncation class on the text element. Up to 4 lines of text
are supported by truncation helper classes.
`}}},o={title:`Examples/Text`,parameters:{docs:{description:{component:`
Examples for controlling the flow of text content.
`}}}},a.__docgenInfo={description:``,methods:[],displayName:`TapToReveal`},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [isRevealed, setIsRevealed] = useState(false);
  return <>
      <h3 className="margin--bottom">Tap to reveal</h3>
      <div className="bgColor--white rounded--all--l padding--all" style={{
      maxWidth: "300px"
    }}>
        <button style={{
        textAlign: "start"
      }} className="button--reset" onClick={() => setIsRevealed(!isRevealed)}>
          <div className={isRevealed ? "" : "whiteSpace--truncate--multiLine--2"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </button>
      </div>
    </>;
}`,...a.parameters?.docs?.source}}},s=[`TapToReveal`]}))();export{a as TapToReveal,s as __namedExportsOrder,o as default};