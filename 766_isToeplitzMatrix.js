/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length
  const min = Math.min(m,n)
  const map = {}
  for (let diff = 0-(m-1); diff <= n-1; diff++) {
    if(diff<0) {
      map[diff]=matrix[0-diff][0]
    } else {
      map[diff]=matrix[0][diff]
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (matrix[i][j] != map[j-i]) {
            return false;
        }
    }
}
  return true
};

[[[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]], [[1, 2], [2, 2]],[[18],[66]]].forEach((A) => {
  console.log(isToeplitzMatrix(A))
})