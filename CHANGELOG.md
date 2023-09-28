# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [3.7.3](https://github.com/narmi/design_system/compare/v3.7.2...v3.7.3) (2023-09-27)


### Bug Fixes

* **DateInput:** use TextInput component instead of native input directly ([6bf6887](https://github.com/narmi/design_system/commit/6bf68875cab5415b9bcf8258b5c11983cacdd20d))

### [3.7.2](https://github.com/narmi/design_system/compare/v3.7.1...v3.7.2) (2023-09-25)


### Bug Fixes

* **Combobox:** render error outside of positioning ref for dropdown ([6db32ad](https://github.com/narmi/design_system/commit/6db32ad96fc9858ddb56929ffb7a831b17c90b36))

### [3.7.1](https://github.com/narmi/design_system/compare/v3.7.0...v3.7.1) (2023-09-21)


### Bug Fixes

* **Drawer:** lower z indecies; use DOM order for stacking ([365e1d3](https://github.com/narmi/design_system/commit/365e1d3dbf7e6d1673b28a48565bdd62e10dcb42))

## [3.7.0](https://github.com/narmi/design_system/compare/v3.6.1...v3.7.0) (2023-09-21)


### Features

* **ResponsiveFlex:** add useViewportSizes hook and ResponsiveFlex ([9ddb9e9](https://github.com/narmi/design_system/commit/9ddb9e9264bf6111ee94c030b115fbc545532a0f))

### [3.6.1](https://github.com/narmi/design_system/compare/v3.6.0...v3.6.1) (2023-09-21)


### Bug Fixes

* **Combobox:** use combobox value for new selection ([6562814](https://github.com/narmi/design_system/commit/656281460920f73a266f17ced61028954380ac90))

## [3.6.0](https://github.com/narmi/design_system/compare/v3.5.0...v3.6.0) (2023-09-21)


### Features

* **Combobox:** add `Combobox.Category` support ([255ddd4](https://github.com/narmi/design_system/commit/255ddd436fe5f97390b7949f2fd6a1d710ab7e7f))
* **Combobox:** add filterItemsByInput prop for custom filtering ([4dc11be](https://github.com/narmi/design_system/commit/4dc11be829d44214ef3d512080b45d6341119765))


### Bug Fixes

* **Combobox:** add hover to categories; prefer bottom placement ([fbabbff](https://github.com/narmi/design_system/commit/fbabbff12951b861fc8d685a748b6ca57e742723))
* **Combobox:** when input has a selected item; reset the menulist when reopening ([69f4a51](https://github.com/narmi/design_system/commit/69f4a519c7faa74d64514c42f7dc588a3a832be5))

## [3.5.0](https://github.com/narmi/design_system/compare/v3.4.2...v3.5.0) (2023-09-20)


### Features

* **Combobox:** add searchValue to items for typeahead control ([3ad86f2](https://github.com/narmi/design_system/commit/3ad86f202ecf2ee23c92dd7a86078adbaf168762))


### Bug Fixes

* use searchValue for input val if available ([37447bf](https://github.com/narmi/design_system/commit/37447bff3399a517bc4016d3fc80ffafb174e094))

### [3.4.2](https://github.com/narmi/design_system/compare/v3.4.1...v3.4.2) (2023-09-20)


### Bug Fixes

* **icons:** remove fill from filter-2 icon ([6de6f3e](https://github.com/narmi/design_system/commit/6de6f3e4c58f608d7d2e20c78c67d47715d45ba8))

### [3.4.1](https://github.com/narmi/design_system/compare/v3.4.0...v3.4.1) (2023-09-18)


### Bug Fixes

* **TextInput:** support the 'time' and 'datetime-local' types ([67f928f](https://github.com/narmi/design_system/commit/67f928fabe67443844d242beceba608d192e6a27))

## [3.4.0](https://github.com/narmi/design_system/compare/v3.3.2...v3.4.0) (2023-09-15)


### Features

* **Error:** expose component publicly ([10b8c66](https://github.com/narmi/design_system/commit/10b8c6652ba1478a4abbf382dcd3f835651dd5c0))

### [3.3.2](https://github.com/narmi/design_system/compare/v3.3.1...v3.3.2) (2023-09-06)


### Bug Fixes

* **Select:** use correct state change types in state reducer ([2564f95](https://github.com/narmi/design_system/commit/2564f958df658fd9ff6c19539415278d0d59ea1b))

### [3.3.1](https://github.com/narmi/design_system/compare/v3.3.0...v3.3.1) (2023-09-06)


### Bug Fixes

* **icon:** remove color from filter-2 ([8a99335](https://github.com/narmi/design_system/commit/8a99335681ce9eb05ae5560af9a3634351240946))

## [3.3.0](https://github.com/narmi/design_system/compare/v3.2.2...v3.3.0) (2023-08-30)


### Features

* **DateInput:** add `disablePortal` for use inside popover ([f992f95](https://github.com/narmi/design_system/commit/f992f959126f7ac5bbd129c146192b5d3a2bd4cb))

### [3.2.2](https://github.com/narmi/design_system/compare/v3.2.1...v3.2.2) (2023-08-30)


### Bug Fixes

* **tabs:** align tab panel with the menu area, not the arrows ([97b10ec](https://github.com/narmi/design_system/commit/97b10ec1e5a6f6c2c6a45a895873b1801fed5c56))

### [3.2.1](https://github.com/narmi/design_system/compare/v3.2.0...v3.2.1) (2023-08-30)


### Bug Fixes

* **Select:** enable typing in faux input before menu is open ([8e8083d](https://github.com/narmi/design_system/commit/8e8083dc5c164bc4368ac43c1adeb92466774649))

## [3.2.0](https://github.com/narmi/design_system/compare/v3.1.8...v3.2.0) (2023-08-29)


### Features

* **icons:** add `filter-2` icon ([92e021b](https://github.com/narmi/design_system/commit/92e021be8af3c4c137dd5af34e59d6ecaba603bb))

### [3.1.8](https://github.com/narmi/design_system/compare/v3.1.7...v3.1.8) (2023-08-25)


### Bug Fixes

* **Popover:** use typeof for SSR check ([f2ebd66](https://github.com/narmi/design_system/commit/f2ebd666d5c60f6fe64f5b0541f79b228e868f19))

### [3.1.7](https://github.com/narmi/design_system/compare/v3.1.6...v3.1.7) (2023-08-25)


### Bug Fixes

* **Popover:** check if SSR in useLayer options ([08de555](https://github.com/narmi/design_system/commit/08de55599be8011373370d2363f1edfd2e7235ca))

### [3.1.6](https://github.com/narmi/design_system/compare/v3.1.5...v3.1.6) (2023-08-24)


### Bug Fixes

* **docs:** update popover stories to use type button ([f3b04c0](https://github.com/narmi/design_system/commit/f3b04c00136ce2d3dcb2e8adfc6d08ceccae9c0a))

### [3.1.5](https://github.com/narmi/design_system/compare/v3.1.4...v3.1.5) (2023-08-23)


### Bug Fixes

* **Dialog:** prevent width prop from overriding mobile viewport behavior ([8c86a06](https://github.com/narmi/design_system/commit/8c86a06a20114f817c4829f1eaf112a1e9cd080c))

### [3.1.4](https://github.com/narmi/design_system/compare/v3.1.3...v3.1.4) (2023-08-23)


### Bug Fixes

* **DropdownTrigger:** remove z-index on chevron-down ([42800a9](https://github.com/narmi/design_system/commit/42800a91ffbeac20f65d92feb39dc08b4f7bf48c))

### [3.1.3](https://github.com/narmi/design_system/compare/v3.1.2...v3.1.3) (2023-08-18)


### Bug Fixes

* **Dialog:** add bottom spacing when no footer is passed in ([db70bab](https://github.com/narmi/design_system/commit/db70bab093f6384de7063a355cbb87a6a5adc4fe))

### [3.1.2](https://github.com/narmi/design_system/compare/v3.1.1...v3.1.2) (2023-08-17)


### Bug Fixes

* **Select:** Max-height 50vh ([50bb8f9](https://github.com/narmi/design_system/commit/50bb8f95563dd0acc037f7608e9dca00b3544da5))

### [3.1.1](https://github.com/narmi/design_system/compare/v3.1.0...v3.1.1) (2023-08-15)


### Bug Fixes

* **tabs:** responsive tab titles should not wrap ([70cb938](https://github.com/narmi/design_system/commit/70cb93804f55b90b40be12dea83531b7dc50b810))

## [3.1.0](https://github.com/narmi/design_system/compare/v3.0.2...v3.1.0) (2023-08-15)


### Features

* **ContentCard:** add radiusSize prop ([38ba965](https://github.com/narmi/design_system/commit/38ba965be8961a758dbbd334e0a6cad13382e720))

### [3.0.2](https://github.com/narmi/design_system/compare/v3.0.1...v3.0.2) (2023-08-08)


### Bug Fixes

* **Button:** use implicit type; add 'reset' type ([14a6bca](https://github.com/narmi/design_system/commit/14a6bcaac095842c8a0d2fef9c80bcb233bd2e48))

### [3.0.1](https://github.com/narmi/design_system/compare/v3.0.0...v3.0.1) (2023-08-08)


### Bug Fixes

* remove modal stories ([bcc9b4d](https://github.com/narmi/design_system/commit/bcc9b4d10ac4d3a9e033060ea4d58f2649adc418))

## [3.0.0](https://github.com/narmi/design_system/compare/v2.56.0...v3.0.0) (2023-08-07)

### ⚠ BREAKING CHANGES

- **Button:** set default type attribute as 'button'
- **Card:** Removes Card component. Use `ContentCard` moving forward.
- **Checkbox:** use auto spacing between checkboxes (adjust bottom margin overrides accordingly)
- **ContentCard:** remove deprecated `type` prop
- **Dialog:** Remove Modal component. Use `Dialog` moving forward.
- **TextInput:** Remove deprecated 'icon' prop. Use 'startIcon' and 'endIcon' instead

### Bug Fixes

- **Button:** set default type attribute as 'button' ([5b0336f](https://github.com/narmi/design_system/commit/5b0336f4cbcb074ace3ce9f836538a9d7dc42848))
- **Dialog:** important auto Dialog height ([6ce230c](https://github.com/narmi/design_system/commit/6ce230cad3fbd4cc5f61f3985e86df417d0ef159))
- **Dialog:** use 80vh as max Dialog height ([e85165d](https://github.com/narmi/design_system/commit/e85165d2c465ebe9c80961aee27759bfedb251c7))

## [2.56.0](https://github.com/narmi/design_system/compare/v2.55.0...v2.56.0) (2023-08-07)

### Features

- **Select:** add getTypeaheadString prop for custom typeahead behavior ([7730808](https://github.com/narmi/design_system/commit/773080868f3340bdc9a3b6a142ee40f12bbad0bb))

## [2.55.0](https://github.com/narmi/design_system/compare/v2.54.0...v2.55.0) (2023-08-04)

### Features

- **Select:** add category grouping feature ([46b6a54](https://github.com/narmi/design_system/commit/46b6a544897d0da2155b0c0ebc114743da5d0dd9))

## [2.54.0](https://github.com/narmi/design_system/compare/v2.53.0...v2.54.0) (2023-08-03)

### Features

- **ContentCard:** add bordered kind ([b17249e](https://github.com/narmi/design_system/commit/b17249e4d22608024726087b1e45b3eac883c037))

## [2.53.0](https://github.com/narmi/design_system/compare/v2.52.3...v2.53.0) (2023-08-03)

### Features

- **Pagination:** enable fully controlled mode ([6e1b638](https://github.com/narmi/design_system/commit/6e1b638121b0f7b0f130f17cf7b386bac12b8cb4))

### [2.52.3](https://github.com/narmi/design_system/compare/v2.52.2...v2.52.3) (2023-08-01)

### Bug Fixes

- **dropdown:** ellipsize dropdown label ([716cb10](https://github.com/narmi/design_system/commit/716cb1057250d47d896a4d82a6e65498b84a042e))

### [2.52.2](https://github.com/narmi/design_system/compare/v2.52.1...v2.52.2) (2023-07-28)

### Bug Fixes

- **focus traps:** diable autofocus in Popover and Dialog ([1a6d390](https://github.com/narmi/design_system/commit/1a6d39073d85eb5afae8bae75e8d07cf4b254b60))

### [2.52.1](https://github.com/narmi/design_system/compare/v2.52.0...v2.52.1) (2023-07-25)

### Bug Fixes

- **tabs:** non-responsive tabs should not be flex ([c56d799](https://github.com/narmi/design_system/commit/c56d799d141216e60a19e426a71ca0b87e93a250))

## [2.52.0](https://github.com/narmi/design_system/compare/v2.51.0...v2.52.0) (2023-07-24)

### Features

- **toggle:** add enabled/disabled label for screen readers ([d45f77b](https://github.com/narmi/design_system/commit/d45f77be96feec760fda52007e166150f1a132bc))

## [2.51.0](https://github.com/narmi/design_system/compare/v2.50.1...v2.51.0) (2023-07-24)

### Features

- **checkbox:** Allow markdown ([5583667](https://github.com/narmi/design_system/commit/5583667f2afd0849ef784a5e96eec5fb69abe630))

### Bug Fixes

- **Checkbox:** Comments ([58d3da5](https://github.com/narmi/design_system/commit/58d3da5061daf344eb14e1dca80d0ab81469258e))
- **import:** import react-markdown properly ([9a80a95](https://github.com/narmi/design_system/commit/9a80a955329f4cd23084936279fc577314996579))
- **select:** Select must have id ([44f543a](https://github.com/narmi/design_system/commit/44f543a05a059a006a43ee2f15e6e481b8edbd1d))

### [2.50.1](https://github.com/narmi/design_system/compare/v2.50.0...v2.50.1) (2023-07-21)

### Bug Fixes

- **date input:** handle NaN selected date ([c020b6a](https://github.com/narmi/design_system/commit/c020b6ad3a8fa8a33c4b0075eb50a19af3095c33))

## [2.50.0](https://github.com/narmi/design_system/compare/v2.49.3...v2.50.0) (2023-07-21)

### Features

- **Typography:** darken secondary text; add thin Mullish weight ([c50dd57](https://github.com/narmi/design_system/commit/c50dd57143c1cc2608031bbd3c29c226362c0305))

### [2.49.3](https://github.com/narmi/design_system/compare/v2.49.2...v2.49.3) (2023-07-18)

### Bug Fixes

- **tabslist:** Tabslist scroll removal throwing error ([63a36d9](https://github.com/narmi/design_system/commit/63a36d97e5816e618538b100391547a5cf1f6eaf))

### [2.49.2](https://github.com/narmi/design_system/compare/v2.49.1...v2.49.2) (2023-07-12)

### Bug Fixes

- **Select:** use portalled popover element ([a7b1b42](https://github.com/narmi/design_system/commit/a7b1b4234d51a6f196549fa7bbdffe1e2d96334e))

### [2.49.1](https://github.com/narmi/design_system/compare/v2.49.0...v2.49.1) (2023-07-12)

### Bug Fixes

- **DatePicker:** Android mobile datepicker doesn't like backspace ([6a8d759](https://github.com/narmi/design_system/commit/6a8d759f1be088e0624bd2295ecd1d5caffde2ed))

## [2.49.0](https://github.com/narmi/design_system/compare/v2.48.0...v2.49.0) (2023-07-11)

### Features

- **button:** Create optional button input for ariaLabel ([7ef1b95](https://github.com/narmi/design_system/commit/7ef1b952d38bbea18ae8b274ac62a498659caf00))

## [2.48.0](https://github.com/narmi/design_system/compare/v2.47.5...v2.48.0) (2023-07-11)

### Features

- **tabs:** Create responsive tabs component ([5c74e54](https://github.com/narmi/design_system/commit/5c74e5479909b95c85297c3458dea72323ef78cd))

### [2.47.5](https://github.com/narmi/design_system/compare/v2.47.4...v2.47.5) (2023-07-11)

### Bug Fixes

- **tabs:** lift aria role for tabs up ([acfdd31](https://github.com/narmi/design_system/commit/acfdd31bb6e9fc7ffdcb54cba0ced0185305f7a3))

### [2.47.4](https://github.com/narmi/design_system/compare/v2.47.3...v2.47.4) (2023-07-11)

### Bug Fixes

- **tooltip:** add aria-label to tooltip trigger ([aafd106](https://github.com/narmi/design_system/commit/aafd10631ab7affbe433111b7055d580f8796741))

### [2.47.3](https://github.com/narmi/design_system/compare/v2.47.2...v2.47.3) (2023-07-10)

### Bug Fixes

- **radio:** set check icon to presentation role ([3ddd15c](https://github.com/narmi/design_system/commit/3ddd15c07d1eabb1c57bc0da97fa7afb4819835b))

### [2.47.2](https://github.com/narmi/design_system/compare/v2.47.1...v2.47.2) (2023-07-10)

### Bug Fixes

- **FormSection:** update styling to better suit design use case ([78bed9e](https://github.com/narmi/design_system/commit/78bed9e075af06f38aabe4649e73ea881a9a40d1))

### [2.47.1](https://github.com/narmi/design_system/compare/v2.47.0...v2.47.1) (2023-06-29)

### Bug Fixes

- **IconButton:** export IconButton in index.js ([33e580c](https://github.com/narmi/design_system/commit/33e580c7ff4ec48f8722ccb8f4390272ca32b05d))

## [2.47.0](https://github.com/narmi/design_system/compare/v2.46.3...v2.47.0) (2023-06-28)

### Features

- **Popover:** add alignment prop for more position control ([beb557a](https://github.com/narmi/design_system/commit/beb557aa12dff01d8344c94f894de53774f84203))
- **IconButton:** add new component, `IconButton`

### [2.46.3](https://github.com/narmi/design_system/compare/v2.46.2...v2.46.3) (2023-06-27)

### Bug Fixes

- **TextInput:** make clearInput call onChange ([62f8b23](https://github.com/narmi/design_system/commit/62f8b230ed8010e143a505d39b96e60ebd3ce26c))

### [2.46.2](https://github.com/narmi/design_system/compare/v2.46.1...v2.46.2) (2023-06-26)

### Bug Fixes

- **LoadingShim:** make loading visual smaller ([bb0e713](https://github.com/narmi/design_system/commit/bb0e713aecb68d8a20008e4191d33d04d3457318))

### [2.46.1](https://github.com/narmi/design_system/compare/v2.46.0...v2.46.1) (2023-06-12)

### Bug Fixes

- **Radio:** add aria-label ([5b4dc81](https://github.com/narmi/design_system/commit/5b4dc81f735933d12dec11930468d7e2a9226feb))

## [2.46.0](https://github.com/narmi/design_system/compare/v2.45.1...v2.46.0) (2023-05-12)

### Features

- **TextInput:** add support for clear input icon ([3c16c68](https://github.com/narmi/design_system/commit/3c16c686c03042dc8235e24bab90e4e7ce8dcb9d))

### [2.45.1](https://github.com/narmi/design_system/compare/v2.45.0...v2.45.1) (2023-05-09)

### Bug Fixes

- **dist:** add deprecations json to dist/ ([bef439d](https://github.com/narmi/design_system/commit/bef439d40e72af665e0b057f4f8ffc49b2d7eff6))

## [2.45.0](https://github.com/narmi/design_system/compare/v2.44.0...v2.45.0) (2023-05-03)

### Features

- Support React 18 consumers ([c35f79c](https://github.com/narmi/design_system/commit/c35f79c15cd0b28b44a3f1c0b6f76852104059bd))

## [2.44.0](https://github.com/narmi/design_system/compare/v2.43.8...v2.44.0) (2023-04-12)

### Features

- **icons:** inline icon font asset ([d597930](https://github.com/narmi/design_system/commit/d5979308a11ac49c785720d00503ccee9bc3e0d4))

### [2.43.8](https://github.com/narmi/design_system/compare/v2.43.7...v2.43.8) (2023-04-05)

### Bug Fixes

- **TextInput:** fix placeholder color ([7b9042e](https://github.com/narmi/design_system/commit/7b9042e7f7a97db1351aa1f09988d7beaf875400))

### [2.43.7](https://github.com/narmi/design_system/compare/v2.43.6...v2.43.7) (2023-03-28)

### Bug Fixes

- **base-styles:** skip ink on text underline globally ([306812d](https://github.com/narmi/design_system/commit/306812db9c4260d1b82c6d5627587e347779706d))

### [2.43.6](https://github.com/narmi/design_system/compare/v2.43.5...v2.43.6) (2023-03-28)

### Bug Fixes

- increase button border radius size on mobile ([07e453d](https://github.com/narmi/design_system/commit/07e453dde8e258f491f475f72aa00a4f19d455ce))

### [2.43.5](https://github.com/narmi/design_system/compare/v2.43.4...v2.43.5) (2023-03-20)

### Bug Fixes

- **Button, Checkbox, TextInput:** add aria-label ([43d581c](https://github.com/narmi/design_system/commit/43d581cb9f16e845f6a5d07875ac4f0b6e05f7e5))

### [2.43.4](https://github.com/narmi/design_system/compare/v2.43.3...v2.43.4) (2023-03-10)

### Bug Fixes

- **Popover:** only open with Enter key on trigger event ([8467735](https://github.com/narmi/design_system/commit/84677353518ba5cd52563d8a48aa497fab0f3798))

### [2.43.3](https://github.com/narmi/design_system/compare/v2.43.2...v2.43.3) (2023-03-10)

### Bug Fixes

- **Dialog:** remove min-height of dialog ([f0c84fb](https://github.com/narmi/design_system/commit/f0c84fb93856f4ae4a2d0c3e41218ba6709623cf))

### [2.43.2](https://github.com/narmi/design_system/compare/v2.43.1...v2.43.2) (2023-03-09)

### Bug Fixes

- RadioButtons and Checkbox card kinds use bold text ([1f20d54](https://github.com/narmi/design_system/commit/1f20d54c193c210f606732657e888c34ffb0602c))

### [2.43.1](https://github.com/narmi/design_system/compare/v2.43.0...v2.43.1) (2023-03-02)

### Bug Fixes

- **DropdownTrigger:** set explicit text color for value ([19e4880](https://github.com/narmi/design_system/commit/19e4880ac47b36ec892f60e23aa7e2f958a2781c))

## [2.43.0](https://github.com/narmi/design_system/compare/v2.42.4...v2.43.0) (2023-03-02)

### Features

- **FormSection:** add FormSection component ([47e0cc8](https://github.com/narmi/design_system/commit/47e0cc83a0a2d2d00fd3dde60dc06c21669ad2d7))

### [2.42.4](https://github.com/narmi/design_system/compare/v2.42.3...v2.42.4) (2023-03-01)

### Bug Fixes

- **Select:** prevent chevron from overlapping other open popovers ([cde33f8](https://github.com/narmi/design_system/commit/cde33f840bd62cc3daef597b754d1d1ae9101d77))

### [2.42.3](https://github.com/narmi/design_system/compare/v2.42.2...v2.42.3) (2023-03-01)

### Bug Fixes

- **icon:** make 'business' and 'profiles' accept custom color ([69c36d5](https://github.com/narmi/design_system/commit/69c36d57eb1789696b4d7649826dda8557001bf1))

### [2.42.2](https://github.com/narmi/design_system/compare/v2.42.1...v2.42.2) (2023-03-01)

### Bug Fixes

- **Select:** minor style changes ([a96e81c](https://github.com/narmi/design_system/commit/a96e81ca4d16593093e2e67abec4b090581b7e7c))

### [2.42.1](https://github.com/narmi/design_system/compare/v2.42.0...v2.42.1) (2023-03-01)

### Bug Fixes

- **ContentCard:** thicken border of selected interactive card ([4389f6a](https://github.com/narmi/design_system/commit/4389f6a523d71680eda428cc5a50f0083de27e45))

## [2.42.0](https://github.com/narmi/design_system/compare/v2.41.0...v2.42.0) (2023-02-28)

### Features

- **Button:** add isLoading prop for disabled loading state ([31923a6](https://github.com/narmi/design_system/commit/31923a6c085b4e6ca1052e38bf22d4f309a34f52))

## [2.41.0](https://github.com/narmi/design_system/compare/v2.40.2...v2.41.0) (2023-02-27)

### Features

- **icons:** Add 'profile' and 'business' icons ([1437e6b](https://github.com/narmi/design_system/commit/1437e6b2da3107b9323f7d314ed07a1c64bb7727))

### [2.40.2](https://github.com/narmi/design_system/compare/v2.40.1...v2.40.2) (2023-02-23)

### Bug Fixes

- **select:** correctly render with less than two options ([cc16e51](https://github.com/narmi/design_system/commit/cc16e51272c6deff485d3aeed1f93365d1220fda))

### [2.40.1](https://github.com/narmi/design_system/compare/v2.40.0...v2.40.1) (2023-02-18)

### Bug Fixes

- **DateInput:** format onChange callback based on useIsoChange prop ([718588a](https://github.com/narmi/design_system/commit/718588acb5df9f3b6fb2f7fe8eb505cb4339ce2c))

## [2.40.0](https://github.com/narmi/design_system/compare/v2.39.3...v2.40.0) (2023-02-17)

### Features

- **icons:** Add 'logo-remitly' icon ([b6c49da](https://github.com/narmi/design_system/commit/b6c49da0c31038a5cea50903108c01c786e27b6c))

### [2.39.3](https://github.com/narmi/design_system/compare/v2.39.2...v2.39.3) (2023-02-14)

### Bug Fixes

- **Input:** error color wins against focus color ([0cbaed2](https://github.com/narmi/design_system/commit/0cbaed2553c7b2556addca0f671969ccd1180057))

### [2.39.2](https://github.com/narmi/design_system/compare/v2.39.1...v2.39.2) (2023-02-08)

### Bug Fixes

- **formatNumber:** Always format numbers with 2 decimal places ([8fb1800](https://github.com/narmi/design_system/commit/8fb1800fff455cd96c01cb2d7448da07563d9b15))

### [2.39.1](https://github.com/narmi/design_system/compare/v2.39.0...v2.39.1) (2023-02-02)

### Bug Fixes

- **Tag:** change `grey` Tag to `subdued-secondary` ([e6fab53](https://github.com/narmi/design_system/commit/e6fab5398216d70a05e84086166f57b736eca7f5))

## [2.39.0](https://github.com/narmi/design_system/compare/v2.38.1...v2.39.0) (2023-02-01)

### Features

- **Tag:** add new `grey` kind ([a47e822](https://github.com/narmi/design_system/commit/a47e8223a1d17f4b87d42e2fb5f8dc2f9893f302))

### [2.38.1](https://github.com/narmi/design_system/compare/v2.38.0...v2.38.1) (2023-02-01)

### Bug Fixes

- **Drawer:** update navigation panel design ([442d496](https://github.com/narmi/design_system/commit/442d49687d549a72a01576e865f051381802c533))

## [2.38.0](https://github.com/narmi/design_system/compare/v2.37.1...v2.38.0) (2023-01-23)

### Features

- **Drawer:** allow popovers within Drawer by decreasing z-index ([be77c89](https://github.com/narmi/design_system/commit/be77c89c951623cfde347823d4e55c42ff9c8986))

### [2.37.1](https://github.com/narmi/design_system/compare/v2.37.0...v2.37.1) (2023-01-20)

### Bug Fixes

- **radiobuttons:** Decrease padding between option and text ([3112ba2](https://github.com/narmi/design_system/commit/3112ba213bab2ced8e12a567b6467087e9977f6b))

## [2.37.0](https://github.com/narmi/design_system/compare/v2.36.1...v2.37.0) (2023-01-05)

### Features

- **Tag:** add success, warn and error kinds ([d210588](https://github.com/narmi/design_system/commit/d21058865fabee60c1f8d9292ec0409b5a59cc36))

### [2.36.1](https://github.com/narmi/design_system/compare/v2.36.0...v2.36.1) (2023-01-05)

### Bug Fixes

- **Tabs:** set selected tab's font weight to semibold ([cf24522](https://github.com/narmi/design_system/commit/cf24522e125f424bf83d73660cb1a4692770d88d))

## [2.36.0](https://github.com/narmi/design_system/compare/v2.35.2...v2.36.0) (2022-12-21)

### Features

- **Drawer:** add Drawer component ([235fec9](https://github.com/narmi/design_system/commit/235fec9adf0a430bea0ef260303df4e463374fdd))

### [2.35.2](https://github.com/narmi/design_system/compare/v2.35.1...v2.35.2) (2022-11-22)

### Bug Fixes

- **icons:** update list of mobile-compatible icons ([a74793b](https://github.com/narmi/design_system/commit/a74793bc83cedd14e4d830d42eaf7f4a64c39636))

### [2.35.1](https://github.com/narmi/design_system/compare/v2.35.0...v2.35.1) (2022-11-22)

### Bug Fixes

- **Checkbox:** correct styling for hover and focus states ([cacd269](https://github.com/narmi/design_system/commit/cacd2690335d6a1a318a39d6807d871052128aee))

## [2.35.0](https://github.com/narmi/design_system/compare/v2.34.1...v2.35.0) (2022-11-18)

### Features

- **Button:** add `xs` size option ([5d592d3](https://github.com/narmi/design_system/commit/5d592d379fec2cdd864780c2b0bb12bf95079c0e)), closes [/github.com/narmi/design_system/pull/852#pullrequestreview-1186812380](https://github.com/narmi//github.com/narmi/design_system/pull/852/issues/pullrequestreview-1186812380)

### [2.34.1](https://github.com/narmi/design_system/compare/v2.34.0...v2.34.1) (2022-11-14)

### Bug Fixes

- **Checkbox,RadioButtons:** specify label font weights ([a414975](https://github.com/narmi/design_system/commit/a41497521e23211a0b5d9ede88851fb43b9c028b))

## [2.34.0](https://github.com/narmi/design_system/compare/v2.33.1...v2.34.0) (2022-10-28)

### Features

- **Combobox:** use react-laag positioning engine for dropdown ([d0526b5](https://github.com/narmi/design_system/commit/d0526b52b0189bfc836dcdd93d07db6ac84765a8))

### [2.33.1](https://github.com/narmi/design_system/compare/v2.33.0...v2.33.1) (2022-10-26)

### Bug Fixes

- **Checkbox:** checkbox itself should have error border if in error state ([686fc1a](https://github.com/narmi/design_system/commit/686fc1aea988e16312a3c3368700e907802f1f3c))

## [2.33.0](https://github.com/narmi/design_system/compare/v2.32.0...v2.33.0) (2022-10-26)

### Features

- **icons:** add list of mobile-compatible icons to the built dist ([597b1f8](https://github.com/narmi/design_system/commit/597b1f8ad34f689a24c00709f752b8b7db4c9bfc))

## [2.32.0](https://github.com/narmi/design_system/compare/v2.31.0...v2.32.0) (2022-10-26)

### Features

- **icons:** document mobile-compatible icons ([7781d2d](https://github.com/narmi/design_system/commit/7781d2d2efc822d1ae2f29cebf664d3e122cdb8d))

## [2.31.0](https://github.com/narmi/design_system/compare/v2.30.0...v2.31.0) (2022-10-25)

### Features

- **Checkbox:** add error prop to display error beneath checkbox ([f313524](https://github.com/narmi/design_system/commit/f313524ed07403a267e65508601ff6ccf1f4e9cf))

## [2.30.0](https://github.com/narmi/design_system/compare/v2.29.5...v2.30.0) (2022-10-18)

### Features

- **icons:** add zelle outline icon ([baf4b58](https://github.com/narmi/design_system/commit/baf4b58b8db768018c3722a6e9be25adc12390b6))

### [2.29.5](https://github.com/narmi/design_system/compare/v2.29.4...v2.29.5) (2022-10-11)

### Bug Fixes

- **TextInput:** add `aria-label` property as a11y fallback ([910832f](https://github.com/narmi/design_system/commit/910832f8c5126e4deef4dfcb354a447a9f92ac43))

### [2.29.4](https://github.com/narmi/design_system/compare/v2.29.3...v2.29.4) (2022-10-03)

### Bug Fixes

- **TextInput:** prevent global CSS from modifying input height ([c62b3a5](https://github.com/narmi/design_system/commit/c62b3a5ceb5e83862c5a07e30d701fa66d219acc))

### [2.29.3](https://github.com/narmi/design_system/compare/v2.29.2...v2.29.3) (2022-10-03)

### Bug Fixes

- **RadioButtons:** card-style radio buttons should have font weight bold and color theme primary ([730a810](https://github.com/narmi/design_system/commit/730a810dbede941b3866777a16fb71f2b147c33c))

### [2.29.2](https://github.com/narmi/design_system/compare/v2.29.1...v2.29.2) (2022-10-03)

### Bug Fixes

- **RadioButtons:** spacing should exist between the last option and an error, if one exists. ([dfe1057](https://github.com/narmi/design_system/commit/dfe1057625e5a0986709b042e52308337d160816))

### [2.29.1](https://github.com/narmi/design_system/compare/v2.29.0...v2.29.1) (2022-10-01)

### Bug Fixes

- **RadioButtons:** don't show bottom margin on last radio button option ([178d8d6](https://github.com/narmi/design_system/commit/178d8d6b2f242233bb19af20e61669db9f295825))

## [2.29.0](https://github.com/narmi/design_system/compare/v2.28.0...v2.29.0) (2022-09-28)

### Features

- **icons:** add 9 new icons for MX categories ([fc26f46](https://github.com/narmi/design_system/commit/fc26f46b6e54871272486fa3bb5f1e2e3edf0c2d))

## [2.28.0](https://github.com/narmi/design_system/compare/v2.27.7...v2.28.0) (2022-09-23)

### Features

- **helper-casses:** add theme color variants for fontColor and bgColor ([96f41f8](https://github.com/narmi/design_system/commit/96f41f8a67c7fb228da298613ab81269cc114ff5))

### [2.27.7](https://github.com/narmi/design_system/compare/v2.27.6...v2.27.7) (2022-09-22)

### Bug Fixes

- **RadioButtons:** adjust spacing and border widths ([1d4ad5e](https://github.com/narmi/design_system/commit/1d4ad5e1cf4cef6d1798c01b5c7a7fecc3c91bb7))

### [2.27.6](https://github.com/narmi/design_system/compare/v2.27.5...v2.27.6) (2022-08-31)

### Bug Fixes

- **TruncatedAccount:** show full account name in `title` on hover ([089c938](https://github.com/narmi/design_system/commit/089c938971692a203004e1b17fc21544432e2a7d))

### [2.27.5](https://github.com/narmi/design_system/compare/v2.27.4...v2.27.5) (2022-08-31)

### Bug Fixes

- **Tooltip:** allow SSR by using default `container` option of `useLayer` ([3fd8d0a](https://github.com/narmi/design_system/commit/3fd8d0a5f2ad31746e1d16084fc74f6508d8ad44))

### [2.27.4](https://github.com/narmi/design_system/compare/v2.27.3...v2.27.4) (2022-08-08)

### Bug Fixes

- **RadioButtons:** set radio backgrounds to white ([d349697](https://github.com/narmi/design_system/commit/d349697f36845931a8282e4d18d29a34b714428c))

### [2.27.3](https://github.com/narmi/design_system/compare/v2.27.2...v2.27.3) (2022-08-07)

### Bug Fixes

- **TextInput:** ensure autofill styling doesn't overlap floating label ([3480c86](https://github.com/narmi/design_system/commit/3480c86424f12ba069fdb56f7896dd88053c92a4))

### [2.27.2](https://github.com/narmi/design_system/compare/v2.27.1...v2.27.2) (2022-08-05)

### Bug Fixes

- **Select:** cover deselection case in controlled mode ([9107832](https://github.com/narmi/design_system/commit/910783221ccb53c371187b7d801c463c64368dda))

### [2.27.1](https://github.com/narmi/design_system/compare/v2.27.0...v2.27.1) (2022-07-29)

### Bug Fixes

- **icons:** make all glyphs equal width; pixel hint and center all shapes ([7c3d41c](https://github.com/narmi/design_system/commit/7c3d41c52140ee4c343cd90eeaa4b6ca8f4cd1b5))

## [2.27.0](https://github.com/narmi/design_system/compare/v2.26.1...v2.27.0) (2022-07-26)

### Features

- **tokens:** generate dist for react native web ([38b53f9](https://github.com/narmi/design_system/commit/38b53f9cbf577205ca655bdba01accc63eb1607c))

### [2.26.1](https://github.com/narmi/design_system/compare/v2.26.0...v2.26.1) (2022-07-25)

### Bug Fixes

- **DropdownTrigger:** set `type` attribute on button element ([b4c88dc](https://github.com/narmi/design_system/commit/b4c88dc08221c984f7a3b95d2681987fcec0f2d4))

## [2.26.0](https://github.com/narmi/design_system/compare/v2.25.0...v2.26.0) (2022-07-21)

### Features

- **Combobox:** add `inputValue` prop to enable fully controlled input ([e2d6970](https://github.com/narmi/design_system/commit/e2d6970076e4ed344daa6b4177eba514f7be961f))
- **RadioButtons:** add `error` prop to support RadioButtons error state ([9134b91](https://github.com/narmi/design_system/commit/9134b912acb2ccf5ce14de846cfe0cf0ecb15d1e))

## [2.25.0](https://github.com/narmi/design_system/compare/v2.24.0...v2.25.0) (2022-07-20)

### Features

- **Button:** add `size` prop to support size variants ([7f1ceca](https://github.com/narmi/design_system/commit/7f1ceca55204e4bd4be14724a7e61083d0289a92))

## [2.24.0](https://github.com/narmi/design_system/compare/v2.23.2...v2.24.0) (2022-07-15)

### Features

- **fonts:** add xxs font size (and helper class) ([75322a9](https://github.com/narmi/design_system/commit/75322a99b187849e10b7ecc43a83b868b3bb3464))

### [2.23.2](https://github.com/narmi/design_system/compare/v2.23.1...v2.23.2) (2022-07-11)

### Bug Fixes

- **TextInput:** prevent descenders in floating label from being cut off ([7ed2020](https://github.com/narmi/design_system/commit/7ed2020ad1ee9de0f12ab6f03ade634273aa8063))

### [2.23.1](https://github.com/narmi/design_system/compare/v2.23.0...v2.23.1) (2022-07-11)

### Bug Fixes

- **Pagination:** fix unselected page number color ([ad29994](https://github.com/narmi/design_system/commit/ad29994eb46406cf9c157ba08f1fd4f34c52be80))

## [2.23.0](https://github.com/narmi/design_system/compare/v2.22.0...v2.23.0) (2022-07-06)

### Features

- **Toggle:** add `isActive` prop to `Toggle` (fully controlled) ([060cc74](https://github.com/narmi/design_system/commit/060cc74f0ad1cf7a4ec2b5029cd52ef3221f0072))

## [2.22.0](https://github.com/narmi/design_system/compare/v2.21.2...v2.22.0) (2022-07-06)

### Features

- **TruncatedAccount:** add `TruncatedAccount` component ([8c83aa7](https://github.com/narmi/design_system/commit/8c83aa773b1f59a2fd875368a91905f18098dabb))

### [2.21.2](https://github.com/narmi/design_system/compare/v2.21.1...v2.21.2) (2022-07-01)

### Bug Fixes

- **icons:** add icon aliases for mobile support ([fe02052](https://github.com/narmi/design_system/commit/fe0205240dfa68e8622d4faaee53b25b48bdd4bd))

### [2.21.1](https://github.com/narmi/design_system/compare/v2.21.0...v2.21.1) (2022-06-24)

### Bug Fixes

- **icons:** include ttf and woff font assets in dist for mobile ([3b2ca54](https://github.com/narmi/design_system/commit/3b2ca54c751996a1e1634db913409b7de8ccaf4b))

## [2.21.0](https://github.com/narmi/design_system/compare/v2.20.1...v2.21.0) (2022-06-23)

### Features

- **icons:** add `security` and `feed` shapes to cover mobile UI ([6a141ad](https://github.com/narmi/design_system/commit/6a141adc64185bfb3475d778f131ec2f5fb9fbf5))

### [2.20.1](https://github.com/narmi/design_system/compare/v2.20.0...v2.20.1) (2022-06-21)

### Bug Fixes

- minor styling tweaks for `Tabs` and `Dialog` ([676693d](https://github.com/narmi/design_system/commit/676693d6ff11a897ad818ad552718e052ea5744d))

## [2.20.0](https://github.com/narmi/design_system/compare/v2.19.2...v2.20.0) (2022-06-14)

### Features

- **Combobox:** add autocomplete Combobox component ([f07b1a8](https://github.com/narmi/design_system/commit/f07b1a87b47fc147118160240df360a4f5f8e85d))

### [2.19.2](https://github.com/narmi/design_system/compare/v2.19.1...v2.19.2) (2022-06-10)

### Bug Fixes

- **icons:** inline icon assets ([5ea4754](https://github.com/narmi/design_system/commit/5ea4754dfa83c2bb5303c1fe0354daa26e19cc19))

### [2.19.1](https://github.com/narmi/design_system/compare/v2.19.0...v2.19.1) (2022-06-07)

### Bug Fixes

- update unshimmed legacy theme vars ([25fb8ab](https://github.com/narmi/design_system/commit/25fb8ab259c39c89f19b4b50b25703cee0c24e85))

## [2.19.0](https://github.com/narmi/design_system/compare/v2.18.2...v2.19.0) (2022-06-01)

### Features

- add prop to all components ([61aff40](https://github.com/narmi/design_system/commit/61aff40de3ea1842988ae2ba970e57605181adde))

### [2.18.2](https://github.com/narmi/design_system/compare/v2.18.1...v2.18.2) (2022-05-27)

### Bug Fixes

- **formatting:** Expect decimal representation in backfall percent formatter ([c333af4](https://github.com/narmi/design_system/commit/c333af409cec2561f7f49ff1d123d2aa996c23f1))

### [2.18.1](https://github.com/narmi/design_system/compare/v2.18.0...v2.18.1) (2022-05-24)

### Bug Fixes

- **Checkbox:** fix fully controlled mode via prop ([e3a17fa](https://github.com/narmi/design_system/commit/e3a17fafc15c0ff5866d830d37e2180be58929f5))

## [2.18.0](https://github.com/narmi/design_system/compare/v2.17.1...v2.18.0) (2022-05-17)

### Features

- **helper-classes:** add xxl spacing size ([4672a2c](https://github.com/narmi/design_system/commit/4672a2ca2cf68290b737f375d98d31a067dfbca3))

### [2.17.1](https://github.com/narmi/design_system/compare/v2.17.0...v2.17.1) (2022-05-17)

### Bug Fixes

- **Button:** restrict hover underlines to text label ([cdef21b](https://github.com/narmi/design_system/commit/cdef21bb1855652b04d95bc5d99c5084e9cdcceb))

## [2.17.0](https://github.com/narmi/design_system/compare/v2.16.1...v2.17.0) (2022-05-17)

### Features

- **RadioButtons:** set fully controlled mode when prop is passed ([688a905](https://github.com/narmi/design_system/commit/688a905deab2d5055a93b4ef2318ac2d24eae2bf))

### [2.16.1](https://github.com/narmi/design_system/compare/v2.16.0...v2.16.1) (2022-05-12)

### Bug Fixes

- **ContentCard:** deprecate ; use prop for variants ([b679912](https://github.com/narmi/design_system/commit/b679912d9c359d839dbe8670f47688abf9712a7f))
- **TextArea:** deprecate prop; use moving forward ([f491380](https://github.com/narmi/design_system/commit/f4913808c1d15f1d1a31ad4545de13c49cac2b8a))

## [2.16.0](https://github.com/narmi/design_system/compare/v2.15.4...v2.16.0) (2022-05-11)

### Features

- **Select:** add checkmark to selected item in menu list ([7351890](https://github.com/narmi/design_system/commit/7351890ad611c52eff6d53caff7ebaaafbc65958))

### [2.15.4](https://github.com/narmi/design_system/compare/v2.15.3...v2.15.4) (2022-05-11)

### Bug Fixes

- **Select:** fix children filtering for SSR & React 17 ([5704b72](https://github.com/narmi/design_system/commit/5704b72514ae38e1d5f689836ef495a018d3fda6))

### [2.15.3](https://github.com/narmi/design_system/compare/v2.15.2...v2.15.3) (2022-05-10)

### Bug Fixes

- **Card fields:** match design spec for card variants of radios and checkbox ([ea2b07a](https://github.com/narmi/design_system/commit/ea2b07a97beea1e129110bc8b1612eac2fe8bd9f))

### [2.15.2](https://github.com/narmi/design_system/compare/v2.15.1...v2.15.2) (2022-05-10)

### Bug Fixes

- **ContentCard:** update styles to match design specs ([8187f9c](https://github.com/narmi/design_system/commit/8187f9ce7ca1dbc1fa775927387b2725f34f99d8))

### [2.15.1](https://github.com/narmi/design_system/compare/v2.15.0...v2.15.1) (2022-05-10)

### Bug Fixes

- **Select:** enable SSR ([a3c139f](https://github.com/narmi/design_system/commit/a3c139fe47ee34625ef40d255e5303c21f8dd633))

## [2.15.0](https://github.com/narmi/design_system/compare/v2.14.6...v2.15.0) (2022-05-10)

### Features

- **TextInput:** add icon support to TextInput ([ea8975a](https://github.com/narmi/design_system/commit/ea8975a094e0f3d68c9f5c9abb4eccc41ea1a6fb))

### [2.14.6](https://github.com/narmi/design_system/compare/v2.14.5...v2.14.6) (2022-05-09)

### Bug Fixes

- **TextInput:** force wrap long lines ([eb5a15a](https://github.com/narmi/design_system/commit/eb5a15a26fce4b99db504f8e8f696fcee561b8cd))

### [2.14.5](https://github.com/narmi/design_system/compare/v2.14.4...v2.14.5) (2022-05-02)

### Bug Fixes

- **numberformat:** Add native JS failover ([b7bde22](https://github.com/narmi/design_system/commit/b7bde228f323e8c6e5451968c03901c32c2ced16))

### [2.14.4](https://github.com/narmi/design_system/compare/v2.14.3...v2.14.4) (2022-05-02)

### Bug Fixes

- **RadioButtons/Checkbox:** explicitly set font size ([ed6ab6c](https://github.com/narmi/design_system/commit/ed6ab6c1f9522d51b2de3c74841d1d05081fef61))

### [2.14.3](https://github.com/narmi/design_system/compare/v2.14.2...v2.14.3) (2022-05-02)

### Bug Fixes

- **numberformat:** Catch error in case of browser unsupported currency format ([c4863d0](https://github.com/narmi/design_system/commit/c4863d0ebf18f27f12bd86618f4c9cc6785427a8))

### [2.14.2](https://github.com/narmi/design_system/compare/v2.14.1...v2.14.2) (2022-04-26)

### Bug Fixes

- **Tooltip:** fix `maxWidth` prop ([dd6105f](https://github.com/narmi/design_system/commit/dd6105f2265a0a781c3d14ea83f4f62d2647dac5))

### [2.14.1](https://github.com/narmi/design_system/compare/v2.14.0...v2.14.1) (2022-04-26)

### Bug Fixes

- **Checkbox:** forward event to onChange ([11ccd18](https://github.com/narmi/design_system/commit/11ccd18bbffa0f426d31277db99478851b87a760))

## [2.14.0](https://github.com/narmi/design_system/compare/v2.13.0...v2.14.0) (2022-04-22)

### Features

- **icons:** add `car`, `student`, `signal`, `question`, and `hand-spock` ([d6c50fc](https://github.com/narmi/design_system/commit/d6c50fc4d4c84bdf7c30d38651f908130137f8bc))

## [2.13.0](https://github.com/narmi/design_system/compare/v2.12.1...v2.13.0) (2022-04-13)

### Features

- **Dialog:** use takeover modal for mobile sized screens ([0d3da0e](https://github.com/narmi/design_system/commit/0d3da0e9e8365e7697ca0ed6f0602a744e26ccd8))

### [2.12.1](https://github.com/narmi/design_system/compare/v2.12.0...v2.12.1) (2022-04-13)

### Bug Fixes

- **Tag:** adjust sizes on variants ([10bf1f7](https://github.com/narmi/design_system/commit/10bf1f7ad5bbc69722695e12e964c258c009f5d3))

## [2.12.0](https://github.com/narmi/design_system/compare/v2.11.2...v2.12.0) (2022-04-08)

### Features

- **Radiobuttons:** add `card` variant ([ad98fb6](https://github.com/narmi/design_system/commit/ad98fb6da9aeb09d7d941f04efc1e999898bdcf2))

### [2.11.2](https://github.com/narmi/design_system/compare/v2.11.1...v2.11.2) (2022-04-08)

### Bug Fixes

- **Select:** minor style fixes; show example in Dialog ([f480546](https://github.com/narmi/design_system/commit/f480546a5b485a7a312b26e427e9d2754726a968))

### [2.11.1](https://github.com/narmi/design_system/compare/v2.11.0...v2.11.1) (2022-04-06)

### Bug Fixes

- **Tag:** font size should be xs ([a21be51](https://github.com/narmi/design_system/commit/a21be51b0c474656c81a8836be9005b42a40fac3))

## [2.11.0](https://github.com/narmi/design_system/compare/v2.10.0...v2.11.0) (2022-04-06)

### Features

- **Select:** add `value` prop to enable fully controlled mode ([44a443f](https://github.com/narmi/design_system/commit/44a443ffb58bb2b48182efc5f76f4f2c478a7a74))

## [2.10.0](https://github.com/narmi/design_system/compare/v2.9.0...v2.10.0) (2022-04-05)

### Features

- **Checkbox:** add `card` variant ([d0b52c5](https://github.com/narmi/design_system/commit/d0b52c5383a18beaebcc4be46b02e683d03fa0c8))

## [2.9.0](https://github.com/narmi/design_system/compare/v2.8.0...v2.9.0) (2022-03-31)

### Features

- **Tabs:** add `xPadding` prop to `Tabs.TabsList` ([68ae4a0](https://github.com/narmi/design_system/commit/68ae4a076b62236261a4a4bd38642d0fd09f3ccf))

## [2.8.0](https://github.com/narmi/design_system/compare/v2.7.4...v2.8.0) (2022-03-31)

### Features

- **Button:** add `kind="negative"` for negating action buttons ([0809841](https://github.com/narmi/design_system/commit/0809841f6674ffe8a446000a004a94c9e5d41657))

### [2.7.4](https://github.com/narmi/design_system/compare/v2.7.3...v2.7.4) (2022-03-31)

### Bug Fixes

- **Tag:** bump font size; fix height to 26px ([434fd2a](https://github.com/narmi/design_system/commit/434fd2a0a1dc5d6642912185450b7b8356d84722))

### [2.7.3](https://github.com/narmi/design_system/compare/v2.7.2...v2.7.3) (2022-03-31)

### Bug Fixes

- **Checkbox:** enable keyboard navigation for a11y ([75ce0d0](https://github.com/narmi/design_system/commit/75ce0d048e56d8c64fe48f08c26641cdf6a2033b))

### [2.7.2](https://github.com/narmi/design_system/compare/v2.7.1...v2.7.2) (2022-03-31)

### Bug Fixes

- **Button:** use secondary theme color for plain button ([a227ef9](https://github.com/narmi/design_system/commit/a227ef90e5271dc93205d6f6605a249c9f560918))

### [2.7.1](https://github.com/narmi/design_system/compare/v2.7.0...v2.7.1) (2022-03-31)

### Bug Fixes

- **RadioButtons:** fix keyboard navigation for a11y ([9376301](https://github.com/narmi/design_system/commit/9376301ddc740eabc6c8c8fd47a3e9cb33b061db))

## [2.7.0](https://github.com/narmi/design_system/compare/v2.6.1...v2.7.0) (2022-03-30)

### Features

- **ContentCard:** add ContentCard ([5f19bec](https://github.com/narmi/design_system/commit/5f19bec5729cc1ec4c9f224caf76c6e58dc20169))

### [2.6.1](https://github.com/narmi/design_system/compare/v2.6.0...v2.6.1) (2022-03-29)

### Bug Fixes

- **Toggle:** allow accessible labelling of Toggles ([39e0e28](https://github.com/narmi/design_system/commit/39e0e282c17eee2d40f41a8254054f748d52189e))

## [2.6.0](https://github.com/narmi/design_system/compare/v2.5.0...v2.6.0) (2022-03-25)

### Features

- **Select:** add `Select` component ([4ebc061](https://github.com/narmi/design_system/commit/4ebc06148e5bfc6f10121ef5519274d0c87f80ab))

## [2.5.0](https://github.com/narmi/design_system/compare/v2.4.1...v2.5.0) (2022-03-24)

### Features

- **DropdownTrigger:** add component for triggering popovers ([678ee0b](https://github.com/narmi/design_system/commit/678ee0be629a4b119e58fc3e257a587376986116))

### [2.4.1](https://github.com/narmi/design_system/compare/v2.4.0...v2.4.1) (2022-03-24)

### Bug Fixes

- **Popover:** add focus trap for a11y ([7952529](https://github.com/narmi/design_system/commit/7952529c40550ccd616cd04627b9246cd45ddba2))

## [2.4.0](https://github.com/narmi/design_system/compare/v2.3.4...v2.4.0) (2022-03-22)

### Features

- **helper-classes:** add border helpers ([5c84f3b](https://github.com/narmi/design_system/commit/5c84f3b6921a0831e91d2f9887a93c30339c7a4d))

### [2.3.4](https://github.com/narmi/design_system/compare/v2.3.3...v2.3.4) (2022-03-21)

### Bug Fixes

- **Button:** make secondary hover color consistent in all contexts ([e28ea39](https://github.com/narmi/design_system/commit/e28ea3988f3902e8bc0762c15377ed242b658c2f))

### [2.3.3](https://github.com/narmi/design_system/compare/v2.3.2...v2.3.3) (2022-03-21)

### Bug Fixes

- **Dialog:** add focus trap to prevent focusing hidden elements ([1e970c8](https://github.com/narmi/design_system/commit/1e970c88dca55b10f35fca1a94b462a1ed599519))

### [2.3.2](https://github.com/narmi/design_system/compare/v2.3.1...v2.3.2) (2022-03-16)

### Bug Fixes

- **Button:** remove uncessary role attr; update docs for anchor buttons ([f72784f](https://github.com/narmi/design_system/commit/f72784f62a7357180f5dcfb8db6c23a1122cf868))

### [2.3.1](https://github.com/narmi/design_system/compare/v2.3.0...v2.3.1) (2022-03-16)

### Bug Fixes

- **peers:** allow React 17 as a peer dependency ([64ba6f0](https://github.com/narmi/design_system/commit/64ba6f058e8477bfa3337c6cf00b7f5f400ed2af))

## [2.3.0](https://github.com/narmi/design_system/compare/v2.2.7...v2.3.0) (2022-03-14)

### Features

- **helper-classes:** add text flow control helpers ([d984d85](https://github.com/narmi/design_system/commit/d984d852bc563a0a6b3796782cff52db8da45aaa))

### [2.2.7](https://github.com/narmi/design_system/compare/v2.2.6...v2.2.7) (2022-03-11)

### Bug Fixes

- **Tag:** match tag height to default text height ([c94a2c0](https://github.com/narmi/design_system/commit/c94a2c0aea7c0b68eae519b0ac3d7873ca3dbbfc))

### [2.2.6](https://github.com/narmi/design_system/compare/v2.2.5...v2.2.6) (2022-03-10)

### Bug Fixes

- **helper-classes:** add default space axis helpers ([7e944c3](https://github.com/narmi/design_system/commit/7e944c32b3c56736dd62e41374fe69c9e6636ebb))

### [2.2.5](https://github.com/narmi/design_system/compare/v2.2.4...v2.2.5) (2022-03-07)

### Bug Fixes

- **helper-classes:** fix alignChild base selector to apply to any class order ([0c12774](https://github.com/narmi/design_system/commit/0c127740291fe7650f47c37c72ec2cac2fd242dd))

### [2.2.4](https://github.com/narmi/design_system/compare/v2.2.3...v2.2.4) (2022-03-07)

### Bug Fixes

- **Tag:** make themable; prevent auto height using inline-block display ([95686fd](https://github.com/narmi/design_system/commit/95686fd4f9d185dd46a61e37e304b7ca2967d36e))

### [2.2.3](https://github.com/narmi/design_system/compare/v2.2.2...v2.2.3) (2022-03-04)

### Bug Fixes

- **Dialog:** capture click events on shim to close modal ([cc9b7ea](https://github.com/narmi/design_system/commit/cc9b7eaf65f314c793543844e0de73637893c6c9))

### [2.2.2](https://github.com/narmi/design_system/compare/v2.2.1...v2.2.2) (2022-03-02)

### Bug Fixes

- **Pagination:** accommodate large numbers in page styles; address design feedback ([6439c8d](https://github.com/narmi/design_system/commit/6439c8dddd56b33de2c46b62e39e902e72b20134))

### [2.2.1](https://github.com/narmi/design_system/compare/v2.2.0...v2.2.1) (2022-03-01)

### Bug Fixes

- **TextInput:** use CSS grid for multiline autogrow ([5e184ec](https://github.com/narmi/design_system/commit/5e184ecc65c18beb6909fb18df23fb48fd99ac5e))

## [2.2.0](https://github.com/narmi/design_system/compare/v2.1.1...v2.2.0) (2022-02-28)

### Features

- **Button:** add `startIcon` and `endIcon` props for Button icons ([9e0b748](https://github.com/narmi/design_system/commit/9e0b7484600216aea2c2048ff72d56cc3c8605a5))

### [2.1.1](https://github.com/narmi/design_system/compare/v2.1.0...v2.1.1) (2022-02-25)

### Bug Fixes

- **helper-classes:** important all background color and spacing helpers ([e43b002](https://github.com/narmi/design_system/commit/e43b00234cd9a08c8d5f4e8e30b2030cd75cef66))

## [2.1.0](https://github.com/narmi/design_system/compare/v2.0.4...v2.1.0) (2022-02-25)

### Features

- **Tabs:** add `selectedIndex` prop to enable fully controlled Tabs ([33b0f73](https://github.com/narmi/design_system/commit/33b0f733805f8a61b7e33278eeea6b54136ed519))

### [2.0.4](https://github.com/narmi/design_system/compare/v2.0.3...v2.0.4) (2022-02-23)

### Bug Fixes

- **Dialog:** more robustly check if a click event target is not inside the Dialog, before calling dismiss method. ([e794182](https://github.com/narmi/design_system/commit/e794182677dbe5cdb3fee969f0d696fc895a6f4a))

### [2.0.3](https://github.com/narmi/design_system/compare/v2.0.2...v2.0.3) (2022-02-22)

### Bug Fixes

- **Dialog:** close dialog on click outside of content box ([c35fa0f](https://github.com/narmi/design_system/commit/c35fa0f64517a7fdc9b2120ba372156193982099))

### [2.0.2](https://github.com/narmi/design_system/compare/v2.0.1...v2.0.2) (2022-02-09)

### Bug Fixes

- **Input:** add margin between error message icon and text ([14dcd55](https://github.com/narmi/design_system/commit/14dcd550d07e84c227e61ea59a522b0f4d80dafe))

### [2.0.1](https://github.com/narmi/design_system/compare/v2.0.0...v2.0.1) (2022-02-08)

### Bug Fixes

- **Card:** don't pass iconSize prop to native elements, to avoid console warning ([b65c5b2](https://github.com/narmi/design_system/commit/b65c5b2e4d307158dadff47784f2957a6ce83615))

## [2.0.0](https://github.com/narmi/design_system/compare/v1.31.1...v2.0.0) (2022-02-01)

### ⚠ BREAKING CHANGES

- **Button:** rename `type` prop to `kind`
- **Button:** remove `className` support
- **Button:** render as button element by default
- **ButtonBar:** remove `ButtonBar` component
- remove `NavBar`, `Details` from available components
- **Checkbox:** rename export from `CheckBox` to `Checkbox`

### [1.31.1](https://github.com/narmi/design_system/compare/v1.31.0...v1.31.1) (2022-01-31)

### Bug Fixes

- **formatNumber:** use default NumberFormat behavior for percentage formatting ([5967149](https://github.com/narmi/design_system/commit/5967149e00ca9486929710a158d55e8ec771b8f5))

## [1.31.0](https://github.com/narmi/design_system/compare/v1.30.0...v1.31.0) (2022-01-28)

### Features

- **Tabs:** add `hadBorder` prop to provide border control ([d0f05eb](https://github.com/narmi/design_system/commit/d0f05eb6d885b99fc56665f6986dc1462347a06b))

## [1.30.0](https://github.com/narmi/design_system/compare/v1.29.2...v1.30.0) (2022-01-27)

### Features

- **formatters:** add formatDate utility function ([1c864cf](https://github.com/narmi/design_system/commit/1c864cffc232f90cc24856678515169beb5e9f82))

### [1.29.2](https://github.com/narmi/design_system/compare/v1.29.1...v1.29.2) (2022-01-27)

### Bug Fixes

- **Pagination:** render empty fragment when totalPages is 1 ([c4f3a95](https://github.com/narmi/design_system/commit/c4f3a957c73ee8afd0c9336c98f800ef79d7a2c6))

### [1.29.1](https://github.com/narmi/design_system/compare/v1.29.0...v1.29.1) (2022-01-26)

### Bug Fixes

- **dist:** fix main exports in dist ([808da3f](https://github.com/narmi/design_system/commit/808da3f420ccb69dce725f1bcfc0c8e8b52856f8))

## [1.29.0](https://github.com/narmi/design_system/compare/v1.28.1...v1.29.0) (2022-01-26)

### Features

- **formatters:** add value formatting helper functions ([2b43e9f](https://github.com/narmi/design_system/commit/2b43e9f903b3224a8473e4d3c27a4e67e34430a1))

### [1.28.1](https://github.com/narmi/design_system/compare/v1.28.0...v1.28.1) (2022-01-24)

### Bug Fixes

- **Dialog:** address design feedback ([cdc9dd0](https://github.com/narmi/design_system/commit/cdc9dd0dcb237da432371e7c5bb361bd08c1eed5))

## [1.28.0](https://github.com/narmi/design_system/compare/v1.27.2...v1.28.0) (2022-01-24)

### Features

- **typography:** add heading0 font size token with helper class ([ee2d644](https://github.com/narmi/design_system/commit/ee2d6440fe34ce18d4e33bb5ff151c06174f5e8f))

### [1.27.2](https://github.com/narmi/design_system/compare/v1.27.1...v1.27.2) (2022-01-20)

### [1.27.1](https://github.com/narmi/design_system/compare/v1.27.0...v1.27.1) (2022-01-19)

## [1.27.0](https://github.com/narmi/design_system/compare/v1.26.1...v1.27.0) (2022-01-14)

### Features

- **base-styles:** add reset and base CSS ([70002b0](https://github.com/narmi/design_system/commit/70002b0b5cd9ea95eaad9f6a588c94f7ba3e5d87))

### [1.26.1](https://github.com/narmi/design_system/compare/v1.26.0...v1.26.1) (2022-01-12)

### Bug Fixes

- **Dialog:** use heading color in dialog headting text ([75eb250](https://github.com/narmi/design_system/commit/75eb250748850231f067a8e18b4a6a1acbab4455))

## [1.26.0](https://github.com/narmi/design_system/compare/v1.25.0...v1.26.0) (2022-01-11)

### Features

- **LoadingSkeleton:** add component ([f3979d7](https://github.com/narmi/design_system/commit/f3979d7318a1e0193bfe014148c0273fc5da31bb))

## [1.25.0](https://github.com/narmi/design_system/compare/v1.24.6...v1.25.0) (2022-01-07)

### Features

- **Row:** add `justifyContent` prop ([2aad9d7](https://github.com/narmi/design_system/commit/2aad9d7ebd62e8f905628e4aeebe99888911216c))

### [1.24.6](https://github.com/narmi/design_system/compare/v1.24.5...v1.24.6) (2021-12-21)

### Bug Fixes

- sub-header style should display text as --nds-black ([ee0fc74](https://github.com/narmi/design_system/commit/ee0fc74aec9fd117c44eae4f7e8347d9dd82bedc))

### [1.24.5](https://github.com/narmi/design_system/compare/v1.24.4...v1.24.5) (2021-12-20)

### Bug Fixes

- **Button:** remove width restriction from plain button ([613fdff](https://github.com/narmi/design_system/commit/613fdff47aa3c9fc028aa8e3c8ea829179ffadc0))

### [1.24.4](https://github.com/narmi/design_system/compare/v1.24.3...v1.24.4) (2021-12-16)

### Bug Fixes

- **Tabs:** prevent state race condition with useEffect wrappers ([c5eb2a8](https://github.com/narmi/design_system/commit/c5eb2a88be4c10d12654741febc41a8bedc44a72))

### [1.24.3](https://github.com/narmi/design_system/compare/v1.24.2...v1.24.3) (2021-12-15)

### Bug Fixes

- **LoadingShim:** add z-index to absolutely positioend shim ([8d8a740](https://github.com/narmi/design_system/commit/8d8a740837ed01e0aa70f16f0fc484b31c604b5d))

### [1.24.2](https://github.com/narmi/design_system/compare/v1.24.1...v1.24.2) (2021-12-14)

### Bug Fixes

- **typography:** use correct vars from design tokens; fix heading color ([05614f9](https://github.com/narmi/design_system/commit/05614f9cafa89ec029edd0afc53e9f4badb24cb6))

### [1.24.1](https://github.com/narmi/design_system/compare/v1.24.0...v1.24.1) (2021-12-08)

### Bug Fixes

- **Pagination:** fix bad import in pagination component ([46b30bb](https://github.com/narmi/design_system/commit/46b30bb8f648d1709902f4be16347c7e208975c5))

## [1.24.0](https://github.com/narmi/design_system/compare/v1.23.0...v1.24.0) (2021-12-06)

### Features

- **Tabs:** add Tabs component ([70d99fe](https://github.com/narmi/design_system/commit/70d99feebfda7905f55d79e109a2dfc80fd324f6))

## [1.23.0](https://github.com/narmi/design_system/compare/v1.22.1...v1.23.0) (2021-12-03)

### Features

- **Toggle:** add Toggle component ([1820d64](https://github.com/narmi/design_system/commit/1820d647ed29e46e548ec3d6262686eb1f4f4beb))

### [1.22.1](https://github.com/narmi/design_system/compare/v1.22.0...v1.22.1) (2021-12-03)

### Bug Fixes

- **Button:** fix background of primary button when rendering as button element ([10a4801](https://github.com/narmi/design_system/commit/10a4801c2eca32cf0a2e1d3efe7d05ae3279e4bb))

## [1.22.0](https://github.com/narmi/design_system/compare/v1.21.2...v1.22.0) (2021-12-02)

### Features

- **Tokens:** add default RGB values for theme colors ([2eace7c](https://github.com/narmi/design_system/commit/2eace7c0b03f82e510bbf35e2ffc6067cf5fc980))

### [1.21.2](https://github.com/narmi/design_system/compare/v1.21.1...v1.21.2) (2021-12-02)

### Bug Fixes

- **Card:** don't render space inside icon element ([#438](https://github.com/narmi/design_system/issues/438)) ([9561dd0](https://github.com/narmi/design_system/commit/9561dd0d83aa43e8eeb936c9117fbf89d2564678))

### [1.21.1](https://github.com/narmi/design_system/compare/v1.21.0...v1.21.1) (2021-11-30)

### Bug Fixes

- **Dialog:** add minimum z-index to shim ([f5fe662](https://github.com/narmi/design_system/commit/f5fe6623b513b1ff972a425d6e5dd93c746db7d4))

## [1.21.0](https://github.com/narmi/design_system/compare/v1.20.2...v1.21.0) (2021-11-30)

### Features

- **Popover:** add generic Popover component ([dc65c45](https://github.com/narmi/design_system/commit/dc65c454055adc9c034d163e1b8a1c45f454134f))

### [1.20.2](https://github.com/narmi/design_system/compare/v1.20.1...v1.20.2) (2021-11-30)

### Bug Fixes

- **Pagination:** use recommended markup for a11y ([98f7b51](https://github.com/narmi/design_system/commit/98f7b511bd4db4f5dbaf6782cdda712e3b0585b4))

### [1.20.1](https://github.com/narmi/design_system/compare/v1.20.0...v1.20.1) (2021-11-30)

### Bug Fixes

- **Input:** ensure input box does not gain height on user type event ([4a7fbdc](https://github.com/narmi/design_system/commit/4a7fbdcaf8535c10a11107920172f671f27d1ed9))

## [1.20.0](https://github.com/narmi/design_system/compare/v1.19.0...v1.20.0) (2021-11-29)

### Features

- **Row:** add support for `as` prop in `Row` and `RowItem` ([54ba139](https://github.com/narmi/design_system/commit/54ba139e126caa910a5e146b1413f857fc7db43d))

## [1.19.0](https://github.com/narmi/design_system/compare/v1.18.0...v1.19.0) (2021-11-24)

### Features

- **SeparatorList:** add SeparatorList component ([eeaa5fe](https://github.com/narmi/design_system/commit/eeaa5fe79a4cd7ec60c2b62fa3c9bbc31623e43f))

## [1.18.0](https://github.com/narmi/design_system/compare/v1.17.0...v1.18.0) (2021-11-23)

### Features

- **Pagination:** add Pagination component ([a491bf5](https://github.com/narmi/design_system/commit/a491bf5272a52db28221102a3e192224ccd1157f))

## [1.17.0](https://github.com/narmi/design_system/compare/v1.16.0...v1.17.0) (2021-11-22)

### Features

- **Row:** add `Row` layout component ([1f5ca8b](https://github.com/narmi/design_system/commit/1f5ca8bae7b30088d3b31409ddfa52d054bd70c8))

## [1.16.0](https://github.com/narmi/design_system/compare/v1.15.0...v1.16.0) (2021-11-22)

### Features

- **helper-classes:** add color helpers for font and backgrounds ([62c7aa8](https://github.com/narmi/design_system/commit/62c7aa86a4d45a201f182a0f30b47c76c6a59c28))

## [1.15.0](https://github.com/narmi/design_system/compare/v1.14.0...v1.15.0) (2021-11-19)

### Features

- **Card:** allow passing in icon size ([5eb8f19](https://github.com/narmi/design_system/commit/5eb8f194a08237cec541263b5ce8e5a748db180c))
- **Card:** allow passing in icon size ([82bd362](https://github.com/narmi/design_system/commit/82bd36231a9741580a453593e5131e88d53ffd52))

## [1.14.0](https://github.com/narmi/design_system/compare/v1.13.0...v1.14.0) (2021-11-19)

### Features

- **Classes:** add spacing and font helper classes ([65b8e69](https://github.com/narmi/design_system/commit/65b8e69c115e672b6ea54d09bbd7385bcb83bd42))

## [1.13.0](https://github.com/narmi/design_system/compare/v1.12.1...v1.13.0) (2021-11-19)

### Features

- **Dialog:** add `Dialog` component ([dd9aefa](https://github.com/narmi/design_system/commit/dd9aefad18c1110d7ce42065997b24b5ceab0a8d))

### [1.12.1](https://github.com/narmi/design_system/compare/v1.12.0...v1.12.1) (2021-11-16)

### Bug Fixes

- **Button:** pass custom `className` string through ([d3c0def](https://github.com/narmi/design_system/commit/d3c0def1d26063797d562fa23d4825e57e0d6a9d))

## [1.12.0](https://github.com/narmi/design_system/compare/v1.11.0...v1.12.0) (2021-11-15)

### Features

- **Button:** add new variants - secondary, plain ([1b9217f](https://github.com/narmi/design_system/commit/1b9217ff94c8d369604b5b7ae7d035dafb32e268))

## [1.11.0](https://github.com/narmi/design_system/compare/v1.10.5...v1.11.0) (2021-11-09)

### Features

- **LoadingShim:** add component ([880812c](https://github.com/narmi/design_system/commit/880812cfd95d721e3d24ef4b3dc69cbcb2b02e37))

### [1.10.5](https://github.com/narmi/design_system/compare/v1.10.4...v1.10.5) (2021-11-08)

### Bug Fixes

- **RadioButtons:** properly set line height on label, and unchecked colour on checkbox ([#352](https://github.com/narmi/design_system/issues/352)) ([514df8b](https://github.com/narmi/design_system/commit/514df8b00c3d83120d860db77425ea91d55635ed))

### [1.10.4](https://github.com/narmi/design_system/compare/v1.10.3...v1.10.4) (2021-11-08)

### Bug Fixes

- **Input:** keep label margin consistent when focused, to avoid undesired shift on focus ([#351](https://github.com/narmi/design_system/issues/351)) ([6d94221](https://github.com/narmi/design_system/commit/6d942218494e7a09a5dfb2c514904bc3ebbc122c))

### [1.10.3](https://github.com/narmi/design_system/compare/v1.10.2...v1.10.3) (2021-11-08)

### Bug Fixes

- **Card:** remove box shadow from hoverable state ([#350](https://github.com/narmi/design_system/issues/350)) ([8ae2cd9](https://github.com/narmi/design_system/commit/8ae2cd9ad4bd2baee37b7ece76d850bf81e4a7fe))

### [1.10.2](https://github.com/narmi/design_system/compare/v1.10.1...v1.10.2) (2021-11-05)

### Bug Fixes

- **RadioButtons:** explicitly set font weight on label ([#347](https://github.com/narmi/design_system/issues/347)) ([af5044d](https://github.com/narmi/design_system/commit/af5044dd4438fbf013404f0a5067647245b3e978))

### [1.10.1](https://github.com/narmi/design_system/compare/v1.10.0...v1.10.1) (2021-11-05)

### Bug Fixes

- **Card:** set line height for header ([#346](https://github.com/narmi/design_system/issues/346)) ([f8fe7af](https://github.com/narmi/design_system/commit/f8fe7af7df650bc544bfdc1093fc36474a63592c))

## [1.10.0](https://github.com/narmi/design_system/compare/v1.9.2...v1.10.0) (2021-11-05)

### Features

- **TextInput:** add search input styling ([#332](https://github.com/narmi/design_system/issues/332)) ([fa18103](https://github.com/narmi/design_system/commit/fa18103730eaac95dcfe41878ac2968df3b800f8))

### [1.9.2](https://github.com/narmi/design_system/compare/v1.9.1...v1.9.2) (2021-11-04)

### Bug Fixes

- **Input:** make icon smaller if shown ([#330](https://github.com/narmi/design_system/issues/330)) ([15d591b](https://github.com/narmi/design_system/commit/15d591b9f7883f5efd75ceda1859386777e644da))

### [1.9.1](https://github.com/narmi/design_system/compare/v1.9.0...v1.9.1) (2021-11-04)

### Bug Fixes

- **Input:** increase space very slightly between label and input value ([93a69f4](https://github.com/narmi/design_system/commit/93a69f408a479af8beb2b65f75de220ebe26d89a))

## [1.9.0](https://github.com/narmi/design_system/compare/v1.8.0...v1.9.0) (2021-11-04)

### Features

- **Tooltip:** add prop to control styling behavior of trigger wrapper ([2e0354c](https://github.com/narmi/design_system/commit/2e0354cd86136f0a855cd12b2f98c4f92fab27de))

## [1.8.0](https://github.com/narmi/design_system/compare/v1.7.5...v1.8.0) (2021-11-03)

### Features

- add Tooltip to dist; add 'admin user' icon ([510ff35](https://github.com/narmi/design_system/commit/510ff3584f6c8cd90121b40ea81c599eaa0a2d67))

### [1.7.5](https://github.com/narmi/design_system/compare/v1.7.4...v1.7.5) (2021-11-02)

### Bug Fixes

- **Button, PlainButton:** prevent props.className from overriding calculated className ([#316](https://github.com/narmi/design_system/issues/316)) ([00060b8](https://github.com/narmi/design_system/commit/00060b8391c38b8e9a6d40d6976e163b7753bd70))

### [1.7.4](https://github.com/narmi/design_system/compare/v1.7.3...v1.7.4) (2021-11-02)

### Bug Fixes

- **Modal:** padding around dismiss icon should be 12px ([#312](https://github.com/narmi/design_system/issues/312)) ([598e1ad](https://github.com/narmi/design_system/commit/598e1ad7e52bfcc1a5ff63607380583b0d7e1450))

### [1.7.3](https://github.com/narmi/design_system/compare/v1.7.2...v1.7.3) (2021-11-01)

### Bug Fixes

- remove tooltip from dist ([a6dd180](https://github.com/narmi/design_system/commit/a6dd18092ee7dd2e9814687dbbb9f2ec34195b97))

### [1.7.2](https://github.com/narmi/design_system/compare/v1.7.1...v1.7.2) (2021-11-01)

### Bug Fixes

- make Tooltip importable ([3cecda8](https://github.com/narmi/design_system/commit/3cecda89ed90e8ee4ef0ba6355d06636cd39eed2))

### [1.7.1](https://github.com/narmi/design_system/compare/v1.7.0...v1.7.1) (2021-11-01)

### Bug Fixes

- **Modal:** condition showing action row element on if actions are passed in ([#306](https://github.com/narmi/design_system/issues/306)) ([3dacefd](https://github.com/narmi/design_system/commit/3dacefd1242487dcf2afccde806934fa3deb5ca8))

## [1.7.0](https://github.com/narmi/design_system/compare/v1.6.0...v1.7.0) (2021-10-28)

### Features

- **Modal:** add styles and support for wide detail modals ([#280](https://github.com/narmi/design_system/issues/280)) ([5f6bbf5](https://github.com/narmi/design_system/commit/5f6bbf546dc518f24cc93bae746a81d5b91391c0))

## [1.6.0](https://github.com/narmi/design_system/compare/v1.5.0...v1.6.0) (2021-10-28)

### Features

- **RadioButtons:** add RadioButtons ([#294](https://github.com/narmi/design_system/issues/294)) ([9e77354](https://github.com/narmi/design_system/commit/9e77354bfbf118e79e319f7f742c6fafdb28a658))

## [1.5.0](https://github.com/narmi/design_system/compare/v1.4.5...v1.5.0) (2021-10-28)

### Features

- add Tooltip component ([8bc6e0c](https://github.com/narmi/design_system/commit/8bc6e0cfcd456eed6b0b3578f6a706f2c47308d3))

### [1.4.5](https://github.com/narmi/design_system/compare/v1.4.4...v1.4.5) (2021-10-27)

### Bug Fixes

- remove optimizeLegibility for headers ([#289](https://github.com/narmi/design_system/issues/289)) ([24883dd](https://github.com/narmi/design_system/commit/24883dde4ef847cb4c2a7f71d8609080a43f8c82))

### [1.4.4](https://github.com/narmi/design_system/compare/v1.4.3...v1.4.4) (2021-10-27)

### Bug Fixes

- **Button:** set font size to 16px for PlainButton ([#287](https://github.com/narmi/design_system/issues/287)) ([d9887cd](https://github.com/narmi/design_system/commit/d9887cd41d8eadf01cd4e6d40021d25058ca22ea))

### [1.4.3](https://github.com/narmi/design_system/compare/v1.4.2...v1.4.3) (2021-10-27)

### Bug Fixes

- **DateInput:** increase space between input element and calendar ([#288](https://github.com/narmi/design_system/issues/288)) ([ac448c7](https://github.com/narmi/design_system/commit/ac448c7ade66cb0dc0e73b99cafae92e3fc6353c))

### [1.4.2](https://github.com/narmi/design_system/compare/v1.4.1...v1.4.2) (2021-10-27)

### Bug Fixes

- **Input:** set font weight for value to 400 ([#286](https://github.com/narmi/design_system/issues/286)) ([cf165c5](https://github.com/narmi/design_system/commit/cf165c5c3848b6061c3ab4e786f2a7c9402b1f65))

### [1.4.1](https://github.com/narmi/design_system/compare/v1.4.0...v1.4.1) (2021-10-27)

### Bug Fixes

- **Modal:** hide scrollbar space if not needed ([#285](https://github.com/narmi/design_system/issues/285)) ([1a0c522](https://github.com/narmi/design_system/commit/1a0c522eb48592e7621c1027dded7eea1109063c))

## [1.4.0](https://github.com/narmi/design_system/compare/v1.3.2...v1.4.0) (2021-10-27)

### Features

- **Modal:** allow setting maxWidth CSS property on modal container ([b67a6c1](https://github.com/narmi/design_system/commit/b67a6c1dc2d34fdc5f9515d80b6494137f4ffda4))

### [1.3.2](https://github.com/narmi/design_system/compare/v1.3.1...v1.3.2) (2021-10-26)

### Bug Fixes

- **Card:** set font size inside card content to be 16px ([#283](https://github.com/narmi/design_system/issues/283)) ([292b205](https://github.com/narmi/design_system/commit/292b20522e9851e0de2fea6e0af0501d11086f00))

### [1.3.1](https://github.com/narmi/design_system/compare/v1.3.0...v1.3.1) (2021-10-25)

### Bug Fixes

- **Input:** set line height and lower font weight ([#276](https://github.com/narmi/design_system/issues/276)) ([c10646e](https://github.com/narmi/design_system/commit/c10646e47a3083532fd59e549d98372d9c2d86a5))

## [1.3.0](https://github.com/narmi/design_system/compare/v1.2.1...v1.3.0) (2021-10-19)

### Features

- **DateInput:** expose dateFormat prop ([319f298](https://github.com/narmi/design_system/commit/319f298dfdd5e392f24983508ff28747e6688ce7))

### [1.2.1](https://github.com/narmi/design_system/compare/v1.2.0...v1.2.1) (2021-10-19)

### Bug Fixes

- **Modal:** limit height of modal, and allow for vertical scroll ([#250](https://github.com/narmi/design_system/issues/250)) ([eb37832](https://github.com/narmi/design_system/commit/eb37832e636628bd4f05404c728784283b750baa))

## [1.2.0](https://github.com/narmi/design_system/compare/v1.1.1...v1.2.0) (2021-10-19)

### Features

- **DateInput:** allow defaultDate to be set; document all prop types ([e0b726b](https://github.com/narmi/design_system/commit/e0b726b0d54cceb556964c58cac17fd45de46d2e))

### [1.1.1](https://github.com/narmi/design_system/compare/v1.1.0...v1.1.1) (2021-10-19)

### Bug Fixes

- **Modal:** continue to support closing modal via handleClose prop ([#246](https://github.com/narmi/design_system/issues/246)) ([1017d5c](https://github.com/narmi/design_system/commit/1017d5cbd3a55d229856733e30654dc91be79a51))

## [1.1.0](https://github.com/narmi/design_system/compare/v1.0.0...v1.1.0) (2021-10-18)

### Features

- **DateInput:** add `disableDays` prop for disabling dates ([d7dd43a](https://github.com/narmi/design_system/commit/d7dd43acbf6eb01356fb4a2ea2e1ec850633f154))

## [1.0.0](https://github.com/narmi/design_system/compare/v0.2.0...v1.0.0) (2021-10-12)

### ⚠ BREAKING CHANGES

- remove dist dir from versioning

### Code Refactoring

- remove dist dir from versioning ([9f6bca4](https://github.com/narmi/design_system/commit/9f6bca47b70cee488ec483528fec74563a2f5755))

## [0.2.0](https://github.com/narmi/design_system/compare/v0.1.0...v0.2.0) (2021-10-12)

### Features

- force first release ([e9d223d](https://github.com/narmi/design_system/commit/e9d223d019e4da380f2aa3739628b85933993973))
- update release github token ([b5f932f](https://github.com/narmi/design_system/commit/b5f932ff5a8258b4144b5b228078a059ca03915d))
- use workflow dispatch for releases for now ([7b99b70](https://github.com/narmi/design_system/commit/7b99b700cf2f275aa1725bc6ddcf0c34cad727db))
