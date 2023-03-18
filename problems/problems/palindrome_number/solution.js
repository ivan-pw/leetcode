/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  let res = 0;
  let y = x;

  while (y > 0) {
    let right = y % 10;
    res = res * 10 + right;
    y = Math.floor(y / 10);
  }

  if (res === x) return true;
  return false;
};