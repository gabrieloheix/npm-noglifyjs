# npm-noglifyjs

Concatenation tool for JavaScript files not minifying anything.

Useful for debugging purpose as it is adding a semi-colon character in between files content.

---

## Usage

### Command line

Concat all files into one - without minifying:

	$ noglifyjs -o output.js js/*.js

Adding optional new lines and file names:

	$ noglifyjs -o output.js --newlines --filenames js/*.js

Redirect everything to ```stdout```:

	$ noglifyjs js/*.js

Use ```stdin``` as input:

	$ noglifyjs < js/unique.js

### Using require

Concat all files into one - without minifying:

	const noglifyjs = require('noglifyjs');

	// TODO needs refactoring

---

## Install

### Global install

TODO  
To install globally, use option ```-g```:

	$ npm install -g noglifyjs

### Local install

TODO  
To install the module locally only:

	$ npm install noglifyjs
	$ ln -s node_modules/noglifyjs/bin/noglifyjs

---

## Examples

The following examples will use those 2 input files.

File ```hello.js```:

	(function() {
		document.addEventListener('DOMContentLoaded', function() {
			console.log("Hello world!");
		});
	})()

File ```bonjour.js```:

	(function() {
		document.addEventListener('DOMContentLoaded', function() {
			console.log("Bonjour le monde !");
		});
	})()

### Basic example

Command:

	$ noglifyjs -o debug.js hello.js bonjour.js


Output file ```debug.js```:

	(function() {
		document.addEventListener('DOMContentLoaded', function() {
			console.log("Hello world!");
		});
	})()
	;
	(function() {
		document.addEventListener('DOMContentLoaded', function() {
			console.log("Bonjour le monde !");
		});
	})()

### Example with option 'filenames'

Command:

	$ noglifyjs -o filenames.js --filenames hello.js bonjour.js


Output file ```filenames.js```:

		
	// ### hello.js

	(function() {
		document.addEventListener('DOMContentLoaded', function() {
			console.log("Hello world!");
		});
	})()

	// ### end of hello.js

	; // file separator

	// ### bonjour.js

	(function() {
		document.addEventListener('DOMContentLoaded', function() {
			console.log("Bonjour le monde !");
		});
	})()

	// ### end of bonjour.js


---
Author: _Gabriel Oheix_
