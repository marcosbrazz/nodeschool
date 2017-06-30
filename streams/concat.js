var concat = require('concat-stream');
var http = require('http');

process.stdin
	.pipe(concat(reverso))	
	//.pipe(process.stdout);

function reverso(body) {		
	var rev = body.toString().split('').reverse().join('');
	process.stdout.write(rev);
}