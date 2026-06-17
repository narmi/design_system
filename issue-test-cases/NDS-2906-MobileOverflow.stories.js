import React from "react";
import Combobox from "src/Combobox";
import TextInput from "src/TextInput";

const LONG_VALUE = "Yes, I am a current member of this financial institution";

/**
 * Replicates the AO consumer eligibility layout where
 * a few psuedo elements animate around the viewport but exit
 * the content area
 */
const MobileOverflowLayout = (Story) => (
  <div
    style={{
      minHeight: "100vh",
      width: "100vw",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "var(--bgColor-white, #fff)",
    }}
  >
    {/* Simulates ::before - animated blur blob (1000px wide, absolute) */}
    <div
      style={{
        position: "absolute",
        width: "1000px",
        height: "1000px",
        borderRadius: "50%",
        opacity: 0.25,
        filter: "blur(200px)",
        zIndex: 0,
        background: "var(--theme-secondary, #4040ff)",
        top: "-800px",
        left: "60%",
        transform: "translateX(-50%)",
      }}
    />
    {/* Simulates ::after - second blur blob */}
    <div
      style={{
        position: "absolute",
        width: "1000px",
        height: "1000px",
        borderRadius: "50%",
        opacity: 0.25,
        filter: "blur(200px)",
        zIndex: 0,
        background: "var(--theme-secondary, #4040ff)",
        bottom: "-600px",
        left: "200px",
      }}
    />
    {/* .app-background-layout (mobile: padding 12px) */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        padding: "12px",
      }}
    >
      {/* .top-section */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* .content-container - align-self: center is critical */}
        <div style={{ alignSelf: "center", paddingTop: "3vh", zIndex: 10 }}>
          {/* .contentCard-container (mobile: width 100%) */}
          <div style={{ width: "100%" }}>
            {/* ContentCard paddingSize="s" */}
            <div
              style={{
                padding: "var(--space-s, 8px)",
                borderRadius: "var(--border-radius-default, 8px)",
                backgroundColor: "white",
              }}
            >
              {/* .content-section (negative margins cancel card padding) */}
              <div
                style={{
                  marginTop: "calc(-1 * var(--space-m, 12px))",
                  marginRight: "calc(-1 * var(--space-s, 8px))",
                  marginBottom: "calc(-1 * var(--space-s, 8px))",
                  marginLeft: "calc(-1 * var(--space-s, 8px))",
                  padding: "28px",
                }}
              >
                {/* ResponsiveFlex direction=column gap=l */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-l, 20px)",
                  }}
                >
                  {/* Question wrapper */}
                  <div>
                    <div className="context-form-field">
                      <Story />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const storyDescription =
  "Regression test for mobile horizontal overflow. " +
  "Must be tested on a real mobile device - open in its own tab. " +
  "Select a long-label item (Combobox) or observe the pre-populated " +
  "value (TextInput) and verify no horizontal scroll occurs.";

export const WithCombobox = () => (
  <Combobox label="Select answer">
    <Combobox.Item
      value="Yes, I am a current member of this financial institution"
      searchValue="Yes, I am a current member of this financial institution"
    >
      Yes, I am a current member of this financial institution
    </Combobox.Item>
    <Combobox.Item
      value="No, I have never been a member of this financial institution and would like to apply"
      searchValue="No, I have never been a member of this financial institution and would like to apply"
    >
      No, I have never been a member of this financial institution and would
      like to apply
    </Combobox.Item>
    <Combobox.Item
      value="I previously had an account but it has been closed"
      searchValue="I previously had an account but it has been closed"
    >
      I previously had an account but it has been closed
    </Combobox.Item>
  </Combobox>
);
WithCombobox.decorators = [MobileOverflowLayout];

/**
 * Control: TextInput with value set programmatically, no focus change.
 * If this does NOT reproduce the bug, focus-after-selection is a factor.
 */
export const WithTextInput = () => {
  const [value, setValue] = React.useState("");
  return (
    <>
      <TextInput
        label="Select answer"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setValue(LONG_VALUE)}
        style={{ marginTop: "var(--space-s, 8px)" }}
      >
        Simulate selection
      </button>
    </>
  );
};
WithTextInput.decorators = [MobileOverflowLayout];

/**
 * Tests theory: programmatic focus return after value change triggers
 * mobile browser scroll-into-view at the text caret position.
 * If this DOES reproduce the bug, it's the focus + long value combo.
 */
export const WithTextInputAndFocus = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);
  return (
    <>
      <TextInput
        ref={inputRef}
        label="Select answer"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setValue(LONG_VALUE);
          inputRef.current?.focus();
        }}
        style={{ marginTop: "var(--space-s, 8px)" }}
      >
        Simulate selection with focus
      </button>
    </>
  );
};
WithTextInputAndFocus.decorators = [MobileOverflowLayout];

/**
 * Control: Combobox without the positioned-background layout.
 * If this DOES reproduce the bug, the layout is not a factor.
 * If this does NOT, the positioned backgrounds are a necessary condition.
 */
export const WithComboboxNoDecorator = () => (
  <Combobox label="Select answer">
    <Combobox.Item
      value="Yes, I am a current member of this financial institution"
      searchValue="Yes, I am a current member of this financial institution"
    >
      Yes, I am a current member of this financial institution
    </Combobox.Item>
    <Combobox.Item
      value="No, I have never been a member of this financial institution and would like to apply"
      searchValue="No, I have never been a member of this financial institution and would like to apply"
    >
      No, I have never been a member of this financial institution and would
      like to apply
    </Combobox.Item>
    <Combobox.Item
      value="I previously had an account but it has been closed"
      searchValue="I previously had an account but it has been closed"
    >
      I previously had an account but it has been closed
    </Combobox.Item>
  </Combobox>
);

export default {
  title: "NDS-2906 Animated Background Mobile Overflow",
  tags: ["!autodocs", "NDS-2906"],
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    layout: "fullscreen",
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};
