/*Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
*/

function sum_pairs(array, sum) {

  let difIndex = array.length;
  let pairs = [];

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[i] + array[j] === sum && i < j && j-i < difIndex) {
          difIndex = j-i;
          pairs = [array[i], array[j]];
      }
    }
  }
  return pairs.length > 0 ? pairs : undefined
}

sum_pairs([11, 3, 7, 5], 10)
sum_pairs([4, 3, 2, 3, 4], 6)
sum_pairs([0, 0, -2, 3], 2)
sum_pairs([10, 5, 2, 3, 7, 5], 10)
console.log(sum_pairs([20,-13,40], -7))