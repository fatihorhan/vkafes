var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json()); 
app.use(function error(err, req, res, next) {
  console.error(err.stack);
  res.send(500);
});

app.post('/saveerror', function(req, res){
	log(req.body);
});

app.listen(4444); 