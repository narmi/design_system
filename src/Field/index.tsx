import { FieldText } from "./Text";
import { FIELD_MASKS } from "./masks";

/**
 * Field is a namespace containing form field variants.
 *
 * @example
 * ```tsx
 * // Text input with optional mask
 * <Field.Text label="Price" value={price} onChange={setPrice} mask={Field.MASKS.Currency} />
 * ```
 */
const Field = {
  Text: FieldText,
  MASKS: FIELD_MASKS,
};

export default Field;
