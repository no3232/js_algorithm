const [T, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const apartment = [];

for (let i = 0; i < 15; i++) {
  const floor = [];
  for (let j = 0; j < 15; j++) {
    if (i === 0) {
      floor.push(j + 1);
    } else {
      let person = 0;
      for (let k = 0; k <= j; k++) {
        person += apartment[i - 1][k];
      }
      floor.push(person);
    }
  }
  apartment.push(floor)
}

for (let i = 0; i < T * 2; i += 2) {
  console.log(apartment[arr[i]][arr[i+1]-1]);
}
// 1층 3호
// 1 2 3
// 2층 3호
// 1 3 6
// 1 2 3
// 3층 3호
// 1 4 10
// 1 3 6
// 1 2 3
