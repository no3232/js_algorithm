const n = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim()

const N = Number(n)

const arr = [0, 1, 2]

for (let i = 3; i <= N; i++) {
  arr.push((arr[i-1] + arr[i-2]) % 10007)
}

console.log(arr[N] % 10007)