import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-D9BS-_Fi.js";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(null,arguments)}var i,a,o,s,c,l,u,d;t((()=>{i=e(n()),a={title:`Examples/Color Vision`,parameters:{docs:{description:{component:`
Status colors are re-based per color-vision deficiency so meaning rides the
axis that survives. Palettes are opt-in via a \`data-color-vision-deficiency\`
attribute on the \`<html>\` element:

- _no attribute_ → **Typical Vision**: the default status palette
- \`data-color-vision-deficiency="red-green"\` → **Protanopia / Deuteranopia**:
  the two red–green deficiencies share one setting; meaning moves onto the intact
  blue–amber axis (Okabe-Ito CVD-safe values). The clinical names
  \`"protanopia"\` / \`"deuteranopia"\` are also accepted as aliases.
- \`data-color-vision-deficiency="tritanopia"\` → blue–yellow deficiency:
  status colors are re-based to stay distinguishable under tritanopia, with success/error
  pushed toward lightness extremes and info/warn separated by hue + lightness

Because these override the primitive \`--color-*Dark\` / \`--color-*Light\` custom
properties, any consumer using them picks up the CVD-safe value automatically.

> **Color never carries the load alone.** Every status must still be paired with
> a non-color cue (icon and/or label). These palettes only improve the odds that
> color reinforces — never replaces — that cue.

**Use the "Color Vision" toolbar button to preview each palette below.**
        `}}}},o=[{key:`success`,icon:`✓`,label:`Success`},{key:`info`,icon:`ⓘ`,label:`Info`},{key:`warn`,icon:`⚠`,label:`Warning`},{key:`error`,icon:`✕`,label:`Error`}],s=[{attr:void 0,title:`Typical Vision`},{attr:`red-green`,title:`Protanopia / Deuteranopia`},{attr:`tritanopia`,title:`Tritanopia`}],c=()=>i.createElement(`div`,null,o.map(({key:e,icon:t,label:n})=>i.createElement(`div`,{key:e,style:{display:`flex`,alignItems:`center`,gap:`12px`,padding:`10px 14px`,borderRadius:`6px`,marginBottom:`8px`,backgroundColor:`var(--color-${e}Light)`,border:`1px solid var(--color-${e}Dark)`}},i.createElement(`span`,{"aria-hidden":`true`,style:{color:`var(--color-${e}Dark)`,fontWeight:700,fontSize:`16px`,width:`20px`,textAlign:`center`}},t),i.createElement(`span`,{style:{color:`var(--color-${e}Dark)`,fontWeight:600,fontSize:`14px`}},n)))),l=()=>i.createElement(`div`,{style:{fontFamily:`var(--font-family-default, sans-serif)`}},i.createElement(`p`,{style:{fontSize:`14px`,color:`var(--font-color-secondary)`,marginBottom:`24px`}},`Use the `,i.createElement(`strong`,null,`Color Vision`),` toolbar button to switch the active palette. Every status keeps an icon and label so color never carries meaning alone.`),i.createElement(c,null)),l.storyName=`Color Vision`,u=()=>i.createElement(`div`,{style:{fontFamily:`var(--font-family-default, sans-serif)`}},i.createElement(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`24px`}},s.map(({attr:e,title:t})=>i.createElement(`div`,r({key:t},e?{"data-color-vision-deficiency":e}:{}),i.createElement(`div`,{style:{fontSize:`13px`,fontWeight:700,marginBottom:`12px`,color:`var(--font-color-heading)`}},t,e?i.createElement(`span`,{style:{display:`block`,fontWeight:400,fontFamily:`monospace`,fontSize:`11px`,color:`var(--font-color-secondary)`}},`[data-color-vision-deficiency="${e}"]`):null),i.createElement(c,null))))),u.storyName=`Palette Comparison`,l.__docgenInfo={description:`Reacts to the "Color Vision" toolbar toggle (which sets the attribute on
<html>). Non-color cues (icon + label) accompany every status.`,methods:[],displayName:`Specimen`},u.__docgenInfo={description:"Side-by-side comparison of every palette at once, each column scoped with its\nown `data-color-vision-deficiency` attribute — independent of the toolbar.",methods:[],displayName:`Comparison`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <div style={{
  fontFamily: "var(--font-family-default, sans-serif)"
}}>
    <p style={{
    fontSize: "14px",
    color: "var(--font-color-secondary)",
    marginBottom: "24px"
  }}>
      Use the <strong>Color Vision</strong> toolbar button to switch the active
      palette. Every status keeps an icon and label so color never carries
      meaning alone.
    </p>
    <StatusStack />
  </div>`,...l.parameters?.docs?.source},description:{story:`Reacts to the "Color Vision" toolbar toggle (which sets the attribute on
<html>). Non-color cues (icon + label) accompany every status.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <div style={{
  fontFamily: "var(--font-family-default, sans-serif)"
}}>
    <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px"
  }}>
      {PALETTES.map(({
      attr,
      title
    }) => <div key={title} {...attr ? {
      "data-color-vision-deficiency": attr
    } : {}}>
          <div style={{
        fontSize: "13px",
        fontWeight: 700,
        marginBottom: "12px",
        color: "var(--font-color-heading)"
      }}>
            {title}
            {attr ? <span style={{
          display: "block",
          fontWeight: 400,
          fontFamily: "monospace",
          fontSize: "11px",
          color: "var(--font-color-secondary)"
        }}>
                {\`[data-color-vision-deficiency="\${attr}"]\`}
              </span> : null}
          </div>
          <StatusStack />
        </div>)}
    </div>
  </div>`,...u.parameters?.docs?.source},description:{story:"Side-by-side comparison of every palette at once, each column scoped with its\nown `data-color-vision-deficiency` attribute — independent of the toolbar.",...u.parameters?.docs?.description}}},d=[`Specimen`,`Comparison`]}))();export{u as Comparison,l as Specimen,d as __namedExportsOrder,a as default};