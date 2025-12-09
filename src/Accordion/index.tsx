import React, { useState, useId } from "react";

export interface AccordionProps {
  /**
   * Content to display when the item is expanded.
   */
  children: React.ReactNode;
  /**
   * Render prop for the summary element.
   * Called with `isOpen` boolean to allow conditional rendering.
   */
  renderSummary: (isOpen: boolean) => React.ReactNode;
  /**
   * Makes the item fully controlled.
   * When provided, the item will not manage its own open state.
   */
  isOpen?: boolean;
  /**
   * Callback invoked when user toggles the item.
   * Required when using `isOpen` (controlled mode).
   */
  onUserToggle?: (isOpen: boolean) => void;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Custom summary/details implementation of a single accordion item.
 *
 * May be used in controlled or uncontrolled mode. When passing `isOpen`, the
 * `onUserToggle` callback is required to manage state externally.
 *
 * Applies standard transitions and accessibility attributes.
 */
const Accordion = ({
  isOpen: isOpenProp,
  children,
  renderSummary = () => undefined,
  onUserToggle = () => {},
  testId = "nds-accordion",
}: AccordionProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(isOpenProp ?? false);
  const isOpen = isOpenProp ?? internalIsOpen;
  const contentId = useId();

  const handleClick = () => {
    const newIsOpen = !isOpen;
    if (isOpenProp === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    onUserToggle(newIsOpen);
  };

  return (
    <div className="nds-accordion" data-testid={testId}>
      <button
        className="nds-accordion-summary-button button--reset"
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls={contentId}
        type="button"
      >
        {renderSummary(isOpen)}
      </button>
      <div
        id={contentId}
        className="nds-accordion-details"
        role="region"
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
