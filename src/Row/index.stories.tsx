/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import { Meta } from "@storybook/react";
import React from "react";
import Button from "../Button";
import Row from "./";
import RowItem from "./RowItem";

const Template = (args) => (
  <div className="nds-typography">
    <Row {...args} />
  </div>
);

export const Overview = Template.bind({});
Overview.args = {
  children: [
    <Row.Item shrink>
      <img alt="demo" src="https://via.placeholder.com/60" />
    </Row.Item>,
    <Row.Item>
      The image row item is set to <code>shrink</code> to content width. This
      item grows to fill remaining space. Adjust the `gapSize` prop on `Row` to
      adjust the gutters between items.
    </Row.Item>,
  ],
};

export const DebugView = () => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `
  .sb-nds-row-debug .nds-row {
    outline: 1px dashed hotpink;
    margin: var(--space-m);
  }
  .sb-nds-row-debug .nds-row-item {
    background: antiquewhite;
  }
  .sb-nds-row-debug .nds-row-item--shrink {
    background: aquamarine;
  }
  `,
      }}
    />
    <div className="sb-nds-row-debug nds-typography fontSize--s">
      <Row>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
      </Row>
      <Row>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
      </Row>
      <Row>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
      </Row>
      <Row>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
        <Row.Item>
          <code>Row.Item</code>
        </Row.Item>
      </Row>
      <Row>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
        <Row.Item shrink>
          <code>Row.Item shrink</code>
        </Row.Item>
      </Row>
    </div>
  </>
);
DebugView.parameters = {
  docs: {
    description: {
      story:
        "Extra styles have been added to visualize elements rendered by `Row` and `Row.Item`. Try resizing your browser window to see how the layout changes.",
    },
  },
};

export const SectionHeaderExample = () => (
  <div className="nds-typography">
    <Row alignItems="center">
      <Row.Item>
        <h3 className="fontFamily--body fontSize--l">Account details</h3>
      </Row.Item>
      <Row.Item shrink>
        <a className="fontColor--pine" href="#">
          More details
        </a>
      </Row.Item>
      <Row.Item shrink>
        <a className="fontColor--pine" href="#">
          Edit
        </a>
      </Row.Item>
    </Row>
  </div>
);
SectionHeaderExample.parameters = {
  docs: {
    description: {
      story:
        "The first `Row.Item` fills the space while the last two shrink to the width of the links. The `alignItems` prop is used to vertically center the row item content.",
    },
  },
};

export const JustifyingContent = () => (
  <div className="nds-typography">
    <Row justifyContent="end" alignItems="center">
      <Row.Item shrink>
        <Button kind="plain">Cancel</Button>
      </Row.Item>
      <Row.Item shrink>
        <Button>Continue</Button>
      </Row.Item>
    </Row>
  </div>
);
JustifyingContent.parameters = {
  docs: {
    description: {
      story:
        "If a Row contains only shrink items, they will be justified to `flex-start` by default. To right-align them, set the `justifyContent` prop to `end`.",
    },
  },
};

export const AsProp = () => (
  <div className="nds-typography">
    <Row as="ul">
      <Row.Item as="li">
        Row item as a <code>li</code> inside a <code>ul</code> Row
      </Row.Item>
      <Row.Item as="li">
        Row item as a <code>li</code> inside a <code>ul</code> Row
      </Row.Item>
    </Row>
  </div>
);
AsProp.parameters = {
  docs: {
    description: {
      story:
        "The `as` prop is used to control the html element type that renders of the root nodes of `Row` and `Row.Item`",
    },
  },
};

const meta: Meta<typeof Row> = {
  title: "Components/Row",
  component: Row,
  subcomponents: { RowItem },
};

export default meta;
