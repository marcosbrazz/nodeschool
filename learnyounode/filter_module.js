var fs = require('fs');
var path = require('path');


function filter(dirname, ext, callback) {
		
		fs.readdir(dirname, function(err, list) {
			
			if(err) {
				return callback(err);
			}

			var extension = "." + ext;

			list = list.filter(function(each) {
				return path.extname(each) === extension;
			});

			return callback(null, list);
		});
}


module.exports = filter;