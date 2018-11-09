//
//	noglify.js
//
//	noglifyjs
//
//	Concatenate JavaScript files without minifying
//	Transform input content into output content
//
//	Author: Gabriel Oheix
//


const concatenation = require('./concatenation.js');


module.exports = function (inputs, options) {

	if (!inputs || inputs.constructor !== Array) {
		throw Error("noglify(): First parameter needs to be an array of string/object");
	}
	if (options && options.constructor !== Object) {
		throw Error("noglify(): Second parameter can be omitted but otherwise needs to be an object");
	}

	return main(inputs, options);

};



function main(inputs, options) {
	const opt = options || {};

	concatenation.init(options);

	var sep = null;
	if (inputs.length > 1) {
		sep = concatenation.separator();
	}

	return inputs.map(wrap_content)
		.join(sep);
}


function wrap_content(obj) {
	if (typeof obj == 'string') {
		return concatenation.wrap(null, obj);
	}
	if (typeof obj == 'object') {
		return concatenation.wrap(obj.filename, obj.content);
	}
	throw Error("noglify(): First parameter items needs to be a string or an object with fields 'filename' and 'content'");
}
