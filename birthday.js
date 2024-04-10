// Hackerrank - Subarray Divison
// link --> https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

function birthday(s, d, m) {
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    let sum = 0;
    for(let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if(sum === d) {
      count++;
    }
  }
  
  return count;
}
