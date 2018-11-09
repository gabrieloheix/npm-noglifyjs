
const assert = require('assert');
const noglify = require('../src/noglify.js');


describe("Module noglify.js", function() {


	// noglify

	describe("noglify", function() {

		it("is loaded by require", function() {
			assert.notEqual(noglify, null);
		});

		it("is a function", function() {
			assert.equal(typeof noglify, 'function');
		});

	});


});
