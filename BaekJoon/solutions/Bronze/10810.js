let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const basket = Array(N).fill(0);

for (let idx = 1; idx <= M; idx++) {
    const [i, j, k] = input[idx].split(" ").map(Number);
    for (let x = i - 1; x < j; x++) {
        basket[x] = k;
    }
}

console.log(basket.join(" "));