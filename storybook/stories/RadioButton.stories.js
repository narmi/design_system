import React, { useState } from "react";
import { RadioButtons } from "design_system";
import { NdsStyles } from "./decorators/decorators";

export default {
  title: "Components/RadioButtons",
  decorators: [NdsStyles],
};

export const BooleanInput = ({ setting, error, onChange }) => (
  <div style={{ width: "50px" }}>
    <RadioButtons
      initialvalue={true}
      name="setting_value"
      options={{ True: true, False: false }}
    />
  </div>
);
