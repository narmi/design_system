// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import Error from "../Error";
import ReactMarkdown from "react-markdown";

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
  size = "m",
  value,
  error,
  kind = "normal",
  testId,
  ...rest
}) => {
  const inputRef = useRef(null);
  const isControlled = checked !== undefined;
  const [isChecked, setIsChecked] = useState(
    isControlled ? checked : defaultChecked || false
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
          `nds-checkbox--${size}`,
          {
            "nds-checkbox--checked": isChecked || indeterminate,
            "nds-checkbox--disabled": disabled,
            "nds-checkbox--focused": isFocused,
            "padding--y--xl padding--x rounded--all border--all": isCard,
          },
        ])}
      >
        <span className={cc(["narmi-icon-check", { error: !!error }])}></span>
        <div className="nds-checkbox-label">
          {markdownLabel && (
            <ReactMarkdown components={{ a: LinkRenderer }}>
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
          id={id}
          value={value}
          data-testid={testId}
          {...rest}
          type="checkbox"
          aria-label={label}
        />
      </label>
      <Error marginTop="xs" error={error} />
    </div>
  );
};

Checkbox.propTypes = {
  /** Content of `label` element */
  label: PropTypes.string,
  /** Markdown to use in place of the `label` field */
  markdownLabel: PropTypes.string,
  /** Change callback invoked when the value of the `input` changes */
  onChange: PropTypes.func,
  /** `id` attribute of `input` */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** `name` attribute of `input` */
  name: PropTypes.string,
  /**
   * ⚠️ DEPRECATED
   *
   * Uncontrolled Checkbox props will be removed in a future release.
   * Use `checked` instead to use Checkbox as a fully controlled input.
   */
  defaultChecked: PropTypes.bool,
  /** Sets the checkbox checked value */
  checked: PropTypes.bool,
  /**
   * Checkbox renders in
   * [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
   * when `true`.
   */
  indeterminate: PropTypes.bool,
  /**
   * Checkbox renders as disabled and ignores click/check events.
   */
  disabled: PropTypes.bool,
  /** Size of checkbox */
  size: PropTypes.oneOf(["s", "m"]),
  /** Sets the `value` attribute of the `input` */
  value: PropTypes.string,
  /** Text of error message to display under the checkbox */
  error: PropTypes.string,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /**
   * `normal` - visually matche a checkbox input
   *
   * `card` - visually present as a toggleable card
   */
  kind: PropTypes.oneOf(["normal", "card"]),
};

export default Checkbox;
