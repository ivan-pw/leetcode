/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function (nums1, nums2) {
  let n = [...nums1, ...nums2];
  n.sort((a,b)=>a-b);

  // console.log(n.length);
  if (n.length % 2 === 0) {
    let l2 = n.length / 2;
    return (n[l2] + n[l2 - 1]) / 2;
  } else {
    let l2 = Math.floor(n.length / 2);
    // console.log(l2);
    return n[l2];
  }
};