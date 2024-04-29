/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { VisuallyHidden, mergeProps, useFocusRing, useSliderThumb } from "react-aria";

const getRailWidth = (lowerInputThumbProps, higherInputThumbProps) => parseFloat(higherInputThumbProps.style?.left.toString().slice(0, -1)) - parseFloat(lowerInputThumbProps.style?.left.toString().slice(0, -1));

const useThumb = (index, trackRef, name, state) => {
  const inputRef = useRef(null);
  const { thumbProps, inputProps } = useSliderThumb({
    index,
    trackRef,
    inputRef,
    name
  }, state);
  const { focusProps } = useFocusRing();
  return {
    inputRef,
    thumbProps,
    inputProps,
    focusProps,
  }
}

const Thumb = ({ thumbProps, inputRef, inputProps, focusProps }) => {
  return (
    <div
      {...thumbProps}
      className="thumb"
    >
      <VisuallyHidden>
        <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
      </VisuallyHidden>
    </div>
  )
};

const Thumbs = (props) => {
  const { state, trackRef, lowerName, higherName} = props;

  const lowerThumb = useThumb(0, trackRef, lowerName, state);

  const higherThumb = useThumb(1, trackRef, higherName, state);

  const width = getRailWidth(lowerThumb.thumbProps, higherThumb.thumbProps);
  const activeRailStyle = {
    left: lowerThumb.thumbProps.style?.left,
    width: `${width}%`,
  };

  return (
    <>
      <Thumb
        thumbProps={lowerThumb.thumbProps}
        inputRef={lowerThumb.inputRef}
        inputProps={lowerThumb.inputProps}
        focusProps={lowerThumb.focusProps}
      />
      <div className="rail-active" style={activeRailStyle}/>
      <Thumb
        thumbProps={higherThumb.thumbProps}
        inputRef={higherThumb.inputRef}
        inputProps={higherThumb.inputProps}
        focusProps={higherThumb.focusProps}
      />
    </>

  );
}

export default Thumbs;