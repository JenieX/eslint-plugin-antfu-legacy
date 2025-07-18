# eslint-plugin-antfu

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

Anthony extended ESLint rules. For [antfu/eslint-config](https://github.com/antfu/eslint-config).

[Rules List](./src/rules)

## Installation

Install the eslint-plugin-antfu-legacy package:

```
npm i eslint-plugin-antfu-legacy -D
```

In your config .eslintrc.cjs:

```js
// .eslintrc.cjs
module.exports = {
  plugins: ['antfu-legacy'],
  rules: {
    'antfu-legacy/consistent-chaining': 2,
    'antfu-legacy/top-level-function': 2,
  },
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023-PRESENT [Anthony Fu](https://github.com/antfu)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/eslint-plugin-antfu?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/eslint-plugin-antfu
[npm-downloads-src]: https://img.shields.io/npm/dm/eslint-plugin-antfu?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/eslint-plugin-antfu
