/* Number of anagrams in an array of words

An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/


//Two possible solutions:

function anagramCounter1 (wordsArray) {
  const sortedArray = []
  let counterAll = 0
  wordsArray.forEach(word => sortedArray.push(word.split("").sort().join("")))
  sortedArray.forEach((word) => {
    sortedArray.forEach((word2) => {
      if(word === word2)
        counterAll++;
    })
  })
  let counter = (counterAll- sortedArray.length)/ 2
  console.log(counter)
  return counter;
}


function anagramCounter2 (wordsArray) {
  let counter = 0;
  let sortedArray = wordsArray.map(word => word.split("").sort().join(""));
  for(let i = 0; i < sortedArray.length; i++) {
    for(let j = i; j < sortedArray.length; j++) {
      if(sortedArray[i] === sortedArray[j + 1])
        counter++;
    }
  }
  console.log(counter);
  return counter;
}


let wordsArray = ['dell', 'ledl', 'lled', 'cba']

anagramCounter1(wordsArray);
anagramCounter2(wordsArray);
