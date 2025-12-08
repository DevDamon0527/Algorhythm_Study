let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let N = Number(input[0]);
let M = Number(input[1]);

// 필요한 박스 수 = N / M의 올림값
let answer = Math.ceil(N / M);

console.log(answer);
