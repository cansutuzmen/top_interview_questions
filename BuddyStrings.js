//Leetcode - Buddy Strings
/**
https://leetcode.com/problems/buddy-strings/
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length < 2 || s.length !== goal.length){
        return false;
    }
    
    if(s.length === 2){
        return goal === s[1] + s[0];
    }
    
    let map = {};
    let numberOfDifferentChars = 0;
    let index1 = -1;
    let index2 = -1;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] !== goal[i]){
            if(index1 === -1){
                index1 = i;
            }else{
                index2 = i;
            }
            numberOfDifferentChars++;
            if(numberOfDifferentChars > 2){
                return false;
            }
        }
        
        if(s[i] in map){
            map[s[i]]++;
        }else{
            map[s[i]] = 1;
        }
    }
    
    if(numberOfDifferentChars === 0 && Object.keys(map).length !== s.length){
        return true;        
    }
    
    if(numberOfDifferentChars === 2){
        return goal === s.substring(0, index1) + s[index2] + s.substring(index1 + 1, index2) + s[index1] + s.substring(index2 + 1, s.length);
    }
    
    return false;
};

