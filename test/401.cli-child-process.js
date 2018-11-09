
const assert = require('assert');
const child_process = require('child_process');
const { execFile } = require('child_process');


describe("Command Line - Simulator", function() {


	// child_process

	describe("child_process", function() {

		it("is loaded by require", function() {
			assert.notEqual(child_process, null);
		});

		it("is an object", function() {
			assert.equal(typeof child_process, 'object');
		});

	});



	// child_process.execFile

	describe("child_process.execFile", function() {

		it("exists", function() {
			assert.notEqual(child_process.execFile, null);
		});

		it("is a function", function() {
			assert.equal(typeof child_process.execFile, 'function');
		});

	});



	// execFile

	describe("execFile", function() {

		it("exists", function() {
			assert.notEqual(execFile, null);
		});

		it("is a function", function() {
			assert.equal(typeof execFile, 'function');
		});

	});


});
