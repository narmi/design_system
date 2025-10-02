import React, { useState, useEffect } from "react";
import cc from "classcat";
import Error from "../Error";
import Radio from "../Radio";
import type { RadioKind } from "../Radio";

type RadioButtonsLayouts = "row" | "row-start";
type RadioButtonsKind = RadioKind | RadioButtonsLayouts;

interface RadioButtonsProps {
  /** Map of label strings to input values
   *
   * TODO: restore this type when we can do it in a non-breaking way
   * ```
   * type OptionType = {
   *       value: string;
   *       details?: string;
   *     }
   *   | string;
   * ```
   * */
  options?: object;
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
  kind?: RadioButtonsKind;
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
  const layoutKind = ["row", "row-start"].includes(kind) ? kind : "normal";
  const isLayoutKind = ["row", "row-start"].includes(kind);
  const isControlled = value !== undefined;
  const hasError = error !== undefined && error.length > 0;
  const [checkedValue, setCheckedValue] = useState(
    isControlled ? value : initialValue,
  );

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

  return (
    <>
      <div
        className={`nds-radiobuttons nds-radiobuttons--${layoutKind}`}
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
            <div className="nds-radiobuttons-option" key={inputValue}>
              <Radio
                kind={isLayoutKind ? "normal" : (kind as RadioKind)}
                name={name}
                checked={checkedValue === inputValue}
                value={inputValue}
                hasError={hasError}
              >
                <div>
                  {label}
                  {/*
                  The `Radio` component knows nothing about "details", but does accept arbittary JSX.
                  Here, we compose in the expected details behavior of RadioButtons.
                  */}
                  {details &&
                    (alwaysShowDetails || checkedValue === inputValue) && (
                      <div
                        className={cc([
                          "nds-radiobutton-details",
                          {
                            "fontColor--secondary": kind !== "card",
                            "fontSize--s": kind !== "card",
                          },
                        ])}
                      >
                        {details}
                      </div>
                    )}
                </div>
              </Radio>
            </div>
          );
        })}
      </div>
      {/* RadioButtons is expected to display a single error for all options. */}
      <div
        className={cc([
          {
            "margin--top--s":
              layoutKind !== "row" && layoutKind !== "row-start",
          },
        ])}
      >
        <Error error={error} />
      </div>
    </>
  );
};

export default RadioButtons;
