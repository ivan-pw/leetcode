/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const l = s.length;
  const tab1 = {};
  const tab2 = {};

  for (let i = 0; i < l; i++) {
    // console.log('tab1: ', tab1);
    // console.log('tab2: ', tab2);
    if (!tab1[s[i]] && !tab2[t[i]]) {
      tab1[s[i]] = t[i];
      tab2[t[i]] = s[i];
    } else if (tab1[s[i]] !== t[i]) {
      return false;
    }
  }

  return true;
};