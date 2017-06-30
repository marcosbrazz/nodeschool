var trumpet = require('trumpet');
var through = require('through2');


var tr = trumpet();

process.stdin.pipe(tr).pipe(process.stdout);

var stLoud = tr.select('.loud').createStream();

stLoud.pipe(through(function(chunk, enc, next) {
	this.push(chunk.toString().toUpperCase());
	next();
})).pipe(stLoud);

