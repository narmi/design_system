import React, { useState, useEffect } from "react";
import cc from "classcat";
import Error from "../Error";

type OptionType =
  | {
      value: string;
      details?: string;
    }
  | string;

interface RadioButtonsProps {
  /** Map of label strings to input values
   *
   * ```
   * type OptionType = {
   *       value: string;
   *       details?: string;
   *     }
   *   | string;
   * ```
   * */
  options: Record<string, OptionType>;
  /** name of radiogroup */
  name: string;
  /** initially selected option by input value (uncontrolled) */
  initialValue?: unknown;
  /**
   * selected option by input value (fully controlled)
   * When passing a `value` prop, you must use the `onChange`
   * handler to update the `value`
   */
  value?: string;
  /** change callback invoked with input value */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * `normal` - display input and label normally
   *
   * `card` - display input and label as a toggleable card
   *
   * `input-card` - display toggleable card with a faux radio input
   *
   * `checkmark` - uses a checkmark icon instead of a faux radio
   */
  kind?: "normal" | "row" | "row-start" | "card" | "input-card" | "checkmark";
  /**
   * Error message. When passed, the `error` prop will
   * render the radio group in an error state.
   */
  error?: string;
  /**
   * Always show details. When `true`, the details will
   * always be shown, regardless of if an radio button is selected.
   * When `false`, the details will only be shown when a radio
   * button is selected. Defaults to `false`
   */
  alwaysShowDetails?: boolean;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
The Narmi RadioButtons component expects an "options" Prop, which is an object where the keys are the radiobutton
labels and the values are the radiobutton values. An "initialvalue" Prop can be passed to set a default checked
radiobutton.
```
  options={{
    "First Label": { value: "firstValue", details: "This is the explanation of the firstValue" },
    "Second Label": { value: "secondValue", details: "This is the explanation of the secondValue" }
  }
```

The other options configuration without details would be:
```
  options={{ "First Label": "firstValue", "Second Label": "secondValue" }}
```

*/
const RadioButtons = ({
  options,
  name,
  initialValue,
  value,
  kind = "normal",
  onChange = () => {},
  testId,
  error,
  alwaysShowDetails = false,
  ...containerProps
}: RadioButtonsProps) => {
  const isControlled = value !== undefined;
  const hasError = error !== undefined && error.length > 0;
  const [checkedValue, setCheckedValue] = useState(
    isControlled ? value : initialValue,
  );
  const [focusedValue, setFocusedValue] = useState(null);

  useEffect(() => {
    if (isControlled) {
      setCheckedValue(value);
    }
  }, [value]);

  const handleChange = (e) => {
    if (!isControlled) {
      setCheckedValue(e.target.value);
    }
    onChange(e);
  };

  const handleFocus = ({ target }) => {
    setFocusedValue(target.value);
  };

  const handleBlur = () => {
    setFocusedValue(null);
  };

  return (
    <>
      <div
        className={`nds-radiobuttons nds-radiobuttons--${kind}`}
        onChange={handleChange}
        data-testid={testId}
        {...containerProps}
      >
        {Object.entries(options).map(([label, subOptions]) => {
          const inputOption =
            typeof subOptions === "object" ? subOptions : { value: subOptions };
          const inputValue = inputOption.value;
          const details = inputOption.details;
          return (
            <label
              className={cc([
                "nds-radiobuttons-option",
                "fontWeight--default",
                {
                  "nds-radiobuttons-option--checked":
                    checkedValue == inputValue,
                  "nds-radiobuttons-option--focused":
                    focusedValue == inputValue,
                  "nds-radiobuttons-option--error": hasError,
                  "padding--all rounded--all border--all": [
                    "card",
                    "input-card",
                  ].includes(kind),
                },
              ])}
              key={inputValue}
            >
              <div className="nds-radiobuttons-label-container">
                {label}
                <input
                  type="radio"
                  aria-label={`Radio ${name} option ${label}`}
                  checked={checkedValue === inputValue}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={inputValue}
                  name={name}
                />
                <div
                  role="presentation"
                  className={cc([
                    "nds-radio",
                    {
                      "narmi-icon-check": ["card", "checkmark"].includes(kind),
                    },
                  ])}
                />
              </div>
              {details && (
                <div
                  className={cc([
                    "nds-radiobutton-details",
                    {
                      "nds-radiobutton-details--checked":
                        alwaysShowDetails || checkedValue == inputValue,
                      "fontColor--secondary": kind != "card",
                      "fontSize--s": kind != "card",
                    },
                  ])}
                >
                  {details}
                </div>
              )}
            </label>
          );
        })}
      </div>
      <div className={cc([{ "margin--top--s": kind !== "row" }])}>
        <Error error={error} />
      </div>
    </>
  );
};

export default RadioButtons;
