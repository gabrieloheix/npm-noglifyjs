
const assert = require('assert');
const os = require("os");

const noglify = require('../src/noglify.js');


describe("noglify() - Option 'newlines'", function() {


	// object inputs

	describe("with object inputs", function() {

		it("and option 'newlines' is false", function() {
			const obj1 = { filename: "filename1.js", content: "var _ = 1;" };
			const obj2 = { filename: "filename2.js", content: "var _ = 2;" };
			const inputs = [ obj1, obj2 ];
			const expected = "var _ = 1;" + os.EOL
				+ ";" + os.EOL
				+ "var _ = 2;";
			const result = noglify(inputs, { newlines: false });
			assert.strictEqual(result, expected);
		});

		it("and option 'newlines' is true", function() {
			const obj1 = { filename: "filename1.js", content: "var _ = 1;" };
			const obj2 = { filename: "filename2.js", content: "var _ = 2;" };
			const inputs = [ obj1, obj2 ];
			const expected = "var _ = 1;" + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ ";" + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ "var _ = 2;";
			const result = noglify(inputs, { newlines: true });
			assert.strictEqual(result, expected);
		});

	});



	// content (string) inputs

	describe("with content (string) inputs", function() {

		it("and option 'newlines' is false", function() {
			const content1 = "var _ = 1;";
			const content2 = "var _ = 2;";
			const inputs = [ content1, content2 ];
			const expected = "var _ = 1;" + os.EOL
				+ ";" + os.EOL
				+ "var _ = 2;";
			const result = noglify(inputs, { newlines: false });
			assert.strictEqual(result, expected);
		});

		it("and option 'newlines' is true", function() {
			const content1 = "var _ = 1;";
			const content2 = "var _ = 2;";
			const inputs = [ content1, content2 ];
			const expected = "var _ = 1;" + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ ";" + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ "var _ = 2;";
			const result = noglify(inputs, { newlines: true });
			assert.strictEqual(result, expected);
		});

	});


});
