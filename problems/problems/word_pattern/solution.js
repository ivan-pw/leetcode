const wordPattern = function (pattern, s) {
  console.log('---------------');
  console.log(s);
  let sArr = s.split(' ');
  let obj = {};
  // console.log(sArr);
  if (sArr.length !== pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    let v = pattern[i];
    console.log('v: ', v);
    console.log('obj[v]: ', obj[v]);
    console.log('sArr[i]: ', sArr[i]);
    if (!obj[v]) {
      obj[v] = sArr[i];
    } else if (obj[v] !== sArr[i]) {
      return false;
    }
    console.log('obj[v] 2: ', obj[v]);
  }

  if (
    new Set(Object.values(obj)).size !=
    new Set(Object.values(pattern.split(''))).size
  ) {
    return false;
  }

  return true;
};