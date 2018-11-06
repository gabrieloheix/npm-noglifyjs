
const assert = require('assert');
const os = require("os");
const child_process = require('child_process');

const packagejson = require('../package.json');


describe("command line", function() {

	describe("version", function() {

		it("is a string", function(done) {
			child_process.execFile('./bin/noglifyjs', ['--version'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(typeof stdout, 'string');
			});
		});

		it("is of semver format", function(done) {
			child_process.execFile('./bin/noglifyjs', ['--version'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.equal(true, /(\d+)\.(\d+)\.(\d+)/.test(stdout), "Version provided: " + stdout);
			});
		});

		it("is matching package.json", function(done) {
			child_process.execFile('./bin/noglifyjs', ['--version'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(stdout, packagejson.version + os.EOL);
			});
		});

	});

});
