import{j as e,M as i,C as n}from"./blocks-DhIwsq0u.js";import{useMDXComponents as t}from"./index-FuSwWz6R.js";import"./TokenTable-BLDqSJ3h.js";import{Base as a,Theme as l,Background as h,System as c,Transparency as d}from"./color.stories-BZ1VqiSZ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-nmovHnnE.js";import"./index-BfWMpkWW.js";import"./index-B2UKGwES.js";import"./index-RvS1aOr8.js";function o(s){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Design Tokens/Color"}),`
`,e.jsx(r.h1,{id:"color-tokens",children:"Color Tokens"}),`
`,e.jsx(r.h2,{id:"narmi-base-colors",children:"Narmi Base Colors"}),`
`,e.jsx(n,{of:a,name:"Base",style:{height:"auto"}}),`
`,e.jsx(r.h2,{id:"theme-colors",children:"Theme Colors"}),`
`,e.jsxs(r.p,{children:["Tokens with the prefix ",e.jsx(r.code,{children:"--theme"}),` are dedicated to theming. These CSS custom
properties are intended to be overridden by institution settings.`]}),`
`,e.jsx(n,{of:l,style:{height:"auto"}}),`
`,e.jsx(r.h3,{id:"enabling-theming-in-your-application",children:"Enabling theming in your application"}),`
`,e.jsxs(r.p,{children:[`To set the value of these theming variables, redeclare theme custom properties
in your application `,e.jsx(r.em,{children:"after"})," the design system stylesheet link."]}),`
`,e.jsx(r.p,{children:`You will need to declare both full values and RGB list values, which are used by
this design system for composing transparent colors:`}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<link rel="stylesheet" href="<design system style.css url>" />
<style type="text/css">
  /* your theming overrides */
  :root {
    --theme-primary: red;
    --theme-secondary: yellow;
    --theme-rgb-primary: 255, 0, 0;
    --theme-rgb-secondary: 255, 255, 0;
  }
</style>
`})}),`
`,e.jsx(r.h2,{id:"background-colors",children:"Background Colors"}),`
`,e.jsx(r.p,{children:"Colors reserved for element backgrounds."}),`
`,e.jsx(n,{of:h,style:{height:"auto"}}),`
`,e.jsx(r.h2,{id:"system-colors",children:"System Colors"}),`
`,e.jsx(r.p,{children:"Colors used for system messages and indicators."}),`
`,e.jsx(n,{of:c,style:{height:"auto"}}),`
`,e.jsx(r.h2,{id:"transparency",children:"Transparency"}),`
`,e.jsxs(r.p,{children:["All ",e.jsx(r.a,{href:"#narmi-base-colors",children:"Base Colors"}),", ",e.jsx(r.a,{href:"#system-colors",children:"System Colors"}),`,
`,e.jsx(r.a,{href:"#theme-colors",children:"Theme Colors"}),", and ",e.jsx(r.a,{href:"#background-colors",children:"Background Colors"}),` are available as partial RGB values
that can be composed with the following alpha values to lighten or darken a color.`]}),`
`,e.jsxs(r.p,{children:["These values are prefixed with ",e.jsx(r.code,{children:"--rgb"})," instead of ",e.jsx(r.code,{children:"--color"}),`.
Theme RGB values are prefixed with `,e.jsx(r.code,{children:"--theme-rgb"}),"."]}),`
`,e.jsxs(r.p,{children:["The value ",e.jsx(r.code,{children:"rgb(var(--rgb-pine))"})," is equivalent to ",e.jsx(r.code,{children:"var(--color-pine)"}),"."]}),`
`,e.jsx(r.h3,{id:"alpha-values",children:"Alpha Values"}),`
`,e.jsx(n,{of:d,style:{height:"auto"}}),`
`,e.jsx(r.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`background-color: rgba(var(--rgb-pine), var(--alpha-10));
color: rgba(var(--theme-rgb-primary), var(--alpha-20));
`})})]})}function v(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(o,{...s})}):o(s)}export{v as default};
