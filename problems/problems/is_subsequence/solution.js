/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  let ss = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[ss] === t[i]) {
      ss++;
    }

  }

  return ss === s.length;
};