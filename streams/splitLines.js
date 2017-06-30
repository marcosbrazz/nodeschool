var split = require('split');
var through = require('through2');

var counter = 1;

process.stdin
	.pipe(split())
	.pipe(through(function(line, enc, next) {

		var result;
		if(counter % 2 === 0) {
			// even UPPER
			result = line.toString().toUpperCase() + '\n';
		}
		else {
			// odd lower
			result = line.toString().toLowerCase() + '\n';
		}
		counter ++;
		this.push(result);
		next();
})).pipe(process.stdout);