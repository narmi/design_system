import{r as y,e}from"./iframe-upVRijGv.js";import{c as v}from"./index-RvS1aOr8.js";import{E as x}from"./index-Cr0UwezB.js";import{R as N}from"./index-CwUjkoWk.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var a in o)({}).hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},p.apply(null,arguments)}const b=({options:t,name:l,initialValue:o,value:a,kind:n="normal",onChange:w=()=>{},testId:V,error:s,alwaysShowDetails:E=!1,...k})=>{const u=["row","row-start"].includes(n)?n:"normal",q=["row","row-start"].includes(n),d=a!==void 0,C=s!==void 0&&s.length>0,[m,h]=y.useState(d?a:o);y.useEffect(()=>{d&&h(a)},[a]);const _=r=>{d||h(r.target.value),w(r)};return e.createElement(e.Fragment,null,e.createElement("div",p({className:`nds-radiobuttons nds-radiobuttons--${u}`,onChange:_,"data-testid":V},k),Object.entries(t).map(([r,c])=>{const f=typeof c=="object"?c:{value:c},i=f.value,g=f.details;return e.createElement("div",{className:"nds-radiobuttons-option",key:i},e.createElement(N,{kind:q?"normal":n,name:l,checked:m===i,value:i,hasError:C},e.createElement("div",null,r,g&&(E||m===i)&&e.createElement("div",{className:v(["nds-radiobutton-details",{"fontColor--secondary":n!=="card","fontSize--s":n!=="card"}])},g))))})),e.createElement("div",{className:v([{"margin--top--s":u!=="row"&&u!=="row-start"}])},e.createElement(x,{error:s})))};try{b.displayName="RadioButtons",b.__docgenInfo={description:`The Narmi RadioButtons component expects an "options" Prop, which is an object where the keys are the radiobutton
labels and the values are the radiobutton values. An "initialvalue" Prop can be passed to set a default checked
radiobutton.
\`\`\`
options={{
 "First Label": { value: "firstValue", details: "This is the explanation of the firstValue" },
 "Second Label": { value: "secondValue", details: "This is the explanation of the secondValue" }
}
\`\`\`

The other options configuration without details would be:
\`\`\`
options={{ "First Label": "firstValue", "Second Label": "secondValue" }}
\`\`\``,displayName:"RadioButtons",props:{options:{defaultValue:null,description:`Map of label strings to input values

TODO: restore this type when we can do it in a non-breaking way
\`\`\`
type OptionType = {
     value: string;
     details?: string;
   }
 | string;
\`\`\``,name:"options",required:!1,type:{name:"object"}},name:{defaultValue:null,description:"name of radiogroup",name:"name",required:!0,type:{name:"string"}},initialValue:{defaultValue:null,description:"initially selected option by input value (uncontrolled)",name:"initialValue",required:!1,type:{name:"unknown"}},value:{defaultValue:null,description:"selected option by input value (fully controlled)\nWhen passing a `value` prop, you must use the `onChange`\nhandler to update the `value`",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"change callback invoked with input value",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}},kind:{defaultValue:{value:"normal"},description:"`normal` - display input and label normally\n\n`card` - display input and label as a toggleable card\n\n`input-card` - display toggleable card with a faux radio input\n\n`checkmark` - uses a checkmark icon instead of a faux radio",name:"kind",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"card"'},{value:'"input-card"'},{value:'"checkmark"'},{value:'"rating"'},{value:'"row"'},{value:'"row-start"'}]}},error:{defaultValue:null,description:"Error message. When passed, the `error` prop will\nrender the radio group in an error state.",name:"error",required:!1,type:{name:"string"}},alwaysShowDetails:{defaultValue:{value:"false"},description:"Always show details. When `true`, the details will\nalways be shown, regardless of if an radio button is selected.\nWhen `false`, the details will only be shown when a radio\nbutton is selected. Defaults to `false`",name:"alwaysShowDetails",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Optional value for `data-testid` attribute",name:"testId",required:!1,type:{name:"string"}}}}}catch{}export{b as R};
