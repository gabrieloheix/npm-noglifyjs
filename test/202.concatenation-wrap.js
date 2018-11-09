
const assert = require('assert');
const os = require("os");

const concatenation = require('../src/concatenation.js');


describe("wrap()", function() {


	// no option

	describe("without option", function() {

		it("as empty option", function() {
			concatenation.init({});
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = "var _ = 1;";
			assert.strictEqual(wrapped, expected);
		});

		it("as missing option", function() {
			concatenation.init();
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = "var _ = 1;";
			assert.strictEqual(wrapped, expected);
		});

	});



	// 1 option

	describe("with 1 option", function() {

		it("'filenames' being false", function() {
			concatenation.init({ filenames: false });
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = "var _ = 1;";
			assert.strictEqual(wrapped, expected);
		});

		it("'filenames' being true", function() {
			concatenation.init({ filenames: true });
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = os.EOL
				+ '// ### filename1.js' + os.EOL
				+ os.EOL
				+ 'var _ = 1;' + os.EOL
				+ os.EOL
				+ '// ### end of filename1.js' + os.EOL
				+ os.EOL;
			assert.strictEqual(wrapped, expected);
		});

		it("'newlines' being false", function() {
			concatenation.init({ newlines: false });
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = "var _ = 1;";
			assert.strictEqual(wrapped, expected);
		});

		it("'newlines' being true", function() {
			concatenation.init({ newlines: true });
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = "var _ = 1;";
			assert.strictEqual(wrapped, expected);
		});

	});



	// 2 options

	describe("with 2 options", function() {

		it("'filenames' being false and 'newlines' being false", function() {
			concatenation.init({ filenames: false, newlines: false });
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = "var _ = 1;";
			assert.strictEqual(wrapped, expected);
		});

		it("'filenames' being true and 'newlines' being false", function() {
			concatenation.init({ filenames: true, newlines: false });
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = os.EOL
				+ '// ### filename1.js' + os.EOL
				+ os.EOL
				+ 'var _ = 1;' + os.EOL
				+ os.EOL
				+ '// ### end of filename1.js' + os.EOL
				+ os.EOL;
			assert.strictEqual(wrapped, expected);
		});

		it("'filenames' being false and 'newlines' being true", function() {
			concatenation.init({ filenames: false, newlines: true });
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = "var _ = 1;";
			assert.strictEqual(wrapped, expected);
		});

		it("'filenames' being true and 'newlines' being true", function() {
			concatenation.init({ filenames: true, newlines: true });
			const wrapped = concatenation.wrap("filename1.js", "var _ = 1;");
			const expected = os.EOL
				+ '// ### filename1.js' + os.EOL
				+ os.EOL
				+ 'var _ = 1;' + os.EOL
				+ os.EOL
				+ '// ### end of filename1.js' + os.EOL
				+ os.EOL;
			assert.strictEqual(wrapped, expected);
		});

	});


});
