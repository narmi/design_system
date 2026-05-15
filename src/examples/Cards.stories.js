import React from "react";

export const ProductCard = () => <div className="padding--all">lol</div>;
ProductCard.parameters = {
  docs: {
    description: {
      story: `
This is a complex card containing multiple interactive elements within, but responds
as a single visual unit. Helper classes are used to visually attach an \`Accordion\` to the bottom of the card.
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
