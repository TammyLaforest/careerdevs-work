var http = require('http');

var server = http.createServer(function(req, res){
   
   console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey, Ninjas.');
});


server.listen(8080, '0.0.0.0' );

console.log('Now listening to port 8080');


// server.listen(8080, '127.0.0.1');

//control c cancels process