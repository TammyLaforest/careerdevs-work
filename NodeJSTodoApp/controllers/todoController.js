var bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://test:test123@ds159772.mlab.com:59772/todolaforest'); 

 
// ;//create a schema - like a blueprint
var todoSchema =new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
var itemOne =Todo({item: 'buy flowers'}).save(function(err){
  
  if(err) throw err;
  console.log('item saved');
  
});


var data = [{item: 'get milk'},{item: 'get eggs'},{item: 'get a million dollars'} ];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
        
    });
    
      app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json({todos:data});
        
    });
    
      app.delete('/todo', function(req, res){
        
    });
    
};

