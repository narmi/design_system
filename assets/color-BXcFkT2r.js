import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-BnCtKaSV.js";import{s as n}from"./chunk-LITCR56V-AcCrkDPM.js";import{f as r,n as i,s as a}from"./blocks-CuaAcGjk.js";import{t as o}from"./mdx-react-shim-9RzcSRdq.js";import{n as s}from"./TokenTable-C1MtY-jt.js";import{Background as c,System as l,Theme as u,Transparency as d,t as f}from"./color.stories-Cu9aC8tK.js";function p(e){let n={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{title:`Design Tokens/Color`}),`
`,(0,h.jsx)(n.h1,{id:`color-tokens`,children:`Color Tokens`}),`
`,(0,h.jsx)(n.h2,{id:`theme-colors`,children:`Theme Colors`}),`
`,(0,h.jsxs)(n.p,{children:[`Tokens with the prefix `,(0,h.jsx)(n.code,{children:`--theme`}),` are dedicated to theming. These CSS custom
properties are intended to be overridden by institution settings.`]}),`
`,(0,h.jsx)(i,{of:u,style:{height:`auto`}}),`
`,(0,h.jsx)(n.h3,{id:`enabling-theming-in-your-application`,children:`Enabling theming in your application`}),`
`,(0,h.jsxs)(n.p,{children:[`To set the value of these theming variables, redeclare theme custom properties
in your application `,(0,h.jsx)(n.em,{children:`after`}),` the design system stylesheet link.`]}),`
`,(0,h.jsx)(n.p,{children:`You will need to declare both full values and RGB list values, which are used by
this design system for composing transparent colors:`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-html`,children:`<link rel="stylesheet" href="<design system style.css url>" />
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
`,(0,h.jsx)(n.h2,{id:`background-colors`,children:`Background Colors`}),`
`,(0,h.jsx)(n.p,{children:`Colors reserved for element backgrounds.`}),`
`,(0,h.jsx)(i,{of:c,style:{height:`auto`}}),`
`,(0,h.jsx)(n.h2,{id:`system-colors`,children:`System Colors`}),`
`,(0,h.jsx)(n.p,{children:`Colors used for system messages and indicators.`}),`
`,(0,h.jsx)(i,{of:l,style:{height:`auto`}}),`
`,(0,h.jsx)(n.h2,{id:`transparency`,children:`Transparency`}),`
`,(0,h.jsxs)(n.p,{children:[`All `,(0,h.jsx)(n.a,{href:`#system-colors`,children:`System Colors`}),`,
`,(0,h.jsx)(n.a,{href:`#theme-colors`,children:`Theme Colors`}),`, and `,(0,h.jsx)(n.a,{href:`#background-colors`,children:`Background Colors`}),` are available as partial RGB values
that can be composed with the following alpha values to lighten or darken a color.`]}),`
`,(0,h.jsxs)(n.p,{children:[`These values are prefixed with `,(0,h.jsx)(n.code,{children:`--rgb`}),` instead of `,(0,h.jsx)(n.code,{children:`--color`}),`.
Theme RGB values are prefixed with `,(0,h.jsx)(n.code,{children:`--theme-rgb`}),`.`]}),`
`,(0,h.jsxs)(n.p,{children:[`The value `,(0,h.jsx)(n.code,{children:`rgb(var(--theme-rgb-primary))`}),` is equivalent to `,(0,h.jsx)(n.code,{children:`var(--theme-primary)`}),`.`]}),`
`,(0,h.jsx)(n.h3,{id:`alpha-values`,children:`Alpha Values`}),`
`,(0,h.jsx)(i,{of:d,style:{height:`auto`}}),`
`,(0,h.jsx)(n.h3,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{children:`background-color: rgba(var(--theme-rgb-primary), var(--alpha-10));
color: rgba(var(--theme-rgb-secondary), var(--alpha-20));
`})})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=n(),o(),r(),s(),f()}))();export{m as default};