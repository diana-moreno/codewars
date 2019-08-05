/* Largest product in a series

Given a number of undefined length as a string, you will have to:

Calculate the maximum product of four adjacent digits in the number. For instance: "The maximum product of four adjacent numbers in 12345678987654321 is 4032 (7x8x9x8)"

Calculate the average between all the calculated products, rounded up to two decimals

Return the difference between the maximun product and the average value of products

For instance, in the number: '12345678987654321', the difference between the biggest product (4032) and the average product (1548.92) is the result of 7x8x9x8, so it will return 2483.08*/

// solución válida únicamente para números con dígitos menores a 16.

function getFourInARow(numbers){
  let productsOfFourAdj = [];
  let numbersInArr = numbers.toLocaleString('fullwide', { useGrouping: false }).split("").map(Number) //cambia por 0 los dígitos que sobrapasan de 16.
  for(let i = 0; i < numbersInArr.length; i++) {
      let resultMult = numbersInArr[i] * numbersInArr[i+1] * numbersInArr[i+2] * numbersInArr[i+3]
    if(resultMult) {
      productsOfFourAdj.push(resultMult)
    }
  }
  let max = (Math.max(...productsOfFourAdj))
  let avg = Number((productsOfFourAdj.reduce((a, b) => a + b) / productsOfFourAdj.length).toFixed(2));
  let result = max - avg;
  console.log(result, max, avg, number)
  return result;
}

let number1 = 12345678987654321
let number = 287926981608352835515290034736904970470107547886056910995719037343288742230418576710953590 // Expected: 2498.69
let number2 = 607355087090921583 //Expected: 470.67

getFourInARow(number)
//como solo se aceptan 16 digitos, las operaciones no son correctas

