
const assert = require('assert');
const stream = require('stream');
const { Readable } = require('stream');


describe("Command Line - stdin stream", function() {


	// stream

	describe("stream", function() {

		it("is loaded by require", function() {
			assert.notEqual(stream, null);
		});

		it("is a function", function() {
			assert.equal(typeof stream, 'function');
		});

	});



	// stream.Readable

	describe("stream.Readable", function() {

		it("exists", function() {
			assert.notEqual(stream.Readable, null);
		});

		it("is a function", function() {
			assert.equal(typeof stream.Readable, 'function');
		});

	});



	// Readable

	describe("Readable", function() {

		it("exists", function() {
			assert.notEqual(Readable, null);
		});

		it("is a function", function() {
			assert.equal(typeof Readable, 'function');
		});

	});



	// new Readable()

	describe("new Readable()", function() {

		it("can run", function() {
			new Readable();
		});

		it("creates an object", function() {
			const obj = new Readable();
			assert.equal(typeof obj, 'object');
		});

	});


});
