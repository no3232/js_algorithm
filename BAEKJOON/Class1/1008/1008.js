const [a, b] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin':'./input.txt').toString().split(" ").map(Number)

console.log(a / b)