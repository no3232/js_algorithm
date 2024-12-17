const [n, r, c] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split(' ').map(x => Number(x))

const devide = (N, r, c) => {
  if (N === 0) return 0;
  
  const half = 1 << (N-1);  // 2^(N-1)
  const size = half * half;  // 한 사분면의 크기
  
  // 4분면 중 어디에 속하는지 확인
  if (r < half && c < half)          // 1사분면
      return devide(N-1, r, c);
  else if (r < half && c >= half)    // 2사분면
      return size + devide(N-1, r, c-half);
  else if (r >= half && c < half)    // 3사분면
      return size*2 + devide(N-1, r-half, c);
  else                               // 4사분면
      return size*3 + devide(N-1, r-half, c-half);
}

console.log(devide(n, r, c))