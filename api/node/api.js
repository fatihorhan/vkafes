var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/../../'));
app.use(bodyParser.json()); 
app.use(function error(err, req, res, next) {
  console.error(err.stack);
  res.send(500);
});

app.post('/saveerror', function(req, res){
	var ev = req.body;
	console.log("Mesaj : " + ev.exception.message);
	console.log("Stack Trace : " + ev.exception.stack);
});

app.listen(4444); 