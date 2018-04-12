var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var mongoose = require('mongoose');
//var data = [{item:'dog'},{item:'banana'},{item:'milk'}];

//Connect to
mongoose.connect('mongodb://test:test@ds243049.mlab.com:43049/jvtodo')

//create schema think of it as creating fields
var todoSchema = new mongoose.Schema({
	item: String
})

//collections think of it as creating tables
var Todo = mongoose.model('Todo',todoSchema)






module.exports = function(app){




	app.get('/todo',function(req,res){
		Todo.find({},function(err,data){
			if(err) throw err;
			res.render('todo',{todos:data});
		})
		//res.render('todo',{todos:data});
	});






	app.get('/assets',function(req,res){
		res.render('todo',{todos:data});
	});

	app.post('/todo', urlencodedParser, function(req,res){
		// get data from view && add it mongo

		var newTodo = Todo(req.body).save(function(err,data){
			if(err) throw err;
			res.json(data)
		})
		/*
		console.log(req.query);
		data.push(req.body);
		res.json(data);
		*/

	});

	app.delete('/todo/:item', urlencodedParser, function(req,res){
		Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
			if (err) throw err;
			res.json(data)
		})

		//data = data.filter(function(val){return val.item !== req.params.item});


	});




}
