var through = require('through2');
var http = require('http');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
	if(req.method === 'POST') {
		req.pipe(through(function(chunk, enc, next) {
			this.push(chunk.toString().toUpperCase());
			next();
		})).pipe(res);
	}
});

server.listen(port);