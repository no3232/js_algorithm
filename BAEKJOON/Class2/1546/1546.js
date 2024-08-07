const [[N], list] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : './input.txt').toString().split('\n').map(el => el.split(' ').map(Number))


const maxScore = Math.max(...list)
const newList = list.map(el => el/maxScore * 100)
const added = newList.reduce((prev, curr) => prev+curr)
console.log(added/N)