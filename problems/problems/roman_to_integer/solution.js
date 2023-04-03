/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let int = getCur(s[s.length - 1]);

  // console.log('int: ', int);

  let last = getCur(s[s.length - 1]);
  for (let i = s.length - 2; i >= 0; i--) {
    let cur = getCur(s[i]);
    // console.log('cur: ', cur);
    if (last > cur) {
      int -= cur;
    } else {
      last = cur;
      int += cur;
    }
    
    // console.log('int: ', int);
    // console.log('last: ', last);
  }

  function getCur(sim) {
    let cur = 0;
    switch (sim) {
      case 'I':
        cur = 1;
        break;
      case 'V':
        cur = 5;
        break;
      case 'X':
        cur = 10;
        break;
      case 'L':
        cur = 50;
        break;
      case 'C':
        cur = 100;
        break;
      case 'D':
        cur = 500;
        break;
      case 'M':
        cur = 1000;
        break;

      default:
        break;
    }

    return cur;
  }

  return int;
};