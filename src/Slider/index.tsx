import React, { useRef } from "react";
import { useNumberFormatter, useSlider, VisuallyHidden } from "react-aria";
import { useSliderState } from 'react-stately';
import Thumbs from "./Thumbs";

interface Props {
  label: string;
  output?: string;
  higherName?: string;
  lowerName?: string;
  formatOptions: Intl.NumberFormatOptions;
  maxValue: number;
  defaultValue?: number[];
  step: number;
  value?: number[];
  setValue?: CallableFunction
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
