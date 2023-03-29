/**
 * @param {character[][]} grid
 * @return {number}
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function (grid) {
  let sum = 0;

  const count = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[i].length ||
      grid[i][j] == 0
    ) {
      return;
    }
    grid[i][j] = 0;

    count(i - 1, j);
    count(i + 1, j);
    count(i, j - 1);
    count(i, j + 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        sum++;
        count(i, j);
      }
    }
  }

  return sum;
};