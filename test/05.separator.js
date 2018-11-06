
const assert = require('assert');
const os = require("os");

const noglifyjs = require('../index.js');


describe("require", function() {

	describe("separator()", function() {

		it("is a function", function() {
			assert.strictEqual(typeof noglifyjs.separator, 'function');
		});

		it("returns a basic semi-colon", function() {
			const expected = os.EOL
				+ ';' + os.EOL;
			noglifyjs.init();
			assert.strictEqual(noglifyjs.separator(), expected);
		});


		// filenames

		it("returns a basic semi-colon if option 'filenames' is missing", function() {
			const expected = os.EOL
				+ ';' + os.EOL;
			noglifyjs.init({});
			assert.strictEqual(noglifyjs.separator(), expected);
		});

		it("returns a basic semi-colon if option 'filenames' is false", function() {
			const expected = os.EOL
				+ ';' + os.EOL;
			noglifyjs.init({filenames: false});
			assert.strictEqual(noglifyjs.separator(), expected);
		});

		it("returns a semi-colon with comment if option 'filenames' is true", function() {
			const expected = '; // file separator' + os.EOL;
			noglifyjs.init({filenames: true});
			assert.strictEqual(noglifyjs.separator(), expected);
		});


		// newlines

		it("returns a basic semi-colon if option 'newlines' is missing", function() {
			const expected = os.EOL
				+ ';' + os.EOL;
			noglifyjs.init({});
			assert.strictEqual(noglifyjs.separator(), expected);
		});

		it("returns a basic semi-colon if option 'newlines' is false", function() {
			const expected = os.EOL
				+ ';' + os.EOL;
			noglifyjs.init({newlines: false});
			assert.strictEqual(noglifyjs.separator(), expected);
		});

		it("returns a semi-colon with extra lines if option 'newlines' is true", function() {
			const expected = os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ ';' + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL;
			noglifyjs.init({newlines: true});
			assert.strictEqual(noglifyjs.separator(), expected);
		});


		// newlines & filenames

		it("returns a basic semi-colon if option 'newlines' is false and 'filenames' is false", function() {
			const expected = os.EOL
				+ ';' + os.EOL;
			noglifyjs.init({newlines: false, filenames: false});
			assert.strictEqual(noglifyjs.separator(), expected);
		});

		it("returns a semi-colon with extra lines if option 'newlines' is true and 'filenames' is false", function() {
			const expected = os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ ';' + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL;
			noglifyjs.init({newlines: true, filenames: false});
			assert.strictEqual(noglifyjs.separator(), expected);
		});

		it("returns a semi-colon with comment if option 'newlines' is false and 'filenames' is true", function() {
			const expected = '; // file separator' + os.EOL;
			noglifyjs.init({newlines: false, filenames: true});
			assert.strictEqual(noglifyjs.separator(), expected);
		});

		it("returns a semi-colon with comment and extra lines if option 'newlines' is true and 'filenames' is true", function() {
			const expected = os.EOL
				+ os.EOL
				+ os.EOL
				+ '; // file separator' + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL;
			noglifyjs.init({newlines: true, filenames: true});
			assert.strictEqual(noglifyjs.separator(), expected);
		});

	});

});
