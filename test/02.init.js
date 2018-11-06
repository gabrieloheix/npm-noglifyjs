
const assert = require('assert');

const noglifyjs = require('../index.js');


describe("require", function() {

	describe("init()", function() {

		it("is a function", function() {
			assert.strictEqual(typeof noglifyjs.init, 'function');
		});

	});

});
