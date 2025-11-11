const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

for (let i = 1; i <= 9; i++) {
    let result = input * i;
    console.log(input + " * " + i + " = " + result);
}