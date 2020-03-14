var http = require('http');
var app = require('../app');

var port = 3000;

app.set('port', port);

var server = http.createServer(app);

server.listen(port);