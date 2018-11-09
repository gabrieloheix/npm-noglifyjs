
const assert = require('assert');
const os = require("os");
const { execFile } = require('child_process');
const { Readable } = require('stream');



const content1 = 
`(function() {
	var _ = 1;
})()`;



describe("Command Line - STDIN", function() {


	// No option

	describe("without option", function() {

		it("is outputting a string", function(done) {
			const child = execFile('./bin/noglify-js', [], {}, callback);
			pipe(child.stdin, content1);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("is outputting stdin content", function(done) {
			const child = execFile('./bin/noglify-js', [], {}, callback);
			pipe(child.stdin, content1);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, content1);
			}
		});

	});



	// Option --newlines

	describe("with option --newlines", function() {

		it("is outputting a string", function(done) {
			const child = execFile('./bin/noglify-js', ['--newlines'], {}, callback);
			pipe(child.stdin, content1);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("is outputting stdin content", function(done) {
			const child = execFile('./bin/noglify-js', ['--newlines'], {}, callback);
			pipe(child.stdin, content1);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, content1);
			}
		});

	});



	// Option --filenames

	describe("with option --filenames", function() {

		it("is outputting a string", function(done) {
			const child = execFile('./bin/noglify-js', ['--filenames'], {}, callback);
			pipe(child.stdin, content1);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("is outputting stdin content", function(done) {
			const expected = os.EOL
				+ '// ### stdin' + os.EOL
				+ os.EOL
				+ content1 + os.EOL
				+ os.EOL
				+ '// ### end of stdin' + os.EOL
				+ os.EOL;
			const child = execFile('./bin/noglify-js', ['--filenames'], {}, callback);
			pipe(child.stdin, content1);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, expected);
			}
		});

	});



	// Options --newlines and --filenames

	describe("with options --newlines and --filenames", function() {

		it("is outputting a string", function(done) {
			const child = execFile('./bin/noglify-js', ['--newlines', '--filenames'], {}, callback);
			pipe(child.stdin, content1);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("is outputting stdin content", function(done) {
			const expected = os.EOL
				+ '// ### stdin' + os.EOL
				+ os.EOL
				+ content1 + os.EOL
				+ os.EOL
				+ '// ### end of stdin' + os.EOL
				+ os.EOL;
			const child = execFile('./bin/noglify-js', ['--newlines', '--filenames'], {}, callback);
			pipe(child.stdin, content1);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, expected);
			}
		});

	});


});


function pipe(stdin, content) {
	const readable = Readable();
	readable.push(content);
	readable.push(null); // end of the stream
	readable.pipe(stdin);
}
