
const assert = require('assert');
const child_process = require('child_process');


describe("command line", function() {

	describe("child_process", function() {

		it("can be loaded using require", function() {
			assert.notEqual(child_process, null);
		});

		it("can call ls", function() {
			child_process.exec('ls');
			assert.strictEqual(typeof child_process, 'object');
		});

	});

});
