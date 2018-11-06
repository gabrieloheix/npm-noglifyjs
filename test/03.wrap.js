
const assert = require('assert');
const os = require("os");

const noglifyjs = require('../index.js');


describe("require", function() {

	describe("wrap()", function() {

		it("is a function", function() {
			assert.strictEqual(typeof noglifyjs.wrap, 'function');
		});

		it("returns the content if option 'filenames' is missing", function() {
			noglifyjs.init();
			assert.strictEqual(noglifyjs.wrap('file1.js', 'content1'), 'content1');
		});

		it("returns the content if option 'filenames' is false", function() {
			noglifyjs.init({filenames: false});
			assert.strictEqual(noglifyjs.wrap('file1.js', 'content1'), 'content1');
		});

		it("does not return the content if option 'filenames' is true", function() {
			noglifyjs.init({filenames: true});
			assert.notEqual(noglifyjs.wrap('file1.js', 'content1'), 'content1');
		});

		it("returns the content wrapped with filenames", function() {
			noglifyjs.init({filenames: true});
			const expected = os.EOL
				+ '// ### file1.js' + os.EOL
				+ os.EOL
				+ 'content1' + os.EOL
				+ os.EOL
				+ '// ### end of file1.js' + os.EOL
				+ os.EOL;
			assert.strictEqual(noglifyjs.wrap('file1.js', 'content1'), expected);
		});

	});

});
