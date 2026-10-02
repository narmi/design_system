import { useState } from "react";

/**
 * Object form of the upload lifecycle. `progress` is required by `uploading`
 * and meaningless elsewhere; `error` may carry its own `message`, so the
 * failure and its explanation travel together.
 */
export type FieldUploadStateObject =
  | { status: "idle" }
  | { status: "uploading"; progress: number }
  | { status: "success" }
  | { status: "error"; message?: string };

/** The lifecycle values, without their payloads. */
export type FieldUploadStatus = FieldUploadStateObject["status"];

/**
 * States with no required payload may be passed as a bare string.
 *
 * `"uploading"` is deliberately absent from the string arm: it carries
 * required `progress`, so it must be written in object form.
 */
export type FieldUploadState =
  | "idle"
  | "success"
  | "error"
  | FieldUploadStateObject;

const fileKeys = new WeakMap<File, string>();
let nextFileKey = 0;

/** Identifies a file independently of the array holding it. */
export const fileKey = (file: File) => {
  const existingKey = fileKeys.get(file);
  if (existingKey) return existingKey;

  const key = `file-${nextFileKey++}`;
  fileKeys.set(file, key);
  return key;
};

/**
 * Resolves the consumer's `uploadState` against the current selection.
 *
 * A finished upload describes the selection it finished for, so once that
 * selection changes the outcome is stale by definition. Dropping it here is a
 * safety net for this field's own rendering — it stops a newly added file
 * wearing the previous file's success check — not a substitute for the parent
 * tracking the outcome itself.
 *
 * Returns the state the component should actually render, so callers never
 * have to remember to check staleness themselves.
 */
export const useUploadState = (
  uploadState: FieldUploadState,
  files: File[],
): FieldUploadStateObject => {
  const upload: FieldUploadStateObject =
    typeof uploadState === "string"
      ? ({ status: uploadState } as FieldUploadStateObject)
      : uploadState;

  // Identifies the *selection*, not the array holding it. A parent that
  // rebuilds `files` on every render (`files={selected.map(...)}`) would look
  // like a new selection under an identity check and could never show a
  // completed outcome.
  const signature = files.map(fileKey).join("|");

  const [anchor, setAnchor] = useState({ status: upload.status, signature });
  if (anchor.status !== upload.status) {
    setAnchor({ status: upload.status, signature });
  }

  // Derived rather than stored: there is no render in which a remembered flag
  // and the current status can disagree. Only terminal outcomes go stale —
  // an in-flight upload keeps its progress bar across a selection change.
  const isTerminal = upload.status === "success" || upload.status === "error";
  const isStale = isTerminal && anchor.signature !== signature;

  return isStale ? { status: "idle" } : upload;
};
