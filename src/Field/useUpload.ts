import { useCallback, useRef, useState } from "react";

export interface UseUploadOptions {
  /** Currently selected files. `Field.Upload` is controlled. */
  files: File[];
  /** Called with the next file list whenever files are added or removed. */
  onFilesChange: (files: File[]) => void;
  /** When true, new selections append to `files` instead of replacing them. */
  multiple?: boolean;
  /** When true, the drop zone is disabled and does not accept files. */
  isDisabled?: boolean;
}

/**
 * Hook managing file selection and drop zone interactions.
 * Handles ARIA attributes and drag state for the drop zone.
 */
export const useUpload = ({
  files,
  onFilesChange,
  multiple = false,
  isDisabled = false,
}: UseUploadOptions) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  // `dragenter`/`dragleave` fire for every descendant the pointer crosses, so a
  // plain boolean flickers as the cursor moves over children. Counting nested
  // enter/leave pairs keeps `isDragActive` stable for the whole drag.
  const dragDepth = useRef(0);

  const addFiles = useCallback(
    (incoming: FileList | File[] | null) => {
      if (!incoming) return;
      const next = Array.from(incoming);
      if (next.length === 0) return;
      onFilesChange(multiple ? [...files, ...next] : [next[0]]);
    },
    [files, multiple, onFilesChange],
  );

  const removeFile = useCallback(
    (target: File) => {
      if (isDisabled) return;
      onFilesChange(files.filter((file) => file !== target));
    },
    [files, isDisabled, onFilesChange],
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      addFiles(event.target.files);
      // Reset after every file drop/selection.
      // Treat the same file as new every time so onFilesChange fires.
      event.target.value = "";
    },
    [addFiles],
  );

  const resetDrag = useCallback(() => {
    dragDepth.current = 0;
    setIsDragActive(false);
  }, []);

  const dropZoneProps = isDisabled
    ? {}
    : {
        onDragEnter: (event: React.DragEvent) => {
          event.preventDefault();
          dragDepth.current += 1;
          setIsDragActive(true);
        },
        onDragOver: (event: React.DragEvent) => {
          event.preventDefault();
        },
        onDragLeave: (event: React.DragEvent) => {
          event.preventDefault();
          dragDepth.current -= 1;
          if (dragDepth.current <= 0) resetDrag();
        },
        onDrop: (event: React.DragEvent) => {
          event.preventDefault();
          resetDrag();
          addFiles(event.dataTransfer?.files ?? null);
        },
      };

  return {
    inputRef,
    isDragActive,
    dropZoneProps,
    removeFile,
    handleChange,
  };
};
