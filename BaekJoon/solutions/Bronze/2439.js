let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = '';

for (let i = 1; i <= input; i++) {
    let spaces = ' '.repeat(input - i);
    let stars = '*'.repeat(i);
    result += spaces + stars;
    if (i !== input) result += '\n';  
}

console.log(result);
