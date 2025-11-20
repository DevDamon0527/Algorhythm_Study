let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

let [H, M] = input[0].split(' ').map(Number);
let cook = Number(input[1]);

let total = H * 60 + M + cook;

let endH = Math.floor(total / 60) % 24; // 24시가 되면 0시로
let endM = total % 60;
console.log(endH, endM);