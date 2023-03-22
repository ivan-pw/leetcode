/**
 * @param {string} s
 * @return {number}
 */
// let lengthOfLongestSubstring = function (s) {
//   let sl = 0;
//   console.log('string: ', s);
//   // console.log(s.length);
//   // console.log(s[2]);
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       let cs = s.substring(i,j);
//       console.log(`cs ${i}-${j}: `, cs);
//       let csU = [... new Set(cs.split(""))].join("");
//       console.log(csU);
//       if(cs === csU && sl < cs.length) {
//         sl = cs.length;
//       }
//     }
//   }

//   // console.log(sl);
//   return sl;
// };

let lengthOfLongestSubstring = function (s) {
  let sl = 0;
  let set = new Set();
  let left = 0;
  // console.log('string: ', s);
  // console.log(s.length);
  // console.log(s[2]);
  for (let i = 0; i < s.length; i++) {
    while(set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    sl = Math.max(sl, i-left+1);
  }

  // console.log(sl);
  return sl;
};