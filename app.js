const express = require('express');
const server = require('./server/express_webserver.js');
var fs = require('fs');

var app = new server.EXPRESS().listen(8080);
app.use(express.static('client'));

app.get('/', function(req,res){
	res.sendFile("index.html")
});


app.post('/chords', function(req,res){
	console.log(req.body);
	var file = fs.readFile('./server/utils/MIDI_INFO.json',"utf8",function(err,data){
		if (err || !data) {
			return;
		}
		//res.json(JSON.parse(data))
	});
	
});