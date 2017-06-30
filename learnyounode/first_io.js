var fs = require('fs'); 

var path = process.argv[2];

var buffer = fs.readFileSync(path);

var string = buffer.toString();

var newLinesCount = string.split("\n").length - 1

console.log(newLinesCount);