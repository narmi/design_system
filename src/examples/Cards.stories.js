import React from "react";
import Accordion from "../Accordion";
import Checkbox from "../Checkbox";
import Button from "../Button";
import Row from "../Row";
import "./Cards.scss";

// TODO: convert wrapping div to decorator
// TODO: add helper classes to copyable token tables where applicable
export const ProductCard = () => (
  <div className="bgColor--blueGrey" style={{ padding: "2rem" }}>
    <div className="productCard bgColor--cloudGrey rounded--all--l">
      <div className="productCard-content bgColor--white rounded--top--l padding--all--s border--top border--left border--right">
        <Row>
          <Row.Item>Content area</Row.Item>
          <Row.Item shrink>
            <Checkbox label="" kind="table" />
          </Row.Item>
        </Row>
        <div>Any content can go in here.</div>
      </div>
      <Accordion
        renderSummary={(isOpen) => (
          <div style={{ background: "transparent" }}>
            <div className="productCard-summary bgColor--white rounded--bottom--l padding--all--s border--bottom border--left border--right">
              <Button
                label={isOpen ? "Close accordion" : "Open accordion"}
                size="xs"
                isActive={isOpen}
              />
            </div>
          </div>
        )}
      >
        <div className="rounded--bottom--l padding--top--l bgColor--cloudGrey padding--all--s">
          Surprise!
        </div>
      </Accordion>
    </div>
  </div>
);
ProductCard.parameters = {
  docs: {
    description: {
      story: `
## Complex Cards
This is a complex card containing multiple interactive elements within, but responds
as a single visual unit. Helper classes are used to visually attach an \`Accordion\` to the bottom of the card.

- The top of the card is a div with a flat bottom.
- The bottom of the card is actually an \`Accordion\` summary with a flat top.
- The wrapping container has the same background color as the accordion content to create the overlap effect.

#### Custom CSS for selection-aware outline
\`\`\`css
.productCard:has(:checked) :is(.productCard-content, .productCard-summary) {
  border-color: var(--theme-primary);
}
\`\`\`
`,
    },
  },
};

export default {
  title: "Examples/Cards",
  parameters: {
    docs: {
      description: {
        component: `
Most content in the Narmi UI is contained within a "card" of some kind. Some are toggles,
some are buttons, some expand, and some are just rounded rectagles that simply hold content.

It's important to know which card to use, and when.
`,
      },
    },
  },
};
