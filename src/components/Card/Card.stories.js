import React from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "react-feather";

import Card from "components/Card";
import Button from "components/Button";
import List from "components/List";
import PlainButton from "components/PlainButton";
import Typography from "components/Typography";
import { Centered } from "../../decorators";
import Icon from "components/Icon";
import Star from "../../assets/star.svg";

const InGrid = (Story) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      width: "95%",
      height: "100%",
      margin: "24px auto",
    }}
  >
    <Story />
    <div />
  </div>
);

const MaxWidth = (Story) => (
  <div
    style={{
      maxWidth: "372px",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      height: "90vh",
    }}
  >
    <Story />
  </div>
);

export default {
  title: "Components/Card",
  component: Card,
  decorators: [],
};

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWithButton = () => (
  <StyledTitle>
    <span>Title</span>
    <PlainButton small>Button</PlainButton>
  </StyledTitle>
);

const TextContent = () => (
  <React.Fragment>
    <span>Text</span>
    <span>Text</span>
  </React.Fragment>
);

const Template = (args) => <Card {...args} />;
const DefaultArgs = {
  title: "Title",
};

export const WithTitleButton = Template.bind({});
WithTitleButton.args = {
  ...DefaultArgs,
  title: <TitleWithButton />,
};
WithTitleButton.decorators = [MaxWidth];

export const WithBody = Template.bind({});
WithBody.args = {
  ...DefaultArgs,
  title: <TitleWithButton />,
  children: <div>This is a piece of text that explains something.</div>,
};
WithBody.decorators = [MaxWidth];

export const WithList = Template.bind({});
WithList.args = {
  ...DefaultArgs,
  title: <TitleWithButton />,
  children: (
    <List
      divideItems
      hoverable={false}
      renderItem={(item) => (
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0px",
          }}
        >
          {item}
        </span>
      )}
      items={[<TextContent />, <TextContent />]}
    />
  ),
};
WithList.decorators = [MaxWidth];

const StyledListItem = styled.div`
  // margin-bottom: 8px;
`;

const StyledListContainer = styled.div`
margin-bottom: 8px;  
& > ${StyledListItem}:last-child {
    margin-bottom: unset;
    background-color: red;
  }
`;

function renderItem(item){
  return(<StyledListItem>{item}</StyledListItem>);
}

export const WithActions = Template.bind({});
WithActions.args = {
  ...DefaultArgs,
  title: <span>Title</span>,
  children: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <List
      items={[
      <PlainButton small>Button 1 </PlainButton>,
      <PlainButton small>Button 2 </PlainButton>,
      <PlainButton small>Button 3 </PlainButton>,
      ]}
      renderListWrapper={(list) => <StyledListContainer>{list}</StyledListContainer>}
      renderItem={renderItem}
      >
      </List>
    </div>
  ),
};
WithActions.decorators = [MaxWidth];

export const WithinGrid = Template.bind({});
WithinGrid.args = {
  ...WithList.args,
};
WithinGrid.decorators = [InGrid];

export const TitleCard = Template.bind({});
TitleCard.args = {
  ...DefaultArgs,
  title: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color: "var(--nds-primary-color)",
      }}
    >
      <Typography style={{paddingRight: "4px", color: "var(--nds-primary-color)"}} h4>Title</Typography>
      <Icon image={Star}/>
    </div>
  ),
  hoverable: true,
  children: <div>This is a piece of text that explains something.</div>,
};
TitleCard.decorators = [MaxWidth];
