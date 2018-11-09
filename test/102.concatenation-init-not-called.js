
const assert = require('assert');
const concatenation = require('../src/concatenation.js');


describe("Error init() not called", function() {


	// wrap()

	describe("but wrap() called", function() {

		it("with empty option", function() {
			assert.throws(function() {
				concatenation.wrap("filename1.js", "var _ = 1;");
			}, /init\(\) has not been called/);
		});

		it("with missing option", function() {
			assert.throws(function() {
				concatenation.wrap("filename1.js", "var _ = 1;");
			}, /init\(\) has not been called/);
		});

	});



	// separator()

	describe("but separator() called", function() {

		it("with empty option", function() {
			assert.throws(function() {
				concatenation.wrap("filename1.js", "var _ = 1;");
			}, /init\(\) has not been called/);
		});

		it("with missing option", function() {
			assert.throws(function() {
				concatenation.wrap("filename1.js", "var _ = 1;");
			}, /init\(\) has not been called/);
		});

	});


});
