## 백준 코테에서 입출력 관련 문제



## 연습할 땐 input.txt
let fs = require('fs');
let [A, B] = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

input.txt 열어서 작성하기.

## 제출할 땐 /dev/stdin
let fs = require('fs');
let [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);


## 여러가지 입력
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);


## 배열 탐색 알고리즘 문제
