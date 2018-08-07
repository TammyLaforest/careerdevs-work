const titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(title){
  console.log(title);
});


/*var titles = document.getElementsByClassName('titles');
console.log(Array.isArry(titles));
console.lot(Array.isArray(Array.from(titles)))

/*titles.forEach(function(item){
	console.log(item);

})
*/

array.from(titles).forEach(function(item){
	console.log(item);})

	