// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import ReactMarkdown from "react-markdown";
import Error from "../Error";

interface CheckboxProps {
  /** Content of `label` element */
  label?: string;
  /** Markdown to use in place of the `label` field */
  markdownLabel?: string;
  /** Change callback invoked when the value of the `input` changes */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** `id` attribute of `input` */
  id?: string | number;
  /** `name` attribute of `input` */
  name?: string;
  /**
   * ⚠️ DEPRECATED
   *
   * Uncontrolled Checkbox props will be removed in a future release.
   * Use `checked` instead to use Checkbox as a fully controlled input.
   */
  defaultChecked?: boolean;
  /** Sets the checkbox checked value */
  checked?: boolean;
  /**
   * Checkbox renders in
   * [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
   * when `true`.
   */
  indeterminate?: boolean;
  /**
   * Checkbox renders as disabled and ignores click/check events.
   */
  disabled?: boolean;
  /** Sets the `value` attribute of the `input` */
  value?: string;
  /** Sets whether the checkbox has an error. To be used with multiple checkboxes */
  hasError?: boolean;
  /** Text of error message to display under the checkbox */
  error?: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /**
   * `normal` - visually matches a checkbox input
   *
   * `condensed` - like `normal`, but without added top margin when there are multiple checkboxes
   *
   * `card` - visually present as a toggleable card
   */
  kind?: "normal" | "condensed" | "card" | "table";
}

/**
 * Narmi styled checkbox with built-in label.
 */
const Checkbox = ({
  label,
  markdownLabel,
  onChange = () => {},
  id,
  name,
  defaultChecked,
  checked,
  disabled = false,
  indeterminate = false,
  value,
  hasError,
  error,
  kind = "normal",
  testId,
  ...rest
}: CheckboxProps) => {
  const inputRef = useRef(null);
  const isControlled = checked !== undefined;
  const [isChecked, setIsChecked] = useState(
    isControlled ? checked : defaultChecked || false,
  );
  const [isFocused, setIsFocused] = useState(false);
  const isCard = kind === "card";

  const LinkRenderer = ({ href, children }) => {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  };

  LinkRenderer.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
  };

  useEffect(() => {
    if (isControlled) {
      setIsChecked(checked);
    }
    // ensure indeterminate state is reflected in rendered DOM
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [checked, indeterminate]);

  const handleChange = (e) => {
    if (!isControlled) {
      setIsChecked((isChecked) => !isChecked);
    }
    onChange(e);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`nds-checkbox-container nds-checkbox-container--${kind}`}>
      <label
        className={cc([
          `nds-checkbox nds-checkbox--${kind}`,
          "fontWeight--default",
          {
            "nds-checkbox--checked": isChecked || indeterminate,
            "nds-checkbox--disabled": disabled,
            "nds-checkbox--focused": isFocused,
            "padding--y--xl padding--x rounded--all border--all": isCard,
          },
        ])}
      >
        <span
          className={cc([
            {
              "narmi-icon-check": !indeterminate,
              "narmi-icon-minus": indeterminate,
              error: hasError || !!error,
            },
          ])}
        ></span>
        <div className="nds-checkbox-label">
          {markdownLabel && (
            <ReactMarkdown
              components={{
                a: function ({ href, children }) {
                  return LinkRenderer({
                    href,
                    children,
                  });
                },
              }}
            >
              {markdownLabel}
            </ReactMarkdown>
          )}
          {!markdownLabel && <>{label}</>}
        </div>
        <input
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          checked={isChecked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          id={id && id.toString()}
          value={value}
          data-testid={testId}
          {...rest}
          type="checkbox"
        />
      </label>
      <Error marginTop="xs" error={error} />
    </div>
  );
};

export default Checkbox;
