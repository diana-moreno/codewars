/*Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
ALGORITHMSSTRINGSPERFORMANCEOPTIMIZATION*/

// opción 1

function scramble(str1, str2) {
  let arrStr1 = Array.from(str1).sort()
  let arrStr2 = Array.from(str2).sort()
  let counter = 0;

  for(let i = 0; i < arrStr1.length; i++) {
    if(arrStr1[i] === arrStr2[counter]) {
        counter++;
    }
  }
  return counter === arrStr2.length ? true : false;
}

// opción 2

function scramble(str1, str2) {
  let counterStr1 = {}
  let counter = 0;

  Array.from(str1).forEach(letter => {
    if(counterStr1[letter]) {
      counterStr1[letter]++;
    } else {
      counterStr1[letter] = 1;
    }
  })

  Array.from(str2).forEach(letter => {
    if(counterStr1[letter]) {
      counterStr1[letter]--
    } else {
      counter++
    }
  })
  return counter ? false : true;


scramble('cedewaraaossoqqyt', 'codewars') //==> True
scramble('rkqodlw', 'world')// ==> True
scramble('katas', 'steak') // ==> False
scramble('scriptjava','javascript')// ==> True

//ambas funciones son demasiado lentas para pasar los tests, aunque ambas funcionan!!
//

// otra manera de contar:

/*function getCharFrequencies(str) {
  return str.split("").reduce(
    function(container, char) {
        (container[char] += 1) || (container[char] = 1);
        return container;
    }, {}
  );
}*/
