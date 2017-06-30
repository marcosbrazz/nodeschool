var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, function(err, data) {
	var countNewLine = data.toString().split('\n').length - 1;
	console.log(countNewLine);
});

