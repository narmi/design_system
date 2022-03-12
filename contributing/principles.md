# Engineering Principles of Narmi Design System (NDS)

## 1) Express the look and feel of Narmi

**Namri Design System is not a general purpose UI framework.**

Because the goal of this design system is to match the look and feel of Narmi applications, components
may not be as flexible or configurable as they might be in other frameworks. This is by design.

## 2) Provide components that are easy to use

### Flexibility through composition

When components are too large, they tend to gather increasingly complex configuration options to support new behaviors. The more complex configuration is, the harder the component is to use and the more likely it is to contain undocumented behavior.

NDS follows the Unix philosophy of "small, sharp tools" by providing pieces that can be composed into more complex UI patterns.

Components in NDS are kept as small as possible, with well-defined domains.

### Explicit contracts

The props interface for NDS components aim to be simple and explicit. No behavior should be undocumented. Interface changes are considered breaking changes and signaled by semantic versioning appropriately.

### Predictable behavior

Components should behave the same way regardless of the context in which they're used.
NDS Components avoid layout and context side effects and limit styling customization to maintain predictable behavior.

### Accurate documentation

Static documentation is a lie waiting to happen. Narmi Design System generates
documentation from code as much as possible to ensure docs remain accurate and up to date.
