/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function (nums) {
  let sum = 0;
  for (let v of nums) {
    sum += v;
  }
  let left = 0;
  let right = sum;
  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    if (left === right) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};