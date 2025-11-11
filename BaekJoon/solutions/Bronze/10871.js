let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, X] = input[0].split(" ").map(Number); 
let A = input[1].split(" ").map(Number);

let result = A.filter(num => num < X);
console.log(result.join(" "));