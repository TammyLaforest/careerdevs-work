var http = require('http');
var fs = require('fs');




var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

    //pipe can only be used on readable streams
myReadStream.pipe(res);
    res.end('Hey, Ninjas.');
});

// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt'); 
//replaced myWriteStream with res
// server.listen(8080, '0.0.0.0' );

// console.log('Now listening to port 8080');


// // server.listen(8080, '127.0.0.1');

// //control c cancels process

// .on('data', function(chunk){ 
// console.log('new chunk recieved: ');
//   myWriteStream.write(chunk);
    
// });
