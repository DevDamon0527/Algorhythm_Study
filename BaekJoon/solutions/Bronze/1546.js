let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let m = Math.max(...scores);
let avg = 0;
let sum = 0;
for (let i = 0; i < scores.length; i++) {
    scores[i] = scores[i] / m * 100;
}

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}
avg = sum / scores.length;
console.log(avg);

/*
let newScores = scores.map(v => (v / m) * 100);

let avg = newScores.reduce((a, b) => a + b, 0) / n;
*/