/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  let res = '';
  const c = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let r = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  for (let i = 0; num > 0;) {
    if (num >= c[i]) {
      num -= c[i];
      res += r[i];
    } else {
      i++;
    }
  }


  return res;
};