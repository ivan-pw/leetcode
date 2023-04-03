/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const tab1 = {};
  const tab2 = {};

  for (let i = 0; i < s.length; i++) {
    if (!tab1[s[i]] && !tab2[t[i]]) {
      tab1[s[i]] = t[i];
      tab2[t[i]] = s[i];
    } else if (tab1[s[i]] !== t[i]) {
      return false;
    }
  }

  return true;
};