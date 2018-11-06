
const assert = require('assert');
const child_process = require('child_process');


describe("command line", function() {

	describe("help", function() {

		it("is a string", function(done) {
			child_process.execFile('./bin/noglifyjs', ['--help'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.strictEqual(typeof stdout, 'string');
			});
		});

		it("contains command usage", function(done) {
			child_process.execFile('./bin/noglifyjs', ['--help'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("Usage: noglifyjs [options] [files...|STDIN]"), -1,
					"Help displayed:\n" + stdout);
			});
		});

		it("contains '--output' option", function(done) {
			child_process.execFile('./bin/noglifyjs', ['--help'], {}, function(error, stdout, stderr) {
				done();
				assert.equal(error, null);
				assert.notEqual(stdout.indexOf("-o"), -1,
					"Help displayed:\n" + stdout);
				assert.notEqual(stdout.indexOf("--output <file>"), -1,
					"Help displayed:\n" + stdout);
				assert.notEqual(stdout.indexOf("Output file (default STDOUT)"), -1,
					"Help displayed:\n" + stdout);
			});
		});

	});

});
