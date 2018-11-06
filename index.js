//
//	index.js
//
//	noglifyjs
//
//	Concatenate JavaScript files without minifying
//
//	Author: Gabriel Oheix
//


const os = require("os");


module.exports = {
	init: init,
	wrap: wrap,
	create_obj: create_obj,
	separator: separator,
};


const oneline = [ os.EOL ];
const twolines = [ os.EOL, os.EOL ];
const threelines = [ os.EOL, os.EOL, os.EOL ];
const fourlines = [ os.EOL, os.EOL, os.EOL, os.EOL ];

const separator_char = ';';
const separator_comment = ' // file separator';


var options = null;


function init(opt) {
	options = opt || {};
}

function wrap(filename, content) {
	if (!options.filenames) {
		return content;
	}

	return oneline
		.concat([ '// ### ' + filename ])
		.concat(twolines)
		.concat([ content ])
		.concat(twolines)
		.concat([ '// ### end of ' + filename ])
		.concat(twolines)
		.join('');
}


function create_obj(filename, content) {
	return {
		filename: filename,
		content: content
	};
}


function separator() {
	if (options.newlines && options.filenames) {
		return threelines
			.concat([ separator_char + separator_comment ])
			.concat(fourlines)
			.join('');
	}
	else if (options.newlines) {
		return fourlines
			.concat([ separator_char ])
			.concat(fourlines)
			.join('');
	}
	else if (options.filenames) {
		return []
			.concat([ separator_char + separator_comment ])
			.concat(oneline)
			.join('');
	}
	else {
		return oneline
			.concat([ separator_char ])
			.concat(oneline)
			.join('');
	}



	var sep = separator_char;
	var first = oneline;
	if (options.filenames) {
		sep += separator_comment;
		first = [];
	}

	if (!options.newlines) {
		return first
			.concat([sep])
			.concat(oneline)
			.join('');
	}

	return fourlines
		.concat([sep])
		.concat(fourlines)
		.join('');
}
