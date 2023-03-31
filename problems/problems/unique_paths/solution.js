/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  let arr = Array.from({ length: m }, (el, i) =>
    Array.from({ length: n }, (el, i2) =>
      i2 === n - 1 || i === m - 1 ? 1 : null
    )
  );

  const ways = (cM = 0, cN = 0) => {
    if (!arr[cM][cN]) {
      arr[cM][cN] =
        (cM < m - 1 ? ways(cM + 1, cN) : 0) +
        (cN < n - 1 ? ways(cM, cN + 1) : 0);
    }
    return arr[cM][cN];
  };

  return ways();
};