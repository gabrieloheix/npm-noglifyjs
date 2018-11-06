
const assert = require('assert');
const noglifyjs = require('../index.js');


describe("require", function() {

	describe("Module", function() {

		it("can be loaded using require", function() {
			assert.notEqual(noglifyjs, null);
		});

	});

});
