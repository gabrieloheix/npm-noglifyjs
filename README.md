# noglify-js

[![npm version](https://badge.fury.io/js/noglify-js.svg)](https://badge.fury.io/js/noglify-js)
[![Build Status](https://travis-ci.org/gabrieloheix/npm-noglifyjs.svg?branch=master)](https://travis-ci.org/gabrieloheix/npm-noglifyjs)

Concatenation tool for JavaScript files not minifying anything.

Useful for debugging purpose as it is adding a semi-colon character in between files content.


## Usage

### Command line

Concat all files into one - without minifying:

	$ noglifyjs -o output.js  js/*.js

Adding optional new lines and file names:

	$ noglifyjs -o output.js --newlines --filenames  js/*.js

Redirect everything to ```stdout```:

	$ noglifyjs  js/*.js

Use ```stdin``` as input:

	$ noglifyjs < js/unique.js

Pipe in a shell environment - reading from ```stdin``` and writing to ```stdout```:

	$ cat js/unique.js | noglifyjs --filenames | cat

### Using require

Concat all files into one - without minifying:

	const noglifyjs = require('noglifyjs');

	// TODO needs refactoring


## Install

### Global install

TODO  
To install globally, use option ```-g```:

	$ npm install -g noglify-js

### Local install

TODO  
To install the module locally only:

	$ npm install noglify-js --save-dev
	$ ln -s node_modules/noglifyjs/bin/noglifyjs


## Examples

Considering those 2 files.

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

### In a Makefile

As a ```Makefile``` target:

	...
	./build/all.js: ./js/*.js
		noglifyjs -o $@  $^
	...

## Troubleshooting

None recorded.


Thank you for reading.

---
Author: _Gabriel Oheix_
