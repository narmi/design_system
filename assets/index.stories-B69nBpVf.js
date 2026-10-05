import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{X as n}from"./iframe-Cu3-RD4P.js";import{n as r,t as i}from"./classcat-DVVzD5_p.js";import{n as a,t as o}from"./Row-CECK1Twf.js";import{n as s,t as c}from"./IconButton-in1aNncL.js";import{i as l,n as u,r as d,t as f}from"./Errors-UfeY-uhG.js";import{n as p,t as m}from"./useMergeRefs-CkU1pz3A.js";import{n as h,t as g}from"./ProgressBar-CpGN5fv_.js";var _,v,y=t((()=>{_=e(n()),v=({files:e,onFilesChange:t,multiple:n=!1,isDisabled:r=!1})=>{let i=(0,_.useRef)(null),[a,o]=(0,_.useState)(!1),s=(0,_.useRef)(0),c=r=>{if(!r)return;let i=Array.from(r);i.length!==0&&t(n?[...e,...i]:[i[0]])},l=n=>{r||t(e.filter(e=>e!==n))},u=e=>{c(e.target.files),e.target.value=``},d=()=>{s.current=0,o(!1)};return{inputRef:i,isDragActive:a,dropZoneProps:{onDragEnter:e=>{e.preventDefault(),!r&&(s.current+=1,o(!0))},onDragOver:e=>{e.preventDefault()},onDragLeave:e=>{e.preventDefault(),!r&&(--s.current,s.current<=0&&d())},onDrop:e=>{e.preventDefault(),!r&&(d(),c(e.dataTransfer?.files??null))}},removeFile:l,handleChange:u}}})),b,x,S,C=t((()=>{b=1024,x=e=>Number(e.toFixed(1)),S=e=>{if(!Number.isFinite(e)||e<=0)return`0B`;let t=Math.round(e);if(t<b)return`${t}B`;let n=Math.round(e/b);if(n<b)return`${n}KB`;let r=x(e/b**2);return r<b?`${r}MB`:`${x(e/b**3)}GB`}}));function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(null,arguments)}var T,E,D,O=t((()=>{T=e(n()),r(),d(),y(),m(),u(),C(),a(),s(),h(),E=({file:e,remove:t,status:n,isDisabled:r,labelUploading:i,labelSuccess:a,labelRemoveFile:s})=>{let l=n===`success`,u=n!==`uploading`;return T.createElement(o,{alignItems:`center`,gapSize:`s`},T.createElement(`span`,{className:`nds-field-upload-file-status`,role:`status`},l?a(e):``),T.createElement(o.Item,{shrink:!0},l?T.createElement(`span`,{className:`nds-field-upload-file-check alignChild--center--center`},T.createElement(`span`,{className:`narmi-icon-check fontSize--l`,"aria-hidden":`true`})):T.createElement(`span`,{className:`nds-field-upload-file-icon narmi-icon-file-text1 fontSize--heading3`,"aria-hidden":`true`})),T.createElement(o.Item,null,T.createElement(`div`,{className:`nds-field-upload-file-name`},e.name),n===`uploading`&&T.createElement(`div`,{className:`fontSize--s fontColor--secondary`},i),l&&T.createElement(`div`,{className:`fontSize--s fontColor--secondary`},S(e.size))),u&&T.createElement(o.Item,{shrink:!0},T.createElement(c,{name:`x`,type:`button`,onClick:t,disabled:r,label:s(e)})))},D=(0,T.forwardRef)(({label:e,id:t,kind:n=`default`,files:r,onFilesChange:a,accept:s,multiple:c=!1,uploadState:u=`idle`,uploadProgress:d=0,renderFile:m,renderDropPrompt:h,errors:_=[],isDisabled:y=!1,renderHelperText:b,showLabel:x=!0,labelDropPrompt:S=T.createElement(T.Fragment,null,`Drag and drop here or `,T.createElement(`em`,null,`click`),` to upload a file`),labelAcceptHint:C,labelUploading:D=`Uploading...`,labelSuccess:O=e=>`${e.name} uploaded successfully`,labelRemoveFile:k=e=>`Remove ${e.name}`},A)=>{let{errorId:j,labelId:M,controlProps:N,labelProps:P}=l({id:t,errors:_,isDisabled:y,label:e,showLabel:x}),{inputRef:F,isDragActive:I,dropZoneProps:L,removeFile:R,handleChange:z}=v({files:r,onFilesChange:a,multiple:c,isDisabled:y}),B=p(A,F),V=r.length===0||c,H=r.length>0,U=I?`dragActive`:void 0;return T.createElement(`div`,{className:i([`nds-field`,`nds-field-upload`,`nds-field-upload--${n}`,{"nds-field--isDisabled":y,"nds-field--hasError":_.length>0}]),"data-state":U,"aria-busy":u===`uploading`||void 0},T.createElement(o,{alignItems:`center`},x&&T.createElement(o.Item,null,T.createElement(`label`,{id:M,className:`nds-field-label`,htmlFor:N.id},e)),T.createElement(o.Item,{shrink:!0},T.createElement(`div`,{className:`fontColor--secondary fontSize--s`},b?.()))),T.createElement(`input`,w({ref:B,type:`file`,className:`nds-field-upload-input`,accept:s,multiple:c,onChange:z},P,N)),V&&T.createElement(`label`,w({htmlFor:N.id,className:`nds-field-upload-dropzone`},L),T.createElement(`div`,{className:`nds-field-upload-icon alignChild--center--center`},T.createElement(`span`,{className:`narmi-icon-upload`,"aria-hidden":`true`})),h?h(I):T.createElement(`div`,{className:`nds-field-upload-prompt`},T.createElement(`div`,null,S),C&&T.createElement(`div`,{className:`fontSize--s fontColor--secondary`},C))),H&&T.createElement(`div`,{className:i([`nds-field-upload-files`,{"nds-field-upload-files--uploading":u===`uploading`}])},T.createElement(`ul`,{className:`nds-field-upload-list list--reset`},r.map((e,t)=>T.createElement(`li`,{key:`${e.name}-${e.size}-${e.lastModified}-${t}`},m?m(e,()=>R(e),u):T.createElement(E,{file:e,remove:()=>R(e),status:u,isDisabled:y,labelUploading:D,labelSuccess:O,labelRemoveFile:k})))),u===`uploading`&&T.createElement(`div`,{className:`nds-field-upload-uploadProgress`,role:`progressbar`,"aria-label":D,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":d},T.createElement(g,{percentComplete:d}))),T.createElement(f,{id:j,errors:_}))}),D.displayName=`Field.Upload`;try{D.displayName=`Field.Upload`,D.__docgenInfo={description:"Field.Upload renders a controlled file input with a drop zone.\n\nIt performs no validation and no uploading: enforce file rules inside\n`onFilesChange`, and drive `uploadState` from the parent.",displayName:`Field.Upload`,filePath:`/home/runner/work/design_system/design_system/src/Field/Upload/index.tsx`,methods:[],props:{kind:{defaultValue:{value:`default`},declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:'Size of the drop zone: `"default"` (larger) or `"compact"`.',name:`kind`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`"default" | "compact"`}},files:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:"Currently selected files. `Field.Upload` is a controlled component.",name:`files`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!0,tags:{},type:{name:`File[]`}},onFilesChange:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:`Called with the next file list whenever files are added or removed.`,name:`onFilesChange`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!0,tags:{},type:{name:`(files: File[]) => void`}},accept:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:"Forwarded to the native input. Filters the picker but not drag-and-drop:\ndropped files of any type still reach `onFilesChange`, so validate there.\nDoes not affect the drop zone's copy — use `labelAcceptHint`.",name:`accept`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`string`}},multiple:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:`When true, new selections append to \`files\` instead of replacing them.

When false, only the first file of a selection is kept. A picker or drop
carrying several files reports just one through \`onFilesChange\`, and the
rest are discarded silently.`,name:`multiple`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`boolean`}},uploadState:{defaultValue:{value:`idle`},declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:`Upload lifecycle, owned by the parent; \`Field.Upload\` performs no network
requests. Applies to the selection as a whole, not to individual files.

What you pass is what renders, including across a selection change: reset
this from \`onFilesChange\` so a newly added file does not inherit the
previous file's \`"success"\` row.

A failed upload is not a state here — pass the message through \`errors\`.`,name:`uploadState`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`FieldUploadState`}},uploadProgress:{defaultValue:{value:`0`},declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:'Completion percentage, 0-100, read only while `uploadState` is\n`"uploading"`. Defaults to 0, which renders an empty bar.',name:`uploadProgress`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`number`}},renderFile:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:"Replaces the default file row. Use for structure only; for wording, use\nthe `label*` props.",name:`renderFile`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`(file: File, remove: () => void, status: FieldUploadState) => ReactNode`}},renderDropPrompt:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:"Replaces the drop zone prompt entirely, including `labelDropPrompt` and\n`labelAcceptHint`. Receives the live drag state, which is tracked\ninternally and otherwise unavailable to consumers.",name:`renderDropPrompt`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`(isDragActive: boolean) => ReactNode`}},showLabel:{defaultValue:{value:`true`},declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:"When false, the visible label is removed and `label` is applied to the\ninput as a direct `aria-label` instead. Helper text still renders.",name:`showLabel`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`boolean`}},labelDropPrompt:{defaultValue:{value:`(
        <>
          Drag and drop here or <em>click</em> to upload a file
        </>
      )`},declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:"Prompt text inside the drop zone. This and the other `label*` props\ndefault to English; NDS ships no translations, so pass translated copy in.",name:`labelDropPrompt`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`ReactNode`}},labelAcceptHint:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:'Hint under the prompt describing accepted file types, e.g. `"PDF file"`.\nOmitted entirely when not supplied.',name:`labelAcceptHint`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`string`}},labelUploading:{defaultValue:{value:`Uploading...`},declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:'Status line on each file row while `uploadState` is `"uploading"`.',name:`labelUploading`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`string`}},labelSuccess:{defaultValue:{value:"(file: File) => `${file.name} uploaded successfully`"},declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:'Accessible status for each file when `uploadState` is `"success"`.',name:`labelSuccess`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`(file: File) => string`}},labelRemoveFile:{defaultValue:{value:"(file: File) => `Remove ${file.name}`"},declarations:[{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`}],description:`Accessible name for a file's remove button. Takes the file so the name
stays unique per row.`,name:`labelRemoveFile`,parent:{fileName:`design_system/src/Field/Upload/index.tsx`,name:`FieldUploadProps`},required:!1,tags:{},type:{name:`(file: File) => string`}},id:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`id`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`label`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!0,tags:{},type:{name:`string`}},errors:{defaultValue:{value:`[]`},declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`errors`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`string[]`}},isDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`isDisabled`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`boolean`}},renderHelperText:{defaultValue:null,declarations:[{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`}],description:``,name:`renderHelperText`,parent:{fileName:`design_system/src/Field/types.ts`,name:`FieldBaseProps`},required:!1,tags:{},type:{name:`() => ReactNode`}}},tags:{}}}catch{}}));function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(null,arguments)}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;t((()=>{A=e(n()),O(),C(),a(),{expect:j,waitFor:M,fireEvent:N,createEvent:P}=__STORYBOOK_MODULE_TEST__,F={title:`Components/Field/Field.Upload`,component:D},I=(e,t=`application/pdf`)=>new File([`file-contents`],e,{type:t}),L=[I(`statement.pdf`),I(`w2.pdf`)],R=e=>{let[t,n]=(0,A.useState)(e.files||[]);return A.createElement(D,k({},e,{files:t,onFilesChange:n}))},z=R.bind({}),z.args={id:`upload`,label:`Upload your file`,files:[],accept:`application/pdf`,labelAcceptHint:`PDF file`},z.parameters={docs:{description:{story:"Clicking the drop zone opens the native picker; keyboard users reach it by focusing the input.\n\n`accept` filters the native picker only — dropped files of any type still reach `onFilesChange`, so validate there. It also does not change the drop zone's copy; use `labelAcceptHint` for that."}}},B=()=>{let[e,t]=(0,A.useState)([]),[n,r]=(0,A.useState)([]);return A.createElement(`div`,null,A.createElement(`div`,{className:`margin--bottom--xl`},A.createElement(D,{id:`upload-kind-default`,label:`Default`,kind:`default`,accept:`application/pdf`,labelAcceptHint:`PDF file`,files:e,onFilesChange:t})),A.createElement(`div`,{className:`margin--bottom--xl`},A.createElement(D,{id:`upload-kind-compact`,label:`Compact`,kind:`compact`,accept:`application/pdf`,labelAcceptHint:`PDF file`,files:n,onFilesChange:r})))},V=()=>{let[e,t]=(0,A.useState)(L.slice(0,1)),[n,r]=(0,A.useState)(L);return A.createElement(`div`,null,A.createElement(`div`,{className:`margin--bottom--xl`},A.createElement(D,{id:`upload-single`,label:`Single file`,files:e,onFilesChange:t})),A.createElement(`div`,{className:`margin--bottom--xl`},A.createElement(D,{id:`upload-many`,label:`Multiple files`,multiple:!0,files:n,onFilesChange:r})))},V.parameters={docs:{description:{story:"In single-file mode the drop zone is replaced by the selected file; removing it brings the drop zone back, and each new selection replaces the list. With `multiple`, the drop zone stays visible and new selections append."}}},H=()=>A.createElement(`div`,null,[{slug:`idle-empty`,label:`idle (no files)`,uploadState:`idle`,files:[]},{slug:`idle`,label:`idle`,uploadState:`idle`},{slug:`uploading`,label:`uploading`,uploadState:`uploading`,uploadProgress:45},{slug:`success`,label:`success`,uploadState:`success`},{slug:`error`,label:`failed (via errors)`,errors:[`Upload failed. Please try again.`]}].map(({slug:e,label:t,files:n=L,...r})=>A.createElement(`div`,{key:e,className:`margin--bottom--xl`},A.createElement(R,k({id:`upload-${e}`,label:t,multiple:!0,files:n},r))))),H.parameters={docs:{description:{story:`\`uploadState\` is parent-owned; Field.Upload makes no requests and only reflects what you pass. It is one of \`"idle"\`, \`"uploading"\` or \`"success"\`, with \`uploadProgress\` (0-100) read while uploading.

There is no \`"error"\` state. A failed upload is reported through \`errors\`, the same channel as validation, so the message is always yours — NDS ships no copy of its own.

What you pass is what renders, including across a selection change — reset it from \`onFilesChange\` so a newly added file does not inherit the previous file's outcome.

\`\`\`jsx
const [files, setFiles] = useState([]);
const [uploadState, setUploadState] = useState("idle");
const [uploadProgress, setUploadProgress] = useState(0);
const [errors, setErrors] = useState([]);

const onFilesChange = (next) => {
  setFiles(next);
  setUploadState("idle"); // the previous outcome no longer describes the selection
  setErrors([]);
};

// \`fetch\` reports no upload progress; XHR is what gives you a percentage.
const submit = () => {
  const xhr = new XMLHttpRequest();
  xhr.upload.onprogress = (e) => {
    if (e.lengthComputable) {
      setUploadProgress(Math.round((e.loaded / e.total) * 100));
    }
  };
  xhr.onload = () => setUploadState("success");
  xhr.onerror = () => {
    setUploadState("idle");
    setErrors(["Upload failed. Please try again."]);
  };

  setUploadState("uploading");
  setUploadProgress(0);
  xhr.open("POST", url);
  xhr.send(body);
};
\`\`\`

- \`idle\` — file icon, name, remove button
- \`uploading\` — adds a status line and progress bar; hides remove, since the request cannot be cancelled
- \`success\` — check icon plus file size

The last field below shows a failure, which is just \`errors\` on an otherwise idle field.`}}},U=R.bind({}),U.args={id:`upload-errors`,label:`Upload a document`,files:L.slice(0,1),errors:[`That document is not a statement`]},U.parameters={docs:{description:{story:"`errors` carries every failure, whether it came from validation or from a failed request. There is one error state — one live region, one `aria-invalid`, one `.nds-field--hasError` on the root — and it never changes the layout, so the file the message refers to stays on screen.\n\nMessages render in the order given."}}},W=R.bind({}),W.args={id:`upload-disabled`,label:`Upload a document`,files:[],isDisabled:!0},W.parameters={docs:{description:{story:"When disabled, files never reach `onFilesChange`, and the drop zone ignores both clicks and drops. The root gains `.nds-field--isDisabled`."}}},G=R.bind({}),G.args={id:`upload-disabled-files`,label:`Upload a document`,files:L.slice(0,1),isDisabled:!0},G.parameters={docs:{description:{story:`A disabled field still shows its selection — the file stays listed with its remove button disabled, so a read-only form does not read as though the attachment was lost.`}}},K=R.bind({}),K.args={id:`upload-helper`,label:`Upload a document`,files:[],renderHelperText:()=>A.createElement(`span`,null,`PDF or PNG, up to 10MB`)},q=R.bind({}),q.args={id:`upload-custom`,label:`Upload a document`,multiple:!0,files:L,uploadState:`success`,renderDropPrompt:e=>A.createElement(`div`,{className:`nds-field-upload-prompt`},e?`Release to upload`:`Drop your statements here`),renderFile:(e,t,n)=>A.createElement(o,{alignItems:`center`,gapSize:`xs`},A.createElement(o.Item,{shrink:!0},A.createElement(`i`,{className:n===`success`?`narmi-icon-check`:`narmi-icon-file-text1`,"aria-hidden":`true`})),A.createElement(o.Item,{shrink:!0},A.createElement(`span`,null,e.name)),A.createElement(o.Item,{shrink:!0},A.createElement(`span`,{className:`fontColor--secondary`},n===`uploading`?`Uploading...`:S(e.size))),n!==`uploading`&&A.createElement(o.Item,{shrink:!0},A.createElement(`button`,{type:`button`,onClick:t,"aria-label":`Remove ${e.name}`},A.createElement(`i`,{className:`narmi-icon-trash-2`,"aria-hidden":`true`}))))},q.parameters={docs:{description:{story:'`renderFile` receives the current `uploadState` status alongside the file.\n\n**An override replaces the row wholesale, including its accessibility.** The default row has a visually hidden `role="status"` announcing `labelSuccess`; a custom row must announce success itself from `status`.'}}},J=R.bind({}),J.args={id:`upload-copy`,label:`Sube un documento`,multiple:!0,files:[],accept:`application/pdf`,labelDropPrompt:A.createElement(A.Fragment,null,`Arrastra y suelta aquí o `,A.createElement(`em`,null,`haz clic`),` para subir un archivo`),labelAcceptHint:`Archivo PDF`,labelUploading:`Subiendo...`,labelSuccess:e=>`${e.name} se subió correctamente`,labelRemoveFile:e=>`Quitar ${e.name}`},J.parameters={docs:{description:{story:"Every rendered string is a prop, defaulting to English. `labelSuccess` is announced by a hidden live region, so translate it even though it is never seen. `labelDropPrompt` takes a `ReactNode`."}}},Y={name:`Interaction: Selects a file`,render:()=>A.createElement(R,{id:`select`,label:`Upload a document`,files:[]}),play:async({canvasElement:e,canvas:t,userEvent:n})=>{let r=e.querySelector(`input[type="file"]`);await n.upload(r,I(`statement.pdf`)),await M(()=>j(t.getByText(`statement.pdf`)).toBeVisible())}},X={name:`Interaction: Removes and re-adds the same file`,render:()=>A.createElement(R,{id:`remove`,label:`Upload a document`,files:[]}),play:async({canvasElement:e,canvas:t,userEvent:n})=>{let r=e.querySelector(`input[type="file"]`);await n.upload(r,I(`statement.pdf`)),await M(()=>j(t.getByText(`statement.pdf`)).toBeVisible()),await n.click(t.getByRole(`button`,{name:/remove statement\.pdf/i})),await M(()=>j(t.queryByText(`statement.pdf`)).not.toBeInTheDocument()),await n.upload(r,I(`statement.pdf`)),await M(()=>j(t.getByText(`statement.pdf`)).toBeVisible())}},Z={name:`Interaction: Accepts dropped files`,render:()=>A.createElement(R,{id:`drop`,label:`Upload a document`,multiple:!0,files:[]}),play:async({canvasElement:e,canvas:t})=>{let n=e.querySelector(`.nds-field-upload-dropzone`),r=e.querySelector(`.nds-field-upload`),i=()=>r.getAttribute(`data-state`);N.dragEnter(n),await M(()=>j(i()).toBe(`dragActive`));let a=new DataTransfer;a.items.add(I(`dropped.pdf`));let o=P.drop(n);Object.defineProperty(o,"dataTransfer",{value:a}),N(n,o),await M(()=>j(t.getByText(`dropped.pdf`)).toBeVisible()),j(i()).not.toBe(`dragActive`)}},B.__docgenInfo={description:``,methods:[],displayName:`Kinds`},V.__docgenInfo={description:``,methods:[],displayName:`SingleVsMultiple`},H.__docgenInfo={description:``,methods:[],displayName:`UploadStates`},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState(args.files || []);
  return <FieldUpload {...args} files={files} onFilesChange={setFiles} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [defaultFiles, setDefaultFiles] = useState([]);
  const [compactFiles, setCompactFiles] = useState([]);
  return <div>
      <div className="margin--bottom--xl">
        <FieldUpload id="upload-kind-default" label="Default" kind="default" accept="application/pdf" labelAcceptHint="PDF file" files={defaultFiles} onFilesChange={setDefaultFiles} />
      </div>
      <div className="margin--bottom--xl">
        <FieldUpload id="upload-kind-compact" label="Compact" kind="compact" accept="application/pdf" labelAcceptHint="PDF file" files={compactFiles} onFilesChange={setCompactFiles} />
      </div>
    </div>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [single, setSingle] = useState(MOCK_FILES.slice(0, 1));
  const [many, setMany] = useState(MOCK_FILES);
  return <div>
      <div className="margin--bottom--xl">
        <FieldUpload id="upload-single" label="Single file" files={single} onFilesChange={setSingle} />
      </div>
      <div className="margin--bottom--xl">
        <FieldUpload id="upload-many" label="Multiple files" multiple files={many} onFilesChange={setMany} />
      </div>
    </div>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  // \`slug\` is kept separate from \`label\`: it becomes the field's DOM id, and
  // an id may not contain whitespace.
  const states = [{
    slug: "idle-empty",
    label: "idle (no files)",
    uploadState: "idle",
    files: []
  }, {
    slug: "idle",
    label: "idle",
    uploadState: "idle"
  }, {
    slug: "uploading",
    label: "uploading",
    uploadState: "uploading",
    uploadProgress: 45
  }, {
    slug: "success",
    label: "success",
    uploadState: "success"
  }, {
    slug: "error",
    label: "failed (via errors)",
    errors: ["Upload failed. Please try again."]
  }];
  return <div>
      {states.map(({
      slug,
      label,
      files = MOCK_FILES,
      ...props
    }) => <div key={slug} className="margin--bottom--xl">
          <Template id={\`upload-\${slug}\`} label={label} multiple files={files} {...props} />
        </div>)}
    </div>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState(args.files || []);
  return <FieldUpload {...args} files={files} onFilesChange={setFiles} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState(args.files || []);
  return <FieldUpload {...args} files={files} onFilesChange={setFiles} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState(args.files || []);
  return <FieldUpload {...args} files={files} onFilesChange={setFiles} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState(args.files || []);
  return <FieldUpload {...args} files={files} onFilesChange={setFiles} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState(args.files || []);
  return <FieldUpload {...args} files={files} onFilesChange={setFiles} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState(args.files || []);
  return <FieldUpload {...args} files={files} onFilesChange={setFiles} />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Selects a file",
  render: () => <Template id="select" label="Upload a document" files={[]} />,
  play: async ({
    canvasElement,
    canvas,
    userEvent
  }) => {
    const input = canvasElement.querySelector('input[type="file"]');
    await userEvent.upload(input, makeFile("statement.pdf"));
    await waitFor(() => expect(canvas.getByText("statement.pdf")).toBeVisible());
  }
}`,...Y.parameters?.docs?.source},description:{story:`Verifies a selected file lands in the list.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Removes and re-adds the same file",
  render: () => <Template id="remove" label="Upload a document" files={[]} />,
  play: async ({
    canvasElement,
    canvas,
    userEvent
  }) => {
    const input = canvasElement.querySelector('input[type="file"]');
    await userEvent.upload(input, makeFile("statement.pdf"));
    await waitFor(() => expect(canvas.getByText("statement.pdf")).toBeVisible());
    await userEvent.click(canvas.getByRole("button", {
      name: /remove statement\\.pdf/i
    }));
    await waitFor(() => expect(canvas.queryByText("statement.pdf")).not.toBeInTheDocument());
    await userEvent.upload(input, makeFile("statement.pdf"));
    await waitFor(() => expect(canvas.getByText("statement.pdf")).toBeVisible());
  }
}`,...X.parameters?.docs?.source},description:{story:`Re-adding the same file only fires if the input's value was cleared.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Interaction: Accepts dropped files",
  render: () => <Template id="drop" label="Upload a document" multiple files={[]} />,
  play: async ({
    canvasElement,
    canvas
  }) => {
    const zone = canvasElement.querySelector(".nds-field-upload-dropzone");
    const root = canvasElement.querySelector(".nds-field-upload");
    const readState = () => root.getAttribute("data-state");

    // Drag state alone: the enter handler never reads the payload.
    fireEvent.dragEnter(zone);
    await waitFor(() => expect(readState()).toBe("dragActive"));

    // \`fireEvent.drop(zone, { dataTransfer })\` loses the files in a real
    // browser, so shadow \`dataTransfer\` on an already-constructed event.
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(makeFile("dropped.pdf"));
    const dropEvent = createEvent.drop(zone);
    Object.defineProperty(dropEvent, "dataTransfer", {
      value: dataTransfer
    });
    fireEvent(zone, dropEvent);
    await waitFor(() => expect(canvas.getByText("dropped.pdf")).toBeVisible());
    expect(readState()).not.toBe("dragActive");
  }
}`,...Z.parameters?.docs?.source},description:{story:"Dropped files reach onFilesChange, and drag state shows in `data-state`.",...Z.parameters?.docs?.description}}},Q=[`Overview`,`Kinds`,`SingleVsMultiple`,`UploadStates`,`WithErrors`,`Disabled`,`DisabledWithFiles`,`WithHelperText`,`WithCustomRendering`,`CustomCopy`,`SelectsFile`,`RemovesFile`,`DropsFile`]}))();export{J as CustomCopy,W as Disabled,G as DisabledWithFiles,Z as DropsFile,B as Kinds,z as Overview,X as RemovesFile,Y as SelectsFile,V as SingleVsMultiple,H as UploadStates,q as WithCustomRendering,U as WithErrors,K as WithHelperText,Q as __namedExportsOrder,F as default};