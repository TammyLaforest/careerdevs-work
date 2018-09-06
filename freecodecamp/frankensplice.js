/*not finished yet.  getting help from https://ariya.io/2014/02/javascript-array-slice-vs-splice*/

 var resultArr =[];
 var otherArr[];
function frankenSplice(arr1, arr2, n) 
{ for (var i=0; i < arr1.length;) {

// var x = arr1.slice(i-1, arr1.length);
// var q = arr2.slice(i, n);
// var y = arr2.slice(n, arr2.length);

var x = arr1.slice(i-1, arr1.length);
var q = arr2.slice(i, n);
var y = arr2.slice(n, arr2.length);


if (n > i){
 
  resultArr.push(q); 
  i++;
} else if (n === i) {
resultArr.push(x);
i++;
}
else {resultArr.push(y);
n++;
}
  
  
}}
frankenSplice([1, 2, 3], [4, 5], 1);
