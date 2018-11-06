
const assert = require('assert');
const os = require("os");
const child_process = require('child_process');


describe("command line", function() {

	describe("2 input files", function() {

		it("renders as a basic semi-colon separated output", function(done) {
			child_process.execFile('./bin/noglifyjs', ['./test/one.js', './test/two.js'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				const expected = "var one = 1;" + os.EOL
					+ ";" + os.EOL
					+ "var two = 2;";
				assert.strictEqual(stdout, expected);
			});
		});

		it("renders as a semi-colon with comment and filenames separated output", function(done) {
			child_process.execFile('./bin/noglifyjs', ['--filenames', './test/one.js', './test/two.js'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				const expected = os.EOL
					+ "// ### ./test/one.js" + os.EOL
					+ os.EOL
					+ "var one = 1;" + os.EOL
					+ os.EOL
					+ "// ### end of ./test/one.js" + os.EOL
					+ os.EOL
					+ "; // file separator" + os.EOL
					+ os.EOL
					+ "// ### ./test/two.js" + os.EOL
					+ os.EOL
					+ "var two = 2;" + os.EOL
					+ os.EOL
					+ "// ### end of ./test/two.js" + os.EOL
					+ os.EOL;
				assert.strictEqual(stdout, expected);
			});
		});

		it("renders as a semi-colon with newlines separated output", function(done) {
			child_process.execFile('./bin/noglifyjs', ['--newlines', './test/one.js', './test/two.js'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				const expected = "var one = 1;" + os.EOL
					+ os.EOL
					+ os.EOL
					+ os.EOL
					+ ";" + os.EOL
					+ os.EOL
					+ os.EOL
					+ os.EOL
					+ "var two = 2;";
				assert.strictEqual(stdout, expected);
			});
		});

		it("renders as a semi-colon with comment, filenames and newlines separated output", function(done) {
			child_process.execFile('./bin/noglifyjs', ['--filenames', '--newlines', './test/one.js', './test/two.js'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				const expected = os.EOL
					+ "// ### ./test/one.js" + os.EOL
					+ os.EOL
					+ "var one = 1;" + os.EOL
					+ os.EOL
					+ "// ### end of ./test/one.js" + os.EOL
					+ os.EOL
					+ os.EOL
					+ os.EOL
					+ os.EOL
					+ "; // file separator" + os.EOL
					+ os.EOL
					+ os.EOL
					+ os.EOL
					+ os.EOL
					+ "// ### ./test/two.js" + os.EOL
					+ os.EOL
					+ "var two = 2;" + os.EOL
					+ os.EOL
					+ "// ### end of ./test/two.js" + os.EOL
					+ os.EOL;
				assert.strictEqual(stdout, expected);
			});
		});

	});

});
