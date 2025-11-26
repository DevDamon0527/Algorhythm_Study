const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

const numbers = input[1].split(' ').map(Number);

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(min, max);
