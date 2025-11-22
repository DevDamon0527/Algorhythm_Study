let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const basket = [];
for (let i = 1; i <= N; i++) {
    basket.push(i);
}

// const basket = Array.from({ length: N }, (_, idx) => idx + 1);

for (let idx = 1; idx <= M; idx++) {
    let [i, j] = input[idx].split(" ").map(Number);
    
    i -= 1;
    j -= 1;

    const temp = basket[i];
    basket[i] = basket[j];
    basket[j] = temp;
}

console.log(basket.join(' '));