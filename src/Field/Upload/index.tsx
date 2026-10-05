import React, { forwardRef, type ReactNode } from "react";
import cc from "classcat";
import { useField } from "../useField";
import { useUpload } from "./useUpload";
import { useMergeRefs } from "../../hooks/useMergeRefs";
import { FieldErrors } from "../Errors/index";
import formatFileSize from "../../formatters/formatFileSize";
import Row from "../../Row";
import IconButton from "../../IconButton";
import ProgressBar from "../../ProgressBar";

import type { FieldBaseProps } from "../types";

/**
 * Upload lifecycle, owned by the parent.
 *
 * There is no `"error"` state: a failed upload is reported through `errors`,
 * the same channel as validation, so the message is always the parent's.
 */
export type FieldUploadState = "idle" | "uploading" | "success";

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
   * requests. Applies to the selection as a whole, not to individual files.
   *
   * What you pass is what renders, including across a selection change: reset
   * this from `onFilesChange` so a newly added file does not inherit the
   * previous file's `"success"` row.
   *
   * A failed upload is not a state here — pass the message through `errors`.
   */
  uploadState?: FieldUploadState;
  /**
   * Completion percentage, 0-100, read only while `uploadState` is
   * `"uploading"`. Defaults to 0, which renders an empty bar.
   */
  uploadProgress?: number;
  /**
   * Replaces the default file row. Use for structure only; for wording, use
   * the `label*` props.
   */
  renderFile?: (
    file: File,
    remove: () => void,
    status: FieldUploadState,
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

interface UploadFileRowProps {
  file: File;
  remove: () => void;
  status: FieldUploadState;
  isDisabled: boolean;
  labelUploading: string;
  labelSuccess: (file: File) => string;
  labelRemoveFile: (file: File) => string;
}

/** The row rendered for each file unless `renderFile` replaces it. */
const UploadFileRow = ({
  file,
  remove,
  status,
  isDisabled,
  labelUploading,
  labelSuccess,
  labelRemoveFile,
}: UploadFileRowProps) => {
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
            <span className="narmi-icon-check fontSize--l" aria-hidden="true" />
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
      uploadProgress = 0,
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
    const { errorId, labelId, controlProps, labelProps } = useField({
      id,
      errors,
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

    // when multiple files are allowed, the drop zone remains visible.
    const showDropZone = files.length === 0 || multiple;
    const showFiles = files.length > 0;
    const dropZoneState = isDragActive ? "dragActive" : undefined;

    return (
      <div
        className={cc([
          "nds-field",
          "nds-field-upload",
          `nds-field-upload--${kind}`,
          {
            "nds-field--isDisabled": isDisabled,
            "nds-field--hasError": errors.length > 0,
          },
        ])}
        data-state={dropZoneState}
        aria-busy={uploadState === "uploading" || undefined}
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
          <div
            className={cc([
              "nds-field-upload-files",
              {
                "nds-field-upload-files--uploading":
                  uploadState === "uploading",
              },
            ])}
          >
            <ul className="nds-field-upload-list list--reset">
              {files.map((file, index) => (
                // Files carry no id, so the key is derived from their fields.
                // Selecting the same file twice in `multiple` mode yields two
                // identical derivations; the index disambiguates them.
                <li
                  key={`${file.name}-${file.size}-${file.lastModified}-${index}`}
                >
                  {renderFile ? (
                    renderFile(file, () => removeFile(file), uploadState)
                  ) : (
                    <UploadFileRow
                      file={file}
                      remove={() => removeFile(file)}
                      status={uploadState}
                      isDisabled={isDisabled}
                      labelUploading={labelUploading}
                      labelSuccess={labelSuccess}
                      labelRemoveFile={labelRemoveFile}
                    />
                  )}
                </li>
              ))}
            </ul>

            {uploadState === "uploading" && (
              <div
                className="nds-field-upload-uploadProgress"
                role="progressbar"
                aria-label={labelUploading}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={uploadProgress}
              >
                <ProgressBar percentComplete={uploadProgress} />
              </div>
            )}
          </div>
        )}

        <FieldErrors id={errorId} errors={errors} />
      </div>
    );
  },
);

FieldUpload.displayName = "Field.Upload";
