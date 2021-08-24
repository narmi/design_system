const React = require("react");

require("./scss/index.scss")

const Input = require("Input").default;
const DateInput = require("DateInput").default;
const TextInput = require("TextInput").default;
const Button = require("Button").default;
const PlainButton = require("PlainButton").default;
const ButtonBar = require("ButtonBar").default;
const NavBar = require("NavBar").default;
const Modal = require("Modal").default;
const Details = require("Details").default;
const Card = require("Card").default;
const RadioButtons = require("RadioButtons").default;
const components = {
  Input,
  DateInput,
  TextInput,
  Button,
  PlainButton,
  ButtonBar,
  NavBar,
  Modal,
  Details,
  RadioButtons,
  Card,
};

let styleString = require("global").styles;
Object.values(components).forEach((component) => {
  if (component.styles) {
    styleString += component.styles;
  }
});
const styleComponent = React.createElement("style", {
  dangerouslySetInnerHTML: {
    __html: styleString,
  },
  key: "style-component"
});

const GlobalStyles = () => (
  React.createElement(React.Fragment, {}, [
    styleComponent,

  ])
);

export {
  Input,
  DateInput,
  TextInput,
  Button,
  RadioButtons,
  PlainButton,
  ButtonBar,
  NavBar,
  Modal,
  Details,
  Card,
  GlobalStyles,
};

