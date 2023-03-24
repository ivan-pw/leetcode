/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let init = 0;
  let max = 1;
  const l = s.length;

  for (let i = 0; i < l; i++) {
    // even
    let left = i - 1;
    let right = i;
    while (left >= 0 && right < l && s[left] === s[right]) {
      if (right - left + 1 > max) {
        max = right - left + 1;
        init = left;
      }
      left--;
      right++;
    }
    // odd
    left = i - 1;
    right = i + 1;
    while (left >= 0 && right < l && s[left] === s[right]) {
      if (right - left + 1 > max) {
        max = right - left + 1;
        init = left;
      }
      left--;
      right++;
    }
  }

  maxStr = s.substring(init, max + init);

  return maxStr;
};

// Too slow :(

// let longestPalindrome = function (s) {
//   let max = 0;
//   let maxStr = '';

//   for (let i = 0; i < s.length; i++) {
//     let sub1 = s.substring(i);
//     // console.log('sub1: ', sub1);

//     for (let j = sub1.length; j >= 0; j--) {
//       let sub2 = sub1.substring(0, j);
//       // console.log('sub2: ', sub2);

//       if(max < sub2.length  && sub2 === sub2.split("").reverse().join("") ) {
//         max = sub2.length;
//         maxStr = sub2;
//         break;
//       }
//     }
//   }

//   return maxStr;
// };