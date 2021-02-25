/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
//行列相等
var transpose = function(matrix) {
  const n = matrix.length
  for(let i =0;i<n;i++){
    for(let j =i+1;j<n;j++){
      let temp = matrix[i][j]
      matrix[i][j]=matrix[j][i]
      matrix[j][i]=temp
    }
  }
  return matrix
};
//行列不相等
var transpose = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const res = []
  for(let i =0;i<n;i++){
    res.push([])
    for(let j =0;j<m;j++){
      res[i][j]=matrix[j][i]
    }
  }
  return res
};