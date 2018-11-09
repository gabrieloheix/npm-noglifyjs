
const assert = require('assert');
const noglify = require('../src/noglify.js');


describe("noglify() - Error", function() {


	// error raised

	describe("an error is raised", function() {

		it("when inputs is omitted", function() {
			assert.throws(function() {
				noglify();
			}, Error);
		});

		it("when inputs is an object", function() {
			assert.throws(function() {
				noglify({});
			}, Error);
		});

		it("when inputs is a string", function() {
			assert.throws(function() {
				noglify("");
			}, Error);
		});

		it("when inputs is null", function() {
			assert.throws(function() {
				noglify(null);
			}, Error);
		});

		it("when options is a string", function() {
			assert.throws(function() {
				noglify([], "x");
			}, Error);
		});

		it("when options is an array", function() {
			assert.throws(function() {
				noglify([], []);
			}, Error);
		});

		it("when inputs item is a number", function() {
			assert.throws(function() {
				noglify([1]);
			}, Error);
		});

		it("when inputs item is a function", function() {
			assert.throws(function() {
				noglify([function() {}]);
			}, Error);
		});

	});



	// error message 

	describe("error message is correct", function() {

		it("when inputs is omitted", function() {
			assert.throws(function() {
				noglify();
			}, /noglify\(\): First parameter needs to be an array of string\/object/);
		});

		it("when inputs is an object", function() {
			assert.throws(function() {
				noglify({});
			}, /noglify\(\): First parameter needs to be an array of string\/object/);
		});

		it("when inputs is a string", function() {
			assert.throws(function() {
				noglify("");
			}, /noglify\(\): First parameter needs to be an array of string\/object/);
		});

		it("when inputs is null", function() {
			assert.throws(function() {
				noglify(null);
			}, /noglify\(\): First parameter needs to be an array of string\/object/);
		});

		it("when options is a string", function() {
			assert.throws(function() {
				noglify([], "x");
			}, /noglify\(\): Second parameter can be omitted but otherwise needs to be an object/);
		});

		it("when options is an array", function() {
			assert.throws(function() {
				noglify([], []);
			}, /noglify\(\): Second parameter can be omitted but otherwise needs to be an object/);
		});

		it("when inputs item is a number", function() {
			assert.throws(function() {
				noglify([1]);
			}, /noglify\(\): First parameter items needs to be a string or an object with fields 'filename' and 'content'/);
		});

		it("when inputs item is a function", function() {
			assert.throws(function() {
				noglify([function() {}]);
			}, /noglify\(\): First parameter items needs to be a string or an object with fields 'filename' and 'content'/);
		});

	});


});
