const express = require('express');
const BinaryServer = require('binaryjs').BinaryServer;
const fs = require('fs');
const wav = require('wav');
//const pug = require('pug');
const path = require('path');

var port = 3700;
var outFile = 'demo.wav';
var app = express();

//app.set('views', __dirname + '/tpl');
//app.set('view engine', 'pug');
//app.engine('pug', require('pug').__express);
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port);

console.log('server open on port ' + port);

binaryServer = BinaryServer({port: 9001});

binaryServer.on('connection', function(client) {
  console.log('new connection');

  var fileWriter = new wav.FileWriter(outFile, {
    channels: 1,
    sampleRate: 48000,
    bitDepth: 16
  });

  client.on('stream', function(stream, meta) {
    console.log('new stream');
    stream.pipe(fileWriter);

    stream.on('end', function() {
      fileWriter.end();
      console.log('wrote to file ' + outFile);
    });
  });
});