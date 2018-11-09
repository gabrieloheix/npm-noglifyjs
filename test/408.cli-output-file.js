
const assert = require('assert');
const os = require("os");
const { execFile } = require('child_process');
const fs = require("fs");



const tmpfile = os.tmpdir() + '/noglifyjs-unit-test-output.js';

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



describe("Command Line - output file", function() {


	// No option

	describe("without option", function() {

		it("with 1 file does not raise an error", function(done) {
			execFile('./bin/noglify-js', ['-o', tmpfile, file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
			}
		});

		it("with 1 file is creating the output file", function(done) {
			execFile('./bin/noglify-js', ['-o', tmpfile, file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.existsSync(tmpfile), true);
			}
		});

		it("with 1 file is creating file with correct content", function(done) {
			execFile('./bin/noglify-js', ['-o', tmpfile, file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.readFileSync(tmpfile, "utf8"), content1);
			}
		});

		it("with 2 files is creating file with correct content", function(done) {
			const expected = content1 + os.EOL
				+ ';' + os.EOL
				+ content2;
			execFile('./bin/noglify-js', ['-o', tmpfile, file1, file2], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.readFileSync(tmpfile, "utf8"), expected);
			}
		});

	});



	// Option --newlines

	describe("with option --newlines", function() {

		it("with 1 file does not raise an error", function(done) {
			execFile('./bin/noglify-js', ['-o', tmpfile, '--newlines', file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
			}
		});

		it("with 1 file is creating the output file", function(done) {
			execFile('./bin/noglify-js', ['-o', tmpfile, '--newlines', file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.existsSync(tmpfile), true);
			}
		});

		it("with 1 file is creating file with correct content", function(done) {
			execFile('./bin/noglify-js', ['-o', tmpfile, '--newlines', file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.readFileSync(tmpfile, "utf8"), content1);
			}
		});

		it("with 2 files is creating file with correct content", function(done) {
			const expected = content1 + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ ';' + os.EOL
				+ os.EOL
				+ os.EOL
				+ os.EOL
				+ content2;
			execFile('./bin/noglify-js', ['-o', tmpfile, '--newlines', file1, file2], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.readFileSync(tmpfile, "utf8"), expected);
			}
		});

	});



	// Option --filenames

	describe("with option --filenames", function() {

		it("with 1 file does not raise an error", function(done) {
			execFile('./bin/noglify-js', ['-o', tmpfile, '--filenames', file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
			}
		});

		it("with 1 file is creating the output file", function(done) {
			execFile('./bin/noglify-js', ['-o', tmpfile, '--filenames', file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.existsSync(tmpfile), true);
			}
		});

		it("with 1 file is creating file with correct content", function(done) {
			const expected = os.EOL
				+ '// ### test/examples/one.js' + os.EOL
				+ os.EOL
				+ content1 + os.EOL
				+ os.EOL
				+ '// ### end of test/examples/one.js' + os.EOL
				+ os.EOL;
			execFile('./bin/noglify-js', ['-o', tmpfile, '--filenames', file1], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.readFileSync(tmpfile, "utf8"), expected);
			}
		});

		it("with 2 files is creating file with correct content", function(done) {
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
			execFile('./bin/noglify-js', ['-o', tmpfile, '--filenames', file1, file2], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.readFileSync(tmpfile, "utf8"), expected);
			}
		});

	});



	// Options --newlines and --filenames

	describe("with options --newlines and --filenames", function() {

		it("with 1 file does not raise an error", function(done) {
			execFile('./bin/noglify-js', ['--newlines', '--filenames', file1, '-o', tmpfile], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
			}
		});

		it("with 1 file is creating the output file", function(done) {
			execFile('./bin/noglify-js', ['--newlines', '--filenames', file1, '-o', tmpfile], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.existsSync(tmpfile), true);
			}
		});

		it("with 1 file is creating file with correct content", function(done) {
			const expected = os.EOL
				+ '// ### test/examples/one.js' + os.EOL
				+ os.EOL
				+ content1 + os.EOL
				+ os.EOL
				+ '// ### end of test/examples/one.js' + os.EOL
				+ os.EOL;
			execFile('./bin/noglify-js', ['--newlines', '--filenames', file1, '-o', tmpfile], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.existsSync(tmpfile), true);
			}
		});

		it("with 2 files is creating file with correct content", function(done) {
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
			execFile('./bin/noglify-js', ['--newlines', '--filenames', file1, file2, '-o', tmpfile], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(fs.existsSync(tmpfile), true);
			}
		});

	});



	afterEach('delete file ' + tmpfile, function() {
		fs.unlinkSync(tmpfile);
	});


});
