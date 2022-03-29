import React, { useState } from "react";
import PropTypes from "prop-types";
import Row from "../../src/Row";

/**
 * Component used in helper-classes stories to render
 * an interactive exmaple.
 *
 * A category from the class manifest is passed in to generate
 * options and show a preivew.
 */

const ClassSelector = ({ baseName, classCategory, onChange = () => {} }) => {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <Row gapSize="none" alignItems="center">
      <Row.Item shrink>
        <code>{baseName}--</code>
      </Row.Item>
      <Row.Item>
        <select onChange={handleChange}>
          {classCategory.map(({ className, variant1, variant2 }) => (
            <option key={className} value={className}>
              {[variant1, variant2 ? `--${variant2}` : ""].join("")}
            </option>
          ))}
        </select>
      </Row.Item>
    </Row>
  );
};

const ClassExample = ({
  signature,
  classCategory,
  children,
  hideBorder = false,
}) => {
  const [className, setClassName] = useState(classCategory[0].className);
  const child = React.Children.only(children);
  const calculatedClassName = [child.props.className, className]
    .join(" ")
    .trim();
  const example = React.cloneElement(child, {
    className: calculatedClassName,
  });

  return (
    <div style={{ margin: "-2em -3em 0" }}>
      {" "}
      {/* override default story indentation */}
      <p>
        <strong className="padding--right--s">Signature:</strong>
        <code className="fontColor--azul">{signature}</code>
      </p>
      <div
        className="bgColor--white rounded--all border--all margin--top"
        style={{ boxShadow: "var(--elevation-low)" }}
      >
        <div className="rounded--top bgColor--blueGrey padding--all--s">
          <Row>
            <Row.Item>
              <ClassSelector
                baseName={classCategory[0].base}
                classCategory={classCategory}
                onChange={setClassName}
              />
            </Row.Item>
            <Row.Item shrink>
              <code className="fontSize--xs fontColor--azul">
                className="{calculatedClassName}"
              </code>
            </Row.Item>
          </Row>
        </div>
        <div
          style={hideBorder ? undefined : { border: "1px dotted pink" }}
          className="margin--all--s"
        >
          {example}
        </div>
      </div>
    </div>
  );
};

ClassExample.propTypes = {
  /** Signature of class */
  signature: PropTypes.string.isRequired,
  /**
   * A single child to render as a preview.
   * The strigified className from the selector will
   * be applied to this element.
   */
  children: PropTypes.node.isRequired,
  /**
   * A category from the classManifest built to dist/
   * (e.g. "margin")
   */
  classCategory: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string.isRequired,
      base: PropTypes.string.isRequired,
      variant1: PropTypes.string.isRequired,
      variant2: PropTypes.string,
    })
  ),
  /** optionally hides debug border from example */
  hideBorder: PropTypes.bool,
};

export default ClassExample;
