var data = [{item: 'get milk'},{item: 'get eggs'},{item: 'get a million dollars'}, ]


module.exports = function(app){
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
        
    });
    
      app.post('/todo', function(req, res){
        
        
    });
    
      app.delete('/todo', function(req, res){
        
        
        
    });
    
};