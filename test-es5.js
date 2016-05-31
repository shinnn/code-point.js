process.env.TEST_ON_ES5 = true;
delete String.prototype.codePointAt;

require('./test.js');
