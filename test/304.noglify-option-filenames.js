
const assert = require('assert');
const os = require("os");

const noglify = require('../src/noglify.js');


describe("noglify() - Option 'filenames'", function() {


	// object inputs

	describe("with object inputs", function() {

		it("and option 'filenames' is false", function() {
			const obj1 = { filename: "filename1.js", content: "var _ = 1;" };
			const obj2 = { filename: "filename2.js", content: "var _ = 2;" };
			const inputs = [ obj1, obj2 ];
			const expected = "var _ = 1;" + os.EOL
				+ ";" + os.EOL
				+ "var _ = 2;";
			const result = noglify(inputs, { filenames: false });
			assert.strictEqual(result, expected);
		});

		it("and option 'filenames' is true", function() {
			const obj1 = { filename: "filename1.js", content: "var _ = 1;" };
			const obj2 = { filename: "filename2.js", content: "var _ = 2;" };
			const inputs = [ obj1, obj2 ];
			const expected = os.EOL
				+ "// ### filename1.js" + os.EOL
				+ os.EOL
				+ "var _ = 1;" + os.EOL
				+ os.EOL
				+ "// ### end of filename1.js" + os.EOL
				+ os.EOL
				+ "; // file separator" + os.EOL
				+ os.EOL
				+ "// ### filename2.js" + os.EOL
				+ os.EOL
				+ "var _ = 2;" + os.EOL
				+ os.EOL
				+ "// ### end of filename2.js" + os.EOL
				+ os.EOL;
			const result = noglify(inputs, { filenames: true });
			assert.strictEqual(result, expected);
		});

	});



	// content (string) inputs

	describe("with content (string) inputs", function() {

		it("and option 'filenames' is false", function() {
			const content1 = "var _ = 1;";
			const content2 = "var _ = 2;";
			const inputs = [ content1, content2 ];
			const expected = "var _ = 1;" + os.EOL
				+ ";" + os.EOL
				+ "var _ = 2;";
			const result = noglify(inputs, { filenames: false });
			assert.strictEqual(result, expected);
		});

		it("and option 'filenames' is true", function() {
			const content1 = "var _ = 1;";
			const content2 = "var _ = 2;";
			const inputs = [ content1, content2 ];
			assert.throws(function() {
				noglify(inputs, { filenames: true });
			}, /Option 'filenames' in on but parameter filename is missing/);
		});

	});


});
