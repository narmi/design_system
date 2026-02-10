import React, { forwardRef, useRef } from "react";
import cc from "classcat";
import { useMaskito } from "@maskito/react";
import { useField } from "./useField";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { FIELD_MASKS } from "./masks";
import Row from "../Row";
import Error from "../Error";

import type { MaskitoOptions } from "@maskito/core";
import type { FieldProps } from "./types";

export interface FieldTextProps
  extends
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      | "onChange"
      | "value"
      | "id"
      | "disabled"
      | "aria-invalid"
      | "aria-describedby"
    >,
    FieldProps {
  value: string;
  onChange: (value: string) => void;
  mask?: MaskitoOptions;
}

/**
 * Field.Text renders a decorative shell containing a native text input.
 * It automatically handles ARIA orchestration and optional input masking.
 */
export const FieldText = forwardRef<HTMLInputElement, FieldTextProps>(
  (
    {
      label,
      id,
      value,
      onChange,
      mask,
      errors = [],
      isDisabled = false,
      startIcon,
      endIcon,
      startContent,
      endContent,
      showClearButton = false,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const { errorId, controlProps } = useField({ id, errors, isDisabled });
    const maskitoRef = useMaskito({ options: mask ?? FIELD_MASKS.None });
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRefs = useMergeRefs(
      forwardedRef,
      maskitoRef,
      inputRef,
    ) as React.Ref<HTMLInputElement>;

    return (
      <div
        className={cc([
          "nds-field",
          {
            "nds-field--isDisabled": isDisabled,
            "nds-field--hasError": errors.length > 0,
          },
          className,
        ])}
      >
        <label className="nds-field-label" htmlFor={controlProps.id}>
          {label}
        </label>

        <div className="nds-field-input-box">
          <Row alignItems="center" gapSize="xs">
            {startIcon && (
              <Row.Item shrink>
                <i
                  role="img"
                  className={`narmi-icon-${startIcon}`}
                  aria-hidden="true"
                />
              </Row.Item>
            )}
            {startContent && <Row.Item shrink>{startContent}</Row.Item>}

            <Row.Item>
              <input
                ref={mergedRefs}
                value={value}
                onInput={(e) => onChange(e.currentTarget.value)}
                autoComplete="off"
                {...controlProps}
                {...rest}
              />
            </Row.Item>

            {endContent && <Row.Item shrink>{endContent}</Row.Item>}

            {showClearButton && value && !isDisabled && (
              <Row.Item shrink>
                <button
                  type="button"
                  className="nds-field-clear button--reset"
                  onClick={() => {
                    onChange("");
                    inputRef.current?.focus();
                  }}
                  aria-label="Clear input"
                >
                  <i className="narmi-icon-x" aria-hidden="true" />
                </button>
              </Row.Item>
            )}

            {endIcon && (
              <Row.Item shrink>
                <i
                  role="img"
                  className={`narmi-icon-${endIcon}`}
                  aria-hidden="true"
                />
              </Row.Item>
            )}
          </Row>
        </div>

        <div className="nds-field-errors" id={errorId} aria-live="polite">
          {errors.map((error: string, i: number) => (
            <Error key={`${i}-${error}`} error={error} marginTop="none" />
          ))}
        </div>
      </div>
    );
  },
);

FieldText.displayName = "Field.Text";
