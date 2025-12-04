const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

if (N === 1) {
  console.log(1);
  return;
}

let layer = 1;
let count = 1;

while (count < N) {
  count += 6 * layer;
  layer++;
}

console.log(layer);
