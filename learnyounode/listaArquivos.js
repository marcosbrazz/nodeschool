var fs = require('fs');

var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function(err, list) {
	
	if(err) {		
		console.error(err);
		return;
	}


	for (var i = 0; i < list.length; i++) {
		if(list[i].endsWith("." + ext)) {
			console.log(list[i]);	
		}
	}

}); 

// var fs = require('fs')
//     var path = require('path')
    
//     var folder = process.argv[2]
//     var ext = '.' + process.argv[3]
    
//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })
