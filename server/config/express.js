var express = require('express');
var path = require('path');

module.exports = function(app) {

	app.use(express.static(path.join(__dirname + '/../../client')));
	app.set('appPath', path.join(__dirname + '/../../client'));
};