var express = require('express');

var app = express();
require('./config/express')(app);
require('./routes')(app);

var server = require('http').createServer(app);

server.listen(9000, function() {
	console.log('Express server listening on %d, in %s mode', 9000, 'development');
});