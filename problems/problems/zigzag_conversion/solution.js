/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  const l = s.length;
  if (numRows === 1 || l <= numRows) return s;

  let arr = new Array(numRows).fill('');
  let cur = 0;
  let up = true;

  for (let i = 0; i < l; i++) {
    arr[cur] += s[i];
    cur = up ? ++cur : --cur;

    if (cur === numRows - 1) {
      up = false;
    } else if (cur === 0) {
      up = true;
    }
  }

  return arr.join('');
};