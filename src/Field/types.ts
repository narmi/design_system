import { ReactNode } from "react";
import type { IconName } from "../types/Icon.types";

export interface FieldProps {
  id?: string;
  label: string;
  errors?: string[];
  isDisabled?: boolean;
  startIcon?: IconName | null;
  endIcon?: IconName | null;
  startContent?: ReactNode;
  endContent?: ReactNode;
  showClearButton?: boolean;
}
