/*var sentence = "The quick brown fox jumped over the lazy dog";
var splitSentence = sentence.split(" ");
var theLongestWordLen = 0;   
var theLongestWord = "";
    
for (var i = 0; i< splitSentence.length; i = i + 1)   {
    //console.log("Sentence word", i + 1, "is:", splitSentence[i]);
    
    if (splitSentence[i].length > theLongestWordLen) {
       theLongestWordLen = splitSentence[i].length; //takes care of longest Integer lInt
       //takes care of the lStr
       theLongestWord = splitSentence[i];
    }
    
}
console.log("The longest word is", theLongestWord + ". Its length is", theLongestWordLen+ ".");



    (the first world than than the Longest Word, then the longest word is now the first word)*/

//for incrementing variables, use i, j, and k

/* function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");*/

function findLongestWordLength(str) {
  var sentence = str.split(' ');
  var longestWord = 0;

  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i].length > longestWord) {
      longestWord = sentence[i].length;
    }
  }
console.log(longestWord);
  return longestWord;

}

findLongestWordLength("The Quick Brown fox Jumped over the lazy dog");