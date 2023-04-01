/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  let sum = [];
  let hash = {};

  for (let i = 0; i < p.length; i++) {
    hash[p[i]] = (hash[p[i]] || 0) + 1;
  }

//   console.log(hash);

  let l = 0;
  let r = 0;
  while (r < s.length) {
    if (hash[s[r]] > 0) {
      hash[s[r]]--;
      if (r - l + 1 === p.length) sum.push(l);
      r++;
    } else {
      if (hash[s[l]] !== undefined) hash[s[l]]++;
      l++;
      if (l > r) r = l;
    }
  }

  return sum;
};



// slow
// const findAnagrams = function (s, p) {
//   let sum = [];
//   for (let i = 0; i < s.length - p.length + 1; ) {
//     console.log('i: ', i);
//     for (let j = 0; j < p.length; j++) {
//       if (s[i + j] != p[j]) {
//         console.log('s[i + j]: ', s[i + j]);
//         console.log('p[j]: ', p[j]);
//       } else {
//         break;
//       }
//     }
//     i++;
//   }
//   return sum;
// };