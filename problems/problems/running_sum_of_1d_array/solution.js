/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum =[];
    for(i=0;i<nums.length;i++) {
        sum.push(i==0?nums[i]:(nums[i]+sum[i-1]));
    }
    return sum;
};