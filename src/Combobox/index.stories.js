/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import Combobox, { VALID_ICON_NAMES } from "./";
import ComboboxItem from "./ComboboxItem";
import ComboboxHeading from "./ComboboxHeading";
import Row from "../Row";
import Dialog from "../Dialog";
import Drawer from "../Drawer";
import { options_states } from "./util";

const Template = (args) => <Combobox {...args} />;

const children = options_states.map((state) => (
  <Combobox.Item value={state}>{state}</Combobox.Item>
));

export const Overview = Template.bind({});
Overview.args = {
  label: "Select your state",
  children,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Select your state",
  icon: "search",
  children,
};

export const CustomSearchStrings = (args) => (
  <Combobox label={`Favorite Emoji (e.g. "Cactus")`} {...args}>
    <Combobox.Item value="🐪" searchValue="Camel" />
    <Combobox.Item value="📷" searchValue="Camera" />
    <Combobox.Item value="🌵" searchValue="Cactus" />
    <Combobox.Item value="🚬" searchValue="Cigarette" />
    <Combobox.Item value="⭕️" searchValue="Circle Mark" />
    <Combobox.Item value="🥒" searchValue="Cucumber" />
    <Combobox.Item value="🇨🇺" searchValue="Cuban Flag" />
    <Combobox.Item value="🥌" searchValue="Curling Stone" />
    <Combobox.Item value="🐓" searchValue="Chicken" />
    <Combobox.Item value="🎊" searchValue="Confetti Ball" />
    <Combobox.Item value="🧥" searchValue="Coat" />
    <Combobox.Item value="🧁" searchValue="Cupcake" />
  </Combobox>
);
CustomSearchStrings.parameters = {
  docs: {
    description: {
      story:
        "By default typeahead is based on `value`. You may use `searchValue` to explicitly set the string the typeahead should match against.",
    },
  },
};

export const WithHeadings = (args) => (
  <Combobox label="Select Account" {...args}>
    <Combobox.Heading text="Checking" />
    <Combobox.Item value="Primary Checking - 4567" />
    <Combobox.Item value="Secondary Checking - 9876" />
    <Combobox.Heading text="Savings" />
    <Combobox.Item value="Primary Savings - 1234" />
    <Combobox.Item value="Cheese Fund - 5432" />
  </Combobox>
);

export const WithHintHeadings = (args) => (
  <Combobox label="Select Account" {...args}>
    <Combobox.Heading text="Checking" kind="hint" />
    <Combobox.Item value="Primary Checking - 4567" />
    <Combobox.Item value="Secondary Checking - 9876" />
    <Combobox.Heading text="Savings" kind="hint" />
    <Combobox.Item value="Primary Savings - 1234" />
    <Combobox.Item value="Cheese Fund - 5432" />
  </Combobox>
);

export const WithError = Template.bind({});
WithError.args = {
  label: "Select your state",
  errorText: "Can not be blank",
  children,
};

export const NoChildren = Template.bind({});
NoChildren.args = {
  label: "State",
  children: null,
};
NoChildren.parameters = {
  docs: {
    description: {
      story:
        "If no children are passed, the `Combobox` will render a plain input",
    },
  },
};

export const FullyControlled = () => {
  const [inputValue, setInputValue] = useState("");
  const [allItems, setAllItems] = useState([
    "Primary Checking - 4567",
    "Secondary Checking - 9876",
    "Primary Savings - 1234",
    "Cheese Fund - 5432",
  ]);

  return (
    <div>
      <Combobox
        label="Select Account"
        inputValue={inputValue}
        onInputChange={(val) => setInputValue(val)}
      >
        {allItems.map((item, i) => (
          <Combobox.Item key={`${i}-${item}`} value={item} />
        ))}
      </Combobox>
      <div className="margin--top">
        <Row>
          <Row.Item shrink>
            <button
              className="margin--top"
              onClick={() => {
                setInputValue("");
              }}
            >
              Clear input value
            </button>
          </Row.Item>
          <Row.Item shrink>
            <button
              className="margin--top"
              onClick={() => {
                setAllItems((items) => ["Extra Item!", ...items]);
              }}
            >
              Add an item to the top of the list
            </button>
          </Row.Item>
        </Row>
      </div>
    </div>
  );
};
FullyControlled.parameters = {
  docs: {
    description: {
      story:
        "To fully control the value input, use `inputValue` and `onInputChange`.",
    },
  },
};

export const InADialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open dialog
      </button>
      <Dialog
        title="Dialog with a Combobox"
        isOpen={isOpen}
        onUserDismiss={() => setIsOpen(false)}
      >
        <Combobox label="Select Account">
          <Combobox.Heading text="Checking" />
          <Combobox.Item value="Primary Checking - 4567" />
          <Combobox.Item value="Secondary Checking - 9876" />
          <Combobox.Item value="Other Checking - 1112" />
          <Combobox.Item value="Wow, more Checking - 3112" />
          <Combobox.Heading text="Savings" />
          <Combobox.Item value="Primary Savings - 1234" />
          <Combobox.Item value="Cheese Fund - 5432" />
        </Combobox>
      </Dialog>
    </>
  );
};

export const WithCategories = Template.bind({});
WithCategories.args = {
  id: "withCategories",
  label: "Transfer to",
  children: [
    <Combobox.Category label="Checking">
      <Combobox.Item searchValue="Business Checking" value="checking1">
        Business Checking - 11234
      </Combobox.Item>
      <Combobox.Item searchValue="Main Checking" value="checking2">
        Main Checking - 13989
      </Combobox.Item>
      <Combobox.Item searchValue="Joint Checking" value="checking3">
        Joint Checking - 14857
      </Combobox.Item>
    </Combobox.Category>,
    <Combobox.Category label="Savings">
      <Combobox.Item searchValue="Business Checking" value="savings1">
        Business Savings - 13938
      </Combobox.Item>
      <Combobox.Item searchValue="Main Savings" value="savings2">
        Main Savings - 48274
      </Combobox.Item>
      <Combobox.Item searchValue="Joint Savings" value="savings3">
        Joint Savings - 48284
      </Combobox.Item>
    </Combobox.Category>,
    <Combobox.Category label="External Accounts">
      <Combobox.Item value="Sasha">Sasha - 84839</Combobox.Item>
      <Combobox.Item value="Joan">Joan - 36183</Combobox.Item>
      <Combobox.Item value="Benoit">Benoit - 53261</Combobox.Item>
    </Combobox.Category>,
  ],
};
WithCategories.parameters = {
  docs: {
    description: {
      story:
        "You may group `Combobox.Item` elements by category with `Combobox.Category`. When using categories, you **must** make all direct children of `Combobox` a `Combobox.Category`; no orphan items are allowed when using categories.",
    },
  },
};

export const CustomFiltering = Template.bind({});
CustomFiltering.args = {
  id: "customFiltering",
  label: "Transfer to",
  children: [
    <Combobox.Item searchValue="Main Checking - 67289" value="checking2">
      Main Checking - 67289
    </Combobox.Item>,
    <Combobox.Item searchValue="Joint Checking - 14857" value="checking3">
      Joint Checking - 14857
    </Combobox.Item>,
    <Combobox.Item searchValue="Business Checking - 11234" value="checking1">
      Business Checking - 11234
    </Combobox.Item>,
    <Combobox.Item searchValue="Business Savings - 62947" value="savings1">
      Business Savings - 62947
    </Combobox.Item>,
  ],
  filterItemsByInput: (items, inputVal) =>
    items.filter((item) => {
      const query = (item.props.searchValue || item.props.value).toLowerCase();
      return query.includes(inputVal);
    }),
};
CustomFiltering.parameters = {
  docs: {
    description: {
      story:
        "In this example, a custom `filterItemsByInput` function is used to enable search by either account name OR first four.",
    },
  },
};

export const WithActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Combobox
        label="Select Account"
        inputValue={inputValue}
        onInputChange={(val) => setInputValue(val)}
      >
        <Combobox.Item value="Primary Checking - 4567" />
        <Combobox.Item value="Cheese Fund - 5432" />
        <Combobox.Item value="Primary Savings - 1234" />
        <Combobox.Item value="Secondary Checking - 7892" />
        <Combobox.Action
          onSelect={() => {
            setIsOpen(true);
          }}
          label="Do Action"
        />
      </Combobox>
      <Drawer isOpen={isOpen} onUserDismiss={() => setIsOpen(false)}>
        <div className="padding--y--s">🎬 Action!</div>
      </Drawer>
    </>
  );
};

export default {
  title: "Components/Combobox",
  component: Combobox,
  subcomponents: { ComboboxItem, ComboboxHeading },
  argTypes: {
    icon: { options: ["", ...VALID_ICON_NAMES] },
  },
};

export const WithCategoriesInForm = () => {

  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("")

  return (
    <>
    <div>selected value {selectedValue}</div>
    <Combobox
      label="Select item"
      inputValue={inputValue}
      onChange={(selected) => {
        setSelectedValue(selected)
      }}
      filterItemsByInput={(items, inputVal) => {
        return items.filter((item) => {
          if (!item) return false;
          const query = (item.props.searchValue || item.props.value).toLowerCase();
          return query.includes(inputVal);
        })
      }}
      onInputChange={(selected) => {
        setInputValue(selected);
      }}
    >
      <Combobox.Category label="Checking">
        <Combobox.Item searchValue="Business Checking" value="checking1">
          Business Checking - 11234
        </Combobox.Item>
        <Combobox.Item searchValue="Main Checking" value="checking2">
          Main Checking - 13989
        </Combobox.Item>
        <Combobox.Item searchValue="Joint Checking" value="checking3">
          Joint Checking - 14857
        </Combobox.Item>
      </Combobox.Category>
      <Combobox.Category label="Savings">
        <Combobox.Item searchValue="Business Checking" value="savings1">
          Business Savings - 13938
        </Combobox.Item>
        <Combobox.Item searchValue="Main Savings" value="savings2">
          Main Savings - 48274
        </Combobox.Item>
        <Combobox.Item searchValue="Joint Savings" value="savings3">
          Joint Savings - 48284
        </Combobox.Item>
      </Combobox.Category>
      <Combobox.Category label="External Accounts">
        <Combobox.Item value="Sasha">Sasha - 84839</Combobox.Item>
        <Combobox.Item value="Joan">Joan - 36183</Combobox.Item>
        <Combobox.Item value="Benoit">Benoit - 53261</Combobox.Item>
      </Combobox.Category>

    </Combobox>
    </>
  )

};
