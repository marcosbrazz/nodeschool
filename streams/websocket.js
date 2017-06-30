var websocket = require('websocket-stream');

//var str = require('string-to-stream')

var ws = websocket('ws://localhost:8099')

//str('hello\n').pipe(ws)

ws.write('hello\n')
