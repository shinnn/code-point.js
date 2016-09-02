'use strict';

const requireFromString = require('require-from-string');
const {rollup} = require('rollup');
const {test} = require('tap');

function runTest(description, fn) {
  test(`${description}${'TEST_ON_ES5' in process.env ? ' on ES5 environment' : ''}`, t => {
    t.strictEqual(
      fn('0'),
      48,
      description + 'return a UTF-16-encoded code point of the character.'
    );

    t.strictEqual(
      fn('\ud800\udc00'),
      65536,
      'should return a code point of the character which uses a surrogate pair.'
    );

    t.strictEqual(
      fn('\udbffa'),
      56319,
      'should return a code point value of the string\'s first character.'
    );

    t.throws(
      () => fn(),
      /undefined is not a string\. Argument must be a string\./,
      'should throw a type error when it takes no arguments.'
    );

    t.throws(
      () => fn(1),
      /1 is not a string\. Argument must be a string\./,
      'should throw a type error when the argument is not a string.'
    );

    t.throws(
      () => fn(''),
      /empty/,
      'should throw an error when the argument is an empty string.'
    );

    t.end();
  });
}

rollup({entry: require('./package.json')['jsnext:main']}).then(bundle => {
  runTest('require(\'code-point\')', require('.'));

  global.window = {};
  require('./' + require('./bower.json').main);

  runTest('window.codePoint', global.window.codePoint);

  runTest('Module exports', requireFromString(bundle.generate({format: 'cjs'}).code, 'indedx.jsnext.js'));
});
