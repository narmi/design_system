import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-CwIILjg9.js";var r,i,a,o,s,c,l,u,d,f,p;t((()=>{r=e(n()),i={title:`Examples/Color Modes`,parameters:{docs:{description:{component:`
Color modes allow the design system to adapt to user preferences like high contrast.
Contrast is a three-state user preference stored on the \`<html>\` element as a
\`data-prefers-contrast\` attribute:

- _no attribute_ → **System**: follow the OS via the \`prefers-contrast: more\` media query
- \`data-prefers-contrast="less"\` → **Standard**: force the default palette even
  when the OS reports increased contrast
- \`data-prefers-contrast="more"\` → **High Contrast**: force the high-contrast palette

### Authoring high-contrast overrides in components

Use the \`contrastMore\` Sass mixin (from \`src/base-styles/scss-utils.scss\`,
already available in every component \`.scss\`) to fence styles that should
only apply when the user prefers more contrast. It expands into the same
two selectors emitted by the token pipeline: a \`prefers-contrast: more\`
media query (scoped so \`data-prefers-contrast="less"\` opts out) and a
\`[data-prefers-contrast="more"]\` block. The parent selector at the call
site is preserved in both blocks via \`&\`.

\`\`\`scss
.nds-card {
  border: 1px solid var(--border-color-default);

  @include contrastMore {
    border-color: #000;
    background: #fff;
  }
}
\`\`\`

**Use the "Contrast" toolbar button to switch between the three states and see the changes below.**
        `}}}},a={display:`flex`,alignItems:`center`,justifyContent:`center`,height:`64px`,borderRadius:`4px`,border:`1px solid var(--border-color-default)`,fontSize:`14px`,fontWeight:600,color:`#000`},o={fontSize:`13px`,marginTop:`4px`,color:`var(--font-color-secondary)`,fontFamily:`monospace`},s={display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(160px, 1fr))`,gap:`16px`,marginBottom:`32px`},c={fontSize:`16px`,fontWeight:700,marginBottom:`12px`,color:`var(--font-color-heading)`},l=[{name:`--bgColor-white`,label:`white`},{name:`--bgColor-snowGrey`,label:`snowGrey`},{name:`--bgColor-neutralGrey`,label:`neutralGrey`},{name:`--bgColor-smokeGrey`,label:`smokeGrey`},{name:`--bgColor-blueGrey`,label:`blueGrey`},{name:`--bgColor-cloudGrey`,label:`cloudGrey`}],u=[{name:`--font-color-heading`,label:`heading`},{name:`--font-color-primary`,label:`primary`},{name:`--font-color-secondary`,label:`secondary`},{name:`--font-color-hint`,label:`hint`}],d=[{name:`--border-color-default`,label:`default`},{name:`--border-color-light`,label:`light`},{name:`--border-color-primary`,label:`primary`}],f=()=>r.createElement(`div`,{style:{fontFamily:`var(--font-family-default, sans-serif)`}},r.createElement(`p`,{style:{fontSize:`14px`,color:`var(--font-color-secondary)`,marginBottom:`32px`}},`Use the `,r.createElement(`strong`,null,`Contrast`),` toolbar button to change the color contrast mode.`),r.createElement(`div`,{style:c},`Background Colors`),r.createElement(`div`,{style:s},l.map(({name:e,label:t})=>r.createElement(`div`,{key:e},r.createElement(`div`,{style:{...a,backgroundColor:`var(${e})`}},`Aa`),r.createElement(`div`,{style:o},t)))),r.createElement(`div`,{style:c},`Font Colors`),r.createElement(`div`,{style:s},u.map(({name:e,label:t})=>r.createElement(`div`,{key:e},r.createElement(`div`,{style:{...a,backgroundColor:`#FFFFFF`,color:`var(${e})`,fontSize:`16px`}},`The quick brown fox`),r.createElement(`div`,{style:o},t)))),r.createElement(`div`,{style:c},`Border Colors`),r.createElement(`div`,{style:s},d.map(({name:e,label:t})=>r.createElement(`div`,{key:e},r.createElement(`div`,{style:{...a,backgroundColor:`#FFFFFF`,borderWidth:`2px`,borderStyle:`solid`,borderColor:`var(${e})`}},`border`),r.createElement(`div`,{style:o},t))))),f.storyName=`Color Modes`,f.__docgenInfo={description:``,methods:[],displayName:`Specimen`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <div style={{
  fontFamily: "var(--font-family-default, sans-serif)"
}}>
    <p style={{
    fontSize: "14px",
    color: "var(--font-color-secondary)",
    marginBottom: "32px"
  }}>
      Use the <strong>Contrast</strong> toolbar button to change the color
      contrast mode.
    </p>

    {/* Background Colors */}
    <div style={sectionHeadingStyle}>Background Colors</div>
    <div style={gridStyle}>
      {backgroundTokens.map(({
      name,
      label
    }) => <div key={name}>
          <div style={{
        ...swatchStyle,
        backgroundColor: \`var(\${name})\`
      }}>
            Aa
          </div>
          <div style={labelStyle}>{label}</div>
        </div>)}
    </div>

    {/* Font Colors */}
    <div style={sectionHeadingStyle}>Font Colors</div>
    <div style={gridStyle}>
      {fontTokens.map(({
      name,
      label
    }) => <div key={name}>
          <div style={{
        ...swatchStyle,
        backgroundColor: "#FFFFFF",
        color: \`var(\${name})\`,
        fontSize: "16px"
      }}>
            The quick brown fox
          </div>
          <div style={labelStyle}>{label}</div>
        </div>)}
    </div>

    {/* Border Colors */}
    <div style={sectionHeadingStyle}>Border Colors</div>
    <div style={gridStyle}>
      {borderTokens.map(({
      name,
      label
    }) => <div key={name}>
          <div style={{
        ...swatchStyle,
        backgroundColor: "#FFFFFF",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: \`var(\${name})\`
      }}>
            border
          </div>
          <div style={labelStyle}>{label}</div>
        </div>)}
    </div>
  </div>`,...f.parameters?.docs?.source}}},p=[`Specimen`]}))();export{f as Specimen,p as __namedExportsOrder,i as default};