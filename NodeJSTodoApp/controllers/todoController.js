var bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://test:test123@ds159772.mlab.com:59772/todolaforest'); 

 
// ;//create a schema - like a blueprint
var todoSchema =new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);



// var data = [{item: 'get milk'},{item: 'get eggs'},{item: 'get a million dollars'} ];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    
    app.get('/todo', function(req, res){
        //get data from mongodb and pass it to the view
        Todo.find({}, function(err, data){
          if (err) throw err;
             res.render('todo', {todos: data});
          
        });
     
        
    });
    
      app.post('/todo', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save(function(err,data){
          if (err) throw err;
              res.json(data);
          
        });
        
        // data.push(req.body);
        // res.json({todos:data});
        
 
    
      app.delete('/todo/:item', function(req, res){
        //delte the requested item from mongodb
        Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
          if (err) throw err;
          res.json(data);
          
        });
      });
        
        data = data.filter(function(todo){
          return todo.item.replace(/ /g, '-') !== req.params.item;
        });
    res.json(data);
    });