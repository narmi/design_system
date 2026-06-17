import{i as e}from"./preload-helper-xPQekRTU.js";import{f as t,o as n,s as r,w as i}from"./blocks-vsv4ezzh.js";import{s as a}from"./chunk-LITCR56V-j0U7XSvu.js";import{t as o}from"./mdx-react-shim-C9sF9Cno.js";var s,c=e((()=>{s=`## Functions

<dl>
<dt><a href="#formatDate">formatDate(date, style)</a> ⇒ <code>String</code></dt>
<dd><p>Wrapper for <code>Intl.DateTimeFormat</code> with options configured for Narmi applications.</p>
</dd>
<dt><a href="#formatNumber">formatNumber(input, style)</a> ⇒ <code>String</code></dt>
<dd><p>Wrapper for <code>Intl.NumberFormat</code> with options configured for Narmi applications.</p>
</dd>
</dl>

<a name="formatDate"></a>

## formatDate(date, style) ⇒ <code>String</code>
Wrapper for \`Intl.DateTimeFormat\` with options configured for Narmi applications.

**Kind**: global function  
**Returns**: <code>String</code> - date string formatted for display  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| date | <code>Date</code> |  | native date object |
| style | <code>String</code> | <code>short</code> | formatting style (\`short\` or \`long\`) |

**Example**  
\`\`\`js
import { formatDate } from '@narmi/design_system';

formatDate(new Date('July 4, 2022'), 'short'); // '7/4/22'
formatDate(new Date('7/4/2022'), 'long');      // 'July 4, 2022'
\`\`\`
<a name="formatNumber"></a>

## formatNumber(input, style) ⇒ <code>String</code>
Wrapper for \`Intl.NumberFormat\` with options configured for Narmi applications.

**Kind**: global function  
**Returns**: <code>String</code> - number string formatted for display  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | <code>String</code> \\| <code>Number</code> |  | string or number to format into a number string |
| style | <code>String</code> | <code>currency</code> | format style (\`currency\` or \`percent\`) |

**Example**  
\`\`\`js
import { formatNumber } from '@narmi/design_system';

formatNumber(1234.56, 'currency'); // '$1,234.56'
formatNumber(34.4, 'currency');    // '$34.40'
formatNumber(-12, 'currency');     // '-$12.00'
formatNumber('0.0342', 'percent'); // '3.42%'
formatNumber(0.0023, 'percent');   // '0.23%'
formatNumber(0.215555, 'percent'); // '21.56%'
\`\`\`
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Utilities/Formatters`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=a(),o(),t(),c()}))();export{u as default};