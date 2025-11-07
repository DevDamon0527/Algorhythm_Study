let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let num = input[0];
let num2 = input[1];

let a = Math.floor(num2 / 100);
let b = Math.floor((num2 % 100) / 10) 
let c = num2 % 10;

let num3 = num * c;
let num4 = num * b;
let num5 = num * a;
let num6 = num3 + num4 * 10 + num5 * 100;

console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

/* 
const fs = require('fs');
let [A, B] = fs.readFileSync(0, 'utf-8').trim().split('\n');

A = Number(A);
const [B1, B2, B3] = B.split('').map(Number);

const result = `${A * B3}\n${A * B2}\n${A * B1}\n${A * B}`;

console.log(result);
*/