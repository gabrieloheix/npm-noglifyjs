
const assert = require('assert');

const noglifyjs = require('../index.js');


describe("require", function() {

	describe("create_obj()", function() {

		it("is a function", function() {
			assert.strictEqual(typeof noglifyjs.create_obj, 'function');
		});

		it("returns an object with correct filename", function() {
			const obj = noglifyjs.create_obj('file1.js', 'content1');
			assert.strictEqual(obj.filename, 'file1.js');
		});

		it("returns an object with correct content", function() {
			const obj = noglifyjs.create_obj('file1.js', 'content1');
			assert.strictEqual(obj.content, 'content1');
		});

	});

});
