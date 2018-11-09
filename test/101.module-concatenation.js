
const assert = require('assert');
const concatenation = require('../src/concatenation.js');


describe("Module concatenation.js", function() {


	// concatenation

	describe("concatenation", function() {

		it("is loaded by require", function() {
			assert.notEqual(concatenation, null);
		});

		it("is an object", function() {
			assert.equal(typeof concatenation, 'object');
		});

	});



	// concatenation.init

	describe("concatenation.init", function() {

		it("exists", function() {
			assert.notEqual(concatenation.init, null);
		});

		it("is a function", function() {
			assert.equal(typeof concatenation.init, 'function');
		});

	});



	// wrap()

	describe("concatenation.wrap", function() {

		it("exists", function() {
			assert.notEqual(concatenation.wrap, null);
		});

		it("is a function", function() {
			assert.equal(typeof concatenation.wrap, 'function');
		});

	});



	// separator()

	describe("concatenation.separator", function() {

		it("exists", function() {
			assert.notEqual(concatenation.separator, null);
		});

		it("is a function", function() {
			assert.equal(typeof concatenation.separator, 'function');
		});

	});


});
