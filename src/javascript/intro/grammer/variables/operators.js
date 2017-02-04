/*  Class exercises with operators.
*   Author: Chris Langdale
*   Date last update: 2/4/17
*/

let number1 = 1;
let number2 = 2;
let number3 = number1 % number2;
let numbers = [1, 2, 3, 4];
let number4 = (number1 === number2);

for (let i = 0; i < numbers.length; i++){
  number3 *= number2;
}

console.log(number3);
console.log(typeof number1);
console.log(typeof number3);
console.log(typeof numbers);
console.log(number4);
