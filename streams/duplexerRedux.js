var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function(counterSt) {
	
	var countries = {};

	var writeSt = through({objectMode: true}, write, end);

	return duplexer({objectMode: true}, writeSt, counterSt);

	function write(buffer, enc, next) {
		countries[buffer.country] = (countries[buffer.country] || 0) + 1;
		next();
	}

	function end(done) {
		counterSt.setCounts(countries);
		done();
	}


}