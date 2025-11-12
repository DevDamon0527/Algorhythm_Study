const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');

let arr = [];

for (let i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i));
}

let result = [];

for (let i = 0; i < arr.length; i++) {
    let alphabet = arr[i];
    let index = input.indexOf(alphabet);
    result.push(index);
}
console.log(result.join(' '));