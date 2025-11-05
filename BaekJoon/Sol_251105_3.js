let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = input[0];
let words = input.slice(1);
let newWords = [...new Set(words)];
newWords.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
});
console.log(newWords.join('\n'));
