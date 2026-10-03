import { FieldText } from "./Text/index";
import { FieldSelect } from "./Select/index";
import { FieldCombobox } from "./Combobox/index";
import { FieldUpload } from "./Upload/index";
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
 *
 * // Searchable dropdown
 * <Field.Combobox label="State" value={state} onChange={setState}>
 *   <Field.Combobox.Item value="AL">Alabama</Field.Combobox.Item>
 *   <Field.Combobox.Item value="AK">Alaska</Field.Combobox.Item>
 * </Field.Combobox>
 * ```
 */
const Field = {
  Text: FieldText,
  Select: FieldSelect,
  Combobox: FieldCombobox,
  Upload: FieldUpload,
  MASKS: FIELD_MASKS,
};

export default Field;
