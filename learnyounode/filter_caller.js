var filter = require('./filter_module');

var path = process.argv[2]
var ext = process.argv[3]

filter(path, ext, function(err, list) {

	if(err) {
		console.log(err);
		return;
	}

	for (var i = 0; i < list.length; i++) {
		console.log(list[i]);
	}


});