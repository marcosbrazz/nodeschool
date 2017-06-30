var http = require('http')
var url = require('url')

var port = process.argv[2];

var server = http.createServer(function(req, res) {	
	if(req.method !== 'GET') {
		res.writeHeader(405, {'Content-Type':'application/json'})
		return res.end(JSON.stringify({'msg': 'only GET method allowed' }))
	}
	var urlQuery =  url.parse(req.url, true)
	var result = actions[urlQuery.pathname](urlQuery.query);
	res.writeHeader(200, {'Content-Type':'application/json'})
	res.end(JSON.stringify(result))

})

server.listen(port)


var actions = {

	'/api/parsetime': function(query) {
		var dt = new Date(query.iso)

		return {
			"hour": dt.getHours(),
			"minute": dt.getMinutes(),
			"second": dt.getSeconds()
		}
	},

	'/api/unixtime': function(query) {
		var unixtime = new Date(query.iso).getTime()
		return { "unixtime": unixtime }
	}
}

