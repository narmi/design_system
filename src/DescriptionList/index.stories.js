/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import DescriptionList from "./";
import ContentCard from "../ContentCard";
import ResponsiveFlex from "../ResponsiveFlex";

const Template = (args) => <DescriptionList {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  kind: "plain",
  children: [
    <DescriptionList.Row label="Name" value="Keith Hernandez" />,
    <DescriptionList.Row label="Phone Number" value="(212) 222-5555" />,
    <DescriptionList.Row label="Email" value="keith.hernandez@gmail.com" />,
    <DescriptionList.Row label="Date of birth" value="10/20/1953" />,
    <DescriptionList.Row label="Occupation" value="Baseball guy" />,
    <DescriptionList.Row
      label="Routing Number"
      value="4648376409127263873737 (Checking)"
    />,
    <DescriptionList.Row
      allowWrap
      label="Description"
      value="A much longer value that has been allowed to wrap via the allowWrap prop on this row. The line length is constrained to a readable number of characters per line by using the CSS ch unit."
    />,
  ],
};

export const Bordered = Template.bind({});
Bordered.args = {
  kind: "bordered",
  children: [
    <DescriptionList.Row label="Name" value="Keith Hernandez" />,
    <DescriptionList.Row label="Phone Number" value="(212) 222-5555" />,
    <DescriptionList.Row label="Email" value="keith.hernandez@gmail.com" />,
    <DescriptionList.Row label="Date of birth" value="10/20/1953" />,
    <DescriptionList.Row label="Occupation" value="Baseball guy" />,
    <DescriptionList.Row
      allowwrap
      label="Routing Number"
      value="464837640912726337 (Checking)"
    />,
  ],
};

export const InResponsiveCards = () => (
  <div className="bgColor--smokeGrey padding--all--xxl">
    <ResponsiveFlex gapSize="l" toRowAt="l">
      <div style={{ flexGrow: 1 }}>
        <ContentCard kind="elevated">
          <h2 className="margin--bottom">Source</h2>
          <DescriptionList>
            <DescriptionList.Row label="Sender" value="Maria Beetle" />
            <DescriptionList.Row
              label="Account number"
              value="464837640912726337 (Checking)"
            />
            <DescriptionList.Row
              label="Routing number"
              value="0200121002120012 (My Bank)"
            />
          </DescriptionList>
        </ContentCard>
      </div>
      <div style={{ flexGrow: 1 }}>
        <ContentCard kind="elevated">
          <h2 className="margin--bottom">Destination</h2>
          <DescriptionList>
            <DescriptionList.Row label="Recipient" value="Quincy Beetle" />
            <DescriptionList.Row
              label="Account number"
              value="464837640912726337 (Checking)"
            />
            <DescriptionList.Row
              label="Routing number"
              value="0200121002120012 (Their Bank)"
            />
          </DescriptionList>
        </ContentCard>
      </div>
    </ResponsiveFlex>
  </div>
);

export default {
  title: "Components/DescriptionList",
  component: DescriptionList,
};
