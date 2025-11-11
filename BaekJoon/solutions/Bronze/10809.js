let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('');

console.log(input);

// 소문자 단어 S
// 각각 알파벳, 단어에 포함되어 있는 경우에는 처음 등장하는 위치(index)
// 포함되어 있지 않은 경우 -1 출력

// let str = '';
// for (let i = 1; i <= 26; i++) {
//     a
// }

// ['b', 'a', 'e','k', 'j', 'o', 'o', 'n']
let x = input.indexOf('a');
console.log(x);

let arr = [];

for (let i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i));
}
console.log(arr);
