//LeetCode - valid anagram
/*
https://leetcode.com/problems/valid-anagram/submissions/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //check input 
    if(s.length !== t.length){
        return false;
    }
    
    return s.split('').sort().join('') === t.split('').sort().join('');
};


