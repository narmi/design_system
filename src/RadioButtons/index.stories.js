import React, { useState } from "react";
import RadioButtons from "./";

const Template = (args) => <RadioButtons {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  options: {
    OptionA: "A",
    OptionB: "B",
    OptionC: "C",
  },
  name: "options",
};

export const Example = () => {
  const [color, setColor] = useState();
  return (
    <div className="nds-typography">
      <h3 className="margin--bottom--l"> What is your favourite colour? </h3>
      <RadioButtons
        options={{
          Red: "red",
          Blue: "blue",
          Green: "green",
          Yellow: "yellow",
        }}
        name="colours"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <div>{color && `You have selected ${color}`}</div>
    </div>
  );
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  options: {
    OptionA: "A",
    OptionB: "B",
    OptionC: "C",
  },
  name: "options",
  error: "Selection required",
};

export const FullyControlled = () => {
  const [value, setValue] = useState("blue");
  return (
    <>
      <RadioButtons
        options={{
          Red: "red",
          Blue: "blue",
          Green: "green",
          Yellow: "yellow",
        }}
        name="colours"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <div className="margin--top">
        <button
          onClick={() => {
            setValue(null);
          }}
        >
          Clear selection
        </button>
      </div>
    </>
  );
};
FullyControlled.parameters = {
  docs: {
    description: {
      story:
        "Passing a `value` prop makes the component fully controlled; you must manage the value of `value` with the `onChange` handler. To clear selection, pass `null` or an empty string to `value`.",
    },
  },
};

export const AsRadioButtonsWithDetails = Template.bind({});
AsRadioButtonsWithDetails.args = {
  options: {
    OptionA: {
      value: "A",
      details:
        "Option A details. The Option A details are very long and will wrap to the next line. The Option A details are very long and will wrap to the next line.",
    },
    OptionB: { value: "B", details: "Option B details" },
    OptionC: { value: "C", details: "Option C details" },
  },
  name: "card_options_with_details",
};

AsRadioButtonsWithDetails.parameters = {
  docs: {
    description: {
      story:
        "Renders a radio group styled as a cards. The cards will grow to fill the width of their parent container. Each card can have a `details` property to show additional information when the card is selected.",
    },
  },
};

export const AsRadioButtonsWithDetailsAlwaysShown = Template.bind({});
AsRadioButtonsWithDetailsAlwaysShown.args = {
  options: {
    OptionA: {
      value: "A",
      details:
        "Option A details. The Option A details are very long and will wrap to the next line. The Option A details are very long and will wrap to the next line.",
    },
    OptionB: { value: "B", details: "Option B details" },
    OptionC: { value: "C", details: "Option C details" },
  },
  alwaysShowDetails: true,
  name: "card_options_with_details",
};

AsRadioButtonsWithDetailsAlwaysShown.parameters = {
  docs: {
    description: {
      story:
        "Renders a radio group styled as a cards. The cards will grow to fill the width of their parent container. Each card can have a `details` property to show additional information when the card is selected.",
    },
  },
};

export const AsCheckmark = Template.bind({});
AsCheckmark.args = {
  options: {
    OptionA: "A",
    OptionB: "B",
    OptionC: "C",
  },
  name: "card_options",
  kind: "checkmark",
};
AsCheckmark.parameters = {
  docs: {
    description: {
      story:
        "Renders a radio group styled as labels with a checkmark indicating selection",
    },
  },
};

export const AsCard = Template.bind({});
AsCard.args = {
  options: {
    OptionA: "A",
    OptionB: "B",
    OptionC: "C",
  },
  name: "card_options",
  kind: "card",
};
AsCard.parameters = {
  docs: {
    description: {
      story:
        "Renders a radio group styled as a cards. The cards will grow to fill the width of their parent container.",
    },
  },
};

export const AsCardWithDetails = Template.bind({});
AsCardWithDetails.args = {
  options: {
    OptionA: {
      value: "A",
      details:
        "Option A details. The Option A details are very long and will wrap to the next line. The Option A details are very long and will wrap to the next line.",
    },
    OptionB: { value: "B", details: "Option B details" },
    OptionC: { value: "C", details: "Option C details" },
  },
  name: "card_options_with_details",
  kind: "card",
};

AsCardWithDetails.parameters = {
  docs: {
    description: {
      story:
        "Renders a radio group styled as a cards. The cards will grow to fill the width of their parent container. Each card can have a `details` property to show additional information when the card is selected.",
    },
  },
};

export const AsRow = Template.bind({});
AsRow.args = {
  options: {
    OptionA: "A",
    OptionB: "B",
    OptionC: "C",
  },
  name: "row_options",
  kind: "row",
};

AsRow.parameters = {
  docs: {
    description: {
      story: "Renders a radio group styled as a row.",
    },
  },
};

export const AsRowWithDetails = Template.bind({});
AsRowWithDetails.args = {
  options: {
    OptionA: {
      value: "A",
      details: "Option A details",
    },
    OptionB: { value: "B", details: "Option B details" },
    OptionC: { value: "C", details: "Option C details" },
  },
  name: "row_options_with_details",
  kind: "row",
};

AsRowWithDetails.parameters = {
  docs: {
    description: {
      story:
        "Renders a radio group styled as a row. Each radio button can have a `details` property to show additional information when the radio button is selected.",
    },
  },
};

export default {
  title: "Components/RadioButtons",
  component: RadioButtons,
};
