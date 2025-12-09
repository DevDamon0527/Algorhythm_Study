let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let X = Number(input[0]);    // 영수증 총 금액
let N = Number(input[1]);    // 물건 종류 수

let sum = 0;

for (let i = 2; i < 2 + N; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    sum += a * b;
}

if (sum === X) {
    console.log("Yes");
} else {
    console.log("No");
}
