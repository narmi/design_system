import { ReactNode } from "react";
import type { IconName } from "../types/Icon.types";

/** Props shared by every Field subcomponent (Text, Select, future Fields). */
export interface FieldBaseProps {
  id?: string;
  label: string;
  errors?: string[];
  isDisabled?: boolean;
  renderHelperText?: () => ReactNode;
}

/** Decoration props used by input-like Fields (currently only Field.Text). */
export interface FieldDecorationProps {
  startIcon?: IconName | null;
  endIcon?: IconName | null;
  startContent?: ReactNode;
  endContent?: ReactNode;
  showClearButton?: boolean;
}

/**
 * Full Field props surface. Kept as an alias for back-compat with any
 * external consumers that import `FieldProps`.
 */
export interface FieldProps extends FieldBaseProps, FieldDecorationProps {}
