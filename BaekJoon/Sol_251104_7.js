let fs = require('fs');
let N = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

for (let i = 1; i <= N; i++) {
    console.log("*".repeat(i));
}