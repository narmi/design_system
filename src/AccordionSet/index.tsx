import React, { useState } from "react";
import Accordion, { AccordionProps } from "../Accordion";

export interface AccordionSetProps {
  /**
   * Behavior mode for the accordion set.
   * - "exclusive": Only one accordion can be open at a time
   * - "native": Multiple accordions can be open simultaneously
   */
  behavior?: "exclusive" | "native";
  /**
   * Accordion children. Must be of type Accordion.
   */
  children: React.ReactElement<AccordionProps>[];
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * May be used to wrap `Accordion` components to control how their open/closed state
 * affects each other.
 *
 * "native": Any number of accordions can be open at once (default).
 * "exclusive": Open accordions are mutually exclusive; opening one closes others.
 */
const AccordionSet = ({
  behavior = "exclusive",
  children,
  testId = "nds-accordionSet",
}: AccordionSetProps) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );

  return (
    <div className="nds-accordionSet" data-testid={testId}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child) || child.type !== Accordion) {
          console.warn("AccordionSet only accepts Accordion children");
          return null;
        }

        // In exclusive mode, we control which accordion is open
        // In native mode, let each accordion manage its own state
        const shouldControlAccordion = behavior === "exclusive";
        const isThisAccordionOpen = openAccordionIndex === index;

        const handleToggle = (newIsOpen: boolean) => {
          if (shouldControlAccordion) {
            setOpenAccordionIndex(newIsOpen ? index : null);
          }
          // Fire callback even if uncontrolled in an AccordionSet
          child.props.onUserToggle?.(newIsOpen);
        };

        return React.cloneElement(child, {
          key: child.key ?? index,
          ...(shouldControlAccordion && {
            isOpen: isThisAccordionOpen,
            onUserToggle: handleToggle,
          }),
        });
      })}
    </div>
  );
};

export default AccordionSet;
