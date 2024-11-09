const [N, arr] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n')

const people = arr.split(' ').map(el => Number(el)).sort((a, b) => a - b)

let value = 0

const result = people.map(el => {
  value += el
  return value
}).reduce((acrr, curr) => {
  return acrr + curr
}, 0)


console.log(result)