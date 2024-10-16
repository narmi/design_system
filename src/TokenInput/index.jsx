/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Click event for handleBoxClick is for mouse users only.
// Keyboard navigation tabs through the tokens and input as expected.

import React, { useRef } from "react";
import PropTypes from "prop-types";
import FieldToken from "../FieldToken";
import TextInput from "../TextInput";

const noop = () => {};
const MIN_TOKEN_LENGTH = 1; // assume anything less than 2 is an accident
const INPUT_RESET_EVENT = { target: { value: "" } };

// take value of input with leading and trailing delimiters removed
export const createToken = (inputValue, delimiter) =>
  inputValue
    .trim()
    .replace(new RegExp(`^[${delimiter}]+|[${delimiter}]+$`, "g"), "");

/**
 * `TokenInput` is a **fully controlled** component used to show a list of "tokens"
 * a user has entered into the accompanying text input.
 */
const TokenInput = ({
  fieldName,
  label,
  fieldValue,
  onInputChange = noop,
  onTokensChange = noop,
  inputValue,
  tokens = [],
  delimiter = ",",
  disabled = false,
  ...otherProps
}) => {
  const inputRef = useRef(null);

  const handleKeyUp = (e) => {
    const { key } = e;
    if ([delimiter, "Enter"].includes(key)) {
      e.stopPropagation();
      const token = createToken(inputValue, delimiter);
      if (token.length > MIN_TOKEN_LENGTH) {
        // fire the callback with a deduped list of tokens
        onTokensChange([...new Set([...tokens, token])]);
        onInputChange(INPUT_RESET_EVENT);
      }
    }
  };

  const handleTokenDismiss = (token) => {
    const newTokens = new Set(tokens);
    newTokens.delete(token);
    onTokensChange([...newTokens]);

    // always refocus the input after token list updates
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  // The actual input element may wrap or shrink as tokens are added.
  // This handler allows users to click any whitespace in the visual input
  // box to focus the input element.
  const handleBoxClick = (e) => {
    if (inputRef?.current) {
      e.stopPropagation();
      inputRef.current.focus();
    }
  };

  return (
    <fieldset className="nds-tokenInput" onClick={handleBoxClick}>
      <legend>{label}</legend>
      <input type="hidden" id={fieldName} name={fieldName} value={fieldValue} />
      <TextInput
        ref={inputRef}
        label={label}
        disabled={disabled}
        onChange={onInputChange}
        value={inputValue}
        startContent={
          <div
            className="nds-tokenInput-tokens margin--right--s"
            role="list"
            aria-atomic="true"
          >
            {tokens.map((label) => (
              <FieldToken
                key={label}
                label={label}
                disabled={disabled}
                onDismiss={disabled ? noop : handleTokenDismiss}
              />
            ))}
          </div>
        }
        onKeyUp={handleKeyUp}
        {...otherProps}
      />
    </fieldset>
  );
};

TokenInput.propTypes = {
  /** Label for input */
  label: PropTypes.string.isRequired,
  /**
   * Name of input that holds the submission value.
   * This should be the name of the field in the submitted form.
   */
  fieldName: PropTypes.string.isRequired,
  /**
   * Value for the input with the given `name` prop.
   * This should be the value of the field in the submitted form.
   */
  fieldValue: PropTypes.string.isRequired,
  /** Input change callback */
  onInputChange: PropTypes.func,
  /** Value of input element */
  inputValue: PropTypes.string,
  /** Is the input disabled? */
  disabled: PropTypes.bool,
  /**
   * Called with the list of selected tokens
   * as the argument when user updates tokens list
   */
  onTokensChange: PropTypes.func,
  /** List of selected tokens by name */
  tokens: PropTypes.arrayOf(PropTypes.string),
  /** enables a multiline text input */
  isMultiline: PropTypes.bool,
  /** Delimiter users can enter to tokenize text */
  delimiter: PropTypes.string,
};

export default TokenInput;
