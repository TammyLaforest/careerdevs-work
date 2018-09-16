var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
   if(req.url === '/home' || req.url === '/'){
       res.writeHead(200,{'Content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/index.html').pipe(res);
   } else if (req.url === '/contact'){
     res.writeHead(200,{'Content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/contact.html').pipe(res);
   }
   else if (req.url === '/api/ninjas'){
       var ninjas = [{name: 'ryu', age: 29},{name: 'yoshi', age: 32}, ];
     res.writeHead(200,{'Content-Type': 'application/JSON'});
       res.end(JSON.stringify(ninjas));
   }
res.writeHead(200,{'Content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/404.html').pipe(res);
});
       

server.listen(8080, '0.0.0.0');
console.log('Now listening to port 8080');

    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('feed me popcorn');
  
  //pipe can only be used on readable streams
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt'); 
//replaced myWriteStream with res
// var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);


// // server.listen(8080, '127.0.0.1');

// //control c cancels process