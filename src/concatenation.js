//
//	concatenation.js
//
//	noglifyjs
//
//	Concatenate JavaScript files without minifying
//	Additional functions for concatenation
//
//	Author: Gabriel Oheix
//


const os = require("os");


module.exports.init = init;
module.exports.wrap = wrap;
module.exports.separator = separator;



const EOL1 = [ os.EOL ];
const EOL2 = [ os.EOL, os.EOL ];
const EOL3 = [ os.EOL, os.EOL, os.EOL ];
const EOL4 = [ os.EOL, os.EOL, os.EOL, os.EOL ];

const separator_char = ';';
const separator_comment = ' // file separator';


var options = null;


function init(opt) {
	options = opt || {};
}


function wrap(filename, content) {
	if (!options) throw Error("init() has not been called");
	if (options.filenames && !filename) throw Error("Option 'filenames' in on but parameter filename is missing");

	if (options.filenames) {
		return EOL1
			.concat([ '// ### ' + filename ])
			.concat(EOL2)
			.concat([ content ])
			.concat(EOL2)
			.concat([ '// ### end of ' + filename ])
			.concat(EOL2)
			.join('');
	}
	return content;
}


function separator() {
	if (!options) throw Error("init() has not been called");

	if (options.newlines && options.filenames) {
		return EOL3
			.concat([ separator_char + separator_comment ])
			.concat(EOL4)
			.join('');
	}
	if (options.newlines) {
		return EOL4
			.concat([ separator_char ])
			.concat(EOL4)
			.join('');
	}
	if (options.filenames) {
		return [ separator_char + separator_comment ]
			.concat(EOL1)
			.join('');
	}
	return EOL1
		.concat([ separator_char ])
		.concat(EOL1)
		.join('');
}
