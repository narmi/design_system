import React, { useRef } from "react";
import { useNumberFormatter, useSlider, VisuallyHidden } from "react-aria";
import { useSliderState } from 'react-stately';
import Thumbs from "./Thumbs";

export interface Props {
  /** Visually hidden label to describe the input */
  label: string;
  /** `name` attribute passed to the lower value input thumb */
  lowerName: string;
  /** `name` attribute passed to the higher value input thumb */
  higherName: string;
  /** value of the input */
  value?: number[];
  /** change callback invoked when the value of the `input` changes */
  onChange?: (value: number[]) => void
  /** optionally format the input value */
  formatOptions?: Intl.NumberFormatOptions;
  /** lower bound for the input, inclusive */
  minValue?: number;
  /** upper bound for the input, inclusive */
  maxValue?: number;
  /** if uncontrolled, initial value for the input */
  defaultValue?: number[];
  /** increment number for the range input */
  step?: number;
  /**
   * Text rendered within an `<output>` element.
   * If omitted, will default to `Between {lower} and {upper}`
   */
  output?: string;
}
const Slider = (props: Props) => {
  const trackRef = useRef(null);

  const numberFormatter = useNumberFormatter(props.formatOptions);
  const state = useSliderState({ ...props, numberFormatter });
  const {
    groupProps,
    trackProps,
    labelProps,
    outputProps
  } = useSlider(props, state, trackRef);

  return (
    <div {...groupProps} className="nds-slider">
      {props.label &&
        (
          <VisuallyHidden>
            <label {...labelProps}>{props.label}</label>
          </VisuallyHidden>
        )}
      <div className="output-container">
        <output {...outputProps}>
          {props.output || `Between ${state.getThumbValueLabel(0)} and ${state.getThumbValueLabel(1)}`}
        </output>
      </div>
      <div
        {...trackProps}
        ref={trackRef}
        className="track"
      >
        <div className="rail" />
        <Thumbs state={state} trackRef={trackRef} lowerName={props.lowerName} higherName={props.higherName} />
      </div>
    </div>
  );
};

export default Slider;
