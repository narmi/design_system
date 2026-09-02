/**
 * Transient interaction state of the drop zone, surfaced on the
 * `Field.Upload` root as `data-state` for internal styling only. Not a
 * contract for consumers to key off of.
 *
 * Only covers states NDS actually styles. Upload lifecycle (`uploadState`)
 * and error display are driven directly off their own props elsewhere in the
 * component instead of being folded in here.
 */
export type DropZoneState = "disabled" | "dragActive";

export interface ResolveDropZoneStateOptions {
  isDisabled?: boolean;
  isDragActive?: boolean;
}

/**
 * `disabled` wins outright; when the field is disabled `useUpload` attaches
 * no drag handlers at all, so drag state cannot be trusted.
 *
 * Returns `undefined` at rest so `data-state` is omitted from the DOM instead
 * of carrying a value nothing styles off of.
 */
export const resolveDropZoneState = ({
  isDisabled = false,
  isDragActive = false,
}: ResolveDropZoneStateOptions): DropZoneState | undefined => {
  if (isDisabled) return "disabled";
  if (isDragActive) return "dragActive";
  return undefined;
};
