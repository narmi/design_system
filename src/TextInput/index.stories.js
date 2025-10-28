import React, { useState } from "react";
import TextInput, { VALID_ICON_NAMES } from "./";
import Button from "../Button";

const Template = (args) => <TextInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "TextInput Label",
};

export const Example = () => {
  return (
    <div className={"nds-typography"}>
      <div className="storybook-4col">
        <TextInput label={"Label"} />
        <TextInput />
        <TextInput label={"Label"} defaultValue={"Text"} />
        <TextInput
          label={"Label"}
          defaultValue={"Text"}
          error={"Error message"}
        />
        <TextInput label={"Label"} defaultValue={"Disabled"} disabled />
        <TextInput
          label={"Phone number"}
          defaultValue={"(555) 867-5309"}
          type={"tel"}
        />
        <TextInput
          type={"date"}
          label={"Test Quotes"}
          formatter={(text) => text.replace("“", '"').replace("”", '"')}
        />
        <TextInput
          label={"Test Quotes"}
          formatter={(text) => text.replace("“", '"').replace("”", '"')}
        />
        <form>
          <TextInput
            label={"Secret phrase"}
            type="password"
            autoComplete="on"
          />
        </form>
        <TextInput type="text" label="Text" maxLength={10} />
        <TextInput
          type="text"
          label="Text"
          maxLength={10}
          error={"Error message"}
        />
        <TextInput
          type="text"
          label="Text"
          defaultValue="Text input that is too long"
          maxLength={10}
        />
      </div>
    </div>
  );
};

export const MultiLine = () => {
  return (
    <>
      <TextInput multiline />
      <TextInput multiline label="Multiline with label" />
    </>
  );
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Search",
  startIcon: "search",
};

export const CustomStartAndEndContent = Template.bind({});
CustomStartAndEndContent.args = {
  label: "Search",
  endContent: (
    <button className="button--reset">
      <i className="narmi-icon-info" />
    </button>
  ),
};

export const AsColorInput = () => {
  const [color, setColor] = useState("#915F6D");
  return (
    <div className={"nds-typography"}>
      <h1 style={{ marginBottom: "1em" }}>Edit Primary Accessible Color</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextInput
          label={"Hex Code"}
          defaultValue="915F6D"
          formatter={(text) => text.replace("#", "")}
          onBlur={(e) => {
            setColor("#" + e.target.value);
          }}
        />
        <span
          className="narmi-icon-solid-circle"
          style={{ marginLeft: "20px", color: color, fontSize: "50px" }}
        ></span>
      </div>
    </div>
  );
};

export const Search = () => {
  return <TextInput search />;
};

export const WithClearInputIcon = () => {
  return <TextInput showClearButton />;
};

export const WithClearInputIconAndOnChange = () => {
  const [text, setText] = useState("");

  return (
    <>
      <TextInput onChange={(e) => setText(e.target.value)} showClearButton />
      <div>Your text is: {text}</div>
    </>
  );
};

export const DateTime = () => {
  const [dateTime, setDateTime] = useState(null);
  return (
    <>
      <TextInput
        type="datetime-local"
        label="Start datetime"
        onChange={(e) => setDateTime(e.target.value)}
      />
      <div className="margin--top--xxs">Value: {dateTime}</div>
    </>
  );
};

export const Time = () => {
  const [time, setTime] = useState(null);
  return (
    <>
      <TextInput
        type="time"
        label="Start time"
        onChange={(e) => setTime(e.target.value)}
      />
      <div className="margin--top--xxs">Value: {time}</div>
    </>
  );
};

export const PasswordShowHide = () => {
  const [showInputVal, setShowInputVal] = useState(false);
  return (
    <>
      <TextInput
        type={showInputVal ? "text" : "password"}
        label="Password"
        endContent={
          <Button
            kind="plain"
            label={showInputVal ? "Hide" : "Show"}
            onClick={() => {
              setShowInputVal((curr) => !curr);
            }}
          />
        }
      />
    </>
  );
};

export const WithMaxLength = () => {
  const [inputValue, setInputValue] = useState("Default value");
  return (
    <>
      <TextInput
        label="Limited to 20 chars"
        maxLength={20}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </>
  );
};

export const LargeMultiline = () => {
  return (
    <TextInput
      multiline
      defaultValue={`{
        account_membership: true,
        ach_manager_display: ["V2_DB", "V2_AO", "V1_DB"],
        ach_payments: true,
        ach_payments_staff_management: true,
        address_change: true,
        alerts: true,
        allpoint_locator_atm: true,
        ao_internal_funding: true,
        aoiob: true,
        automatic_savings: "OPT_IN",
        beneficiaries: true,
        bill_pay: "ipay",
        billshark: true,
        business_account_opening: true,
        business_banking: true,
        cao_beneficiaries: true,
        cards: true,
        card_max_request_limits: {
          atm: 500,
          pos: 1000,
          user_requests_per_month: 5,
        },
        coop_locator_atm: true,
        coop_locator_branch: true,
        core_based_alerts: false,
        deposit_sso: true,
        edit_scheduled_transfers: true,
        evaluate_using_journeys: true,
        existing_user_account_opening: true,
        fednow_receive: true,
        fednow_send: true,
        instant_account_verification: "mx",
        insurance: "lemonade",
        international_wires: true,
        international_wires_staff_management: true,
        mobile_banking: true,
        mobile_login_switcher: true,
        moneypass_locator_atm: true,
        naf_app_management: true,
        new_account_opening: true,
        offline_verification: true,
        online_banking: true,
        organization_profile: true,
        p2p: ["m2m"],
        paperless_statement_enrollment: true,
        paperless_statement_unenrollment: false,
        personal_banking: true,
        phone_change: true,
        profile_switcher: true,
        push_notifications: true,
        rdc: true,
        refer_a_member: true,
        secure_messages_ai: true,
        secure_messages_redesign: false,
        show_transaction_contact_support: true,
        staff_portal_password_login: true,
        staffer_led_ao_consumer: true,
        staffer_led_ao_business: true,
        statements: true,
        stop_payment: true,
        transfers: true,
        trends: "mx",
        user_message_uploads: true,
        username: true,
        wire_templates: ["fedwire"],
        wire_manager_display: ["wire_manager_v2", "wire_manager_v1"],
        staff_portal_user_profile_beta: true,
        existing_user_dao: true,
        inbound: true,
        offers: true,
        wires: true,
        bao_new_existing_flow: true,
        staffer_led_use_private_api: true,
      }`}
    />
  );
};

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    startIcon: { options: ["", ...VALID_ICON_NAMES] },
    endIcon: { options: ["", ...VALID_ICON_NAMES] },
  },
};
