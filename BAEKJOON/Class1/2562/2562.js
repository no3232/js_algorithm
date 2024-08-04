const list = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin': './input.txt').toString().trim().split('\n').map(Number)

const maxV = Math.max(...list)
const idx = list.indexOf(maxV) + 1

console.log(maxV)
console.log(idx)