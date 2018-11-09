
const assert = require('assert');
//const os = require("os");
const { execFile } = require('child_process');


describe("Command Line - Help", function() {


	// noglifyjs -h

	describe("noglifyjs -h", function() {

		it("is a string", function(done) {
			execFile('./bin/noglify-js', ['-h'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("contains Usage", function(done) {
			execFile('./bin/noglify-js', ['-h'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("Usage"),
					-1, "Substring is missing");
			}
		});

		it("contains Usage parameters", function(done) {
			execFile('./bin/noglify-js', ['-h'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("[files...|STDIN]"),
					-1, "Substring is missing");
			}
		});

		it("contains Usage parameters", function(done) {
			execFile('./bin/noglify-js', ['-h'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("Output file (default STDOUT)"),
					-1, "Substring is missing");
			}
		});

		it("contains Usage parameters", function(done) {
			execFile('./bin/noglify-js', ['-h'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("Add comments lines with file names"),
					-1, "Substring is missing");
			}
		});

		it("contains Usage parameters", function(done) {
			execFile('./bin/noglify-js', ['-h'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("Add extra new lines"),
					-1, "Substring is missing");
			}
		});

	});



	// noglifyjs --help

	describe("noglifyjs --help", function() {

		it("is a string", function(done) {
			execFile('./bin/noglify-js', ['--help'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("contains Usage", function(done) {
			execFile('./bin/noglify-js', ['--help'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("Usage"),
					-1, "Substring is missing");
			}
		});

		it("contains Usage parameters", function(done) {
			execFile('./bin/noglify-js', ['--help'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("[files...|STDIN]"),
					-1, "Substring is missing");
			}
		});

		it("contains Usage parameters", function(done) {
			execFile('./bin/noglify-js', ['--help'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("Output file (default STDOUT)"),
					-1, "Substring is missing");
			}
		});

		it("contains Usage parameters", function(done) {
			execFile('./bin/noglify-js', ['--help'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("Add comments lines with file names"),
					-1, "Substring is missing");
			}
		});

		it("contains Usage parameters", function(done) {
			execFile('./bin/noglify-js', ['--help'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("Add extra new lines"),
					-1, "Substring is missing");
			}
		});

	});


});
