import{j as t,M as o,e as a}from"./blocks-CaVr1xZS.js";import{useMDXComponents as i}from"./index-RPa9fYJt.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Z-3NV075.js";import"./index-tErprBX_.js";import"./index-Kwfg8bTz.js";const m=`## Functions

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
`;function r(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Utilities/Formatters"}),`
`,t.jsx(a,{children:m})]})}function l(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r()}export{l as default};
