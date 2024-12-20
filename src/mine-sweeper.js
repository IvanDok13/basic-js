const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resMatrix = [];
  matrix.map((row, index) => {
    let subMatrix = [];
    row.map((_, index2) => {
      let sub = 0;
      if (index > 0 && index2 > 0) {
        sub += matrix[index - 1][index2 - 1];
      }
      if (index > 0) {
        sub += matrix[index - 1][index2];
      }
      if (index > 0 && index2 < row.length - 1) {
        sub += matrix[index - 1][index2 + 1];
      }
      if (index2 > 0) {
        sub += matrix[index][index2 - 1];
      }
      if (index2 < row.length - 1) {
        sub += matrix[index][index2 + 1];
      }
      if (index < matrix.length - 1 && index2 > 0) {
        sub += matrix[index + 1][index2 - 1];
      }
      if (index < matrix.length - 1) {
        sub += matrix[index + 1][index2];
      }
      if (index < matrix.length - 1 && index2 < row.length - 1) {
        sub += matrix[index + 1][index2 + 1];
      }
      subMatrix.push(sub);
    });
    resMatrix.push(subMatrix);
  });
  return resMatrix;
}

module.exports = {
  minesweeper,
};
