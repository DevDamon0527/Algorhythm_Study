let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let num = new Array(input + 1).fill(0);
// num = [0, 0, 0, 0, ...] ;

// num[i] : 정수 i를 1로 만들 때 필요한 최소 연산 횟수

for (let i = 2; i <= input; i++) {

    num[i] = num[i - 1] + 1;

    if (i % 2 === 0)
    {
        num[i] = Math.min(num[i], num[i/2] + 1);
    }

    if (i % 3 === 0)
    {
        num[i] = Math.min(num[i], num[i/3] + 1)
    }
}

console.log(num[input]);
