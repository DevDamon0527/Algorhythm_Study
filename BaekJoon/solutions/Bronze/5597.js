let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// 없는 것 찾아내서 새로 배열 만들기.
let missing = [];

for (let i = 1; i <= 30; i++) {
    if (!input.includes(i)) {
        missing.push(i);
    }
}
missing.sort((a, b) => a - b).forEach(num => console.log(num));