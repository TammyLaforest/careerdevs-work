var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//set up template engine 

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port

app.listen(8080);
console.log('You are listening to port 8080');





//old stuff from tutorial for referencers

// localhost:8080/assets/styles.css
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// );
// app.get('/', function(req, res){
//     res.render('index');
// });

// app.get('/contact', function(req, res){
   
//     res.render('contact', {qs: req.query});
    
// });

// app.post('/contact', urlencodedParser, function(req, res){
//     console.log(req.body);
//     res.render('contact-success', {data: req.body});
    
// });

// app.get('/profile/:name', function(req, res){
//     var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
//     res.render('profile', {person: req.params.name, data: data});
// });