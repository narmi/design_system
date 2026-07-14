import{o as e}from"./preload-helper-CHxnduP2.js";import{f as t,n,s as r,w as i}from"./blocks-ilmIGbUD.js";import{s as a}from"./chunk-LITCR56V-DyWaEeHM.js";import{t as o}from"./mdx-react-shim-DDIXjJaT.js";import{n as s}from"./TokenTable--2MlXbyN.js";import{Background as c,Base as l,System as u,Theme as d,Transparency as f,t as p}from"./color.stories-D8_W2I4Y.js";function m(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...i(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{title:`Design Tokens/Color`}),`
`,(0,g.jsx)(t.h1,{id:`color-tokens`,children:`Color Tokens`}),`
`,(0,g.jsx)(t.h2,{id:`narmi-base-colors`,children:`Narmi Base Colors`}),`
`,(0,g.jsx)(n,{of:l,name:`Base`,style:{height:`auto`}}),`
`,(0,g.jsx)(t.h2,{id:`theme-colors`,children:`Theme Colors`}),`
`,(0,g.jsxs)(t.p,{children:[`Tokens with the prefix `,(0,g.jsx)(t.code,{children:`--theme`}),` are dedicated to theming. These CSS custom
properties are intended to be overridden by institution settings.`]}),`
`,(0,g.jsx)(n,{of:d,style:{height:`auto`}}),`
`,(0,g.jsx)(t.h3,{id:`enabling-theming-in-your-application`,children:`Enabling theming in your application`}),`
`,(0,g.jsxs)(t.p,{children:[`To set the value of these theming variables, redeclare theme custom properties
in your application `,(0,g.jsx)(t.em,{children:`after`}),` the design system stylesheet link.`]}),`
`,(0,g.jsx)(t.p,{children:`You will need to declare both full values and RGB list values, which are used by
this design system for composing transparent colors:`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-html`,children:`<link rel="stylesheet" href="<design system style.css url>" />
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
`,(0,g.jsx)(t.h2,{id:`background-colors`,children:`Background Colors`}),`
`,(0,g.jsx)(t.p,{children:`Colors reserved for element backgrounds.`}),`
`,(0,g.jsx)(n,{of:c,style:{height:`auto`}}),`
`,(0,g.jsx)(t.h2,{id:`system-colors`,children:`System Colors`}),`
`,(0,g.jsx)(t.p,{children:`Colors used for system messages and indicators.`}),`
`,(0,g.jsx)(n,{of:u,style:{height:`auto`}}),`
`,(0,g.jsx)(t.h2,{id:`transparency`,children:`Transparency`}),`
`,(0,g.jsxs)(t.p,{children:[`All `,(0,g.jsx)(t.a,{href:`#narmi-base-colors`,children:`Base Colors`}),`, `,(0,g.jsx)(t.a,{href:`#system-colors`,children:`System Colors`}),`,
`,(0,g.jsx)(t.a,{href:`#theme-colors`,children:`Theme Colors`}),`, and `,(0,g.jsx)(t.a,{href:`#background-colors`,children:`Background Colors`}),` are available as partial RGB values
that can be composed with the following alpha values to lighten or darken a color.`]}),`
`,(0,g.jsxs)(t.p,{children:[`These values are prefixed with `,(0,g.jsx)(t.code,{children:`--rgb`}),` instead of `,(0,g.jsx)(t.code,{children:`--color`}),`.
Theme RGB values are prefixed with `,(0,g.jsx)(t.code,{children:`--theme-rgb`}),`.`]}),`
`,(0,g.jsxs)(t.p,{children:[`The value `,(0,g.jsx)(t.code,{children:`rgb(var(--rgb-pine))`}),` is equivalent to `,(0,g.jsx)(t.code,{children:`var(--color-pine)`}),`.`]}),`
`,(0,g.jsx)(t.h3,{id:`alpha-values`,children:`Alpha Values`}),`
`,(0,g.jsx)(n,{of:f,style:{height:`auto`}}),`
`,(0,g.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{children:`background-color: rgba(var(--rgb-pine), var(--alpha-10));
color: rgba(var(--theme-rgb-primary), var(--alpha-20));
`})})]})}function h(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=a(),o(),t(),s(),p()}))();export{h as default};