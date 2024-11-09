const [NM, ...arr] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n')

const [N, M] = NM.split(' ').map(el => Number(el))

const passwordMap = new Map()

arr.slice(0, N).map(password => {
  const [site, pass] = password.split(' ')
  passwordMap.set(site, pass)
})

let answer = ""

for (let i = N; i < M+N; i++) {
  answer += passwordMap.get(arr[i]) + '\n'
}

console.log(answer)