import React from "react";
import { NdsStyles } from "./decorators/decorators";
import { CheckBox } from "design_system";

export default {
  title: "Components/Check",
  decorators: [NdsStyles],
};

export const CHECK = () => {
  return (
    <div>
      <CheckBox
        label="Test"
        id={1}
        name="form_test"
        value="yo"
        onChange={() => {
          console.log("woah");
        }}
      />
            <CheckBox
        label="Test"
        id={1}
        name="form_test"
        value="yo"
        onChange={() => {
          console.log("woah");
        }}
      />
            <CheckBox
        label="Test"
        id={1}
        name="form_test"
        value="yo"
        onChange={() => {
          console.log("woah");
        }}
      />
    </div>
  );
};
