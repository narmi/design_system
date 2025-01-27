import React from "react";
import Row from "../Row";
import Error from "../Error";

const noop = () => {};

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
  onCheck: (value: string) => void;
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
}: RadioProps) => {
  const inputId = `${name}-${value}`;

  const handleChange = ({ target }) => {
    onCheck(target.value);
  };

  return (
    <label className="nds-singleRadio" htmlFor={inputId}>
      <Row gapSize="s">
        <Row.Item shrink>
          <input
            type="radio"
            value={value}
            name={name}
            id={inputId}
            disabled={isDisabled}
            onChange={handleChange}
            checked={checked}
          />
          <div role="presentation" className="nds-singleRadio-radio" />
        </Row.Item>
        <Row.Item>{children}</Row.Item>
      </Row>
      {error && (
        <div className="margin--top--xs">
          <Error error={error} />
        </div>
      )}
    </label>
  );
};

export default Radio;
