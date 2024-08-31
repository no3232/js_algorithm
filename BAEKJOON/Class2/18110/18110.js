const [n, ...arr] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n').map(Number)

arr.sort((a, b) => a - b)

let result = arr.reduce((acrr, curr) => acrr + curr, 0)
const minus = Math.round(n * 0.15)

for(let i = 0; i < minus; i++) {
  result -= arr[i]
  result -= arr[arr.length - i - 1]
}

console.log(n === 0 ? 0 : Math.round(result / (n - (minus*2))))