/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, i = 0) {
    // console.log('nums: ', nums);
    // console.log('target: ', target);
    // console.log('i: ', i);
    let midI = Math.floor(nums.length / 2);
    // console.log('midI: ', midI);
    let mid = nums[midI]
    // console.log('mid: ', mid);
    // console.log('mid === target: ', target===mid);

    if(nums.length === 1 && mid !== target) {
        return -1;
    }

    if(mid === target) {
        return i + midI;
    } else if(mid < target){
        return search(nums.slice(midI), target, i += midI);
    } else if(mid > target) {
        return search(nums.slice(0, midI), target, i);
    }

    return -1;
};