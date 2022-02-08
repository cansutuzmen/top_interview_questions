//LeetCode - Remove Duplicates from Sorted Array
/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;
  
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            nums.splice(j,1);
            j--;
        }else {
            i = j;
        } 
    }
  
    return nums.length;
};

