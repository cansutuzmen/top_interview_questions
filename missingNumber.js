//LeetCode - Missing Number
/*
https://leetcode.com/problems/missing-number/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    
    //calculate required sum
    let sum = Math.floor(n  * (n + 1) / 2);
   
    for(let i = 0; i < nums.length; i++){
        sum -= nums[i]
    }
    
    return sum;
};
