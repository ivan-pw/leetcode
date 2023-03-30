/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n === 1) return 1;
  let p = 0;
  let p1 = 1;
  let sum = 2;
  for (let i = 3; i <= n; i++) {
    const t = sum + p1;
    p = p1;
    p1 = sum;
    sum = t;
  }

  return sum;
};