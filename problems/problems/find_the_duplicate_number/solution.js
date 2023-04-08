/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function(nums) {
    let s = 0;
    let f = 0;

    do {
        s = nums[s];
        f = nums[nums[f]];
        console.log('slow: ', s);
        console.log('fast: ', f);
    } while(s!= f)

    let s2 = 0;

    while(s!=s2) {
        s = nums[s];
        s2 = nums[s2];
    }

    return s2;
};


// a lot of memory
// var findDuplicate = function(nums) {
//     let set = new Set(nums);
//     for(let i = 0; i< nums.length; i++) {
//         if(set.has(nums[i])) {
//             set.delete(nums[i]);
//         } else {
//             return nums[i];
//         }
//     }
// };