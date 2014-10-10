/*jshint unused:true */
'use strict';

var requireUncached = require('require-uncached');
var test = require('tape');

var codePoint;

function runTest(t) {
  t.plan(6);

  t.equals(
    codePoint('0'), 48,
    'should return a UTF-16-encoded code point of the character.'
  );

  t.equals(
    codePoint('\ud800\udc00'), 65536,
    'should return a code point value of the character which uses a surrogate pair.'
  );

  t.equals(
    codePoint('\udbffa'), 56319,
    'should return a code point value of the string\'s first character.'
  );

  t.throws(
    codePoint.bind(null), /TypeError/,
    'should throw a type error when it takes no arguments.'
  );

  t.throws(
    codePoint.bind(null, 1), /TypeError/,
    'should throw a type error when the argument is not a string.'
  );

  t.throws(
    codePoint.bind(null, ''), /empty/,
    'should throw an error when the argument is an empty string.'
  );
}

test('codePoint()', function(t) {
  codePoint = requireUncached('./');
  runTest(t);
});

test('codePoint() on ES6+ environment', function(t) {
  require('string.prototype.codepointat');
  codePoint = requireUncached('./');
  runTest(t);
});
