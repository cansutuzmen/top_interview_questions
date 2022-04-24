//Leetcode - Sort the Matrix Diagonally
/**
https://leetcode.com/problems/sort-the-matrix-diagonally/
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} height
 * @param {number} width
 * @param {number[][]} mat
 * @return {void}
 */
var sort = function(x, y, height, width, mat) {
    let currentArr = [];
    let currentY = y;
    let currentX = x;
    
    while (currentY < height && currentX < width) {
        currentArr.push(mat[currentY][currentX]);
        currentY++;
        currentX++;
    }
   
    currentArr.sort((a, b) => a - b);

    let i = currentArr.length - 1;
    while(i >= 0){
        currentY--;
        currentX--;
        mat[currentY][currentX] = currentArr[i];
        i--;
    }
}

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const height = mat.length;
    const width = mat[0].length;
    
    for(let i = 0; i < height; i++){
        sort(0, i, height, width, mat)
    }
    
    for(let j = 1; j < width; j++){
        sort(j, 0,  height, width, mat)
    }
  
    return mat;
};


