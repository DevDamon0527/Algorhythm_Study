let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [H, M] = input[0].split(' ').map(Number);
let cook = Number(input[1]);

let total = H * 60 + M + cook;

let endH = Math.floor(total / 60) % 24; // 24시가 되면 0시로
let endM = total % 60;

console.log(endH, endM);



/*
if (0 <= H && H < 23) {
    if (0 <= end && end <= 59) {
        console.log("1 >>> ", H, end);
    } else {
        console.log("2 >>> ", H + 1, end - 60);
    }
} else if (H == 23) {
    if (0 <= end && end <= 59) {
        console.log(H, end);
    } else if (end === 60) {
        end = 0;
        console.log(H + 1, end);
    }else {
        H = 0;
        console.log(H, end - 60);
    }
}
*/