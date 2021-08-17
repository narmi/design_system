const React = require("react");

require("./scss/index.scss")

const Input = require("Input").default;
const TextInput = require("TextInput").default;
const Button = require("Button").default;
const PlainButton = require("PlainButton").default;
const ButtonBar = require("ButtonBar").default;
const NavBar = require("NavBar").default;
const Modal = require("Modal").default;
const Details = require("Details").default;
const RadioButtons = require("RadioButtons").default;
const components = {
  Input,
  TextInput,
  Button,
  ButtonBar,
  NavBar,
  Modal,
  Details,
  RadioButtons,
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
  }
});
const fontComponent = React.createElement("link", {
  href: "https://fonts.googleapis.com/css?family=Mulish",
  rel: "stylesheet",
});
const GlobalStyles = () => (
  React.createElement(React.Fragment, {}, [
    styleComponent,
    fontComponent,
  ])
);

export {
  Input,
  TextInput,
  Button,
  RadioButtons,
  PlainButton,
  ButtonBar,
  NavBar,
  Modal,
  Details,
  GlobalStyles,
};

