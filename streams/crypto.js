var crypto = require('crypto');

var passwd = process.argv[2];

var stream = crypto.createDecipher('aes256', passwd);

process.stdin.pipe(stream).pipe(process.stdout);