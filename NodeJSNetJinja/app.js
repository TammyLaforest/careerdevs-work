var fs = require ('fs');

// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');  sync blocks code

// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/writeMe.txt', data);
        
//     });
// });
fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff');  
});
