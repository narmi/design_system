const React = require("react");

const Button = require("Button").default;
const PlainButton = require("PlainButton").default;
const ButtonBar = require("ButtonBar").default;
const NavBar = require("NavBar").default;
const Modal = require("Modal").default;
const Details = require("Details").default;
const Typography = require("Typography").default;
const components = {
  Button,
  ButtonBar,
  NavBar,
  Modal,
  Details,
  Typography,
};

let styleString = require("global").styles;
Object.values(components).forEach((component) => {
  if (component.styles) {
    styleString += component.styles;
  }
});
const GlobalStyles = () => (
  React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: styleString,
    }
  })
);

export {
  Button,
  PlainButton,
  ButtonBar,
  NavBar,
  Modal,
  Details,
  GlobalStyles,
};

