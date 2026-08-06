import { FieldText } from "./Text/index";
import { FieldSelect } from "./Select/index";
import { FIELD_MASKS } from "./masks";

/**
 * Field is a namespace containing form field variants.
 *
 * @example
 * ```tsx
 * // Text input with optional mask
 * <Field.Text label="Price" value={price} onChange={setPrice} mask={Field.MASKS.Currency} />
 *
 * // Select dropdown
 * <Field.Select label="Country" value={country} onChange={setCountry}>
 *   <Field.Select.Item value="us">United States</Field.Select.Item>
 *   <Field.Select.Item value="ca">Canada</Field.Select.Item>
 * </Field.Select>
 * ```
 */
const Field = {
  Text: FieldText,
  Select: FieldSelect,
  MASKS: FIELD_MASKS,
};

export default Field;
