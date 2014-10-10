# code-point.js

[![Build Status](https://travis-ci.org/shinnn/code-point.js.svg?branch=master)](https://travis-ci.org/shinnn/code-point.js)
[![Build status](https://ci.appveyor.com/api/projects/status/riy7hl0n8e2vprch?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/code-point-js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/code-point.js.svg)](https://coveralls.io/r/shinnn/code-point.js)
[![devDependency Status](https://david-dm.org/shinnn/code-point.js/dev-status.svg)](https://david-dm.org/shinnn/code-point.js#info=devDependencies)

Get a [UTF-16](http://wikipedia.org/wiki/UTF-16)-encoded code point number of a character

```javascript
codePoint('A'); //=> 65
'A'.charCodeAt(0); //=> 65

codePoint('嶲'); //=> 195060
'嶲'.charCodeAt(0); //=> 55422
```

## Installation

### Package managers

#### [npm](https://www.npmjs.org/) [![NPM version](https://badge.fury.io/js/code-point.svg)](https://www.npmjs.org/package/code-point)

```sh
npm i --save code-point
```

#### [Bower](http://bower.io/) [![Bower version](https://badge.fury.io/bo/code-point.svg)](https://github.com/shinnn/code-point.js/releases)

```sh
bower i --save code-point
```

#### [Duo](http://duojs.org/)

```javascript
var codePoint = require('shinnn/code-point.js');
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/code-point.js/master/dist/code-point.js)

## API

### codePoint(*character*)

*character*: `String`  
Return: `Number`

If it takes a string as an argument, it returns the same result of `character.codePointAt(0)`.

It throws an error if the argument is not a string or the string is empty.

```javascript
codePoint('\udada'); //=> 56026
codePoint('\udada\udfdf'); //=> 814047
```

It works even if the [`String`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) object doesn't have [codePointAt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) method as its prototype.

## Credit

This module includes the code of [mathiasbynens](https://github.com/mathiasbynens) / [String.prototype.codePointAt](https://github.com/mathiasbynens/String.prototype.codePointAt). Thanks, [Mathias Bynens][mathias].

## Licenses

### [String.prototype.codePointAt](https://github.com/mathiasbynens/String.prototype.codePointAt#license)

Author: [Mathias Bynens][mathias]

> This polyfill is available under the [MIT](http://opensource.org/licenses/mit-license.php) license.

### code-point.js

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](https://github.com/shinnn/code-point/blob/master/LICENSE.md#code-pointjs).

[mathias]: https://mathiasbynens.be/
