import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FieldUpload, type FieldUploadProps } from "./index";

const makeFile = (name: string, type = "application/pdf") =>
  new File(["file-contents"], name, { type });

type HarnessProps = Partial<Omit<FieldUploadProps, "files">> & {
  initialFiles?: File[];
};

/** Controlled harness mirroring real usage. */
const Harness = ({
  onFilesChange,
  initialFiles = [],
  ...rest
}: HarnessProps) => {
  const [files, setFiles] = useState<File[]>(initialFiles);
  return (
    <FieldUpload
      label="Upload a document"
      {...rest}
      files={files}
      onFilesChange={(next) => {
        setFiles(next);
        onFilesChange?.(next);
      }}
    />
  );
};

const getInput = (container: HTMLElement) =>
  container.querySelector('input[type="file"]') as HTMLInputElement;

describe("Field.Upload", () => {
  it("renders the label wired to the input", () => {
    const { container } = render(<Harness id="docs" />);
    expect(getInput(container).id).toBe("docs");
    expect(screen.getByText("Upload a document")).toBeInTheDocument();
  });

  it("calls onFilesChange with the selected file", async () => {
    const onFilesChange = vi.fn();
    const { container } = render(<Harness onFilesChange={onFilesChange} />);

    await userEvent.upload(getInput(container), makeFile("statement.pdf"));

    expect(onFilesChange).toHaveBeenCalledTimes(1);
    expect(onFilesChange.mock.calls[0][0][0].name).toBe("statement.pdf");
    expect(screen.getByText("statement.pdf")).toBeInTheDocument();
  });

  it("appends to the list when multiple is set", async () => {
    const { container } = render(<Harness multiple />);
    const input = getInput(container);

    await userEvent.upload(input, makeFile("a.pdf"));
    await userEvent.upload(input, makeFile("b.pdf"));

    expect(screen.getByText("a.pdf")).toBeInTheDocument();
    expect(screen.getByText("b.pdf")).toBeInTheDocument();
  });

  it("replaces the list when multiple is not set", async () => {
    const { container } = render(<Harness />);
    const input = getInput(container);

    await userEvent.upload(input, makeFile("a.pdf"));
    await userEvent.upload(input, makeFile("b.pdf"));

    expect(screen.queryByText("a.pdf")).not.toBeInTheDocument();
    expect(screen.getByText("b.pdf")).toBeInTheDocument();
  });

  it("removes a file via its remove button", async () => {
    const { container } = render(<Harness />);
    await userEvent.upload(getInput(container), makeFile("statement.pdf"));

    await userEvent.click(
      screen.getByRole("button", { name: /remove statement\.pdf/i }),
    );

    expect(screen.queryByText("statement.pdf")).not.toBeInTheDocument();
  });

  it("clears the input value so the same file can be re-added", async () => {
    const { container } = render(<Harness />);
    const input = getInput(container);

    await userEvent.upload(input, makeFile("statement.pdf"));
    expect(input.value).toBe("");

    await userEvent.click(
      screen.getByRole("button", { name: /remove statement\.pdf/i }),
    );
    await userEvent.upload(input, makeFile("statement.pdf"));

    expect(screen.getByText("statement.pdf")).toBeInTheDocument();
  });

  it("forwards accept and multiple to the native input", () => {
    const { container } = render(<Harness accept="image/*" multiple />);
    const input = getInput(container);
    expect(input).toHaveAttribute("accept", "image/*");
    expect(input).toHaveAttribute("multiple");
  });

  describe("drop zone", () => {
    it("is a label bound to the input, so clicking opens the picker", () => {
      const { container } = render(<Harness id="docs" />);
      const zone = container.querySelector(".nds-field-upload-dropzone");

      expect(zone?.tagName).toBe("LABEL");
      expect(zone).toHaveAttribute("for", "docs");
      expect(getInput(container).id).toBe("docs");
    });

    it("is hidden once a file is selected in single-file mode", async () => {
      const { container } = render(<Harness />);
      expect(
        container.querySelector(".nds-field-upload-dropzone"),
      ).not.toBeNull();

      await userEvent.upload(getInput(container), makeFile("statement.pdf"));

      expect(container.querySelector(".nds-field-upload-dropzone")).toBeNull();
    });

    it("returns after the selected file is removed", async () => {
      const { container } = render(<Harness />);
      await userEvent.upload(getInput(container), makeFile("statement.pdf"));

      await userEvent.click(
        screen.getByRole("button", { name: /remove statement\.pdf/i }),
      );

      expect(
        container.querySelector(".nds-field-upload-dropzone"),
      ).not.toBeNull();
    });

    it("stays visible with files selected when multiple is set", async () => {
      const { container } = render(<Harness multiple />);
      await userEvent.upload(getInput(container), makeFile("statement.pdf"));

      expect(
        container.querySelector(".nds-field-upload-dropzone"),
      ).not.toBeNull();
    });

    it("is hidden in single-file mode even when the field is disabled", () => {
      // `isDisabled` controls interactivity, not layout: a disabled
      // single-file selection lays out exactly like an enabled one.
      const { container } = render(
        <Harness isDisabled initialFiles={[makeFile("statement.pdf")]} />,
      );

      expect(container.querySelector(".nds-field-upload-dropzone")).toBeNull();
      expect(screen.getByText("statement.pdf")).toBeInTheDocument();
    });

    it("stays visible when disabled with multiple files", () => {
      const { container } = render(
        <Harness
          isDisabled
          multiple
          initialFiles={[makeFile("a.pdf"), makeFile("b.pdf")]}
        />,
      );

      expect(
        container.querySelector(".nds-field-upload-dropzone"),
      ).not.toBeNull();
    });

    it("renders the accept hint when one is supplied", () => {
      const { container } = render(<Harness labelAcceptHint="PDF file" />);
      expect(container).toHaveTextContent("PDF file");
    });

    it("renders no hint, and no stray 0, when labelAcceptHint is omitted", () => {
      const { container } = render(<Harness accept="application/pdf" />);
      const prompt = container.querySelector(".nds-field-upload-prompt");

      expect(prompt).not.toBeNull();
      expect(prompt?.textContent).not.toContain("0");
      expect(prompt?.textContent).not.toContain("file type");
    });
  });

  describe("copy props", () => {
    it("renders English defaults", async () => {
      const { container } = render(<Harness />);

      expect(container).toHaveTextContent(
        "Drag and drop here or click to upload a file",
      );

      await userEvent.upload(getInput(container), makeFile("statement.pdf"));
      expect(
        screen.getByRole("button", { name: "Remove statement.pdf" }),
      ).toBeInTheDocument();
    });

    it("overrides the drop prompt", () => {
      const { container } = render(
        <Harness labelDropPrompt="Suelta tus archivos aquí" />,
      );

      expect(container).toHaveTextContent("Suelta tus archivos aquí");
      expect(container).not.toHaveTextContent("Drag and drop here");
    });

    it("accepts JSX for the drop prompt", () => {
      const { container } = render(
        <Harness
          labelDropPrompt={
            <>
              Arrastra o <em>haz clic</em>
            </>
          }
        />,
      );

      expect(
        container.querySelector(".nds-field-upload-prompt em"),
      ).toHaveTextContent("haz clic");
    });

    it("overrides the uploading status line", () => {
      render(
        <Harness
          uploadState="uploading"
          initialFiles={[makeFile("statement.pdf")]}
          labelUploading="Subiendo..."
        />,
      );

      expect(screen.getByText("Subiendo...")).toBeInTheDocument();
      expect(screen.queryByText("Uploading...")).not.toBeInTheDocument();
    });

    it("overrides the success status, per file", () => {
      render(
        <Harness
          multiple
          uploadState="success"
          initialFiles={[makeFile("a.pdf"), makeFile("b.pdf")]}
          labelSuccess={(file) => `${file.name} se subió correctamente`}
        />,
      );

      expect(
        screen.getByRole("status", {
          name: "a.pdf se subió correctamente",
        }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("status", {
          name: "b.pdf se subió correctamente",
        }),
      ).toBeInTheDocument();
    });

    it("overrides the remove button name, per file", () => {
      render(
        <Harness
          multiple
          initialFiles={[makeFile("a.pdf"), makeFile("b.pdf")]}
          labelRemoveFile={(file) => `Quitar ${file.name}`}
        />,
      );

      expect(
        screen.getByRole("button", { name: "Quitar a.pdf" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Quitar b.pdf" }),
      ).toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("names the input from the field label only", () => {
      const { container } = render(<Harness id="docs" />);

      // The drop zone is a second <label> for the same input. Without an
      // explicit aria-labelledby the accessible name would concatenate both.
      expect(getInput(container)).toHaveAttribute(
        "aria-labelledby",
        "docs-label",
      );
      expect(container.querySelector("#docs-label")).toHaveTextContent(
        "Upload a document",
      );
    });

    it("keeps the input focusable so keyboard users can reach the picker", () => {
      const { container } = render(<Harness />);
      const input = getInput(container);

      input.focus();

      expect(input).toHaveFocus();
    });
  });

  describe("showLabel", () => {
    it("renders the visible label and points the input at it by default", () => {
      const { container } = render(<Harness id="docs" />);

      expect(container.querySelector(".nds-field-label")).not.toBeNull();
      expect(getInput(container)).toHaveAttribute(
        "aria-labelledby",
        "docs-label",
      );
      expect(getInput(container)).not.toHaveAttribute("aria-label");
    });

    it("removes the visible label and names the input directly when false", () => {
      const { container } = render(<Harness id="docs" showLabel={false} />);

      expect(container.querySelector(".nds-field-label")).toBeNull();
      expect(getInput(container)).toHaveAttribute(
        "aria-label",
        "Upload a document",
      );
      expect(getInput(container)).not.toHaveAttribute("aria-labelledby");
    });

    it("keeps the accessible name queryable when the label is hidden", () => {
      render(<Harness showLabel={false} />);

      expect(screen.getByLabelText("Upload a document")).toHaveAttribute(
        "type",
        "file",
      );
    });

    it("still renders helper text when the label is hidden", () => {
      render(
        <Harness
          showLabel={false}
          renderHelperText={() => <span>PDF up to 5MB</span>}
        />,
      );

      expect(screen.getByText("PDF up to 5MB")).toBeInTheDocument();
    });
  });

  describe("errors", () => {
    it("renders errors and links them via aria-describedby", () => {
      const { container } = render(
        <Harness id="docs" errors={["Upload failed"]} />,
      );
      expect(screen.getByText("Upload failed")).toBeInTheDocument();
      expect(getInput(container)).toHaveAttribute("aria-invalid", "true");
      expect(getInput(container)).toHaveAttribute(
        "aria-describedby",
        "docs-error",
      );
    });

    it("omits aria-invalid when there are no errors", () => {
      const { container } = render(<Harness />);
      expect(getInput(container)).not.toHaveAttribute("aria-invalid");
    });
  });

  describe("drag and drop", () => {
    // Drag state is published as `data-state` on the root, not as a class on
    // the drop zone, so assertions read the root the zone belongs to.
    const rootOf = (zone: HTMLElement) =>
      zone.closest(".nds-field-upload") as HTMLElement;

    const renderZone = (props: HarnessProps = {}) => {
      const { container } = render(<Harness {...props} />);
      return container.querySelector(
        ".nds-field-upload-dropzone",
      ) as HTMLElement;
    };

    it("adds dropped files", () => {
      const zone = renderZone({ multiple: true });

      fireEvent.drop(zone, { dataTransfer: { files: [makeFile("d.pdf")] } });

      expect(screen.getByText("d.pdf")).toBeInTheDocument();
    });

    it("stays active while dragging over child elements", () => {
      const zone = renderZone();
      const root = rootOf(zone);

      fireEvent.dragEnter(zone);
      expect(root).toHaveAttribute("data-state", "dragActive");

      // Entering a child fires enter again before the parent's leave.
      fireEvent.dragEnter(zone);
      fireEvent.dragLeave(zone);
      expect(root).toHaveAttribute("data-state", "dragActive");

      fireEvent.dragLeave(zone);
      expect(root).not.toHaveAttribute("data-state");
    });

    it("resets drag state after a drop", () => {
      const zone = renderZone({ multiple: true });
      const root = rootOf(zone);

      fireEvent.dragEnter(zone);
      fireEvent.drop(zone, { dataTransfer: { files: [makeFile("d.pdf")] } });

      expect(root).not.toHaveAttribute("data-state");
    });

    it("ignores drops when disabled", () => {
      const zone = renderZone({ isDisabled: true });
      const root = rootOf(zone);

      fireEvent.dragEnter(zone);
      fireEvent.drop(zone, { dataTransfer: { files: [makeFile("d.pdf")] } });

      expect(screen.queryByText("d.pdf")).not.toBeInTheDocument();
      expect(root).toHaveAttribute("data-state", "disabled");
    });
  });

  describe("data-state styling hook", () => {
    const rootOf = (container: HTMLElement) =>
      container.querySelector(".nds-field-upload") as HTMLElement;

    it("omits data-state at rest", () => {
      const { container } = render(<Harness />);
      expect(rootOf(container)).not.toHaveAttribute("data-state");
    });

    it("is unaffected by upload lifecycle or errors", () => {
      const { container, rerender } = render(<Harness uploadState="idle" />);

      rerender(<Harness uploadState="uploading" />);
      expect(rootOf(container)).not.toHaveAttribute("data-state");

      rerender(<Harness errors={["Upload failed"]} />);
      expect(rootOf(container)).not.toHaveAttribute("data-state");
    });

    it("sets aria-busy only while uploading", () => {
      const { container, rerender } = render(<Harness uploadState="idle" />);
      expect(rootOf(container)).not.toHaveAttribute("aria-busy");

      rerender(<Harness uploadState="uploading" />);
      expect(rootOf(container)).toHaveAttribute("aria-busy", "true");
    });
  });

  describe("render props", () => {
    it("renderFile replaces the default row", async () => {
      const { container } = render(
        <Harness
          renderFile={(file, remove) => (
            <button type="button" onClick={remove}>
              drop {file.name}
            </button>
          )}
        />,
      );
      await userEvent.upload(getInput(container), makeFile("statement.pdf"));

      const button = screen.getByRole("button", {
        name: /drop statement\.pdf/i,
      });
      await userEvent.click(button);

      expect(
        screen.queryByRole("button", { name: /drop statement\.pdf/i }),
      ).not.toBeInTheDocument();
    });

    it("renderDropPrompt replaces the default prompt content", () => {
      const { container } = render(
        <Harness renderDropPrompt={() => <span>custom prompt</span>} />,
      );

      expect(screen.getByText("custom prompt")).toBeInTheDocument();
      expect(screen.queryByText(/drag files here/i)).not.toBeInTheDocument();
      // The drop zone element itself stays owned by the component.
      expect(
        container.querySelector(".nds-field-upload-dropzone"),
      ).toContainElement(screen.getByText("custom prompt"));
    });
  });

  describe("field styling contract", () => {
    it("applies shared nds-field classes", () => {
      // Seeded with a file: the list only renders when there is something to
      // list, so an empty field is the wrong fixture for this contract.
      const { container } = render(
        <Harness initialFiles={[makeFile("statement.pdf")]} />,
      );
      const root = container.firstElementChild;

      expect(root).toHaveClass("nds-field");
      expect(root).toHaveClass("nds-field-upload");
      expect(container.querySelector(".nds-field-label")).not.toBeNull();
      expect(container.querySelector(".nds-field-errors")).not.toBeNull();
      expect(container.querySelector(".nds-field-upload-list")).not.toBeNull();
    });

    it("reflects disabled and error state with modifier classes", () => {
      const { container, rerender } = render(<Harness />);
      const root = () => container.firstElementChild;

      expect(root()).not.toHaveClass("nds-field--isDisabled");
      expect(root()).not.toHaveClass("nds-field--hasError");

      rerender(<Harness isDisabled errors={["Upload failed"]} />);

      expect(root()).toHaveClass("nds-field--isDisabled");
      expect(root()).toHaveClass("nds-field--hasError");
    });
  });

  describe("uploadState", () => {
    const seeded = (props: HarnessProps = {}) =>
      render(<Harness initialFiles={[makeFile("statement.pdf")]} {...props} />);

    const removeButton = () =>
      screen.queryByRole("button", { name: "Remove statement.pdf" });

    it("renders a progress bar only while uploading", () => {
      // The bar lives inside the file container, so it is scoped to an actual
      // selection: an empty field never shows progress.
      const { container, rerender } = seeded({ uploadState: "idle" });
      expect(container.querySelector(".nds-progressbar")).toBeNull();

      rerender(
        <Harness
          initialFiles={[makeFile("statement.pdf")]}
          uploadState="uploading"
          progress={45}
        />,
      );
      expect(container.querySelector(".nds-progressbar")).not.toBeNull();
    });

    it("renders no progress bar when nothing is selected", () => {
      const { container } = render(
        <Harness uploadState="uploading" progress={45} />,
      );
      expect(container.querySelector(".nds-progressbar")).toBeNull();
    });

    it("renders the progress bar inside the file container", () => {
      const { container } = seeded({ uploadState: "uploading", progress: 45 });

      expect(
        container.querySelector(".nds-field-upload-files"),
      ).toContainElement(
        container.querySelector(".nds-progressbar") as HTMLElement,
      );
    });

    it("shows the uploading status only while uploading", () => {
      const { rerender } = seeded({ uploadState: "uploading" });
      expect(screen.getByText("Uploading...")).toBeInTheDocument();

      rerender(
        <Harness
          initialFiles={[makeFile("statement.pdf")]}
          uploadState="success"
        />,
      );
      expect(screen.queryByText("Uploading...")).not.toBeInTheDocument();
    });

    it("shows the formatted file size only on success", () => {
      const { rerender } = seeded({ uploadState: "idle" });
      expect(screen.queryByText("13B")).not.toBeInTheDocument();

      rerender(
        <Harness
          initialFiles={[makeFile("statement.pdf")]}
          uploadState="success"
        />,
      );
      expect(screen.getByText("13B")).toBeInTheDocument();
    });

    it("announces success for each file", () => {
      seeded({ uploadState: "success" });

      expect(
        screen.getByRole("status", {
          name: "statement.pdf uploaded successfully",
        }),
      ).toBeInTheDocument();
    });

    it.each(["idle", "success"] as const)(
      "keeps the file removable when %s",
      (uploadState) => {
        seeded({ uploadState });
        expect(removeButton()).toBeInTheDocument();
      },
    );

    it("renders no file rows when the upload failed", () => {
      // `error` replaces the list with the drop zone, so there is no row and
      // therefore no remove button; the failure is left to the errors region.
      seeded({ uploadState: "error" });

      expect(screen.queryByText("statement.pdf")).not.toBeInTheDocument();
      expect(removeButton()).not.toBeInTheDocument();
    });

    it("shows the drop zone when the upload failed, even in single-file mode", () => {
      // Without this the failed selection would be a dead end: no row to
      // remove and no drop zone to retry from.
      const { container } = seeded({ uploadState: "error" });

      expect(
        container.querySelector(".nds-field-upload-dropzone"),
      ).not.toBeNull();
      expect(container.querySelector(".nds-field-upload-files")).toBeNull();
    });

    it("flags an upload failure separately from the errors prop", () => {
      const root = (container: HTMLElement) =>
        container.querySelector(".nds-field-upload") as HTMLElement;

      const { container } = seeded({ uploadState: "error" });
      expect(root(container)).toHaveClass("nds-field-upload--uploadError");
      expect(root(container)).not.toHaveClass("nds-field--hasError");
    });

    it("keeps the file list visible for validation errors", () => {
      // Validation lives in `errors`, not `uploadState`. Hiding the row here
      // would take away the file the message is asking the user to fix.
      const { container } = seeded({ errors: ["File is too large"] });

      expect(screen.getByText("statement.pdf")).toBeInTheDocument();
      expect(container.querySelector(".nds-field-upload-files")).not.toBeNull();
    });

    it("hides the remove button while uploading", () => {
      // The request is already in flight and NDS cannot cancel it.
      seeded({ uploadState: "uploading" });
      expect(removeButton()).not.toBeInTheDocument();
    });

    it("disables the remove button when the field is disabled", () => {
      seeded({ uploadState: "success", isDisabled: true });
      expect(removeButton()).toBeDisabled();
    });

    it("removes the file when the remove button is clicked", async () => {
      const onFilesChange = vi.fn();
      seeded({ uploadState: "success", onFilesChange });

      await userEvent.click(removeButton() as HTMLElement);

      expect(onFilesChange).toHaveBeenCalledWith([]);
      expect(screen.queryByText("statement.pdf")).not.toBeInTheDocument();
    });
  });
});
