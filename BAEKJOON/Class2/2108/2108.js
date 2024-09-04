const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let averageV, middleV, mostV, arrange;

const map = new Map();
let max = 1;
for (let number of arr) {
  if (map.has(number)) {
    max = Math.max(max, map.get(number) + 1);
    map.set(number, map.get(number) + 1);
  } else map.set(number, 1);
}

const maxArr = [];
for (let [key, val] of map) {
  if (val === max) maxArr.push(key);
}

maxArr.sort((a, b) => a - b)

mostV = maxArr.length === 1 ? `${maxArr[0]}` : `${maxArr[1]}`;

arr.sort((a, b) => a - b);
arrange = arr[arr.length - 1] - arr[0];

averageV = Math.round(arr.reduce((acrr, curr) => acrr + curr, 0) / arr.length) || 0;

middleV = arr[Math.floor(arr.length / 2)];

console.log(averageV);
console.log(middleV);
console.log(mostV);
console.log(arrange);
