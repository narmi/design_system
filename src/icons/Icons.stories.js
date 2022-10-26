import React from "react";
import PropTypes from "prop-types";
import {
  Title,
  Subtitle,
  Primary,
  Stories,
} from '@storybook/addon-docs';
import iconSelection from "dist/icons/selection.json";
import compatIcons from "./compat-icons";

const IconDocs = ({ iconNames }) => {
  return (
    <div className="nds-typography">
      <div className="icon-demo">
        {iconNames.map((name) => (
          <div key={name} className="icon-demo-box">
            <span className={`icon-demo-icon narmi-icon-${name}`}> </span>
            <span className="icon-demo-title">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

IconDocs.propTypes = {
  iconNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Main Icons story
export const Icons = () => {
  const iconNames = [];

  iconSelection.icons.forEach((iconData) => {
    const namesAndAliases = iconData.properties.name.split(",");
    namesAndAliases.forEach((name) => {
      iconNames.push(name.trim());
    });
  });
  return <IconDocs iconNames={iconNames} />;
};

// Mobile-Compatible Icons story
export const MobileCompatibleIcons = () => (
  <>
    <IconDocs iconNames={compatIcons} />
  </>
);
MobileCompatibleIcons.parameters = {
  docs: {
    description: {
      story: `This set of icons is safe to use in our mobile application.
      These shapes are supported down to release \`v2022.7\` to account for
      users on older versions of the mobile app.`,
    },
  },
};

export default {
  title: "Style/Icons",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Primary />
          <Stories />
        </>
      ),
    },
  },
};