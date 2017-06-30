var through = require('through2');

var stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);



function write(buffer, encoding, next) {
	var result = buffer.toString().toUpperCase();
	this.push(result);
	next();
}

function end(done) {
	done();
}