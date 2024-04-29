/* eslint-disable jsx-a11y/no-static-element-interactions */
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

// take value of input with any leading or trailing delimiters removed
export const createToken = (inputValue, delimiter) =>
  inputValue
    .trim()
    .replace(new RegExp(`^[${delimiter}]+|[${delimiter}]+$`, "g"), "");

/**
 * `TokenInput` is a **fully controlled** component used to show a list of "tokens"
 * a user has entered into the accompanying text input.
 */
const TokenInput = ({
  name,
  label,
  value,
  onInputChange = noop,
  onTokensChange = noop,
  inputValue,
  tokens = [],
  delimiter = ",",
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
    <div className="nds-tokenInput" onClick={handleBoxClick}>
      <input name={name} type="hidden" value={value} />
      <TextInput
        ref={inputRef}
        label={label}
        onChange={onInputChange}
        value={inputValue}
        startContent={
          <div
            className="nds-tokenInput-tokens margin--right--s"
            aria-label="Current selection"
          >
            {tokens.map((label) => (
              <FieldToken
                key={label}
                label={label}
                onDismiss={handleTokenDismiss}
              />
            ))}
          </div>
        }
        onKeyUp={handleKeyUp}
        {...otherProps}
      />
    </div>
  );
};

TokenInput.propTypes = {
  /**
   * Name of input that holds the submission value.
   * This should be the name of the field in the submitted form.
   */
  name: PropTypes.string.isRequired,
  /** Label for input */
  label: PropTypes.string.isRequired,
  /** Input change calback */
  onInputChange: PropTypes.func,
  /** Value of input element */
  inputValue: PropTypes.string,
  /**
   * Value for the input with the given `name` prop.
   * This should be the value of the field in the submitted form.
   */
  value: PropTypes.string,
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
