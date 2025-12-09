/* eslint-disable react/prop-types */
import React from "react";
import AccordionSet from "./";
import Accordion from "../Accordion";
import Row from "../Row";

const sampleAccordions = [
  {
    id: "account",
    title: "Account Information",
    content: "View your account details, balance, and transaction history.",
  },
  {
    id: "security",
    title: "Security Settings",
    content:
      "Manage your password, two-factor authentication, and security preferences.",
  },
  {
    id: "notifications",
    title: "Notification Preferences",
    content:
      "Configure email, SMS, and push notification settings for your account.",
  },
  {
    id: "support",
    title: "Help & Support",
    content:
      "Access help articles, contact support, or schedule a consultation.",
  },
];

export const ExclusiveMode = () => {
  return (
    <AccordionSet behavior="exclusive">
      {sampleAccordions.map((item, index) => (
        <Accordion
          key={item.id}
          renderSummary={(isOpen) => (
            <Row alignItems="center" gapSize="s">
              <Row.Item>
                <span>{item.title}</span>
              </Row.Item>
              <Row.Item shrink>
                <span className="fontSize--xs fontColor--charcoal">
                  {isOpen ? "Collapse" : "Expand"}
                </span>
              </Row.Item>
            </Row>
          )}
        >
          <div className="padding--all">{item.content}</div>
        </Accordion>
      ))}
    </AccordionSet>
  );
};
ExclusiveMode.parameters = {
  docs: {
    description: {
      story:
        "In exclusive mode (default), only one accordion can be open at a time. Opening a new accordion automatically closes the previously opened one.",
    },
  },
};

export const NativeMode = () => {
  return (
    <AccordionSet behavior="native">
      {sampleAccordions.map((item, index) => (
        <Accordion
          key={item.id}
          renderSummary={(isOpen) => (
            <Row alignItems="center" gapSize="s">
              <Row.Item>
                <span>{item.title}</span>
              </Row.Item>
              <Row.Item shrink>
                <span className="fontSize--xs fontColor--charcoal">
                  {isOpen ? "Collapse" : "Expand"}
                </span>
              </Row.Item>
            </Row>
          )}
        >
          <div className="padding--all">{item.content}</div>
        </Accordion>
      ))}
    </AccordionSet>
  );
};
NativeMode.parameters = {
  docs: {
    description: {
      story:
        "In native mode, each accordion manages its own state independently. Multiple accordions can be open simultaneously.",
    },
  },
};

export const WithCustomStyling = () => {
  return (
    <AccordionSet behavior="exclusive">
      {sampleAccordions.map((item, index) => (
        <Accordion
          key={item.id}
          renderSummary={(isOpen) => (
            <div
              className={`alignChild--left--center padding--all--s bgColor--cloudGrey ${isOpen ? "rounded--top" : "rounded--all"}`}
            >
              <Row alignItems="center" justifyContent="space-between">
                <Row.Item>
                  <strong>{item.title}</strong>
                </Row.Item>
                <Row.Item shrink>
                  <span className="fontSize--xs fontColor--charcoal">
                    {isOpen ? "Collapse" : "Expand"}
                  </span>
                </Row.Item>
              </Row>
            </div>
          )}
        >
          <div className="padding--all bgColor--snowGrey rounded--bottom">
            <p>{item.content}</p>
            <div className="margin--top--s">
              <button type="button">Learn More</button>
            </div>
          </div>
        </Accordion>
      ))}
    </AccordionSet>
  );
};
WithCustomStyling.parameters = {
  docs: {
    description: {
      story:
        "Example showing how AccordionSet works with custom-styled accordions including interactive elements.",
    },
  },
};

export default {
  title: "Components/AccordionSet",
  component: AccordionSet,
};
