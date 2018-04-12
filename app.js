var express = require('express');
var todoController = require('./controllers/todoController');
var path = require('path')


var app = express();

app.use(express.static('public'));
app.use(express.static(__dirname+'/public'));

app.get('/hello',function(req,res){
		res.sendFile(__dirname+'/hello.html');
	});
app.set('view engine','ejs');


app.listen(3000);
console.log('listening to port 3000');

todoController(app);
