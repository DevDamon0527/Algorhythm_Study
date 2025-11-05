let fs = require('fs');
let [H, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if (1 <= H && H< 24) {
    if (0 <= M && M < 45) {
        console.log(H - 1, M + 15);
    } else  {
        console.log(H, M - 45);
    }
} else if (H == 0) {
    if (0 <= M && M < 45) {
        console.log(H + 23, M + 15);
    } else {
        console.log(H, M - 45);
    }
}