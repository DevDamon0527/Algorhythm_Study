let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let numbers = input[1].trim().split(' ');
let a = input[2];

let newNumbers = numbers.filter(num => num === a);
console.log(newNumbers.length);