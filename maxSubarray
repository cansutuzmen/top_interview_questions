//LeetCode - Maximum Subarray
/*
https://leetcode.com/problems/maximum-subarray/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
      let n1 = 0;
      let n2 = nums[0];
      
      nums.forEach((i,n) => {
        n1 = Math.max(i, n1 + i);
        n2 = Math.max(n2, n1);
      });
      
      return n2;
};


