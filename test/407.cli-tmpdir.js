
const assert = require('assert');
const os = require('os');
const fs = require('fs');


describe("Command Line - tmpdir", function() {


	// tmpdir

	describe("os.tmpdir", function() {

		it("exists", function() {
			assert.notEqual(os.tmpdir, null);
		});

		it("is a function", function() {
			assert.equal(typeof os.tmpdir, 'function');
		});

	});



	// writeFileSync

	describe("fs.writeFileSync", function() {

		it("exists", function() {
			assert.notEqual(fs.writeFileSync, null);
		});

		it("is a function", function() {
			assert.equal(typeof fs.writeFileSync, 'function');
		});

	});



	// existsSync

	describe("fs.existsSync", function() {

		it("exists", function() {
			assert.notEqual(fs.existsSync, null);
		});

		it("is a function", function() {
			assert.equal(typeof fs.existsSync, 'function');
		});

	});



	// readFileSync

	describe("fs.readFileSync", function() {

		it("exists", function() {
			assert.notEqual(fs.readFileSync, null);
		});

		it("is a function", function() {
			assert.equal(typeof fs.readFileSync, 'function');
		});

	});



	// unlinkSync

	describe("fs.unlinkSync", function() {

		it("exists", function() {
			assert.notEqual(fs.unlinkSync, null);
		});

		it("is a function", function() {
			assert.equal(typeof fs.unlinkSync, 'function');
		});

	});



	// example

	describe("example noglifyjs-unit-test-example.js", function() {

		it("tmpdir()", function() {
			const tmpdir = os.tmpdir();
			assert.equal(typeof tmpdir, 'string');
			assert.strictEqual(tmpdir.length > 2, true);
		});

		it("create file", function() {
			const file = os.tmpdir() + '/noglifyjs-unit-test-example.js';
			fs.writeFileSync(file, "file created");
		});

		it("file exists", function() {
			const file = os.tmpdir() + '/noglifyjs-unit-test-example.js';
			assert.strictEqual(fs.existsSync(file), true);
		});

		it("delete file", function() {
			const file = os.tmpdir() + '/noglifyjs-unit-test-example.js';
			fs.unlinkSync(file);
		});

		it("file has been deleted", function() {
			const file = os.tmpdir() + '/noglifyjs-unit-test-example.js';
			assert.strictEqual(fs.existsSync(file), false);
		});

	});


});
