import {solveNQueens} from './51.js'
console.log(solveNQueens)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res=[]
  const m=matrix.length;
  const n=matrix[0].length
  let top=0,bottom=m-1,left=0,right=n-1;
  while(res.length<m*n){
      for(let i=left;i<=right;i++){
          res.push(matrix[top][i])
      }
      for(let j=top+1;j<=bottom;j++){
          res.push(matrix[j][right])
      }
      if(top<bottom && left<right){
          for(let i=right-1;i>=left;i--){
              res.push(matrix[bottom][i])
          }
          for(let j=bottom-1;j>top;j--){
              res.push(matrix[j][left])
          }
      }
      top++
      left++
      bottom--
      right--
  }
  return res
};