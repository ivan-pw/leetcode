/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const l = s.length;
  let max = 0;
  let add = 0;

  let obj = {};
  for (let i = 0; i < l; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
  }

  Object.keys(obj).forEach((i) => {
    if (obj[i] % 2 >= 1) add = 1;
    if (Math.floor(obj[i] / 2) >= 1) {
      max += Math.floor(obj[i] / 2) * 2;
      delete obj[i];
    }
  });

  return max + add;
};