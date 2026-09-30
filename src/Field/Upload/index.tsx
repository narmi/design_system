import React, { forwardRef, type ReactNode } from "react";
import cc from "classcat";
import { useField } from "../useField";
import { useUpload } from "./useUpload";
import { useMergeRefs } from "../../hooks/useMergeRefs";
import { useUploadState, fileKey } from "./useUploadState";
import { FieldErrors } from "../Errors/index";
import formatFileSize from "../../formatters/formatFileSize";
import Row from "../../Row";
import IconButton from "../../IconButton";
import ProgressBar from "../../ProgressBar";

import type { FieldBaseProps } from "../types";
import type { FieldUploadState, FieldUploadStatus } from "./useUploadState";

// Re-exported so the state types stay part of Field.Upload's public surface
// while living next to the hook that resolves them.
export type {
  FieldUploadState,
  FieldUploadStateObject,
  FieldUploadStatus,
} from "./useUploadState";

export interface FieldUploadProps extends FieldBaseProps {
  /** Size of the drop zone: `"default"` (larger) or `"compact"`. */
  kind?: "default" | "compact";
  /** Currently selected files. `Field.Upload` is a controlled component. */
  files: File[];
  /** Called with the next file list whenever files are added or removed. */
  onFilesChange: (files: File[]) => void;
  /**
   * Forwarded to the native input. Filters the picker but not drag-and-drop:
   * dropped files of any type still reach `onFilesChange`, so validate there.
   * Does not affect the drop zone's copy — use `labelAcceptHint`.
   */
  accept?: string;
  /**
   * When true, new selections append to `files` instead of replacing them.
   *
   * When false, only the first file of a selection is kept. A picker or drop
   * carrying several files reports just one through `onFilesChange`, and the
   * rest are discarded silently.
   */
  multiple?: boolean;
  /**
   * Upload lifecycle, owned by the parent; `Field.Upload` performs no network
   * requests. States without a payload may be written as a bare string
   * (`uploadState="success"`); `"uploading"` requires `progress`.
   *
   * Applies to the selection as a whole, not to individual files.
   *
   * A completed outcome is anchored to the selection it was reported for, so
   * a new file does not inherit the previous `"success"` row. That covers this
   * field's rendering only — anything else deriving from `"success"` still
   * needs resetting from `onFilesChange`.
   *
   * `"error"` renders no rows: the list is replaced by the drop zone so the
   * selection can be retried.
   */
  uploadState?: FieldUploadState;
  /**
   * Replaces the default file row. Use for structure only; for wording, use
   * the `label*` props.
   *
   * The resolved `status` is passed because it cannot be derived from outside:
   * a completed outcome may have been cleared as stale, so it is not
   * necessarily what the parent passed as `uploadState`.
   */
  renderFile?: (
    file: File,
    remove: () => void,
    status: FieldUploadStatus,
  ) => ReactNode;
  /**
   * Replaces the drop zone prompt entirely, including `labelDropPrompt` and
   * `labelAcceptHint`. Receives the live drag state, which is tracked
   * internally and otherwise unavailable to consumers.
   */
  renderDropPrompt?: (isDragActive: boolean) => ReactNode;
  /**
   * When false, the visible label is removed and `label` is applied to the
   * input as a direct `aria-label` instead. Helper text still renders.
   */
  showLabel?: boolean;
  /**
   * Prompt text inside the drop zone. This and the other `label*` props
   * default to English; NDS ships no translations, so pass translated copy in.
   */
  labelDropPrompt?: ReactNode;
  /**
   * Hint under the prompt describing accepted file types, e.g. `"PDF file"`.
   * Omitted entirely when not supplied.
   */
  labelAcceptHint?: string;
  /** Status line on each file row while `uploadState` is `"uploading"`. */
  labelUploading?: string;
  /** Accessible status for each file when `uploadState` is `"success"`. */
  labelSuccess?: (file: File) => string;
  /**
   * Accessible name for a file's remove button. Takes the file so the name
   * stays unique per row.
   */
  labelRemoveFile?: (file: File) => string;
}

/**
 * Field.Upload renders a controlled file input with a drop zone.
 *
 * It performs no validation and no uploading: enforce file rules inside
 * `onFilesChange`, and drive `uploadState` from the parent.
 */
export const FieldUpload = forwardRef<HTMLInputElement, FieldUploadProps>(
  (
    {
      label,
      id,
      kind = "default",
      files,
      onFilesChange,
      accept,
      multiple = false,
      uploadState = "idle",
      renderFile,
      renderDropPrompt,
      errors = [],
      isDisabled = false,
      renderHelperText,
      showLabel = true,
      labelDropPrompt = (
        <>
          Drag and drop here or <em>click</em> to upload a file
        </>
      ),
      labelAcceptHint,
      labelUploading = "Uploading...",
      labelSuccess = (file: File) => `${file.name} uploaded successfully`,
      labelRemoveFile = (file: File) => `Remove ${file.name}`,
    },
    forwardedRef,
  ) => {
    // Defined here, not at module scope, because the default row needs
    // isDisabled and the label* props, which only exist inside the component.
    const defaultRenderFile: FieldUploadProps["renderFile"] = (
      file,
      remove,
      status,
    ) => {
      const isSuccess = status === "success";

      // Hidden only while uploading: the request is in flight and NDS has no
      // way to cancel it.
      const canRemove = status !== "uploading";

      return (
        <Row alignItems="center" gapSize="s">
          {/*
           * Visually hidden live region. Kept mounted and emptied rather than
           * conditionally rendered, so the message is announced when it arrives.
           */}
          <span className="nds-field-upload-file-status" role="status">
            {isSuccess ? labelSuccess(file) : ""}
          </span>
          <Row.Item shrink>
            {isSuccess ? (
              <span className="nds-field-upload-file-check alignChild--center--center">
                <span
                  className="narmi-icon-check fontSize--l"
                  aria-hidden="true"
                />
              </span>
            ) : (
              <span
                className="nds-field-upload-file-icon narmi-icon-file-text1 fontSize--heading3"
                aria-hidden="true"
              />
            )}
          </Row.Item>
          <Row.Item>
            <div className="nds-field-upload-file-name">{file.name}</div>
            {status === "uploading" && (
              <div className="fontSize--s fontColor--secondary">
                {labelUploading}
              </div>
            )}
            {isSuccess && (
              <div className="fontSize--s fontColor--secondary">
                {formatFileSize(file.size)}
              </div>
            )}
          </Row.Item>
          {canRemove && (
            <Row.Item shrink>
              <IconButton
                name="x"
                type="button"
                onClick={remove}
                disabled={isDisabled}
                label={labelRemoveFile(file)}
              />
            </Row.Item>
          )}
        </Row>
      );
    };

    const upload = useUploadState(uploadState, files);

    const messages =
      upload.status === "error"
        ? [...errors, upload.message || "Upload failed"]
        : errors;

    const { errorId, labelId, controlProps, labelProps } = useField({
      id,
      errors: messages,
      isDisabled,
      label,
      showLabel,
    });

    const { inputRef, isDragActive, dropZoneProps, removeFile, handleChange } =
      useUpload({
        files,
        onFilesChange,
        multiple,
        isDisabled,
      });
    const mergedRefs = useMergeRefs(
      forwardedRef,
      inputRef,
    ) as React.Ref<HTMLInputElement>;

    const renderRow = renderFile ?? defaultRenderFile;

    const hasUploadError = upload.status === "error";

    // when multiple files are allowed, the drop zone remains visible.
    const showDropZone = files.length === 0 || multiple || hasUploadError;
    const showFiles = files.length > 0 && !hasUploadError;
    const dropZoneState = isDragActive ? "dragActive" : undefined;

    return (
      <div
        className={cc([
          "nds-field",
          "nds-field-upload",
          `nds-field-upload--${kind}`,
          {
            "nds-field--isDisabled": isDisabled,
            "nds-field--hasError": messages.length > 0,
          },
        ])}
        data-state={dropZoneState}
        aria-busy={upload.status === "uploading" || undefined}
      >
        <Row alignItems="center">
          {showLabel && (
            <Row.Item>
              <label
                id={labelId}
                className="nds-field-label"
                htmlFor={controlProps.id}
              >
                {label}
              </label>
            </Row.Item>
          )}
          <Row.Item shrink>
            <div className="fontColor--secondary fontSize--s">
              {renderHelperText?.()}
            </div>
          </Row.Item>
        </Row>

        <input
          ref={mergedRefs}
          type="file"
          className="nds-field-upload-input"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          {...labelProps}
          {...controlProps}
        />

        {showDropZone && (
          <label
            htmlFor={controlProps.id}
            className="nds-field-upload-dropzone"
            {...dropZoneProps}
          >
            <div className="nds-field-upload-icon alignChild--center--center">
              <span className="narmi-icon-upload" aria-hidden="true" />
            </div>
            {renderDropPrompt ? (
              renderDropPrompt(isDragActive)
            ) : (
              <div className="nds-field-upload-prompt">
                <div>{labelDropPrompt}</div>
                {labelAcceptHint && (
                  <div className="fontSize--s fontColor--secondary">
                    {labelAcceptHint}
                  </div>
                )}
              </div>
            )}
          </label>
        )}

        {showFiles && (
          <div className="nds-field-upload-files">
            <ul className="nds-field-upload-list list--reset">
              {files.map((file, index) => (
                // `fileKey` identifies a file by content, so selecting the
                // same file twice in `multiple` mode yields two identical
                // keys. The index disambiguates them.
                <li key={`${fileKey(file)}-${index}`}>
                  {renderRow(file, () => removeFile(file), upload.status)}
                </li>
              ))}
            </ul>

            {upload.status === "uploading" && (
              <div
                className="nds-field-upload-uploadProgress"
                role="progressbar"
                aria-label={labelUploading}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={upload.progress}
              >
                <ProgressBar percentComplete={upload.progress} />
              </div>
            )}
          </div>
        )}

        <FieldErrors id={errorId} errors={messages} />
      </div>
    );
  },
);

FieldUpload.displayName = "Field.Upload";
