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

/**
 * Field.Upload is controlled: it never holds file state itself. Every story
 * wraps it in a small stateful harness, which is also how consumers use it.
 */
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
        "The drop zone is a `<label>` bound to a visually hidden file input, so clicking it opens the native picker with no JavaScript, and keyboard users reach it by focusing the input.\n\n`accept` filters the native picker only. It does **not** filter drag-and-drop — dropped files of any type still reach `onFilesChange`, so validation belongs there — and it does not affect what the drop zone says. Describe the accepted types with `labelAcceptHint`.\n\nField.Upload uses the shared `.nds-field` classes, so it inherits label, error and disabled styling alongside `Field.Text` and `Field.Select`. Override copy with the `label*` props and presentation with `renderDropPrompt` and `renderFile`.",
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
Kinds.parameters = {
  docs: {
    description: {
      story:
        '`kind` controls the size of the drop zone: `"default"` (larger) or `"compact"`.',
    },
  },
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
  const states = [
    { id: "idle (no files)", uploadState: "idle", files: [] },
    { id: "idle", uploadState: "idle" },
    { id: "uploading", uploadState: "uploading", progress: 45 },
    { id: "success", uploadState: "success" },
    {
      id: "error",
      uploadState: "error",
      errors: ["Upload failed. Please try again."],
    },
  ];
  return (
    <div>
      {states.map(({ id, files = MOCK_FILES, ...props }) => (
        <div key={id} className="margin--bottom--xl">
          <Template
            id={`upload-${id}`}
            label={id}
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
        "`uploadState` and `progress` are owned by the parent. Field.Upload performs no network requests; it only reflects the state you pass down.\n\n`idle` renders the drop zone when `files` is empty and the file list once files are selected. The default file row then keys off `uploadState`: `uploading` shows a status line and the progress bar, and `success` swaps in a check icon and the file size. The remove button is hidden only while `uploading`, where the request is already in flight and cannot be cancelled.\n\n`error` renders no rows at all — the list is replaced by the drop zone so the selection can be retried, and the failure is announced by the `errors` region below. This keys off `uploadState`, not `errors`: a validation error passed through `errors` keeps the file list visible, so the offending file stays on screen where the user can act on it.\n\n`uploadState` describes the selection as a whole, so every row reflects it and one progress bar covers the list.",
    },
  },
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  id: "upload-errors",
  label: "Upload a document",
  files: [],
  errors: ["A document is required"],
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
        "When disabled, drop handlers are not attached at all, so dragging files over the zone does nothing. Clicking the drop zone is inert too: a `<label>` bound to a disabled input does not forward activation. The root gains `.nds-field--isDisabled` for styling.",
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
        "Disabling the field does not hide what is already selected. Like `Field.Text` and `Field.Select`, a disabled `Field.Upload` still shows its value — the file stays listed with its remove button disabled, so a read-only form does not read as though the attachment was lost.\n\n`isDisabled` does not affect layout. In single-file mode the file row replaces the drop zone whether or not the field is disabled, so this story shows the row alone; disabled is communicated by the inert control rather than by a drop zone that would have nothing to accept.",
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
  renderDropPrompt: () => (
    <div className="nds-field-upload-prompt">Drop your statements here</div>
  ),
  renderFile: (file, remove) => (
    <Row alignItems="center" gapSize="xs">
      <Row.Item shrink>
        <i className="narmi-icon-file-text1" aria-hidden="true" />
      </Row.Item>
      <Row.Item shrink>
        <span>{file.name}</span>
      </Row.Item>
      <Row.Item shrink>
        <span className="fontColor--secondary">
          {formatFileSize(file.size)}
        </span>
      </Row.Item>
      <Row.Item shrink>
        <button
          type="button"
          onClick={remove}
          aria-label={`Remove ${file.name}`}
        >
          <i className="narmi-icon-trash-2" aria-hidden="true" />
        </button>
      </Row.Item>
    </Row>
  ),
};
WithCustomRendering.parameters = {
  docs: {
    description: {
      story:
        "`renderDropPrompt` replaces the whole prompt block, including `labelDropPrompt` and `labelAcceptHint`; `renderFile` replaces each file row and receives a remove callback. Reach for these to change structure — to change wording, use the `label*` props instead.",
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
  labelRemoveFile: (file) => `Quitar ${file.name}`,
};
CustomCopy.parameters = {
  docs: {
    description: {
      story:
        "Every string Field.Upload renders is a prop, defaulting to English. The design system ships no translations and has no locale provider, so a consumer that needs another language passes the translated copy in and stays the single owner of it.\n\n`labelDropPrompt` takes a `ReactNode`, so the emphasised word survives translation.",
    },
  },
};

/**
 * Interaction test verifying a selected file lands in the list.
 */
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

/**
 * Interaction test covering remove, then re-adding the same file. The second
 * selection only fires if the input's value was cleared after the first.
 */
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

/**
 * Interaction test verifying dropped files reach onFilesChange, and that drag
 * state is reflected in the root's `data-state` attribute.
 */
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

    // `fireEvent.drop(zone, { dataTransfer })` cannot be used in a real
    // browser. testing-library rebuilds the event's `dataTransfer` by copying
    // own properties onto a fresh instance, and a real `DataTransfer` has none
    // (`files` and `items` live on the prototype), so the files are silently
    // dropped. Shadowing the accessor on an already-constructed event is the
    // same mechanism testing-library uses, minus the lossy copy.
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(makeFile("dropped.pdf"));

    const dropEvent = createEvent.drop(zone);
    Object.defineProperty(dropEvent, "dataTransfer", { value: dataTransfer });

    fireEvent(zone, dropEvent);
    await waitFor(() => expect(canvas.getByText("dropped.pdf")).toBeVisible());
    expect(readState()).not.toBe("dragActive");
  },
};
