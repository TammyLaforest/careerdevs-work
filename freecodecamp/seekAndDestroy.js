// function destroyer(arr) {
//   // Remove all the values
//   return arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
