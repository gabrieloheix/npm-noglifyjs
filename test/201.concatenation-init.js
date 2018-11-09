
const assert = require('assert');
const concatenation = require('../src/concatenation.js');


describe("init()", function() {


	// no option

	describe("without option", function() {

		it("as empty option", function() {
			concatenation.init({});
		});

		it("as missing option", function() {
			concatenation.init();
		});

	});



	// 1 option

	describe("with 1 option", function() {

		it("'newlines' being false", function() {
			concatenation.init({ newlines: false });
		});

		it("'newlines' being true", function() {
			concatenation.init({ newlines: true });
		});

		it("'filenames' being false", function() {
			concatenation.init({ filenames: false });
		});

		it("'filenames' being true", function() {
			concatenation.init({ filenames: true });
		});

	});



	// 2 options

	describe("with 2 options", function() {

		it("'filenames' being false and 'newlines' being false", function() {
			concatenation.init({ filenames: false, newlines: false });
		});

		it("'filenames' being true and 'newlines' being false", function() {
			concatenation.init({ filenames: true, newlines: false });
		});

		it("'filenames' being false and 'newlines' being true", function() {
			concatenation.init({ filenames: false, newlines: true });
		});

		it("'filenames' being true and 'newlines' being true", function() {
			concatenation.init({ filenames: true, newlines: true });
		});

	});


});
