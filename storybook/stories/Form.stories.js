/*
    This is to display how a user could create a form with design_system components
*/

import React, { useState } from "react";
import {
  Card,
  Button,
  PlainButton,
  RadioButtons,
  TextInput,
} from "design_system";
import { NdsStylesGrey } from "./decorators/decorators";

export default {
  title: "Components/Form",
  decorators: [NdsStylesGrey],
};

const UserInfoSection = () => {
  return (
    <div>
      <h4 className={"nds-form-h"}>User Info</h4>
      <hr className="nds-hr" />
      <div style={{ display: "flex", padding: "20px 0px 20px 0px" }}>
        <TextInput
          label={"First Name"}
          style={{ width: "568px", paddingRight: "20px" }}
        ></TextInput>
        <TextInput label={"Last Name"} style={{ width: "568px" }}></TextInput>
      </div>
      <div style={{ display: "flex", paddingBottom: "40px" }}>
        <TextInput
          style={{ width: "568px", paddingRight: "20px" }}
          label={"Email"}
        ></TextInput>
        <TextInput
          style={{ width: "568px" }}
          label={"Phone Number"}
        ></TextInput>
      </div>
    </div>
  );
};

export const AccessLevelSection = () => {
  return (
    <div>
      <h4 className={"nds-form-h"}>Access Level</h4>
      <hr className="nds-hr" />
      <div className="nds-grid" style={{ paddingTop: "20px" }}>
        <Card
          classes="nds-span-4 nds-span-tablet-6"
          title="Transfer"
          icon="repeat"
          hoverable
        >
          <p>Transfer funds to an internal or external account</p>
        </Card>
        <Card
          classes="nds-span-4 nds-span-tablet-6"
          title="Bill pay"
          icon="bill"
          hoverable
        >
          <p>Pay a bill online or set up future payments</p>
        </Card>
        <Card
          classes="nds-span-4 nds-span-tablet-6"
          title="Member to member"
          icon="group"
          hoverable
        >
          <p>Send money directly to another bank member</p>
        </Card>
      </div>
    </div>
  );
};

export const ActionBar = () => {
  return (
    <div className={"nds-action-bar"}>
      <PlainButton
        onClick={() => {
          setOpen(false);
        }}
        style={{
          paddingRight: "16px",
          color: "rgb(var(--nds-primary-color))",
        }}
        type="plain"
      >
        Cancel
      </PlainButton>
      <Button>Yes, Delete</Button>
    </div>
  );
};

export const Form = () => {
  return (
    <div>
      <style>
        {`
            .nds-form {
                display: flex;
                flex-direction: column;
                border-radius: 4px;
                padding: 0px 20px 20px 20px;
            }
            .nds-action-bar {
                display: flex;
                flex-direction: row;
                float: right;
                align-items: center;
                padding-top: 20px;
            }
            h4.nds-form-h {
                font-family: var(--nds-font-family);
                font-weight: 700;
                margin: 0;
            }
        `}
      </style>
      <form className={"nds-form nds-typography"}>
        <div>
          <div>
            <UserInfoSection />
            <AccessLevelSection />
          </div>
          <ActionBar />
        </div>
      </form>
    </div>
  );
};
