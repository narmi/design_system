import React from "react";
import cc from "classcat";
import Row from "../Row";
import Error from "../Error";

const noop = () => {};

export type RadioKind = "normal" | "card" | "input-card" | "checkmark";

interface RadioProps {
  /** The `name` attribute for radio input. Use this to group radio sets. */
  name: string;
  /** The `value attribute for the radio input */
  value: string;
  /** Custom label for the Radio input*/
  children: React.ReactNode | string;
  /**
   * Optional callback when the Radio is checked by a user.
   * Called with the `value` of the currently checked input
   */
  onCheck?: (value: string) => void;
  kind?: RadioKind;
  /**
   * Optional prop to set the Radio to checked, making the Radio fully controlled.
   * When fully controlled track the checked state by value in the parent component.
   * e.g. `checked={currentlyCheckedValue === thisRadioValue}`
   */
  checked?: boolean;
  /** Disables the input when `true` */
  isDisabled?: boolean;
  /** Error text */
  error?: string;
  /** Applies error style without a message */
  hasError?: boolean;
}

/**
 * Single radio input that takes arbitrary JSX children as a label.
 */
const Radio = ({
  name,
  value,
  isDisabled = false,
  onCheck = noop,
  checked,
  children,
  error,
  hasError = false,
  kind = "normal",
}: RadioProps) => {
  const isCardKind = kind === "card";
  const isInputCardKind = kind === "input-card";
  const isCheckmarkKind = kind === "checkmark";
  const inputId = `${name}-${value}`;

  const handleChange = ({ target }) => {
    onCheck(target.value);
  };

  const radioDisplayClass = cc([
    {
      "nds-singleRadio-radio": kind === "normal" || isInputCardKind,
      "narmi-icon-check": isCardKind || isCheckmarkKind,
      "alignChild--center--center": isCardKind,
    },
  ]);

  // The element we use as an indicator of selection
  const radioDisplay = (
    <div role="presentation" className={radioDisplayClass} />
  );

  const inputElement = (
    <input
      type="radio"
      value={value}
      name={name}
      id={inputId}
      disabled={isDisabled}
      onChange={handleChange}
      checked={checked}
    />
  );

  return (
    <>
      <label
        className={cc([
          "nds-singleRadio",
          `nds-singleRadio--${kind}`,
          {
            "nds-singleRadio--error": Boolean(error) || hasError,
          },
        ])}
        htmlFor={inputId}
      >
        <Row gapSize="s">
          {isCardKind && <Row.Item>{children}</Row.Item>}
          <Row.Item shrink>
            {inputElement}
            {radioDisplay}
          </Row.Item>
          {!isCardKind && <Row.Item>{children}</Row.Item>}
        </Row>
      </label>
      {error && <Error error={error} />}
    </>
  );
};

export default Radio;
