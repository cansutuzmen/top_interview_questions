/**
HackerRank - New Year Chaos

https://www.hackerrank.com/challenges/new-year-chaos/problem
**/

function minimumBribes(q) {
    let numberOfBribes = 0;
    let i = q.length - 1;
    let isChaotic = false;
    
    while(i >= 0){
        if(q[i] - i > 3){
            isChaotic = true;
            break;
        }
        
        let j = q[i] - 2;
        while(j < i){
            if(q[j] > q[i]){
                numberOfBribes++;
            }
            j++;
        }
        i--;
    }
    
    console.log(isChaotic ? "Too chaotic" : numberOfBribes);
    return;
}
