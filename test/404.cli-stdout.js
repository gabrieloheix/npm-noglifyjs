
const assert = require('assert');
const os = require("os");
const { execFile } = require('child_process');



const file1 = 'test/examples/one.js'
const content1 = 
`(function() {
	var _ = 1;
})()`;

const file2 = 'test/examples/two.js'
const content2 = 
`(function() {
	var _ = 2;
})()`;



describe("Command Line - STDOUT", function() {


	// No option

	describe("without option", function() {

		it("with 1 file is outputting a string", function(done) {
			execFile('./bin/noglify-js', [file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("with 1 file is outputting file content", function(done) {
			execFile('./bin/noglify-js', [file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, content1);
			}
		});

		it("with 2 files is outputting the concatenated content", function(done) {
			const expected = content1 + os.EOL
				+ ';' + os.EOL
				+ content2;
			execFile('./bin/noglify-js', [file1, file2], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, expected);
			}
		});

	});



	// Option --newlines

	describe("with option --newlines", function() {

		it("with 1 file is outputting a string", function(done) {
			execFile('./bin/noglify-js', [file1, '--newlines'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("with 1 file is outputting file content", function(done) {
			execFile('./bin/noglify-js', [file1, '--newlines'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, content1);
			}
		});

		it("with 2 files is outputting the concatenated content", function(done) {
			const expected = content1 + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ ';' + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ content2;
			execFile('./bin/noglify-js', [file1, file2, '--newlines'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, expected);
			}
		});

	});



	// Option --filenames

	describe("with option --filenames", function() {

		it("with 1 file is outputting a string", function(done) {
			execFile('./bin/noglify-js', [file1, '--filenames'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("with 1 file is outputting file content", function(done) {
			const expected = os.EOL
				+ '// ### test/examples/one.js' + os.EOL
				+ os.EOL
				+ content1 + os.EOL
				+ os.EOL
				+ '// ### end of test/examples/one.js' + os.EOL
				+ os.EOL;
			execFile('./bin/noglify-js', [file1, '--filenames'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, expected);
			}
		});

		it("with 2 files is outputting the concatenated content", function(done) {
			const expected = os.EOL
				+ '// ### test/examples/one.js' + os.EOL
				+ os.EOL
				+ content1 + os.EOL
				+ os.EOL
				+ '// ### end of test/examples/one.js' + os.EOL
				+ os.EOL
				+ '; // file separator' + os.EOL
				+ os.EOL
				+ '// ### test/examples/two.js' + os.EOL
				+ os.EOL
				+ content2 + os.EOL
				+ os.EOL
				+ '// ### end of test/examples/two.js' + os.EOL
				+ os.EOL;
			execFile('./bin/noglify-js', [file1, file2, '--filenames'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, expected);
			}
		});

	});



	// Options --newlines and --filenames

	describe("with options --newlines and --filenames", function() {

		it("with 1 file is outputting a string", function(done) {
			execFile('./bin/noglify-js', [file1, '--newlines', '--filenames'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("with 1 file is outputting file content", function(done) {
			const expected = os.EOL
				+ '// ### test/examples/one.js' + os.EOL
				+ os.EOL
				+ content1 + os.EOL
				+ os.EOL
				+ '// ### end of test/examples/one.js' + os.EOL
				+ os.EOL;
			execFile('./bin/noglify-js', [file1, '--newlines', '--filenames'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, expected);
			}
		});

		it("with 2 files is outputting the concatenated content", function(done) {
			const expected = os.EOL
				+ '// ### test/examples/one.js' + os.EOL
				+ os.EOL
				+ content1 + os.EOL
				+ os.EOL
				+ '// ### end of test/examples/one.js' + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ '; // file separator' + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ '// ### test/examples/two.js' + os.EOL
				+ os.EOL
				+ content2 + os.EOL
				+ os.EOL
				+ '// ### end of test/examples/two.js' + os.EOL
				+ os.EOL;
			execFile('./bin/noglify-js', [file1, file2, '--newlines', '--filenames'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, expected);
			}
		});

	});


});
