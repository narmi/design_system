import React, { useMemo } from "react";

export interface AccordionProps extends React.PropsWithChildren {
  // no idea what this is for yet
  behavior: "native" | "exclusive";
}

export interface AccordionItemProps extends React.PropsWithChildren {
  /**
   * Optional: allows controlling open state
   */
  isOpen?: boolean;
  onUserToggle?: (isOpen: boolean) => void;
  renderSummary?: (isOpen: boolean) => void;
}

const AccordionItem = ({ children }: AccordionItemProps) => {
  return children;
};

const Accordion = ({ children }: AccordionProps) => {
  const [summaryChild, listChildren] = useMemo(() => {
    const allChildren = React.Children.toArray(children);
    if (
      allChildren.length &&
      React.isValidElement(allChildren[0]) &&
      allChildren[0].props
    ) {
      const summaryChild = allChildren[0].props.children[0];
      const listChildren = allChildren[0].props.children.slice(1);
      return [summaryChild, listChildren];
    }
    return [null, null];
  }, [children]);

  return (
    <details>
      <summary>{summaryChild}</summary>
      {listChildren}
    </details>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
