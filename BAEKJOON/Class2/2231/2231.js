const N = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim()

const target = Number(N)
let i = target-9*N.length
for (i; i < target; i++) {
  const l = [i, ...i.toString().split('').map(Number)]
  if (l.reduce((prev, curr) => prev+curr, 0) === target) {
    console.log(i)
    break
  }
}
if (i === target) {
  console.log(0)
}