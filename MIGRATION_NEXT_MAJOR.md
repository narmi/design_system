# Migration Guide for Next Major

## Deprecations

### Deprecated `narmi` brand color tokens

All `narmi` brand color tokens — the brand palette (`pine`, `moss`, `cove`, `azul`, `pistachio`, `cactus`, `sand`, `amethyst`, including every numbered ramp such as `pine400`) and the `narmi` grey/black/white aliases — are now **deprecated**.

These tokens are **still emitted** (as `--color-*` CSS custom properties, `--rgb-*` RGB lists, and `ColorNarmi*` JS constants) for backwards compatibility, but they are no longer part of the documented public token API and will be removed in a future major release. Emitted tokens now carry an `@deprecated` annotation in the generated CSS/SCSS/JS.

The associated brand color helper classes (`.bgColor--<brand>` and `.fontColor--<brand>`, e.g. `.bgColor--pine`) are likewise deprecated. They continue to be emitted into the stylesheet but have been removed from the helper class documentation.

**Impact:** If your application references brand color tokens or helper classes directly, they will keep working for now, but you should migrate to the semantic theme tokens, which are designed to be themeable per institution.

**Why this change:** Brand primitives couple consumers to fixed Narmi colors and bypass the theming system. Semantic `--theme-*` tokens (and their `--theme-rgb-*` RGB lists) are the supported, themeable API.

#### Migration Table

| Deprecated                               | Preferred                                           |
| ---------------------------------------- | --------------------------------------------------- |
| `var(--color-pine)`                      | `var(--theme-primary)`                              |
| `var(--color-moss)`                      | `var(--theme-secondary)`                            |
| `var(--color-cactus)`                    | `var(--theme-tertiary)`                             |
| `rgb(var(--rgb-pine))`                   | `rgb(var(--theme-rgb-primary))`                     |
| `rgba(var(--rgb-moss), var(--alpha-10))` | `rgba(var(--theme-rgb-secondary), var(--alpha-10))` |
| `.bgColor--pine`                         | `.bgColor--theme--primary`                          |
| `.fontColor--moss`                       | `.fontColor--theme--secondary`                      |

#### Example

**Before:**

```css
.my-component {
  background-color: var(--color-pine);
  color: rgba(var(--rgb-moss), var(--alpha-20));
}
```

**After:**

```css
.my-component {
  background-color: var(--theme-primary);
  color: rgba(var(--theme-rgb-secondary), var(--alpha-20));
}
```
