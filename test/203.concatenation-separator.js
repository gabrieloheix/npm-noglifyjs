
const assert = require('assert');
const os = require("os");

const concatenation = require('../src/concatenation.js');


describe("separator()", function() {


	// no option

	describe("without option", function() {

		it("as empty option", function() {
			concatenation.init({});
			const sep = concatenation.separator();
			const expected = os.EOL
				+ ";" + os.EOL;
			assert.strictEqual(sep, expected);
		});

		it("as missing option", function() {
			concatenation.init();
			const sep = concatenation.separator();
			const expected = os.EOL
				+ ";" + os.EOL;
			assert.strictEqual(sep, expected);
		});

	});



	// 1 option

	describe("with 1 option", function() {

		it("'filenames' being false", function() {
			concatenation.init({ filenames: false });
			const sep = concatenation.separator();
			const expected = os.EOL
				+ ";" + os.EOL;
			assert.strictEqual(sep, expected);
		});

		it("'filenames' being true", function() {
			concatenation.init({ filenames: true });
			const sep = concatenation.separator();
			const expected = "; // file separator" + os.EOL;
			assert.strictEqual(sep, expected);
		});

		it("'newlines' being false", function() {
			concatenation.init({ newlines: false });
			const sep = concatenation.separator();
			const expected = os.EOL
				+ ";" + os.EOL;
			assert.strictEqual(sep, expected);
		});

		it("'newlines' being true", function() {
			concatenation.init({ newlines: true });
			const sep = concatenation.separator();
			const expected = os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ ";" + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL;
			assert.strictEqual(sep, expected);
		});

	});



	// 2 options

	describe("with 2 options", function() {

		it("'filenames' being false and 'newlines' being false", function() {
			concatenation.init({ filenames: false, newlines: false });
			const sep = concatenation.separator();
			const expected = os.EOL
				+ ";" + os.EOL;
			assert.strictEqual(sep, expected);
		});

		it("'filenames' being true and 'newlines' being false", function() {
			concatenation.init({ filenames: true, newlines: false });
			const sep = concatenation.separator();
			const expected = "; // file separator" + os.EOL;
			assert.strictEqual(sep, expected);
		});

		it("'filenames' being false and 'newlines' being true", function() {
			concatenation.init({ filenames: false, newlines: true });
			const sep = concatenation.separator();
			const expected = os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ ";" + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL;
			assert.strictEqual(sep, expected);
		});

		it("'filenames' being true and 'newlines' being true", function() {
			concatenation.init({ filenames: true, newlines: true });
			const sep = concatenation.separator();
			const expected = os.EOL
				+ os.EOL
				+ os.EOL
				+ "; // file separator" + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL;
			assert.strictEqual(sep, expected);
		});

	});


});
