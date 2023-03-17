let twoSum = function (nums, target) {
  let obj = {};
  let res = [];

  nums.forEach((item, i) => {
    let d = target - item;
    if (d in obj) {
      res = [i, obj[d]];
    }
    obj[item] = i;
  });

  return res;
};