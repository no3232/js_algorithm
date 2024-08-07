const N = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim()

const number = +N

let result = 1
let cnt = 1
while (cnt < number) {
  cnt += 6 * result
  result++
}

console.log(result)
