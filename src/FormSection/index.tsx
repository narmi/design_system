import React from "react";
import PropTypes from "prop-types";
import Row from "../Row";

interface FormSectionProps {
  /** Title of form section */
  title: string;
  children: React.ReactNode;
}

/**
 * A sectioning element for forms that renders a label and line above the section
 */
const FormSection = ({ title, children }: FormSectionProps) => (
  <div className="nds-formSection fontFamily--body">
    <Row alignItems="center" gapSize="xs">
      <Row.Item shrink>
        <h3 className="fontColor--secondary fontSize--xs fontFamily--body">
          {title}
        </h3>
      </Row.Item>
      <Row.Item>
        <div style={{ width: "100%", height: "var(--space-m)" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="var(--space-m)"
            width="100%"
          >
            <line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="var(--font-color-hint)"
              strokeWidth="1"
            />
          </svg>
        </div>
      </Row.Item>
    </Row>
    {children}
  </div>
);

FormSection.propTypes = {
  /** Title of form section */
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormSection;
