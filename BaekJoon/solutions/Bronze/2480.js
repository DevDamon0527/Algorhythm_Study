let fs = require('fs');
let [A, B ,C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let price = 0;

if (A === B && B === C) {
    price = 10000 + (A * 1000);
} else if (A === B || B === C || A === C) {
    let D = A === B ? A : B === C ? B : C;
    price = 1000 + (D * 100);
} else {
    let E = Math.max(A, B, C)
    price = E * 100;
}
console.log(price);
