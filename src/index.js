const React = require("react");

require("./index.scss");

const Input = require("./Input").default;
const DateInput = require("./DateInput").default;
const TextInput = require("./TextInput").default;
const Button = require("./Button").default;
const PlainButton = require("./PlainButton").default;
const ButtonBar = require("./ButtonBar").default;
const NavBar = require("./NavBar").default;
const Modal = require("./Modal").default;
const Details = require("./Details").default;
const Card = require("./Card").default;
const Dropdown = require("./Dropdown").default;
const RadioButtons = require("./RadioButtons").default;
const CheckBox = require("./CheckBox").default;
const Tooltip = require("./Tooltip").default;
const LoadingShim = require("./LoadingShim").default;
const Dialog = require("./Dialog").default;
const Row = require("./Row").default;
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
  Dropdown,
  RadioButtons,
  CheckBox,
  Card,
  Tooltip,
  LoadingShim,
  Dialog,
  Row,
};

let styleString = require("global").styles;
Object.values(components).forEach((component) => {
  if (component.styles) {
    styleString += component.styles;
  }
});

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
  CheckBox,
  Dropdown,
  Tooltip,
  LoadingShim,
  Dialog,
  Row,
};
