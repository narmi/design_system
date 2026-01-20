/* eslint-disable react/jsx-key,react/no-unescaped-entities */
import React, { useState } from "react";
import Select from "./";
import SelectItem from "./SelectItem";
import SelectAction from "./SelectAction";
import Button from "../Button";
import Dialog from "../Dialog";
import Drawer from "../Drawer";

const Template = (args) => <Select {...args} />;

const children = [
  <Select.Item value="coffee" searchValue="coffee">
    <span className="narmi-icon-coffee padding--right--xs" /> Coffee
  </Select.Item>,
  <Select.Item value="film" searchValue="film">
    <span className="narmi-icon-film padding--right--xs" /> Film
  </Select.Item>,
  <Select.Item value="truck" searchValue="truck">
    <span className="narmi-icon-truck padding--right--xs" /> Truck
  </Select.Item>,
  <Select.Item value="blob" searchValue="blob">
    <span className="narmi-icon-blob padding--right--xs" /> Blob
  </Select.Item>,
];

export const Overview = Template.bind({});
Overview.args = {
  id: "overviewStory",
  label: "Favorite icon",
  children,
};

export const DefaultSelection = Template.bind({});
DefaultSelection.args = {
  id: "defaultSelection",
  label: "Favorite icon",
  children,
  defaultValue: "film",
};

export const DisabledSelection = Template.bind({});
DisabledSelection.args = {
  disabled: true,
  id: "disabledSelection",
  label: "Account",
  children: [
    <Select.Item value="checking0001" searchValue="checking0001">
      Checking - 0001
    </Select.Item>,
  ],
  value: "checking0001",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  id: "errorState",
  label: "Account",
  children: [
    <Select.Item value="checking1234" searchValue="checking1234">
      Checking (1234)
    </Select.Item>,
    <Select.Item value="checking4321" searchValue="checking4321">
      Checking (4321)
    </Select.Item>,
  ],
  defaultValue: "checking1234",
  errorText: "Checking (1234) is not eligible",
};

export const WithAction = Template.bind({});
WithAction.args = {
  label: "Account",
  id: "account-field",
  children: [
    ...children,
    <Select.Action
      onSelect={() => {
        alert("side effect triggered - no option selected");
      }}
    >
      <span className="fontColor--pine fontWeight--bold">
        <span className="narmi-icon-plus padding--right--xs" /> Add new icon
      </span>
    </Select.Action>,
  ],
};
WithAction.parameters = {
  docs: {
    description: {
      story:
        "If you need an option that triggers a side effect, use a `<Select.Action>` child. An action item will not update selection and con not be selected by default.",
    },
  },
};

export const ClearingSelectionWithAction = Template.bind({});
ClearingSelectionWithAction.args = {
  label: "Account",
  id: "account-field",
  clearSelectionOnAction: true,
  children: [
    ...children,
    <Select.Action
      onSelect={() => {
        alert("side effect triggered");
      }}
    >
      <span className="fontColor--pine fontWeight--bold">
        <span className="narmi-icon-plus padding--right--xs" /> Add new icon
      </span>
    </Select.Action>,
  ],
};
WithAction.parameters = {
  docs: {
    description: {
      story:
        "Use `clearSelectionOnAction` to clear any existing selection when any action is selected.",
    },
  },
};

export const WithCategories = Template.bind({});
WithCategories.args = {
  id: "withCategories",
  label: "Select an Icon",
  children: [
    <Select.Category label="Transportation">
      <Select.Item value="truck" searchValue="truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </Select.Item>
      <Select.Item value="anchor" searchValue="anchor">
        <span className="narmi-icon-anchor padding--right--xs" /> Anchor
      </Select.Item>
      <Select.Item value="car-outline" searchValue="car-outline">
        <span className="narmi-icon-car-outline padding--right--xs" /> Car
      </Select.Item>
    </Select.Category>,
    <Select.Category label="Art">
      <Select.Item value="film" searchValue="film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </Select.Item>
      <Select.Item value="aperture" searchValue="aperture">
        <span className="narmi-icon-aperture padding--right--xs" /> Aperture
      </Select.Item>
      <Select.Item value="pen" searchValue="pen">
        <span className="narmi-icon-pen-tool padding--right--xs" /> Pen
      </Select.Item>
      <Select.Item value="blob" searchValue="blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </Select.Item>
    </Select.Category>,
  ],
};
WithCategories.parameters = {
  docs: {
    description: {
      story:
        "You may group `Select.Item` elements by category with `Select.Category`. When using categories, you **must** make all direct children of `Select` a `Select.Category`; no orphan items are allowed when using categories.",
    },
  },
};

export const FlatCategories = Template.bind({});
FlatCategories.args = {
  id: "expandedCategories",
  label: "Select an Icon",
  children: [
    <Select.Category label="Transportation" isFlat>
      <Select.Item value="truck" searchValue="truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </Select.Item>
      <Select.Item value="anchor" searchValue="anchor">
        <span className="narmi-icon-anchor padding--right--xs" /> Anchor
      </Select.Item>
      <Select.Item value="car-outline" searchValue="car-outline">
        <span className="narmi-icon-car-outline padding--right--xs" /> Car
      </Select.Item>
    </Select.Category>,
    <Select.Category label="Art" isFlat>
      <Select.Item value="film" searchValue="film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </Select.Item>
      <Select.Item value="aperture" searchValue="aperture">
        <span className="narmi-icon-aperture padding--right--xs" /> Aperture
      </Select.Item>
      <Select.Item value="pen" searchValue="pen">
        <span className="narmi-icon-pen-tool padding--right--xs" /> Pen
      </Select.Item>
      <Select.Item value="blob" searchValue="blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </Select.Item>
    </Select.Category>,
    <Select.Action
      onSelect={() => {
        alert("action taken");
      }}
    >
      <span className="fontColor--pine fontWeight--bold">
        <span className="narmi-icon-plus padding--right--xs" /> Add new
      </span>
    </Select.Action>,
  ],
};
FlatCategories.parameters = {
  docs: {
    description: {
      story: "Categories may be set to always be open with the `isFlat` prop.",
    },
  },
};

export const CategoryLabels = Template.bind({});
CategoryLabels.args = {
  id: "categoryLabels",
  label: "Select an Icon",
  children: [
    <Select.Category label="Recently used" isFlat kind="label">
      <Select.Item value="truck" searchValue="truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </Select.Item>
      <Select.Item value="anchor" searchValue="anchor">
        <span className="narmi-icon-anchor padding--right--xs" /> Anchor
      </Select.Item>
      <Select.Item value="car-outline" searchValue="car-outline">
        <span className="narmi-icon-car-outline padding--right--xs" /> Car
      </Select.Item>
    </Select.Category>,
  ],
};
FlatCategories.parameters = {
  docs: {
    description: {
      story: "Categories may be set to always be open with the `expand` prop.",
    },
  },
};

export const CustomTypeahead = Template.bind({});
CustomTypeahead.args = {
  id: "customTypeaheadString",
  label: "Select an Industry",
  children: [
    { name: "Agriculture", code: "12345" },
    { name: "Manufacturing", code: "55555" },
    { name: "Logistics", code: "32144" },
    { name: "Hospitality", code: "22147" },
  ].map(({ name, code }) => (
    <Select.Item key={code} value={code} searchValue={name}>
      {name}
    </Select.Item>
  )),
};
CustomTypeahead.parameters = {
  docs: {
    description: {
      story:
        "By default, typeahead highlights items based on `value`. You may pass a `searchValue` to customize the string users search against when using typeahead. In this example, the value is a numeric code, but we'd like the user to filter on industry name",
    },
  },
};

export const ChangingTypeaheadBehavior = Template.bind({});
ChangingTypeaheadBehavior.args = {
  id: "customTypeaheadBehavior",
  label: "Select an Industry",
  getTypeaheadString: (userInput, selectItem) => {
    console.info(`User typed: "${userInput}"`);
    let searchString =
      selectItem.props.searchValue || selectItem.props.value || "";

    // user is searching by code
    if (/\d/.test(userInput)) {
      searchString = selectItem.props.value;
      console.info("Searching by NAICS code instead of name");
    }

    return searchString;
  },
  children: [
    { name: "Agriculture", code: "12345" },
    { name: "Manufacturing", code: "55555" },
    { name: "Logistics", code: "32144" },
    { name: "Hospitality", code: "22147" },
  ].map(({ name, code }) => (
    <Select.Item key={code} value={code} searchValue={name}>
      {name} - {code}
    </Select.Item>
  )),
};
ChangingTypeaheadBehavior.parameters = {
  docs: {
    description: {
      story:
        "You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha",
    },
  },
};

export const ScrollingBehavior = () => {
  return (
    <main style={{ height: "200vh" }}>
      <div className="margin--bottom" style={{ marginTop: "100vh" }} />
      <Select id="product-field" label="Account">
        <Select.Item value="checking1234" searchValue="checking1234">
          Checking (1234)
        </Select.Item>
        <Select.Item value="savings4321" searchValue="savings4321">
          Savings (4321)
        </Select.Item>
        <Select.Item value="checking5678" searchValue="checking5678">
          Checking (5678)
        </Select.Item>
        <Select.Item value="savings9876" searchValue="savings9876">
          Savings (9876)
        </Select.Item>
        <Select.Item value="money_market2468" searchValue="money_market2468">
          Money Market (2468)
        </Select.Item>
        <Select.Item value="cd1357" searchValue="cd1357">
          Certificate of Deposit (1357)
        </Select.Item>
        <Select.Item value="checking9999" searchValue="checking9999">
          Checking (9999)
        </Select.Item>
        <Select.Item value="savings1111" searchValue="savings1111">
          Savings (1111)
        </Select.Item>
        <Select.Item value="ira8642" searchValue="ira8642">
          IRA (8642)
        </Select.Item>
        <Select.Item value="checking7531" searchValue="checking7531">
          Checking (7531)
        </Select.Item>
        <Select.Item value="savings0246" searchValue="savings0246">
          Savings (0246)
        </Select.Item>
        <Select.Item value="money_market8024" searchValue="money_market8024">
          Money Market (8024)
        </Select.Item>
        <Select.Item value="checking3698" searchValue="checking3698">
          Checking (3698)
        </Select.Item>
        <Select.Item value="savings7410" searchValue="savings7410">
          Savings (7410)
        </Select.Item>
        <Select.Item value="cd9630" searchValue="cd9630">
          Certificate of Deposit (9630)
        </Select.Item>
        <Select.Item value="checking1593" searchValue="checking1593">
          Checking (1593)
        </Select.Item>
        <Select.Item value="savings7529" searchValue="savings7529">
          Savings (7529)
        </Select.Item>
        <Select.Item value="ira4816" searchValue="ira4816">
          IRA (4816)
        </Select.Item>
        <Select.Item value="money_market3571" searchValue="money_market3571">
          Money Market (3571)
        </Select.Item>
        <Select.Item value="checking8642" searchValue="checking8642">
          Checking (8642)
        </Select.Item>
      </Select>
    </main>
  );
};

export const InAForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="margin--bottom">
        <input type="text" name="account" value={inputValue} readOnly />
        <p className="fontSize--xs">
          (
          <i>
            Typically this would be a <code>hidden</code> input.
          </i>
          )
        </p>
      </div>
      <Select id="product-field" label="Account" onChange={setInputValue}>
        <Select.Item value="checking1234" searchValue="checking1234">
          Checking (1234)
        </Select.Item>
        <Select.Item value="savings4321" searchValue="savings4321">
          Savings (4321)
        </Select.Item>
        <Select.Item value="checking5678" searchValue="checking5678">
          Checking (5678)
        </Select.Item>
        <Select.Item value="savings9876" searchValue="savings9876">
          Savings (9876)
        </Select.Item>
        <Select.Item value="money_market2468" searchValue="money_market2468">
          Money Market (2468)
        </Select.Item>
        <Select.Item value="cd1357" searchValue="cd1357">
          Certificate of Deposit (1357)
        </Select.Item>
        <Select.Item value="checking9999" searchValue="checking9999">
          Checking (9999)
        </Select.Item>
        <Select.Item value="savings1111" searchValue="savings1111">
          Savings (1111)
        </Select.Item>
        <Select.Item value="ira8642" searchValue="ira8642">
          IRA (8642)
        </Select.Item>
        <Select.Item value="checking7531" searchValue="checking7531">
          Checking (7531)
        </Select.Item>
        <Select.Item value="savings0246" searchValue="savings0246">
          Savings (0246)
        </Select.Item>
        <Select.Item value="money_market8024" searchValue="money_market8024">
          Money Market (8024)
        </Select.Item>
        <Select.Item value="checking3698" searchValue="checking3698">
          Checking (3698)
        </Select.Item>
        <Select.Item value="savings7410" searchValue="savings7410">
          Savings (7410)
        </Select.Item>
        <Select.Item value="cd9630" searchValue="cd9630">
          Certificate of Deposit (9630)
        </Select.Item>
        <Select.Item value="checking1593" searchValue="checking1593">
          Checking (1593)
        </Select.Item>
        <Select.Item value="savings7529" searchValue="savings7529">
          Savings (7529)
        </Select.Item>
        <Select.Item value="ira4816" searchValue="ira4816">
          IRA (4816)
        </Select.Item>
        <Select.Item value="money_market3571" searchValue="money_market3571">
          Money Market (3571)
        </Select.Item>
        <Select.Item value="checking8642" searchValue="checking8642">
          Checking (8642)
        </Select.Item>
      </Select>
    </>
  );
};
InAForm.parameters = {
  docs: {
    description: {
      story:
        "A hidden input works natively in a `form`, or as a bridge to a form management library of your choice.",
    },
  },
};

export const Controlled = () => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { value: "checking1234", label: "Checking (1234)" },
    { value: "savings4321", label: "Savings (4321)" },
  ]);
  return (
    <>
      <Select
        id="controlled-product-field"
        label="Account"
        value={value}
        onChange={(v) => setValue(v)}
      >
        {items.map(({ value, label }) => (
          <Select.Item
            key={`${value}-${label}`}
            value={value}
            searchValue={value}
          >
            {label}
          </Select.Item>
        ))}
      </Select>
      <div className="margin--top">
        <Button
          label="Clear selection"
          kind="negative"
          onClick={() => {
            setValue(null);
          }}
        />
      </div>
      <div className="margin--top">
        <Button
          label="Add an item"
          kind="negative"
          onClick={() => {
            setItems((items) => [
              { value: "extra", label: "Extra Item!" },
              ...items,
            ]);
          }}
        />
      </div>
    </>
  );
};
Controlled.parameters = {
  docs: {
    description: {
      story:
        "You can programmatically select selection by updating the `value` prop. When `value` is passed, the component becomes **fully controlled** and you must use the `onChange` prop to update the `value`. Clear the selection by passing an empty string as the `value`.",
    },
  },
};

export const InADialog = (args) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        label="Open Dialog"
        onClick={() => {
          setIsDialogOpen(true);
        }}
      />
      <Dialog
        title="Dialog with a Select"
        isOpen={isDialogOpen}
        onUserDismiss={() => {
          setIsDialogOpen(false);
        }}
      >
        <div className="padding--y--s">
          <div>
            The floating menu list will render portaled near the bottom of the{" "}
            {"<body>"} HTML element.
          </div>
          <div className="padding--y--l">
            <Select {...args} />
          </div>
        </div>
      </Dialog>
    </>
  );
};
InADialog.args = {
  label: "Favorite icon",
  children,
};

export const OneItem = () => {
  return (
    <Select label="Account">
      <Select.Item value="checking1234" searchValue="checking1234">
        Checking (1234)
      </Select.Item>
    </Select>
  );
};

export const OneAction = () => {
  return (
    <Select label="Account">
      <Select.Action onSelect={() => {}}>
        <span className="fontColor--pine fontWeight--bold">
          <span className="narmi-icon-plus padding--right--xs" /> Add new
          account
        </span>
      </Select.Action>
    </Select>
  );
};

export default {
  title: "Components/Select",
  component: Select,
  subcomponents: { SelectItem, SelectAction },
  argTypes: {
    children: { control: false },
  },
};

export const OverridingMenuHeight = Template.bind({});
OverridingMenuHeight.args = {
  id: "overviewStory",
  label: "Favorite icon (short menu)",
  maxMenuHeight: "10vh",
  children,
};

export const InADrawer = (args) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        {...args}
        isOpen={isDrawerOpen}
        onUserDismiss={() => setIsDrawerOpen(false)}
      >
        <div style={{ marginTop: "600px", width: "300px" }}>
          <Select id="product-field" label="Account">
            <Select.Item value="checking1234" searchValue="checking1234">
              Checking (1234)
            </Select.Item>
            <Select.Item value="savings4321" searchValue="savings4321">
              Savings (4321)
            </Select.Item>
            <Select.Item value="checking5678" searchValue="checking5678">
              Checking (5678)
            </Select.Item>
            <Select.Item value="savings9876" searchValue="savings9876">
              Savings (9876)
            </Select.Item>
            <Select.Item
              value="money_market2468"
              searchValue="money_market2468"
            >
              Money Market (2468)
            </Select.Item>
            <Select.Item value="cd1357" searchValue="cd1357">
              Certificate of Deposit (1357)
            </Select.Item>
            <Select.Item value="checking9999" searchValue="checking9999">
              Checking (9999)
            </Select.Item>
            <Select.Item value="savings1111" searchValue="savings1111">
              Savings (1111)
            </Select.Item>
            <Select.Item value="ira8642" searchValue="ira8642">
              IRA (8642)
            </Select.Item>
            <Select.Item value="checking7531" searchValue="checking7531">
              Checking (7531)
            </Select.Item>
            <Select.Item value="savings0246" searchValue="savings0246">
              Savings (0246)
            </Select.Item>
            <Select.Item
              value="money_market8024"
              searchValue="money_market8024"
            >
              Money Market (8024)
            </Select.Item>
            <Select.Item value="checking3698" searchValue="checking3698">
              Checking (3698)
            </Select.Item>
            <Select.Item value="savings7410" searchValue="savings7410">
              Savings (7410)
            </Select.Item>
            <Select.Item value="cd9630" searchValue="cd9630">
              Certificate of Deposit (9630)
            </Select.Item>
            <Select.Item value="checking1593" searchValue="checking1593">
              Checking (1593)
            </Select.Item>
            <Select.Item value="savings7529" searchValue="savings7529">
              Savings (7529)
            </Select.Item>
            <Select.Item value="ira4816" searchValue="ira4816">
              IRA (4816)
            </Select.Item>
            <Select.Item
              value="money_market3571"
              searchValue="money_market3571"
            >
              Money Market (3571)
            </Select.Item>
            <Select.Item value="checking8642" searchValue="checking8642">
              Checking (8642)
            </Select.Item>
          </Select>
        </div>
      </Drawer>
    </>
  );
};
