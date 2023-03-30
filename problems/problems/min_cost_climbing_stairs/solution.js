/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost, i = cost.length - 3) => {
  if (i < 0) return Math.min(cost[0], cost[1]);

  cost[i] += Math.min(cost[i + 1], cost[i + 2]);

  return minCostClimbingStairs(cost, --i);
};
