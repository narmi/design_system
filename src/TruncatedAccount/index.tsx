import React from "react";
import cc from "classcat";

interface TruncatedAccountProps {
  /** Name of account */
  name: string;
  /** Last four digits of account number */
  lastFour?: string | number;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** When `true`, the TruncatedAccount root element will display inline instead of block */
  isInline?: boolean;
}

/**
 * Auto-truncated display of account name and account last four digits.
 * This component will grow to the width of its parent container.
 * The account name will truncate with ellipsis as needed to fit the space.
 */
const TruncatedAccount = ({
  name,
  lastFour,
  isInline,
}: TruncatedAccountProps) => (
  <span
    className={cc([
      "nds-truncatedAccount",
      {
        "nds-truncatedAccount--inline": isInline,
      },
    ])}
    title={lastFour ? `${name} - ${lastFour}` : name}
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

export default TruncatedAccount;
