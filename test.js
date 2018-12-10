'use strict';

const clearModule = require('clear-module');
const test = require('tape');

for (const es5 of [false, true]) {
	test(`codePoint()${es5 ? ' on ES5 environment' : ''}`, t => {
		if (es5) {
			delete String.prototype.codePointAt;
			clearModule('.');
		}

		const codePoint = require('.');

		t.equal(
			codePoint('0'),
			48,
			'should return a UTF-16-encoded code point of the character.'
		);

		t.equal(
			codePoint('\ud800\udc00'),
			65536,
			'should return a code point of the character which uses a surrogate pair.'
		);

		t.equal(
			codePoint('\udbffa'),
			56319,
			'should return a code point value of the string\'s first character.'
		);

		t.throws(
			() => codePoint(),
			/undefined is not a string\. Argument must be a string\./u,
			'should throw a type error when it takes no arguments.'
		);

		t.throws(
			() => codePoint(1),
			/1 is not a string\. Argument must be a string\./u,
			'should throw a type error when the argument is not a string.'
		);

		t.throws(
			() => codePoint(''),
			/empty/u,
			'should throw an error when the argument is an empty string.'
		);

		t.end();
	});
}
