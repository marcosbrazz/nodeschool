var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through2')

var algorithm = process.argv[2];
var passwd = process.argv[3];

var crStream = crypto.createDecipher(algorithm, passwd);
var unzipStream = zlib.createGunzip();
var parser = tar.Parse();

parser.on('entry', function(eStream) {
	if(eStream.type === 'File') {
		var hashStream = crypto.createHash('md5', {encoding: 'hex'})
		eStream.pipe(hashStream).pipe(through(printer));	
	}

	function printer(hash, enc, next) {
		console.log(hash + ' ' + eStream.path);
		next();
	}

});



process.stdin.pipe(crStream).pipe(unzipStream).pipe(parser);