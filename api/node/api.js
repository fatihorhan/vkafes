var express = require('express');
var fs = require("fs");
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var app = express();
var db = null;


//DB operation
var file = "errors.db";
var exists = fs.existsSync(file);

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {
  if(!exists) {
    db.run("CREATE TABLE Errors (errortime TEXT, body TEXT)");
  }
});
//end DB operation

app.use(express.static(__dirname + '/../../'));
app.use(bodyParser.json()); 
app.use(function error(err, req, res, next) {
  console.error(err.stack);
  res.send(500);
});

app.post('/saveerror', function(req, res){
	var ev = req.body;
	console.log("Message : " + ev.exception.message);
	console.log("Stack Trace : " + ev.exception.stack);

	var stmt = db.prepare("INSERT INTO Errors VALUES (?, ?)");
  	
    stmt.run((new Date()).toString(), JSON.stringify(req.body, null, 2));
  	
  	stmt.finalize();

});

app.get('/errorlist', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.write('[');
	db.each("SELECT rowid, errortime, body FROM Errors ORDER BY date(errortime) DESC ", 
		function(err, row) {
			if(row.rowid > 1) res.write(',');
			res.write('{errortime: "'+row.errortime+'", body: "'+row.body+'"}');
  	}, function(){
  		res.end(']');
  	});
  	
});

app.listen(4444); 