//LeetCode - count and say
/*
https://leetcode.com/problems/count-and-say/
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = "1",
  temp = "",
  last =  "",
  count = 0;

  for (let i = 1; i < n; i++) {
    temp = "";
    last = "";
    count = 0;

    for (let j = 0; j < str.length; j++) {
      if (last === "") {
        last = str[j];
        count = 1;
        continue;
      }
      
      if (str[j] === last) {
        count += 1;
      } else {
        temp += `${count}${last}`;
        last = str[j];
        count = 1;
      }
    }

    if (last) {
     tmp += `${count}${last}`;
    }

    str = tmp;
  }

  return str;
};





