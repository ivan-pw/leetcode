/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let str = '';
  if (strs.length === 0) return '';

  let s = '';

  sym: for (let i = 0; ; i++) {
    if (!strs[0][i]) break;

    s = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (s !== strs[j][i] || s === '') break sym;
    }
    str += s;
  }

  return str;
};