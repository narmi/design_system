import React from "react";
import cc from "classcat";
import PropTypes from "prop-types";

/**
 * Auto-truncated display of account name and account last four digits.
 * This component will grow to the width of its parent container.
 * The account name will truncate with ellipsis as needed to fit the space.
 */
const TruncatedAccount = ({ name, lastFour, isInline }) => (
  <span
    className={cc([
      "nds-truncatedAccount",
      {
        "nds-truncatedAccount--inline": isInline,
      },
    ])}
    title={`${name} - ${lastFour}`}
  >
    <span className="whiteSpace--truncate">{name}</span>
    {lastFour && (
      <span role="img" className="padding--x--xxs">
        -
      </span>
    )}
    {lastFour && <span className="whiteSpace--singleLine">{lastFour}</span>}
  </span>
);

TruncatedAccount.propTypes = {
  /** Name of account */
  name: PropTypes.string.isRequired,
  /** Last four digits of account number */
  lastFour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** When `true`, the TruncatedAccount root element will display inline instead of block */
  isInline: PropTypes.bool,
};

export default TruncatedAccount;
