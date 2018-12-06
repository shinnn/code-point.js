# code-point

[![npm version](https://img.shields.io/npm/v/code-point.svg)](https://www.npmjs.com/package/code-point)
[![Build Status](https://travis-ci.com/shinnn/code-point.js.svg?branch=master)](https://travis-ci.com/shinnn/code-point.js)
[![Coverage Status](https://coveralls.io/github/shinnn/code-point.js)

Get a [UTF-16](https://wikipedia.org/wiki/UTF-16)-encoded code point number of a character

```javascript
'A'.charCodeAt(0); //=> 65
codePoint('A'); //=> 65

'嶲'.charCodeAt(0); //=> 55422
codePoint('嶲'); //=> 195060
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install code-point
```

## API

```javascript
import codePoint from 'code-point';
```

### codePoint(*character*)

*character*: `string`  
Return: `number`

If it takes a string as an argument, it returns the same result of `character.codePointAt(0)`.

It throws an error if the argument is not a string or the string is empty.

```javascript
codePoint('\udada'); //=> 56026
codePoint('\udada\udfdf'); //=> 814047
```

It works correctly even in ECMAScript <= 5 environments that don't support  [`String.prototype.codePointAt`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt).

## Credit

This module includes the code of [mathiasbynens](https://github.com/mathiasbynens) / [String.prototype.codePointAt](https://github.com/mathiasbynens/String.prototype.codePointAt). Thanks, [Mathias Bynens][mathias].

## Licenses

### [String.prototype.codePointAt](https://github.com/mathiasbynens/String.prototype.codePointAt#license)

Author: [Mathias Bynens][mathias]

> This polyfill is available under the [MIT](https://opensource.org/licenses/mit-license) license.

### code-point

Copyright (c) 2014 - 2018 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](https://github.com/shinnn/code-point/blob/master/LICENSES.md#code-pointjs).

[mathias]: https://mathiasbynens.be/
