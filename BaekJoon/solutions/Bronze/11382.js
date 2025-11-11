let fs = require('fs');
let [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(A + B + C);


