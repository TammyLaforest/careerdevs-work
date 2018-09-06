/*Pig Latin.   Couldn't do this one on my own.  Found some guy named Evan Morrison's code explanation 

match in this case only serves as a placeholder since it is always the first argument passed by replace( ) but is not actually used in the function (with this regex match is always the whole word (given the input string is stipulated to be an English word in lowercase).
p1 is the first parenthesized submatch string ^[^aeiou]* , i.e. zero or more non-vowels at the beginning of the word. Ex. for ‘glove’ p1 = ‘gl’ and for ‘algorithm’ p1 = “”.
p2 will be all the characters in the word that were not captured by p1. Ex. ‘glove’ p2 = ‘ove’ and for ‘algorithm’ p2 = ‘algorithm’.
*/


// function translatePigLatin(str) {
//   return str;
// }

// translatePigLatin("consonant");

function translatePigLatin(str) {
  return str.replace(/(^[^aeiou]*)(\w*)/, function(match, p1, p2){
    return p2 + (p1 ? p1 : 'w') + 'ay';
  })
}