const [N, K] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let people = Array(N).fill(0).map((_, i) => i + 1);

const result = []

let count = 0

while (people.length > 0) {
  count += K - 1
  count %= people.length
  result.push(people[count])
  people = [...people.slice(0, count), ...people.slice(count+1, people.length)]
}

console.log(`<${result.join(', ')}>`)