var combine = require('stream-combiner');
// var es = require('event-stream');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');



module.exports = function () {

	var genero;

	return combine(
    	split(),
    	through({objectMode: true}, createGenre, end),
    	zlib.createGzip()
        // read newline-separated json,
        // group books into genres,
        // then gzip the output
    );


	function createGenre(line, enc, next) {
		if(line && line != '') {
			var book = JSON.parse(line);
		
			if(book.type === 'genre') {
				
				if(genero) this.push(JSON.stringify(genero) + '\n');
				
				genero = { 
					name: book.name, 
					books: [] 
				};
			}
			else {
				genero.books.push(book.name);
			}
		}
	    		
		next();
 	}

	function end(callback) {
	 	this.push(JSON.stringify(genero) + '\n');
	 	callback();
	}
    
    
}


