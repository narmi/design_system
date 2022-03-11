# Component Interfaces

Guidelines for designing a robust and clear UI component interface for Narmi Design System.

### Props

Use explicit prop types:

```diff
-size: PropTypes.string,
+size: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl']),
```

Prefer explicit props over children whenever possible:

```diff
-<Button><marquee>I can pass anything as children!</marquee></Button>
+<Button label="The component has full control of rendering this label" />
```

Avoid config-like objects as props. Use explicit, individual props instead:

```diff
-<Button options={{ kind: 'secondary', label: 'My Button'}} />
+<Button kind="secondary" label="My Button" />
```

### Styling Customization

Do not accept user-provided classNames. Components should only allow styling changes through variants (`kind`) or other explicit props:

```diff
-className={['component-classname', classNames].join('')}
+className={`component-classname component-classname--${kind}`}
```

### Component Variants

Prefer adding a `kind` prop to support variants over creating multiple components:

```diff
-<PlainButton>
-<Button>
+<Button kind="plain">
+<Button>
```

Use _additive classes_. A base class should be used to define styles between variants,
and the variant classes should only define what changes.

```css
.message {
  font-size: var(--font-size-s);
  padding: var(--space-m);
  border: 1px solid;
}

.message--error {
  color: red;
}

.message--warn {
  color: orange;
}

.message--success {
  color: green;
}
```