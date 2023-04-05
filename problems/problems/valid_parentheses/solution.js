/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    
  if(s.length % 2 > 0) return false;
  let ss = [];
  let rev = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  let open = ['(', '[', '{'];
  let close = [')', ']', '}'];
  if(close.includes(s[0]) || open.includes(s.at(-1))) return false;

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      ss.push(s[i]);
    } else if (close.includes(s[i])) {
      if (ss.at(-1) == rev[s[i]]) {
        ss.pop();
      } else {
        return false;
      }
    }
  }
  if(ss.length > 0) return false;

  return true;
};