/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minPrice = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    const curPrice = prices[i];
    const cur = curPrice - minPrice;
    if (max < cur) {
      max = cur;
    } 
    if (curPrice < minPrice) {
      minPrice = curPrice;
    }
  }

  return max;

  // too slow

  // let max = 0;
  // for (let i = prices.length - 1; i >= 0; i--) {
  //   const min = Math.min(...prices);
  //   let last = prices.slice(-1);
  //   prices.pop();
  //   if (max < last - min) {
  //     max = last - min;
  //   }
  // }
  // return max;
};