var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);

var result = {};

urls.map(function(url) {
	http.get(url, function(response) {
		response.pipe(bl(function(err, data) {
			var content = data.toString();
			result[url] = content;
			var resultSize = Object.keys(result).length;
			if(resultSize === 3) {
				print(result);
			}
		}));
	})
}, result);


function print(urlsContents) {
	urls.forEach(function(url) {
		console.log(urlsContents[url]);
	});
}
