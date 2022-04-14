/**
HackerRank - Palindrome Index
https://www.hackerrank.com/challenges/palindrome-index/problem
**/

function palindromeIndex(s) {
    if(s.length === 1){
        return -1;
    }
    
    const length = s.length;
    let index = 0;
    
    while(s.length > 1){
        if(s[0] !== s[s.length - 1]){
            const first = s.substring(1, s.length);
            if(first === first.split('').reverse().join('')){
                return index;
            }
            const second = s.substring(0, s.length -1);
            if(second === second.split('').reverse().join('')){
                return length - index - 1;
            }
        }else{
            s = s.substring(1, s.length - 1);
            index++;
        }
    }
    
    return -1;
}

