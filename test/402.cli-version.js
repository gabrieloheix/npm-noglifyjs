
const assert = require('assert');
const os = require("os");
const { execFile } = require('child_process');

const packagejson = require('../package.json');


describe("Command Line - Version", function() {


	// noglify-js -V

	describe("noglify-js -V", function() {

		it("is a string", function(done) {
			execFile('./bin/noglify-js', ['-V'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("is of semver format", function(done) {
			execFile('./bin/noglify-js', ['-V'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(true, /^(\d+)\.(\d+)\.(\d+)/.test(stdout), "Version mismatch: " + stdout);
			}
		});

		it("is matching package.json", function(done) {
			execFile('./bin/noglify-js', ['-V'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, packagejson.version + os.EOL);
			}
		});

	});



	// noglify-js --version

	describe("noglify-js --version", function() {

		it("is a string", function(done) {
			execFile('./bin/noglify-js', ['--version'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(typeof stdout, 'string');
			}
		});

		it("is of semver format", function(done) {
			execFile('./bin/noglify-js', ['--version'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(true, /^(\d+)\.(\d+)\.(\d+)/.test(stdout), "Version mismatch: " + stdout);
			}
		});

		it("is matching package.json", function(done) {
			execFile('./bin/noglify-js', ['--version'], {}, callback);
			function callback(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, packagejson.version + os.EOL);
			}
		});

	});


});
