import React, { useState } from "react";
import { expect, waitFor, fireEvent, createEvent } from "storybook/test";
import { FieldUpload } from "./index";
import formatFileSize from "../../formatters/formatFileSize";
import Row from "../../Row";

export default {
  title: "Components/Field/Field.Upload",
  component: FieldUpload,
};

const makeFile = (name, type = "application/pdf") =>
  new File(["file-contents"], name, { type });

const MOCK_FILES = [makeFile("statement.pdf"), makeFile("w2.pdf")];

/** Field.Upload is controlled, so every story wraps it in a stateful harness. */
const Template = (args) => {
  const [files, setFiles] = useState(args.files || []);
  return <FieldUpload {...args} files={files} onFilesChange={setFiles} />;
};

export const Overview = Template.bind({});
Overview.args = {
  id: "upload",
  label: "Upload your file",
  files: [],
  accept: "application/pdf",
  labelAcceptHint: "PDF file",
};
Overview.parameters = {
  docs: {
    description: {
      story:
        "Clicking the drop zone opens the native picker; keyboard users reach it by focusing the input.\n\n`accept` filters the native picker only — dropped files of any type still reach `onFilesChange`, so validate there. It also does not change the drop zone's copy; use `labelAcceptHint` for that.",
    },
  },
};

export const Kinds = () => {
  const [defaultFiles, setDefaultFiles] = useState([]);
  const [compactFiles, setCompactFiles] = useState([]);
  return (
    <div>
      <div className="margin--bottom--xl">
        <FieldUpload
          id="upload-kind-default"
          label="Default"
          kind="default"
          accept="application/pdf"
          labelAcceptHint="PDF file"
          files={defaultFiles}
          onFilesChange={setDefaultFiles}
        />
      </div>
      <div className="margin--bottom--xl">
        <FieldUpload
          id="upload-kind-compact"
          label="Compact"
          kind="compact"
          accept="application/pdf"
          labelAcceptHint="PDF file"
          files={compactFiles}
          onFilesChange={setCompactFiles}
        />
      </div>
    </div>
  );
};
export const SingleVsMultiple = () => {
  const [single, setSingle] = useState(MOCK_FILES.slice(0, 1));
  const [many, setMany] = useState(MOCK_FILES);
  return (
    <div>
      <div className="margin--bottom--xl">
        <FieldUpload
          id="upload-single"
          label="Single file"
          files={single}
          onFilesChange={setSingle}
        />
      </div>
      <div className="margin--bottom--xl">
        <FieldUpload
          id="upload-many"
          label="Multiple files"
          multiple
          files={many}
          onFilesChange={setMany}
        />
      </div>
    </div>
  );
};
SingleVsMultiple.parameters = {
  docs: {
    description: {
      story:
        "In single-file mode the drop zone is replaced by the selected file; removing it brings the drop zone back, and each new selection replaces the list. With `multiple`, the drop zone stays visible and new selections append.",
    },
  },
};

export const UploadStates = () => {
  // `slug` is kept separate from `label`: it becomes the field's DOM id, and
  // an id may not contain whitespace.
  const states = [
    {
      slug: "idle-empty",
      label: "idle (no files)",
      uploadState: "idle",
      files: [],
    },
    { slug: "idle", label: "idle", uploadState: "idle" },
    {
      slug: "uploading",
      label: "uploading",
      uploadState: { status: "uploading", progress: 45 },
    },
    { slug: "success", label: "success", uploadState: "success" },
    {
      slug: "error",
      label: "error",
      uploadState: {
        status: "error",
        message: "Upload failed. Please try again.",
      },
    },
  ];
  return (
    <div>
      {states.map(({ slug, label, files = MOCK_FILES, ...props }) => (
        <div key={slug} className="margin--bottom--xl">
          <Template
            id={`upload-${slug}`}
            label={label}
            multiple
            files={files}
            {...props}
          />
        </div>
      ))}
    </div>
  );
};
UploadStates.parameters = {
  docs: {
    description: {
      story:
        '`uploadState` is parent-owned; Field.Upload makes no requests and only reflects what you pass. States without a payload can be a bare string (`uploadState="success"`); `uploading` requires `progress`, so it takes object form.\n\n```jsx\nconst [files, setFiles] = useState([]);\nconst [uploadState, setUploadState] = useState("idle");\n\nconst submit = async () => {\n  setUploadState({ status: "uploading", progress: 0 });\n  try {\n    await upload(files, (progress) =>\n      setUploadState({ status: "uploading", progress }),\n    );\n    setUploadState("success");\n  } catch {\n    setUploadState({\n      status: "error",\n      message: "Upload failed. Please try again.",\n    });\n  }\n};\n```\n\n- `idle` — file icon, name, remove button\n- `uploading` — adds a status line and progress bar; hides remove, since the request cannot be cancelled\n- `success` — check icon plus file size\n- `error` — no rows; the drop zone returns so the selection can be retried, and `message` announces the failure',
    },
  },
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  id: "upload-errors",
  label: "Upload a document",
  files: MOCK_FILES.slice(0, 1),
  errors: ["That document is not a statement"],
};
WithErrors.parameters = {
  docs: {
    description: {
      story:
        '`errors` is validation; `uploadState: "error"` is a failed request. Both are the same error state — one live region, one `aria-invalid`, one `.nds-field--hasError` on the root — so both red-border the drop zone.\n\nWhat differs is layout. A validation error **keeps the file list**, because the message is asking the user to act on the file they can see. An `error` upload state **replaces the list with the drop zone**, because there is nothing to fix and the zone is the retry affordance. Compare this story against `error` in **Upload states**.\n\nWhen both apply, the upload `message` comes last.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "upload-disabled",
  label: "Upload a document",
  files: [],
  isDisabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story:
        "When disabled, files never reach `onFilesChange`, and the drop zone ignores both clicks and drops. The root gains `.nds-field--isDisabled`.",
    },
  },
};

export const DisabledWithFiles = Template.bind({});
DisabledWithFiles.args = {
  id: "upload-disabled-files",
  label: "Upload a document",
  files: MOCK_FILES.slice(0, 1),
  isDisabled: true,
};
DisabledWithFiles.parameters = {
  docs: {
    description: {
      story:
        "A disabled field still shows its selection — the file stays listed with its remove button disabled, so a read-only form does not read as though the attachment was lost.",
    },
  },
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  id: "upload-helper",
  label: "Upload a document",
  files: [],
  renderHelperText: () => <span>PDF or PNG, up to 10MB</span>,
};

export const WithCustomRendering = Template.bind({});
WithCustomRendering.args = {
  id: "upload-custom",
  label: "Upload a document",
  multiple: true,
  files: MOCK_FILES,
  uploadState: "success",
  renderDropPrompt: (isDragActive) => (
    <div className="nds-field-upload-prompt">
      {isDragActive ? "Release to upload" : "Drop your statements here"}
    </div>
  ),
  renderFile: (file, remove, status) => (
    <Row alignItems="center" gapSize="xs">
      <Row.Item shrink>
        <i
          className={
            status === "success" ? "narmi-icon-check" : "narmi-icon-file-text1"
          }
          aria-hidden="true"
        />
      </Row.Item>
      <Row.Item shrink>
        <span>{file.name}</span>
      </Row.Item>
      <Row.Item shrink>
        <span className="fontColor--secondary">
          {status === "uploading" ? "Uploading..." : formatFileSize(file.size)}
        </span>
      </Row.Item>
      {status !== "uploading" && (
        <Row.Item shrink>
          <button
            type="button"
            onClick={remove}
            aria-label={`Remove ${file.name}`}
          >
            <i className="narmi-icon-trash-2" aria-hidden="true" />
          </button>
        </Row.Item>
      )}
    </Row>
  ),
};
WithCustomRendering.parameters = {
  docs: {
    description: {
      story:
        '`renderFile` receives the resolved upload status, which can differ from what the parent passed.\n\n**An override replaces the row wholesale, including its accessibility.** The default row has a visually hidden `role="status"` announcing `labelSuccess`; a custom row must announce success itself from `status`.',
    },
  },
};

export const CustomCopy = Template.bind({});
CustomCopy.args = {
  id: "upload-copy",
  label: "Sube un documento",
  multiple: true,
  files: [],
  accept: "application/pdf",
  labelDropPrompt: (
    <>
      Arrastra y suelta aquí o <em>haz clic</em> para subir un archivo
    </>
  ),
  labelAcceptHint: "Archivo PDF",
  labelUploading: "Subiendo...",
  labelSuccess: (file) => `${file.name} se subió correctamente`,
  labelRemoveFile: (file) => `Quitar ${file.name}`,
};
CustomCopy.parameters = {
  docs: {
    description: {
      story:
        "Every rendered string is a prop, defaulting to English. `labelSuccess` is announced by a hidden live region, so translate it even though it is never seen. `labelDropPrompt` takes a `ReactNode`.",
    },
  },
};

/** Verifies a selected file lands in the list. */
export const SelectsFile = {
  name: "Interaction: Selects a file",
  render: () => <Template id="select" label="Upload a document" files={[]} />,
  play: async ({ canvasElement, canvas, userEvent }) => {
    const input = canvasElement.querySelector('input[type="file"]');
    await userEvent.upload(input, makeFile("statement.pdf"));
    await waitFor(() =>
      expect(canvas.getByText("statement.pdf")).toBeVisible(),
    );
  },
};

/** Re-adding the same file only fires if the input's value was cleared. */
export const RemovesFile = {
  name: "Interaction: Removes and re-adds the same file",
  render: () => <Template id="remove" label="Upload a document" files={[]} />,
  play: async ({ canvasElement, canvas, userEvent }) => {
    const input = canvasElement.querySelector('input[type="file"]');

    await userEvent.upload(input, makeFile("statement.pdf"));
    await waitFor(() =>
      expect(canvas.getByText("statement.pdf")).toBeVisible(),
    );

    await userEvent.click(
      canvas.getByRole("button", { name: /remove statement\.pdf/i }),
    );
    await waitFor(() =>
      expect(canvas.queryByText("statement.pdf")).not.toBeInTheDocument(),
    );

    await userEvent.upload(input, makeFile("statement.pdf"));
    await waitFor(() =>
      expect(canvas.getByText("statement.pdf")).toBeVisible(),
    );
  },
};

/** Dropped files reach onFilesChange, and drag state shows in `data-state`. */
export const DropsFile = {
  name: "Interaction: Accepts dropped files",
  render: () => (
    <Template id="drop" label="Upload a document" multiple files={[]} />
  ),
  play: async ({ canvasElement, canvas }) => {
    const zone = canvasElement.querySelector(".nds-field-upload-dropzone");
    const root = canvasElement.querySelector(".nds-field-upload");
    const readState = () => root.getAttribute("data-state");

    // Drag state alone: the enter handler never reads the payload.
    fireEvent.dragEnter(zone);
    await waitFor(() => expect(readState()).toBe("dragActive"));

    // `fireEvent.drop(zone, { dataTransfer })` loses the files in a real
    // browser, so shadow `dataTransfer` on an already-constructed event.
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(makeFile("dropped.pdf"));

    const dropEvent = createEvent.drop(zone);
    Object.defineProperty(dropEvent, "dataTransfer", { value: dataTransfer });

    fireEvent(zone, dropEvent);
    await waitFor(() => expect(canvas.getByText("dropped.pdf")).toBeVisible());
    expect(readState()).not.toBe("dragActive");
  },
};
