/**
Hackerrank - Flipping the Matrix
https://www.hackerrank.com/challenges/flipping-the-matrix/problem
**/

function flippingMatrix(matrix) {
    let sum = 0;
    let quadrantSize = matrix.length/2;
  
    for(let i = 0; i < quadrantSize; i++){
      for(let j = 0; j < quadrantSize; j++){
        const q1 = matrix[i][(2 * quadrantSize) - j - 1];
        const q2 = matrix[i][j];
        const q3 = matrix[(2 * quadrantSize) - i - 1][j];
        const q4 = matrix[(2 * quadrantSize) - i - 1][(2 * quadrantSize) - j - 1];
        
        sum+= Math.max(q1, q2, q3, q4);
      }
    }
  
    return sum;
    
}



