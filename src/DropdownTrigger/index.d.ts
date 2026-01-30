import React, { ReactNode } from "react";

export interface DropdownTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Set this to `true` when the associated popup is open */
  isOpen?: boolean;
  /** Set to `false` to hide the chevron icon indicating open state */
  showOpenIndicator?: boolean;
  /** Variant of the trigger. Use "table" when used inside table cells */
  kind?: "default" | "table";
  /** Text of `label` element */
  labelText?: string;
  /** Props to spread onto the `label` element */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * Renders a string or node as the value displayed in the `DropdownTrigger`
   * Usually, this represents the name of a selected option
   */
  displayValue?: string | ReactNode;
  /** Render function that returns JSX to display as the value */
  renderDisplayValue?: (() => ReactNode) | undefined;
  /** Error message. When this prop is passed, an error state is displayed */
  errorText?: string;
  /** Set to `true` to display error state without providing error text */
  hasError?: boolean;
  /**
   * Sets a minimum width.
   * Use the full CSS value with the unit (e.g. "400px")
   */
  minWidth?: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /**
   * Pass labels to show a token list of current selections
   */
  tokens?: string[];
  /**
   * Called with new list of tokens. Called whenever a user
   * adds or dismisses a token.
   * `onTokensChange={(tokens) => setTokens(tokens)}`
   */
  onTokensChange?: (tokens: string[]) => void;
  /** arbitrary JSX to place at the start of the faux input */
  startContent?: ReactNode;
  /** arbitrary JSX to place at the end of the faux input */
  endContent?: ReactNode;
}

declare const DropdownTrigger: React.ForwardRefExoticComponent<
  DropdownTriggerProps & React.RefAttributes<HTMLButtonElement>
>;

export default DropdownTrigger;
