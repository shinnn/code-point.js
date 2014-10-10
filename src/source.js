'use strict';

var getCodePoint;

if (String.prototype.codePointAt) {
  getCodePoint = function codePoint(str) {
    return str.codePointAt(0);
  };
} else {
  getCodePoint = function codePoint(str) {
    var first = str.charCodeAt(0);
    if (first >= 0xD800 && first <= 0xDBFF && str.length > 1) {
      var second = str.charCodeAt(1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }
    return first;
  };
}

function codePoint(str) {
  if (typeof str !== 'string') {
    throw new TypeError(str + ' is not a string.');
  }
  if (!str.length) {
    throw new Error('Argument should be non-empty string.');
  }

  return getCodePoint(str);
}