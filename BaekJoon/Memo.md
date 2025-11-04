## 백준 코테에서 입출력 관련 문제



## 연습할 땐 input.txt
let fs = require('fs');
let [A, B] = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

input.txt 열어서 작성하기.

## 제출할 땐 /dev/stdin
let fs = require('fs');
let [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);