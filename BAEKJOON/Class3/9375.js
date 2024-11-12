const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const clothes = [];

for (let i = 0; i < arr.length; i++) {
  clothes.push(arr.slice(i + 1, i + Number(arr[i]) + 1));
  i += Number(arr[i]);
}

const calculate = (arr) => {
  let answer = 0

  const cloth = {}
  
  arr.forEach(el => {
    const [a, b] = el.split(' ')
    if (cloth[b]) {
      cloth[b] += 1
    } else {
      cloth[b] = 1
    }
  })

  const clothsNums = Object.values(cloth)

  answer = Object.values(cloth).reduce((acc, v) => acc*(v+1), 1) - 1;

  return answer
}

clothes.forEach(el => {
  console.log(calculate(el))
})