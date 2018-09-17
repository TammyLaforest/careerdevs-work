var bodyParser = require('body-parser');

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