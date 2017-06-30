var net = require('net');
var dataFormatter = require('strftime');

var dateFormat = "%F %R";

var port = process.argv[2];

var server = net.createServer(function(socket) {
	var timestamp = dataFormatter(dateFormat, new Date());
	socket.write(timestamp + "\n");
	socket.end();
});

server.listen(port);