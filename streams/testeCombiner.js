var fs = require('fs');
var comb = require('./combiner.js');


var fpath = process.argv[2];

// console.log(dupl);

fs.createReadStream(fpath).pipe(comb()).pipe(process.stdout);