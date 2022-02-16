//LeetCode - Combination sum
/**
https://leetcode.com/problems/combination-sum/
*/

/**
Modification of : https://www.geeksforgeeks.org/combinational-sum/
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if(candidates.length === 1 && candidates[0] > target){
       return [];
    }
    
    let map = new Set([...candidates]);
    candidates = [...map];
    candidates.sort();
    
    let result = [];
    let temp = [];
    
    findCombination(candidates, target, 0, temp, result);
    
    return result;
};

function findCombination(candidates, target, index, temp, result){
    if(target === 0){
        result.push([...temp]);
        return;
    }
    
    for(let i = index; i < candidates.length; i++){
        const difference = target - candidates[i];
        if(difference >= 0){
            temp.push(candidates[i]);
            findCombination(candidates, difference, i, temp, result);
            temp.splice(temp.indexOf(candidates[i]), 1);
        }
    }
}

