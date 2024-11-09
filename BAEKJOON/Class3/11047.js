const [NK, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = NK.split(" ").map((el) => Number(el));

const coins = arr
  .map((el) => Number(el))
  .filter((el) => el <= K)
  .sort((a, b) => b - a);

let minV = Math.ceil(K / arr[0]);

const backTracking = (money, coin, count, idx) => {
  if (count > minV) return;
  const coinCount = Math.floor(money / coin);
  const restMoney = money - coinCount * coin
  if (restMoney === 0) {
    minV = Math.min(minV, count + coinCount)
    return
  }

  const newCoins = coins.slice(idx++)

  newCoins.forEach(el => {
    backTracking(restMoney, el, count+coinCount, idx++)
  })
};

coins.forEach((el) => {
  backTracking(K, el, 0, 0)
});

console.log(minV);
