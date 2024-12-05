import React from "react";
import useBreakpoints from "../hooks/useBreakpoints";

/**
 * SVG line that defaults to horizontal and changes
 * to vertical at "m" or larger viewports.
 */
const SnackbarDivider = () => {
  const { m } = useBreakpoints();
  return (
    <svg
      className="nds-snackbar-divider fontColor--hint"
      xmlns="http://www.w3.org/2000/svg"
      width={m ? "1px" : "100%"}
      height={m ? "40px" : "1px"}
    >
      <line
        x1={m ? "50%" : "0%"}
        y1={m ? "0%" : "50%"}
        x2={m ? "50%" : "100%"}
        y2={m ? "100%" : "50%"}
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
};

/**
 * Wraps text nodes with a dedicated element.
 */
const SnackbarText = ({ children }: { children: React.ReactNode[] }) => (
  <div className="nds-snackbar-text fontColor--secondary">{children}</div>
);

/**
 * Renders a semantic grouping of buttons within the Snackbar
 */
const SnackbarButtonGroup = ({ children }: { children: React.ReactNode[] }) => (
  <ul className="list--reset nds-snackbar-buttonGroup" role="group">
    {children.map((button, i) => (
      <li key={i}>{button}</li>
    ))}
  </ul>
);

export interface SnackbarProps {
  children: React.ReactNode[];
  isActive: boolean;
}

/**
 * A status toolbar for multiple selection in a table.
 * Intended to be rendered in fixed position over a table.
 */
const Snackbar = ({ children, isActive = false }: SnackbarProps) => {
  return (
    <div aria-live="polite" role="status">
      {isActive && (
        <div
          className="nds-snackbar bgColor--white"
          role="toolbar"
          aria-label="Your selection"
        >
          {children}
        </div>
      )}
    </div>
  );
};

Snackbar.ButtonGroup = SnackbarButtonGroup;
Snackbar.Divider = SnackbarDivider;
Snackbar.Text = SnackbarText;
export default Snackbar;
