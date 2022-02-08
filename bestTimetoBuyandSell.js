//LeetCode - Best Time to Buy and Sell Stock  II
/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
*/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = -1,
    sell = 0,
    profit = 0;
    
    for(let i = 0; i < prices.length; i++){
        if ((prices[i] < prices[i+1]) && buy === -1) {
           buy = prices[i];
        }
        
        if (((prices[i] > prices[i+1]) || (i === prices.length-1)) && buy !== -1) {
            sell = prices[i];
            profit += sell - buy;
            buy = -1;
            sell = 0;
        }
    }
    
    return profit;
};


