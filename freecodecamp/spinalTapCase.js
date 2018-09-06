//Spinal Tap Case 

// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//   return str;
// }

// spinalCase('This Is Spinal Tap');




function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
}
spinalCase('This Is Spinal Tap');