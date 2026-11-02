import React, { useState } from "react";
import Slider from "src/Slider";
import MultiSelect from "src/MultiSelect";

const storyDescription =
  "Reproduces NDS-3535 (Command > Personas > User type). A Slider sits above " +
  "a MultiSelect whose dropdown layer (useDropdownLayer) opens upward because " +
  "the trigger is near the bottom of the viewport. The open list paints over " +
  "the slider, but the slider's thumbs and active rail paint over the list. " +
  "Open the 'Select states' dropdown to see the thumbs showing through it.";

const STATES = [
  "Alabama (AL)",
  "Alaska (AK)",
  "American Samoa (AS)",
  "Arizona (AZ)",
  "Arkansas (AR)",
  "California (CA)",
  "Colorado (CO)",
  "Connecticut (CT)",
  "Delaware (DE)",
  "District of Columbia (DC)",
  "Florida (FL)",
  "Georgia (GA)",
  "Guam (GU)",
  "Hawaii (HI)",
  "Idaho (ID)",
];

export const DropdownLayerOverSlider = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      <Slider
        label="Age"
        lowerName="min_age"
        higherName="max_age"
        minValue={0}
        maxValue={120}
        step={1}
        defaultValue={[20, 50]}
      />
      <div className="margin--top--xl">
        <MultiSelect
          label="Select states"
          name="states"
          selectedItems={selected}
          onSelectedItemsChange={setSelected}
        >
          {STATES.map((state) => (
            <MultiSelect.Item
              key={state}
              value={state}
              tokenLabel={state}
              searchValue={state}
            >
              {state}
            </MultiSelect.Item>
          ))}
        </MultiSelect>
      </div>
    </div>
  );
};

export default {
  title: "NDS-3535 Dropdown Layer Over Slider",
  tags: ["!autodocs", "NDS-3535"],
  parameters: {
    layout: "fullscreen",
    docs: { description: { component: storyDescription } },
  },
};
