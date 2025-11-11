let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let a = Number(input[0]);
let b = input[1].split('').map(Number);

let result = 0;
for (let i = 0; i < a; i++) {
    result += b[i];
}
console.log(result);