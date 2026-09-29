import React, { forwardRef, type ReactNode } from "react";
import cc from "classcat";
import { useField } from "../useField";
import { useUpload } from "../useUpload";
import { useMergeRefs } from "../../hooks/useMergeRefs";
import { resolveDropZoneState } from "./state";
import formatFileSize from "../../formatters/formatFileSize";
import Row from "../../Row";
import Error from "../../Error";
import IconButton from "../../IconButton";
import ProgressBar from "../../ProgressBar";

import type { FieldBaseProps } from "../types";

export type FieldUploadState = "idle" | "uploading" | "success" | "error";

export interface FieldUploadProps extends FieldBaseProps {
  /** Visual variant of the drop zone. */
  kind?: "default" | "compact";
  /** Currently selected files. `Field.Upload` is a controlled component. */
  files: File[];
  /** Called with the next file list whenever files are added or removed. */
  onFilesChange: (files: File[]) => void;
  /**
   * Forwarded to the native input. Filters the picker, but not drag-and-drop:
   * dropped files of any type still reach `onFilesChange`, so validation
   * belongs there.
   *
   * It has no effect on what the drop zone says. Describe the accepted types
   * with `labelAcceptHint`.
   */
  accept?: string;
  /** When true, new selections append to `files` instead of replacing them. */
  multiple?: boolean;
  /**
   * Upload lifecycle, owned by the parent. `Field.Upload` performs no network
   * requests; pass this (and `progress`) down as the upload proceeds.
   *
   * It applies to the selection as a whole, not to individual files: every row
   * reflects the same state, and `progress` renders as one bar beneath the
   * list. Reset it to `"idle"` from `onFilesChange` so a file added after a
   * completed upload does not inherit the previous `"success"` row.
   *
   * `"error"` is the exception: it renders no rows at all. The list is
   * replaced by the drop zone so the failed selection can be retried, and the
   * failure itself is announced by `errors`. Note this is the upload
   * lifecycle only — validation errors passed through `errors` leave the file
   * list intact, so the offending file stays visible to be fixed.
   */
  uploadState?: FieldUploadState;
  /** Int from 0 to 100, rendered as a ProgressBar while uploading. */
  progress?: number;
  /**
   * Replaces the default file row. Receives the file and a remove callback.
   * Rows are rendered inside the component's container, so the surrounding
   * border and the progress bar stay owned by `Field.Upload`.
   */
  renderFile?: (file: File, remove: () => void) => ReactNode;
  /**
   * Replaces the default drop zone prompt entirely, including
   * `labelDropPrompt` and `labelAcceptHint`. Reach for this only to change
   * the prompt's structure; to change its wording, use those props.
   */
  renderDropPrompt?: () => ReactNode;
  /**
   * Render a label with custom JSX content
   */
  renderLabel?: (label: string) => ReactNode;
  /**
   * When false, the visible label is removed and `label` is applied to the
   * input as a direct `aria-label` instead. Helper text still renders.
   */
  showLabel?: boolean;
  /**
   * Prompt text inside the drop zone.
   *
   * This and the other `label*` props default to English. The design system
   * ships no translations and has no locale provider: a consumer that needs
   * another language passes the translated copy in.
   */
  labelDropPrompt?: ReactNode;
  /**
   * Hint under the prompt describing the accepted file types, e.g.
   * `"PDF file"`. Omitted entirely when not supplied, since `accept` alone
   * is not worth restating.
   */
  labelAcceptHint?: string;
  /** Status line on each file row while `uploadState` is `"uploading"`. */
  labelUploading?: string;
  /** Accessible status for each file when `uploadState` is `"success"`. */
  labelSuccess?: (file: File) => string;
  /**
   * Accessible name for a file's remove button. Takes the file so the name
   * can stay unique per row in a multi-file list.
   */
  labelRemoveFile?: (file: File) => string;
}

/**
 * Field.Upload renders a controlled file input with a drop zone.
 *
 * The drop zone is a `<label>` bound to a visually hidden input, so clicking it
 * opens the native picker and keyboard users reach it by focusing the input.
 *
 * It performs no validation and no uploading: enforce file rules inside
 * `onFilesChange`, and drive `uploadState` / `progress` from the parent.
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
      progress = 0,
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
        files: uploadState === "error" ? [] : files,
        onFilesChange,
        multiple,
        isDisabled,
      });
    const mergedRefs = useMergeRefs(
      forwardedRef,
      inputRef,
    ) as React.Ref<HTMLInputElement>;

    const defaultRenderFile = (file: File, remove: () => void) => {
      const isSuccess = uploadState === "success";

      // Hidden only while uploading, where the request is already in flight
      // and NDS has no way to cancel it. Every other state that renders rows
      // is removable.
      const canRemove = uploadState !== "uploading";

      return (
        <Row alignItems="center" gapSize="s">
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
            {uploadState === "uploading" && (
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

    // A failed upload replaces the list with the drop zone, so the rows are
    // suppressed and the failure is left to the `errors` region. Keyed off
    // `uploadState` rather than `errors.length`, so a validation error keeps
    // the offending file on screen where the user can act on it.
    const hasUploadError = uploadState === "error";

    // In single-file mode the drop zone is replaced by the selected file; the
    // file's remove button brings it back. `isDisabled` deliberately plays no
    // part here: disabling a field should change what it accepts, not how it
    // is laid out, so a disabled single-file selection shows the same file row
    // an enabled one does, just inert. A failed upload is the one exception
    // that forces the zone back, since it is the only way to retry.
    const showDropZone = files.length === 0 || multiple || hasUploadError;

    const showFiles = files.length > 0 && !hasUploadError;

    // Internal styling hook only (dragActive/disabled), not a public contract.
    const dropZoneState = resolveDropZoneState({
      isDisabled,
      isDragActive,
    });

    return (
      <div
        className={cc([
          "nds-field",
          "nds-field-upload",
          `nds-field-upload--${kind}`,
          {
            "nds-field--isDisabled": isDisabled,
            "nds-field--hasError": errors.length > 0,
            // Distinct from `nds-field--hasError`, which tracks the `errors`
            // prop. This one tracks the upload lifecycle.
            "nds-field-upload--uploadError": hasUploadError,
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
              renderDropPrompt()
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
          // Wraps the list *and* the progress bar so the bar sits inside the
          // same bordered container as the rows it describes. `progress` is a
          // single component-level value the parent owns, so one bar covers
          // the whole selection rather than being duplicated per row.
          <div
            className={cc([
              "nds-field-upload-files",
              `nds-field-upload-files--${uploadState}`,
            ])}
          >
            <ul className="nds-field-upload-list list--reset">
              {files.map((file) => (
                <li key={`${file.name}-${file.lastModified}-${file.size}`}>
                  {(renderFile ?? defaultRenderFile)(file, () =>
                    removeFile(file),
                  )}
                </li>
              ))}
            </ul>

            {uploadState === "uploading" && (
              <div className="nds-field-upload-uploadProgress">
                <ProgressBar percentComplete={progress} />
              </div>
            )}
          </div>
        )}

        <div className="nds-field-errors" id={errorId} aria-live="polite">
          {errors.map((error: string, i: number) => (
            <Error key={`${i}-${error}`} error={error} marginTop="none" />
          ))}
        </div>
      </div>
    );
  },
);

FieldUpload.displayName = "Field.Upload";
