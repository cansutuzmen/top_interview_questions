/**
Hackerrank - Ceaser Cipher
https://www.hackerrank.com/challenges/caesar-cipher-1/problem
*/

function caesarCipher(s, k) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const length = alphabet.length;
    const newK = k % length;
    
    if(newK === 0){
        return s;
    }
    
    let newS = "";
    for(let i = 0; i < s.length; i++){
        const index = alphabet.indexOf(s[i].toLowerCase());
        if(index !== -1){
            const newIndex = index + newK > length - 1 ? index + newK - length : index + newK;
            if(s[i] === s[i].toLowerCase()){
                newS += alphabet[newIndex];
            }else{
                newS += alphabet[newIndex].toUpperCase();   
            }
        }else{
            newS += s[i];
        }
    }
    
    return newS;
}



