let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0])    
let A = input[1].split(" ").map(Number);    // [4, 1, 5, 2, 3]
let M = Number(input[2]);   
let B = input[3].split(" ").map(Number);    // [1, 3, 7, 9, 5]

const setA = new Set(A);

for (let i = 0; i < M; i++) {
    console.log(setA.has(B[i]) ? 1 : 0);   
}

