let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let count = 0;
for (let n of arr) {
  if (isPrime(n)) count++;
}

console.log(count);
