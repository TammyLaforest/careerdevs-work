var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
    
myReadStream.on('data', function(chunk){ 
console.log('new chunk recieved: ');
  myWriteStream.write(chunk);
    
});




// var http = require('http');

// var server = http.createServer(function(req, res){
   
//   console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey, Ninjas.');
// });


// server.listen(8080, '0.0.0.0' );

// console.log('Now listening to port 8080');


// // server.listen(8080, '127.0.0.1');

// //control c cancels process